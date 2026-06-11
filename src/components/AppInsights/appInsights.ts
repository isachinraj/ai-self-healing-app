import { ApplicationInsights } from "@microsoft/applicationinsights-web";

const appInsights = new ApplicationInsights({
  config: {
    connectionString: "InstrumentationKey=ad74f2a7-ad6f-4757-b526-a044dbbd8895;IngestionEndpoint=https://southcentralus-3.in.applicationinsights.azure.com/;LiveEndpoint=https://southcentralus.livediagnostics.monitor.azure.com/;ApplicationId=e6b1e70d-30d3-488b-aeb6-7594ee540633"
  }
});

appInsights.loadAppInsights();

// Capture errors
window.onerror = function (message, source, lineno, colno, error) {
  appInsights.trackException({ exception: error || new Error(message) });
};

export default appInsights;
