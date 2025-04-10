import React from 'react';
import Nav from '../../components/nav/nav';
import Footer from '../../components/footer/footer';

const AboutUs = () => {
  return (
    <div>
      <Nav />

      {/* Hero Section */}
      <div className="relative h-[400px] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: 'url(https://source.unsplash.com/1600x900/?hotel,travel)' }}>
        <div className="absolute inset-0 bg-[#212121]"></div>
        <h1 className="relative text-white  text-3xl lg:text-5xl font-bold text-center">
          Discover & Connect with HotelFinder
        </h1>
      </div>

      {/* Content Section */}
      <div className="py-16 px-6 bg-gray-100 flex flex-col items-center text-center">
        <div className="w-full lg:w-8/12 bg-white shadow-xl rounded-2xl p-10">
          <h2 className="text-3xl font-bold text-[#212121] mb-6">
            About <span className="text-blue-600">HotelFinder</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Welcome to <strong>HotelFinder</strong>, your ultimate platform for finding top-rated hotels around you.  
            We aim to provide seamless hotel discovery for travelers while ensuring hotels reach a wider audience.
          </p>

          {/* Business Model Section */}
          <div className="bg-blue-100 p-6 rounded-lg mb-8">
            <h3 className="text-2xl font-semibold text-blue-700 mb-3">
              How Our Business Works
            </h3>
            <p className="text-lg text-gray-700">
              We partner with hotels by offering them a listing space on our platform for a **small fee of just $10 per year**.  
              This allows hotels to gain more visibility, while **users enjoy free access** to browse and explore hotels near them.
            </p>
          </div>

          {/* Why Choose Us */}
          <h3 className="text-2xl font-semibold text-[#212121] mb-4">
            Why Choose Us?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 text-lg mb-8">
            <div className="flex items-center gap-3">
              <span className="text-blue-600 text-2xl">💰</span> 
              <p>Affordable for hotels – just <strong>$10 per year</strong>.</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-600 text-2xl">🔎</span> 
              <p>Completely free for users to search and explore.</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-red-600 text-2xl">📍</span> 
              <p>Quick and easy access to the nearest hotels.</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-yellow-600 text-2xl">✅</span> 
              <p>Reliable and up-to-date hotel information.</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gray-200 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-[#212121] mb-3">
              List Your Hotel Today!
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              If you own a hotel, take advantage of this **cost-effective** and **highly visible** platform.  
              Get listed for just <strong>$10 per year</strong> and reach thousands of travelers.
            </p>
            <a href="/contact" className="inline-block bg-blue-600 text-white text-lg font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Contact Us Now
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
