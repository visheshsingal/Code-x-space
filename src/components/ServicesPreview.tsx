import { useEffect, useRef, useState } from "react";

const ServicesPreview = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "E-commerce Solutions",
      price: "₹5,000",
      description: "Complete online store setup with product management, secure payment gateway, and order tracking system. Perfect for businesses looking to sell products online with professional shopping cart functionality.",
      img: "https://images.unsplash.com/photo-1556382363-8967ad2b37f0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Web Application Development",
      price: "₹5,000",
      description: "Custom web applications built with modern frameworks. Includes user authentication, database integration, and responsive design for business automation and custom solutions.",
      img: "https://images.unsplash.com/photo-1643208589858-444e42c4c95e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Website Maintenance & Support",
      price: "₹3,000",
      description: "Ongoing website maintenance including security updates, performance optimization, backups, and technical support. Keep your website running smoothly and securely.",
      img: "https://images.pexels.com/photos/4500890/pexels-photo-4500890.jpeg",
    },
    {
      title: "Business Website Development",
      price: "₹3000",
      description: "Professional business websites with responsive design, contact forms, and basic SEO. Ideal for startups and small businesses needing an online presence.",
      img: "https://images.pexels.com/photos/7983358/pexels-photo-7983358.jpeg",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-black text-white overflow-hidden"
    >
      {/* RADIAL PULSE */}
      <div className="absolute inset-0 z-0 flex justify-center items-center pointer-events-none">
        {[...Array(3)].map((_, idx) => (
          <span
            key={idx}
            className="absolute rounded-full opacity-30 animate-pulse-ring"
            style={{
              width: `${200 + idx * 150}px`,
              height: `${200 + idx * 150}px`,
              animationDelay: `${idx * 0.5}s`,
              border: `1px solid rgba(168,85,247,${0.18 - idx * 0.03})`,
            }}
          ></span>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-purple-400 mb-4">
            Our Services
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            We offer comprehensive web development services to help your
            business succeed online
          </p>
        </div>

        {/* SERVICE CARDS - UPDATED WITH PRICE */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative bg-gray-900 rounded-lg overflow-hidden border border-gray-800 shadow-[0_10px_30px_rgba(0,0,0,0.6)] transform transition-all duration-700 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl will-change-transform`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0px)" : "translateY(30px)",
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-48 object-cover opacity-80"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {service.title}
                </h3>
                {/* ADDED PRICE DISPLAY */}
                <div className="text-2xl font-bold text-purple-400 mb-3">
                  {service.price}
                </div>
                <p className="text-gray-300 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* BUTTON */}
        {/* <div
          className={`text-center mt-12 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-900 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            See All Services
          </Link>
        </div> */}
      </div>

      {/* TAILWIND ANIMATIONS */}
      <style>
          {`
          @keyframes pulse-ring {
            0% { transform: scale(0.5); opacity: 0.28; }
            50% { transform: scale(1.15); opacity: 0.06; }
            100% { transform: scale(0.5); opacity: 0.28; }
          }

          .animate-pulse-ring {
            animation: pulse-ring 3s cubic-bezier(.4,0,.2,1) infinite;
            filter: blur(6px);
          }

          /* Slight floating for decoration but not on cards */
          @keyframes soft-float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
            100% { transform: translateY(0px); }
          }

          .animate-soft-float {
            animation: soft-float 6s ease-in-out infinite;
          }

          /* Ensure radial pulses visible on mobile */
          @media (max-width: 768px) {
            .animate-pulse-ring {
              opacity: 0.18;
              filter: blur(4px);
            }
          }
        `}
      </style>
    </section>
  );
};

export default ServicesPreview;