import React from 'react';
import { Link } from 'react-router-dom';
// Added new icons: Users (2 pax), Zap (Utilities), Wrench (Maintenance)
import { Monitor, Bed, Bath, Box, Shirt, Wifi, Droplets, Sparkles, UtensilsCrossed, Maximize, Dumbbell, Gamepad2, ShieldCheck, Bus, Users, Zap, Wrench } from 'lucide-react';

export default function Living() {
  const rooms = [
    {
      type: "Standard Sharing",
      description: "A shared room giving you the opportunity to meet new people, complete with ample storage and extra-long workstations.",
      price: "2,700",
      images: [
        "/SharedRoom1.jpg", 
        "/SharedRoom3.jpg",
        "SharedKitchen1.jpg"
      ],
      ctaSubtext: (
        <>
          <span className="block font-bold">Currently AED 2,700 / month per student (VAT inclusive)</span>
          <span className="block text-[#4CAF9A] mt-1">Limited Availability - Selling Fast</span>
        </>
      ),
      features: [
        // Added specific dimensions first and 2 pax second per spreadsheet instructions
        { label: "115 x 98 ft.", icon: <Maximize size={28} strokeWidth={1.5} /> },
        { label: "2 Pax", icon: <Users size={28} strokeWidth={1.5} /> },
        { label: "Study Desk", icon: <Monitor size={28} strokeWidth={1.5} /> },
        { label: "Single Bed", icon: <Bed size={28} strokeWidth={1.5} /> },
        { label: "En-suite Bath", icon: <Bath size={28} strokeWidth={1.5} /> },
        { label: "In-room Fridge", icon: <Box size={28} strokeWidth={1.5} /> },
        { label: "Wardrobe", icon: <Shirt size={28} strokeWidth={1.5} /> },
        { label: "High Speed Wifi", icon: <Wifi size={28} strokeWidth={1.5} /> },
        { label: "Daily Water", icon: <Droplets size={28} strokeWidth={1.5} /> },
        { label: "Cleaning", icon: <Sparkles size={28} strokeWidth={1.5} /> },
        { label: "Shared Kitchen", icon: <UtensilsCrossed size={28} strokeWidth={1.5} /> },
        // Added Utilities and Maintenance per spreadsheet instructions
        { label: "Utilities Included", icon: <Zap size={28} strokeWidth={1.5} /> },
        { label: "Maintenance Included", icon: <Wrench size={28} strokeWidth={1.5} /> }
      ]
    },
    {
      type: "Premium Sharing",
      description: "A cozy and large room designed to keep you comfortable and free from distractions for you to succeed.",
      price: "3,600", 
      images: [
        "/Room4.jpg", 
        "/Room5.jpg",
        "SharedKitchen1.jpg"
      ],
      ctaSubtext: (
        <>
          <span className="block font-bold">Currently AED 3,600 / month per student (VAT inclusive)</span>
        </>
      ),
      features: [
        // Updated dimensions to first and added 2 pax second
        { label: "136 x 128 ft.", icon: <Maximize size={28} strokeWidth={1.5} /> },
        { label: "2 Pax", icon: <Users size={28} strokeWidth={1.5} /> },
        { label: "Study Desk", icon: <Monitor size={28} strokeWidth={1.5} /> },
        { label: "Single Bed", icon: <Bed size={28} strokeWidth={1.5} /> },
        { label: "En-suite Bath", icon: <Bath size={28} strokeWidth={1.5} /> },
        { label: "In-room Fridge", icon: <Box size={28} strokeWidth={1.5} /> },
        { label: "Wardrobe", icon: <Shirt size={28} strokeWidth={1.5} /> },
        { label: "High Speed Wifi", icon: <Wifi size={28} strokeWidth={1.5} /> },
        { label: "Daily Water", icon: <Droplets size={28} strokeWidth={1.5} /> },
        { label: "Cleaning", icon: <Sparkles size={28} strokeWidth={1.5} /> },
        { label: "Shared Kitchen", icon: <UtensilsCrossed size={28} strokeWidth={1.5} /> },
        // Added Utilities and Maintenance per spreadsheet instructions
        { label: "Utilities Included", icon: <Zap size={28} strokeWidth={1.5} /> },
        { label: "Maintenance Included", icon: <Wrench size={28} strokeWidth={1.5} /> }
      ]
    }
  ];

  const facilitiesBanner = [
    { label: "High Speed Wifi", icon: <Wifi size={24} strokeWidth={1.5} /> },
    { label: "24/7 Security", icon: <ShieldCheck size={24} strokeWidth={1.5} /> },
    { label: "Sports & Fitness", icon: <Dumbbell size={24} strokeWidth={1.5} /> },
    { label: "Leisure & Gaming", icon: <Gamepad2 size={24} strokeWidth={1.5} /> },
    { label: "Free Transportation", icon: <Bus size={24} strokeWidth={1.5} /> },
    { label: "Regular Cleaning", icon: <Sparkles size={24} strokeWidth={1.5} /> },
    { label: "Shared Kitchens", icon: <UtensilsCrossed size={24} strokeWidth={1.5} /> },
  ];

  return (
    <div className="bg-[#F4F6F3] min-h-screen">
      
      {/* 1. UPDATED HERO SECTION WITH IMAGE OVERLAY */}
      <section className="relative py-32 md:py-48 text-center overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-white/75 z-10"></div>
        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" alt="Background" className="absolute inset-0 w-full h-full object-cover" />
        
        <div className="relative z-20 max-w-5xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-black text-[#2C5F6E] uppercase tracking-tighter mb-4">
            Student <span className="text-[#4CAF9A]">Living</span>
          </h1>
          <div className="w-24 h-2 bg-[#D4AF6A] mx-auto"></div>
        </div>
      </section>

      {/* 2. ROOM CARDS */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        {rooms.map((room, index) => (
          <div key={index} className="flex flex-col lg:flex-row bg-white shadow-2xl mb-20 overflow-hidden rounded-sm">
            
            {/* Image Carousel Side (Left) */}
            <div className="lg:w-1/2 h-[500px] lg:h-auto relative group">
              <div className="flex overflow-x-auto snap-x snap-mandatory h-full hide-scrollbar w-full">
                {room.images.map((img, idx) => (
                  <img key={idx} src={img} alt={`${room.type} view ${idx + 1}`} className="snap-center w-full h-full object-cover flex-shrink-0" />
                ))}
              </div>
              
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-5 py-2 font-black uppercase tracking-widest text-[10px] shadow-xl pointer-events-none rounded-full">
                Swipe to view more
              </div>

              <div className="absolute top-6 left-6 bg-[#2C5F6E] text-white px-6 py-2 font-black uppercase tracking-widest text-sm shadow-xl z-10">
                AED {room.price} / Month
              </div>
            </div>

            {/* Details Side (Right) */}
            <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center">
              <h2 className="text-4xl font-black text-[#2C5F6E] uppercase mb-4 border-b-4 border-[#4CAF9A] inline-block self-start pb-2">
                {room.type}
              </h2>
              
              <p className="text-slate-600 font-bold text-base leading-relaxed mb-8">
                {room.description}
              </p>
              
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

              <div className="mt-auto">
                <Link 
                  to="/contact" 
                  className="bg-[#2C5F6E] block w-full text-white text-center py-6 font-black uppercase tracking-[0.25em] hover:bg-[#D4AF6A] hover:text-[#2C5F6E] transition-all shadow-lg text-lg"
                >
                  Enquire Now
                </Link>
                
                {/* FIX: Allowed wrapping on mobile (whitespace-normal) but kept single line on desktop (md:whitespace-nowrap) */}
                <div className="mt-5 text-center text-[10px] md:text-xs uppercase tracking-wider text-slate-600 whitespace-normal md:whitespace-nowrap leading-relaxed">
                  {room.ctaSubtext}
                </div>
              </div>

            </div>
          </div>
        ))}
      </section>

      {/* 3. NEW ROLLING BANNER & CTA */}
      <section className="bg-white py-20 border-t border-slate-200 overflow-hidden">
        
        <div className="relative flex overflow-hidden bg-[#2C5F6E] py-8 mb-16 shadow-inner">
          <div className="animate-marquee whitespace-nowrap flex items-center">
            {[...facilitiesBanner, ...facilitiesBanner, ...facilitiesBanner].map((item, index) => (
              <div key={index} className="flex items-center text-white mx-8 md:mx-12">
                <span className="text-[#D4AF6A] mr-3">{item.icon}</span>
                <span className="font-black uppercase tracking-widest text-lg">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center px-6">
          {/* Added leading-loose for mobile spacing, and block md:inline-block so the underline formats correctly on mobile */}
          <Link to="/facilities" className="block md:inline-block text-lg md:text-xl text-[#2C5F6E] font-black uppercase tracking-widest border-b-2 border-[#D4AF6A] pb-2 hover:text-[#4CAF9A] hover:border-[#4CAF9A] transition-all leading-loose md:leading-normal">
            Explore Our World Class Facilities →
          </Link>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); } 
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
          min-width: 300%;
        }
      `}} />

    </div>
  );
}