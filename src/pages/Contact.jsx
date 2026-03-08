import React, { useState } from 'react';
import { MapPin, Phone, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    source: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Thank you! Your inquiry has been sent to the Makaan team.');
  };

  return (
    <div className="bg-[#F4F6F3] min-h-screen">
      {/* HEADER - Consistent with "Elevated" Branding */}
      <section className="py-20 text-center bg-white border-b border-slate-100">
        <h1 className="text-5xl md:text-7xl font-black text-[#2C5F6E] uppercase tracking-tighter mb-4 leading-none">
          Contact <span className="text-[#4CAF9A]">Us.</span>
        </h1>
        <div className="w-24 h-2 bg-[#D4AF6A] mx-auto"></div>
      </section>

      <section className="max-w-7xl mx-auto py-20 px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* LEFT SIDE: OFFICIAL CONTACT INFO */}
          <div className="lg:w-1/3 space-y-12">
            <div>
              <h2 className="text-3xl font-black text-[#2C5F6E] uppercase mb-6 tracking-tight">Get in Touch</h2>
              <p className="text-slate-600 font-medium mb-8">
                Ready to find your student home? Reach out to our team directly or visit our office in Production City.
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

              <div className="flex flex-col gap-2">
                <label className="text-xs font-black text-[#2C5F6E] uppercase tracking-widest">How did you hear about us?</label>
                <div className="relative">
                  <select 
                    required
                    className="w-full bg-slate-50 border border-slate-200 p-4 focus:outline-none focus:border-[#4CAF9A] transition-all font-bold appearance-none cursor-pointer"
                    onChange={(e) => setFormData({...formData, source: e.target.value})}
                  >
                    <option value="">Please Select</option>
                    <option value="social-media">Social Media</option>
                    <option value="university">University Hub</option>
                    <option value="friend">Friend / Referral</option>
                    <option value="search">Online Search</option>
                    <option value="other">Other</option>
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