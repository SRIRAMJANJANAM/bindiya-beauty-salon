import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    reason: "",
    message: "",
  });

  const [error, setError] = useState("");

  const whatsappNumber = "916300593450";

  const reasonOptions = [
    "Training Enquiry",
    "Academy Admission",
    "Course Fee Details",
    "Certificate Details",
    "Makeup Training",
    "Beauty Parlour Course",
    "Job / Career Enquiry",
    "Collaboration",
    "General Enquiry",
    "Feedback",
    "Complaint",
    "Other",
  ];

  const socialLinks = [
    {
      name: "Instagram",
      icon: "fa-brands fa-instagram",
      link: "https://www.instagram.com/bindiya_makeup_artist_atp/",
    },
    {
      name: "Facebook",
      icon: "fa-brands fa-facebook-f",
      link: "https://www.facebook.com/share/18LkoJoBc9/",
    },
    {
      name: "WhatsApp",
      icon: "fa-brands fa-whatsapp",
      link: `https://wa.me/${whatsappNumber}`,
    },
    {
      name: "YouTube",
      icon: "fa-brands fa-youtube",
      link: "https://youtube.com/@shahinsulthana5558?si=zp-wKjxx1ExyDT20",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (!formData.phone.trim()) {
      setError("Please enter your phone number.");
      return;
    }

    if (!formData.reason) {
      setError("Please select your reason.");
      return;
    }

    const contactMessage = `Hello Bindiya'z The Signature Salon & Academy,

I want to contact you.

Name: ${formData.name}
Phone: ${formData.phone}
Reason: ${formData.reason}

Message: ${formData.message || "No extra message"}

Please respond to me.`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      contactMessage
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  // Contact Page Schema
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://bindiyasalon.com/contact",
    "name": "Contact Bindiya'z Salon & Academy - Best Beauty Salon in Ananthapuramu (Anantapur)",
    "description": "Contact Bindiya'z The Signature Salon & Academy in Ananthapuramu (Anantapur), Andhra Pradesh for training enquiries, academy admissions, bridal makeup, beauty services, course fee details, certificate information, and general enquiries.",
    "url": "https://bindiyasalon.com/contact",
    "provider": {
      "@type": "BeautySalon",
      "name": "Bindiya'z The Signature Salon & Academy",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ananthapuramu",
        "addressRegion": "Andhra Pradesh",
        "addressCountry": "IN"
      },
      "telephone": "+916300593450"
    }
  };

  // Contact Point Schema
  const contactPointSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPoint",
    "telephone": "+916300593450",
    "contactType": "customer service",
    "contactOption": ["WhatsApp", "VoiceCall"],
    "areaServed": "Ananthapuramu",
    "availableLanguage": ["English", "Telugu", "Hindi"],
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "09:00",
      "closes": "20:00"
    }
  };

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": "https://bindiyasalon.com/#organization",
    "name": "Bindiya'z The Signature Salon & Academy",
    "alternateName": "Bindiya'z Salon and Academy Anantapur",
    "url": "https://bindiyasalon.com/",
    "logo": "https://bindiyasalon.com/images/logo.png",
    "description": "Best beauty salon and professional makeup academy in Ananthapuramu (Anantapur), Andhra Pradesh. ISO certified academy offering bridal makeup, beauty services, and professional training courses.",
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
      "availableLanguage": ["English", "Telugu", "Hindi"]
    },
    "sameAs": [
      "https://www.instagram.com/bindiya_makeup_artist_atp/",
      "https://www.facebook.com/share/18LkoJoBc9/",
      "https://youtube.com/@shahinsulthana5558",
      `https://wa.me/${whatsappNumber}`
    ]
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
        "item": "https://bindiyasalon.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Contact Bindiya'z - Best Salon & Academy in Ananthapuramu",
        "item": "https://bindiyasalon.com/contact"
      }
    ]
  };

  // FAQ Schema for common contact questions
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How can I contact Bindiya'z Salon & Academy in Ananthapuramu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can contact Bindiya'z The Signature Salon & Academy by phone at +916300593450, via WhatsApp at the same number, through the contact form on this page, or by visiting the salon in Ananthapuramu, Andhra Pradesh."
        }
      },
      {
        "@type": "Question",
        "name": "What are the training courses offered at Bindiya'z Academy in Anantapur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bindiya'z Academy offers Advanced Diploma in Professional Makeup Artistry, Diploma in Beauty Parlour Management, Diploma in Mehendi and Tattoo Art, and Diploma in Bridal Makeup and Hairstyling."
        }
      },
      {
        "@type": "Question",
        "name": "How to get course fee details for beauty training in Ananthapuramu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can contact us via WhatsApp at +916300593450 or fill the contact form on this page selecting 'Course Fee Details' as your reason to get complete information about course fees and admission."
        }
      },
      {
        "@type": "Question",
        "name": "Where is Bindiya'z Salon located in Ananthapuramu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bindiya'z The Signature Salon & Academy is located in Ananthapuramu (Anantapur), Andhra Pradesh. You can use the Google Maps on this page to get exact directions to our location."
        }
      }
    ]
  };

  // Training Course Schema
  const trainingCourseSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Beauty Training Courses at Bindiya'z Academy Ananthapuramu",
    "description": "Professional beauty and makeup training courses offered at Bindiya'z The Signature Salon & Academy in Ananthapuramu",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Course",
          "name": "Advanced Diploma in Professional Makeup Artistry",
          "description": "Professional makeup training for beginners and advanced learners"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Course",
          "name": "Diploma in Beauty Parlour Management",
          "description": "Learn salon services, customer handling, and professional parlour management"
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Course",
          "name": "Diploma in Mehendi and Tattoo Art",
          "description": "Creative mehendi designs and tattoo art training"
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Course",
          "name": "Diploma in Bridal Makeup and Hairstyling",
          "description": "Complete bridal makeover training including makeup, hairstyling, and draping"
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags for SEO */}
        <title>Contact Bindiya'z Salon & Academy - Best Beauty Salon in Ananthapuramu (Anantapur) | Training Enquiry & Beauty Services</title>
        <meta name="title" content="Contact Bindiya'z Salon & Academy - Best Beauty Salon in Ananthapuramu (Anantapur) | Training Enquiry & Beauty Services" />
        <meta name="description" content="Contact Bindiya'z The Signature Salon & Academy in Ananthapuramu (Anantapur), Andhra Pradesh. Enquire about training courses, academy admissions, bridal makeup, beauty services, course fee details, certificate information, and career guidance. Call or WhatsApp +916300593450." />
        <meta name="keywords" content="contact Bindiya salon Ananthapuramu, Bindiya salon phone number Anantapur, beauty salon contact Ananthapuramu, makeup academy contact Anantapur, training enquiry Ananthapuramu, academy admission Anantapur, course fee details Ananthapuramu, beauty parlour course enquiry, bridal makeup contact, WhatsApp salon booking, beauty training contact number, best salon in Ananthapuramu contact, Bindiya'z academy address" />
        <meta name="author" content="Bindiya'z The Signature Salon & Academy" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://bindiyasalon.com/contact" />
        
        {/* Geo Meta Tags for Local SEO - Ananthapuramu/Anantapur */}
        <meta name="geo.region" content="IN-AP" />
        <meta name="geo.placename" content="Ananthapuramu" />
        <meta name="geo.position" content="14.6761;77.5957" />
        <meta name="ICBM" content="14.6761, 77.5957" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bindiyasalon.com/contact" />
        <meta property="og:title" content="Contact Bindiya'z Salon & Academy - Best Beauty Salon in Ananthapuramu (Anantapur)" />
        <meta property="og:description" content="Contact Bindiya'z The Signature Salon & Academy in Ananthapuramu for training enquiries, academy admissions, bridal makeup, beauty services, and course fee details. Call or WhatsApp +916300593450." />
        <meta property="og:image" content="https://bindiyasalon.com/images/shaheen.png" />
        <meta property="og:image:alt" content="Contact Bindiya'z Salon - Best Beauty Salon in Ananthapuramu" />
        <meta property="og:site_name" content="Bindiya'z The Signature Salon & Academy" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:phone_number" content="+916300593450" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://bindiyasalon.com/contact" />
        <meta property="twitter:title" content="Contact Bindiya'z Salon - Best Beauty Salon in Ananthapuramu" />
        <meta property="twitter:description" content="Contact us for training enquiries, beauty services, and academy admissions in Ananthapuramu, Andhra Pradesh. Call or WhatsApp +916300593450." />
        <meta property="twitter:image" content="https://bindiyasalon.com/images/shaheen.png" />
        
        {/* Mobile & Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        
        {/* Additional SEO Tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#3A1026" />
        
        {/* Language Alternates */}
        <link rel="alternate" href="https://bindiyasalon.com/contact" hrefLang="en-in" />
        <link rel="alternate" href="https://bindiyasalon.com/te/contact" hrefLang="te" />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* WhatsApp Business Link */}
        <link rel="me" href="https://wa.me/916300593450" />
        
        {/* Structured Data / JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify(contactPageSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(contactPointSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(trainingCourseSchema)}
        </script>
        
        {/* Local Business Schema with Complete Details */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BeautySalon",
            "name": "Bindiya'z The Signature Salon & Academy",
            "alternateName": "Bindiya'z Salon Ananthapuramu",
            "description": "Best beauty salon and professional makeup academy in Ananthapuramu (Anantapur), Andhra Pradesh. ISO certified offering bridal makeup, threading, waxing, facials, haircut, manicure, pedicure, and professional beauty training courses.",
            "url": "https://bindiyasalon.com/",
            "telephone": "+916300593450",
            "email": "contact@bindiyasalon.com",
            "priceRange": "₹₹",
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
            "openingHours": ["Mo-Su 09:00-20:00"],
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "09:00",
                "closes": "20:00"
              }
            ],
            "sameAs": [
              "https://www.instagram.com/bindiya_makeup_artist_atp/",
              "https://www.facebook.com/share/18LkoJoBc9/",
              "https://youtube.com/@shahinsulthana5558",
              "https://wa.me/916300593450"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+916300593450",
              "contactType": "customer service",
              "contactOption": ["WhatsApp", "VoiceCall"],
              "availableLanguage": ["English", "Telugu", "Hindi"]
            }
          })}
        </script>
        
        {/* LocalBusiness Schema for Academy */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Bindiya'z The Signature Salon & Academy",
            "description": "ISO certified beauty salon and professional makeup training academy in Ananthapuramu",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Ananthapuramu",
              "addressRegion": "Andhra Pradesh"
            },
            "telephone": "+916300593450",
            "email": "contact@bindiyasalon.com"
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

        .contact-page {
          min-height: 100vh;
          background:
            radial-gradient(circle at 10% 15%, rgba(216, 167, 107, 0.16), transparent 28%),
            radial-gradient(circle at 92% 18%, rgba(198, 90, 120, 0.16), transparent 30%),
            linear-gradient(135deg, var(--blush-white), var(--warm-white));
          color: var(--muted-plum-gray);
          overflow: hidden;
        }

        .contact-hero {
          position: relative;
          padding: 120px 6% 75px;
          background:
            linear-gradient(135deg, rgba(58, 16, 38, 0.9), rgba(107, 22, 65, 0.86)),
            url("https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1600&q=80");
          background-size: cover;
          background-position: center;
          color: white;
          text-align: center;
        }

        .contact-hero::after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 20% 20%, rgba(216, 167, 107, 0.24), transparent 30%),
            radial-gradient(circle at 80% 80%, rgba(198, 90, 120, 0.2), transparent 30%);
          pointer-events: none;
        }

        .contact-hero-content {
          position: relative;
          z-index: 2;
          max-width: 900px;
          margin: auto;
          animation: fadeInUp 0.9s ease forwards;
        }

        .contact-badge {
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

        .contact-hero h1 {
          margin: 0 0 16px;
          color: var(--warm-white);
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(2.3rem, 5vw, 4.5rem);
          line-height: 1.08;
        }

        .contact-hero h1 span {
          color: var(--champagne-gold);
          font-style: italic;
        }

        .contact-hero p {
          max-width: 720px;
          margin: 0 auto;
          color: #f4dad8;
          line-height: 1.85;
          font-size: 1.02rem;
        }

        .contact-section {
          padding: 80px 6%;
        }

        .contact-wrapper {
          max-width: 1180px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 0.85fr;
          gap: 34px;
          align-items: start;
        }

        .contact-card,
        .info-card {
          background: rgba(255, 253, 252, 0.94);
          border: 1px solid var(--light-rose-beige);
          border-radius: 30px;
          box-shadow: 0 24px 60px rgba(58, 16, 38, 0.12);
          overflow: hidden;
          animation: fadeInUp 0.9s ease forwards;
        }

        .contact-card-head {
          padding: 28px 28px 20px;
          background: linear-gradient(135deg, var(--warm-white), var(--pale-pink));
          border-bottom: 1px solid var(--light-rose-beige);
        }

        .contact-card-head h2 {
          margin: 0 0 8px;
          color: var(--dark-wine);
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(1.8rem, 3vw, 2.5rem);
        }

        .contact-card-head p {
          margin: 0;
          color: var(--muted-plum-gray);
          line-height: 1.7;
        }

        .contact-form {
          padding: 28px;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group.full {
          grid-column: 1 / -1;
        }

        .form-group label {
          color: var(--dark-wine);
          font-weight: 900;
          font-size: 0.9rem;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          border: 1px solid var(--light-rose-beige);
          background: var(--warm-white);
          color: var(--dark-wine);
          min-height: 52px;
          border-radius: 14px;
          padding: 0 16px;
          font-size: 0.95rem;
          outline: none;
          transition: all 0.3s ease;
        }

        .form-group textarea {
          min-height: 130px;
          padding: 14px 16px;
          resize: vertical;
          line-height: 1.6;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          border-color: var(--rose-pink);
          box-shadow: 0 0 0 4px rgba(198, 90, 120, 0.12);
        }

        .error-box {
          margin-top: 18px;
          padding: 13px 16px;
          border-radius: 14px;
          background: #ffe8e8;
          color: #8b1e1e;
          font-weight: 800;
          line-height: 1.5;
          animation: shake 0.35s ease;
        }

        .contact-submit {
          width: 100%;
          min-height: 56px;
          margin-top: 22px;
          border: none;
          border-radius: 14px;
          background: linear-gradient(135deg, #25D366, #128C7E);
          color: white;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-size: 0.9rem;
          font-weight: 900;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          cursor: pointer;
          box-shadow: 0 16px 34px rgba(37, 211, 102, 0.26);
          transition: all 0.35s ease;
          position: relative;
          overflow: hidden;
        }

        .contact-submit::before {
          content: "";
          position: absolute;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.22);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          transition: width 0.55s ease, height 0.55s ease;
        }

        .contact-submit:hover::before {
          width: 430px;
          height: 430px;
        }

        .contact-submit:hover {
          transform: translateY(-4px);
          box-shadow: 0 22px 44px rgba(37, 211, 102, 0.34);
        }

        .contact-submit i,
        .contact-submit span {
          position: relative;
          z-index: 2;
        }

        .info-card {
          position: sticky;
          top: 24px;
        }

        .info-image {
          min-height: 250px;
          background:
            linear-gradient(180deg, rgba(58, 16, 38, 0.05), rgba(58, 16, 38, 0.58)),
            url("https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&w=1200&q=80");
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: flex-end;
          padding: 24px;
        }

        .info-image h3 {
          margin: 0;
          color: white;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 2rem;
          line-height: 1.12;
          text-shadow: 0 10px 24px rgba(0, 0, 0, 0.35);
        }

        .info-body {
          padding: 24px;
        }

        .contact-info-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 24px;
        }

        .contact-info-item {
          display: flex;
          gap: 13px;
          align-items: flex-start;
          padding: 14px;
          border-radius: 18px;
          background: var(--pale-pink);
          border: 1px solid var(--light-rose-beige);
        }

        .contact-info-icon {
          min-width: 42px;
          height: 42px;
          border-radius: 50%;
          background: var(--rich-burgundy);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .contact-info-item h4 {
          margin: 0 0 5px;
          color: var(--dark-wine);
          font-size: 0.96rem;
        }

        .contact-info-item p,
        .contact-info-item a {
          margin: 0;
          color: var(--muted-plum-gray);
          line-height: 1.5;
          text-decoration: none;
          font-weight: 700;
        }

        .social-title {
          margin: 0 0 14px;
          color: var(--dark-wine);
          font-size: 1.1rem;
        }

        .social-links {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
        }

        .social-link {
          min-height: 52px;
          border-radius: 15px;
          background: var(--warm-white);
          border: 1px solid var(--light-rose-beige);
          color: var(--rich-burgundy);
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          font-size: 1.25rem;
          box-shadow: 0 10px 22px rgba(58, 16, 38, 0.07);
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: var(--rich-burgundy);
          color: white;
          transform: translateY(-5px) rotate(4deg);
        }

        .training-section {
          padding: 0 6% 80px;
        }

        .training-box {
          max-width: 1180px;
          margin: 0 auto;
          border-radius: 34px;
          padding: 42px;
          background:
            radial-gradient(circle at 10% 10%, rgba(216, 167, 107, 0.2), transparent 30%),
            linear-gradient(135deg, var(--deep-plum), var(--rich-burgundy));
          color: white;
          box-shadow: 0 24px 60px rgba(58, 16, 38, 0.22);
          overflow: hidden;
          position: relative;
        }

        .training-box::after {
          content: "";
          position: absolute;
          right: -80px;
          bottom: -80px;
          width: 230px;
          height: 230px;
          border-radius: 50%;
          background: rgba(216, 167, 107, 0.18);
          filter: blur(4px);
        }

        .training-content {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 32px;
          align-items: center;
        }

        .training-text h2 {
          margin: 0 0 14px;
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(2rem, 4vw, 3.2rem);
          color: var(--champagne-gold);
        }

        .training-text p {
          margin: 0 0 22px;
          color: #f6dcd9;
          line-height: 1.8;
        }

        .training-btn {
          min-height: 52px;
          padding: 0 22px;
          border-radius: 12px;
          background: var(--champagne-gold);
          color: var(--deep-plum);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-weight: 900;
          text-transform: uppercase;
          font-size: 0.82rem;
          transition: all 0.3s ease;
        }

        .training-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 34px rgba(216, 167, 107, 0.28);
        }

        .training-points {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .training-point {
          padding: 18px;
          border-radius: 20px;
          background: rgba(255, 253, 252, 0.1);
          border: 1px solid rgba(216, 167, 107, 0.3);
          backdrop-filter: blur(10px);
        }

        .training-point i {
          color: var(--champagne-gold);
          font-size: 1.35rem;
          margin-bottom: 10px;
        }

        .training-point h4 {
          margin: 0 0 6px;
          color: white;
          font-size: 1rem;
        }

        .training-point p {
          margin: 0;
          color: #f6dcd9;
          font-size: 0.9rem;
          line-height: 1.55;
        }

        .map-section {
          padding: 0 6% 80px;
        }

        .map-wrapper {
          max-width: 1180px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 28px;
          align-items: stretch;
        }

        .map-content {
          background: var(--warm-white);
          border: 1px solid var(--light-rose-beige);
          border-radius: 30px;
          padding: 30px;
          box-shadow: 0 20px 50px rgba(58, 16, 38, 0.1);
        }

        .map-content h2 {
          margin: 0 0 12px;
          color: var(--dark-wine);
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(1.8rem, 4vw, 2.8rem);
        }

        .map-content p {
          margin: 0 0 22px;
          color: var(--muted-plum-gray);
          line-height: 1.8;
        }

        .direction-btn {
          min-height: 52px;
          padding: 0 22px;
          border-radius: 12px;
          background: var(--rich-burgundy);
          color: white;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-weight: 900;
          text-transform: uppercase;
          font-size: 0.82rem;
          transition: all 0.3s ease;
        }

        .direction-btn:hover {
          background: var(--deep-plum);
          transform: translateY(-4px);
        }

        .map-frame {
          min-height: 430px;
          border-radius: 30px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(58, 16, 38, 0.14);
          border: 1px solid var(--light-rose-beige);
          background: var(--pale-pink);
        }

        .map-frame iframe {
          width: 100%;
          height: 100%;
          min-height: 430px;
          border: none;
          display: block;
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

        @keyframes shake {
          0%, 100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-5px);
          }
          75% {
            transform: translateX(5px);
          }
        }

        @media (max-width: 980px) {
          .contact-wrapper,
          .training-content,
          .map-wrapper {
            grid-template-columns: 1fr;
          }

          .info-card {
            position: relative;
            top: 0;
          }

          .training-points {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 650px) {
          .contact-hero {
            padding: 105px 5% 65px;
          }

          .contact-hero h1 {
            font-size: 2.1rem;
          }

          .contact-hero p {
            font-size: 0.95rem;
          }

          .contact-section {
            padding: 60px 5%;
          }

          .contact-card-head,
          .contact-form,
          .info-body {
            padding: 22px 18px;
          }

          .form-grid {
            grid-template-columns: 1fr;
          }

          .info-image {
            min-height: 220px;
          }

          .social-links {
            grid-template-columns: repeat(2, 1fr);
          }

          .training-section,
          .map-section {
            padding: 0 5% 60px;
          }

          .training-box {
            padding: 28px 20px;
            border-radius: 26px;
          }

          .training-points {
            grid-template-columns: 1fr;
          }

          .map-content {
            padding: 24px 20px;
          }

          .map-frame,
          .map-frame iframe {
            min-height: 360px;
          }
        }

        @media (max-width: 420px) {
          .contact-badge {
            font-size: 0.66rem;
            letter-spacing: 1px;
          }

          .contact-hero h1 {
            font-size: 1.85rem;
          }

          .info-image h3 {
            font-size: 1.65rem;
          }
        }
      `}</style>

      <main className="contact-page">
        <section className="contact-hero">
          <div className="contact-hero-content">
            <div className="contact-badge">
              <i className="fa-solid fa-envelope-open-text"></i>
              Contact Us
            </div>

            <h1>
              Get in Touch with <span>Bindiya’z</span>
            </h1>

            <p>
              Contact Bindiya’z The Signature Salon & Academy in Ananthapuramu (Anantapur) for training
              enquiries, academy admissions, feedback, general enquiries,
              collaborations and more.
            </p>
          </div>
        </section>

        <section className="contact-section">
          <div className="contact-wrapper">
            <div className="contact-card">
              <div className="contact-card-head">
                <h2>Send Your Enquiry</h2>
                <p>
                  Fill your name, phone number and reason. Your enquiry will be
                  sent directly to WhatsApp for a quick response.
                </p>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group full">
                    <label>Reason *</label>
                    <select
                      name="reason"
                      value={formData.reason}
                      onChange={handleChange}
                    >
                      <option value="">Select reason</option>
                      {reasonOptions.map((reason) => (
                        <option value={reason} key={reason}>
                          {reason}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group full">
                    <label>Message</label>
                    <textarea
                      name="message"
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>

                {error && <div className="error-box">{error}</div>}

                <button type="submit" className="contact-submit">
                  <i className="fa-brands fa-whatsapp"></i>
                  <span>Send on WhatsApp</span>
                </button>
              </form>
            </div>

            <div className="info-card">
              <div className="info-image">
                <h3>
                  Beauty, Training <br />
                  and Confidence
                </h3>
              </div>

              <div className="info-body">
                <div className="contact-info-list">
                  <div className="contact-info-item">
                    <div className="contact-info-icon">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <div>
                      <h4>Call / WhatsApp</h4>
                      <a href="tel:+916300593450">+91 63005 93450</a>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="contact-info-icon">
                      <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div>
                      <h4>Location</h4>
                      <p>Ananthapuramu (Anantapur), Andhra Pradesh</p>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="contact-info-icon">
                      <i className="fa-solid fa-graduation-cap"></i>
                    </div>
                    <div>
                      <h4>Academy Enquiry</h4>
                      <p>Training, course fee and admission details</p>
                    </div>
                  </div>
                </div>

                <h3 className="social-title">Follow Us</h3>

                <div className="social-links">
                  {socialLinks.map((social) => (
                    <a
                      href={social.link}
                      className="social-link"
                      key={social.name}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.name}
                    >
                      <i className={social.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="training-section">
          <div className="training-box">
            <div className="training-content">
              <div className="training-text">
                <h2>Academy & Training Enquiry</h2>
                <p>
                  Interested in learning beauty, makeup or salon skills? Contact
                  Bindiya’z The Signature Salon & Academy in Ananthapuramu for training details,
                  admission information, course fee, certificate details and
                  career guidance.
                </p>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    "Hello Bindiya'z The Signature Salon & Academy, I want to know about training courses, course fees and admission details."
                  )}`}
                  className="training-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-whatsapp"></i>
                  Ask About Training
                </a>
              </div>

              <div className="training-points">
                <div className="training-point">
                  <i className="fa-solid fa-graduation-cap"></i>
                  <h4>Training Enquiry</h4>
                  <p>Ask about beauty and salon training course details.</p>
                </div>

                <div className="training-point">
                  <i className="fa-solid fa-certificate"></i>
                  <h4>Certificate Details</h4>
                  <p>Know about certificate and academy-related details.</p>
                </div>

                <div className="training-point">
                  <i className="fa-solid fa-indian-rupee-sign"></i>
                  <h4>Course Fee</h4>
                  <p>Get course fee, duration and joining information.</p>
                </div>

                <div className="training-point">
                  <i className="fa-solid fa-briefcase"></i>
                  <h4>Career Guidance</h4>
                  <p>Start your journey in beauty and salon career.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="map-section">
          <div className="map-wrapper">
            <div className="map-content">
              <p className="contact-badge">
                <i className="fa-solid fa-map-location-dot"></i>
                Find Us
              </p>

              <h2>Visit Our Salon & Academy in Ananthapuramu</h2>

              <p>
                Visit Bindiya’z The Signature Salon & Academy in Ananthapuramu (Anantapur),
                Andhra Pradesh. Use the map to find directions easily.
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Bindiya+Salon+Anantapur+Andhra+Pradesh"
                className="direction-btn"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-solid fa-diamond-turn-right"></i>
                Get Directions
              </a>
            </div>

            <div className="map-frame">
              <iframe
                title="Bindiya Salon Ananthapuramu Anantapur Map - Best Beauty Salon Location"
                src="https://www.google.com/maps?q=Bindiya+Salon+Anantapur+Andhra+Pradesh&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Contact;