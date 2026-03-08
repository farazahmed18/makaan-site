import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Bed, Bath, Box, Shirt, Wifi, Droplets, Sparkles, UtensilsCrossed, Maximize } from 'lucide-react';

export default function Living() {
  const rooms = [
    {
      type: "Standard Sharing",
      price: "2,700",
      image: "/room1.jpeg",
      features: [
        { label: "Study Desk", icon: <Monitor size={28} strokeWidth={1.5} /> },
        { label: "Single Bed", icon: <Bed size={28} strokeWidth={1.5} /> },
        { label: "En-suite Bath", icon: <Bath size={28} strokeWidth={1.5} /> },
        { label: "In-room Fridge", icon: <Box size={28} strokeWidth={1.5} /> },
        { label: "Wardrobe", icon: <Shirt size={28} strokeWidth={1.5} /> },
        { label: "High Speed Wifi", icon: <Wifi size={28} strokeWidth={1.5} /> },
        { label: "Daily Water", icon: <Droplets size={28} strokeWidth={1.5} /> },
        { label: "Cleaning", icon: <Sparkles size={28} strokeWidth={1.5} /> },
        { label: "Shared Kitchen", icon: <UtensilsCrossed size={28} strokeWidth={1.5} /> }
      ]
    },
    {
      type: "Premium Sharing",
      price: "3,650",
      image: "/room2.jpeg",
      features: [
        { label: "Bigger Area", icon: <Maximize size={28} strokeWidth={1.5} /> },
        { label: "Study Desk", icon: <Monitor size={28} strokeWidth={1.5} /> },
        { label: "Single Bed", icon: <Bed size={28} strokeWidth={1.5} /> },
        { label: "En-suite Bath", icon: <Bath size={28} strokeWidth={1.5} /> },
        { label: "In-room Fridge", icon: <Box size={28} strokeWidth={1.5} /> },
        { label: "Wardrobe", icon: <Shirt size={28} strokeWidth={1.5} /> },
        { label: "High Speed Wifi", icon: <Wifi size={28} strokeWidth={1.5} /> },
        { label: "Daily Water", icon: <Droplets size={28} strokeWidth={1.5} /> },
        { label: "Cleaning", icon: <Sparkles size={28} strokeWidth={1.5} /> },
        { label: "Shared Kitchen", icon: <UtensilsCrossed size={28} strokeWidth={1.5} /> }
      ]
    }
  ];

  return (
    <div className="bg-[#F4F6F3] min-h-screen">
      {/* RESTORED TEAL/GOLD HEADER */}
      <section className="py-20 text-center bg-white border-b border-slate-100">
        <h1 className="text-5xl md:text-7xl font-black text-[#2C5F6E] uppercase tracking-tighter mb-4">
          Student <span className="text-[#4CAF9A]">Living</span>
        </h1>
        <div className="w-24 h-2 bg-[#D4AF6A] mx-auto"></div>
      </section>

      {/* RESTORED ROOM CARDS WITH NEW ICONS */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        {rooms.map((room, index) => (
          <div key={index} className="flex flex-col lg:flex-row bg-white shadow-2xl mb-20 overflow-hidden rounded-sm">
            {/* Image Side (Left) */}
            <div className="lg:w-1/2 h-[500px] lg:h-auto relative">
              <img src={room.image} alt={room.type} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute top-6 left-6 bg-[#2C5F6E] text-white px-6 py-2 font-black uppercase tracking-widest text-sm shadow-xl">
                AED {room.price} / Month
              </div>
            </div>

            {/* Restored Details Side (Right) */}
            <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center">
              <h2 className="text-4xl font-black text-[#2C5F6E] uppercase mb-8 border-b-4 border-[#4CAF9A] inline-block self-start pb-2">
                {room.type}
              </h2>
              
              {/* The new Emoji/Icon grid inside the old layout */}
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-10 gap-x-4 mb-12">
                {room.features.map((feature, i) => (
                  <div key={i} className="flex flex-col items-center text-center">
                    <div className="text-[#2C5F6E] mb-2">
                      {feature.icon}
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-tighter text-slate-500 leading-none">
                      {feature.label}
                    </span>
                  </div>
                ))}
              </div>

              <Link 
                to="/contact" 
                className="bg-[#2C5F6E] text-white text-center py-6 font-black uppercase tracking-[0.25em] hover:bg-[#D4AF6A] hover:text-[#2C5F6E] transition-all shadow-lg text-lg"
              >
                Enquire Now
              </Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}