import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const usps = [
    { 
      title: "Community-Driven", 
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=1000",
      desc: "At Makaan, you will join a community where young individuals from all walks of life can foster friendships and build meaningful connections for life."
    },
    { 
      title: "Live with your Friends", 
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000", // <-- New working HD image!
      desc: "Our community spaces can accommodate up to 8 people, so if you want to live with your friends just let us know and we will make it happen."
    },
    { 
      title: "In the Heart of Dubai", 
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=600&h=400", 
      desc: "With Makaan, you are only a 20 minute drive away from Dubai Knowledge Park, Dubai Marina, Palm Jumeirah and even the iconic Mall of the Emirates."
    },
    { 
      title: "Restaurants and Shopping", 
      image: "Restaurant.jpg", 
      desc: "Dubai's famous City Centre Me'aisem is only a 10 minute walk away. Enjoy restaurants, fast-food and cafes, plus over 53 fashion and lifestyle brands."
    },
    { 
      title: "Safety and Security", 
      image: "Security.jpg", 
      desc: "With 24x7 security, we provide a secure environment that ensures our students and their guardians have peace of mind at all times."
    },
    { 
      title: "Leisure and Entertainment", 
      image: "Entertainment.jpg", 
      desc: "With swimming pools, movie nights, game rooms and more, we strive to provide a fun and exciting environment for all our students."
    },
    { 
      title: "No Stress Living", 
      image: "Stressfree.jpg",
      desc: "We take care of all the essentials, including utilities, maintenance and cleaning, so you can focus on what matters - academics and friendships."
    },
    { 
      title: "Fully Furnished Spaces", 
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=600&h=400", 
      desc: "All rooms are fully furnished with all the fundamentals of any student living space, including utilities, daily water and in-room bathrooms."
    },
    { 
      title: "Sports and Fitness", 
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600&h=400", 
      desc: "We offer an array of sporting facilities on-site, including football courts, cricket nets and basketball courts, plus a modern and fully equipped gym."
    },
    { 
      title: "Free Transportation", 
      image: "/Bus.jpg", 
      desc: "Makaan operates hourly shuttle services to and from Dubai Knowledge Park and other prominent locations, ensuring seamless convenient transportation."
    }
  ];

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative py-32 md:py-48 text-center overflow-hidden">
        {/* Replaced ugly frosted blocks with an elegant, seamless gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/50 to-[#F4F6F3] z-10"></div>
        
        <img src="https://images.unsplash.com/photo-1526495124232-a04e1849168c?auto=format&fit=crop&q=80&w=2000" alt="Dubai Skyline" className="absolute inset-0 w-full h-full object-cover" />
        
        <div className="relative z-20 max-w-5xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-black text-[#2C5F6E] uppercase tracking-tighter mb-4 leading-none">
            Student Living <br/> <span className="text-[#4CAF9A]">Elevated.</span>
          </h1>
          <div className="w-24 h-2 bg-[#D4AF6A] mx-auto mb-10"></div>
          {/* Removed the cheap rounded box and made the text sleek and medium-weight */}
          <p className="text-[#2C5F6E] text-xl md:text-2xl font-medium max-w-2xl mx-auto mb-12 leading-relaxed">
            Premium housing for Dubai students designed for comfort and success
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            {/* Clean, premium Primary & Secondary button hierarchy */}
            <Link to="/living" className="bg-[#2C5F6E] text-white border-2 border-[#2C5F6E] px-12 py-5 md:px-14 md:py-6 text-sm md:text-base font-black uppercase tracking-[0.2em] hover:bg-transparent hover:text-[#2C5F6E] transition-all shadow-xl">
              See Rooms
            </Link>
            <Link to="/contact" className="border-2 border-[#2C5F6E] text-[#2C5F6E] px-12 py-5 md:px-14 md:py-6 text-sm md:text-base font-black uppercase tracking-[0.2em] hover:bg-[#2C5F6E] hover:text-white transition-all shadow-xl bg-white/30 backdrop-blur-sm">
              Book Now
            </Link>
          </div>
        </div>
      </section>

      {/* 2. WHY US SECTION */}
      <section className="bg-white border-t border-gray-200">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

          <div className="col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-2 p-10 md:p-16 lg:p-24 flex flex-col justify-center bg-white">
            <h2 className="text-4xl md:text-6xl font-black text-[#2C5F6E] uppercase leading-tight mb-6 md:mb-8">
              Why <br className="hidden md:block"/>
              {/* Added mt-2 for a little breathing room on mobile if it wraps, but hidden md:block keeps it on one line */}
              <span className="text-[#2C5F6E] border-b-[6px] border-[#D4AF6A] pb-2 inline-block md:mt-0"> Us?</span>
            </h2>
            <p className="text-slate-800 font-medium text-lg md:text-xl leading-relaxed">
              At Makaan, we know that moving to a new place can feel overwhelming. That's why we've designed a space where comfort, connection, and opportunity come together. More than just student accommodation, Makaan is a vibrant community where you can grow, build friendships, and feel truly at home while pursuing your ambitions.
            </p>
          </div>

          {usps.map((usp, index) => {
            let gridClasses = "";

            switch(index) {
              case 0: gridClasses = "col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-2 min-h-[400px] lg:min-h-full"; break;
              case 1: gridClasses = "col-span-1 md:col-span-2 lg:col-span-2 min-h-[350px]"; break;
              case 2: gridClasses = "col-span-1 min-h-[350px]"; break;
              case 3: gridClasses = "col-span-1 min-h-[350px]"; break;
              case 4: gridClasses = "col-span-1 md:col-span-2 lg:col-span-2 min-h-[350px]"; break;
              case 5: gridClasses = "col-span-1 md:col-span-2 lg:col-span-2 min-h-[350px]"; break;
              case 6: gridClasses = "col-span-1 min-h-[350px]"; break;
              case 7: gridClasses = "col-span-1 min-h-[350px]"; break;
              case 8: gridClasses = "col-span-1 md:col-span-2 lg:col-span-2 min-h-[350px]"; break;
              case 9: gridClasses = "col-span-1 md:col-span-2 lg:col-span-4 min-h-[400px]"; break;
              default: gridClasses = "col-span-1 min-h-[350px]";
            }

            return (
              <div 
                key={index} 
                tabIndex="0" 
                className={`relative group overflow-hidden cursor-pointer focus:outline-none ${gridClasses}`}
              >
                <img src={usp.image} alt={usp.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-focus:scale-105" />
                <div className="absolute inset-0 bg-black/10 z-10"></div>
                
                <div className="absolute inset-0 z-20 flex items-end p-8 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                  <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-wider">
                    {usp.title}
                  </h3>
                </div>

                <div className="absolute inset-0 bg-[#2C5F6E]/95 z-30 p-8 flex flex-col justify-center text-left transform translate-y-full group-hover:translate-y-0 group-focus:translate-y-0 group-active:translate-y-0 transition-transform duration-500 ease-out">
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