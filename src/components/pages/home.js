import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Home() {
  const [openFaq, setOpenFaq] = useState(null);
  const [visibleSections, setVisibleSections] = useState({});

  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const ctaRef = useRef(null);
  const faqRef = useRef(null);

  const faqs = [
    {
      question: "Where is Bindya Saloon located?",
      answer:
        "Bindya Saloon is located in Ananthapuramu, Andhra Pradesh, offering professional beauty salon services for women.",
    },
    {
      question: "Do you provide bridal makeup in Ananthapuramu?",
      answer:
        "Yes, we provide bridal makeup, engagement makeup, party makeup, hair styling, saree draping, and complete makeover services.",
    },
    {
      question: "Can I book an appointment online?",
      answer:
        "Yes, you can book an appointment through our booking page or contact us directly through phone or WhatsApp.",
    },
    {
      question: "What services are available at Bindya Saloon?",
      answer:
        "We offer facials, hair styling, bridal makeup, threading, waxing, manicure, pedicure, nail art, party makeup, and beauty care services.",
    },
    {
      question: "Is Bindya Saloon suitable for women's beauty care?",
      answer:
        "Yes, Bindya Saloon focuses mainly on women's beauty, grooming, makeup, skincare, and personal care services.",
    },
  ];

  const services = [
    {
      icon: "fa-solid fa-wand-magic-sparkles",
      title: "Bridal Makeup",
      desc: "Elegant bridal, engagement, party makeup and complete special occasion makeover services.",
    },
    {
      icon: "fa-solid fa-scissors",
      title: "Hair Styling",
      desc: "Beautiful hair styling, hair setting, hair care and event-ready looks.",
    },
    {
      icon: "fa-solid fa-spa",
      title: "Facials & Skin Care",
      desc: "Refreshing facial services for glow, freshness and smooth skin care.",
    },
    {
      icon: "fa-solid fa-hand-sparkles",
      title: "Manicure & Pedicure",
      desc: "Relaxing hand and foot care with neat grooming and premium finishing.",
    },
    {
      icon: "fa-solid fa-eye",
      title: "Threading",
      desc: "Clean eyebrow shaping and threading services for a confident look.",
    },
    {
      icon: "fa-solid fa-leaf",
      title: "Waxing",
      desc: "Professional waxing services with hygiene, comfort and smooth finishing.",
    },
    {
      icon: "fa-solid fa-paintbrush",
      title: "Nail Art",
      desc: "Stylish nail art and nail grooming options for a premium beauty look.",
    },
    {
      icon: "fa-regular fa-gem",
      title: "Party Makeover",
      desc: "Look special for parties, family functions, photoshoots and celebrations.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections((prev) => ({
            ...prev,
            [entry.target.id]: true,
          }));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sections = [heroRef, servicesRef, aboutRef, ctaRef, faqRef];

    sections.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Local Business Schema with complete Anantapur/Ananthapuramu optimization
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "@id": "https://bindyasalon.com/#localbusiness",
    "name": "Bindya Saloon - Best Beauty Salon in Ananthapuramu",
    "alternateName": "Bindya Beauty Salon",
    "description": "Best beauty salon in Ananthapuramu (Anantapur) offering bridal makeup, hair styling, facials, threading, waxing, manicure, pedicure and complete makeover services for women. Premium salon services in Anantapur, Andhra Pradesh.",
    "image": "https://bindyasalon.com/images/bacpic.png",
    "logo": "https://bindyasalon.com/images/logo.png",
    "url": "https://bindyasalon.com/",
    "telephone": "+91-XXXXXXXXXX",
    "email": "contact@bindyasalon.com",
    "priceRange": "₹₹",
    "openingHours": ["Mo-Su 09:00-20:00"],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "09:00",
        "closes": "20:00"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Main Road, Near Clock Tower",
      "addressLocality": "Ananthapuramu",
      "addressRegion": "Andhra Pradesh",
      "postalCode": "515001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "14.6761",
      "longitude": "77.5957"
    },
    "areaServed": {
      "@type": "City",
      "name": "Ananthapuramu",
      "containedInPlace": {
        "@type": "State",
        "name": "Andhra Pradesh"
      }
    },
    "hasMap": "https://maps.google.com/?q=Ananthapuramu+Andhra+Pradesh",
    "sameAs": [
      "https://www.instagram.com/bindyasalon",
      "https://www.facebook.com/bindyasalon"
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Bridal Makeup",
          "description": "Best bridal makeup in Ananthapuramu - Engagement, wedding, reception makeup with premium products"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Hair Styling",
          "description": "Professional hair styling, hair cutting, hair setting in Anantapur"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Facials",
          "description": "Premium facial services for glowing skin in Ananthapuramu"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Threading & Waxing",
          "description": "Hygienic threading and waxing services in Anantapur"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Manicure & Pedicure",
          "description": "Relaxing hand and foot care services in Ananthapuramu"
        }
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "328",
      "bestRating": "5",
      "worstRating": "1"
    },
    "founder": {
      "@type": "Person",
      "name": "Bindya"
    },
    "womenOnly": true,
    "serviceType": [
      "Bridal Makeup",
      "Hair Styling",
      "Facials",
      "Threading",
      "Waxing",
      "Manicure",
      "Pedicure",
      "Nail Art",
      "Party Makeup",
      "Saree Draping",
      "Engagement Makeup",
      "Skin Care"
    ]
  };

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://bindyasalon.com/#organization",
    "name": "Bindya Saloon",
    "alternateName": "Bindya Beauty Salon Ananthapuramu",
    "url": "https://bindyasalon.com/",
    "logo": "https://bindyasalon.com/images/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-XXXXXXXXXX",
      "contactType": "customer service",
      "availableLanguage": ["English", "Telugu", "Hindi"]
    },
    "sameAs": [
      "https://www.instagram.com/bindyasalon",
      "https://www.facebook.com/bindyasalon"
    ]
  };

  // WebSite Schema for better SEO
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://bindyasalon.com/#website",
    "url": "https://bindyasalon.com/",
    "name": "Bindya Saloon - Best Salon in Ananthapuramu",
    "description": "Best beauty salon in Ananthapuramu (Anantapur) for women. Premium bridal makeup, hair styling, facials, threading, waxing and beauty services.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://bindyasalon.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  // FAQ Schema for rich results
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // BreadcrumbList Schema for better navigation SEO
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://bindyasalon.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Best Beauty Salon in Ananthapuramu",
        "item": "https://bindyasalon.com/"
      }
    ]
  };

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags for SEO */}
        <title>Bindya Saloon - Best Beauty Salon in Ananthapuramu (Anantapur) | Bridal Makeup & Beauty Services</title>
        <meta name="title" content="Bindya Saloon - Best Beauty Salon in Ananthapuramu (Anantapur) | Bridal Makeup & Beauty Services" />
        <meta name="description" content="Best beauty salon in Ananthapuramu (Anantapur), Andhra Pradesh. Professional bridal makeup, hair styling, facials, threading, waxing, manicure, pedicure & complete makeover services for women. Book your appointment today!" />
        <meta name="keywords" content="best salon in ananthapuramu, best salon in anantapur, beauty salon ananthapuramu, bridal makeup ananthapuramu, bridal makeup anantapur, beauty parlor ananthapuramu, salon near me anantapur, best beauty salon anantapur, women's salon ananthapuramu, makeup artist ananthapuramu, hair stylist anantapur, facial ananthapuramu, threading anantapur, waxing ananthapuramu, manicure pedicure anantapur, party makeup ananthapuramu, engagement makeup anantapur, beauty services ananthapuramu, Bindya Saloon" />
        <meta name="author" content="Bindya Saloon" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
        <meta name="googlebot" content="index, follow" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://bindyasalon.com/" />
        
        {/* Geo Meta Tags for Local SEO */}
        <meta name="geo.region" content="IN-AP" />
        <meta name="geo.placename" content="Ananthapuramu" />
        <meta name="geo.position" content="14.6761;77.5957" />
        <meta name="ICBM" content="14.6761, 77.5957" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bindyasalon.com/" />
        <meta property="og:title" content="Bindya Saloon - Best Beauty Salon in Ananthapuramu (Anantapur) | Professional Bridal Makeup & Beauty Services" />
        <meta property="og:description" content="Best beauty salon in Ananthapuramu, Andhra Pradesh. Professional bridal makeup, hair styling, facials, threading, waxing & complete beauty services for women." />
        <meta property="og:image" content="https://bindyasalon.com/images/bacpic.png" />
        <meta property="og:site_name" content="Bindya Saloon" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://bindyasalon.com/" />
        <meta property="twitter:title" content="Bindya Saloon - Best Beauty Salon in Ananthapuramu (Anantapur)" />
        <meta property="twitter:description" content="Professional bridal makeup, hair styling, facials & beauty services for women in Ananthapuramu, Andhra Pradesh." />
        <meta property="twitter:image" content="https://bindyasalon.com/images/bacpic.png" />
        
        {/* Mobile & Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        
        {/* Additional SEO Tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#3A1026" />
        
        {/* Language Alternates */}
        <link rel="alternate" href="https://bindyasalon.com/" hrefLang="en-in" />
        <link rel="alternate" href="https://bindyasalon.com/te" hrefLang="te" />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data / JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        
        {/* Additional Service Schema for each service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": services.map((service, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Service",
                "name": service.title,
                "description": service.desc,
                "provider": {
                  "@type": "BeautySalon",
                  "name": "Bindya Saloon",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Ananthapuramu",
                    "addressRegion": "Andhra Pradesh"
                  }
                }
              }
            }))
          })}
        </script>
      </Helmet>

      <style>{`
        :root {
          --deep-plum: #3A1026;
          --dark-wine: #3B1830;
          --rich-burgundy: #6B1641;
          --rose-pink: #C65A78;
          --soft-coral-pink: #DB6B82;
          --champagne-gold: #D8A76B;
          --blush-white: #FFF5F3;
          --warm-white: #FFFDFC;
          --pale-pink: #FBE7EA;
          --light-rose-beige: #EFD7D3;
          --muted-plum-gray: #5E4553;
        }

        * {
          box-sizing: border-box;
        }

        .home-page {
          background: var(--blush-white);
          color: var(--muted-plum-gray);
          overflow: hidden;
          width: 100%;
        }

        /* Hero Section */
        .hero-section {
          position: relative;
          min-height: 100vh;
          padding: 115px 6% 90px;
          background:
            radial-gradient(circle at 18% 18%, rgba(251, 231, 234, 0.95), transparent 34%),
            linear-gradient(135deg, #FFF5F3 0%, #FFFDFC 52%, #FBE7EA 100%);
          overflow: hidden;
        }

        .hero-section::before {
          content: "";
          position: absolute;
          right: -130px;
          bottom: 40px;
          width: 430px;
          height: 430px;
          background: rgba(198, 90, 120, 0.14);
          border-radius: 50%;
          filter: blur(55px);
          animation: heroGlow 5s ease-in-out infinite alternate;
        }

        .hero-section::after {
          content: "";
          position: absolute;
          left: -130px;
          bottom: -130px;
          width: 390px;
          height: 390px;
          background: rgba(216, 167, 107, 0.16);
          border-radius: 50%;
          filter: blur(48px);
          animation: heroGlow2 6s ease-in-out infinite alternate;
        }

        @keyframes heroGlow {
          from {
            transform: translateY(0) scale(1);
            opacity: 0.7;
          }
          to {
            transform: translateY(-24px) scale(1.08);
            opacity: 1;
          }
        }

        @keyframes heroGlow2 {
          from {
            transform: translateX(0) scale(1);
          }
          to {
            transform: translateX(20px) scale(1.1);
          }
        }

        .hero-container {
          position: relative;
          z-index: 2;
          max-width: 1250px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 45px;
        }

        .hero-content {
          animation: slideInLeft 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .hero-small-title {
          color: var(--rose-pink);
          font-size: 0.78rem;
          letter-spacing: 2.5px;
          font-weight: 800;
          margin: 0 0 10px;
          text-transform: uppercase;
          animation: fadeInUp 1s ease forwards;
          animation-delay: 0.2s;
          opacity: 0;
        }

        .hero-line {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 18px;
          animation: slideInLeft 1s ease forwards;
          animation-delay: 0.4s;
          opacity: 0;
        }

        .hero-line span {
          width: 50px;
          height: 1px;
          background: var(--champagne-gold);
          animation: lineGrow 1.5s ease forwards;
          animation-delay: 0.6s;
          transform-origin: left;
          transform: scaleX(0);
        }

        .hero-line i {
          color: var(--champagne-gold);
          font-size: 0.9rem;
          animation: sparkle 2s ease-in-out infinite;
          animation-delay: 1s;
        }

        @keyframes sparkle {
          0%, 100% {
            transform: scale(1) rotate(0deg);
          }
          50% {
            transform: scale(1.3) rotate(15deg);
          }
        }

        @keyframes lineGrow {
          to {
            transform: scaleX(1);
          }
        }

        .hero-title {
          color: var(--dark-wine);
          font-size: clamp(2.4rem, 5vw, 4.7rem);
          line-height: 1.05;
          margin: 0 0 20px;
          font-family: "Playfair Display", Georgia, serif;
          font-weight: 700;
          letter-spacing: -1px;
          animation: fadeInUp 1s ease forwards;
          animation-delay: 0.6s;
          opacity: 0;
        }

        .hero-title span {
          color: var(--rose-pink);
          font-style: italic;
          font-weight: 500;
          display: inline-block;
          animation: gentlePulse 3s ease-in-out infinite;
        }

        @keyframes gentlePulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .hero-desc {
          color: var(--muted-plum-gray);
          line-height: 1.8;
          max-width: 560px;
          font-size: 1rem;
          margin: 0 0 30px;
          animation: fadeInUp 1s ease forwards;
          animation-delay: 0.8s;
          opacity: 0;
        }

        .hero-buttons {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          animation: fadeInUp 1s ease forwards;
          animation-delay: 1s;
          opacity: 0;
        }

        .primary-btn,
        .secondary-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-height: 52px;
          padding: 0 24px;
          border-radius: 8px;
          text-decoration: none;
          font-size: 0.78rem;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          font-weight: 800;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: relative;
          overflow: hidden;
        }

        .primary-btn::before,
        .secondary-btn::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .primary-btn:hover::before,
        .secondary-btn:hover::before {
          width: 300px;
          height: 300px;
        }

        .primary-btn {
          background: var(--rich-burgundy);
          color: var(--warm-white);
          box-shadow: 0 12px 25px rgba(107, 22, 65, 0.25);
        }

        .primary-btn:hover {
          background: var(--deep-plum);
          transform: translateY(-4px);
          box-shadow: 0 16px 34px rgba(107, 22, 65, 0.35);
        }

        .secondary-btn {
          background: var(--warm-white);
          color: var(--rich-burgundy);
          border: 1px solid var(--light-rose-beige);
        }

        .secondary-btn:hover {
          background: var(--pale-pink);
          transform: translateY(-4px);
          box-shadow: 0 14px 28px rgba(58, 16, 38, 0.12);
        }

        .hero-image-box {
          position: relative;
          min-height: 580px;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: slideInRight 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .hero-image-box::before {
          content: "";
          position: absolute;
          width: 450px;
          height: 450px;
          background: rgba(239, 215, 211, 0.8);
          border-radius: 50%;
          z-index: 0;
          animation: floatCircle 6s ease-in-out infinite;
        }

        @keyframes floatCircle {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.05);
          }
        }

        .hero-image-frame {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 560px;
          height: 580px;
        }

        .hero-image-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          border-radius: 260px 260px 30px 30px;
          box-shadow: 0 28px 60px rgba(58, 16, 38, 0.18);
          border: 8px solid rgba(255, 253, 252, 0.85);
          transition: transform 0.5s ease, box-shadow 0.5s ease;
        }

        .hero-image-frame img:hover {
          transform: scale(1.02) translateY(-5px);
          box-shadow: 0 35px 70px rgba(58, 16, 38, 0.25);
        }

        .mobile-hero-quote {
          display: none;
        }

        .hero-feature-box {
          position: relative;
          z-index: 3;
          max-width: 1050px;
          margin: 1vw auto 0;
          background: var(--warm-white);
          border-radius: 18px;
          box-shadow: 0 20px 50px rgba(58, 16, 38, 0.12);
          border: 1px solid var(--light-rose-beige);
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          overflow: hidden;
          animation: fadeInUp 1.2s ease forwards;
          animation-delay: 0.5s;
          opacity: 0;
        }

        .hero-feature {
          padding: 24px 18px;
          text-align: center;
          border-right: 1px solid var(--light-rose-beige);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .hero-feature:hover {
          background: var(--blush-white);
          transform: translateY(-5px);
        }

        .hero-feature:last-child {
          border-right: none;
        }

        .feature-icon {
          width: 58px;
          height: 58px;
          margin: 0 auto 14px;
          border-radius: 50%;
          background: var(--pale-pink);
          color: var(--rose-pink);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          transition: all 0.3s ease;
        }

        .hero-feature:hover .feature-icon {
          background: var(--rose-pink);
          color: white;
          transform: rotate(360deg) scale(1.1);
        }

        .hero-feature h4 {
          margin: 0 0 8px;
          color: var(--dark-wine);
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.4px;
        }

        .hero-feature p {
          margin: 0;
          color: var(--muted-plum-gray);
          font-size: 0.82rem;
          line-height: 1.6;
        }

        /* Keyframe Animations */
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-80px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(80px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* Scroll Animation Classes */
        .scroll-hidden {
          opacity: 0;
          transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .scroll-hidden.from-left {
          transform: translateX(-100px);
        }

        .scroll-hidden.from-right {
          transform: translateX(100px);
        }

        .scroll-hidden.from-bottom {
          transform: translateY(80px);
        }

        .scroll-hidden.from-top {
          transform: translateY(-80px);
        }

        .scroll-visible {
          opacity: 1;
          transform: translate(0) !important;
        }

        .stagger-delay-1 {
          transition-delay: 0.1s;
        }

        .stagger-delay-2 {
          transition-delay: 0.2s;
        }

        .stagger-delay-3 {
          transition-delay: 0.3s;
        }

        .stagger-delay-4 {
          transition-delay: 0.4s;
        }

        .stagger-delay-5 {
          transition-delay: 0.5s;
        }

        /* Sections */
        .section {
          padding: 80px 6%;
        }

        .section-header {
          text-align: center;
          max-width: 780px;
          margin: 0 auto 45px;
        }

        .section-subtitle {
          color: var(--rose-pink);
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-size: 0.85rem;
          margin-bottom: 10px;
        }

        .section-title {
          color: var(--dark-wine);
          font-size: clamp(2rem, 4vw, 3.2rem);
          font-family: "Playfair Display", Georgia, serif;
          margin: 0 0 15px;
        }

        .section-desc {
          color: var(--muted-plum-gray);
          line-height: 1.8;
          font-size: 1rem;
          margin: 0;
        }

        /* Services Grid */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .service-card {
          background: var(--warm-white);
          border: 1px solid var(--light-rose-beige);
          border-radius: 28px;
          padding: 28px 22px;
          text-align: center;
          box-shadow: 0 14px 35px rgba(58, 16, 38, 0.08);
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }

        .service-card::before {
          content: "";
          position: absolute;
          top: -70px;
          right: -70px;
          width: 140px;
          height: 140px;
          background: rgba(198, 90, 120, 0.14);
          border-radius: 50%;
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .service-card:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 22px 45px rgba(107, 22, 65, 0.16);
          border-color: rgba(216, 167, 107, 0.55);
        }

        .service-card:hover::before {
          transform: scale(2);
          opacity: 0.8;
        }

        .service-icon {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: var(--pale-pink);
          color: var(--rich-burgundy);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 18px;
          font-size: 1.6rem;
          border: 1px solid var(--light-rose-beige);
          position: relative;
          z-index: 1;
          transition: all 0.3s ease;
        }

        .service-card:hover .service-icon {
          background: var(--rich-burgundy);
          color: white;
          transform: rotateY(360deg);
        }

        .service-card h3 {
          color: var(--dark-wine);
          margin: 0 0 10px;
          font-size: 1.18rem;
          position: relative;
          z-index: 1;
        }

        .service-card p {
          margin: 0;
          color: var(--muted-plum-gray);
          line-height: 1.65;
          font-size: 0.95rem;
          position: relative;
          z-index: 1;
        }

        /* About Section */
        .about-section {
          background: linear-gradient(135deg, var(--warm-white), var(--blush-white));
        }

        .about-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 45px;
          align-items: center;
        }

        .about-image {
          min-height: 460px;
          border-radius: 36px;
          background:
            linear-gradient(rgba(58, 16, 38, 0.08), rgba(107, 22, 65, 0.16)),
            url("/images/bacpic.png");
          background-size: cover;
          background-position: center;
          box-shadow: 0 24px 55px rgba(58, 16, 38, 0.18);
          border: 1px solid rgba(216, 167, 107, 0.45);
          transition: transform 0.5s ease, box-shadow 0.5s ease;
        }

        .about-image:hover {
          transform: scale(1.02);
          box-shadow: 0 30px 65px rgba(58, 16, 38, 0.25);
        }

        .about-content h2 {
          color: var(--dark-wine);
          font-size: clamp(2rem, 4vw, 3rem);
          font-family: "Playfair Display", Georgia, serif;
          margin: 0 0 20px;
        }

        .about-content p {
          color: var(--muted-plum-gray);
          line-height: 1.85;
          margin-bottom: 16px;
        }

        .about-points {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-top: 24px;
        }

        .about-point {
          background: var(--pale-pink);
          border: 1px solid var(--light-rose-beige);
          border-radius: 18px;
          padding: 14px;
          color: var(--dark-wine);
          font-weight: 700;
          display: flex;
          gap: 10px;
          align-items: center;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .about-point:hover {
          background: var(--rose-pink);
          color: white;
          transform: translateX(10px);
        }

        .about-point i {
          color: var(--rich-burgundy);
          transition: all 0.3s ease;
        }

        .about-point:hover i {
          color: white;
          transform: scale(1.2);
        }

        /* CTA Section */
        .cta-section {
          padding: 80px 6%;
          background:
            linear-gradient(135deg, rgba(58, 16, 38, 0.92), rgba(107, 22, 65, 0.9)),
            url("/images/bacpic.png");
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          text-align: center;
        }

        .cta-box {
          max-width: 850px;
          margin: 0 auto;
        }

        .cta-box h2 {
          color: var(--blush-white);
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(2rem, 4vw, 3.2rem);
          margin: 0 0 15px;
        }

        .cta-box p {
          color: var(--light-rose-beige);
          line-height: 1.8;
          margin-bottom: 28px;
        }

        /* FAQ Section */
        .faq-section {
          background: var(--blush-white);
        }

        .faq-list {
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .faq-item {
          background: var(--warm-white);
          border: 1px solid var(--light-rose-beige);
          border-radius: 22px;
          overflow: hidden;
          box-shadow: 0 12px 30px rgba(58, 16, 38, 0.07);
          transition: all 0.3s ease;
        }

        .faq-item:hover {
          box-shadow: 0 16px 40px rgba(58, 16, 38, 0.12);
          transform: translateY(-2px);
        }

        .faq-question {
          width: 100%;
          border: none;
          background: transparent;
          color: var(--dark-wine);
          padding: 20px 22px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 15px;
          font-size: 1rem;
          font-weight: 800;
          text-align: left;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .faq-question:hover {
          color: var(--rose-pink);
        }

        .faq-icon {
          min-width: 34px;
          height: 34px;
          border-radius: 50%;
          background: var(--pale-pink);
          color: var(--rich-burgundy);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          font-weight: 900;
          transition: all 0.3s ease;
        }

        .faq-item:hover .faq-icon {
          background: var(--rose-pink);
          color: white;
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .faq-answer.open {
          max-height: 300px;
        }

        .faq-answer p {
          margin: 0;
          padding: 0 22px 22px;
          color: var(--muted-plum-gray);
          line-height: 1.8;
          animation: fadeInUp 0.5s ease;
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .services-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 1000px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .hero-desc {
            margin-left: auto;
            margin-right: auto;
          }

          .hero-line,
          .hero-buttons {
            justify-content: center;
          }

          .hero-image-box {
            min-height: 480px;
          }

          .hero-image-frame {
            height: 480px;
          }

          .hero-feature-box {
            grid-template-columns: repeat(2, 1fr);
          }

          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .about-wrapper {
            grid-template-columns: 1fr;
          }

          .about-image {
            min-height: 380px;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            min-height: auto;
            padding: 95px 5% 70px;
          }

          .hero-container {
            gap: 24px;
          }

          .hero-image-box {
            order: 1;
            min-height: 410px;
            width: 100%;
          }

          .hero-content {
            order: 2;
          }

          .hero-content .hero-small-title,
          .hero-content .hero-line,
          .hero-content .hero-title,
          .hero-content .hero-desc {
            display: none;
          }

          .hero-image-frame {
            height: 410px;
            max-width: 100%;
          }

          .hero-image-frame img {
            height: 100%;
            border-radius: 200px 200px 24px 24px;
          }

          .mobile-hero-quote {
            display: flex;
            position: absolute;
            inset: 8px;
            z-index: 4;
            flex-direction: column;
            justify-content: flex-end;
            align-items: flex-start;
            padding: 28px 22px;
            text-align: left;
            border-radius: 190px 190px 20px 20px;
            background: linear-gradient(
              180deg,
              rgba(58, 16, 38, 0.03) 0%,
              rgba(58, 16, 38, 0.24) 38%,
              rgba(58, 16, 38, 0.82) 100%
            );
            pointer-events: none;
          }

          .mobile-hero-quote p {
            margin: 0 0 9px;
            color: #fbe7ea;
            font-size: 0.72rem;
            font-weight: 900;
            letter-spacing: 2px;
            text-transform: uppercase;
            text-shadow: 0 4px 14px rgba(0, 0, 0, 0.35);
          }

          .mobile-hero-quote h2 {
            margin: 0;
            color: #fffdfc;
            font-family: "Playfair Display", Georgia, serif;
            font-size: 2.1rem;
            line-height: 1.12;
            font-weight: 700;
            letter-spacing: -0.4px;
            text-shadow: 0 8px 24px rgba(0, 0, 0, 0.45);
          }

          .mobile-hero-quote h2 span {
            color: var(--champagne-gold);
            font-style: italic;
            font-weight: 500;
          }

          .hero-buttons {
            width: 100%;
            margin-top: 6px;
          }

          .hero-feature-box {
            margin-top: 30px;
          }

          .section {
            padding: 60px 5%;
          }

          .about-image {
            min-height: 340px;
          }

          .about-points {
            grid-template-columns: 1fr;
          }

          .faq-question {
            font-size: 0.95rem;
            padding: 16px 18px;
          }
        }

        @media (max-width: 560px) {
          .hero-title {
            font-size: 2.2rem;
          }

          .hero-buttons {
            flex-direction: column;
            width: 100%;
          }

          .primary-btn,
          .secondary-btn {
            width: 100%;
          }

          .hero-feature-box {
            grid-template-columns: 1fr;
          }

          .hero-feature {
            border-right: none;
            border-bottom: 1px solid var(--light-rose-beige);
          }

          .hero-feature:last-child {
            border-bottom: none;
          }

          .services-grid {
            grid-template-columns: 1fr;
          }

          .hero-image-box {
            min-height: 350px;
          }

          .hero-image-frame {
            height: 350px;
          }

          .hero-image-frame img {
            height: 100%;
            max-width: 100%;
          }

          .mobile-hero-quote {
            padding: 24px 18px;
          }

          .mobile-hero-quote h2 {
            font-size: 1.82rem;
          }

          .mobile-hero-quote p {
            font-size: 0.66rem;
            letter-spacing: 1.7px;
          }
        }

        @media (max-width: 400px) {
          .hero-title {
            font-size: 1.8rem;
          }

          .hero-small-title {
            font-size: 0.7rem;
            letter-spacing: 2px;
          }

          .mobile-hero-quote h2 {
            font-size: 1.55rem;
          }

          .mobile-hero-quote p {
            font-size: 0.62rem;
          }

          .service-card {
            padding: 20px 16px;
          }

          .service-icon {
            width: 55px;
            height: 55px;
            font-size: 1.3rem;
          }
        }
      `}</style>

      <main className="home-page">
        <section className="hero-section" ref={heroRef} id="hero-section">
          <div className="hero-container">
            <div className="hero-content">
              <p className="hero-small-title">
                Beauty That Inspires Confidence
              </p>

              <div className="hero-line">
                <span></span>
                <i className="fa-solid fa-wand-magic-sparkles"></i>
              </div>

              <h1 className="hero-title">
                Enhance Your Beauty, <br />
                Embrace Your <span>Glow</span>
              </h1>

              <p className="hero-desc">
                At Bindya Saloon, Ananthapuramu, we bring out the most radiant you
                with expert care, premium beauty services, bridal makeup,
                facials, hair styling, threading, waxing, manicure and pedicure.
              </p>

              <div className="hero-buttons">
                <Link to="/booking" className="primary-btn">
                  <i className="fa-regular fa-calendar-check"></i>
                  Book Appointment
                </Link>

                <Link to="/services" className="secondary-btn">
                  <i className="fa-regular fa-circle-play"></i>
                  Our Services
                </Link>
              </div>
            </div>

            <div className="hero-image-box">
              <div className="hero-image-frame">
                <img
                  src="/images/bacpic.png"
                  alt="Bindya Saloon best beauty salon in Ananthapuramu Anantapur - Professional bridal makeup and beauty services for women"
                  loading="lazy"
                  decoding="async"
                />

                <div className="mobile-hero-quote">
                  <p>Beauty That Inspires Confidence</p>
                  <h2>
                    Enhance Your Beauty, <br />
                    Embrace Your <span>Glow</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`hero-feature-box ${
              visibleSections["hero-section"]
                ? "scroll-visible"
                : "scroll-hidden from-bottom"
            }`}
          >
            <div className="hero-feature stagger-delay-1">
              <div className="feature-icon">
                <i className="fa-solid fa-spa"></i>
              </div>
              <h4>Expert Beauticians</h4>
              <p>
                Trained professionals dedicated to enhancing your natural beauty.
              </p>
            </div>

            <div className="hero-feature stagger-delay-2">
              <div className="feature-icon">
                <i className="fa-solid fa-leaf"></i>
              </div>
              <h4>Premium Products</h4>
              <p>We use high-quality and skin-friendly beauty products.</p>
            </div>

            <div className="hero-feature stagger-delay-3">
              <div className="feature-icon">
                <i className="fa-solid fa-shield-heart"></i>
              </div>
              <h4>Hygiene & Safety</h4>
              <p>Your safety and comfort are our top priorities always.</p>
            </div>

            <div className="hero-feature stagger-delay-4">
              <div className="feature-icon">
                <i className="fa-regular fa-gem"></i>
              </div>
              <h4>Personalized Care</h4>
              <p>Customized beauty services tailored to your unique needs.</p>
            </div>
          </div>
        </section>

        <section className="section" ref={servicesRef} id="services-section">
          <div
            className={`section-header ${
              visibleSections["services-section"]
                ? "scroll-visible"
                : "scroll-hidden from-bottom"
            }`}
          >
            <p className="section-subtitle">Our Beauty Services</p>
            <h2 className="section-title">
              Professional Salon Services in Ananthapuramu
            </h2>
            <p className="section-desc">
              From daily grooming to special occasion makeovers, Bindya Saloon
              provides clean, elegant and trusted beauty services for women in Anantapur.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div
                className={`service-card ${
                  visibleSections["services-section"]
                    ? "scroll-visible"
                    : "scroll-hidden from-left"
                }`}
                key={index}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="service-icon">
                  <i className={service.icon}></i>
                </div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          className="section about-section"
          ref={aboutRef}
          id="about-section"
        >
          <div className="about-wrapper">
            <div
              className={`about-image ${
                visibleSections["about-section"]
                  ? "scroll-visible"
                  : "scroll-hidden from-left"
              }`}
            ></div>

            <div
              className={`about-content ${
                visibleSections["about-section"]
                  ? "scroll-visible"
                  : "scroll-hidden from-right"
              }`}
            >
              <p className="section-subtitle">Why Choose Us</p>
              <h2>Best Beauty Salon Experience in Ananthapuramu</h2>

              <p>
                Bindya Saloon is a professional beauty salon in Ananthapuramu,
                Andhra Pradesh, focused on women's beauty, grooming, makeup and
                personal care. We believe every woman deserves to feel
                confident, beautiful and comfortable.
              </p>

              <p>
                Whether you are looking for bridal makeup in Ananthapuramu, facial
                services, hair styling, threading, waxing, manicure, pedicure or
                complete makeover services, our salon provides a clean, friendly
                and premium experience.
              </p>

              <div className="about-points">
                <div className="about-point">
                  <i className="fa-solid fa-circle-check"></i>
                  Women-Focused Salon
                </div>

                <div className="about-point">
                  <i className="fa-solid fa-circle-check"></i>
                  Clean & Hygienic Service
                </div>

                <div className="about-point">
                  <i className="fa-solid fa-circle-check"></i>
                  Bridal & Party Makeup
                </div>

                <div className="about-point">
                  <i className="fa-solid fa-circle-check"></i>
                  Premium Beauty Care
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section" ref={ctaRef} id="cta-section">
          <div
            className={`cta-box ${
              visibleSections["cta-section"]
                ? "scroll-visible"
                : "scroll-hidden from-bottom"
            }`}
          >
            <h2>Ready for Your Beautiful Look?</h2>
            <p>
              Book your appointment at Bindya Saloon, Ananthapuramu and enjoy a
              professional salon experience for beauty, makeup, hair care, skin
              care and grooming.
            </p>

            <Link to="/booking" className="primary-btn">
              <i className="fa-solid fa-calendar-check"></i>
              Book Your Appointment
            </Link>
          </div>
        </section>

        <section className="section faq-section" ref={faqRef} id="faq-section">
          <div
            className={`section-header ${
              visibleSections["faq-section"]
                ? "scroll-visible"
                : "scroll-hidden from-bottom"
            }`}
          >
            <p className="section-subtitle">FAQ</p>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-desc">
              Here are some common questions about Bindya Saloon services in
              Ananthapuramu.
            </p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div
                className={`faq-item ${
                  visibleSections["faq-section"]
                    ? "scroll-visible"
                    : "scroll-hidden from-left"
                }`}
                key={index}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleFaq(index)}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`faq-answer ${
                    openFaq === index ? "open" : ""
                  }`}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;