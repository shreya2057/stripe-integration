export const AmountDetails = ({ amount }: { amount: number }) => {
  return (
    <div className="flex flex-col gap-4 flex-[40%] h-full items-center justify-center bg-gray-100">
      <div className="flex flex-col gap-4 bg-white rounded-lg p-6 w-96 border border-gray-200 items-center justify-center shadow-md">
        <h2 className="text-lg font-bold">Order Summary</h2>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${amount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
