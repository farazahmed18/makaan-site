import React from 'react';
import { Link } from 'react-router-dom';

export default function Facilities() {
  const facilities = [
    {
      title: "Sports Facilities",
      desc: "Stay active and competitive with our multi-purpose sports areas. Whether it's a quick pickup game with friends or a weekend tournament, our facilities are designed to keep you moving and engaged.",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "Fitness & Health",
      desc: "Achieve your personal best in our fully equipped, state-of-the-art gym. Featuring top-tier cardio machines, free weights, and dedicated stretching zones to support your physical and mental well-being.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "Swimming Pools",
      desc: "Cool off from the heat or get some laps in before class. Our temperature-controlled, resort-style swimming pools offer the perfect oasis for relaxation and leisure right at your doorstep.",
      image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "Game Rooms",
      desc: "Unwind after a long day of lectures in our vibrant game rooms. Challenge your neighbors to a round of billiards, foosball, or table tennis in a space built for connection and friendly competition.",
      image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "Movie & Game Nights",
      desc: "Immerse yourself in our cinematic entertainment lounges. With plush seating and large screens, it's the ultimate spot for community movie marathons, gaming tournaments, and watching live sports.",
      image: "https://images.unsplash.com/photo-1585647347384-2593bc35786b?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "Recreational Terrace",
      desc: "Take a breather on our landscaped outdoor terraces. Enjoy stunning views, comfortable lounge seating, and a peaceful environment perfect for quiet study sessions or socializing under the stars.",
      image: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "Shuttle Services",
      desc: "Never worry about the commute again. We provide safe, reliable, and complimentary shuttle buses running on a regular schedule to key university campuses and major transit hubs across the city.",
      image: "/Bus.jpg",
    },
    {
      // NEW 8TH ITEM TO FILL THE GRID
      title: "Safety & Security",
      desc: "Your peace of mind is our top priority. Makaan features round-the-clock security personnel, comprehensive CCTV coverage, and secure key-card access to all residential areas and facilities.",
      // Premium security/lobby style image
      image: "/Security.jpg",
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-32 md:py-48 text-center overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-white/80 z-10"></div>
        <img src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&q=80&w=1920" alt="Facilities Background" className="absolute inset-0 w-full h-full object-cover" />
        
        <div className="relative z-20 max-w-5xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-black text-[#2C5F6E] uppercase tracking-tighter mb-4 leading-none">
            Life at <br/> <span className="text-[#4CAF9A]">Makaan</span>
          </h1>
          <div className="w-24 h-2 bg-[#D4AF6A] mx-auto mb-8"></div>
          <p className="text-[#2C5F6E] text-lg md:text-xl max-w-2xl mx-auto font-bold px-6 leading-relaxed">
            Everything you need for a relaxed student environment, from fitness to entertainment.
          </p>
        </div>
      </section>

      {/* 2. THE MYRIAD STYLE 4-COLUMN CHECKERBOARD GRID */}
      <section className="w-full">
        {/* Removed the max-w constraints so it stretches edge to edge again */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
          {facilities.map((item, index) => {
            
            // LOGIC FOR THE CHECKERBOARD PATTERN
            const isImageFirst = Math.floor(index / 2) % 2 !== 0;

            // LOGIC FOR THE COLORED BLOCKS 
            let bgClass = "bg-white";
            let textClass = "text-slate-700";
            let titleClass = "text-[#2C5F6E]";
            let underlineClass = "border-[#D4AF6A]"; 

            if (index === 1 || index === 5) {
              bgClass = "bg-[#2C5F6E]";
              textClass = "text-white/90";
              titleClass = "text-white";
              underlineClass = "border-white";
            }
            else if (index === 2 || index === 6) {
              bgClass = "bg-slate-900";
              textClass = "text-slate-300";
              titleClass = "text-white";
              underlineClass = "border-[#4CAF9A]"; 
            }

            // TEXT BLOCK COMPONENT (Left-aligned Myriad style restored)
            const textBlock = (
              <div className={`p-10 md:p-12 xl:p-16 flex flex-col justify-center aspect-square ${bgClass}`}>
                <h3 className={`text-xl md:text-2xl font-black uppercase tracking-wider mb-6 border-b-[3px] inline-block self-start pb-2 ${titleClass} ${underlineClass}`}>
                  {item.title}
                </h3>
                <p className={`text-sm md:text-base font-medium leading-relaxed ${textClass}`}>
                  {item.desc}
                </p>
              </div>
            );

            // IMAGE BLOCK COMPONENT
            const imageBlock = (
              <div className="relative aspect-square">
                <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />
              </div>
            );

            return (
              <React.Fragment key={index}>
                {isImageFirst ? (
                  <>
                    {imageBlock}
                    {textBlock}
                  </>
                ) : (
                  <>
                    {textBlock}
                    {imageBlock}
                  </>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </section>

      {/* 3. CTA SECTION */}
      <section className="py-24 text-center bg-[#F4F6F3]">
        <Link 
          to="/living" 
          className="bg-[#2C5F6E] text-white px-14 py-6 font-black uppercase tracking-[0.2em] hover:bg-[#D4AF6A] hover:text-[#2C5F6E] transition-all inline-block shadow-2xl"
        >
          See Rooms
        </Link>
      </section>
      
    </div>
  );
}