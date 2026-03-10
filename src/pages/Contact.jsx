import React, { useState } from 'react';
import { MapPin, Phone, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    university: '',
    gender: '',
    source: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Thank you! Your inquiry has been sent to the Makaan team.');
  };

  return (
    <div className="bg-[#F4F6F3] min-h-screen">
      
      {/* 1. UPDATED HERO SECTION WITH IMAGE OVERLAY */}
      <section className="relative py-32 md:py-48 text-center overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-white/80 z-10"></div>
        {/* Using a placeholder image - replace with your local file like /room1.jpeg */}
        <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1920" alt="Contact Background" className="absolute inset-0 w-full h-full object-cover" />
        
        <div className="relative z-20 max-w-5xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-black text-[#2C5F6E] uppercase tracking-tighter mb-4 leading-none">
            Contact <span className="text-[#4CAF9A]">Us.</span>
          </h1>
          <div className="w-24 h-2 bg-[#D4AF6A] mx-auto"></div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-20 px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* LEFT SIDE: OFFICIAL CONTACT INFO */}
          <div className="lg:w-1/3 space-y-12">
            <div>
              <h2 className="text-3xl font-black text-[#2C5F6E] uppercase mb-6 tracking-tight">Get in Touch</h2>
              {/* UPDATED TEXT PARAGRAPH */}
              <p className="text-slate-600 font-medium mb-8">
                Moving to a new city is difficult. Let us make it easy.<br className="hidden md:block"/>
                Reach out to our team directly for next steps.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="bg-[#2C5F6E] text-white p-3 rounded-full shadow-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-black text-[#2C5F6E] uppercase text-sm tracking-widest mb-1">Address</h4>
                  <p className="text-slate-600 font-bold leading-snug">
                    Makaan Housing, Domus Indigo 5, <br/> Dubai Production City
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-[#2C5F6E] text-white p-3 rounded-full shadow-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-black text-[#2C5F6E] uppercase text-sm tracking-widest mb-1">Contact Number</h4>
                  <p className="text-slate-600 font-bold">+971 52 660 2999</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: DOCUMENTED INQUIRY FORM */}
          <div className="lg:w-2/3 bg-white p-8 md:p-12 shadow-2xl rounded-sm border-t-8 border-[#2C5F6E]">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* ROW 1: Names */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-black text-[#2C5F6E] uppercase tracking-widest">First Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="First Name"
                    className="bg-slate-50 border border-slate-200 p-4 focus:outline-none focus:border-[#4CAF9A] transition-all font-bold placeholder:text-slate-300"
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-black text-[#2C5F6E] uppercase tracking-widest">Last Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Last Name"
                    className="bg-slate-50 border border-slate-200 p-4 focus:outline-none focus:border-[#4CAF9A] transition-all font-bold placeholder:text-slate-300"
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  />
                </div>
              </div>

              {/* ROW 2: Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-black text-[#2C5F6E] uppercase tracking-widest">Email Address</label>
                  <input 
                    required
                    type="email" 
                    placeholder="Email Address"
                    className="bg-slate-50 border border-slate-200 p-4 focus:outline-none focus:border-[#4CAF9A] transition-all font-bold placeholder:text-slate-300"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-black text-[#2C5F6E] uppercase tracking-widest">Contact Number</label>
                  <input 
                    required
                    type="tel" 
                    placeholder="Contact Number"
                    className="bg-slate-50 border border-slate-200 p-4 focus:outline-none focus:border-[#4CAF9A] transition-all font-bold placeholder:text-slate-300"
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              {/* ROW 3: NEW FIELDS - University & Gender */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-black text-[#2C5F6E] uppercase tracking-widest">University</label>
                  <div className="relative">
                    <select 
                      required
                      className="w-full bg-slate-50 border border-slate-200 p-4 focus:outline-none focus:border-[#4CAF9A] transition-all font-bold appearance-none cursor-pointer"
                      onChange={(e) => setFormData({...formData, university: e.target.value})}
                    >
                      <option value="">Please Select</option>
                      <option value="Heriot-Watt University Dubai">Heriot-Watt University Dubai</option>
                      <option value="Middlesex University Dubai">Middlesex University Dubai</option>
                      <option value="University of Wollongong Dubai">University of Wollongong Dubai</option>
                      <option value="American University of Dubai">American University of Dubai</option>
                      <option value="De Montfort University Dubai">De Montfort University Dubai</option>
                      <option value="Murdoch University Dubai">Murdoch University Dubai</option>
                      <option value="Symbiosis International University">Symbiosis International University</option>
                      <option value="Hult International Business School">Hult International Business School</option>
                      <option value="Canadian University Dubai">Canadian University Dubai</option>
                      <option value="Other">Other</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#2C5F6E] text-xs">▼</div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-black text-[#2C5F6E] uppercase tracking-widest">Gender</label>
                  <div className="relative">
                    <select 
                      required
                      className="w-full bg-slate-50 border border-slate-200 p-4 focus:outline-none focus:border-[#4CAF9A] transition-all font-bold appearance-none cursor-pointer"
                      onChange={(e) => setFormData({...formData, gender: e.target.value})}
                    >
                      <option value="">Please Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#2C5F6E] text-xs">▼</div>
                  </div>
                </div>
              </div>

              {/* ROW 4: Source (UPDATED OPTIONS) */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-black text-[#2C5F6E] uppercase tracking-widest">How did you hear about us?</label>
                <div className="relative">
                  <select 
                    required
                    className="w-full bg-slate-50 border border-slate-200 p-4 focus:outline-none focus:border-[#4CAF9A] transition-all font-bold appearance-none cursor-pointer"
                    onChange={(e) => setFormData({...formData, source: e.target.value})}
                  >
                    <option value="">Please Select</option>
                    <option value="University Reference">University Reference</option>
                    <option value="Family/Friends">Family/Friends</option>
                    <option value="Google Search">Google Search</option>
                    <option value="Instagram">Instagram</option>
                    <option value="TikTok">TikTok</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#2C5F6E] text-xs">▼</div>
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full bg-[#2C5F6E] text-white py-6 font-black uppercase tracking-[0.3em] hover:bg-[#D4AF6A] hover:text-[#2C5F6E] transition-all shadow-xl flex items-center justify-center gap-4 group"
              >
                Send Inquiry <Send size={20} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}