import { useEffect } from 'react';

const SITE_URL = 'https://www.gueindustries.com';
const DEFAULT_IMAGE = `${SITE_URL}/logo.png`;

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

function upsertLink(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('link');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

function upsertJsonLd(id, data) {
  let element = document.head.querySelector(`#${id}`);

  if (!element) {
    element = document.createElement('script');
    element.type = 'application/ld+json';
    element.id = id;
    document.head.appendChild(element);
  }

  element.textContent = JSON.stringify(data);
}

export default function Seo({
  title,
  description,
  path = '/',
  image = DEFAULT_IMAGE,
  type = 'website',
  schema,
  robots = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
}) {
  useEffect(() => {
    const canonicalUrl = new URL(path, `${SITE_URL}/`).toString();

    document.title = title;

    upsertMeta('meta[name="description"]', { name: 'description', content: description });
    upsertMeta('meta[name="robots"]', {
      name: 'robots',
      content: robots,
    });

    upsertLink('link[rel="canonical"]', { rel: 'canonical', href: canonicalUrl });

    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description });
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: type });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl });
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: image });
    upsertMeta('meta[property="og:image:alt"]', { property: 'og:image:alt', content: 'GUE Industrial Parks Ltd logo' });
    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: 'GUE Industrial Parks Ltd' });
    upsertMeta('meta[property="og:locale"]', { property: 'og:locale', content: 'en_NG' });

    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title });
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description });
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: image });

    if (schema) {
      upsertJsonLd('route-jsonld', schema);
    }

    return () => {
      const script = document.head.querySelector('#route-jsonld');
      if (script) {
        script.remove();
      }
    };
  }, [description, image, path, robots, schema, title, type]);

  return null;
}