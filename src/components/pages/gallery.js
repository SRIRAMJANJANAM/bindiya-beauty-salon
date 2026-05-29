import React, { useEffect, useState, useCallback } from "react";
import { Helmet } from "react-helmet-async";

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
      id: 1,
      url: require("./images/bridal.png"),
      title: "Bridal Makeup",
      category: "Makeup",
      icon: "fa-solid fa-crown",
      description: "Elegant bridal makeup for your special day.",
    },
    {
      id: 2,
      url: require("./images/hairstyle.png"),
      title: "Hair Styling",
      category: "Hair",
      icon: "fa-solid fa-scissors",
      description: "Professional hair styling for women.",
    },
    {
      id: 3,
      url:
        "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=80",
      title: "Manicure",
      category: "Nails",
      icon: "fa-solid fa-hand-sparkles",
      description: "Beautiful manicure and hand care.",
    },
    {
      id: 4,
      url: require("./images/pedicure.png"),
      title: "Pedicure",
      category: "Legs",
      icon: "fa-solid fa-shoe-prints",
      description: "Relaxing foot spa and pedicure.",
    },
    {
      id: 5,
      url: require("./images/ear.png"),
      title: "Ear Closing Treatment",
      category: "Ears",
      icon: "fa-solid fa-ear-listen",
      description: "Advanced ear closing treatment.",
    },
    {
      id: 6,
      url: require("./images/waxing.png"),
      title: "Waxing",
      category: "Waxing",
      icon: "fa-solid fa-leaf",
      description: "Smooth and clean waxing service.",
    },
    {
      id: 7,
      url: require("./images/threading.png"),
      title: "Threading",
      category: "Threading",
      icon: "fa-solid fa-eye",
      description: "Perfect eyebrow threading and shaping.",
    },
    {
      id: 8,
      url: require("./images/lip.png"),
      title: "Lip Tint",
      category: "Lips",
      icon: "fa-solid fa-droplet",
      description: "Glossy red lip tint for a fresh beauty look.",
    },
    {
      id: 9,
      url: require("./images/blading.png"),
      title: "Micro Blading",
      category: "Eyebrows",
      icon: "fa-solid fa-pen-nib",
      description: "Perfect brows with a natural-looking finish.",
    },
    {
      id: 10,
      url: require("./images/nailpaint.png"),
      title: "Nail",
      category: "Nails",
      icon: "fa-solid fa-hand-sparkles",
      description: "Perfect Nail paint.",
    },
  ];

  const carouselImages = [
    {
      id: 1,
      url: require("./images/client1.png"),
      title: "Bridal Makeover",
      description: "Elegant bridal look for the special day",
    },
    {
      id: 2,
      url: require("./images/client2.png"),
      title: "Bridal Makeover",
      description: "Elegant bridal look for the special day",
    },
    {
      id: 3,
      url: require("./images/client3.png"),
      title: "Bridal Makeover",
      description: "Glamorous party makeup with perfect finishing",
    },
    {
      id: 4,
      url: require("./images/client4.png"),
      title: "Party Look Makeup",
      description: "Glamorous party makeup with perfect finishing",
    },
    {
      id: 5,
      url: require("./images/client5.png"),
      title: "Casual Makeup Look",
      description: "Fresh and natural everyday makeup look",
    },
    {
      id: 6,
      url: require("./images/client7.png"),
      title: "Fantacy Makeup",
      description: "A Fantacy Makeup",
    },
    {
      id: 7,
      url: require("./images/client6.png"),
      title: "Makeup artist",
      description: "With Santhoshi Srikar",
    },
    {
      id: 8,
      url: require("./images/client8.png"),
      title: "Certificates",
      description: "Certificates are given after course completion.",
    },
  ];

  const categories = [
    { name: "All", icon: "fa-solid fa-border-all" },
    { name: "Makeup", icon: "fa-solid fa-crown" },
    { name: "Hair", icon: "fa-solid fa-scissors" },
    { name: "Nails", icon: "fa-solid fa-hand-sparkles" },
    { name: "Waxing", icon: "fa-solid fa-leaf" },
    { name: "Threading", icon: "fa-solid fa-eye" },
    { name: "Ears", icon: "fa-solid fa-ear-listen" },
    { name: "Legs", icon: "fa-solid fa-shoe-prints" },
    { name: "Lips", icon: "fa-solid fa-droplet" },
    { name: "Eyebrows", icon: "fa-solid fa-pen-nib" },
  ];

  const filteredImages =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);

  const getCurrentIndex = () => {
    return filteredImages.findIndex((img) => img.id === selectedImage?.id);
  };

  const showPrevImage = (e) => {
    e.stopPropagation();
    const currentIndex = getCurrentIndex();
    const prevIndex =
      currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    setSelectedImage(filteredImages[prevIndex]);
  };

  const showNextImage = (e) => {
    e.stopPropagation();
    const currentIndex = getCurrentIndex();
    const nextIndex =
      currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1;
    setSelectedImage(filteredImages[nextIndex]);
  };

  // Carousel navigation functions - wrapped in useCallback to fix ESLint warning
  const goToPrevSlide = useCallback(() => {
    setCurrentSlide((prev) =>
      prev === 0 ? carouselImages.length - 1 : prev - 1
    );
  }, [carouselImages.length]);

  const goToNextSlide = useCallback(() => {
    setCurrentSlide((prev) =>
      prev === carouselImages.length - 1 ? 0 : prev + 1
    );
  }, [carouselImages.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto slide effect - fixed with proper dependency
  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [goToNextSlide]);

  // Image Gallery Schema for SEO
  const imageGallerySchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Bindiya'z Salon & Academy Gallery - Best Beauty Salon in Ananthapuramu",
    "description": "Explore our professional beauty services gallery featuring bridal makeup, hairstyling, manicure, pedicure, waxing, threading, lip tint, and micro blading transformations in Ananthapuramu (Anantapur), Andhra Pradesh.",
    "url": "https://bindiyazbeautysalon.in/gallery",
    "provider": {
      "@type": "BeautySalon",
      "name": "Bindiya'z The Signature Salon & Academy",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ananthapuramu",
        "addressRegion": "Andhra Pradesh",
        "addressCountry": "IN"
      }
    },
    "hasPart": images.map((img, idx) => ({
      "@type": "ImageObject",
      "position": idx + 1,
      "name": img.title,
      "description": img.description,
      "contentUrl": img.url,
      "thumbnailUrl": img.url,
      "keywords": `${img.category}, ${img.title}, beauty services Ananthapuramu, salon Anantapur`
    }))
  };

  // ItemList Schema for services
  const serviceListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Beauty Services Gallery - Bindiya'z Salon Ananthapuramu",
    "description": "Professional beauty services showcase from the best salon in Anantapur",
    "numberOfItems": images.length,
    "itemListElement": categories.filter(c => c.name !== "All").map((cat, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": `${cat.name} Services in Ananthapuramu`,
      "item": {
        "@type": "Service",
        "name": `${cat.name} Services`,
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
        "name": "Gallery - Beauty Services Showcase in Ananthapuramu",
        "item": "https://bindiyazbeautysalon.in/gallery"
      }
    ]
  };

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags for SEO */}
        <title>Gallery | Bindiya'z Salon & Academy - Best Beauty Salon in Ananthapuramu (Anantapur) | Bridal Makeup & Beauty Services Gallery</title>
        <meta name="title" content="Gallery | Bindiya'z Salon & Academy - Best Beauty Salon in Ananthapuramu (Anantapur) | Bridal Makeup & Beauty Services Gallery" />
        <meta name="description" content="Explore Bindiya'z The Signature Salon & Academy gallery in Ananthapuramu (Anantapur). View bridal makeup, hairstyling, manicure, pedicure, waxing, threading, lip tint, micro blading and beauty transformations. Best beauty salon gallery in Anantapur, Andhra Pradesh." />
        <meta name="keywords" content="Bindiya salon gallery, best salon in Ananthapuramu, best salon in Anantapur, bridal makeup Ananthapuramu, bridal makeup Anantapur, beauty salon Ananthapuramu, makeup artist Ananthapuramu, threading Ananthapuramu, waxing Ananthapuramu, lip tint Ananthapuramu, micro blading Ananthapuramu, nail art Anantapur, pedicure Ananthapuramu, manicure Anantapur, hair styling gallery, beauty services portfolio, salon transformations before after" />
        <meta name="author" content="Bindiya'z The Signature Salon & Academy" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="googlebot" content="index, follow" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://bindiyazbeautysalon.in/gallery" />
        
        {/* Geo Meta Tags for Local SEO */}
        <meta name="geo.region" content="IN-AP" />
        <meta name="geo.placename" content="Ananthapuramu" />
        <meta name="geo.position" content="14.6761;77.5957" />
        <meta name="ICBM" content="14.6761, 77.5957" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bindiyazbeautysalon.in/gallery" />
        <meta property="og:title" content="Bindiya'z Salon Gallery - Best Beauty Services in Ananthapuramu (Anantapur)" />
        <meta property="og:description" content="View our professional beauty services gallery featuring bridal makeup, hairstyling, manicure, pedicure, waxing, threading, and micro blading transformations in Ananthapuramu, Andhra Pradesh." />
        <meta property="og:image" content="https://bindiyazbeautysalon.in/images/bridal.png" />
        <meta property="og:image:alt" content="Bridal Makeup Gallery - Best Beauty Salon in Ananthapuramu" />
        <meta property="og:site_name" content="Bindiya'z The Signature Salon & Academy" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://bindiyazbeautysalon.in/gallery" />
        <meta property="twitter:title" content="Bindiya'z Salon Gallery - Beauty Services in Ananthapuramu" />
        <meta property="twitter:description" content="Explore our beauty services gallery - Bridal makeup, hairstyling, manicure, pedicure and more in Anantapur." />
        <meta property="twitter:image" content="https://bindiyazbeautysalon.in/images/bridal.png" />
        
        {/* Mobile & Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        
        {/* Additional SEO Tags */}
        <meta name="theme-color" content="#3A1026" />
        
        {/* Language Alternates */}
        <link rel="alternate" href="https://bindiyazbeautysalon.in/gallery" hrefLang="en-in" />
        <link rel="alternate" href="https://bindiyazbeautysalon.in/te/gallery" hrefLang="te" />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data / JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify(imageGallerySchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceListSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        
        {/* Video Schema for carousel */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MediaGallery",
            "name": "Client Transformations Gallery",
            "description": "Real results from our happy clients at Bindiya'z Salon in Ananthapuramu",
            "provider": {
              "@type": "BeautySalon",
              "name": "Bindiya'z The Signature Salon & Academy"
            },
            "associatedMedia": carouselImages.map(img => ({
              "@type": "ImageObject",
              "name": img.title,
              "description": img.description,
              "contentUrl": img.url
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
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html,
        body {
          overflow-x: hidden;
          width: 100%;
        }

        .gallery-page {
          min-height: 100vh;
          background:
            radial-gradient(circle at 8% 12%, rgba(216, 167, 107, 0.18), transparent 28%),
            radial-gradient(circle at 92% 18%, rgba(198, 90, 120, 0.18), transparent 30%),
            linear-gradient(135deg, var(--blush-white), var(--warm-white));
          color: var(--muted-plum-gray);
          overflow-x: hidden;
          font-family: "Segoe UI", Arial, sans-serif;
        }

        .gallery-hero {
          position: relative;
          padding: 130px 6% 80px;
          background:
            linear-gradient(135deg, rgba(58, 16, 38, 0.92), rgba(107, 22, 65, 0.87)),
            url("https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&w=1600&q=80");
          background-size: cover;
          background-position: center;
          color: white;
          text-align: center;
          overflow: hidden;
        }

        .gallery-hero::after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 20% 20%, rgba(216, 167, 107, 0.25), transparent 30%),
            radial-gradient(circle at 80% 80%, rgba(198, 90, 120, 0.22), transparent 30%);
          pointer-events: none;
        }

        .gallery-hero-content {
          position: relative;
          z-index: 2;
          max-width: 930px;
          margin: auto;
          animation: galleryFadeUp 0.9s ease forwards;
        }

        .gallery-small-title {
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

        .gallery-hero h1 {
          margin: 0 0 18px;
          color: var(--warm-white);
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(2.2rem, 5vw, 4.6rem);
          line-height: 1.08;
        }

        .gallery-hero h1 span {
          color: var(--champagne-gold);
          font-style: italic;
        }

        .gallery-hero p {
          max-width: 760px;
          margin: 0 auto;
          color: #f4dad8;
          line-height: 1.85;
          font-size: 1.03rem;
        }

        .gallery-content-section {
          padding: 70px 6% 80px;
        }

        .gallery-content-wrapper {
          max-width: 1220px;
          margin: 0 auto;
        }

        /* Carousel Section Styles */
        .carousel-section {
          margin-bottom: 70px;
          padding: 20px 0;
          border-radius: 48px;
          background: rgba(255, 253, 252, 0.7);
          backdrop-filter: blur(4px);
        }

        .carousel-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .carousel-header h2 {
          color: var(--rich-burgundy);
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(1.8rem, 4vw, 2.5rem);
          margin-bottom: 12px;
        }

        .carousel-header p {
          color: var(--muted-plum-gray);
          font-size: 1rem;
          max-width: 600px;
          margin: 0 auto;
        }

        .carousel-container {
          position: relative;
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          overflow: hidden;
          border-radius: 32px;
          box-shadow: 0 25px 50px rgba(58, 16, 38, 0.15);
        }

        .carousel-track {
          display: flex;
          transition: transform 0.5s ease-in-out;
        }

        .carousel-slide {
          min-width: 100%;
          position: relative;
        }

        .carousel-image {
          width: 100%;
          height: 500px;
          object-fit: cover;
          display: block;
        }

        .carousel-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(0deg, rgba(58, 16, 38, 0.85), transparent);
          color: white;
          padding: 40px 30px 20px;
          text-align: center;
        }

        .carousel-caption h3 {
          font-family: "Playfair Display", Georgia, serif;
          font-size: 1.5rem;
          margin-bottom: 6px;
        }

        .carousel-caption p {
          font-size: 0.9rem;
          opacity: 0.9;
        }

        .carousel-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(255, 253, 252, 0.95);
          border: none;
          color: var(--rich-burgundy);
          font-size: 1.2rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          z-index: 10;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .carousel-btn:hover {
          background: var(--champagne-gold);
          color: var(--deep-plum);
          transform: translateY(-50%) scale(1.08);
        }

        .carousel-btn-prev {
          left: 20px;
        }

        .carousel-btn-next {
          right: 20px;
        }

        .carousel-dots {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 24px;
          flex-wrap: wrap;
        }

        .carousel-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: var(--light-rose-beige);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .carousel-dot.active {
          background: var(--rich-burgundy);
          width: 28px;
          border-radius: 20px;
        }

        .carousel-dot:hover {
          background: var(--champagne-gold);
        }

        .category-filter {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 45px;
          overflow: visible;
        }

        .category-btn {
          min-height: 46px;
          padding: 0 18px;
          border-radius: 999px;
          border: 1px solid var(--light-rose-beige);
          background: rgba(255, 253, 252, 0.94);
          color: var(--rich-burgundy);
          font-weight: 900;
          font-size: 0.82rem;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 22px rgba(58, 16, 38, 0.07);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          white-space: normal;
        }

        .category-btn i {
          font-size: 0.9rem;
        }

        .category-btn:hover,
        .category-btn.active {
          background: linear-gradient(
            135deg,
            var(--soft-coral-pink),
            var(--rich-burgundy)
          );
          color: var(--warm-white);
          transform: translateY(-3px);
          box-shadow: 0 14px 30px rgba(198, 90, 120, 0.28);
          border-color: rgba(216, 167, 107, 0.38);
        }

        .count-badge {
          min-width: 24px;
          height: 24px;
          padding: 0 8px;
          border-radius: 999px;
          background: var(--pale-pink);
          color: var(--rich-burgundy);
          font-size: 0.72rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .category-btn.active .count-badge,
        .category-btn:hover .count-badge {
          background: rgba(255, 255, 255, 0.22);
          color: white;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          width: 100%;
        }

        .gallery-card {
          background: rgba(255, 253, 252, 0.94);
          border: 1px solid var(--light-rose-beige);
          border-radius: 30px;
          overflow: hidden;
          cursor: pointer;
          box-shadow: 0 22px 55px rgba(58, 16, 38, 0.1);
          transition: all 0.4s ease;
          animation: galleryFadeUp 0.8s ease forwards;
          position: relative;
        }

        .gallery-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 70px rgba(58, 16, 38, 0.16);
        }

        .gallery-image-box {
          position: relative;
          height: 285px;
          overflow: hidden;
          background: var(--pale-pink);
        }

        .gallery-image-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }

        .gallery-card:hover .gallery-image-box img {
          transform: scale(1.1);
        }

        .gallery-image-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, transparent 45%, rgba(58, 16, 38, 0.72)),
            radial-gradient(circle at 20% 20%, rgba(216, 167, 107, 0.12), transparent 32%);
          opacity: 0;
          transition: opacity 0.35s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .gallery-card:hover .gallery-image-overlay {
          opacity: 1;
        }

        .gallery-view-pill {
          min-height: 42px;
          padding: 0 18px;
          border-radius: 999px;
          background: rgba(255, 253, 252, 0.92);
          color: var(--deep-plum);
          font-weight: 900;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          box-shadow: 0 14px 30px rgba(0, 0, 0, 0.18);
          transform: translateY(18px);
          transition: all 0.35s ease;
        }

        .gallery-card:hover .gallery-view-pill {
          transform: translateY(0);
        }

        .category-tag {
          position: absolute;
          top: 16px;
          right: 16px;
          background: linear-gradient(135deg, var(--champagne-gold), #ffe3ac);
          color: var(--deep-plum);
          padding: 7px 13px;
          border-radius: 999px;
          font-size: 0.72rem;
          font-weight: 900;
          box-shadow: 0 10px 24px rgba(58, 16, 38, 0.16);
          z-index: 2;
          display: inline-flex;
          align-items: center;
          gap: 7px;
        }

        .gallery-card-content {
          padding: 23px;
        }

        .gallery-title-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 10px;
        }

        .gallery-card-icon {
          min-width: 42px;
          height: 42px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--champagne-gold), #ffe3ac);
          color: var(--deep-plum);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 22px rgba(216, 167, 107, 0.22);
        }

        .gallery-card-content h3 {
          margin: 0;
          color: var(--dark-wine);
          font-family: "Playfair Display", Georgia, serif;
          font-size: 1.5rem;
          line-height: 1.2;
        }

        .gallery-card-content p {
          margin: 0;
          color: var(--muted-plum-gray);
          line-height: 1.65;
          font-size: 0.94rem;
        }

        .gallery-lightbox {
          position: fixed !important;
          inset: 0 !important;
          width: 100vw !important;
          height: 100vh !important;
          background: rgba(20, 5, 14, 0.96);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 999999 !important;
          padding: 24px;
          cursor: zoom-out;
        }

        .gallery-lightbox-content {
          position: relative;
          width: min(1050px, 94vw);
          max-height: 92vh;
          text-align: center;
          cursor: default;
        }

        .gallery-lightbox-image {
          width: auto;
          max-width: 100%;
          max-height: 78vh;
          object-fit: contain;
          border-radius: 22px;
          border: 2px solid rgba(216, 167, 107, 0.65);
          background: white;
          box-shadow: 0 30px 90px rgba(0, 0, 0, 0.6);
        }

        .gallery-lightbox-caption {
          margin: 16px auto 0;
          max-width: 720px;
          padding: 18px 22px;
          border-radius: 20px;
          background: rgba(255, 253, 252, 0.1);
          border: 1px solid rgba(216, 167, 107, 0.32);
          backdrop-filter: blur(12px);
          color: white;
        }

        .gallery-lightbox-caption h3 {
          margin: 0 0 6px;
          color: var(--champagne-gold);
          font-family: "Playfair Display", Georgia, serif;
          font-size: 1.7rem;
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }

        .gallery-lightbox-caption p {
          margin: 0;
          color: #f6dcd9;
          line-height: 1.6;
        }

        .gallery-close-btn {
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

        .gallery-close-btn:hover {
          transform: rotate(90deg) scale(1.08);
          background: white;
        }

        .gallery-nav-btn {
          position: fixed !important;
          top: 50%;
          transform: translateY(-50%);
          width: 54px;
          height: 54px;
          border-radius: 50%;
          border: 1px solid rgba(216, 167, 107, 0.42);
          background: rgba(255, 253, 252, 0.12);
          color: white;
          font-size: 1.15rem;
          cursor: pointer;
          z-index: 1000000 !important;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(12px);
          transition: all 0.3s ease;
        }

        .gallery-nav-btn:hover {
          background: var(--champagne-gold);
          color: var(--deep-plum);
          transform: translateY(-50%) scale(1.08);
        }

        .gallery-nav-prev {
          left: 30px;
        }

        .gallery-nav-next {
          right: 30px;
        }

        @keyframes galleryFadeUp {
          from {
            opacity: 0;
            transform: translateY(35px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 1050px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .gallery-hero {
            padding: 110px 5% 65px;
          }

          .gallery-hero h1 {
            font-size: 2.05rem;
          }

          .gallery-hero p {
            font-size: 0.95rem;
          }

          .gallery-content-section {
            padding: 55px 5% 60px;
          }

          .category-filter {
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            overflow: visible;
            gap: 10px;
            margin-bottom: 32px;
            padding-bottom: 0;
          }

          .category-btn {
            min-height: 42px;
            padding: 0 14px;
            font-size: 0.76rem;
            white-space: normal;
          }

          .count-badge {
            min-width: 22px;
            height: 22px;
            font-size: 0.68rem;
          }

          .gallery-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .gallery-image-box {
            height: 250px;
          }

          .carousel-image {
            height: 350px;
          }

          .carousel-caption h3 {
            font-size: 1.2rem;
          }

          .carousel-caption p {
            font-size: 0.8rem;
          }

          .carousel-btn {
            width: 40px;
            height: 40px;
            font-size: 1rem;
          }

          .gallery-lightbox {
            padding: 14px;
          }

          .gallery-lightbox-image {
            max-height: 72vh;
            border-radius: 16px;
          }

          .gallery-lightbox-caption {
            padding: 14px 16px;
          }

          .gallery-lightbox-caption h3 {
            font-size: 1.35rem;
          }

          .gallery-lightbox-caption p {
            font-size: 0.9rem;
          }

          .gallery-close-btn {
            top: 14px;
            right: 14px;
            width: 42px;
            height: 42px;
          }

          .gallery-nav-btn {
            width: 42px;
            height: 42px;
            font-size: 0.95rem;
            top: auto;
            bottom: 22px;
            transform: none;
          }

          .gallery-nav-btn:hover {
            transform: scale(1.06);
          }

          .gallery-nav-prev {
            left: 18px;
          }

          .gallery-nav-next {
            right: 18px;
          }
        }

        @media (max-width: 480px) {
          .gallery-hero h1 {
            font-size: 1.85rem;
          }

          .gallery-small-title {
            font-size: 0.66rem;
            letter-spacing: 1px;
          }

          .gallery-content-section {
            padding: 45px 4% 50px;
          }

          .category-filter {
            gap: 8px;
          }

          .category-btn {
            min-height: 40px;
            padding: 0 11px;
            font-size: 0.7rem;
            gap: 6px;
          }

          .category-btn i {
            font-size: 0.78rem;
          }

          .gallery-image-box {
            height: 230px;
          }

          .carousel-image {
            height: 280px;
          }

          .carousel-caption {
            padding: 30px 20px 15px;
          }

          .carousel-caption h3 {
            font-size: 1rem;
          }

          .carousel-caption p {
            font-size: 0.7rem;
          }

          .carousel-btn {
            width: 36px;
            height: 36px;
            font-size: 0.9rem;
          }

          .carousel-btn-prev {
            left: 10px;
          }

          .carousel-btn-next {
            right: 10px;
          }

          .gallery-card-content {
            padding: 20px;
          }

          .gallery-card-content h3 {
            font-size: 1.35rem;
          }
        }
      `}</style>

      <main className="gallery-page">
        <section className="gallery-hero">
          <div className="gallery-hero-content">
            <div className="gallery-small-title">
              <i className="fa-solid fa-images"></i>
              Our Gallery
            </div>

            <h1>
              Explore Our <span>Salon Work</span>
            </h1>

            <p>
              View Bindiya&apos;z The Signature Salon & Academy gallery in
              Ananthapuramu (Anantapur). Explore bridal makeup, hairstyling, threading, waxing,
              manicure, pedicure, lip tint, micro blading and beautiful salon
              transformations.
            </p>
          </div>
        </section>

        <section className="gallery-content-section">
          <div className="gallery-content-wrapper">
            {/* Carousel Section */}
            <div className="carousel-section">
              <div className="carousel-header">
                <h2>
                  <i className="fa-solid fa-star-of-life"></i> Client
                  Transformations
                </h2>
                <p>Real results from our happy clients at Bindiya'z Salon in Ananthapuramu</p>
              </div>

              <div className="carousel-container">
                <div
                  className="carousel-track"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {carouselImages.map((image) => (
                    <div key={image.id} className="carousel-slide">
                      <img
                        src={image.url}
                        alt={`${image.title} - Client transformation at Bindiya'z Salon Ananthapuramu`}
                        className="carousel-image"
                        loading="lazy"
                      />
                      <div className="carousel-caption">
                        <h3>{image.title}</h3>
                        <p>{image.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  className="carousel-btn carousel-btn-prev"
                  onClick={goToPrevSlide}
                  aria-label="Previous slide"
                >
                  <i className="fa-solid fa-chevron-left"></i>
                </button>

                <button
                  type="button"
                  className="carousel-btn carousel-btn-next"
                  onClick={goToNextSlide}
                  aria-label="Next slide"
                >
                  <i className="fa-solid fa-chevron-right"></i>
                </button>

                <div className="carousel-dots">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      className={`carousel-dot ${
                        currentSlide === index ? "active" : ""
                      }`}
                      onClick={() => goToSlide(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="category-filter">
              {categories.map((category) => (
                <button
                  key={category.name}
                  type="button"
                  className={`category-btn ${
                    activeCategory === category.name ? "active" : ""
                  }`}
                  onClick={() => setActiveCategory(category.name)}
                >
                  <i className={category.icon}></i>
                  {category.name}
                  <span className="count-badge">
                    {category.name === "All"
                      ? images.length
                      : images.filter((img) => img.category === category.name)
                          .length}
                  </span>
                </button>
              ))}
            </div>

            <div className="gallery-grid">
              {filteredImages.map((image) => (
                <div
                  className="gallery-card"
                  key={image.id}
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="gallery-image-box">
                    <img 
                      src={image.url} 
                      alt={`${image.title} - Best ${image.category} services at Bindiya'z Salon Ananthapuramu`} 
                      loading="lazy" 
                    />

                    <span className="category-tag">
                      <i className={image.icon}></i>
                      {image.category}
                    </span>

                    <div className="gallery-image-overlay">
                      <span className="gallery-view-pill">
                        <i className="fa-solid fa-magnifying-glass-plus"></i>
                        View Full Image
                      </span>
                    </div>
                  </div>

                  <div className="gallery-card-content">
                    <div className="gallery-title-row">
                      <div className="gallery-card-icon">
                        <i className={image.icon}></i>
                      </div>

                      <h3>{image.title}</h3>
                    </div>

                    <p>{image.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {selectedImage && (
        <div className="gallery-lightbox" onClick={() => setSelectedImage(null)}>
          <button
            type="button"
            className="gallery-close-btn"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
            aria-label="Close gallery image"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>

          <button
            type="button"
            className="gallery-nav-btn gallery-nav-prev"
            onClick={showPrevImage}
            aria-label="Previous image"
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>

          <button
            type="button"
            className="gallery-nav-btn gallery-nav-next"
            onClick={showNextImage}
            aria-label="Next image"
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>

          <div
            className="gallery-lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.url}
              alt={`${selectedImage.title} - Professional ${selectedImage.category} services at Bindiya'z Salon Ananthapuramu`}
              className="gallery-lightbox-image"
            />

            <div className="gallery-lightbox-caption">
              <h3>
                <i className={selectedImage.icon}></i>
                {selectedImage.title}
              </h3>
              <p>{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Gallery;