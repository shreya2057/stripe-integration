import { NextRequest, NextResponse } from "next/server";
import { Stripe } from "stripe";

export interface PaymentIntentRequest {
  amount: number;
  currency?: string;
  description?: string;
}

export interface PaymentIntentResponse {
  clientSecret?: string;
}

export interface ErrorResponse {
  error: string;
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  typescript: true,
});

export async function POST(request: NextRequest) {
  try {
    const body: PaymentIntentRequest = await request.json();
    const { amount, currency, description } = body;

    if (!amount || amount < 50) {
      return NextResponse.json(
        { error: "Amount must be greater than 50" },
        { status: 400 }
      );
    }
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: currency || "usd",
      description,
      payment_method_types: ["card"],
      metadata: {
        userId: "user_123",
      },
    });
    return NextResponse.json<PaymentIntentResponse>({
      clientSecret: paymentIntent.client_secret!,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create payment intent" },
      { status: 500 }
    );
  }
}
