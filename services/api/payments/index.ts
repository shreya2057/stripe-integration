import { Stripe, StripeElements } from "@stripe/stripe-js";

export const createPaymentIntent = async (amount: number) => {
  try {
    const response = await fetch("/api/stripe/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    return data?.clientSecret;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const confirmPayment = async ({
  stripe,
  elements,
}: {
  stripe: Stripe;
  elements: StripeElements;
}) => {
  try {
    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {},
      redirect: "if_required",
    });

    if (error) {
      throw new Error(error.message);
    } else {
      return {
        amount: paymentIntent?.amount,
        id: paymentIntent?.id,
      };
    }
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
