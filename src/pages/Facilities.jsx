import React from 'react';
import { Link } from 'react-router-dom';

export default function Facilities() {
  const facilities = [
    {
      title: "Swimming Pool",
      desc: "Relax poolside, get a tan, hang out with friends or get some laps in at our swimming pool. Residents can take advantage of a beautiful rooftop swimming pool with lounge chairs and lifeguards on duty to ensure carefree leisure.",
      image: "/swimming-pool.jpg",
    },
    {
      title: "Fitness and Health",
      desc: "Access our state-of-the-art gym with equipment to facilitate various types of experience. In addition, all students can make use of our outdoor crossfit, swimming pool and various sporting facilities.",
      image: "/fitness.jpg",
    },
    {
      title: "Cricket Nets",
      desc: "Catch a game of cricket with your friends at our on-site cricket nets whenever you desire.",
      image: "/cricket.jpg",
    },
    {
      title: "Game Rooms",
      desc: "Table Tennis, Pool, Foosball — we've got it all. Head down to our Game Room and unwind after a long day of classes.",
      image: "/game-rooms.jpg",
    },
    {
      title: "Football Courts",
      desc: "Channel your inner Ronaldo and put your skills on display at our on-site football courts.",
      image: "/football.jpg",
    },
    {
      title: "The Hub",
      desc: "The social aspect of our community is paramount to Makaan. At The Hub, students can catch movie-nights, watch Premier League or other sporting games, play chess or even just hang out and mingle with their friends.",
      image: "/the-hub.jpg",
    },
    {
      title: "Basketball Courts",
      desc: "Challenge your friends to a pick-up basketball game at our on-site basketball courts and show them who's boss.",
      image: "/basketball.jpg",
    },
    {
      title: "Recreational Terrace",
      desc: "Makaan is a hub for young individuals to socialise and encounter unique experiences. Our Recreational Terrace is designed as a chill-out zone, meant to encourage mingling between students within a relaxed and stress-free environment.",
      image: "/terrace.jpg",
    },
    {
      title: "Student Lounge",
      desc: "At our Lounge, you will get a chance to build life-long friendships by meeting other like-minded, young people who will expose you to new cultures and different walks of life.",
      image: "/lounge.jpg",
    },
    {
      title: "Shuttle Services",
      desc: "Makaan operates hourly shuttle services to and from Dubai Knowledge Park and other prominent locations, ensuring seamless and convenient transportation for all students.",
      image: "/Bus.jpg", 
    },
    {
      title: "24x7 Security",
      desc: "With 24x7 security, we provide a secure environment that ensures our students and their guardians have peace of mind at all times.",
      image: "Security.jpg", 
    },
    {
      title: "Laundry Rooms",
      desc: "Convenience is key at Makaan. Laundry rooms are available on-site, with washers, dryers and ironing facilities that students can make use of whenever they desire.",
      image: "/laundry.jpg",
    },
    {
      title: "Shared Kitchen",
      desc: "With a shared kitchen and dining area in every community space, cooking, prepping and storing meals has never been easier.",
      image: "/SharedKitchen1.jpg",
    },
    {
      // NEW 14th ITEM - Perfectly balances the grid!
      title: "Keycard Access",
      desc: "Keycard access ensures only authorized students can enter specific rooms and floors, adding an extra layer of security. This controlled entry system helps create a safer and more secure living environment for everyone at Makaan.",
      image: "keycard.jpg",
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

      {/* 2. STRICT 2-COLOR CHECKERBOARD GRID (Mobile Stacking Fixed) */}
      <section className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
          {facilities.map((item, index) => {
            
            // Checkerboard image/text order logic
            const isImageFirst = Math.floor(index / 2) % 2 !== 0;

            // Logic to center the very last item if the total count is odd
            // (Note: Since we have 14 items now, this will naturally stay false, leaving a perfect grid!)
            const isCenteredLastItem = (index === facilities.length - 1) && (facilities.length % 2 !== 0);

            // STRICT 2-COLOR LOGIC
            let bgClass = "bg-[#2C5F6E]"; 
            let textClass = "text-white/90";
            let titleClass = "text-white";
            let underlineClass = "border-[#D4AF6A]"; 

            if (index % 2 !== 0) {
              // Alternating: Dark Slate
              bgClass = "bg-slate-900";
              textClass = "text-slate-300";
              titleClass = "text-white";
              underlineClass = "border-[#4CAF9A]";
            }

            return (
              // THE WRAPPER: Takes up 2 columns out of 4 on Desktop, 1 on Mobile
              <div 
                key={index} 
                className={`grid grid-cols-1 md:grid-cols-2 col-span-1 md:col-span-2 lg:col-span-2 w-full ${isCenteredLastItem ? 'lg:col-start-2' : ''}`}
              >
                {/* IMAGE BLOCK: Forced to order-1 (Top) on Mobile, dynamic order on Desktop */}
                <div className={`relative h-full w-full min-h-[350px] order-1 ${isImageFirst ? 'md:order-1' : 'md:order-2'}`}>
                  <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />
                </div>

                {/* TEXT BLOCK: Forced to order-2 (Bottom) on Mobile, dynamic order on Desktop */}
                <div className={`p-10 md:p-12 xl:p-16 flex flex-col justify-center h-full w-full ${bgClass} order-2 ${isImageFirst ? 'md:order-2' : 'md:order-1'}`}>
                  <h3 className={`text-xl md:text-2xl font-black uppercase tracking-wider mb-6 border-b-[3px] inline-block self-start pb-2 ${titleClass} ${underlineClass}`}>
                    {item.title}
                  </h3>
                  <p className={`text-sm md:text-base font-medium leading-relaxed ${textClass}`}>
                    {item.desc}
                  </p>
                </div>
              </div>
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