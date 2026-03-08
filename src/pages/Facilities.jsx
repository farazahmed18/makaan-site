import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Trophy, Waves, Gamepad2, Tv, Sun, Bus } from 'lucide-react';

export default function Facilities() {
  const facilities = [
    {
      title: "Sports Facilities",
      desc: "Dedicated spaces to stay active, play, and compete with fellow residents.",
      icon: <Trophy size={40} strokeWidth={1.5} />
    },
    {
      title: "Fitness & Health",
      desc: "State-of-the-art gym equipment designed for all your daily wellness needs.",
      icon: <Dumbbell size={40} strokeWidth={1.5} />
    },
    {
      title: "Swimming Pools",
      desc: "Resort-style pools perfect for a morning workout or weekend relaxation.",
      icon: <Waves size={40} strokeWidth={1.5} />
    },
    {
      title: "Game Rooms",
      desc: "Fully equipped recreation areas with billiards, foosball, and lounge seating.",
      icon: <Gamepad2 size={40} strokeWidth={1.5} />
    },
    {
      title: "Movie & Game Nights",
      desc: "Community-driven events hosted in our dedicated entertainment lounges.",
      icon: <Tv size={40} strokeWidth={1.5} />
    },
    {
      title: "Recreational Terrace",
      desc: "Outdoor lounge areas with stunning views for socializing and unwinding.",
      icon: <Sun size={40} strokeWidth={1.5} />
    },
    {
      title: "Shuttle Services",
      desc: "Convenient and free transportation to key university hubs and local spots.",
      icon: <Bus size={40} strokeWidth={1.5} />
    }
  ];

  return (
    <div className="bg-[#F4F6F3] min-h-screen">
      {/* HEADER SECTION */}
      <section className="py-20 text-center bg-white border-b border-slate-100">
        <h1 className="text-5xl md:text-7xl font-black text-[#2C5F6E] uppercase tracking-tighter mb-4 leading-none">
          Facilities <br/> <span className="text-[#4CAF9A]">Elevated.</span>
        </h1>
        <div className="w-24 h-2 bg-[#D4AF6A] mx-auto mb-6"></div>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium px-6">
          Everything you need for a balanced student life, from fitness to entertainment.
        </p>
      </section>

      {/* FACILITIES FLEX GRID - CENTERED */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <div className="flex flex-wrap justify-center gap-8">
          {facilities.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-10 shadow-lg border-t-[8px] border-[#2C5F6E] hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] max-w-sm"
            >
              <div className="text-[#2C5F6E] mb-6">
                {item.icon}
              </div>
              <h3 className="text-2xl font-black text-[#2C5F6E] mb-4 uppercase tracking-wide">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed font-medium italic">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* RESTORED: SEE ROOMS BUTTON */}
        <div className="mt-20 text-center">
          <Link 
            to="/living" 
            className="bg-[#2C5F6E] text-white px-16 py-6 font-black uppercase tracking-[0.25em] hover:bg-[#D4AF6A] hover:text-[#2C5F6E] transition-all inline-block shadow-2xl transform hover:scale-105"
          >
            See Rooms
          </Link>
        </div>
      </section>
    </div>
  );
}