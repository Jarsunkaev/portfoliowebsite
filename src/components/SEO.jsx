import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "BitCanvas - Webfejlesztés & Digitális Megoldások",
  description = "Professzionális webfejlesztési szolgáltatások egyedi weboldalakkal, e-kereskedelmi megoldásokkal, fizetési integrációval és admin platformokkal. Szakértő fejlesztés modern vállalkozásoknak.",
  keywords = "webfejlesztés, egyedi weboldalak, e-kereskedelmi megoldások, fizetési integráció, admin platformok, React fejlesztés, JavaScript, reszponzív design, SEO optimalizálás, magyar webfejlesztés",
  image = "/Bitcanvas.png",
  url = "https://www.bitcanvas.hu",
  type = "website",
  author = "BitCanvas",
  publishedTime,
  modifiedTime,
  section,
  tags = []
}) => {
  const fullTitle = title.includes('BitCanvas') ? title : `${title} | BitCanvas`;
  const fullImageUrl = image.startsWith('http') ? image : `${url}${image}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Hungarian" />
      <meta name="revisit-after" content="7 days" />
      <meta name="geo.region" content="HU" />
      <meta name="geo.country" content="Hungary" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="BitCanvas" />
      <meta property="og:locale" content="hu_HU" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:site" content="@bitcanvas" />
      <meta name="twitter:creator" content="@bitcanvas" />
      
      {/* Article specific meta tags */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {section && <meta property="article:section" content={section} />}
      {tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#4A5D23" />
      <meta name="msapplication-TileColor" content="#4A5D23" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="BitCanvas" />
      
      {/* Structured Data - Organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "BitCanvas",
          "url": "https://www.bitcanvas.hu",
          "logo": "https://www.bitcanvas.hu/Bitcanvas.png",
          "description": "Professzionális webfejlesztési szolgáltatások egyedi weboldalakkal, e-kereskedelmi megoldásokkal, fizetési integrációval és admin platformokkal.",
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "email": "info@bitcanvas.dev",
            "availableLanguage": "Hungarian"
          },
          "sameAs": [
            "https://github.com/bitcanvas",
            "https://linkedin.com/company/bitcanvas"
          ],
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "HU",
            "addressRegion": "Hungary"
          },
          "inLanguage": "hu"
        })}
      </script>
      
      {/* Structured Data - WebSite */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "BitCanvas",
          "url": "https://www.bitcanvas.hu",
          "description": "Professzionális webfejlesztési szolgáltatások",
          "inLanguage": "hu",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://www.bitcanvas.hu/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
