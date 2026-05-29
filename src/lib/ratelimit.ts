import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

/**
 * Distributed sliding-window rate limiters backed by Upstash Redis.
 *
 * Activated automatically when UPSTASH_REDIS_REST_URL and
 * UPSTASH_REDIS_REST_TOKEN are present. When absent (local dev, zero-config
 * previews), all exports are null and the callers skip rate limiting.
 */
const redis =
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
    ? Redis.fromEnv()
    : null;

/** 3 requests per IP per rolling 60 s — for beta signup */
export const betaSignupRatelimit: Ratelimit | null = redis
  ? new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(3, "60 s"),
      analytics: true,
      prefix: "rl:beta",
    })
  : null;

/** 5 requests per IP per rolling 60 s — for feedback */
export const feedbackRatelimit: Ratelimit | null = redis
  ? new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(5, "60 s"),
      analytics: true,
      prefix: "rl:feedback",
    })
  : null;

/** 20 requests per IP per rolling 60 s — for referral visit tracking */
export const referralRatelimit: Ratelimit | null = redis
  ? new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(20, "60 s"),
      analytics: true,
      prefix: "rl:referral",
    })
  : null;
