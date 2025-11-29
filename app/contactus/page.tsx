// components/ContactSection.tsx
'use client';

import { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  MessageCircle
} from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" id="contact">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm uppercase tracking-widest mb-2">
            GET IN TOUCH
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let&lsquo;s Start Your Journey
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have questions? We&lsquo;d love to hear from you. Send us a message and we&lsquo;ll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="+263 XXX XXX XXX"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your needs..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info & Social Media */}
          <div className="space-y-6">
            {/* Quick Contact */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="p-3 bg-blue-600/20 rounded-lg group-hover:bg-blue-600/30 transition-colors">
                    <Phone className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Call Us</p>
                    <p className="text-white font-semibold">+263 783 456 789</p>
                    <p className="text-gray-500 text-xs">Mon-Sat: 8AM-6PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="p-3 bg-blue-600/20 rounded-lg group-hover:bg-blue-600/30 transition-colors">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email Us</p>
                    <p className="text-white font-semibold">info@firstchoicecars.co.zw</p>
                    <p className="text-gray-500 text-xs">Quick response guaranteed</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="p-3 bg-blue-600/20 rounded-lg group-hover:bg-blue-600/30 transition-colors">
                    <MapPin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Visit Us</p>
                    <p className="text-white font-semibold">CDB, Harare</p>
                    <p className="text-gray-500 text-xs">Zimbabwe</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group cursor-pointer">
                  <div className="p-3 bg-green-600/20 rounded-lg group-hover:bg-green-600/30 transition-colors">
                    <MessageCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">WhatsApp</p>
                    <p className="text-white font-semibold">+263 783 456 789</p>
                    <p className="text-gray-500 text-xs">Chat with us instantly</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">Follow Us</h3>
              
              <div className="grid grid-cols-3 gap-3">
                <a
                  href="#"
                  className="flex flex-col items-center justify-center p-4 bg-blue-600/20 hover:bg-blue-600/30 rounded-lg transition-all group"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-gray-400 mt-2">Facebook</span>
                </a>

                <a
                  href="#"
                  className="flex flex-col items-center justify-center p-4 bg-pink-600/20 hover:bg-pink-600/30 rounded-lg transition-all group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6 text-pink-400 group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-gray-400 mt-2">Instagram</span>
                </a>

                <a
                  href="#"
                  className="flex flex-col items-center justify-center p-4 bg-sky-600/20 hover:bg-sky-600/30 rounded-lg transition-all group"
                  aria-label="Twitter"
                >
                  <Twitter className="w-6 h-6 text-sky-400 group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-gray-400 mt-2">Twitter</span>
                </a>

                <a
                  href="#"
                  className="flex flex-col items-center justify-center p-4 bg-blue-700/20 hover:bg-blue-700/30 rounded-lg transition-all group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6 text-blue-500 group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-gray-400 mt-2">LinkedIn</span>
                </a>

                <a
                  href="#"
                  className="flex flex-col items-center justify-center p-4 bg-red-600/20 hover:bg-red-600/30 rounded-lg transition-all group"
                  aria-label="YouTube"
                >
                  <Youtube className="w-6 h-6 text-red-400 group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-gray-400 mt-2">YouTube</span>
                </a>

                <a
                  href="#"
                  className="flex flex-col items-center justify-center p-4 bg-green-600/20 hover:bg-green-600/30 rounded-lg transition-all group"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-6 h-6 text-green-400 group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-gray-400 mt-2">WhatsApp</span>
                </a>
              </div>

              <p className="text-gray-400 text-sm text-center mt-6">
                Stay updated with our latest inventory and offers
              </p>
            </div>

            {/* CTA Button */}
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl p-6 text-center">
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                Need Immediate Assistance?
              </h4>
              <p className="text-gray-800 text-sm mb-4">
                Our team is ready to help you find your perfect car
              </p>
              <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Call Now
              </button>
            </div>
          </div>
        </div>

        {/* Map or Additional Info */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-blue-400 mb-2">500+</p>
              <p className="text-gray-400 text-sm">Happy Customers</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-400 mb-2">1000+</p>
              <p className="text-gray-400 text-sm">Cars Sold</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-400 mb-2">24/7</p>
              <p className="text-gray-400 text-sm">Support Available</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-400 mb-2">10+</p>
              <p className="text-gray-400 text-sm">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}