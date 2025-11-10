import { ReactStripe } from "@/components/stripe";

export default function Dashboard() {
  const amount = 1000;
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans w-full">
      <div className="flex w-full h-full bg-white rounded-lg justify-center">
        <div className="flex flex-col gap-4 flex-[40%] h-full items-center justify-center bg-gray-100">
          <div className="flex flex-col gap-4 bg-white rounded-lg p-6 w-96 border border-gray-200 items-center justify-center shadow-md">
            <h2 className="text-lg font-bold">Order Summary</h2>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$100</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 flex-[60%] h-full items-center justify-center">
          <ReactStripe amount={amount} />
        </div>
      </div>
    </div>
  );
}
