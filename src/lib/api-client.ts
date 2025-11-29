import { ContactInput, FeedbackInput, BetaSignupInput } from '@/lib/validation';

export class ApiError extends Error {
  code?: string;
  details?: any;
  constructor(message: string, code?: string, details?: any) {
    super(message);
    this.code = code;
    this.details = details;
  }
}

/**
 * Generic helper for making API requests.
 */
async function apiRequest<T>(endpoint: string, data: any): Promise<T> {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new ApiError(
      errorData.error || `API Error: ${response.status}`,
      errorData.errorCode,
      errorData.details
    );
  }

  return response.json();
}

export const apiClient = {
  contact: {
    submit: (data: ContactInput) => apiRequest<{ success: boolean }>('/api/contact', data),
  },
  feedback: {
    submit: (data: FeedbackInput) => apiRequest<{ success: boolean }>('/api/feedback', data),
  },
  beta: {
    signup: (data: BetaSignupInput) => apiRequest<{ success: boolean; id: string; confirmationToken: string; referralLink?: string }>('/api/beta-signups', data),

  },
  referral: {
    visit: (referralCode: string) => apiRequest<{ success: boolean }>('/api/referral/visit', { referralCode }),
    stats: (email: string) => fetch(`/api/referral/stats?email=${encodeURIComponent(email)}`).then(res => res.json()),
  }
};
