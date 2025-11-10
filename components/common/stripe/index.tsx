"use client";

import { FormStripe } from "@/components/form/FormStripe";
import { StripeProvider } from "@/provider/StripeProvider";
import { useCreatePaymentIntent } from "@/services/hooks";
import { ImSpinner } from "react-icons/im";

export const StripeElement = ({ amount }: { amount: number }) => {
  const { data: clientSecret, isPending } = useCreatePaymentIntent(amount);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans w-full">
      {isPending ? (
        <ImSpinner className="animate-spin" />
      ) : (
        <StripeProvider clientSecret={clientSecret}>
          <FormStripe />
        </StripeProvider>
      )}
    </div>
  );
};
