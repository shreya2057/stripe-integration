import { ReactStripePayment } from "@/components";
import { StripeProvider } from "@/provider/StripeProvider";
import { useCreatePaymentIntent } from "@/services/hooks";
import { useSearchParams } from "next/navigation";
import { BiLoader } from "react-icons/bi";
import { AmountDetails } from "../components";

export const StripePayments = () => {
  const searchParams = useSearchParams();
  const amount = searchParams.get("amount");
  const parkingId = searchParams.get("parking_id");
  const { data: clientSecret, isPending } = useCreatePaymentIntent({
    amount,
    parkingId,
  });
  return (
    <div className="flex h-screen items-center justify-center bg-zinc-50 font-sxans w-full">
      <div className="flex gap-20 justify-center bg-white p-10 px-12 rounded-lg shadow-md">
        <AmountDetails amount={Number(amount)} />
        <div className="flex flex-col gap-4 items-center justify-center min-w-[410px] min-h-[420px]">
          {isPending ? (
            <BiLoader className="animate-spin" />
          ) : (
            <StripeProvider clientSecret={clientSecret}>
              <ReactStripePayment />
            </StripeProvider>
          )}
        </div>
      </div>
    </div>
  );
};
