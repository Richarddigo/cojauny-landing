import { FeedbackInput, BetaSignupInput } from '@/lib/validation';

export class ApiError extends Error {
  code?: string;
  details?: unknown;
  constructor(message: string, code?: string, details?: unknown) {
    super(message);
    this.code = code;
    this.details = details;
  }
}

/**
 * Generic helper for making API requests.
 */
async function apiRequest<T>(endpoint: string, data: unknown): Promise<T> {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    const normalizedError =
      errorData && typeof errorData === 'object'
        ? (errorData as Record<string, unknown>)
        : {};

    throw new ApiError(
      typeof normalizedError.error === 'string' ? normalizedError.error : `API Error: ${response.status}`,
      typeof normalizedError.errorCode === 'string' ? normalizedError.errorCode : undefined,
      normalizedError.details
    );
  }

  return response.json();
}

export const apiClient = {
  feedback: {
    submit: (data: FeedbackInput) => apiRequest<{ success: boolean }>('/api/feedback', data),
  },
  beta: {
    signup: async (data: BetaSignupInput) => {
      const result = await apiRequest<{
        success: boolean;
        duplicate?: boolean;
        errorCode?: string;
        confirmationToken: string;
        referralLink?: string;
      }>('/api/beta-signups', data);
      if (result.duplicate || result.errorCode === 'beta_duplicate_email') {
        throw new ApiError('Duplicate email', 'beta_duplicate_email', result);
      }
      return result;
    },
  },
  referral: {
    visit: (referralCode: string) => apiRequest<{ success: boolean }>('/api/referral/visit', { referralCode }),
    stats: (email: string) => fetch(`/api/referral/stats?email=${encodeURIComponent(email)}`).then(res => res.json()),
  }
};
