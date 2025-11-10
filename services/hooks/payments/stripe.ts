import { createPaymentIntent } from "@/services/api/payments/stripe";
import { useQuery } from "@tanstack/react-query";

export const useCreatePaymentIntent = (amount: number) => {
  return useQuery({
    queryKey: ["create-payment-intent", amount],
    queryFn: () => createPaymentIntent(amount),
  });
};
