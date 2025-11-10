import { PaymentElement } from "@stripe/react-stripe-js";

export const FormStripe = () => {
  return (
    <form className="w-full flex flex-col gap-4 items-center justify-center">
      <div className="flex flex-col gap-4 bg-white rounded-lg p-6 border border-gray-200 items-center justify-center shadow-md">
        <PaymentElement className="w-96" />
        <div className="flex w-full px-4">
          <button
            type="submit"
            className="w-full bg-indigo-700 text-white p-3 rounded-md text-sm"
          >
            Pay Now
          </button>
        </div>
      </div>
    </form>
  );
};
