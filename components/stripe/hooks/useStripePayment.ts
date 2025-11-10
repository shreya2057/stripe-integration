// import { useStripe, useElements, } from "@stripe/react-stripe-js";
// import { FormEvent, useState } from "react";

// export const useStripePayment = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [errorMessage, setErrorMessage] = useState<string | null>(null);

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (!stripe || !elements) {
//       return;
//     }

//     setIsProcessing(true);
//     setErrorMessage(null);

//     try {
//       const { error } = await stripe.confirmPayment({
//         elements,
//         confirmParams: {
//           return_url: `${window.location.origin}/dashboard`,
//         },
//       });

//       if (error) {
//         setErrorMessage(error.message || "An error occurred");
//         setIsProcessing(false);
//       }
//     } catch (err) {
//       setErrorMessage("An unexpected error occurred");
//       setIsProcessing(false);
//     }
//   };

//   return {
//     stripe,
//     elements,
//     isProcessing,
//     errorMessage,
//     handleSubmit,
//   };
// };
