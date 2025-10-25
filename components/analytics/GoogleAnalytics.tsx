'use client';

import Script from 'next/script';

export default function GoogleAnalytics({ measurementId }: { measurementId: string }) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}

// Event tracking helper
export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, eventParams);
  }
};

// Conversion tracking
export const trackConversion = (conversionId: string, value?: number) => {
  trackEvent('conversion', {
    send_to: conversionId,
    value: value,
    currency: 'USD',
  });
};

// Quote form submission tracking
export const trackQuoteSubmission = (serviceType: string, estimatedValue: number) => {
  trackEvent('generate_lead', {
    event_category: 'engagement',
    event_label: serviceType,
    value: estimatedValue,
  });
};

// Phone click tracking
export const trackPhoneClick = (businessName: string) => {
  trackEvent('phone_click', {
    event_category: 'engagement',
    event_label: businessName,
  });
};
