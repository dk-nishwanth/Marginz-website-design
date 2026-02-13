import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
  };

  const ScrollSection = ({ children }: { children: React.ReactNode }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <div className="pt-24 md:pt-48 bg-white text-black min-h-screen pb-20 md:pb-40 animate-in fade-in duration-1000">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 md:px-12 max-w-[1800px] mx-auto mb-20 md:mb-40">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tighter uppercase leading-[0.8] mb-6 md:mb-12 text-[#0B4F6C]"
        >
          Connect <br /><span className="text-[#ed1c24] italic">With Us</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black leading-[1.1] font-medium mb-4 md:mb-8 tracking-tight max-w-4xl"
        >
          Ready to transform your organization through knowledge transfer? Let's discuss your requirements.
        </motion.p>
      </section>

      {/* Contact Information & Form Section */}
      <ScrollSection>
      <section className="px-4 sm:px-6 md:px-12 max-w-[1800px] mx-auto grid lg:grid-cols-2 gap-8 md:gap-24 mb-20 md:mb-40">
        {/* Contact Information */}
        <div className="space-y-8 md:space-y-16">
          <div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-6 md:mb-8 text-[#0B4F6C]">
              Contact Information
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-black/80 leading-relaxed mb-8 md:mb-16">
              We'd love to hear from you. Reach out to discuss your knowledge transfer and training requirements.
            </p>
          </div>

          <div className="space-y-8 md:space-y-12">
            {[
              { 
                icon: <Mail className="text-[#ed1c24]" size={24} />, 
                label: 'Email', 
                value: 'devx.marginz@gmail.com',
                link: 'mailto:devx.marginz@gmail.com'
              },
              { 
                icon: <Phone className="text-[#ed1c24]" size={24} />, 
                label: 'Phone', 
                value: '+91 98400 00000',
                link: 'tel:+919840000000'
              },
              { 
                icon: <MapPin className="text-[#ed1c24]" size={24} />, 
                label: 'Address', 
                value: '5th Floor, The Executive Center, Tamarai Tech Park, Guindy',
                link: null
              },
              { 
                icon: <Clock className="text-[#ed1c24]" size={24} />, 
                label: 'Hours', 
                value: 'Mon - Fri: 9AM - 6PM IST',
                link: null
              }
            ].map(info => (
              <div key={info.label} className="flex gap-4 md:gap-8 items-start">
                <div className="w-12 md:w-16 h-12 md:h-16 bg-[#0B4F6C]/5 flex items-center justify-center rounded-2xl flex-shrink-0">
                  {info.icon}
                </div>
                <div className="min-w-0">
                  <span className="text-[8px] sm:text-[9px] md:text-[10px] font-bold tracking-widest text-[#0B4F6C]/70 uppercase block mb-2">
                    {info.label}
                  </span>
                  {info.link ? (
                    <a 
                      href={info.link}
                      className="text-lg sm:text-xl md:text-2xl font-heading font-bold text-[#0B4F6C] hover:text-[#ed1c24] transition-colors break-words"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-lg sm:text-xl md:text-2xl font-heading font-bold text-[#0B4F6C] break-words">
                      {info.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gradient-to-br from-[#f8f9fa] to-white p-6 md:p-12 rounded-3xl shadow-2xl border border-black/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#0B4F6C]/5 rounded-full -translate-y-20 translate-x-20"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#ed1c24]/5 rounded-full translate-y-16 -translate-x-16"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8 md:mb-12">
              <div className="w-12 h-[3px] bg-[#ed1c24]"></div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight text-[#0B4F6C]">Send Message</h2>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                  <label className="text-xs md:text-sm font-bold text-[#0B4F6C] uppercase tracking-wider">Your Name *</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-white border-2 border-[#0B4F6C]/20 rounded-xl p-3 md:p-4 focus:outline-none focus:border-[#0B4F6C] transition-all text-black placeholder:text-black/40 shadow-sm hover:shadow-md text-sm md:text-base" 
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs md:text-sm font-bold text-[#0B4F6C] uppercase tracking-wider">Email Address *</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-white border-2 border-[#0B4F6C]/20 rounded-xl p-3 md:p-4 focus:outline-none focus:border-[#0B4F6C] transition-all text-black placeholder:text-black/40 shadow-sm hover:shadow-md text-sm md:text-base" 
                    placeholder="Enter your email address"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs md:text-sm font-bold text-[#0B4F6C] uppercase tracking-wider">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-white border-2 border-[#0B4F6C]/20 rounded-xl p-3 md:p-4 focus:outline-none focus:border-[#0B4F6C] transition-all text-black placeholder:text-black/40 shadow-sm hover:shadow-md text-sm md:text-base" 
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-xs md:text-sm font-bold text-[#0B4F6C] uppercase tracking-wider">Subject *</label>
                <input 
                  type="text" 
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full bg-white border-2 border-[#0B4F6C]/20 rounded-xl p-3 md:p-4 focus:outline-none focus:border-[#0B4F6C] transition-all text-black placeholder:text-black/40 shadow-sm hover:shadow-md text-sm md:text-base" 
                  placeholder="Enter message subject"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-xs md:text-sm font-bold text-[#0B4F6C] uppercase tracking-wider">Your Message *</label>
                <textarea 
                  rows={6} 
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-white border-2 border-[#0B4F6C]/20 rounded-xl p-3 md:p-4 focus:outline-none focus:border-[#0B4F6C] transition-all text-black placeholder:text-black/40 resize-none shadow-sm hover:shadow-md text-sm md:text-base" 
                  placeholder="Enter your message here..."
                />
              </div>
              
              <button 
                type="submit"
                className="w-full py-4 md:py-6 bg-gradient-to-r from-[#0B4F6C] to-[#0B4F6C]/90 text-white font-bold uppercase tracking-[0.4em] text-xs md:text-sm rounded-xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Send Message</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#ed1c24] to-[#ed1c24]/90 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </button>
            </form>
          </div>
        </div>
      </section>
      </ScrollSection>

      {/* Map Section */}
      <ScrollSection>
      <section className="py-20 md:py-40 bg-[#f8f9fa] border-t border-black/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Map Background" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          <div className="mb-8 md:mb-16 text-center">
            <span className="text-[8px] sm:text-[9px] md:text-[10px] font-bold tracking-[0.6em] text-[#0B4F6C] mb-6 md:mb-8 block uppercase">Location</span>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tighter uppercase leading-[0.85] text-[#0B4F6C] mb-6 md:mb-8">
              Visit Our <span className="text-[#ed1c24]/80 italic">Office</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-black/80 leading-relaxed max-w-2xl mx-auto">
              Connect with us for in-person consultations and comprehensive training sessions.
            </p>
          </div>
          
          <div className="aspect-[16/9] overflow-hidden shadow-2xl border border-black/5 mb-8 md:mb-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5738!2d80.2207!3d13.0067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267!2sGuindy%2C%20Chennai!5e0!3m2!1sen!2sin!4v1703123456789!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MARGINZ Location"
            />
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-8">
            <a 
              href="https://maps.google.com/?q=Tamarai+Tech+Park+Guindy+Chennai"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 md:px-12 py-3 md:py-4 bg-[#0B4F6C] text-white font-bold uppercase tracking-[0.4em] text-[8px] md:text-[10px] hover:bg-[#ed1c24] transition-colors shadow-lg text-center"
            >
              Get Directions
            </a>
            <a 
              href="tel:+919840000000"
              className="px-6 md:px-12 py-3 md:py-4 bg-white text-[#0B4F6C] border-2 border-[#0B4F6C] font-bold uppercase tracking-[0.4em] text-[8px] md:text-[10px] hover:bg-[#0B4F6C] hover:text-white transition-colors shadow-lg text-center"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
      </ScrollSection>
    </div>
  );
};

export default ContactPage;