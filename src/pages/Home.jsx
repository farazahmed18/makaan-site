import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const usps = [
    { 
      title: "Community-Driven", 
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600&h=400",
      desc: "Our community approach allows for organic growth, where you can make connections that last a lifetime."
    },
    { 
      title: "Affordable Student Housing", 
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=600&h=400",
      desc: "Premium living at a price point designed for students. Comfort doesn't have to be expensive."
    },
    { 
      title: "In the Heart of Dubai", 
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=600&h=400",
      desc: "Live close to key university hubs and local spots in the vibrant Dubai Production City."
    },
    { 
      title: "Safety and Security", 
      image: "/Security.jpg",
      desc: "Peace of mind is standard. We provide round-the-clock security and secure access for all residents."
    },
    { 
      title: "Leisure and Entertainment", 
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=600&h=400",
      desc: "Relax and unwind in our dedicated entertainment lounges with community-driven events."
    },
    { 
      title: "No Stress Living", 
      image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=600&h=400",
      desc: "We focus on the property so you can focus on your studies and personal growth."
    },
    { 
      title: "Furnished Accommodation", 
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=600&h=400",
      desc: "Move in immediately. Our rooms are fully equipped with modern, comfortable furniture and extra-long workstations."
    },
    { 
      title: "Sports and Fitness", 
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600&h=400",
      desc: "Stay active and compete with state-of-the-art gym equipment and sports facilities."
    },
    { 
      title: "Free Transportation", 
      image: "/Bus.jpg", // Using your local image temporarily!
      desc: "Convenient shuttle services to key university hubs and local spots are included."
    }
  ];

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative py-32 md:py-48 text-center overflow-hidden">
        <div className="absolute inset-0 bg-white/40 z-10"></div>
        <img src="/room1.jpeg" alt="Background" className="absolute inset-0 w-full h-full object-cover" />
        
        <div className="relative z-20 max-w-5xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-black text-[#2C5F6E] uppercase tracking-tighter mb-4 leading-none">
            Student Living <br/> <span className="text-[#4CAF9A]">Elevated.</span>
          </h1>
          <div className="w-24 h-2 bg-[#D4AF6A] mx-auto mb-10"></div>
          <p className="text-[#2C5F6E] text-xl md:text-2xl font-bold max-w-2xl mx-auto mb-12 leading-relaxed">
            Premium housing for Dubai students designed for comfort and success
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

      {/* 2. WHY US SECTION - MYRIAD MASONRY STYLE */}
      <section className="bg-white border-t border-gray-200">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

          {/* 1. WHY US Intro Box - Acts as Top-Left Grid Item (Spans 2x2) */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-2 p-10 md:p-16 lg:p-24 flex flex-col justify-center bg-white">
            <h2 className="text-4xl md:text-6xl font-black text-[#2C5F6E] uppercase leading-tight mb-8">
              Why <br/>
              <span className="text-[#2C5F6E] border-b-[6px] border-[#D4AF6A] pb-2 inline-block">Us?</span>
            </h2>
            <p className="text-slate-800 font-medium text-lg md:text-xl leading-relaxed">
              At Makaan, we know that moving to a new place can feel overwhelming. That's why we've designed a space where comfort, connection, and opportunity come together. More than just student accommodation, Makaan is a vibrant community where you can grow, build friendships, and feel truly at home while pursuing your ambitions.
            </p>
          </div>

          {/* 2. USP Grid Items with Varying Spans (ALL IMAGES NOW) */}
          {usps.map((usp, index) => {
            let gridClasses = "";

            switch(index) {
              case 0:
                gridClasses = "col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-2 min-h-[400px] lg:min-h-full"; // Top right giant image
                break;
              case 1:
                gridClasses = "col-span-1 md:col-span-2 lg:col-span-2 min-h-[350px]"; // Wide image below text
                break;
              case 2:
                gridClasses = "col-span-1 min-h-[350px]"; // Square
                break;
              case 3:
                gridClasses = "col-span-1 min-h-[350px]"; // Square
                break;
              case 4:
                gridClasses = "col-span-1 md:col-span-2 lg:col-span-2 min-h-[350px]"; // Wide
                break;
              case 5:
                gridClasses = "col-span-1 md:col-span-2 lg:col-span-2 min-h-[350px]"; // Wide
                break;
              case 6:
                gridClasses = "col-span-1 min-h-[350px]"; // Square
                break;
              case 7:
                gridClasses = "col-span-1 min-h-[350px]"; // Square
                break;
              case 8:
                gridClasses = "col-span-1 md:col-span-2 lg:col-span-2 min-h-[350px]"; // Wide
                break;
              default:
                gridClasses = "col-span-1 min-h-[350px]";
            }

            return (
              <div key={index} className={`relative group overflow-hidden ${gridClasses}`}>
                {/* Standard Image Block */}
                <img src={usp.image} alt={usp.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/10 z-10"></div>
                
                {/* Bottom-aligned title overlay */}
                <div className="absolute inset-0 z-20 flex items-end p-8 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                  <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-wider">
                    {usp.title}
                  </h3>
                </div>

                {/* Hover Reveal Panel */}
                <div className="absolute inset-0 bg-[#2C5F6E]/95 z-30 p-8 flex flex-col justify-center text-left transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="text-xl font-black text-white uppercase tracking-wider mb-4 border-b-2 border-[#D4AF6A] pb-2 inline-block self-start">
                    {usp.title}
                  </h3>
                  <p className="text-white text-base font-medium leading-relaxed">
                    {usp.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Explore Facilities Link */}
        <div className="py-20 text-center bg-white">
          <Link to="/facilities" className="text-xl text-[#2C5F6E] font-black uppercase tracking-widest border-b-2 border-[#D4AF6A] pb-1 hover:text-[#4CAF9A] hover:border-[#4CAF9A] transition-all">
            Explore our world-class facilities →
          </Link>
        </div>
      </section>

      {/* 3. FINAL CTA */}
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