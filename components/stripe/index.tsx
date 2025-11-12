"use client";

import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useState } from "react";
import { StripeFormFooter, StripeFormSkeleton } from "./components";
import { usePayment } from "@/services/hooks";

export const ReactStripePayment = () => {
  const [isReady, setIsReady] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const { mutate: confirmPayment, isPending } = usePayment();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    confirmPayment({ stripe, elements });
  };

  return (
    <div className="w-full flex flex-col gap-4 items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col gap-4 items-center justify-center"
      >
        <div className="flex flex-col bg-white rounded-lg py-6 px-3 border border-gray-200 items-center shadow-md">
          <PaymentElement
            onReady={() => setIsReady(true)}
            className="w-96 mt-auto"
          />
          {!isReady && <StripeFormSkeleton />}
          <div className="flex w-full p-4 mt-auto">
            <button
              type="submit"
              disabled={!stripe || !isReady || isPending}
              className={
                "w-full p-3 rounded-md text-sm font-medium transition-all bg-indigo-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
              }
            >
              {isPending ? "Processing..." : "Pay Now"}
            </button>
          </div>
        </div>
      </form>
      <StripeFormFooter />
    </div>
  );
};
