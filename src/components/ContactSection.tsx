import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert("Message sent! We'll get back to you soon.");
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
  <section id="contact-section" className="relative bg-black text-white min-h-screen overflow-hidden">
      {/* Purple Neon Background Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-purple-700/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-sm text-gray-400 tracking-widest uppercase mb-4">
            REACH OUT TO OUR TEAM
          </h2>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide mb-4">
            FAST, PERSONALIZED ASSISTANCE
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Call, email, or send a message. Our team is ready to help with your next project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Contact Info */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 bg-white/5 p-6 rounded-xl shadow-lg hover:shadow-purple-500/30 transition-shadow">
              <div className="p-3 rounded-full bg-purple-700/20">
                <Phone className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Phone Support</h3>
                <p className="text-gray-400">+91 9024939664</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white/5 p-6 rounded-xl shadow-lg hover:shadow-purple-500/30 transition-shadow">
              <div className="p-3 rounded-full bg-purple-700/20">
                <Mail className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Email Support</h3>
                <p className="text-gray-400">codexspacemain@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white/5 p-6 rounded-xl shadow-lg hover:shadow-purple-500/30 transition-shadow">
              <div className="p-3 rounded-full bg-purple-700/20">
                <MapPin className="h-6 w-6 text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Visit Us</h3>
                <p className="text-gray-400">Chandigarh, India</p>
              </div>
            </div>
          </div>

          {/* Right: Glass Form */}
          <div className="bg-white/5 backdrop-blur-md border border-purple-500/30 rounded-3xl p-10 shadow-2xl hover:shadow-purple-400/50 transition-shadow">
            <h2 className="text-2xl font-bold mb-2">Send Us a Message</h2>
            <p className="text-gray-400 mb-6">
              Fill in the form below and our team will get back to you.
            </p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-white/10 text-white placeholder-gray-300 px-4 py-3 rounded-md border-b border-purple-500/40 focus:border-purple-400 focus:outline-none transition"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-white/10 text-white placeholder-gray-300 px-4 py-3 rounded-md border-b border-purple-500/40 focus:border-purple-400 focus:outline-none transition"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-white/10 text-white placeholder-gray-300 px-4 py-3 rounded-md border-b border-purple-500/40 focus:border-purple-400 focus:outline-none transition"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-white/10 text-white placeholder-gray-300 px-4 py-3 rounded-md border-b border-purple-500/40 focus:border-purple-400 focus:outline-none transition"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-600 to-purple-400 px-6 py-3 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-purple-400/50 transition flex items-center justify-center gap-2"
              >
                <Send className="h-5 w-5" /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
