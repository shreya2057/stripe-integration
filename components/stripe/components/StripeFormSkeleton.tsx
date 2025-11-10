export const StripeFormSkeleton = () => {
  return (
    <div className="flex flex-col gap-3 items-center justify-center px-6 w-96">
      <div className="animate-pulse space-y-4 w-full">
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
      </div>
    </div>
  );
};
