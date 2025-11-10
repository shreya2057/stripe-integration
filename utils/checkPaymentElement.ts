/**
 * Utility function to check if the payment element is loaded
 * Can be called from browser console: window.checkPaymentElement()
 */
export const checkPaymentElement = () => {
  const element = document.getElementById("payment-element");
  
  console.group("🔍 Payment Element Check");
  
  if (!element) {
    console.error("❌ Payment element NOT found in DOM");
    console.log("Expected: <div id='payment-element'>");
    console.groupEnd();
    return false;
  }
  
  console.log("✅ Payment element found!");
  console.log("Element:", element);
  console.log("Has children:", element.children.length > 0);
  console.log("Children count:", element.children.length);
  
  if (element.children.length > 0) {
    console.log("✅ Payment element has content (Stripe loaded)");
    console.log("First child:", element.children[0]);
  } else {
    console.warn("⚠️ Payment element exists but has no content yet");
  }
  
  // Check for Stripe iframe
  const iframe = element.querySelector("iframe");
  if (iframe) {
    console.log("✅ Stripe iframe found:", iframe);
  } else {
    console.log("ℹ️ No iframe found (might be using other payment method)");
  }
  
  console.groupEnd();
  return true;
};

// Make available globally for browser console
if (typeof window !== "undefined") {
  (window as any).checkPaymentElement = checkPaymentElement;
}

