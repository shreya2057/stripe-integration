import { PaymentElement } from "@stripe/react-stripe-js";

export const CheckoutForm = () => {
  return (
    <form>
      <div className="w-full max-w-md">
        <PaymentElement />
      </div>
    </form>
  );
};
