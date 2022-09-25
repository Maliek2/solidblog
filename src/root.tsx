// @refresh reload
import { Links, Meta, Routes, Scripts } from "solid-start/root";
import { ErrorBoundary } from "solid-start/error-boundary";
import { Suspense } from "solid-js";

export default function Root() {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
 
<script>
  // Make sure that the properties exist on the window.
  window.googlefc = window.googlefc || {};
  window.googlefc.ccpa = window.googlefc.ccpa || {}
  window.googlefc.callbackQueue = window.googlefc.callbackQueue || [];

  // Queue the callback on the callbackQueue.
  googlefc.callbackQueue.push({
    'CONSENT_DATA_READY':
    () => __tcfapi('getTCData', 0, (data, success) => console.log(data))
  });
</script>
<script>
  // Make sure that the properties exist on the window.
  window.googlefc = window.googlefc || {};
  window.googlefc.ccpa = window.googlefc.ccpa || {}
  window.googlefc.callbackQueue = window.googlefc.callbackQueue || [];

  // Queue the callback on the callbackQueue.
  googlefc.callbackQueue.push({
    'CONSENT_DATA_READY':
    () => __uspapi('getUSPData', 1, (data, success) => console.log(data))
  });
</script>

<script>
  // Make sure that the properties exist on the window.
  window.googlefc = window.googlefc || {};
  window.googlefc.ccpa = window.googlefc.ccpa || {}
  window.googlefc.callbackQueue = window.googlefc.callbackQueue || [];

  // Signals that the default DNS link will be overridden.
  googlefc.ccpa.overrideDnsLink = true;

  // Register the callback for the initial CCPA data.
  googlefc.callbackQueue.push({
      'INITIAL_CCPA_DATA_READY': () => {
        if (googlefc.ccpa.getInitialCcpaStatus() ===
            googlefc.ccpa.InitialCcpaStatusEnum.NOT_OPTED_OUT) {
          // TODO: Display custom CCPA Do Not Sell link here.
        }
      }
    });

// This callback will be called with the user CCPA decision.
const ccpaCompletionCallback = (userOptedOut) => {
  if (userOptedOut) {
    // TODO: Hide custom CCPA Do Not Sell link here.
  }
}
// Invoke the CCPA confirmation dialog when the user clicks the link.
document.getElementById("your-custom-ccpa-do-not-sell-link").addEventListener(
  "click", () => googlefc.ccpa.openConfirmationDialog(ccpaCompletionCallback));

  // Make sure that the properties exist on the window.
  window.googlefc = window.googlefc || {};
  window.googlefc.ccpa = window.googlefc.ccpa || {}
  window.googlefc.callbackQueue = window.googlefc.callbackQueue || [];

  // Queue the callback on the callbackQueue.
  googlefc.callbackQueue.push({
    'AD_BLOCK_DATA_READY':
    () => {
      switch (googlefc.getAllowAdsStatus()) {
        case googlefc.AllowAdsStatusEnum.ADS_NOT_ALLOWED:
          // Insert handling for cases where the user has not allowed ads.
          // The user may have never been an ad blocker.
          break;
        case googlefc.AllowAdsStatusEnum.ADS_ALLOWED:
          // Insert handling for cases where the user saw the ad blocking
          // message and allowed ads on the site.
          break;
        case googlefc.AllowAdsStatusEnum.UNKNOWN:
          // Insert handling for unknown cases.
          break;
      }
    }
  });
</script>
      </head>
      <body>
        <ErrorBoundary>
          <Suspense>
            <Routes />
          </Suspense>
        </ErrorBoundary>
        <Scripts />
      </body>
    </html>
  );
}
