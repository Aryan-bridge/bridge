export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Services we will offer to students, universities and our partners
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Students Services */}
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">For Students</h3>
            <div className="space-y-2 text-gray-600">
              <p>• University Application Guidance</p>
              <p>• Visa Processing Support</p>
              <p>• IELTS Preparation</p>
              <p>• Scholarship Assistance</p>
              <p>• Pre-departure Orientation</p>
            </div>
          </div>

          {/* Universities Services */}
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">For Universities</h3>
            <div className="space-y-2 text-gray-600">
              <p>• Student Recruitment</p>
              <p>• Market Analysis</p>
              <p>• Partnership Development</p>
              <p>• Educational Fairs</p>
              <p>• Digital Marketing</p>
            </div>
          </div>

          {/* Partners Services */}
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">For Partners</h3>
            <div className="space-y-2 text-gray-600">
              <p>• Referral Programs</p>
              <p>• Training & Certification</p>
              <p>• Marketing Support</p>
              <p>• Commission Structure</p>
              <p>• Technology Platform</p>
            </div>
          </div>
        </div>

        {/* Advantages Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Advantages We Provide Over Others
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">24/7</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">24/7 Support</h4>
              <p className="text-gray-600 text-sm">Round-the-clock assistance for all your queries</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">High Success Rate</h4>
              <p className="text-gray-600 text-sm">95% visa approval rate with our guidance</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Fast Processing</h4>
              <p className="text-gray-600 text-sm">Quick application processing and responses</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Cost Effective</h4>
              <p className="text-gray-600 text-sm">Competitive pricing with maximum value</p>
            </div>
          </div>
        </div>

        {/* Collaborations Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Collaborations</h3>
          <p className="text-gray-600 mb-8">A small section to discover Trending Courses Worldwide</p>
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">CS</span>
                </div>
                <span className="text-gray-900 font-medium">Computer Science</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">MBA</span>
                </div>
                <span className="text-gray-900 font-medium">Business Admin</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">ENG</span>
                </div>
                <span className="text-gray-900 font-medium">Engineering</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">MED</span>
                </div>
                <span className="text-gray-900 font-medium">Medicine</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}