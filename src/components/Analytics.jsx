import { useEffect } from 'react';

export default function Analytics() {
  useEffect(() => {
    const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;
    const plausibleDomain = import.meta.env.VITE_PLAUSIBLE_DOMAIN;
    const addedNodes = [];

    if (gaId) {
      const gaScript = document.createElement('script');
      gaScript.async = true;
      gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      document.head.appendChild(gaScript);
      addedNodes.push(gaScript);

      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag() {
        window.dataLayer.push(arguments);
      };
      window.gtag('js', new Date());
      window.gtag('config', gaId);
    }

    if (plausibleDomain) {
      const plausibleScript = document.createElement('script');
      plausibleScript.defer = true;
      plausibleScript.dataset.domain = plausibleDomain;
      plausibleScript.src = 'https://plausible.io/js/script.js';
      document.head.appendChild(plausibleScript);
      addedNodes.push(plausibleScript);
    }

    return () => {
      addedNodes.forEach((node) => node.remove());
    };
  }, []);

  return null;
}