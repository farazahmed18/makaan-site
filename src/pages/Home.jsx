import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Coins, MapPin, ShieldCheck, Gamepad2, Smile, Armchair, Trophy, Bus } from 'lucide-react';

export default function Home() {
  const usps = [
    { title: "Community-Driven", icon: <Users size={32} strokeWidth={1.5} /> },
    { title: "Affordable Student Housing", icon: <Coins size={32} strokeWidth={1.5} /> },
    { title: "In the Heart of Dubai", icon: <MapPin size={32} strokeWidth={1.5} /> },
    { title: "Safety and Security", icon: <ShieldCheck size={32} strokeWidth={1.5} /> },
    { title: "Leisure and Entertainment", icon: <Gamepad2 size={32} strokeWidth={1.5} /> },
    { title: "No Stress Living", icon: <Smile size={32} strokeWidth={1.5} /> },
    { title: "Furnished Accommodation", icon: <Armchair size={32} strokeWidth={1.5} /> },
    { title: "Sports and Fitness", icon: <Trophy size={32} strokeWidth={1.5} /> },
    { title: "Free Transportation", icon: <Bus size={32} strokeWidth={1.5} /> }
  ];

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION - STUDENT LIVING ELEVATED */}
      <section className="relative py-32 md:py-48 text-center overflow-hidden">
        <div className="absolute inset-0 bg-white/40 z-10"></div>
        <img src="/room1.jpeg" alt="Background" className="absolute inset-0 w-full h-full object-cover" />
        
        <div className="relative z-20 max-w-5xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-black text-[#2C5F6E] uppercase tracking-tighter mb-4 leading-none">
            Student Living <br/> <span className="text-[#4CAF9A]">Elevated.</span>
          </h1>
          <div className="w-24 h-2 bg-[#D4AF6A] mx-auto mb-10"></div>
          <p className="text-[#2C5F6E] text-xl md:text-2xl font-bold max-w-2xl mx-auto mb-12 leading-relaxed">
            Premium accommodation in Dubai Production City designed for comfort and success.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/living" className="border-2 border-[#2C5F6E] text-[#2C5F6E] px-12 py-5 font-black uppercase tracking-widest hover:bg-[#2C5F6E] hover:text-white transition-all">
              See Rooms
            </Link>
            <Link to="/contact" className="border-2 border-[#2C5F6E] text-[#2C5F6E] px-12 py-5 font-black uppercase tracking-widest hover:bg-[#2C5F6E] hover:text-white transition-all">
              Book Now
            </Link>
          </div>
        </div>
      </section>

      {/* 2. WHY MAKAAN SECTION - THE FULL VERSION */}
      <section className="py-24 bg-[#F4F6F3]">
        <div className="max-w-[1100px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/3 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-black text-[#2C5F6E] uppercase leading-tight mb-6">
              Why <br/> <span className="text-[#D4AF6A]">Makaan?</span>
            </h2>
            {/* Restored: The descriptive text about the Makaan lifestyle */}
            <p className="text-slate-600 font-bold text-lg leading-relaxed hidden lg:block">
              We provide more than just a room. We provide a lifestyle built around the needs of modern students in Dubai.
            </p>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-12">
            {usps.map((usp, index) => (
              <div key={index} className="flex items-center gap-5 group">
                <div className="text-[#2C5F6E] bg-white w-14 h-14 flex items-center justify-center rounded-full shadow-sm group-hover:bg-[#D4AF6A] transition-all duration-300">
                  {usp.icon}
                </div>
                <h3 className="text-lg font-black text-[#2C5F6E] uppercase tracking-wide">
                  {usp.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Restored: Secondary link to Facilities below the icon grid */}
        <div className="mt-20 text-center">
          <Link to="/facilities" className="text-[#2C5F6E] font-black uppercase tracking-widest border-b-2 border-[#D4AF6A] pb-1 hover:text-[#4CAF9A] hover:border-[#4CAF9A] transition-all">
            Explore our world-class facilities →
          </Link>
        </div>
      </section>

      {/* 3. FINAL CTA - EXPERIENCE IT YOURSELF */}
      <section className="py-24 text-center bg-white border-t border-slate-100">
          <h2 className="text-4xl md:text-6xl font-black text-[#2C5F6E] uppercase tracking-tight mb-8">
            Experience it <span className="text-[#4CAF9A]">Yourself</span>
          </h2>
          <Link to="/living" className="bg-[#D4AF6A] text-[#2C5F6E] px-14 py-6 font-black uppercase tracking-[0.2em] hover:bg-[#2C5F6E] hover:text-white transition-all inline-block shadow-2xl">
            See Rooms
          </Link>
      </section>
    </div>
  );
}