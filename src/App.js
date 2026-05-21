import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

import Home from "./components/pages/home";
import About from "./components/pages/about";
import Gallery from "./components/pages/gallery";
import Services from "./components/pages/services";
import Booking from "./components/pages/booking";
import Contact from "./components/pages/contact";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [pathname]);

  return null;
}

function FloatingWhatsApp() {
  const whatsappNumber = "918500352005";

  const message = encodeURIComponent(
    "Hello Bindiya'z The Signature Salon & Academy, I want to know more details."
  );

  return (
    <>
      <style>{`
        @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css");

        .floating-whatsapp {
          position: fixed;
          right: 24px;
          bottom: 24px;
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: linear-gradient(135deg, #25D366, #128C7E);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          font-size: 2rem;
          z-index: 9999;
          box-shadow: 0 12px 30px rgba(18, 140, 126, 0.38);
          transition: all 0.3s ease;
          animation: whatsappPulse 1.8s infinite;
        }

        .floating-whatsapp:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 16px 40px rgba(18, 140, 126, 0.5);
          color: #ffffff;
        }

        .floating-whatsapp::before {
          content: "";
          position: absolute;
          inset: -7px;
          border-radius: 50%;
          border: 2px solid rgba(37, 211, 102, 0.35);
          animation: whatsappRing 1.8s infinite;
        }

        @keyframes whatsappPulse {
          0% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.45);
          }
          70% {
            box-shadow: 0 0 0 14px rgba(37, 211, 102, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
          }
        }

        @keyframes whatsappRing {
          0% {
            transform: scale(0.9);
            opacity: 0.8;
          }
          100% {
            transform: scale(1.25);
            opacity: 0;
          }
        }

        @media (max-width: 768px) {
          .floating-whatsapp {
            right: 18px;
            bottom: 18px;
            width: 54px;
            height: 54px;
            font-size: 1.85rem;
          }
        }

        @media (max-width: 480px) {
          .floating-whatsapp {
            right: 15px;
            bottom: 15px;
            width: 50px;
            height: 50px;
            font-size: 1.7rem;
          }
        }
      `}</style>

      <a
        href={`https://wa.me/${whatsappNumber}?text=${message}`}
        className="floating-whatsapp"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<Services />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />

      <FloatingWhatsApp />
    </BrowserRouter>
  );
}

export default App;