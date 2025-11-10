import { PaymentElement } from "@stripe/react-stripe-js";

export const FormStripe = () => {
  return (
    <div className="w-full flex flex-col gap-4 items-center justify-center">
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
      <div className="flex gap-4 items-center justify-between">
        <span className="text-sm text-gray-500">
          Powered by <span className="font-bold">stripe</span>
        </span>
        <div className="block border-r border-gray-300 h-5" />
        <a
          href="https://stripe.com/legal/consumer"
          className="text-sm text-gray-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Terms
        </a>
        <a
          href="https://stripe.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-400 hover:underline"
        >
          Privacy
        </a>
      </div>
    </div>
  );
};
