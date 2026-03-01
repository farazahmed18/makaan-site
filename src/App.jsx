import React, { useState, useEffect } from 'react';
import { Home, MapPin, ArrowRight, Phone, X, ChevronLeft, ChevronRight, Activity, Waves, Gamepad2, Film, Sun, Bus, BedSingle, Bath, Wifi, Droplets, Sparkles, Utensils, Maximize, Monitor, Archive, Box, CheckCircle2, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from '@studio-freight/lenis';

// --- Animation Wrappers ---
const Reveal = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

// --- Image Slider Modal ---
const ImageModal = ({ images, isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
        >
          <button onClick={onClose} className="absolute top-6 right-6 text-white/50 hover:text-white z-[110] transition-colors"><X size={40} /></button>
          <button onClick={prev} className="absolute left-4 md:left-10 text-white/50 hover:text-white z-[110] transition-colors"><ChevronLeft size={50} /></button>
          <button onClick={next} className="absolute right-4 md:right-10 text-white/50 hover:text-white z-[110] transition-colors"><ChevronRight size={50} /></button>

          <motion.div 
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="h-[85vh] w-full max-w-4xl flex items-center justify-center"
          >
            <img src={images[currentIndex]} className="max-h-full max-w-full object-contain shadow-2xl border border-white/5" alt="Room View" />
          </motion.div>
          
          <div className="absolute bottom-10 flex gap-2">
            {images.map((_, i) => (
              <div key={i} className={`h-1.5 transition-all duration-300 ${i === currentIndex ? 'w-8 bg-[#b91c1c]' : 'w-2 bg-white/20'}`} />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// --- Horizontal Room Card ---
const HorizontalRoomCard = ({ title, price, features, images, onEnquire }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Reveal>
        <div className="flex flex-col lg:flex-row border-[3px] border-[#b91c1c] bg-white mb-10 group">
          
          {/* Left Side: Image */}
          <div className="w-full lg:w-[45%] relative aspect-video lg:aspect-auto overflow-hidden cursor-pointer" onClick={() => setIsModalOpen(true)}>
            <img src={images[0]} alt={title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/10 hover:bg-black/0 transition-colors flex items-center justify-between px-4">
               <div className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center"><ChevronLeft size={20} className="text-slate-600"/></div>
               <div className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center"><ChevronRight size={20} className="text-slate-600"/></div>
            </div>
          </div>
          
          {/* Right Side: Content */}
          <div className="w-full lg:w-[55%] p-8 md:p-10 flex flex-col">
            <h3 className="text-2xl font-black text-slate-900 mb-6 tracking-wide uppercase">{title}</h3>
            
            {/* Icon Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-y-6 gap-x-2 mb-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex flex-col items-center text-center">
                  <feature.icon className="w-7 h-7 mb-2 text-slate-800" strokeWidth={1.5} />
                  <span className="text-[10px] uppercase text-slate-500 font-bold leading-tight px-1">{feature.name}</span>
                </div>
              ))}
            </div>

            {/* Price & Button Floor */}
            <div className="border-t border-gray-200 pt-6 mt-auto flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs text-slate-500 font-bold">Starting from</span><br/>
                <span className="text-3xl font-black text-slate-900">AED {price}</span> 
                <span className="text-xs text-slate-900 font-bold"> : per person per month</span>
                <p className="text-[10px] text-slate-500 mt-1 italic">All Inclusive <br/>Subject to VAT & applicable levies</p>
              </div>
              <button 
                onClick={onEnquire}
                className="bg-black text-white px-8 py-4 text-sm font-bold hover:bg-[#b91c1c] transition-colors flex items-center justify-center gap-2 uppercase tracking-widest w-full sm:w-auto"
              >
                Enquire <ArrowRight size={16} />
              </button>
            </div>
          </div>

        </div>
      </Reveal>
      <ImageModal images={images} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default function App() {
  const [status, setStatus] = useState('');
  
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2 });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault(); setStatus('Submitting...');
    const formData = new FormData(e.target);
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwmD7wd4AYTW-PnLMaemjqKV90-idcmejNxxUowgbo8qb7HxqhbOSh3sfkSsG0-rpIBcA/exec';
    try {
      await fetch(scriptURL, { method: 'POST', body: formData, mode: 'no-cors' });
      setStatus('Success! Inquiry Sent.');
      e.target.reset();
    } catch (e) { setStatus('Error. Try again.'); }
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Room Features
  const standardFeatures = [
    { name: "Study Desk", icon: Monitor },
    { name: "Single Bed", icon: BedSingle },
    { name: "En-suite Bath", icon: Bath },
    { name: "In-room Fridge", icon: Box },
    { name: "Wardrobe", icon: Archive },
    { name: "High Speed Wifi", icon: Wifi },
    { name: "Daily Water", icon: Droplets },
    { name: "Cleaning", icon: Sparkles },
    { name: "Shared Kitchen", icon: Utensils }
  ];

  const premiumFeatures = [
    { name: "Bigger Living Area", icon: Maximize },
    ...standardFeatures
  ];

  return (
    <div className="font-sans selection:bg-[#b91c1c] selection:text-white antialiased text-slate-900 bg-white">
      {/* Navbar */}
      <nav className="fixed w-full bg-white z-50 border-b-4 border-[#b91c1c] shadow-sm">
        <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <span className="text-3xl font-black text-[#b91c1c] tracking-tighter uppercase italic">Makaan</span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-black text-slate-900 text-[11px] uppercase tracking-[0.15em]">
            <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="hover:text-[#b91c1c] transition-colors py-8 border-b-4 border-transparent hover:border-[#b91c1c]">Home</button>
            <button onClick={() => scrollTo('living')} className="hover:text-[#b91c1c] transition-colors py-8 border-b-4 border-transparent hover:border-[#b91c1c]">Living</button>
            <button onClick={() => scrollTo('facilities')} className="hover:text-[#b91c1c] transition-colors py-8 border-b-4 border-transparent hover:border-[#b91c1c]">Facilities</button>
            <button onClick={() => scrollTo('contact')} className="hover:text-[#b91c1c] transition-colors py-8 border-b-4 border-transparent hover:border-[#b91c1c]">Contact Us</button>
            <button onClick={() => scrollTo('contact')} className="bg-[#b91c1c] text-white px-6 py-3 text-[11px] font-black hover:bg-black transition-all ml-4">STUDENT PORTAL</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20">
        <div className="relative h-[65vh] w-full bg-slate-900 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover opacity-60" alt="Makaan Student Housing" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
             <div className="bg-white/95 backdrop-blur px-8 py-4 mb-8 border border-white/20 shadow-2xl">
                <h1 className="text-4xl md:text-5xl font-black tracking-widest uppercase text-slate-900">Affordable Student Housing</h1>
             </div>
             <button onClick={() => scrollTo('living')} className="bg-[#b91c1c] text-white font-bold uppercase tracking-widest px-12 py-4 hover:bg-black transition-colors shadow-2xl border-2 border-[#b91c1c]">
                See Rooms
             </button>
          </div>
        </div>
      </section>

      {/* Homepage USPs Section (Premium Myriad Style) */}
      <section className="py-24 max-w-[1200px] mx-auto px-6">
         <Reveal>
            <div className="flex flex-col lg:flex-row shadow-2xl">
              
              {/* Left Side: The USPs */}
              <div className="w-full lg:w-1/2 p-12 md:p-16 bg-[#b91c1c] text-white flex flex-col justify-center">
                <h2 className="text-4xl font-black mb-4 uppercase tracking-tight">Why Us?</h2>
                
                {/* Myriad Signature Underline */}
                <div className="w-16 h-[3px] bg-white mb-10"></div>
                
                <p className="text-white/90 mb-10 text-sm leading-relaxed font-medium pr-4">
                  At Makaan Dubai, we put your comfort and convenience first. We provide you with a student housing community where you can live, work, and play in a safe and inspiring environment.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-12">
                  {[
                    "Community-Driven", "Affordable Housing", "Heart of Dubai", 
                    "Safety & Security", "Leisure & Entertainment", "No Stress Living", 
                    "Furnished Rooms", "Sports & Fitness", "Free Transportation"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 border-b border-white/20 pb-3">
                      <div className="w-1.5 h-1.5 bg-white rounded-sm"></div>
                      <span className="text-[11px] font-bold uppercase tracking-widest">{item}</span>
                    </div>
                  ))}
                </div>

                <button onClick={() => scrollTo('living')} className="bg-black text-white px-10 py-4 text-sm font-bold hover:bg-white hover:text-black transition-colors uppercase tracking-widest w-fit flex items-center gap-2">
                  See Rooms <ArrowRight size={16} />
                </button>
              </div>
              
              {/* Right Side: Image */}
              <div className="w-full lg:w-1/2 min-h-[500px]">
                <img src="/room1.jpeg" alt="Makaan Lifestyle" className="w-full h-full object-cover" />
              </div>

            </div>
         </Reveal>
      </section>

      {/* Living Section */}
      <section id="living" className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-[1200px] mx-auto px-6">
          <Reveal>
            <div className="mb-12 border-b-4 border-[#b91c1c] w-fit pb-2">
              <h2 className="text-4xl font-black tracking-tight uppercase text-slate-900">Living</h2>
            </div>
          </Reveal>
          
          <HorizontalRoomCard 
              title="Standard Sharing" 
              price="2,700" 
              features={standardFeatures}
              images={["/room1.jpeg", "/room2.jpeg"]} 
              onEnquire={() => scrollTo('contact')}
          />
          
          <HorizontalRoomCard 
              title="Premium Sharing" 
              price="3,650" 
              features={premiumFeatures}
              images={["/room3.jpeg", "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=800"]} 
              onEnquire={() => scrollTo('contact')}
          />
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-24 max-w-[1200px] mx-auto px-6">
        <Reveal>
          <div className="mb-16 border-b-4 border-[#b91c1c] w-fit pb-2">
             <h2 className="text-4xl font-black tracking-tight uppercase text-[#b91c1c]">Facilities</h2>
          </div>
          
          {/* Grid of exactly 7 facilities from brief */}
          <div className="flex flex-wrap justify-center gap-y-16 gap-x-12 text-center mb-16">
            {[
              { icon: Activity, t: "Sports Facilities" },
              { icon: Zap, t: "Fitness and Health" },
              { icon: Waves, t: "Swimming Pools" },
              { icon: Gamepad2, t: "Game Rooms" },
              { icon: Film, t: "Movie & Game Nights" },
              { icon: Sun, t: "Recreational Terrace" },
              { icon: Bus, t: "Shuttle Services" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center w-[120px]">
                <div className="w-20 h-20 rounded-full border-2 border-slate-200 flex items-center justify-center mb-4 hover:border-[#b91c1c] transition-colors">
                   <item.icon className="w-10 h-10 text-slate-800" strokeWidth={1.5} />
                </div>
                <h4 className="text-[11px] font-bold text-slate-600 uppercase leading-tight">{item.t}</h4>
              </div>
            ))}
          </div>

          <div className="text-center border-t border-slate-200 pt-16">
            <button onClick={() => scrollTo('living')} className="bg-[#b91c1c] text-white px-10 py-4 text-sm font-bold hover:bg-black transition-colors uppercase tracking-widest">
                See Rooms
            </button>
          </div>
        </Reveal>
      </section>

      {/* Contact Section (Full Inquiry Form from Brief) */}
      <section id="contact" className="py-24 bg-slate-50 border-t border-slate-200">
         <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-16">
            <Reveal>
               <div className="mb-10 border-b-4 border-[#b91c1c] w-fit pb-2">
                 <h2 className="text-4xl font-black tracking-tight uppercase text-slate-900">Contact Us</h2>
               </div>
               <div className="space-y-8 text-slate-700">
                  <div className="flex items-start gap-4">
                     <MapPin className="text-[#b91c1c] mt-1" size={28}/>
                     <span className="font-bold uppercase tracking-widest text-sm leading-relaxed">Makaan Housing<br/>Domus Indigo 5<br/>Dubai Production City</span>
                  </div>
                  <div className="flex items-center gap-4">
                     <Phone className="text-[#b91c1c]" size={28}/>
                     <span className="font-bold uppercase tracking-widest text-xl">+971 52 660 2999</span>
                  </div>
               </div>
            </Reveal>

            <form onSubmit={handleSubmit} className="bg-white border-[3px] border-[#b91c1c] p-8 md:p-10 shadow-xl">
               <h3 className="text-2xl font-black mb-8 uppercase tracking-wide">Inquiry Form</h3>
               <div className="grid grid-cols-2 gap-4 mb-4">
                 <input name="firstName" placeholder="First Name" required className="p-4 bg-slate-100 text-sm font-bold border-none outline-none focus:ring-2 ring-[#b91c1c] rounded-none" />
                 <input name="lastName" placeholder="Last Name" required className="p-4 bg-slate-100 text-sm font-bold border-none outline-none focus:ring-2 ring-[#b91c1c] rounded-none" />
               </div>
               <input name="email" type="email" placeholder="Email Address" required className="w-full mb-4 p-4 bg-slate-100 text-sm font-bold border-none outline-none focus:ring-2 ring-[#b91c1c] rounded-none" />
               <input name="phone" type="tel" placeholder="Contact Number" required className="w-full mb-4 p-4 bg-slate-100 text-sm font-bold border-none outline-none focus:ring-2 ring-[#b91c1c] rounded-none" />
               
               <select name="source" required className="w-full mb-8 p-4 bg-slate-100 text-slate-500 text-sm font-bold outline-none focus:ring-2 ring-[#b91c1c] rounded-none appearance-none">
                 <option value="">How did you hear about us?</option>
                 <option>University Rep</option>
                 <option>Referral</option>
                 <option>Instagram</option>
                 <option>TikTok</option>
                 <option>Other</option>
               </select>
               
               <button className="w-full bg-[#b91c1c] text-white py-5 font-black text-sm hover:bg-black transition-colors uppercase tracking-widest">Send Inquiry</button>
               {status && <p className="mt-4 text-center text-[#b91c1c] font-black text-xs uppercase">{status}</p>}
            </form>
         </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white py-20">
        <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-4 gap-12 text-sm">
          
          <div>
            <h4 className="text-lg font-black uppercase mb-6 text-white">Makaan.ae</h4>
            <p className="text-gray-400 mb-2">Makaan Housing</p>
            <p className="text-gray-400 mb-2">Domus Indigo 5</p>
            <p className="text-gray-400 mb-6">Dubai Production City (UAE)</p>
            <p className="font-bold text-white">+971 52 660 2999</p>
          </div>

          <div className="flex flex-col gap-3 font-bold text-gray-400">
            <h4 className="text-lg font-black uppercase mb-3 text-white">Navigation</h4>
            <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="hover:text-white transition-colors text-left w-fit">Why Us</button>
            <button onClick={() => scrollTo('living')} className="hover:text-white transition-colors text-left w-fit">Living</button>
            <button onClick={() => scrollTo('facilities')} className="hover:text-white transition-colors text-left w-fit">Facilities</button>
            <button onClick={() => scrollTo('contact')} className="hover:text-white transition-colors text-left w-fit">Contact Us</button>
          </div>

          <div className="flex flex-col gap-3 font-bold text-gray-400">
             <h4 className="text-lg font-black uppercase mb-3 text-white">Support</h4>
             <a href="#" className="hover:text-white transition-colors w-fit">Frequently Asked Questions</a>
          </div>

          <div className="flex flex-col justify-end">
             <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Makaan © 2026</p>
          </div>

        </div>
      </footer>
    </div>
  );
}