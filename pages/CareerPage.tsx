import React, { useState } from 'react';
import { ArrowUpRight, Upload } from 'lucide-react';
import { JOBS } from '../constants';

const CareerPage: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    jobPosition: '',
    resume: null as File | null
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, resume: file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="pt-48 bg-white text-black min-h-screen pb-40">
      {/* Hero Section */}
      <section className="px-6 md:px-12 max-w-[1800px] mx-auto mb-40 text-center">
        <h1 className="font-heading text-7xl md:text-[11vw] font-bold tracking-tighter uppercase leading-[0.8] mb-12 text-[#165a72]">
          WISH YOU <br /><span className="text-[#ed1c24] italic">JOIN US?</span>
        </h1>
        <p className="text-2xl md:text-3xl text-black leading-[1.1] font-medium tracking-tight max-w-3xl mx-auto">
          SHARE YOUR PART
        </p>
      </section>

      {/* Available Jobs Section */}
      <section className="py-40 bg-[#f8f9fa] border-y border-black/5">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12">
          <div className="mb-24 text-center">
            <h2 className="font-heading text-6xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.85] text-[#165a72] mb-8">
              Available <span className="text-[#ed1c24]/60 italic">Jobs</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {JOBS.map(job => (
              <div key={job.id} className="p-16 border-l-8 border-[#165a72] bg-white hover:shadow-2xl transition-all group">
                <div className="flex justify-between items-start mb-12">
                  <div>
                    <h3 className="font-heading text-4xl font-bold uppercase mb-4 text-[#165a72]">{job.title}</h3>
                    <div className="flex items-center gap-8 mb-6">
                      <span className="text-[10px] font-bold tracking-widest text-[#ed1c24] uppercase">Experience: {job.experience}</span>
                      <span className="text-[10px] font-bold tracking-widest text-[#ed1c24] uppercase">Location: {job.location}</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelectedJob(job.id)}
                    className="p-4 bg-[#165a72]/5 border border-[#165a72]/20 rounded-full hover:bg-[#ed1c24] hover:text-white transition-all"
                  >
                     <ArrowUpRight size={24} />
                  </button>
                </div>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="font-heading text-lg font-bold uppercase mb-4 text-[#165a72]">Description</h4>
                    <p className="text-lg text-black/80 leading-relaxed">{job.description}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-heading text-lg font-bold uppercase mb-4 text-[#165a72]">Skills Required</h4>
                    <p className="text-base text-black/70 leading-relaxed">{job.skills}</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-black/10">
                    <div>
                      <h4 className="font-heading text-sm font-bold uppercase mb-2 text-[#165a72]">Qualification</h4>
                      <p className="text-sm text-black/70">{job.qualification}</p>
                    </div>
                    <div>
                      <h4 className="font-heading text-sm font-bold uppercase mb-2 text-[#165a72]">Salary</h4>
                      <p className="text-sm text-black/70">{job.salary}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-40 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="mb-24 text-center">
            <h2 className="font-heading text-6xl md:text-8xl font-bold tracking-tighter uppercase leading-[0.85] text-[#165a72] mb-8">
              APPLY TO YOUR <br /><span className="text-[#ed1c24]/60 italic">PREFERRED JOB</span>
            </h2>
          </div>

          <div className="bg-gradient-to-br from-[#f8f9fa] to-white p-12 rounded-3xl shadow-2xl border border-black/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#165a72]/5 rounded-full -translate-y-20 translate-x-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#ed1c24]/5 rounded-full translate-y-16 -translate-x-16"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-12">
                <div className="w-12 h-[3px] bg-[#ed1c24]"></div>
                <h3 className="font-heading text-3xl font-bold uppercase tracking-tight text-[#165a72]">Application Form</h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#165a72] uppercase tracking-wider">Full Name *</label>
                    <input 
                      type="text" 
                      name="fullName"
                      required
                      value={formData.fullName}
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
                  <label className="text-sm font-bold text-[#165a72] uppercase tracking-wider">Job Position *</label>
                  <select 
                    name="jobPosition"
                    required
                    value={formData.jobPosition}
                    onChange={handleInputChange}
                    className="w-full bg-white border-2 border-[#165a72]/20 rounded-xl p-4 focus:outline-none focus:border-[#165a72] transition-all text-black shadow-sm hover:shadow-md"
                  >
                    <option value="">Select Job Position / Functional Area</option>
                    <option value="subject-matter-expert">Subject Matter Expert</option>
                    <option value="atd-fullstack-developer">ATD Full stack developer</option>
                    <option value="ui-ux-designer">UI/UX designer</option>
                    <option value="marketing-sales-expert">Marketing and sales expert</option>
                    <option value="intern-ld">Intern, L&D</option>
                  </select>
                </div>
                
                <div className="space-y-4">
                  <label className="text-sm font-bold text-[#165a72] uppercase tracking-wider">Upload Resume *</label>
                  <div className="relative">
                    <input 
                      type="file" 
                      accept=".pdf,.jpeg,.jpg,.doc,.docx"
                      onChange={handleFileChange}
                      required
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
                    />
                    <div className="w-full bg-white border-2 border-dashed border-[#165a72]/30 rounded-xl p-8 flex flex-col items-center gap-4 text-center hover:border-[#165a72] transition-all shadow-sm hover:shadow-md">
                      <div className="w-16 h-16 bg-[#165a72]/10 rounded-full flex items-center justify-center">
                        <Upload size={24} className="text-[#165a72]" />
                      </div>
                      <div>
                        <p className="text-[#165a72] font-bold mb-2">
                          {formData.resume ? formData.resume.name : 'Click to upload or drag and drop'}
                        </p>
                        <p className="text-sm text-black/60">PDF, JPEG, Word format (Max 10MB)</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <button 
                  type="submit"
                  className="w-full py-6 bg-gradient-to-r from-[#165a72] to-[#165a72]/90 text-white font-bold uppercase tracking-[0.4em] text-sm rounded-xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="relative z-10">Submit Application</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ed1c24] to-[#ed1c24]/90 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerPage;