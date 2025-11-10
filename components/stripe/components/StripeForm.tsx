"use client";

import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { StripeFormFooter } from "./StripeFormFooter";
import { useState } from "react";
import { StripeFormSkeleton } from "./StripeFormSkeleton";

export const StripeForm = () => {
  const [isReady, setIsReady] = useState(false);
  const stripe = useStripe();
  return (
    <div className="w-full flex flex-col gap-4 items-center justify-center">
      <form
        // onSubmit={handleSubmit}
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
              disabled={!stripe || !isReady}
              className={
                "w-full p-3 rounded-md text-sm font-medium transition-all bg-indigo-700  text-white"
              }
            >
              Pay Now
            </button>
          </div>
        </div>
      </form>
      <StripeFormFooter />
    </div>
  );
};
