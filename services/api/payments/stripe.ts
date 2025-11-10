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
