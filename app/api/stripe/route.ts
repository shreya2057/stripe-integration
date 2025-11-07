import { stripe } from "@/utils";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

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
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        userId: "user_123",
      },
    });
    return NextResponse.json<PaymentIntentResponse>({
      clientSecret: paymentIntent.client_secret!,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create payment intent" },
      { status: 500 }
    );
  }
}
