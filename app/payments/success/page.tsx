"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Suspense } from "react";
import { BiLoader } from "react-icons/bi";

const SuccessPageContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const paymentId = searchParams.get("payment_id");
  const amount = searchParams.get("amount");

  const formattedAmount = amount ? (Number(amount) / 100).toFixed(2) : "0.00";

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          {/* Success Icon */}
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Payment Successful!
          </h1>
          <p className="text-gray-600 mb-8">
            Your payment has been processed successfully
          </p>

          {/* Payment Details */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Amount Paid</span>
                <span className="text-lg font-bold text-gray-900">
                  ${formattedAmount}
                </span>
              </div>
              {paymentId && (
                <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                  <span className="text-sm text-gray-600">Payment ID</span>
                  <span className="text-sm font-mono text-gray-900">
                    {paymentId.substring(0, 20)}...
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-3">
            <button
              onClick={() => router.push("/dashboard")}
              className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Return to Dashboard
            </button>
            <button
              onClick={() => window.print()}
              className="w-full bg-white text-gray-700 py-3 px-6 rounded-lg font-medium border border-gray-300 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Print Receipt
            </button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>A confirmation email has been sent to your registered email address.</p>
        </div>
      </div>
    </div>
  );
};

export default function PaymentSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen items-center justify-center bg-zinc-50">
          <BiLoader className="animate-spin text-4xl text-indigo-600" />
        </div>
      }
    >
      <SuccessPageContent />
    </Suspense>
  );
}

