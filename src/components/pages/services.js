import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const serviceCategories = [
    {
      title: "Threading",
      icon: "fa-solid fa-eye",
      starting: "Starts from ₹30",
      image: require("./images/threading.png"),
      salesLine:
        "Get clean, sharp and beautiful face grooming with professional threading.",
      seoText:
        "Our threading services are perfect for eyebrows, upper lip, chin, forehead and side locks. Best for women who want a clean, fresh and confident look.",
      items: [
        ["Eyebrows", "₹50"],
        ["Forehead", "₹30"],
        ["Upper Lip", "₹30"],
        ["Chin", "₹30"],
        ["Side Locks", "₹60"],
      ],
    },
    {
      title: "Hydra Facial",
      icon: "fa-solid fa-hand-sparkles",
      starting: "Starts from ₹2499",
      image: require("./images/hydra.png"),
      salesLine:
        "Get fresh, hydrated and glowing skin with a luxury Hydra Facial experience.",
      seoText:
        "Hydra Facial is a premium skin care treatment that helps remove impurities, refresh the skin and improve natural glow. It is perfect for customers who want clean, soft, hydrated and radiant-looking skin.",
      items: [["Hydra Facial", "₹2499"]],
    },
    {
      title: "Waxing",
      icon: "fa-solid fa-leaf",
      starting: "Starts from ₹100",
      image: require("./images/waxing.png"),
      salesLine:
        "Smooth skin, hygienic care and comfortable waxing options for every need.",
      seoText:
        "Choose from normal honey wax, advanced Rica wax and premium luxury Brazilian waxing. Ideal for smooth skin, regular grooming and special occasions.",
      groups: [
        {
          name: "Normal Waxing - Honey Bee",
          items: [
            ["Hand Wax", "₹300"],
            ["Leg Wax", "₹400"],
            ["Underarms", "₹100"],
          ],
        },
        {
          name: "Advance Waxing - Rica Wax",
          items: [
            ["Hand Wax", "₹600"],
            ["Leg Wax", "₹800"],
            ["Underarms", "₹200"],
            ["Full Body Wax", "₹2500"],
          ],
        },
        {
          name: "Premium Luxury Brazilian",
          items: [
            ["Brazilian", "₹700"],
            ["Leg Wax", "₹900"],
            ["Underarms", "₹250"],
            ["Full Body Wax", "₹3999"],
          ],
        },
      ],
    },
    {
      title: "Bleach",
      icon: "fa-solid fa-sun",
      starting: "Starts from ₹300",
      image: require("./images/bleach.png"),
      salesLine:
        "Brighten your skin tone and get a fresh salon glow with professional bleach.",
      seoText:
        "Bleach services help improve brightness and freshness for face, neck, hands, legs and full body care.",
      items: [
        ["Face", "₹300"],
        ["Neck", "₹300"],
        ["Hands", "₹500"],
        ["Legs", "₹400"],
        ["Full Body", "₹1000"],
      ],
    },
    {
      title: "D-Tan",
      icon: "fa-solid fa-spa",
      starting: "Starts from ₹300",
      image: require("./images/dtan.png"),
      salesLine:
        "Remove tan and bring back a clean, bright and refreshed skin look.",
      seoText:
        "Our D-Tan services are suitable for face, neck and full body tan removal. Perfect before events, parties and bridal functions.",
      items: [
        ["Face", "₹300"],
        ["Neck", "₹300"],
        ["Full Body Tan Pack", "₹1800"],
      ],
    },
    {
      title: "Manicure",
      icon: "fa-solid fa-hand-sparkles",
      starting: "Starts from ₹400",
      image:
        "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=80",
      salesLine:
        "Beautiful hands, neat nails and premium finishing for a polished look.",
      seoText:
        "Our manicure services include basic, advanced, French manicure and nail art. Best for regular grooming, parties and bridal preparation.",
      items: [
        ["Basic", "₹400"],
        ["Advanced", "₹500"],
        ["French", "₹800"],
        ["Nail Art", "Price depends on design"],
      ],
    },
    {
      title: "Pedicure",
      icon: "fa-solid fa-shoe-prints",
      starting: "Starts from ₹400",
      image: require("./images/pedicure.png"),
      salesLine:
        "Relaxing foot care, clean grooming and spa-style comfort for your feet.",
      seoText:
        "Our pedicure services include basic, advanced, French, luxury spa pedicure and foot spa. Perfect for clean, soft and beautiful feet.",
      items: [
        ["Basic", "₹400"],
        ["Advanced", "₹800"],
        ["French", "₹1000"],
        ["Luxury Spa Pedicure", "₹1200"],
        ["Foot Spa", "₹400"],
      ],
    },
    {
      title: "Facials",
      icon: "fa-solid fa-wand-magic-sparkles",
      starting: "Starts from ₹500",
      image:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80",
      salesLine:
        "Glow, freshness and skin care with facial options for every skin need.",
      seoText:
        "Choose from fruit facial, gold facial, diamond facial, O3+, Korean glass glow and Hydra facial. Best for glow, freshness and skin care.",
      items: [
        ["Fruit Facial", "₹500"],
        ["Mango Facial", "₹500"],
        ["Herbal Facial", "₹500"],
        ["Wine Facial", "₹800"],
        ["Gold Facial", "₹900"],
        ["Diamond Facial", "₹1000"],
        ["Platinum Facial", "₹1200"],
        ["O3+ Facial", "₹2500"],
        ["Korean Basic Facial", "₹800"],
        ["Korean Glass Glow Facial", "₹2500"],
      ],
    },
    {
      title: "Micro Blading & Semi Permanent",
      icon: "fa-solid fa-pen-nib",
      starting: "Available",
      image: require("./images/blading.png"),
      salesLine:
        "Get naturally fuller and well-shaped eyebrows with professional micro blading service.",
      seoText:
        "Micro Blading is suitable for women who want beautiful, fuller and natural-looking eyebrows. It helps improve eyebrow shape and gives a clean, long-lasting look.",
      items: [
        ["Micro Blading", "Available"],
        ["Semi Permanent", "Available"],
      ],
    },
    {
      title: "Lip Tint",
      icon: "fa-solid fa-droplet",
      starting: "Available",
      image: require("./images/lip.png"),
      salesLine:
        "Add a soft natural tint to your lips for a fresh, beautiful and confident look.",
      seoText:
        "Lip Tint service gives lips a naturally fresh and tinted look. It is suitable for customers who want a soft beauty enhancement without heavy makeup.",
      items: [["Lip Tint", "Available"]],
    },
    {
      title: "Hair Cut",
      icon: "fa-solid fa-scissors",
      starting: "Starts from ₹200",
      image: require("./images/hairstyle.png"),
      salesLine:
        "Fresh haircut styles for a confident, stylish and beautiful look.",
      seoText:
        "We provide U cut, V cut, layer cut, step cut, butterfly haircut and front flick cut. Prices may vary based on hair length and volume.",
      items: [
        ["U Cut - Light", "₹300"],
        ["U Cut - Advanced", "₹500"],
        ["V Cut", "₹600"],
        ["Feather / Step Cut", "₹800"],
        ["Layer Cut", "₹700"],
        ["Layer Cut with Step", "₹800"],
        ["Butterfly Haircut", "₹500 - ₹800"],
        ["Flick / Front Cut", "₹200"],
      ],
      note:
        "Prices may vary based on hair length and thickness. Styling like blow dry or ironing has extra charges.",
    },
    {
      title: "Ear Closing Treatment",
      icon: "fa-solid fa-ear-listen",
      starting: "Available",
      image: require("./images/ear.png"),
      salesLine:
        "Repair stretched or enlarged ear holes with a clean, safe and natural-looking ear closing treatment.",
      seoText:
        "Ear Closing Treatment is suitable for customers with stretched, enlarged or damaged ear piercing holes. It helps improve the earlobe appearance and gives a neat, confident look for wearing earrings again.",
      items: [["Ear Closing Treatment", "Available"]],
    },
  ];

  const bridalPackages = [
    {
      name: "Silver Bridal Package",
      icon: "fa-solid fa-seedling",
      price: "₹4,999",
      tag: "Budget Bridal",
      features: [
        "Basic Facial",
        "Cleanup + D-Tan - Face & Neck",
        "Eyebrows + Upper Lip",
        "Basic Manicure & Pedicure",
        "Saree Draping",
      ],
    },
    {
      name: "Gold Bridal Package",
      icon: "fa-solid fa-crown",
      price: "₹7,999",
      tag: "Popular Choice",
      features: [
        "Gold Facial",
        "Full Face D-Tan",
        "Full Body Wax - Rica",
        "Eyebrows + Full Face Threading",
        "Advanced Manicure & Pedicure",
        "Light Makeup + Hairstyle",
      ],
    },
    {
      name: "Platinum Bridal Package",
      icon: "fa-solid fa-gem",
      price: "₹11,999",
      tag: "Premium Look",
      features: [
        "O3+ Facial / Korean Glass Glow Facial",
        "Full Body Wax - Rica",
        "Full Body Bleach",
        "Full Body D-Tan",
        "French Manicure & Pedicure",
        "HD Makeup + Hairstyle + Saree Draping",
      ],
    },
    {
      name: "Premium Luxury Bridal",
      icon: "fa-solid fa-star",
      price: "₹15,999",
      tag: "Luxury Bridal",
      features: [
        "Hydra Facial",
        "Full Body Brazilian Wax",
        "Full Body Bleach + D-Tan",
        "Luxury Spa Pedicure + Manicure",
        "HD / Bridal Makeup + Hairstyle",
        "Saree Draping + Touch-up Kit",
      ],
    },
  ];

  const comboOffers = [
    {
      name: "Glow Combo",
      icon: "fa-solid fa-sun",
      price: "₹999",
      features: ["Fruit Facial", "Eyebrows + Upper Lip", "Basic Manicure"],
    },
    {
      name: "Clean & Fresh Combo",
      icon: "fa-solid fa-spray-can-sparkles",
      price: "₹1,499",
      features: ["D-Tan - Face & Neck", "Basic Pedicure", "Eyebrows"],
    },
    {
      name: "Smooth Skin Combo",
      icon: "fa-solid fa-feather",
      price: "₹1,999",
      features: ["Full Hand + Leg Wax - Normal", "Underarms", "Eyebrows"],
    },
    {
      name: "Luxury Glow Combo",
      icon: "fa-solid fa-gem",
      price: "₹2,999",
      features: ["Gold / Wine Facial", "Basic Manicure & Pedicure", "D-Tan - Face"],
    },
    {
      name: "Full Care Combo",
      icon: "fa-solid fa-spa",
      price: "₹4,999",
      features: ["Full Body Wax - Normal", "Full Body Bleach", "Basic Facial"],
    },
  ];

  const specialOffers = [
    {
      icon: "fa-solid fa-gift",
      text: "Bridal booking above ₹10,000 → Free Nail Art - Basic",
    },
    {
      icon: "fa-solid fa-cake-candles",
      text: "Birthday Month Offer → 10% Discount",
    },
    {
      icon: "fa-solid fa-user-group",
      text: "Refer a Friend → Get ₹200 OFF",
    },
  ];

  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedService(null);
      }
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedService]);

  const renderServicePrices = (service) => {
    if (!service) return null;

    if (service.groups) {
      return service.groups.map((group) => (
        <div className="modal-service-group" key={group.name}>
          <h4>{group.name}</h4>

          {group.items.map((item) => (
            <div className="modal-price-row" key={item[0]}>
              <span>{item[0]}</span>
              <strong>{item[1]}</strong>
            </div>
          ))}
        </div>
      ));
    }

    return (
      <div className="modal-service-group">
        {service.items.map((item) => (
          <div className="modal-price-row" key={item[0]}>
            <span>{item[0]}</span>
            <strong>{item[1]}</strong>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
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

        .services-page {
          width: 100%;
          overflow: hidden;
          background: var(--blush-white);
          color: var(--muted-plum-gray);
        }

        .services-hero {
          position: relative;
          padding: 120px 6% 80px;
          background:
            linear-gradient(135deg, rgba(58, 16, 38, 0.9), rgba(107, 22, 65, 0.86)),
            url("https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1600&q=80");
          background-size: cover;
          background-position: center;
          text-align: center;
          color: white;
        }

        .services-hero::after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 20% 20%, rgba(216, 167, 107, 0.22), transparent 28%),
            radial-gradient(circle at 85% 80%, rgba(198, 90, 120, 0.2), transparent 30%);
          pointer-events: none;
        }

        .services-hero-content {
          position: relative;
          z-index: 2;
          max-width: 950px;
          margin: auto;
          animation: fadeInUp 0.9s ease forwards;
        }

        .salon-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          border-radius: 999px;
          background: rgba(255, 245, 243, 0.12);
          border: 1px solid rgba(216, 167, 107, 0.45);
          color: #ffe4bb;
          font-weight: 800;
          font-size: 0.78rem;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 18px;
          backdrop-filter: blur(12px);
        }

        .services-hero h1 {
          margin: 0 0 16px;
          color: var(--warm-white);
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(2.25rem, 5vw, 4.5rem);
          line-height: 1.08;
        }

        .services-hero h1 span {
          color: var(--champagne-gold);
          font-style: italic;
        }

        .services-hero p {
          max-width: 760px;
          margin: 0 auto 28px;
          color: #f4dad8;
          line-height: 1.85;
          font-size: 1.02rem;
        }

        .hero-actions {
          display: flex;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .primary-btn,
        .secondary-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-height: 52px;
          padding: 0 24px;
          border-radius: 10px;
          text-decoration: none;
          font-size: 0.78rem;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          font-weight: 900;
          transition: all 0.35s ease;
        }

        .primary-btn {
          background: var(--champagne-gold);
          color: var(--deep-plum);
          box-shadow: 0 14px 30px rgba(216, 167, 107, 0.28);
        }

        .primary-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 40px rgba(216, 167, 107, 0.38);
        }

        .secondary-btn {
          background: rgba(255, 253, 252, 0.1);
          border: 1px solid rgba(255, 245, 243, 0.32);
          color: var(--warm-white);
          backdrop-filter: blur(10px);
        }

        .secondary-btn:hover {
          background: rgba(255, 253, 252, 0.18);
          transform: translateY(-4px);
        }

        .trust-strip {
          position: relative;
          z-index: 3;
          max-width: 1050px;
          margin: -38px auto 0;
          padding: 0 6%;
        }

        .trust-grid {
          background: var(--warm-white);
          border: 1px solid var(--light-rose-beige);
          border-radius: 22px;
          box-shadow: 0 20px 50px rgba(58, 16, 38, 0.14);
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          overflow: hidden;
        }

        .trust-item {
          padding: 22px 16px;
          text-align: center;
          border-right: 1px solid var(--light-rose-beige);
        }

        .trust-item:last-child {
          border-right: none;
        }

        .trust-item i {
          color: var(--rose-pink);
          font-size: 1.45rem;
          margin-bottom: 10px;
        }

        .trust-item h3 {
          margin: 0 0 6px;
          color: var(--dark-wine);
          font-size: 0.96rem;
        }

        .trust-item p {
          margin: 0;
          font-size: 0.82rem;
          line-height: 1.5;
        }

        .section {
          padding: 80px 6%;
        }

        .section-header {
          max-width: 820px;
          margin: 0 auto 44px;
          text-align: center;
        }

        .section-subtitle {
          margin: 0 0 10px;
          color: var(--rose-pink);
          font-size: 0.8rem;
          font-weight: 900;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .section-title {
          margin: 0 0 14px;
          color: var(--dark-wine);
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(2rem, 4vw, 3.2rem);
          line-height: 1.15;
        }

        .section-desc {
          margin: 0;
          color: var(--muted-plum-gray);
          line-height: 1.8;
          font-size: 1rem;
        }

        .price-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }

        .service-card {
          border: none;
          padding: 0;
          background: var(--warm-white);
          border-radius: 28px;
          overflow: hidden;
          text-align: left;
          box-shadow: 0 16px 38px rgba(58, 16, 38, 0.09);
          border: 1px solid var(--light-rose-beige);
          cursor: pointer;
          transition: all 0.35s ease;
        }

        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 26px 55px rgba(107, 22, 65, 0.17);
          border-color: rgba(216, 167, 107, 0.65);
        }

        .service-img-wrap {
          position: relative;
          height: 210px;
          overflow: hidden;
        }

        .service-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.55s ease;
        }

        .service-card:hover .service-img-wrap img {
          transform: scale(1.08);
        }

        .service-img-wrap::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent, rgba(58, 16, 38, 0.68));
        }

        .service-floating-icon {
          position: absolute;
          left: 18px;
          bottom: 16px;
          z-index: 2;
          width: 54px;
          height: 54px;
          border-radius: 50%;
          background: rgba(255, 253, 252, 0.92);
          color: var(--rich-burgundy);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.28rem;
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.18);
        }

        .service-card-body {
          padding: 22px 20px 24px;
        }

        .service-card-body h3 {
          margin: 0 0 8px;
          color: var(--dark-wine);
          font-size: 1.18rem;
        }

        .starting-price {
          display: inline-flex;
          margin-bottom: 12px;
          padding: 7px 12px;
          border-radius: 999px;
          background: rgba(216, 167, 107, 0.18);
          color: var(--deep-plum);
          font-weight: 900;
          font-size: 0.82rem;
        }

        .sales-line {
          margin: 0 0 16px;
          color: var(--muted-plum-gray);
          line-height: 1.6;
          font-size: 0.92rem;
        }

        .view-full-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--rose-pink);
          font-weight: 900;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.4px;
        }

        .bridal-section {
          background: linear-gradient(135deg, var(--warm-white), var(--pale-pink));
        }

        .package-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }

        .package-card,
        .combo-card {
          position: relative;
          background: var(--warm-white);
          border: 1px solid var(--light-rose-beige);
          border-radius: 28px;
          padding: 26px 22px;
          box-shadow: 0 16px 38px rgba(58, 16, 38, 0.09);
          transition: all 0.35s ease;
          overflow: hidden;
        }

        .package-card::before,
        .combo-card::before {
          content: "";
          position: absolute;
          top: -80px;
          right: -80px;
          width: 160px;
          height: 160px;
          background: rgba(198, 90, 120, 0.14);
          border-radius: 50%;
        }

        .package-card:hover,
        .combo-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 26px 55px rgba(107, 22, 65, 0.17);
        }

        .package-icon,
        .combo-icon {
          position: relative;
          z-index: 1;
          width: 54px;
          height: 54px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--champagne-gold), #ffe3ac);
          color: var(--deep-plum);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          margin-bottom: 16px;
          box-shadow: 0 12px 28px rgba(216, 167, 107, 0.24);
        }

        .package-tag {
          position: relative;
          z-index: 1;
          display: inline-flex;
          padding: 7px 12px;
          border-radius: 999px;
          background: var(--pale-pink);
          color: var(--rich-burgundy);
          font-size: 0.74rem;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.6px;
          margin-bottom: 14px;
        }

        .package-card h3,
        .combo-card h3 {
          position: relative;
          z-index: 1;
          margin: 0 0 8px;
          color: var(--dark-wine);
          font-size: 1.12rem;
        }

        .package-price,
        .combo-price {
          position: relative;
          z-index: 1;
          color: var(--rose-pink);
          font-family: "Playfair Display", Georgia, serif;
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 16px;
        }

        .package-card ul,
        .combo-card ul {
          position: relative;
          z-index: 1;
          list-style: none;
          padding: 0;
          margin: 0 0 22px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .package-card li,
        .combo-card li {
          color: var(--muted-plum-gray);
          line-height: 1.5;
          font-size: 0.9rem;
          display: flex;
          align-items: flex-start;
          gap: 9px;
        }

        .package-card li i,
        .combo-card li i {
          color: var(--champagne-gold);
          margin-top: 4px;
        }

        .small-book-btn {
          position: relative;
          z-index: 1;
          width: 100%;
          min-height: 46px;
          border-radius: 10px;
          background: var(--rich-burgundy);
          color: white;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 0.78rem;
          text-transform: uppercase;
          font-weight: 900;
          letter-spacing: 0.4px;
          transition: all 0.3s ease;
        }

        .small-book-btn:hover {
          background: var(--deep-plum);
          transform: translateY(-3px);
        }

        .combo-grid {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 18px;
        }

        .offers-box {
          max-width: 980px;
          margin: 46px auto 0;
          background:
            linear-gradient(135deg, rgba(58, 16, 38, 0.94), rgba(107, 22, 65, 0.9));
          border-radius: 28px;
          padding: 34px;
          color: white;
          box-shadow: 0 22px 55px rgba(58, 16, 38, 0.2);
        }

        .offers-box h3 {
          margin: 0 0 18px;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 2rem;
          color: var(--champagne-gold);
        }

        .offers-list {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .offer-item {
          padding: 18px;
          border-radius: 18px;
          background: rgba(255, 253, 252, 0.1);
          border: 1px solid rgba(216, 167, 107, 0.28);
          line-height: 1.6;
          font-weight: 700;
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        .offer-item i {
          color: var(--champagne-gold);
          margin-top: 4px;
          font-size: 1.1rem;
        }

        .seo-section {
          background: var(--warm-white);
        }

        .seo-content {
          max-width: 1080px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 36px;
          align-items: center;
        }

        .seo-text h2 {
          margin: 0 0 16px;
          color: var(--dark-wine);
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(2rem, 4vw, 3rem);
        }

        .seo-text p {
          margin: 0 0 16px;
          line-height: 1.85;
          color: var(--muted-plum-gray);
        }

        .seo-points {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-top: 22px;
        }

        .seo-point {
          padding: 14px;
          border-radius: 16px;
          background: var(--pale-pink);
          color: var(--dark-wine);
          font-weight: 800;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .seo-point i {
          color: var(--rose-pink);
        }

        .seo-image {
          min-height: 430px;
          border-radius: 34px;
          background:
            linear-gradient(rgba(58, 16, 38, 0.08), rgba(107, 22, 65, 0.16)),
            url("https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&w=1200&q=80");
          background-size: cover;
          background-position: center;
          box-shadow: 0 24px 55px rgba(58, 16, 38, 0.18);
        }

        .final-cta {
          padding: 80px 6%;
          text-align: center;
          background:
            radial-gradient(circle at 20% 20%, rgba(216, 167, 107, 0.18), transparent 30%),
            linear-gradient(135deg, var(--deep-plum), var(--rich-burgundy));
          color: white;
        }

        .final-cta h2 {
          margin: 0 0 14px;
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(2rem, 4vw, 3.3rem);
        }

        .final-cta p {
          max-width: 720px;
          margin: 0 auto 26px;
          color: #f3d8d5;
          line-height: 1.8;
        }

        .service-modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(18, 8, 14, 0.78);
          backdrop-filter: blur(12px);
          display: flex;
          align-items: stretch;
          justify-content: center;
          animation: modalFade 0.25s ease forwards;
        }

        .service-modal {
          width: 100%;
          height: 100vh;
          overflow-y: auto;
          background: var(--blush-white);
          position: relative;
          animation: modalSlideUp 0.35s ease forwards;
        }

        .modal-close {
          position: fixed;
          top: 18px;
          right: 18px;
          z-index: 10002;
          width: 46px;
          height: 46px;
          border-radius: 50%;
          border: none;
          background: rgba(255, 253, 252, 0.95);
          color: var(--deep-plum);
          font-size: 1.3rem;
          cursor: pointer;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease;
        }

        .modal-close:hover {
          transform: rotate(90deg) scale(1.05);
          background: var(--champagne-gold);
        }

        .modal-hero {
          position: relative;
          min-height: 56vh;
          display: flex;
          align-items: flex-end;
          padding: 110px 6% 55px;
          background-size: cover;
          background-position: center;
          color: white;
        }

        .modal-hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(58, 16, 38, 0.18), rgba(58, 16, 38, 0.86)),
            radial-gradient(circle at 18% 20%, rgba(216, 167, 107, 0.25), transparent 30%);
        }

        .modal-hero-content {
          position: relative;
          z-index: 2;
          max-width: 900px;
        }

        .modal-category-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          border-radius: 999px;
          background: rgba(255, 253, 252, 0.13);
          border: 1px solid rgba(216, 167, 107, 0.45);
          color: #ffe4bb;
          font-size: 0.78rem;
          font-weight: 900;
          letter-spacing: 1.3px;
          text-transform: uppercase;
          margin-bottom: 16px;
          backdrop-filter: blur(10px);
        }

        .modal-hero h2 {
          margin: 0 0 14px;
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(2.4rem, 6vw, 5rem);
          line-height: 1.02;
          color: white;
        }

        .modal-hero p {
          max-width: 740px;
          margin: 0 0 22px;
          color: #f6dcd9;
          line-height: 1.8;
          font-size: 1.02rem;
        }

        .modal-starting {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 18px;
          border-radius: 999px;
          background: var(--champagne-gold);
          color: var(--deep-plum);
          font-weight: 900;
        }

        .modal-content {
          padding: 60px 6% 90px;
        }

        .modal-content-grid {
          max-width: 1180px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 360px;
          gap: 34px;
          align-items: start;
        }

        .modal-price-card,
        .modal-book-card {
          background: var(--warm-white);
          border: 1px solid var(--light-rose-beige);
          border-radius: 28px;
          box-shadow: 0 18px 42px rgba(58, 16, 38, 0.1);
          overflow: hidden;
        }

        .modal-card-head {
          padding: 24px 24px 18px;
          border-bottom: 1px solid var(--light-rose-beige);
          background: linear-gradient(135deg, var(--warm-white), var(--pale-pink));
        }

        .modal-card-head h3 {
          margin: 0 0 8px;
          color: var(--dark-wine);
          font-size: 1.35rem;
        }

        .modal-card-head p {
          margin: 0;
          color: var(--muted-plum-gray);
          line-height: 1.6;
        }

        .modal-prices {
          padding: 6px 24px 24px;
        }

        .modal-service-group {
          margin-top: 22px;
        }

        .modal-service-group h4 {
          margin: 0 0 12px;
          color: var(--rich-burgundy);
          font-size: 1rem;
        }

        .modal-price-row {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          padding: 14px 0;
          border-bottom: 1px dashed rgba(94, 69, 83, 0.24);
        }

        .modal-price-row span {
          color: var(--muted-plum-gray);
        }

        .modal-price-row strong {
          color: var(--dark-wine);
          white-space: nowrap;
        }

        .modal-note {
          margin: 20px 0 0;
          padding: 14px;
          border-radius: 16px;
          background: var(--pale-pink);
          color: var(--rich-burgundy);
          line-height: 1.6;
          font-weight: 700;
        }

        .modal-book-card {
          position: sticky;
          top: 22px;
          padding: 24px;
        }

        .modal-book-card h3 {
          margin: 0 0 10px;
          color: var(--dark-wine);
          font-family: "Playfair Display", Georgia, serif;
          font-size: 1.8rem;
        }

        .modal-book-card p {
          margin: 0 0 18px;
          color: var(--muted-plum-gray);
          line-height: 1.7;
        }

        .modal-benefits {
          list-style: none;
          padding: 0;
          margin: 0 0 22px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .modal-benefits li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: var(--muted-plum-gray);
          line-height: 1.5;
          font-weight: 700;
        }

        .modal-benefits i {
          color: var(--champagne-gold);
          margin-top: 4px;
        }

        .modal-book-btn {
          width: 100%;
          min-height: 52px;
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
          font-size: 0.8rem;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
        }

        .modal-book-btn:hover {
          background: var(--deep-plum);
          transform: translateY(-3px);
        }

        .modal-secondary-close {
          width: 100%;
          margin-top: 12px;
          min-height: 48px;
          border-radius: 12px;
          border: 1px solid var(--light-rose-beige);
          background: var(--warm-white);
          color: var(--rich-burgundy);
          font-weight: 900;
          cursor: pointer;
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

        @keyframes modalFade {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes modalSlideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 1150px) {
          .price-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .package-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .combo-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .modal-content-grid {
            grid-template-columns: 1fr;
          }

          .modal-book-card {
            position: relative;
            top: 0;
          }
        }

        @media (max-width: 900px) {
          .trust-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .trust-item:nth-child(2) {
            border-right: none;
          }

          .trust-item:nth-child(1),
          .trust-item:nth-child(2) {
            border-bottom: 1px solid var(--light-rose-beige);
          }

          .price-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .seo-content {
            grid-template-columns: 1fr;
          }

          .seo-image {
            min-height: 340px;
          }

          .offers-list {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 650px) {
          .services-hero {
            padding: 105px 5% 70px;
          }

          .services-hero p {
            font-size: 0.95rem;
          }

          .hero-actions {
            flex-direction: column;
          }

          .primary-btn,
          .secondary-btn {
            width: 100%;
          }

          .trust-strip {
            margin-top: -28px;
          }

          .trust-grid {
            grid-template-columns: 1fr;
          }

          .trust-item {
            border-right: none;
            border-bottom: 1px solid var(--light-rose-beige);
          }

          .trust-item:last-child {
            border-bottom: none;
          }

          .section {
            padding: 60px 5%;
          }

          .price-grid,
          .package-grid,
          .combo-grid {
            grid-template-columns: 1fr;
          }

          .service-img-wrap {
            height: 230px;
          }

          .offers-box {
            padding: 26px 20px;
            border-radius: 22px;
          }

          .seo-points {
            grid-template-columns: 1fr;
          }

          .modal-close {
            top: 12px;
            right: 12px;
            width: 42px;
            height: 42px;
          }

          .modal-hero {
            min-height: 62vh;
            padding: 90px 5% 38px;
          }

          .modal-hero h2 {
            font-size: 2.45rem;
          }

          .modal-hero p {
            font-size: 0.95rem;
          }

          .modal-content {
            padding: 38px 5% 70px;
          }

          .modal-card-head,
          .modal-prices,
          .modal-book-card {
            padding-left: 18px;
            padding-right: 18px;
          }

          .modal-price-row {
            font-size: 0.94rem;
          }
        }

        @media (max-width: 420px) {
          .services-hero h1 {
            font-size: 2rem;
          }

          .salon-badge {
            font-size: 0.68rem;
            letter-spacing: 1px;
          }

          .package-price,
          .combo-price {
            font-size: 1.7rem;
          }

          .modal-hero h2 {
            font-size: 2.1rem;
          }

          .modal-category-badge {
            font-size: 0.68rem;
            letter-spacing: 1px;
          }
        }
      `}</style>

      <main className="services-page">
        <section className="services-hero">
          <div className="services-hero-content">
            <div className="salon-badge">
              <i className="fa-solid fa-crown"></i>
              Bindiya’z The Signature Salon & Academy
            </div>

            <h1>
              Premium Beauty Services <br />
              at <span>Affordable Prices</span>
            </h1>

            <p>
              Looking for a trusted ladies beauty salon in Anantapur? Bindiya’z
              The Signature Salon & Academy offers threading, waxing, facials,
              bridal makeup, manicure, pedicure, haircuts and luxury beauty care
              with professional service, hygiene and elegant finishing.
            </p>

            <div className="hero-actions">
              <Link to="/booking" className="primary-btn">
                <i className="fa-regular fa-calendar-check"></i>
                Book Appointment
              </Link>

              <a href="#price-list" className="secondary-btn">
                <i className="fa-solid fa-tags"></i>
                View Price List
              </a>
            </div>
          </div>
        </section>

        <div className="trust-strip">
          <div className="trust-grid">
            <div className="trust-item">
              <i className="fa-solid fa-user-check"></i>
              <h3>Women-Focused Salon</h3>
              <p>Comfortable beauty care for women.</p>
            </div>

            <div className="trust-item">
              <i className="fa-solid fa-spray-can-sparkles"></i>
              <h3>Clean & Hygienic</h3>
              <p>Safe tools, neat service and care.</p>
            </div>

            <div className="trust-item">
              <i className="fa-solid fa-gem"></i>
              <h3>Premium Services</h3>
              <p>From regular care to luxury bridal.</p>
            </div>

            <div className="trust-item">
              <i className="fa-solid fa-indian-rupee-sign"></i>
              <h3>Clear Pricing</h3>
              <p>Transparent price list before booking.</p>
            </div>
          </div>
        </div>

        <section className="section" id="price-list">
          <div className="section-header">
            <p className="section-subtitle">Price List</p>
            <h2 className="section-title">Tap a Service to View Full Details</h2>
            <p className="section-desc">
              We show the starting price first. Tap any service card to open the
              full-screen price list, service details and booking option.
            </p>
          </div>

          <div className="price-grid">
            {serviceCategories.map((category) => (
              <button
                className="service-card"
                key={category.title}
                onClick={() => setSelectedService(category)}
              >
                <div className="service-img-wrap">
                  <img src={category.image} alt={category.title} />
                  <div className="service-floating-icon">
                    <i className={category.icon}></i>
                  </div>
                </div>

                <div className="service-card-body">
                  <h3>{category.title}</h3>
                  <span className="starting-price">{category.starting}</span>
                  <p className="sales-line">{category.salesLine}</p>

                  <span className="view-full-btn">
                    View Full Details
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="section bridal-section">
          <div className="section-header">
            <p className="section-subtitle">Bridal Packages</p>
            <h2 className="section-title">Look Beautiful on Your Big Day</h2>
            <p className="section-desc">
              From simple bridal care to luxury bridal makeover, our packages
              are designed to help brides feel confident, glowing and photo-ready.
            </p>
          </div>

          <div className="package-grid">
            {bridalPackages.map((pkg) => (
              <div className="package-card" key={pkg.name}>
                <div className="package-icon">
                  <i className={pkg.icon}></i>
                </div>

                <span className="package-tag">{pkg.tag}</span>
                <h3>{pkg.name}</h3>
                <div className="package-price">{pkg.price}</div>

                <ul>
                  {pkg.features.map((feature) => (
                    <li key={feature}>
                      <i className="fa-solid fa-check"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={`/booking?service=${encodeURIComponent(pkg.name)}`}
                  className="small-book-btn"
                >
                  <i className="fa-regular fa-calendar-check"></i>
                  Book Package
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <p className="section-subtitle">Combo Offers</p>
            <h2 className="section-title">Best Value Beauty Combos</h2>
            <p className="section-desc">
              Save more with our salon combo offers. These packages are perfect
              for regular customers who want beauty care, grooming and glow at a
              better price.
            </p>
          </div>

          <div className="combo-grid">
            {comboOffers.map((combo) => (
              <div className="combo-card" key={combo.name}>
                <div className="combo-icon">
                  <i className={combo.icon}></i>
                </div>

                <h3>{combo.name}</h3>
                <div className="combo-price">{combo.price}</div>

                <ul>
                  {combo.features.map((feature) => (
                    <li key={feature}>
                      <i className="fa-solid fa-check"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={`/booking?service=${encodeURIComponent(combo.name)}`}
                  className="small-book-btn"
                >
                  <i className="fa-solid fa-bag-shopping"></i>
                  Choose Combo
                </Link>
              </div>
            ))}
          </div>

          <div className="offers-box">
            <h3>Special Offers</h3>

            <div className="offers-list">
              {specialOffers.map((offer) => (
                <div className="offer-item" key={offer.text}>
                  <i className={offer.icon}></i>
                  <span>{offer.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section seo-section">
          <div className="seo-content">
            <div className="seo-text">
              <p className="section-subtitle">Why Choose Us</p>
              <h2>Best Ladies Salon Services in Anantapur</h2>

              <p>
                Bindiya’z The Signature Salon & Academy is a professional beauty
                salon in Anantapur offering affordable and premium salon services
                for women. Whether you need eyebrow threading, Rica waxing,
                facial, D-Tan, manicure, pedicure, haircut, bridal makeup or a
                complete beauty package, our team provides clean and stylish
                service with personal care.
              </p>

              <p>
                Our beauty services are designed for daily grooming, party looks,
                bridal makeover, skin glow and regular self-care. We focus on
                hygiene, comfort, clear pricing and quality finishing, so every
                customer can feel confident before booking.
              </p>

              <div className="seo-points">
                <div className="seo-point">
                  <i className="fa-solid fa-circle-check"></i>
                  Bridal Makeup in Anantapur
                </div>

                <div className="seo-point">
                  <i className="fa-solid fa-circle-check"></i>
                  Facials & Skin Glow Services
                </div>

                <div className="seo-point">
                  <i className="fa-solid fa-circle-check"></i>
                  Threading, Waxing & D-Tan
                </div>

                <div className="seo-point">
                  <i className="fa-solid fa-circle-check"></i>
                  Haircut, Manicure & Pedicure
                </div>
              </div>
            </div>

            <div className="seo-image"></div>
          </div>
        </section>

        <section className="final-cta">
          <h2>Ready to Book Your Beauty Appointment?</h2>
          <p>
            Choose your service, select the right package and visit Bindiya’z
            The Signature Salon & Academy for a clean, premium and
            confidence-boosting salon experience.
          </p>

          <Link to="/booking" className="primary-btn">
            <i className="fa-regular fa-calendar-check"></i>
            Book Appointment Now
          </Link>
        </section>
      </main>

      {selectedService && (
        <div
          className="service-modal-overlay"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="service-modal"
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedService(null)}
              aria-label="Close service details"
            >
              ×
            </button>

            <div
              className="modal-hero"
              style={{
                backgroundImage: `url(${selectedService.image})`,
              }}
            >
              <div className="modal-hero-content">
                <div className="modal-category-badge">
                  <i className={selectedService.icon}></i>
                  Bindiya’z Salon Service
                </div>

                <h2>{selectedService.title}</h2>
                <p>{selectedService.salesLine}</p>

                <span className="modal-starting">
                  <i className="fa-solid fa-tag"></i>
                  {selectedService.starting}
                </span>
              </div>
            </div>

            <div className="modal-content">
              <div className="modal-content-grid">
                <div className="modal-price-card">
                  <div className="modal-card-head">
                    <h3>{selectedService.title} Price List</h3>
                    <p>{selectedService.seoText}</p>
                  </div>

                  <div className="modal-prices">
                    {renderServicePrices(selectedService)}

                    {selectedService.note && (
                      <div className="modal-note">
                        <i className="fa-solid fa-circle-info"></i>{" "}
                        {selectedService.note}
                      </div>
                    )}
                  </div>
                </div>

                <div className="modal-book-card">
                  <h3>Book This Service</h3>
                  <p>
                    Ready for your {selectedService.title.toLowerCase()} service?
                    Book your appointment now and visit Bindiya’z The Signature
                    Salon & Academy for a clean, premium salon experience.
                  </p>

                  <ul className="modal-benefits">
                    <li>
                      <i className="fa-solid fa-check"></i>
                      Clear pricing before booking
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      Professional women-focused salon care
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      Hygienic service with premium finishing
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i>
                      Suitable for regular care, parties and bridal preparation
                    </li>
                  </ul>

                  <Link
                    to={`/booking?service=${encodeURIComponent(
                      selectedService.title
                    )}`}
                    className="modal-book-btn"
                  >
                    <i className="fa-regular fa-calendar-check"></i>
                    Book Appointment
                  </Link>

                  <button
                    className="modal-secondary-close"
                    onClick={() => setSelectedService(null)}
                  >
                    Continue Viewing Services
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Services;