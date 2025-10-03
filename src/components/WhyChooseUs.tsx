import React, { useEffect, useRef, useState } from 'react';
import { Clock, DollarSign, Users, Award } from 'lucide-react';

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: <Clock className="h-12 w-12 text-white" />,
      title: "Fast Delivery",
      description: "We deliver high-quality websites quickly without compromising on quality or attention to detail."
    },
    {
      icon: <Award className="h-12 w-12 text-white" />,
      title: "Modern Design",
      description: "Contemporary designs that follow the latest trends and best practices in web development."
    },
    {
      icon: <DollarSign className="h-12 w-12 text-white" />,
      title: "Affordable Pricing",
      description: "Competitive pricing that provides excellent value for professional web development services."
    },
    {
      icon: <Users className="h-12 w-12 text-white" />,
      title: "Expert Team",
      description: "Experienced developers and designers who are passionate about creating exceptional websites."
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Why Choose CodexSpace?
          </h2>
          <p className="text-blue-100 text-lg max-w-3xl mx-auto">
            We combine technical expertise with creative vision to deliver websites that exceed expectations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`text-center transform hover:scale-105 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-blue-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-blue-700 transition-colors duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {benefit.title}
              </h3>
              <p className="text-blue-100">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;