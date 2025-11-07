import { Elements } from "@stripe/react-stripe-js";
import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export const StripeProvider = ({
  children,
  clientSecret,
}: {
  children: React.ReactNode;
  clientSecret: string;
}) => {
  const options: StripeElementsOptions = {
    clientSecret,
    appearance: {
      theme: "stripe",
      variables: {
        colorPrimary: "#000000",
      },
    },
    locale: "en",
  };
  return (
    <Elements stripe={stripePromise} options={options}>
      {children}
    </Elements>
  );
};
