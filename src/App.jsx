import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

// Import the 4 pages
import Home from './pages/Home';
import Living from './pages/Living';
import Facilities from './pages/Facilities';
import Contact from './pages/Contact';

// ScrollToTop component ensures every new page loads at the top
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      {/* Main background set to Off-White/Warm White */}
      <div className="font-sans antialiased text-slate-900 bg-[#F4F6F3] min-h-screen flex flex-col relative overflow-x-hidden">
        
        {/* Premium Navbar */}
        <nav className="fixed w-full bg-[#F4F6F3] z-50 border-b-4 border-[#2C5F6E] shadow-sm">
          <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
            
            {/* Logo Section */}
            <Link to="/" className="flex items-center gap-2 h-full group overflow-visible">
              <img 
                src="/makaan-brandmark-removebg-preview.png" 
                alt="Makaan Icon" 
                className="h-16 md:h-28 w-auto object-contain transition-transform duration-300 group-hover:scale-110 md:scale-[1.2] origin-left md:origin-center" 
              />
              <img 
                src="/makaan-wordmark.png" 
                alt="Makaan Wordmark" 
                className="h-16 md:h-28 w-auto object-contain md:scale-[1.2] origin-left md:origin-center" 
              />
            </Link>
            
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8 font-black text-[#2C5F6E] text-[11px] uppercase tracking-[0.15em]">
              <Link to="/" className="hover:text-[#4CAF9A] transition-colors py-8 border-b-4 border-transparent hover:border-[#4CAF9A]">Home</Link>
              <Link to="/living" className="hover:text-[#4CAF9A] transition-colors py-8 border-b-4 border-transparent hover:border-[#4CAF9A]">Living</Link>
              <Link to="/facilities" className="hover:text-[#4CAF9A] transition-colors py-8 border-b-4 border-transparent hover:border-[#4CAF9A]">Facilities</Link>
              <Link to="/contact" className="hover:text-[#4CAF9A] transition-colors py-8 border-b-4 border-transparent hover:border-[#4CAF9A]">Contact Us</Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button 
              className="md:hidden text-[#2C5F6E] p-2 hover:bg-slate-200 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-20 left-0 w-full bg-[#F4F6F3] border-b-4 border-[#2C5F6E] flex flex-col items-center py-6 shadow-2xl gap-4 font-black text-[#2C5F6E] text-sm uppercase tracking-widest">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#4CAF9A] transition-colors w-full text-center py-4">Home</Link>
              <Link to="/living" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#4CAF9A] transition-colors w-full text-center py-4">Living</Link>
              <Link to="/facilities" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#4CAF9A] transition-colors w-full text-center py-4">Facilities</Link>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#4CAF9A] transition-colors w-full text-center py-4">Contact Us</Link>
            </div>
          )}
        </nav>

        {/* SITE-WIDE FLOATING CTA */}
        <Link 
          to="/contact" 
          className="fixed right-0 top-1/2 -translate-y-1/2 z-[60] bg-[#2C5F6E] text-white py-3 px-10 font-black uppercase tracking-[0.2em] text-xs md:text-sm hover:bg-[#D4AF6A] hover:text-[#2C5F6E] transition-all shadow-2xl rounded-l-md"
          style={{ writingMode: 'vertical-rl' }}
        >
          Get in touch
        </Link>

        {/* Page Content Area */}
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/living" element={<Living />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <footer className="bg-[#2C5F6E] text-white py-16 mt-auto">
          <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-4 gap-12 text-sm">
            
            {/* Contact Number & Address */}
            <div>
              <Link to="/">
                <img src="/makaan-brandmark.png" alt="Makaan" className="h-12 mb-6 object-contain rounded-md bg-white p-1 hover:opacity-90 transition-opacity" />
              </Link>
              <p className="text-[#F4F6F3]/70 mb-1">Makaan Housing</p>
              <p className="text-[#F4F6F3]/70 mb-1">Domus Indigo 5</p>
              <p className="text-[#F4F6F3]/70 mb-1">Dubai Production City,</p>
              <p className="text-[#F4F6F3]/70 mb-6">United Arab Emirates</p>
              <p className="text-[#F4F6F3]/70">+971 52 660 2999</p>
            </div>
            
            {/* Navigation Links */}
            <div className="flex flex-col gap-3 font-bold text-[#F4F6F3]/70">
              <h4 className="text-lg font-black uppercase mb-3 text-white">Explore</h4>
              <Link to="/" className="hover:text-[#D4AF6A] transition-colors w-fit">Why Us</Link>
              <Link to="/living" className="hover:text-[#D4AF6A] transition-colors w-fit">Living</Link>
              <Link to="/facilities" className="hover:text-[#D4AF6A] transition-colors w-fit">Facilities</Link>
            </div>
            
            {/* Support Links */}
            <div className="flex flex-col gap-3 font-bold text-[#F4F6F3]/70">
               <h4 className="text-lg font-black uppercase mb-3 text-white">Support</h4>
               <Link to="/contact" className="hover:text-[#D4AF6A] transition-colors w-fit">Frequently Asked Questions</Link>
               <Link to="/contact" className="hover:text-[#D4AF6A] transition-colors w-fit">Contact Us</Link>
            </div>
            
            <div className="flex flex-col justify-end">
               <p className="text-xs text-[#F4F6F3]/50 font-bold uppercase tracking-widest">Makaan © 2026</p>
            </div>
          </div>
        </footer>

      </div>
    </Router>
  );
}