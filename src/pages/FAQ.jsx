import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is included in my rent?",
      answer: (
        <>
          <p className="mb-2">Your rent payment will always include the following -</p>
          <ul className="list-disc pl-5 mb-4 space-y-1 font-bold text-slate-700">
            <li>Furnishings</li>
            <li>Utilities (electricity, water)</li>
            <li>High speed broadband and WIFI</li>
            <li>Room maintenance</li>
            <li>Daily drinking water</li>
            <li>Access to all building facilities</li>
            <li>Access to all common areas</li>
            <li>Access to all sporting facilities</li>
            <li>Shuttle transportation</li>
            <li>Laundry rooms</li>
            <li>24x7 security</li>
          </ul>
          <p>Furthermore, all rent payments are VAT inclusive.</p>
        </>
      )
    },
    {
      question: "What furnishings are included in my room?",
      answer: "All rooms are furnished with built-in wardrobes, beds, linens, study desks and storage, plus an in-room fridge."
    },
    {
      question: "How does a community space work?",
      answer: "All community spaces have 4 rooms with 2 students each. All rooms have an en-suite bathroom and a fridge, and all students within the community space have access to a shared kitchen."
    },
    {
      question: "Can I request a specific roommate?",
      answer: "Yes, you will have the option to list the roommate(s) you wish to live with during the application process. It is important that all roommates list each other and that all requests are mutual."
    },
    {
      question: "Do you have a roommate matching service?",
      answer: "Yes, if you will be occupying a shared room and do not have a pre-arranged roommate, you will have the option to fill out a short questionnaire during the application process. This questionnaire will inquire as to your study habits, social habits and hobbies to help us match you with residents that have similar preferences."
    },
    {
      question: "Do you organize social activities?",
      answer: "In addition to our community spaces, movie nights, game rooms, sporting and other common facilities where students can meet and interact with each other, we host multiple activities and social events for residents each month to help them get to know their neighbors, network, bond, and build friendships for life."
    },
    {
      question: "Is there any eligibility criteria?",
      answer: "You must be a full/part-time student or intern, 18 years or older to move in. You can book with us whether you have a conditional or unconditional offer, however, please be aware of our cancellation policy prior to booking should your place at university not be confirmed yet."
    },
    {
      question: "How does leasing work?",
      answer: "All leases are individual. An individual lease provides each resident with their own separate lease agreement, responsibility for only his/her rental instalments and other applicable charges. By signing an individual lease, you are only taking responsibility for your rental instalments and lease terms and will not be held liable for any delinquent amounts owed by your roommate(s)."
    },
    {
      question: "Are floors segregated by gender?",
      answer: "While all floors will not be segregated by gender, we will have certain designated floors where only students of a particular gender will be allowed to reside. If you prefer a gender segregated floor, please let us know and we will do our best to accommodate your preferences."
    },
    {
      question: "Is the staff available after hours?",
      answer: "Yes, there will be members of staff working 24/7 to tend to our students' needs. Security and reception will work around the clock as well as a 24-hour emergency maintenance call-out service."
    },
    {
      question: "What documents are required from me?",
      answer: (
        <>
          <p className="mb-2">If you choose to stay at Makaan, we will require the following -</p>
          <ul className="list-disc pl-5 space-y-1 font-bold text-slate-700">
            <li>Enrollment Letter from the university</li>
            <li>Student & Emirates ID</li>
            <li>Passport & Visa documents</li>
            <li>Parent/Guardian Details</li>
          </ul>
        </>
      )
    },
    {
      question: "Is there a house-keeping service?",
      answer: "Yes, there is a weekly house-keeping service provided to clean each of the rooms and all community spaces."
    },
    {
      question: "Where can I cook?",
      answer: "All community spaces have access to a fully equiped and modern shared kitchen and a dining area, where you will be able to cook and eat conveniently. In addition, all students have access to a fridge inside their rooms."
    },
    {
      question: "How do I reach my university?",
      answer: "Makaan operates hourly shuttle services to and from Dubai Knowledge Park and other prominent locations, ensuring seamless convenient transportation."
    },
    {
      question: "What happens if my roommate moves out?",
      answer: "All leases are individual, where each student signs a contract for their own independent space along with a common shared space. Therefore, if one of the roommates in a double room moves out, it has no effect whatsoever on the other."
    },
    {
      question: "Can I personalize my room?",
      answer: "Yes this is allowed, as long as you are able to return it to its original state upon check out and there is no damage caused (either temporary or permanent)."
    }
  ];

  return (
    <div className="bg-[#F4F6F3] min-h-screen pb-24">
      
      {/* 1. HERO SECTION */}
      <section className="relative py-24 md:py-32 text-center border-b border-slate-200 bg-[#2C5F6E]">
        <div className="relative z-20 max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4 leading-none">
            Frequently Asked <span className="text-[#D4AF6A]">Questions.</span>
          </h1>
          <p className="text-[#F4F6F3]/80 text-lg md:text-xl font-bold max-w-2xl mx-auto">
            Everything you need to know about living at Makaan.
          </p>
        </div>
      </section>

      {/* 2. ACCORDION FAQ SECTION */}
      <section className="max-w-4xl mx-auto px-6 pt-16">
        <div className="bg-white shadow-2xl rounded-sm border-t-8 border-[#4CAF9A] overflow-hidden">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border-b border-slate-100 last:border-0 ${openIndex === index ? 'bg-slate-50' : 'bg-white'}`}
            >
              <button
                className="w-full text-left px-6 py-6 flex justify-between items-center focus:outline-none hover:bg-slate-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg md:text-xl font-black text-[#2C5F6E] uppercase tracking-tight pr-8">
                  {faq.question}
                </h3>
                <ChevronDown 
                  size={24} 
                  className={`text-[#D4AF6A] flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : 'rotate-0'}`} 
                />
              </button>
              
              {/* Smooth dropdown reveal */}
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-8 text-slate-600 font-medium leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}