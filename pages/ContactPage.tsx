import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-48 bg-white text-black min-h-screen pb-40">
      <section className="px-6 md:px-12 max-w-[1800px] mx-auto mb-40">
        <h1 className="font-heading text-7xl md:text-[10vw] font-bold tracking-tighter uppercase leading-[0.8] mb-12 text-[#165a72]">
          Let's <br /><span className="text-[#ed1c24] italic">Discuss</span>
        </h1>
      </section>

      <section className="px-6 md:px-12 max-w-[1800px] mx-auto grid lg:grid-cols-2 gap-24">
        <div className="space-y-16">
          {[
            { icon: <Mail className="text-[#ed1c24]" />, label: 'Email', value: 'info@brixnet.in' },
            { icon: <Phone className="text-[#ed1c24]" />, label: 'Call', value: '+91 80 4131 0000' },
            { icon: <MapPin className="text-[#ed1c24]" />, label: 'Studio', value: 'Bangalore, India' }
          ].map(info => (
            <div key={info.label} className="flex gap-10 items-center">
              <div className="w-20 h-20 bg-[#165a72]/5 flex items-center justify-center rounded-3xl">{info.icon}</div>
              <div>
                <span className="text-[10px] font-bold tracking-widest text-black/50 uppercase block mb-1">{info.label}</span>
                <p className="text-3xl font-heading font-bold text-[#165a72]">{info.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-16 bg-[#165a72] text-white rounded-[3rem] shadow-3xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-30 transition-opacity">
             <Mail size={160} />
          </div>
          <h2 className="font-heading text-5xl font-bold uppercase mb-16">Inquiry Hub</h2>
          <form className="space-y-10 relative z-10">
            <input type="text" placeholder="Your Name" className="w-full bg-white/10 border-b border-white/20 p-5 focus:outline-none focus:border-white transition-all text-white placeholder:text-white/40" />
            <input type="email" placeholder="Your Email" className="w-full bg-white/10 border-b border-white/20 p-5 focus:outline-none focus:border-white transition-all text-white placeholder:text-white/40" />
            <textarea rows={4} placeholder="Requirement" className="w-full bg-white/10 border-b border-white/20 p-5 focus:outline-none focus:border-white transition-all text-white placeholder:text-white/40 resize-none" />
            <button className="w-full py-8 bg-[#ed1c24] text-white font-bold uppercase tracking-[0.4em] text-[10px] shadow-2xl hover:brightness-110 transition-all">
              Initialize Send
            </button>
          </form>
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
            <h2 className="font-heading text-6xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.85] text-[#165a72]">
              Find <span className="text-[#ed1c24]/30 italic">Us</span>
            </h2>
          </div>
          
          <div className="aspect-[16/9] overflow-hidden shadow-2xl border border-black/5">
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
        </div>
      </section>
    </div>
  );
};

export default ContactPage;