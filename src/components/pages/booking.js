import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Booking() {
  const location = useLocation();
  const [searchParams] = useSearchParams();

  const serviceFromUrl = searchParams.get("service");
  const serviceFromState = location.state?.serviceName || "";

  const services = useMemo(
    () => [
      "Threading",
      "Waxing",
      "Bleach",
      "D-Tan",
      "Manicure",
      "Pedicure",
      "Facials",
      "Hair Cut",
      "Silver Bridal Package",
      "Gold Bridal Package",
      "Platinum Bridal Package",
      "Premium Luxury Bridal",
      "Glow Combo",
      "Clean & Fresh Combo",
      "Smooth Skin Combo",
      "Luxury Glow Combo",
      "Full Care Combo",
      "Other Service",
    ],
    []
  );

  const todayDate = useMemo(() => {
    const today = new Date();
    const timezoneOffset = today.getTimezoneOffset() * 60000;
    return new Date(today.getTime() - timezoneOffset)
      .toISOString()
      .split("T")[0];
  }, []);

  const timeSlots = [
    { label: "10:00 AM", value: "10:00 AM", icon: "fa-regular fa-sun" },
    { label: "11:00 AM", value: "11:00 AM", icon: "fa-regular fa-clock" },
    { label: "12:00 PM", value: "12:00 PM", icon: "fa-solid fa-sun" },
    { label: "01:00 PM", value: "01:00 PM", icon: "fa-solid fa-clock" },
    { label: "02:00 PM", value: "02:00 PM", icon: "fa-regular fa-clock" },
    { label: "03:00 PM", value: "03:00 PM", icon: "fa-solid fa-spa" },
    { label: "04:00 PM", value: "04:00 PM", icon: "fa-regular fa-clock" },
    {
      label: "05:00 PM",
      value: "05:00 PM",
      icon: "fa-solid fa-wand-magic-sparkles",
    },
    { label: "06:00 PM", value: "06:00 PM", icon: "fa-regular fa-moon" },
    { label: "07:00 PM", value: "07:00 PM", icon: "fa-solid fa-moon" },
  ];

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: serviceFromUrl || serviceFromState || "",
    date: todayDate,
    time: "",
    message: "",
  });

  const [error, setError] = useState("");

  useEffect(() => {
    if (serviceFromUrl || serviceFromState) {
      setFormData((prev) => ({
        ...prev,
        service: serviceFromUrl || serviceFromState,
      }));
    }
  }, [serviceFromUrl, serviceFromState]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  const openWhatsApp = (customService = null) => {
    const selectedService = customService || formData.service;

    if (!formData.name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (!formData.phone.trim()) {
      setError("Please enter your phone number.");
      return;
    }

    if (!selectedService) {
      setError("Please select a service.");
      return;
    }

    if (!formData.date) {
      setError("Please select your appointment date.");
      return;
    }

    if (formData.date < todayDate) {
      setError("Please select today or a future date only.");
      return;
    }

    if (!formData.time) {
      setError("Please select your appointment time.");
      return;
    }

    const whatsappNumber = "916300593450";

    const bookingMessage = `Hello Bindiya'z The Signature Salon & Academy,

I want to book an appointment.

Name: ${formData.name}
Phone: ${formData.phone}
Service: ${selectedService}
Preferred Date: ${formData.date}
Preferred Time: ${formData.time}

Message: ${formData.message || "No extra message"}

Please confirm my appointment.`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      bookingMessage
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    openWhatsApp();
  };

  // Booking Schema for Appointment
  const bookingSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://bindiyazbeautysalon.in/booking",
    "name": "Book Appointment - Best Beauty Salon in Ananthapuramu | Bindiya'z Salon & Academy",
    "description": "Book your appointment online at Bindiya'z The Signature Salon & Academy in Ananthapuramu (Anantapur). Professional bridal makeup, threading, waxing, facials, haircut, manicure, pedicure and beauty services. WhatsApp booking available.",
    "url": "https://bindiyazbeautysalon.in/booking",
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
    },
    "potentialAction": {
      "@type": "CommunicateAction",
      "name": "Book Appointment via WhatsApp",
      "target": `https://wa.me/916300593450`,
      "description": "Send a WhatsApp message to book your appointment instantly"
    }
  };

  // Service Offerings Schema
  const serviceOfferingsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Beauty Services Available at Bindiya'z Salon Ananthapuramu",
    "description": "Complete range of professional beauty services for women in Ananthapuramu, Andhra Pradesh",
    "itemListElement": services.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": service,
        "provider": {
          "@type": "BeautySalon",
          "name": "Bindiya'z The Signature Salon & Academy",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Ananthapuramu",
            "addressRegion": "Andhra Pradesh"
          }
        }
      }
    }))
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
        "name": "Booking - Reserve Your Beauty Services in Ananthapuramu",
        "item": "https://bindiyazbeautysalon.in/booking"
      }
    ]
  };

  // Action Schema for Booking
  const actionSchema = {
    "@context": "https://schema.org",
    "@type": "Action",
    "name": "Book Appointment at Bindiya'z Salon",
    "description": "Schedule your beauty appointment online or via WhatsApp",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://bindiyazbeautysalon.in/booking",
      "actionPlatform": [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform"
      ],
      "contentType": "text/html"
    },
    "potentialAction": {
      "@type": "CommunicateAction",
      "name": "Contact via WhatsApp",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://wa.me/916300593450"
      }
    }
  };

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags for SEO */}
        <title>Book Appointment - Best Beauty Salon in Ananthapuramu (Anantapur) | Bindiya'z Salon & Academy | WhatsApp Booking</title>
        <meta name="title" content="Book Appointment - Best Beauty Salon in Ananthapuramu (Anantapur) | Bindiya'z Salon & Academy | WhatsApp Booking" />
        <meta name="description" content="Book your appointment online at Bindiya'z The Signature Salon & Academy in Ananthapuramu (Anantapur), Andhra Pradesh. Professional bridal makeup, threading, waxing, facials, haircut, manicure, pedicure, and beauty services. Easy WhatsApp booking with instant confirmation. Best salon in Ananthapuramu for women's beauty care." />
        <meta name="keywords" content="book appointment salon ananthapuramu, book appointment salon anantapur, salon booking ananthapuramu, beauty salon booking anantapur, bridal makeup booking ananthapuramu, threading appointment anantapur, waxing booking ananthapuramu, facial booking anantapur, haircut appointment ananthapuramu, manicure pedicure booking, whatsapp booking salon, online appointment beauty salon ananthapuramu, best salon booking anantapur, Bindiya'z salon appointment" />
        <meta name="author" content="Bindiya'z The Signature Salon & Academy" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://bindiyazbeautysalon.in/booking" />
        
        {/* Geo Meta Tags for Local SEO - Ananthapuramu/Anantapur */}
        <meta name="geo.region" content="IN-AP" />
        <meta name="geo.placename" content="Ananthapuramu" />
        <meta name="geo.position" content="14.6761;77.5957" />
        <meta name="ICBM" content="14.6761, 77.5957" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bindiyazbeautysalon.in/booking" />
        <meta property="og:title" content="Book Appointment - Best Beauty Salon in Ananthapuramu (Anantapur) | Bindiya'z Salon & Academy" />
        <meta property="og:description" content="Book your beauty appointment online at Bindiya'z The Signature Salon & Academy in Ananthapuramu. Professional bridal makeup, threading, waxing, facials, haircut, manicure, pedicure & more. WhatsApp booking with instant confirmation." />
        <meta property="og:image" content="https://bindiyazbeautysalon.in/images/shaheen.png" />
        <meta property="og:image:alt" content="Book Appointment at Bindiya'z Salon - Best Beauty Salon in Ananthapuramu" />
        <meta property="og:site_name" content="Bindiya'z The Signature Salon & Academy" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:phone_number" content="+916300593450" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://bindiyazbeautysalon.in/booking" />
        <meta property="twitter:title" content="Book Appointment - Bindiya'z Salon - Best Beauty Salon in Ananthapuramu" />
        <meta property="twitter:description" content="Book your beauty appointment online via WhatsApp. Professional salon services for women in Ananthapuramu, Andhra Pradesh." />
        <meta property="twitter:image" content="https://bindiyazbeautysalon.in/images/shaheen.png" />
        
        {/* Mobile & Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        
        {/* Additional SEO Tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#3A1026" />
        
        {/* Language Alternates */}
        <link rel="alternate" href="https://bindiyazbeautysalon.in/booking" hrefLang="en-in" />
        <link rel="alternate" href="https://bindiyazbeautysalon.in/te/booking" hrefLang="te" />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* WhatsApp Business Link */}
        <link rel="me" href="https://wa.me/916300593450" />
        
        {/* Structured Data / JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify(bookingSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceOfferingsSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(actionSchema)}
        </script>
        
        {/* Local Business Schema with Booking Action */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BeautySalon",
            "name": "Bindiya'z The Signature Salon & Academy",
            "alternateName": "Bindiya'z Salon Ananthapuramu",
            "description": "Best beauty salon and professional makeup academy in Ananthapuramu (Anantapur), Andhra Pradesh. Book appointment online for bridal makeup, threading, waxing, facials, haircut, manicure, pedicure and beauty services.",
            "url": "https://bindiyazbeautysalon.in/",
            "telephone": "+916300593450",
            "email": "contact@bindiyazbeautysalon.in",
            "priceRange": "₹₹",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Main Road, Near Clock Tower",
              "addressLocality": "Ananthapuramu",
              "addressRegion": "Andhra Pradesh",
              "postalCode": "515001",
              "addressCountry": "IN"
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
            "potentialAction": {
              "@type": "CommunicateAction",
              "name": "Book Appointment",
              "target": "https://wa.me/916300593450",
              "description": "Send a WhatsApp message to book your appointment"
            }
          })}
        </script>
        
        {/* FAQ Schema for common booking questions */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How to book an appointment at Bindiya'z Salon in Ananthapuramu?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can book your appointment by filling the booking form on this page or by sending a direct WhatsApp message to +916300593450. Provide your name, phone number, preferred service, date and time."
                }
              },
              {
                "@type": "Question",
                "name": "What beauty services are available for booking in Anantapur?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Bindiya'z Salon offers threading, waxing, bleach, D-Tan, manicure, pedicure, facials, haircut, bridal packages (Silver, Gold, Platinum, Premium Luxury), and combo packages like Glow Combo, Clean & Fresh Combo, Smooth Skin Combo, Luxury Glow Combo, and Full Care Combo."
                }
              },
              {
                "@type": "Question",
                "name": "Does Bindiya'z Salon accept online bookings?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, we accept online bookings through WhatsApp. Fill the appointment form on this page and click 'Book on WhatsApp' to send your booking request directly to us."
                }
              }
            ]
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

        .booking-page {
          min-height: 100vh;
          background:
            radial-gradient(circle at 10% 10%, rgba(216, 167, 107, 0.16), transparent 28%),
            radial-gradient(circle at 90% 20%, rgba(198, 90, 120, 0.16), transparent 30%),
            linear-gradient(135deg, var(--blush-white), var(--warm-white));
          color: var(--muted-plum-gray);
          overflow: hidden;
        }

        .booking-hero {
          position: relative;
          padding: 120px 6% 70px;
          background:
            linear-gradient(135deg, rgba(58, 16, 38, 0.9), rgba(107, 22, 65, 0.86)),
            url("https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1600&q=80");
          background-size: cover;
          background-position: center;
          text-align: center;
          color: white;
        }

        .booking-hero::after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 18% 20%, rgba(216, 167, 107, 0.25), transparent 28%),
            radial-gradient(circle at 82% 80%, rgba(198, 90, 120, 0.22), transparent 30%);
          pointer-events: none;
        }

        .booking-hero-content {
          position: relative;
          z-index: 2;
          max-width: 900px;
          margin: auto;
          animation: fadeInUp 0.9s ease forwards;
        }

        .booking-badge {
          display: inline-flex;
          align-items: center;
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

        .booking-hero h1 {
          margin: 0 0 16px;
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(2.3rem, 5vw, 4.5rem);
          line-height: 1.08;
          color: var(--warm-white);
        }

        .booking-hero h1 span {
          color: var(--champagne-gold);
          font-style: italic;
        }

        .booking-hero p {
          max-width: 720px;
          margin: 0 auto;
          color: #f4dad8;
          line-height: 1.85;
          font-size: 1.02rem;
        }

        .booking-section {
          padding: 80px 6%;
        }

        .booking-wrapper {
          max-width: 1180px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 0.85fr;
          gap: 34px;
          align-items: start;
        }

        .booking-card,
        .quick-card {
          background: rgba(255, 253, 252, 0.92);
          border: 1px solid var(--light-rose-beige);
          border-radius: 30px;
          box-shadow: 0 24px 60px rgba(58, 16, 38, 0.12);
          overflow: hidden;
          animation: fadeInUp 0.9s ease forwards;
        }

        .booking-card-head {
          padding: 28px 28px 20px;
          background: linear-gradient(135deg, var(--warm-white), var(--pale-pink));
          border-bottom: 1px solid var(--light-rose-beige);
        }

        .booking-card-head h2 {
          margin: 0 0 8px;
          color: var(--dark-wine);
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(1.8rem, 3vw, 2.5rem);
        }

        .booking-card-head p {
          margin: 0;
          color: var(--muted-plum-gray);
          line-height: 1.7;
        }

        .booking-form {
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
          min-height: 120px;
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

        .time-slot-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 12px;
        }

        .time-slot {
          min-height: 58px;
          border: 1px solid var(--light-rose-beige);
          background: var(--warm-white);
          color: var(--dark-wine);
          border-radius: 16px;
          cursor: pointer;
          font-weight: 900;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          transition: all 0.3s ease;
          box-shadow: 0 10px 24px rgba(58, 16, 38, 0.06);
        }

        .time-slot i {
          color: var(--rose-pink);
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .time-slot:hover {
          background: var(--pale-pink);
          transform: translateY(-4px);
          border-color: var(--rose-pink);
        }

        .time-slot.active {
          background: linear-gradient(135deg, var(--rich-burgundy), var(--deep-plum));
          color: white;
          border-color: var(--champagne-gold);
          box-shadow: 0 16px 34px rgba(107, 22, 65, 0.24);
          transform: translateY(-4px) scale(1.02);
        }

        .time-slot.active i {
          color: var(--champagne-gold);
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

        .booking-submit {
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

        .booking-submit::before {
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

        .booking-submit:hover::before {
          width: 420px;
          height: 420px;
        }

        .booking-submit:hover {
          transform: translateY(-4px);
          box-shadow: 0 22px 44px rgba(37, 211, 102, 0.34);
        }

        .booking-submit span,
        .booking-submit i {
          position: relative;
          z-index: 2;
        }

        .quick-card {
          position: sticky;
          top: 24px;
        }

        .quick-card-image {
          min-height: 270px;
          background:
            linear-gradient(180deg, rgba(58, 16, 38, 0.05), rgba(58, 16, 38, 0.55)),
            url("https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&w=1200&q=80");
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: flex-end;
          padding: 24px;
        }

        .quick-card-image h3 {
          margin: 0;
          color: white;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 2rem;
          line-height: 1.12;
          text-shadow: 0 10px 24px rgba(0, 0, 0, 0.35);
        }

        .quick-card-body {
          padding: 24px;
        }

        .quick-card-body p {
          margin: 0 0 18px;
          color: var(--muted-plum-gray);
          line-height: 1.75;
        }

        .quick-benefits {
          list-style: none;
          padding: 0;
          margin: 0 0 22px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .quick-benefits li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: var(--muted-plum-gray);
          line-height: 1.5;
          font-weight: 700;
        }

        .quick-benefits i {
          color: var(--champagne-gold);
          margin-top: 4px;
        }

        .call-box {
          padding: 16px;
          border-radius: 18px;
          background: var(--pale-pink);
          border: 1px solid var(--light-rose-beige);
          color: var(--dark-wine);
          font-weight: 900;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .call-box a {
          color: var(--rich-burgundy);
          text-decoration: none;
          white-space: nowrap;
        }

        .popular-services {
          max-width: 1180px;
          margin: 42px auto 0;
        }

        .popular-title {
          text-align: center;
          margin-bottom: 24px;
        }

        .popular-title h2 {
          margin: 0 0 8px;
          color: var(--dark-wine);
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(1.8rem, 4vw, 2.7rem);
        }

        .popular-title p {
          margin: 0;
          color: var(--muted-plum-gray);
        }

        .service-chip-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
        }

        .service-chip {
          border: 1px solid var(--light-rose-beige);
          background: var(--warm-white);
          color: var(--dark-wine);
          border-radius: 999px;
          min-height: 46px;
          padding: 0 18px;
          cursor: pointer;
          font-weight: 900;
          box-shadow: 0 10px 24px rgba(58, 16, 38, 0.07);
          transition: all 0.3s ease;
        }

        .service-chip:hover {
          background: var(--rich-burgundy);
          color: white;
          transform: translateY(-4px);
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
          .booking-wrapper {
            grid-template-columns: 1fr;
          }

          .quick-card {
            position: relative;
            top: 0;
          }
        }

        @media (max-width: 780px) {
          .time-slot-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 650px) {
          .booking-hero {
            padding: 105px 5% 62px;
          }

          .booking-hero h1 {
            font-size: 2.15rem;
          }

          .booking-hero p {
            font-size: 0.95rem;
          }

          .booking-section {
            padding: 58px 5%;
          }

          .booking-card-head,
          .booking-form {
            padding: 22px 18px;
          }

          .form-grid {
            grid-template-columns: 1fr;
          }

          .quick-card-image {
            min-height: 230px;
          }

          .quick-card-image h3 {
            font-size: 1.7rem;
          }

          .call-box {
            flex-direction: column;
            align-items: flex-start;
          }

          .service-chip {
            width: 100%;
          }
        }

        @media (max-width: 500px) {
          .time-slot-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .time-slot {
            min-height: 54px;
            font-size: 0.86rem;
          }
        }

        @media (max-width: 420px) {
          .booking-badge {
            font-size: 0.66rem;
            letter-spacing: 1px;
          }

          .booking-hero h1 {
            font-size: 1.9rem;
          }
        }
      `}</style>

      <main className="booking-page">
        <section className="booking-hero">
          <div className="booking-hero-content">
            <div className="booking-badge">
              <i className="fa-solid fa-calendar-check"></i>
              Book Your Appointment
            </div>

            <h1>
              Reserve Your <span>Beauty Time</span>
            </h1>

            <p>
              Book your appointment at Bindiya&apos;z The Signature Salon & Academy in Ananthapuramu (Anantapur).
              Select your service, preferred date and time. Your booking request
              will be sent directly to WhatsApp for quick confirmation.
            </p>
          </div>
        </section>

        <section className="booking-section">
          <div className="booking-wrapper">
            <div className="booking-card">
              <div className="booking-card-head">
                <h2>Appointment Details</h2>
                <p>
                  Fill your details and tap the WhatsApp button. We will receive
                  your booking request instantly.
                </p>
              </div>

              <form className="booking-form" onSubmit={handleSubmit}>
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
                      placeholder="Enter your mobile number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group full">
                    <label>Select Service *</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="">Choose your service</option>
                      {services.map((service) => (
                        <option value={service} key={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group full">
                    <label>Preferred Date *</label>
                    <input
                      type="date"
                      name="date"
                      min={todayDate}
                      value={formData.date}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group full">
                    <label>Preferred Time *</label>

                    <div className="time-slot-grid">
                      {timeSlots.map((slot) => (
                        <button
                          type="button"
                          key={slot.value}
                          className={`time-slot ${
                            formData.time === slot.value ? "active" : ""
                          }`}
                          onClick={() => {
                            setFormData((prev) => ({
                              ...prev,
                              time: slot.value,
                            }));
                            setError("");
                          }}
                        >
                          <i className={slot.icon}></i>
                          <span>{slot.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="form-group full">
                    <label>Message</label>
                    <textarea
                      name="message"
                      placeholder="Example: I want bridal makeup / facial / haircut appointment..."
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>

                {error && <div className="error-box">{error}</div>}

                <button type="submit" className="booking-submit">
                  <i className="fa-brands fa-whatsapp"></i>
                  <span>Book on WhatsApp</span>
                </button>
              </form>
            </div>

            <div className="quick-card">
              <div className="quick-card-image">
                <h3>
                  Premium Salon Care <br />
                  Made Simple
                </h3>
              </div>

              <div className="quick-card-body">
                <p>
                  Get quick confirmation through WhatsApp. Best for threading,
                  waxing, facials, bridal packages, manicure, pedicure, haircut
                  and regular salon services in Ananthapuramu.
                </p>

                <ul className="quick-benefits">
                  <li>
                    <i className="fa-solid fa-check"></i>
                    Direct WhatsApp booking
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    Select service before visiting
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    Clear appointment request message
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    Fast salon confirmation
                  </li>
                </ul>

                <div className="call-box">
                  <span>
                    <i className="fa-solid fa-phone"></i> Call Us
                  </span>
                  <a href="tel:+916300593450">6300593450</a>
                </div>
              </div>
            </div>
          </div>

          <div className="popular-services">
            <div className="popular-title">
              <h2>Quick Select Services</h2>
              <p>
                Tap any service below, fill your name and phone number, then book
                directly on WhatsApp.
              </p>
            </div>

            <div className="service-chip-grid">
              {services.slice(0, 12).map((service) => (
                <button
                  className="service-chip"
                  key={service}
                  onClick={() => {
                    setFormData((prev) => ({
                      ...prev,
                      service,
                    }));
                    setError("");
                    window.scrollTo({
                      top: 250,
                      behavior: "smooth",
                    });
                  }}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Booking;