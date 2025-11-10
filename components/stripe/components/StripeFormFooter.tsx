export const StripeFormFooter = () => {
  return (
    <div className="flex gap-4 items-center justify-between">
      <span className="text-sm text-gray-500">
        Powered by <span className="font-bold">stripe</span>
      </span>
      <div className="block border-r border-gray-300 h-5" />
      <a
        href="https://stripe.com/legal/consumer"
        className="text-sm text-gray-400 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Terms
      </a>
      <a
        href="https://stripe.com/privacy"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-gray-400 hover:underline"
      >
        Privacy
      </a>
    </div>
  );
};
