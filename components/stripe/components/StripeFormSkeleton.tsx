export const StripeFormSkeleton = () => {
  return (
    <div className="w-full flex flex-col gap-4 items-center justify-center">
      <div className="w-full flex flex-col gap-4 items-center justify-center">
        <div className="flex flex-col gap-3 bg-white rounded-lg p-6 border border-gray-200 items-center justify-center shadow-md">
          <div className="animate-pulse space-y-4 w-96">
            {/* Card number field skeleton */}
            <div className="space-y-2">
              <div className="h-12 bg-gray-200 rounded"></div>
            </div>
            <div className="space-y-2">
              <div className="h-3 bg-gray-200 rounded w-24"></div>
              <div className="h-12 bg-gray-200 rounded"></div>
            </div>
            {/* Expiry and CVC skeleton */}
            <div className="flex gap-4">
              <div className="flex-1 space-y-2">
                <div className="h-3 bg-gray-200 rounded w-16"></div>
                <div className="h-10 bg-gray-200 rounded"></div>
              </div>
              <div className="flex-1 space-y-2">
                <div className="h-3 bg-gray-200 rounded w-12"></div>
                <div className="h-10 bg-gray-200 rounded"></div>
              </div>
            </div>
            {/* Country/ZIP skeleton */}
            <div className="space-y-2">
              <div className="h-3 bg-gray-200 rounded w-20"></div>
              <div className="h-10 bg-gray-200 rounded"></div>
            </div>
            {/* Button skeleton */}
            <div className="h-12 bg-gray-300 rounded-md mt-2"></div>
          </div>
        </div>
      </div>
      <div className="flex gap-4 items-center justify-between">
        <span className="text-sm text-gray-400">Loading payment form...</span>
      </div>
    </div>
  );
};
