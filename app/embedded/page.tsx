"use client";
import { CheckoutForm } from "@/components/form";
import { StripeProvider } from "@/provider/StripeProvider";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const amount = 1000;
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  useEffect(() => {
    const createPaymentIntent = async () => {
      try {
        const response = await fetch("/api/stripe", {
          method: "POST",
          body: JSON.stringify({ amount }),
        });
        if (!response.ok) {
          throw new Error("Failed to create payment intent");
        }
        const data = await response.json();
        setClientSecret(data?.clientSecret);
      } catch (error) {
        console.error("Error creating payment intent:", error);
      }
    };
    createPaymentIntent();
  }, [amount]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      {clientSecret ? (
        <StripeProvider clientSecret={clientSecret}>
          <CheckoutForm />
        </StripeProvider>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
