// import { Elements } from "@stripe/react-stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "",
  {
    locale: "auto",
    developerTools: {
      assistant: { enabled: false },
    },
    betas: [],
  }
);

export const StripeProvider = ({
  children,
  clientSecret,
}: {
  children: React.ReactNode;
  clientSecret: string;
}) => {
  const options: StripeElementsOptions = {
    clientSecret: clientSecret,
    appearance: {
      theme: "flat",
      variables: {
        colorPrimary: "#000",
        colorBackground: "#fff",
      },
      rules: {
        ".Input": {
          border: "1px solid #e0e0e0",
          borderRadius: "6px",
        },
        ".Input::placeholder": {
          fontSize: "14px",
        },
      },
    },
    locale: "en",
    loader: "always",
  };
  return (
    <Elements stripe={stripePromise} options={options}>
      {children}
    </Elements>
  );
};
