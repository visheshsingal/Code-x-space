import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Hero: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  const navigate = useNavigate();
  const scrollToContact = () => {
    const el = document.getElementById("contact-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      // If contact section not on this page, navigate to contact page
      navigate("/contact");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;

      const rect = imageRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how much of the image section is visible
  // visibleHeight intentionally unused - progress calculation below drives behavior

      // Start zooming as soon as the image section enters the viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        // Calculate progress based on how much of the image section has entered the viewport
        const progress = Math.min(1, Math.max(0, (windowHeight - rect.top) / (windowHeight + rect.height)));
        setScale(1 + progress * 0.8);
      } else if (rect.top <= 0) {
        // If we've scrolled past the top, keep max zoom
        setScale(1.8);
      } else {
        // If image is not yet in view, no zoom
        setScale(1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Call once on mount to set initial state
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* HERO TEXT */}
      <section className="hero">
        <h1 className="title">
          We Build <br />
          <span className="highlight">Modern Websites</span> <br />
          That Grow Your <span className="purple">Business</span>
        </h1>
        <p className="subtitle">
          Transform your digital presence with cutting-edge web development,
          sleek design, and powerful functionality that drives real results.
        </p>
        <div className="buttons">
          <button className="btn-primary" onClick={scrollToContact}>
            Get a Free Quote
          </button>
        </div>
      </section>

      {/* STICKY ZOOM IMAGE */}
      <section className="image-section" ref={imageRef}>
        <div className="image-wrapper">
          <img
            src="https://images.pexels.com/photos/5711000/pexels-photo-5711000.jpeg"
            alt="Hero"
            style={{ transform: `scale(${scale})` }}
          />
        </div>
      </section>

      {/* STYLES */}
      <style>{`
        body {
          margin: 0;
          font-family: 'Segoe UI', Arial, sans-serif;
          background: #f7f7f7;
        }

        .hero {
          text-align: center;
          padding: 120px 20px;
          background: #f7f7f7;
        }

        .title {
          font-size: 3rem;
          font-weight: 700;
          color: #111;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        /* Purple Gradient Highlight */
        .highlight {
          background: linear-gradient(to right, #6d28d9, #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Solid Purple Accent */
        .purple {
          color: #6d28d9;
          font-weight: 700;
        }

        .subtitle {
          font-size: 1.2rem;
          color: #555;
          margin-bottom: 40px;
          line-height: 1.6;
        }

        .buttons {
          display: flex;
          justify-content: center;
        }

        /* 🖤 Black Button */
        .btn-primary {
          background: #111;
          color: #fff;
          padding: 14px 32px;
          border-radius: 30px;
          border: none;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        }

        .btn-primary:hover {
          background: #000;
          transform: scale(1.05);
          box-shadow: 0 6px 16px rgba(0,0,0,0.5);
        }

        .image-section {
          position: sticky;
          top: 0;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #f7f7f7;
        }

        .image-wrapper {
          width: 90%;
          height: 90%;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.25);
        }

        .image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 24px;
          transition: transform 0.2s ease-out;
          /* Removed grayscale filter for normal color */
        }
      `}</style>
    </div>
  );
};

export default Hero;