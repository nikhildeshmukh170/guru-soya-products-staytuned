'use client';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-emerald-900 via-green-50 to-lime-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-green-300 to-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-lime-300 to-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-gradient-to-br from-emerald-300 to-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(34, 197, 94, 0.3); }
          50% { box-shadow: 0 0 40px rgba(34, 197, 94, 0.6); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-slide-in-left { animation: slideInLeft 0.8s ease-out forwards; }
        .animate-slide-in-right { animation: slideInRight 0.8s ease-out forwards; }
        .animate-bounce-gentle { animation: bounce-gentle 2s ease-in-out infinite; }
        .animate-glow { animation: glow 2s ease-in-out infinite; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
      `}</style>

      {/* Navbar */}
      <nav className="relative w-full bg-white/90 backdrop-blur-xl shadow-lg border-b border-green-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          {/* Left: Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <img
              src="/guru-logo.png" // Replace with your logo path
              alt="Guru Soya Products"
              className="h-14 w-auto"
            />
          </div>

          {/* Right: Menu */}
          <div className="hidden md:flex space-x-1">
            {['Home', 'About Us', 'Products', 'Contact Us'].map((item) => (
              <a
                key={item}
                href="#"
                className="px-4 py-2 rounded-lg text-gray-700 font-medium hover:bg-green-100 hover:text-green-700 transition-all duration-300 relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-emerald-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative flex-1 flex items-center justify-center px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-4xl w-full">
          {/* Main Card */}
          <div className="relative">
            {/* Gradient Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-emerald-500 to-lime-400 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
            
            {/* Main Content Card */}
            <div className="relative bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 sm:p-12 md:p-16 border border-white/50 hover:border-green-200 transition-all duration-500 animate-fade-in-up">
              
              {/* Badge */}
              <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-full animate-fade-in-up delay-100">
                <span className="text-sm font-bold text-green-700 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Coming Soon
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-gray-900 via-green-800 to-gray-900 bg-clip-text text-transparent leading-tight mb-6 animate-fade-in-up delay-200">
                Something <span className="text-green-600">Extraordinary</span> is Coming in 2026!
              </h1>

              {/* Description */}
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6 font-light animate-fade-in-up delay-300">
                At <span className="font-semibold text-green-700">Guru Soya Products</span>, we're crafting the perfect platform to bring you 
                <span className="font-bold text-transparent bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text"> premium quality soya products</span> that nourish your lifestyle.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed mb-8 font-light animate-fade-in-up delay-300">
                Our website is getting a complete makeover to deliver a <span className="font-semibold text-gray-800">fresh, modern, and seamless experience</span> you wont forget.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-10">
                {[
                  { icon: '🌱', title: 'Premium Products', desc: 'Finest soya-based offerings' },
                  { icon: '📊', title: 'Nutritional Info', desc: 'Detailed health insights' },
                  { icon: '⚡', title: 'Fast Performance', desc: 'Lightning-quick experience' },
                  { icon: '🎁', title: 'Exclusive Deals', desc: 'Special 2026 launches' }
                ].map((feature, idx) => (
                  <div
                    key={idx}
                    className="group p-4 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl hover:border-green-400 hover:shadow-lg transition-all duration-300 cursor-pointer animate-fade-in-up"
                    style={{ animationDelay: `${0.1 + idx * 0.1}s` }}
                  >
                    <div className="text-3xl mb-3 transform group-hover:scale-110 transition-transform duration-300 inline-block animate-bounce-gentle">{feature.icon}</div>
                    <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.desc}</p>
                  </div>
                ))}
              </div>

              {/* CTA Section */}
              <div className="mt-10 pt-8 border-t border-green-200 animate-fade-in-up delay-400">
                <p className="text-gray-700 font-medium mb-4">
                  Thank you for your patience. We&apos;re building something special.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-glow group relative overflow-hidden">
                    <span className="relative z-10">Notify Me</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                  <button className="flex-1 px-8 py-4 border-2 border-green-500 text-green-600 font-bold rounded-xl hover:bg-green-50 transition-all duration-300 transform hover:scale-105 group">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Quote */}
          <div className="text-center mt-12 animate-fade-in-up delay-400">
            <p className="text-lg md:text-xl text-gray-700 font-semibold">
              <span className="text-green-700 inline-block animate-bounce-gentle">Stay tuned! Big things are coming your way in 2026.</span>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative bg-black text-white py-12 border-t-2 border-green-700/50 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
                <img
              src="/guru-logo-footer.png" // Replace with your logo path
              alt="Guru Soya Products"
              className="h-24 w-auto"
            />
              <p className="text-gray-400 text-sm">Bringing premium soya products to your table with quality and care.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Quick Links</h3>
              <ul className="text-gray-400 text-sm space-y-1">
                <li><a href="#" className="hover:text-green-400 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-green-400 transition-colors">Terms</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3">Stay Connected</h3>
              <div className="flex gap-4">
                {[
                  { 
                    label: 'Facebook', 
                    href: 'https://www.facebook.com/gurusoyaproductsofficial/',
                    svg: <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  },
                  { 
                    label: 'LinkedIn', 
                    href: 'https://www.linkedin.com/company/guru-soya-products/',
                    svg: <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
                  },
                  { 
                    label: 'Instagram', 
                    href: 'https://www.instagram.com/gurusoyaproducts/',
                    svg: <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.07 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.756 0 8.331.012 7.052.07 2.696.278.278 2.579.07 7.052.012 8.331 0 8.756 0 12c0 3.244.011 3.668.07 4.948.207 4.474 2.582 6.886 7.052 7.094 1.28.058 1.704.07 4.948.07 3.245 0 3.668-.012 4.948-.07 4.47-.208 6.846-2.622 7.094-7.092.059-1.281.07-1.705.07-4.949 0-3.244-.011-3.668-.07-4.948-.149-4.402-2.627-6.887-7.094-7.094C15.668.012 15.244 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110-2.88 1.44 1.44 0 010 2.88z"/></svg>
                  }
                ].map((social) => (
                  <a 
                    key={social.label} 
                    href={social.href} 
                    title={social.label}
                    className="w-11 h-11 bg-gradient-to-br from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg text-white"
                  >
                    {social.svg}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-green-800/30 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>© 2025 Guru Soya Products. All rights reserved.</p>
            <p className="text-green-400 font-semibold">Made with care for you</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
