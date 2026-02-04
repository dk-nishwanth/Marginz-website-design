import React, { useState } from 'react';
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
    // Handle form submission
    console.log('Contact form submitted:', formData);
  };

  return (
    <div className="pt-48 bg-white text-black min-h-screen pb-40">
      {/* Hero Section */}
      <section className="px-6 md:px-12 max-w-[1800px] mx-auto mb-40">
        <h1 className="font-heading text-7xl md:text-[10vw] font-bold tracking-tighter uppercase leading-[0.8] mb-12 text-[#165a72]">
          Connect <br /><span className="text-[#ed1c24] italic">With Us</span>
        </h1>
        <p className="text-3xl md:text-4xl text-black leading-[1.1] font-medium mb-8 tracking-tight max-w-4xl">
          Ready to transform your organization through knowledge transfer? Let's discuss your requirements.
        </p>
      </section>

      {/* Contact Information & Form Section */}
      <section className="px-6 md:px-12 max-w-[1800px] mx-auto grid lg:grid-cols-2 gap-24 mb-40">
        {/* Contact Information */}
        <div className="space-y-16">
          <div>
            <h2 className="font-heading text-5xl font-bold uppercase tracking-tighter mb-8 text-[#165a72]">
              Contact Information
            </h2>
            <p className="text-xl text-black/80 leading-relaxed mb-16">
              We'd love to hear from you. Reach out to discuss your knowledge transfer and training requirements.
            </p>
          </div>

          <div className="space-y-12">
            {[
              { 
                icon: <Mail className="text-[#ed1c24]" size={24} />, 
                label: 'Email', 
                value: 'info@brixnet.in',
                link: 'mailto:info@brixnet.in'
              },
              { 
                icon: <Phone className="text-[#ed1c24]" size={24} />, 
                label: 'Phone', 
                value: '+91 80 4131 0000',
                link: 'tel:+918041310000'
              },
              { 
                icon: <MapPin className="text-[#ed1c24]" size={24} />, 
                label: 'Address', 
                value: 'Bangalore, Karnataka, India',
                link: null
              },
              { 
                icon: <Clock className="text-[#ed1c24]" size={24} />, 
                label: 'Hours', 
                value: 'Mon - Fri: 9AM - 6PM IST',
                link: null
              }
            ].map(info => (
              <div key={info.label} className="flex gap-8 items-start">
                <div className="w-16 h-16 bg-[#165a72]/5 flex items-center justify-center rounded-2xl flex-shrink-0">
                  {info.icon}
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-[#165a72]/70 uppercase block mb-2">
                    {info.label}
                  </span>
                  {info.link ? (
                    <a 
                      href={info.link}
                      className="text-2xl font-heading font-bold text-[#165a72] hover:text-[#ed1c24] transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-2xl font-heading font-bold text-[#165a72]">
                      {info.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gradient-to-br from-[#f8f9fa] to-white p-12 rounded-3xl shadow-2xl border border-black/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#165a72]/5 rounded-full -translate-y-20 translate-x-20"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#ed1c24]/5 rounded-full translate-y-16 -translate-x-16"></div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-[3px] bg-[#ed1c24]"></div>
              <h2 className="font-heading text-3xl font-bold uppercase tracking-tight text-[#165a72]">Send Message</h2>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#165a72] uppercase tracking-wider">Your Name *</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-white border-2 border-[#165a72]/20 rounded-xl p-4 focus:outline-none focus:border-[#165a72] transition-all text-black placeholder:text-black/40 shadow-sm hover:shadow-md" 
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#165a72] uppercase tracking-wider">Email Address *</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-white border-2 border-[#165a72]/20 rounded-xl p-4 focus:outline-none focus:border-[#165a72] transition-all text-black placeholder:text-black/40 shadow-sm hover:shadow-md" 
                    placeholder="Enter your email address"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#165a72] uppercase tracking-wider">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-white border-2 border-[#165a72]/20 rounded-xl p-4 focus:outline-none focus:border-[#165a72] transition-all text-black placeholder:text-black/40 shadow-sm hover:shadow-md" 
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#165a72] uppercase tracking-wider">Subject *</label>
                <input 
                  type="text" 
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full bg-white border-2 border-[#165a72]/20 rounded-xl p-4 focus:outline-none focus:border-[#165a72] transition-all text-black placeholder:text-black/40 shadow-sm hover:shadow-md" 
                  placeholder="Enter message subject"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-[#165a72] uppercase tracking-wider">Your Message *</label>
                <textarea 
                  rows={6} 
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-white border-2 border-[#165a72]/20 rounded-xl p-4 focus:outline-none focus:border-[#165a72] transition-all text-black placeholder:text-black/40 resize-none shadow-sm hover:shadow-md" 
                  placeholder="Enter your message here..."
                />
              </div>
              
              <button 
                type="submit"
                className="w-full py-6 bg-gradient-to-r from-[#165a72] to-[#165a72]/90 text-white font-bold uppercase tracking-[0.4em] text-sm rounded-xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Send Message</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#ed1c24] to-[#ed1c24]/90 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-40 bg-[#f8f9fa] border-t border-black/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Map Background" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10">
          <div className="mb-16 text-center">
            <span className="text-[10px] font-bold tracking-[0.6em] text-[#165a72] mb-8 block uppercase">Location</span>
            <h2 className="font-heading text-6xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.85] text-[#165a72] mb-8">
              Visit Our <span className="text-[#ed1c24]/60 italic">Office</span>
            </h2>
            <p className="text-xl text-black/80 leading-relaxed max-w-2xl mx-auto">
              Connect with us for in-person consultations and comprehensive training sessions.
            </p>
          </div>
          
          <div className="aspect-[16/9] overflow-hidden shadow-2xl border border-black/5 mb-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.886539092!2d77.49085452148437!3d12.953945614117967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1703123456789!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BRIX Network Location"
            />
          </div>
          
          <div className="flex justify-center gap-8">
            <a 
              href="https://maps.google.com/?q=Bangalore,Karnataka,India"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-4 bg-[#165a72] text-white font-bold uppercase tracking-[0.4em] text-[10px] hover:bg-[#ed1c24] transition-colors shadow-lg"
            >
              Get Directions
            </a>
            <a 
              href="tel:+918041310000"
              className="px-12 py-4 bg-white text-[#165a72] border-2 border-[#165a72] font-bold uppercase tracking-[0.4em] text-[10px] hover:bg-[#165a72] hover:text-white transition-colors shadow-lg"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;