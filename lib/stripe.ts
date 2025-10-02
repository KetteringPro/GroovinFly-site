// lib/stripe.ts
import Stripe from "stripe";

let stripeSingleton: Stripe | null = null;

export function getStripe(): Stripe {
  if (stripeSingleton) return stripeSingleton;
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error("STRIPE_SECRET_KEY is not set");
  // Do NOT pass apiVersion — avoids TS literal mismatch errors
  stripeSingleton = new Stripe(key);
  return stripeSingleton;
}