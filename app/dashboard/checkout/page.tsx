"use client";

import { StripePayments } from "@/features/payments";
import { Suspense } from "react";
import { BiLoader } from "react-icons/bi";

const CheckoutPageContent = () => {
  return <StripePayments />;
};

export default function CheckoutPage() {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen items-center justify-center bg-zinc-50">
          <BiLoader className="animate-spin text-4xl text-indigo-600" />
        </div>
      }
    >
      <CheckoutPageContent />
    </Suspense>
  );
}

