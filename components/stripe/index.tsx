"use client";
import { StripeProvider } from "@/provider/StripeProvider";
import { useCreatePaymentIntent } from "@/services/hooks";
import { ImSpinner } from "react-icons/im";
import { ToastContainer } from "react-toastify";
import { StripeElement } from "./components";

export const ReactStripe = ({ amount }: { amount: number }) => {
  const { data: clientSecret, isPending } = useCreatePaymentIntent(amount);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans w-full">
      {isPending ? (
        <ImSpinner className="animate-spin" />
      ) : (
        <StripeProvider clientSecret={clientSecret}>
          <StripeElement />
        </StripeProvider>
      )}
      <ToastContainer />
    </div>
  );
};
