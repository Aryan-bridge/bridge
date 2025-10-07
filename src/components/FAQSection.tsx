'use client';

import { useState } from 'react';

const faqs = [
  {
    question: "What documents do I need for university application?",
    answer: "You'll need academic transcripts, English proficiency test scores (IELTS/TOEFL), statement of purpose, letters of recommendation, passport copy, and financial documents. Specific requirements may vary by university and program."
  },
  {
    question: "How long does the visa process take?",
    answer: "Visa processing times vary by country and type. Generally, student visas take 2-8 weeks to process. We recommend applying at least 3 months before your intended start date to allow sufficient time."
  },
  {
    question: "Do you help with scholarship applications?",
    answer: "Yes! We assist students in identifying and applying for various scholarships including merit-based, need-based, and country-specific scholarships. Our team will guide you through the entire application process."
  },
  {
    question: "What is included in IELTS preparation?",
    answer: "Our IELTS preparation includes comprehensive training for all four modules (Reading, Writing, Listening, Speaking), practice tests, personalized feedback, study materials, and flexible scheduling options."
  },
  {
    question: "Can you help with accommodation?",
    answer: "Absolutely! We provide guidance on various accommodation options including university dormitories, shared apartments, homestays, and private rentals. We help you find safe and affordable housing options."
  },
  {
    question: "What are your service charges?",
    answer: "Our service charges vary depending on the package and services you choose. We offer transparent pricing with no hidden fees. Contact us for a detailed quote based on your specific requirements."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-orange-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Get answers to common questions about our services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-orange-200 rounded-lg shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-orange-50 transition-colors"
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-orange-500 transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
            Contact Our Support Team
          </button>
        </div>
      </div>
    </section>
  );
}