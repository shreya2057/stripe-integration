import { confirmPayment, createPaymentIntent } from "@/services/api/payments";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export const useCreatePaymentIntent = ({
  amount,
  parkingId,
}: {
  amount: string | null;
  parkingId: string | null;
}) => {
  return useQuery({
    queryKey: ["create-payment-intent", amount, parkingId],
    queryFn: () => createPaymentIntent(Number(amount)),
    enabled: !!amount && !!parkingId,
  });
};

export const usePayment = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: confirmPayment,
    onSuccess: (data) => {
      const params = new URLSearchParams({
        payment_id: data.id || "",
        amount: data.amount?.toString() || "",
      });
      router.push(`/payments/success?${params.toString()}`);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};
