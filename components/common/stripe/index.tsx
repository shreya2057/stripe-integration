import { StripeProvider } from "@/provider/StripeProvider";
import { CheckoutForm } from "./CheckoutForm";
import { useEffect, useState } from "react";
import { useCreatePaymentIntent } from "@/services/hooks";

export const StripeElement = ({ amount }: { amount: number }) => {
  const { data: clientSecret, isPending } = useCreatePaymentIntent(amount);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans w-full">
      {clientSecret ? (
        <StripeProvider clientSecret={clientSecret}>
          <CheckoutForm />
        </StripeProvider>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
