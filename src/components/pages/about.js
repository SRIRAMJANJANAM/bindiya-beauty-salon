import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

function About() {
  const whatsappNumber = "916300593450";
  const [previewImage, setPreviewImage] = useState(null);

  const openPreview = (image) => {
    setPreviewImage(image);
  };

  const closePreview = () => {
    setPreviewImage(null);
  };

  const courses = [
    {
      icon: "fa-solid fa-wand-magic-sparkles",
      title: "Advanced Diploma in Professional Makeup Artistry",
      text: "Professional makeup training for beginners and advanced learners who want to build a career in the beauty industry.",
    },
    {
      icon: "fa-solid fa-spa",
      title: "Diploma in Beauty Parlour Management",
      text: "Learn salon services, customer handling, beauty treatments and professional parlour management skills.",
    },
    {
      icon: "fa-solid fa-hands",
      title: "Diploma in Mehendi and Tattoo Art",
      text: "Creative mehendi designs and tattoo art training for students who want to start their own service or career.",
    },
    {
      icon: "fa-solid fa-crown",
      title: "Diploma in Bridal Makeup and Hairstyling",
      text: "Complete bridal makeover training including makeup, hairstyling, draping and premium bridal finishing.",
    },
  ];

  const highlights = [
    "18 years of beauty and salon experience",
    "ISO certified salon and academy",
    "Mahanandhi Award recognition",
    "Member of IECE International Early Childhood Education",
    "Professional training with practical learning",
    "Combined with EMAX for advanced learning support",
  ];

  const achievements = [
    { number: "18+", label: "Years of Experience" },
    { number: "2000+", label: "Happy Haircut Clients" },
    { number: "3200+", label: "Students Trained" },
    { number: "2100+", label: "Makeup Services Done" },
  ];

  // Local Business Schema for BeautySalon & Academy
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "@id": "https://bindiyazbeautysalon.in/#localbusiness",
    "name": "Bindiya'z The Signature Salon & Academy - Best Beauty Salon in Ananthapuramu",
    "alternateName": "Bindiya'z Salon and Academy Anantapur",
    "description": "Best beauty salon and professional makeup academy in Ananthapuramu (Anantapur), Andhra Pradesh. Led by founder SHAHIN with 18+ years experience. ISO certified academy offering bridal makeup, hairstyling, professional beauty services, makeup courses, mehendi training, tattoo art, and beauty parlour management courses.",
    "image": "https://bindiyazbeautysalon.in/images/shaheen.png",
    "logo": "https://bindiyazbeautysalon.in/images/logo.png",
    "url": "https://bindiyazbeautysalon.in/about",
    "telephone": "+916300593450",
    "email": "contact@bindiyazbeautysalon.in",
    "priceRange": "₹30",
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
    "founder": {
      "@type": "Person",
      "name": "SHAHIN",
      "jobTitle": "Founder, Makeup Artist, Beauty Trainer",
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "name": "ISO Certified Beauty Trainer"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "name": "Mahanandhi Award Winner"
        },
        {
          "@type": "EducationalOccupationalCredential",
          "name": "IECE Member"
        }
      ]
    },
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Bridal Makeup",
          "description": "Best bridal makeup in Ananthapuramu - Professional wedding, engagement, and reception makeup"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Advanced Diploma in Professional Makeup Artistry",
          "description": "Professional makeup training for beginners and advanced learners"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Diploma in Beauty Parlour Management",
          "description": "Salon services, customer handling, and professional parlour management training"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Diploma in Mehendi and Tattoo Art",
          "description": "Creative mehendi designs and tattoo art training"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Diploma in Bridal Makeup and Hairstyling",
          "description": "Complete bridal makeover training including makeup, hairstyling, and draping"
        }
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "520",
      "bestRating": "5",
      "worstRating": "1"
    },
    "award": [
      "Mahanandhi Award Recognition",
      "ISO Certified Academy",
      "IECE International Recognition"
    ],
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "name": "ISO Certified"
    },
    "knowsLanguage": ["English", "Telugu", "Hindi"],
    "womenOnly": true,
    "serviceType": [
      "Bridal Makeup",
      "Professional Makeup Artistry",
      "Hairstyling",
      "Beauty Parlour Management",
      "Mehendi Art",
      "Tattoo Art",
      "Makeup Courses",
      "Beauty Training",
      "Salon Services"
    ]
  };

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": "https://bindiyazbeautysalon.in/#organization",
    "name": "Bindiya'z The Signature Salon & Academy",
    "alternateName": "Bindiya'z Academy Anantapur",
    "url": "https://bindiyazbeautysalon.in/",
    "logo": "https://bindiyazbeautysalon.in/images/logo.png",
    "description": "ISO certified beauty salon and professional makeup academy in Ananthapuramu, Andhra Pradesh. Best bridal makeup, beauty services, and makeup courses.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ananthapuramu",
      "addressRegion": "Andhra Pradesh",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+916300593450",
      "contactType": "customer service",
      "availableLanguage": ["English", "Telugu", "Hindi"],
      "contactOption": ["TollFree", "HearingImpairedSupported"]
    },
    "sameAs": [
      "https://www.instagram.com/bindiyasalon",
      "https://www.facebook.com/bindiyasalon"
    ]
  };

  // Course Schema for educational offerings
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Course",
          "name": "Advanced Diploma in Professional Makeup Artistry",
          "description": "Professional makeup training for beginners and advanced learners who want to build a career in the beauty industry.",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "Bindiya'z The Signature Salon & Academy",
            "sameAs": "https://bindiyazbeautysalon.in"
          },
          "educationalCredentialAwarded": "Advanced Diploma",
          "courseMode": "offline",
          "location": {
            "@type": "Place",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Ananthapuramu",
              "addressRegion": "Andhra Pradesh"
            }
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Course",
          "name": "Diploma in Beauty Parlour Management",
          "description": "Learn salon services, customer handling, beauty treatments and professional parlour management skills.",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "Bindiya'z The Signature Salon & Academy"
          },
          "educationalCredentialAwarded": "Diploma",
          "courseMode": "offline"
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Course",
          "name": "Diploma in Mehendi and Tattoo Art",
          "description": "Creative mehendi designs and tattoo art training for students who want to start their own service or career.",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "Bindiya'z The Signature Salon & Academy"
          },
          "educationalCredentialAwarded": "Diploma",
          "courseMode": "offline"
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Course",
          "name": "Diploma in Bridal Makeup and Hairstyling",
          "description": "Complete bridal makeover training including makeup, hairstyling, draping and premium bridal finishing.",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "Bindiya'z The Signature Salon & Academy"
          },
          "educationalCredentialAwarded": "Diploma",
          "courseMode": "offline"
        }
      }
    ]
  };

  // Person Schema for Founder
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://bindiyazbeautysalon.in/#founder",
    "name": "SHAHIN",
    "jobTitle": "Founder, Makeup Artist, Beauty Trainer, Assessor, Salon Professional",
    "worksFor": {
      "@type": "EducationalOrganization",
      "name": "Bindiya'z The Signature Salon & Academy"
    },
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "ISO Certified Beauty Trainer"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Mahanandhi Award Winner"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "IECE Member - International Early Childhood Education"
      }
    ],
    "knowsAbout": [
      "Bridal Makeup",
      "Professional Makeup Artistry",
      "Hairstyling",
      "Beauty Training",
      "Salon Management",
      "Mehendi Art",
      "Tattoo Art"
    ],
    "experience": "18 years of experience in the beauty industry",
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "IECE International"
    },
    "award": "Mahanandhi Award for excellence in beauty services"
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://bindiyazbeautysalon.in/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About Bindiya'z - Best Salon & Academy in Ananthapuramu",
        "item": "https://bindiyazbeautysalon.in/about"
      }
    ]
  };

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags for SEO */}
        <title>Bindiya'z The Signature Salon & Academy - Best Beauty Salon in Ananthapuramu (Anantapur) | SHAHIN Makeup Artist | ISO Certified Academy</title>
        <meta name="title" content="Bindiya'z The Signature Salon & Academy - Best Beauty Salon in Ananthapuramu (Anantapur) | SHAHIN Makeup Artist | ISO Certified Academy" />
        <meta name="description" content="Bindiya'z The Signature Salon & Academy in Ananthapuramu (Anantapur), Andhra Pradesh is led by founder SHAHIN with 18+ years of beauty industry experience. ISO certified academy offering bridal makeup, professional beauty services, hairstyling, makeup training, mehendi course, tattoo art, and beauty parlour management courses. Best salon and makeup academy in Anantapur." />
        <meta name="keywords" content="best salon in Ananthapuramu, best salon in Anantapur, beauty salon Ananthapuramu, beauty salon Anantapur, bridal makeup Ananthapuramu, bridal makeup Anantapur, makeup artist Ananthapuramu, makeup artist Anantapur, beauty academy Ananthapuramu, beauty academy Anantapur, makeup course Ananthapuramu, makeup course Anantapur, beauty parlour course Ananthapuramu, mehendi course Ananthapuramu, tattoo art course Anantapur, hairstyling course Ananthapuramu, Bindiya Salon Ananthapuramu, SHAHIN makeup artist, ISO certified academy Anantapur, best beauty parlour in Anantapur, professional makeup training Ananthapuramu, diploma in beauty parlour management Anantapur, bridal makeup artist near me Anantapur, women's salon Ananthapuramu" />
        <meta name="author" content="SHAHIN - Bindiya'z The Signature Salon & Academy" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://bindiyazbeautysalon.in/about" />
        
        {/* Geo Meta Tags for Local SEO - Ananthapuramu/Anantapur */}
        <meta name="geo.region" content="IN-AP" />
        <meta name="geo.placename" content="Ananthapuramu" />
        <meta name="geo.position" content="14.6761;77.5957" />
        <meta name="ICBM" content="14.6761, 77.5957" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bindiyazbeautysalon.in/about" />
        <meta property="og:title" content="Bindiya'z The Signature Salon & Academy - Best Beauty Salon & Makeup Academy in Ananthapuramu (Anantapur) | SHAHIN Founder" />
        <meta property="og:description" content="ISO certified beauty salon and professional makeup academy in Ananthapuramu, Andhra Pradesh. Led by SHAHIN with 18+ years experience. Bridal makeup, beauty services, makeup courses, mehendi training, and beauty parlour management courses." />
        <meta property="og:image" content="https://bindiyazbeautysalon.in/images/shaheen.png" />
        <meta property="og:image:alt" content="SHAHIN - Founder of Bindiya'z The Signature Salon & Academy Ananthapuramu" />
        <meta property="og:site_name" content="Bindiya'z The Signature Salon & Academy" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:phone_number" content="+916300593450" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://bindiyazbeautysalon.in/about" />
        <meta property="twitter:title" content="Bindiya'z Salon & Academy - Best Beauty Salon in Ananthapuramu" />
        <meta property="twitter:description" content="ISO certified beauty salon and makeup academy in Ananthapuramu. Bridal makeup, beauty courses, and professional training by SHAHIN with 18+ years experience." />
        <meta property="twitter:image" content="https://bindiyazbeautysalon.in/images/shaheen.png" />
        
        {/* Mobile & Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        
        {/* Additional SEO Tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#3A1026" />
        
        {/* Language Alternates */}
        <link rel="alternate" href="https://bindiyazbeautysalon.in/about" hrefLang="en-in" />
        <link rel="alternate" href="https://bindiyazbeautysalon.in/te/about" hrefLang="te" />
        
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
          {JSON.stringify(courseSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(personSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        
        {/* Service Schema for quick actions */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Action",
            "name": "Book Appointment at Bindiya'z Salon",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://bindiyazbeautysalon.in/booking",
              "inLanguage": "en-IN",
              "actionPlatform": [
                "http://schema.org/DesktopWebPlatform",
                "http://schema.org/MobileWebPlatform"
              ]
            },
            "potentialAction": {
              "@type": "CommunicateAction",
              "name": "Contact on WhatsApp",
              "target": `https://wa.me/${whatsappNumber}`
            }
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

        .about-page {
          min-height: 100vh;
          background:
            radial-gradient(circle at 8% 12%, rgba(216, 167, 107, 0.18), transparent 28%),
            radial-gradient(circle at 92% 18%, rgba(198, 90, 120, 0.18), transparent 30%),
            linear-gradient(135deg, var(--blush-white), var(--warm-white));
          color: var(--muted-plum-gray);
          overflow-x: hidden;
        }

        .about-hero {
          position: relative;
          padding: 130px 6% 80px;
          background:
            linear-gradient(135deg, rgba(58, 16, 38, 0.92), rgba(107, 22, 65, 0.87)),
            url("https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1600&q=80");
          background-size: cover;
          background-position: center;
          color: white;
          text-align: center;
        }

        .about-hero::after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 20% 20%, rgba(216, 167, 107, 0.25), transparent 30%),
            radial-gradient(circle at 80% 80%, rgba(198, 90, 120, 0.22), transparent 30%);
          pointer-events: none;
        }

        .about-hero-content {
          position: relative;
          z-index: 2;
          max-width: 950px;
          margin: auto;
          animation: fadeInUp 0.9s ease forwards;
        }

        .about-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 10px 18px;
          border-radius: 999px;
          background: rgba(255, 245, 243, 0.12);
          border: 1px solid rgba(216, 167, 107, 0.45);
          color: #ffe4bb;
          font-weight: 900;
          font-size: 0.78rem;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 18px;
          backdrop-filter: blur(12px);
        }

        .about-hero h1 {
          margin: 0 0 18px;
          color: var(--warm-white);
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(2rem, 5vw, 4.7rem);
          line-height: 1.2;
        }

        .about-hero h1 span {
          color: var(--champagne-gold);
          font-style: italic;
        }

        .about-hero p {
          max-width: 780px;
          margin: 0 auto;
          color: #f4dad8;
          line-height: 1.85;
          font-size: 1rem;
        }

        .about-section {
          padding: 80px 6%;
        }

        .about-founder-wrapper {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 48px;
          align-items: start;
        }

        .founder-image-col {
          position: sticky;
          top: 100px;
          align-self: start;
        }

        .founder-image-card {
          position: relative;
          border-radius: 34px;
          overflow: hidden;
          box-shadow: 0 28px 70px rgba(58, 16, 38, 0.18);
          border: 1px solid var(--light-rose-beige);
          background: var(--pale-pink);
          animation: fadeInUp 0.9s ease forwards;
        }

        .founder-image-card img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
        }

        .clickable-image {
          cursor: zoom-in;
        }

        .founder-info-below {
          margin-top: 20px;
          text-align: center;
          padding: 16px;
          background: rgba(255, 253, 252, 0.95);
          border-radius: 24px;
          border: 1px solid var(--light-rose-beige);
          box-shadow: 0 8px 20px rgba(58, 16, 38, 0.08);
        }

        .founder-info-below h3 {
          margin: 0 0 5px;
          color: var(--rich-burgundy);
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(1.2rem, 3vw, 1.6rem);
        }

        .founder-info-below p {
          margin: 0;
          color: var(--muted-plum-gray);
          line-height: 1.5;
          font-weight: 600;
          font-size: 0.85rem;
        }

        .founder-content {
          animation: fadeInUp 1s ease forwards;
          max-height: 80vh;
          overflow-y: auto;
          padding-right: 10px;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .founder-content::-webkit-scrollbar {
          display: none;
        }

        .section-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--rich-burgundy);
          background: var(--pale-pink);
          border: 1px solid var(--light-rose-beige);
          padding: 8px 16px;
          border-radius: 999px;
          font-size: 0.75rem;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 16px;
        }

        .founder-content h2,
        .section-title {
          margin: 0 0 20px;
          color: var(--dark-wine);
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          line-height: 1.2;
        }

        .founder-content h2 span,
        .section-title span {
          color: var(--rich-burgundy);
          font-style: italic;
        }

        .founder-content p {
          margin: 0 0 16px;
          color: var(--muted-plum-gray);
          line-height: 1.8;
          font-size: 1rem;
        }

        .achievement-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin: 28px 0;
        }

        .stat-card {
          background: linear-gradient(135deg, var(--rich-burgundy), var(--deep-plum));
          border-radius: 20px;
          padding: 18px 10px;
          text-align: center;
          color: white;
          box-shadow: 0 14px 30px rgba(58, 16, 38, 0.15);
        }

        .stat-number {
          font-size: clamp(1.3rem, 4vw, 1.8rem);
          font-weight: 900;
          font-family: "Playfair Display", Georgia, serif;
          color: var(--champagne-gold);
          line-height: 1.2;
        }

        .stat-label {
          font-size: 0.7rem;
          opacity: 0.9;
          letter-spacing: 0.3px;
          margin-top: 5px;
        }

        .experience-list {
          background: rgba(255, 253, 252, 0.9);
          border-radius: 20px;
          padding: 20px;
          margin: 20px 0;
          border: 1px solid var(--light-rose-beige);
        }

        .experience-list p {
          margin: 0 0 10px 0;
          font-weight: 800;
          color: var(--rich-burgundy);
        }

        .experience-list ul {
          margin: 0;
          padding-left: 20px;
        }

        .experience-list li {
          margin: 8px 0;
          line-height: 1.6;
          color: var(--muted-plum-gray);
        }

        .highlight-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin: 20px 0;
        }

        .highlight-item {
          display: flex;
          gap: 10px;
          align-items: center;
          padding: 12px 15px;
          border-radius: 16px;
          background: rgba(255, 253, 252, 0.95);
          border: 1px solid var(--light-rose-beige);
          box-shadow: 0 8px 20px rgba(58, 16, 38, 0.05);
        }

        .highlight-item i {
          min-width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--rich-burgundy);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
        }

        .highlight-item span {
          color: var(--dark-wine);
          font-weight: 700;
          line-height: 1.4;
          font-size: 0.85rem;
        }

        .mission-card {
          background: linear-gradient(135deg, var(--deep-plum), var(--rich-burgundy));
          border-radius: 28px;
          padding: 32px 28px;
          margin-top: 28px;
          text-align: center;
          border: 1px solid rgba(216, 167, 107, 0.4);
          box-shadow: 0 20px 40px rgba(58, 16, 38, 0.2);
        }

        .mission-icon {
          font-size: 2.5rem;
          color: var(--champagne-gold);
          margin-bottom: 16px;
        }

        .mission-text {
          color: #f6dcd9;
          font-size: clamp(0.95rem, 3vw, 1.05rem);
          line-height: 1.7;
          margin-bottom: 20px;
        }

        .quote-divider {
          width: 60px;
          height: 3px;
          background: var(--champagne-gold);
          margin: 20px auto;
          border-radius: 3px;
        }

        .quote-text {
          font-size: clamp(1.1rem, 4vw, 1.4rem);
          font-family: "Playfair Display", Georgia, serif;
          font-style: italic;
          color: var(--champagne-gold);
          font-weight: 600;
          line-height: 1.4;
        }

        .quote-author {
          margin-top: 12px;
          font-size: 0.85rem;
          color: rgba(255, 245, 243, 0.8);
          letter-spacing: 1px;
        }

        .cert-section {
          padding: 0 6% 80px;
        }

        .cert-wrapper {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .cert-card {
          background: rgba(255, 253, 252, 0.94);
          border: 1px solid var(--light-rose-beige);
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 22px 55px rgba(58, 16, 38, 0.1);
          transition: all 0.35s ease;
        }

        .cert-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 28px 70px rgba(58, 16, 38, 0.15);
        }

        .cert-img {
          height: 220px;
          background: var(--pale-pink);
          overflow: hidden;
        }

        .cert-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        .cert-card:hover .cert-img img {
          transform: scale(1.05);
        }

        .cert-body {
          padding: 22px;
        }

        .cert-body h3 {
          margin: 0 0 10px;
          color: var(--dark-wine);
          font-family: "Playfair Display", Georgia, serif;
          font-size: 1.4rem;
        }

        .cert-body p {
          margin: 0;
          color: var(--muted-plum-gray);
          line-height: 1.6;
          font-size: 0.9rem;
        }

        .academy-section {
          padding: 80px 6%;
          background:
            radial-gradient(circle at 12% 20%, rgba(216, 167, 107, 0.16), transparent 28%),
            linear-gradient(135deg, var(--deep-plum), var(--rich-burgundy));
          color: white;
        }

        .academy-wrapper {
          max-width: 1280px;
          margin: 0 auto;
          text-align: center;
        }

        .academy-wrapper .section-label {
          color: #ffe4bb;
          background: rgba(255, 245, 243, 0.1);
          border-color: rgba(216, 167, 107, 0.38);
        }

        .academy-wrapper .section-title {
          color: white;
        }

        .academy-wrapper .section-title span {
          color: var(--champagne-gold);
        }

        .academy-intro {
          max-width: 820px;
          margin: 0 auto 40px;
          color: #f6dcd9;
          line-height: 1.8;
          font-size: 1rem;
        }

        .course-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          text-align: left;
        }

        .course-card {
          padding: 24px;
          border-radius: 24px;
          background: rgba(255, 253, 252, 0.1);
          border: 1px solid rgba(216, 167, 107, 0.28);
          backdrop-filter: blur(12px);
          transition: all 0.35s ease;
        }

        .course-card:hover {
          transform: translateY(-6px);
          background: rgba(255, 253, 252, 0.15);
        }

        .course-icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: var(--champagne-gold);
          color: var(--deep-plum);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          margin-bottom: 16px;
        }

        .course-card h3 {
          margin: 0 0 10px;
          color: white;
          font-size: 1rem;
          line-height: 1.4;
        }

        .course-card p {
          margin: 0;
          color: #f6dcd9;
          line-height: 1.6;
          font-size: 0.85rem;
        }

        .seo-section {
          padding: 80px 6%;
        }

        .seo-wrapper {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          align-items: stretch;
        }

        .seo-card {
          background: rgba(255, 253, 252, 0.94);
          border: 1px solid var(--light-rose-beige);
          border-radius: 30px;
          padding: 32px;
          box-shadow: 0 20px 50px rgba(58, 16, 38, 0.09);
        }

        .seo-card h2 {
          margin: 0 0 16px;
          color: var(--dark-wine);
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(1.5rem, 3vw, 2.2rem);
        }

        .seo-card p {
          margin: 0 0 16px;
          color: var(--muted-plum-gray);
          line-height: 1.7;
          font-size: 0.95rem;
        }

        .seo-list {
          margin: 20px 0 0;
          padding: 0;
          list-style: none;
          display: grid;
          gap: 12px;
        }

        .seo-list li {
          display: flex;
          gap: 10px;
          align-items: flex-start;
          color: var(--dark-wine);
          font-weight: 700;
          line-height: 1.5;
          font-size: 0.9rem;
        }

        .seo-list i {
          color: var(--rich-burgundy);
          margin-top: 3px;
        }

        .cta-section {
          padding: 0 6% 80px;
        }

        .cta-box {
          max-width: 1280px;
          margin: 0 auto;
          border-radius: 34px;
          padding: 42px;
          background:
            radial-gradient(circle at 10% 10%, rgba(216, 167, 107, 0.2), transparent 30%),
            linear-gradient(135deg, var(--deep-plum), var(--rich-burgundy));
          color: white;
          box-shadow: 0 24px 60px rgba(58, 16, 38, 0.22);
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 30px;
          align-items: center;
        }

        .cta-box h2 {
          margin: 0 0 12px;
          color: var(--champagne-gold);
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(1.6rem, 4vw, 2.5rem);
        }

        .cta-box p {
          margin: 0;
          color: #f6dcd9;
          line-height: 1.6;
          font-size: 0.95rem;
        }

        .cta-actions {
          display: flex;
          gap: 16px;
          justify-content: flex-end;
          flex-wrap: wrap;
        }

        .cta-btn {
          min-height: 50px;
          padding: 0 24px;
          border-radius: 14px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-weight: 800;
          text-transform: uppercase;
          font-size: 0.8rem;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .cta-btn.primary {
          background: var(--champagne-gold);
          color: var(--deep-plum);
        }

        .cta-btn.secondary {
          background: rgba(255, 253, 252, 0.12);
          color: white;
          border: 1px solid rgba(216, 167, 107, 0.35);
        }

        .cta-btn:hover {
          transform: translateY(-3px);
        }

        .fullscreen-modal {
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          width: 100vw !important;
          height: 100vh !important;
          z-index: 999999 !important;
          background: rgba(20, 5, 14, 0.96);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          cursor: zoom-out;
        }

        .fullscreen-modal img {
          width: auto;
          height: auto;
          max-width: 96vw;
          max-height: 90vh;
          object-fit: contain;
          border-radius: 18px;
          border: 2px solid rgba(216, 167, 107, 0.65);
          background: white;
          box-shadow: 0 30px 90px rgba(0, 0, 0, 0.6);
          cursor: default;
        }

        .fullscreen-close {
          position: fixed !important;
          top: 22px;
          right: 22px;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: none;
          background: var(--champagne-gold);
          color: var(--deep-plum);
          font-size: 1.25rem;
          cursor: pointer;
          z-index: 1000000 !important;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
          transition: all 0.3s ease;
        }

        .fullscreen-close:hover {
          transform: rotate(90deg) scale(1.08);
          background: white;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(35px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 1100px) {
          .course-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 1000px) {
          .about-founder-wrapper {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .founder-image-col {
            position: relative;
            top: 0;
            max-width: 450px;
            margin: 0 auto;
          }

          .founder-content {
            max-height: none;
            overflow-y: visible;
            padding-right: 0;
          }

          .cert-wrapper {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 850px) {
          .seo-wrapper {
            grid-template-columns: 1fr;
          }

          .cta-box {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .cta-actions {
            justify-content: center;
          }
        }

        @media (max-width: 768px) {
          .about-hero {
            padding: 100px 5% 60px;
          }

          .about-hero h1 {
            font-size: 1.8rem;
          }

          .about-section,
          .academy-section,
          .seo-section {
            padding: 50px 5%;
          }

          .cert-section,
          .cta-section {
            padding: 0 5% 50px;
          }

          .achievement-stats {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }

          .highlight-grid {
            grid-template-columns: 1fr;
          }

          .cert-wrapper {
            grid-template-columns: 1fr;
          }

          .course-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .mission-card {
            padding: 24px 20px;
          }

          .mission-text {
            font-size: 0.9rem;
          }

          .quote-text {
            font-size: 1rem;
          }

          .cta-box {
            padding: 30px 24px;
          }
        }

        @media (max-width: 480px) {
          .about-badge {
            font-size: 0.6rem;
          }

          .about-hero h1 {
            font-size: 1.5rem;
          }

          .about-hero p {
            font-size: 0.85rem;
          }

          .section-label {
            font-size: 0.65rem;
          }

          .founder-content h2 {
            font-size: 1.5rem;
          }

          .achievement-stats {
            grid-template-columns: 1fr;
          }

          .stat-card {
            padding: 12px;
          }

          .experience-list {
            padding: 15px;
          }

          .experience-list li {
            font-size: 0.85rem;
          }

          .mission-card {
            padding: 20px 16px;
          }

          .mission-text {
            font-size: 0.85rem;
          }

          .quote-text {
            font-size: 0.95rem;
          }

          .seo-card {
            padding: 24px 20px;
          }

          .cta-actions {
            flex-direction: column;
          }

          .cta-btn {
            width: 100%;
          }

          .fullscreen-close {
            top: 12px;
            right: 12px;
            width: 38px;
            height: 38px;
            font-size: 1rem;
          }
        }
      `}</style>

      <main className="about-page">
        <section className="about-hero">
          <div className="about-hero-content">
            <div className="about-badge">
              <i className="fa-solid fa-gem"></i>
              About Bindiya&apos;z
            </div>

            <h1>
              Best Salon & Academy in <span>Ananthapuramu</span>
            </h1>

            <p>
              Bindiya&apos;z The Signature Salon & Academy is a premium beauty
              salon and professional training academy in Ananthapuramu (Anantapur), led by
              founder SHAHIN with around 18 years of experience in beauty,
              makeup, bridal styling and salon training.
            </p>
          </div>
        </section>

        <section className="about-section">
          <div className="about-founder-wrapper">
            <div className="founder-image-col">
              <div
                className="founder-image-card clickable-image"
                onClick={() => openPreview("/images/shaheen.png")}
              >
                <img
                  src="/images/shaheen.png"
                  alt="SHAHIN - Founder, Makeup Artist, Beauty Trainer - Best Makeup Artist in Ananthapuramu Anantapur"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="founder-info-below">
                <h3>SHAHIN</h3>
                <p>
                  Founder, Makeup Artist, Beauty Trainer, Assessor and Salon Professional
                </p>
              </div>
            </div>

            <div className="founder-content">
              <div className="section-label">
                <i className="fa-solid fa-user-tie"></i>
                Founder Profile
              </div>

              <h2>
                Meet <span>SHAHIN</span>, the Vision Behind Bindiya&apos;z
              </h2>

              <p>
                SHAHIN is the founder of Bindiya&apos;z The Signature Salon
                &amp; Academy in Ananthapuramu (Anantapur). With around 18 years of experience
                in the beauty and salon industry, she has built a trusted name
                for bridal makeup, professional beauty services, hairstyling,
                makeup training and salon education.
              </p>

              <p>
                Her mission is to help women look confident, elegant and
                beautiful while also training students who want to build a
                professional career in the beauty industry. Bindiya&apos;z is
                known for premium salon services, practical training, academy
                guidance and career-focused beauty courses in Ananthapuramu.
              </p>

              <p>
                The academy is ISO certified and also connected with EMAX for
                advanced learning support. SHAHIN is also a member of IECE
                International Early Childhood Education, adding more value,
                discipline and professional standards to the academy approach.
              </p>

              <div className="achievement-stats">
                {achievements.map((item, index) => (
                  <div className="stat-card" key={index}>
                    <div className="stat-number">{item.number}</div>
                    <div className="stat-label">{item.label}</div>
                  </div>
                ))}
              </div>

              <div className="experience-list">
                <p>
                  <i
                    className="fa-solid fa-trophy"
                    style={{
                      marginRight: "8px",
                      color: "var(--champagne-gold)",
                    }}
                  ></i>
                  Experience & Achievements
                </p>
                <ul>
                  <li>18 years of professional experience in the beauty industry</li>
                  <li>Successfully completed haircuts for 2000+ clients</li>
                  <li>Trained 3200+ students in professional beauty courses</li>
                  <li>Provided professional makeup services for 2100+ clients</li>
                  <li>
                    Currently training aspiring beauticians and makeup artists
                    with advanced practical and professional techniques
                  </li>
                </ul>
              </div>

              <div className="highlight-grid">
                {highlights.map((item) => (
                  <div className="highlight-item" key={item}>
                    <i className="fa-solid fa-check"></i>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mission-card">
                <div className="mission-icon">
                  <i className="fa-solid fa-star-of-life"></i>
                </div>

                <div className="mission-text">
                  At Bindiya&apos;z The Signature Salon &amp; Academy, our
                  mission is to empower students with confidence, creativity and
                  industry-level skills to build successful careers in the
                  beauty field. We believe every student has talent, and with
                  the right guidance and training, they can achieve success.
                </div>

                <div className="quote-divider"></div>

                <div className="quote-text">
                  “Beauty is an art, and we create artists.”
                </div>

                <div className="quote-author">— SHAHIN, Founder</div>
              </div>
            </div>
          </div>
        </section>

        <section className="cert-section">
          <div className="cert-wrapper">
            <div className="cert-card">
              <div
                className="cert-img clickable-image"
                onClick={() => openPreview("/images/iso-certified.jpg")}
              >
                <img
                  src="/images/iso-certified.jpg"
                  alt="ISO Certified Bindiya'z Salon and Academy Ananthapuramu - Best Beauty Academy in Anantapur"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="cert-body">
                <h3>ISO Certified Academy</h3>
                <p>
                  Bindiya&apos;z follows professional standards in training,
                  service quality and academy guidance for students who want to
                  learn beauty and makeup professionally.
                </p>
              </div>
            </div>

            <div className="cert-card">
              <div
                className="cert-img clickable-image"
                onClick={() => openPreview("/images/nandhi.png")}
              >
                <img
                  src="/images/nandhi.png"
                  alt="Mahanandhi Award Recognition - SHAHIN Bindiya'z Salon Ananthapuramu - Award Winning Makeup Artist"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="cert-body">
                <h3>Mahanandhi Award Recognition</h3>
                <p>
                  SHAHIN&apos;s work and dedication in the beauty field is
                  highlighted with Mahanandhi Award recognition, making
                  Bindiya&apos;z a trusted name in Ananthapuramu.
                </p>
              </div>
            </div>

            <div className="cert-card">
              <div
                className="cert-img clickable-image"
                onClick={() => openPreview("/images/emax-collaboration.jpg")}
              >
                <img
                  src="/images/emax-collaboration.jpg"
                  alt="Bindiya'z Salon and Academy Combined with EMAX - Advanced Beauty Training Anantapur"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="cert-body">
                <h3>Combined with EMAX</h3>
                <p>
                  Bindiya&apos;z combines with EMAX to provide better learning
                  support, academy value and career-focused training for beauty
                  and makeup students.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="academy-section">
          <div className="academy-wrapper">
            <div className="section-label">
              <i className="fa-solid fa-graduation-cap"></i>
              Our Specializations
            </div>

            <h2 className="section-title">
              Professional Beauty Courses in <span>Ananthapuramu</span>
            </h2>

            <p className="academy-intro">
              We offer industry-focused training programs designed to help
              students build a successful career in the beauty field with
              practical salon knowledge and professional guidance.
            </p>

            <div className="course-grid">
              {courses.map((course) => (
                <div className="course-card" key={course.title}>
                  <div className="course-icon">
                    <i className={course.icon}></i>
                  </div>
                  <h3>{course.title}</h3>
                  <p>{course.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="seo-section">
          <div className="seo-wrapper">
            <div className="seo-card">
              <h2>Why Bindiya&apos;z is Trusted in Ananthapuramu</h2>

              <p>
                If you are searching for the best salon in Ananthapuramu, bridal
                makeup artist in Ananthapuramu, beauty parlour in Ananthapuramu or
                professional makeup academy near you, Bindiya&apos;z The
                Signature Salon &amp; Academy is a trusted choice for beauty,
                training and transformation.
              </p>

              <p>
                From bridal makeup to hairstyling, beauty parlour services,
                makeup classes and diploma courses, Bindiya&apos;z provides a
                complete beauty experience under one roof in Anantapur.
              </p>

              <ul className="seo-list">
                <li>
                  <i className="fa-solid fa-location-dot"></i>
                  Best salon and beauty academy in Ananthapuramu (Anantapur), Andhra Pradesh
                </li>
                <li>
                  <i className="fa-solid fa-ring"></i>
                  Bridal makeup, party makeup and professional hairstyling
                </li>
                <li>
                  <i className="fa-solid fa-award"></i>
                  ISO certified academy with experienced trainer SHAHIN
                </li>
                <li>
                  <i className="fa-solid fa-book-open"></i>
                  Diploma courses for makeup, mehendi, tattoo art and beauty
                  parlour management
                </li>
              </ul>
            </div>

            <div className="seo-card">
              <h2>Beauty Services & Career Training</h2>

              <p>
                Bindiya&apos;z is not only a beauty salon but also a
                career-building academy for students who want to learn
                professional makeup artistry, bridal makeup, hairstyling,
                mehendi, tattoo art and beauty parlour management in Ananthapuramu.
              </p>

              <p>
                The academy gives importance to practical training, real salon
                knowledge, customer service, confidence building and career
                guidance. Whether you want to book a salon service or join a
                beauty course, Bindiya&apos;z helps you move forward with
                professional support.
              </p>

              <ul className="seo-list">
                <li>
                  <i className="fa-solid fa-check-double"></i>
                  Training for beginners and advanced learners
                </li>
                <li>
                  <i className="fa-solid fa-check-double"></i>
                  Professional salon environment and practical exposure
                </li>
                <li>
                  <i className="fa-solid fa-check-double"></i>
                  Career-focused beauty and makeup education
                </li>
                <li>
                  <i className="fa-solid fa-check-double"></i>
                  Trusted by customers and students in Ananthapuramu
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-box">
            <div>
              <h2>Book a Service or Join a Course</h2>
              <p>
                Contact Bindiya&apos;z The Signature Salon &amp; Academy for
                bridal makeup, salon services, professional makeup courses,
                beauty training, course fee details and admission enquiries in
                Ananthapuramu.
              </p>
            </div>

            <div className="cta-actions">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  "Hello Bindiya'z The Signature Salon & Academy, I want to know about salon services and beauty courses."
                )}`}
                className="cta-btn primary"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-whatsapp"></i>
                WhatsApp Now
              </a>

              <a href="tel:+916300593450" className="cta-btn secondary">
                <i className="fa-solid fa-phone"></i>
                Call Now
              </a>
            </div>
          </div>
        </section>
      </main>

      {previewImage && (
        <div className="fullscreen-modal" onClick={closePreview}>
          <button
            type="button"
            className="fullscreen-close"
            onClick={closePreview}
            aria-label="Close fullscreen image"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>

          <img
            src={previewImage}
            alt="Fullscreen Preview - Bindiya'z Salon and Academy Ananthapuramu"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

export default About;