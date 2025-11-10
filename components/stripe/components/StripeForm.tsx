"use client";

import { PaymentElement } from "@stripe/react-stripe-js";
// import { useStripePayment } from "../hooks/useStripePayment";
import { StripeFormFooter } from "./StripeFormFooter";
import { StripeErrorMessage } from "./StripeErrorMessage";
import { Stripe, StripeElements } from "@stripe/stripe-js";

export const StripeForm = ({ stripe }: { stripe: Stripe }) => {
  // const { isProcessing, errorMessage, handleSubmit } = useStripePayment();

  return (
    <div className="w-full flex flex-col gap-4 items-center justify-center">
      <form
        // onSubmit={handleSubmit}
        className="w-full flex flex-col gap-4 items-center justify-center"
      >
        <div className="flex flex-col gap-4 bg-white rounded-lg p-6 border border-gray-200 items-center justify-center shadow-md">
          <PaymentElement
            id="payment-element"
            className="w-96"
            options={{
              layout: "tabs",
            }}
          />
          {/* <StripeErrorMessage message={errorMessage} /> */}
          <div className="flex w-full px-4">
            <button
              type="submit"
              className="w-full bg-indigo-700 text-white p-3 rounded-md text-sm"
              disabled={!stripe}
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
