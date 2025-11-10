interface StripeErrorMessageProps {
  message: string | null;
}

export const StripeErrorMessage = ({ message }: StripeErrorMessageProps) => {
  if (!message) return null;

  return (
    <div className="w-full px-4">
      <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded text-sm">
        {message}
      </div>
    </div>
  );
};
