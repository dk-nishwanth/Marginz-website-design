import React from 'react';
import { PROJECTS, CLIENT_REVIEWS } from '../constants';
import { Star } from 'lucide-react';

const ProjectsPage: React.FC = () => {
  return (
    <div className="pt-24 md:pt-48 bg-white text-black min-h-screen pb-20 md:pb-40">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 md:px-12 max-w-[1800px] mx-auto mb-20 md:mb-40">
        <span className="text-[8px] sm:text-[9px] md:text-[10px] font-bold tracking-[0.6em] uppercase text-[#ed1c24] mb-6 md:mb-8 block">OUR SUCCESS STORIES</span>
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tighter uppercase leading-[0.8] mb-6 md:mb-12 text-[#0B4F6C]">
          Turning Challenges <br /><span className="text-[#ed1c24]/70 italic">Into Opportunities</span>
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black leading-[1.1] font-medium mb-4 md:mb-8 tracking-tight max-w-4xl">
          We partner with businesses to solve complex problems, harnessing technology to drive innovation, efficiency, and long-term success.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="py-20 md:py-40 bg-[#f8f9fa] border-y border-black/5">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
            {PROJECTS.map((project) => (
              <div key={project.id} className="group relative overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-all duration-700">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000"
                  />
                </div>
                <div className="p-4 md:p-8">
                  <div className="flex justify-between items-start mb-4 gap-2">
                    <span className="text-[8px] sm:text-[9px] md:text-[10px] font-bold tracking-[0.4em] uppercase text-[#ed1c24]">{project.category}</span>
                    <span className="text-[8px] sm:text-[9px] md:text-[10px] font-bold text-black/50 flex-shrink-0">{project.year}</span>
                  </div>
                  <h4 className="font-heading text-base sm:text-lg md:text-xl font-bold uppercase tracking-tight text-[#0B4F6C] group-hover:text-[#ed1c24] transition-colors mb-4">
                    {project.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-black/70 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 md:py-40 bg-white">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 md:px-12">
          <div className="mb-12 md:mb-24 text-center">
            <span className="text-[8px] sm:text-[9px] md:text-[10px] font-bold tracking-[0.6em] text-[#0B4F6C] mb-6 md:mb-8 block uppercase">CLIENT TESTIMONIALS</span>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tighter uppercase leading-[0.85] text-[#0B4F6C] mb-6 md:mb-8">
              Trusted by Businesses <br /><span className="text-[#ed1c24]/70 italic">Worldwide</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-black/80 leading-relaxed max-w-2xl mx-auto">
              Delivering impactful solutions with a 99% client satisfaction rate.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-12">
            {CLIENT_REVIEWS.map((review) => (
              <div key={review.id} className="p-6 md:p-12 bg-[#f9f9f9] border-l-8 border-[#0B4F6C] hover:bg-white transition-all group shadow-sm hover:shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 opacity-10 group-hover:opacity-20 transition-opacity">
                  <img 
                    src={`https://images.unsplash.com/photo-${
                      review.id === '1' ? '1472099645785-5658abf4ff4e' : 
                      review.id === '2' ? '1494790108755-2616c5e29c8c' : 
                      review.id === '3' ? '1507003211169-0a1dd7228f2d' :
                      review.id === '4' ? '1560250097-0b93528c311a' :
                      '1519085360753-af0119f7c3e6'
                    }?w=400&q=80`}
                    alt={review.name} 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                
                <div className="relative z-10">
                  <div className="mb-6">
                    <span className="text-[8px] sm:text-[9px] md:text-[10px] font-bold tracking-[0.4em] uppercase text-[#ed1c24] block mb-4">
                      {review.project}
                    </span>
                    <div className="flex items-center gap-2">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={16} className="fill-[#ed1c24] text-[#ed1c24]" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-black/80 leading-relaxed text-base md:text-lg mb-8 italic">
                    "{review.review}"
                  </p>
                  
                  <div className="pt-6 border-t border-black/10">
                    <h4 className="font-heading text-lg md:text-xl font-bold uppercase tracking-tight text-[#0B4F6C] group-hover:text-[#ed1c24] transition-colors">
                      {review.name}
                    </h4>
                    <p className="text-[8px] sm:text-[9px] md:text-[10px] font-bold tracking-[0.4em] uppercase text-[#ed1c24] mb-1">
                      {review.position}
                    </p>
                    <p className="text-xs md:text-sm text-black/60">
                      {review.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
