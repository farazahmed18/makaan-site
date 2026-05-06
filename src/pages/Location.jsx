import React from 'react';

export default function Location() {
  return (
    <div className="bg-[#F4F6F3] min-h-screen pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* PAGE TITLE */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-[#2C5F6E] uppercase tracking-tighter mb-4">
            Our <span className="text-[#4CAF9A]">Location.</span>
          </h1>
          <div className="w-24 h-2 bg-[#D4AF6A] mx-auto"></div>
        </div>

        {/* 1. INTERACTIVE MAP SECTION - FIXED SINGLE PIN */}
        <div className="w-full h-[450px] bg-slate-200 rounded-sm overflow-hidden shadow-xl mb-12 border-4 border-white">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.949715368488!2d55.1944643!3d25.035780499999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6d0021dd22e3%3A0x6a2c0c6f4cf6dc03!2sDomus%20Indigo%205!5e0!3m2!1sen!2sae!4v1778059350189!5m2!1sen!2sae"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* 2. MAIN COMMUTE TILES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-10 rounded-sm shadow-lg border-t-8 border-[#2C5F6E] text-center flex flex-col justify-center">
            <h3 className="text-4xl font-black text-[#2C5F6E] mb-2">20 mins</h3>
            <p className="text-xl font-bold text-slate-700">From Dubai Knowledge Park</p>
            <p className="text-sm text-slate-500 mt-2 font-bold uppercase tracking-wider">(Free Shuttle Transport provided)</p>
          </div>
          <div className="bg-white p-10 rounded-sm shadow-lg border-t-8 border-[#2C5F6E] text-center flex flex-col justify-center">
            <h3 className="text-4xl font-black text-[#2C5F6E] mb-2">30 mins</h3>
            <p className="text-xl font-bold text-slate-700">From Dubai Academic City</p>
            <p className="text-sm text-slate-500 mt-2 font-bold uppercase tracking-wider">(Free Shuttle Transport provided)</p>
          </div>
        </div>

        {/* 3. SECONDARY COMMUTE TILES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { time: "25 mins", target: "From Dubai Mall" },
            { time: "20 mins", target: "From Mall of the Emirates" },
            { time: "5 mins", target: "From City Centre Me'aisem" },
            { time: "25 mins", target: "From Palm Jumeirah" },
            { time: "20 mins", target: "From Dubai Marina" },
            { time: "20 mins", target: "From JBR Beach" }
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-sm shadow-md border border-slate-100 text-center hover:-translate-y-1 transition-transform">
              <h3 className="text-2xl font-black text-[#4CAF9A] mb-1">{item.time}</h3>
              <p className="text-md font-bold text-slate-600">{item.target}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}