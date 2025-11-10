"use client";

import { useElements, useStripe } from "@stripe/react-stripe-js";
import { StripeFormSkeleton } from "./StripeFormSkeleton";
import { Stripe } from "@stripe/stripe-js";
import { StripeForm } from "./StripeForm";

export const StripeElement = () => {
  const elements = useElements();
  const stripe = useStripe();
  if (!elements || !stripe) return <StripeFormSkeleton />;
  console.log(elements, stripe);
  return <StripeForm stripe={stripe as Stripe} />;
};
