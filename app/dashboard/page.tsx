"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DashboardPage() {
  const router = useRouter();
  const [amount, setAmount] = useState("1000");
  const [parkingId, setParkingId] = useState("parking_123");

  const handleCheckout = () => {
    const params = new URLSearchParams({
      amount,
      parking_id: parkingId,
    });
    router.push(`/dashboard/checkout?${params.toString()}`);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Dashboard</h1>
          <p className="text-lg text-gray-600">
            Manage your payments and checkout
          </p>
        </div>

        {/* Main Content */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Checkout Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-lg mb-4">
              <svg
                className="w-6 h-6 text-indigo-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Quick Checkout
            </h2>
            <p className="text-gray-600 mb-6">
              Process a payment securely with Stripe
            </p>

            <div className="space-y-4 mb-6">
              <div>
                <label
                  htmlFor="amount"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Amount (cents)
                </label>
                <input
                  id="amount"
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="1000"
                  min="50"
                />
                <p className="text-xs text-gray-500 mt-1">
                  ${(Number(amount) / 100).toFixed(2)} USD
                </p>
              </div>

              <div>
                <label
                  htmlFor="parkingId"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Parking ID
                </label>
                <input
                  id="parkingId"
                  type="text"
                  value={parkingId}
                  onChange={(e) => setParkingId(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="parking_123"
                />
              </div>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Proceed to Checkout
            </button>
          </div>

          {/* Stats Card 1 */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Total Payments
            </h3>
            <p className="text-3xl font-bold text-gray-900">$0.00</p>
            <p className="text-sm text-gray-500 mt-2">All time</p>
          </div>

          {/* Stats Card 2 */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Transactions
            </h3>
            <p className="text-3xl font-bold text-gray-900">0</p>
            <p className="text-sm text-gray-500 mt-2">This month</p>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            How it works
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex gap-4">
              <div className="shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  Enter Details
                </h4>
                <p className="text-sm text-gray-600">
                  Set the amount and parking ID for your transaction
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  Secure Checkout
                </h4>
                <p className="text-sm text-gray-600">
                  Complete payment using Stripe's secure payment form
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  Confirmation
                </h4>
                <p className="text-sm text-gray-600">
                  Receive instant confirmation of your payment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
