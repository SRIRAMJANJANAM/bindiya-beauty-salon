import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
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

          --navbar-shadow: 0 14px 35px rgba(58, 16, 38, 0.35);
          --button-shadow: 0 10px 25px rgba(219, 107, 130, 0.35);
        }

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: linear-gradient(
            135deg,
            var(--deep-plum) 0%,
            var(--dark-wine) 55%,
            var(--rich-burgundy) 100%
          );
          padding: 0.85rem 5%;
          box-shadow: var(--navbar-shadow);
          border-bottom: 1px solid rgba(216, 167, 107, 0.25);
        }

        .navbar-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
          text-decoration: none;
        }

        .logo-icon {
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background: var(--warm-white);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 20px rgba(216, 167, 107, 0.28);
          border: 2px solid rgba(216, 167, 107, 0.65);
          overflow: hidden;
          padding: 4px;
        }

        .logo-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
          border-radius: 50%;
        }

        .logo-text {
          font-size: 1.5rem;
          font-weight: 700;
          font-family: "Playfair Display", Georgia, serif;
          background: linear-gradient(
            135deg,
            var(--champagne-gold),
            #ffe3ac,
            var(--champagne-gold)
          );
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: 1px;
          line-height: 1.1;
        }

        .logo-sub {
          font-size: 0.7rem;
          color: var(--champagne-gold);
          letter-spacing: 2px;
          margin-top: 2px;
          font-weight: 700;
          text-transform: uppercase;
          background: linear-gradient(
            135deg,
            var(--champagne-gold),
            #FFE1A8
          );
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        }

        .nav-links {
          display: flex;
          gap: 1.4rem;
          align-items: center;
        }

        .nav-link {
          color: var(--blush-white);
          text-decoration: none;
          font-size: 1rem;
          font-weight: 500;
          padding: 0.5rem 0;
          transition: all 0.3s ease;
          position: relative;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .nav-link i {
          font-size: 1rem;
          color: var(--rose-pink);
          transition: all 0.3s ease;
        }

        .nav-link:hover i,
        .nav-link.active i {
          color: var(--champagne-gold);
          transform: translateY(-2px);
        }

        .nav-link::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          border-radius: 20px;
          background: linear-gradient(
            135deg,
            var(--champagne-gold),
            var(--rose-pink)
          );
          transition: width 0.3s ease;
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          width: 80%;
        }

        .nav-link:hover,
        .nav-link.active {
          color: var(--champagne-gold);
        }

        .booking-btn {
          background: linear-gradient(
            135deg,
            var(--soft-coral-pink),
            var(--rich-burgundy)
          );
          padding: 0.55rem 1.5rem;
          border-radius: 40px;
          color: var(--warm-white) !important;
          font-weight: 700;
          box-shadow: var(--button-shadow);
          border: 1px solid rgba(255, 245, 243, 0.25);
        }

        .booking-btn i {
          color: var(--warm-white);
        }

        .booking-btn::after {
          display: none;
        }

        .booking-btn:hover {
          transform: translateY(-2px);
          background: linear-gradient(
            135deg,
            var(--rose-pink),
            var(--rich-burgundy)
          );
          box-shadow: 0 12px 30px rgba(198, 90, 120, 0.45);
        }

        .menu-btn {
          display: none;
          background: var(--pale-pink);
          border: 1px solid var(--light-rose-beige);
          cursor: pointer;
          width: 46px;
          height: 46px;
          border-radius: 50%;
          color: var(--deep-plum);
          font-size: 1.25rem;
          box-shadow: 0 8px 20px rgba(58, 16, 38, 0.2);
          z-index: 1002;
        }

        .mobile-overlay {
          position: fixed;
          inset: 0;
          background: rgba(58, 16, 38, 0.55);
          z-index: 998;
          opacity: 0;
          visibility: hidden;
          transition: all 0.35s ease;
        }

        .mobile-overlay.open {
          opacity: 1;
          visibility: visible;
        }

        .mobile-nav {
          position: fixed;
          top: 0;
          left: 0;
          width: 300px;
          max-width: 84%;
          height: 100vh;
          background: linear-gradient(
            160deg,
            var(--deep-plum),
            var(--dark-wine),
            var(--rich-burgundy)
          );
          z-index: 999;
          padding: 1.5rem 1.2rem;
          box-shadow: 20px 0 45px rgba(58, 16, 38, 0.45);
          border-right: 1px solid rgba(216, 167, 107, 0.25);
          transform: translateX(-100%);
          transition: transform 0.4s ease;
        }

        .mobile-nav.open {
          transform: translateX(0);
        }

        .mobile-top {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(216, 167, 107, 0.25);
        }

        .close-btn {
          background: var(--pale-pink);
          border: none;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          color: var(--deep-plum);
          font-size: 1.1rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mobile-menu-links {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .mobile-link {
          color: var(--blush-white);
          text-decoration: none;
          font-size: 1.05rem;
          font-weight: 600;
          padding: 0.9rem 1rem;
          transition: all 0.3s ease;
          width: 100%;
          display: flex;
          align-items: center;
          gap: 0.9rem;
          border-radius: 18px;
          border: 1px solid transparent;
        }

        .mobile-link i {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          background: rgba(251, 231, 234, 0.12);
          color: var(--rose-pink);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.95rem;
        }

        .mobile-link:hover,
        .mobile-link.active {
          color: var(--champagne-gold);
          background: rgba(251, 231, 234, 0.12);
          border-color: rgba(216, 167, 107, 0.25);
        }

        .mobile-link:hover i,
        .mobile-link.active i {
          color: var(--champagne-gold);
          background: rgba(216, 167, 107, 0.16);
        }

        .mobile-booking {
          background: linear-gradient(
            135deg,
            var(--soft-coral-pink),
            var(--rich-burgundy)
          );
          color: var(--warm-white) !important;
          box-shadow: var(--button-shadow);
        }

        .mobile-booking i {
          background: rgba(255, 255, 255, 0.16);
          color: var(--warm-white);
        }

        /* Mobile Styles - Logo Left, Menu Right */
        @media (max-width: 768px) {
          .navbar {
            padding: 0.75rem 5%;
          }

          .navbar-container {
            justify-content: space-between;
          }

          .logo {
            justify-content: flex-start;
            flex: 0 1 auto;
          }

          .nav-links {
            display: none;
          }

          .menu-btn {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .logo-icon {
            width: 48px;
            height: 48px;
          }

          .logo-text {
            font-size: 1.18rem;
          }

          .logo-sub {
            font-size: 0.58rem;
            letter-spacing: 1.2px;
          }
        }

        @media (max-width: 480px) {
          .navbar {
            padding: 0.65rem 4%;
          }

          .logo {
            gap: 0.55rem;
          }

          .logo-icon {
            width: 42px;
            height: 42px;
            padding: 3px;
          }

          .logo-text {
            font-size: 1rem;
          }

          .logo-sub {
            font-size: 0.52rem;
            letter-spacing: 0.8px;
          }

          .mobile-nav {
            width: 280px;
          }

          .mobile-link {
            font-size: 1rem;
            padding: 0.8rem 1rem;
          }

          .mobile-link i {
            width: 32px;
            height: 32px;
            font-size: 0.85rem;
          }
        }

        @media (max-width: 360px) {
          .logo-sub {
            font-size: 0.48rem;
          }

          .logo-text {
            font-size: 0.95rem;
          }

          .logo-icon {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>

      <nav className="navbar">
        <div className="navbar-container">
          <NavLink to="/" className="logo" onClick={closeMenu}>
            <span className="logo-icon">
              <img
                src="/images/logo.png"
                alt="Bindiya'z Salon and Academy Logo"
                className="logo-img"
              />
            </span>

            <div>
              <div className="logo-text">Bindiya&apos;z</div>
              <div className="logo-sub">The Signature Salon & Academy</div>
            </div>
          </NavLink>

          <div className="nav-links">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <i className="fa-solid fa-house"></i>
              <span>Home</span>
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <i className="fa-solid fa-circle-info"></i>
              <span>About</span>
            </NavLink>

            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <i className="fa-solid fa-images"></i>
              <span>Gallery</span>
            </NavLink>

            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <i className="fa-solid fa-wand-magic-sparkles"></i>
              <span>Services</span>
            </NavLink>

            <NavLink
              to="/booking"
              className={({ isActive }) =>
                isActive
                  ? "nav-link active booking-btn"
                  : "nav-link booking-btn"
              }
            >
              <i className="fa-solid fa-calendar-check"></i>
              <span>Book Now</span>
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <i className="fa-solid fa-phone"></i>
              <span>Contact</span>
            </NavLink>
          </div>

          <button
            className="menu-btn"
            onClick={toggleMenu}
            aria-label="Open Menu"
          >
            <i
              className={
                isMenuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"
              }
            ></i>
          </button>
        </div>
      </nav>

      <div
        className={`mobile-overlay ${isMenuOpen ? "open" : ""}`}
        onClick={closeMenu}
      ></div>

      <div className={`mobile-nav ${isMenuOpen ? "open" : ""}`}>
        <div className="mobile-top">
          <button className="close-btn" onClick={closeMenu}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div className="mobile-menu-links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "mobile-link active" : "mobile-link"
            }
            onClick={closeMenu}
          >
            <i className="fa-solid fa-house"></i>
            <span>Home</span>
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "mobile-link active" : "mobile-link"
            }
            onClick={closeMenu}
          >
            <i className="fa-solid fa-circle-info"></i>
            <span>About</span>
          </NavLink>

          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              isActive ? "mobile-link active" : "mobile-link"
            }
            onClick={closeMenu}
          >
            <i className="fa-solid fa-images"></i>
            <span>Gallery</span>
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "mobile-link active" : "mobile-link"
            }
            onClick={closeMenu}
          >
            <i className="fa-solid fa-wand-magic-sparkles"></i>
            <span>Services</span>
          </NavLink>

          <NavLink
            to="/booking"
            className={({ isActive }) =>
              isActive
                ? "mobile-link active mobile-booking"
                : "mobile-link mobile-booking"
            }
            onClick={closeMenu}
          >
            <i className="fa-solid fa-calendar-check"></i>
            <span>Book Now</span>
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "mobile-link active" : "mobile-link"
            }
            onClick={closeMenu}
          >
            <i className="fa-solid fa-phone"></i>
            <span>Contact</span>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Navbar;