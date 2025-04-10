import React from 'react';
import Nav from '../../components/nav/nav';
import Footer from '../../components/footer/footer';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
const ContactUs = () => {
  return (
    <div>
      <Nav />

      {/* Hero Section */}
      <div className="relative h-[350px] bg-cover bg-center flex items-center justify-center" 
        style={{ backgroundImage: 'url(https://source.unsplash.com/1600x900/?contact,customer-service)' }}>
        <div className="absolute inset-0 bg-[#212121]"></div>
        <h1 className="relative text-white text-4xl lg:text-5xl font-bold text-center">
          Get in Touch With Us
        </h1>
      </div>

      {/* Contact Form Section */}
      <div className="py-16 px-6 bg-gray-100 flex flex-col items-center text-center">
        <div className="w-full lg:w-8/12 bg-white shadow-xl rounded-2xl p-10">
          <h2 className="text-3xl font-bold text-[#212121] mb-6">
            Contact <span className="text-[#212121]">Nearest Hotel</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Have a question, feedback, or want to list your hotel?  
            Fill out the form below, and we'll get back to you as soon as possible.
          </p>

          {/* Contact Form */}
          <form className="space-y-6">
            <div className="flex flex-col text-left">
              <label className="text-lg font-semibold text-gray-700 mb-2">Your Name</label>
              <input type="text" className="p-3 border border-gray-300 rounded-lg w-full" placeholder="Enter your name" required />
            </div>

            <div className="flex flex-col text-left">
              <label className="text-lg font-semibold text-gray-700 mb-2">Email Address</label>
              <input type="email" className="p-3 border border-gray-300 rounded-lg w-full" placeholder="Enter your email" required />
            </div>

            <div className="flex flex-col text-left">
              <label className="text-lg font-semibold text-gray-700 mb-2">Message</label>
              <textarea rows="5" className="p-3 border border-gray-300 rounded-lg w-full" placeholder="Write your message..." required></textarea>
            </div>

            <button type="submit" className="bg-[#212121] text-white text-lg font-semibold px-6 py-3 rounded-lg hover:bg-black transition w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Contact Details */}
      <div className="py-16 px-6 flex flex-col items-start lg:items-center text-start lg:text-center">
  <div className="rounded-xl p-8 w-full lg:w-6/12">
    <h3 className="text-3xl font-bold text-[#212121] mb-6">Contact Information</h3>

    <div className="space-y-6">
      <div className="flex items-center lg:justify-center space-x-4">
        <FaMapMarkerAlt className="text-[#212121] text-2xl" />
        <p className="text-lg text-gray-700 font-medium">
          123 Main Street
        </p>
      </div>

      <div className="flex items-center lg:justify-center space-x-4">
        <FaEnvelope className="text-[#212121] text-2xl" />
        <p className="text-lg text-gray-700 font-medium">
          <a href="mailto:support@nearesthotel.com" className="text-[#212121] hover:underline">
            support@nearesthotel.com
          </a>
        </p>
      </div>

      <div className="flex items-center lg:justify-center space-x-4">
        <FaPhoneAlt className="text-[#212121] text-2xl" />
        <p className="text-lg text-gray-700 font-medium">
          <a href="tel:+1234567890" className="text-[#212121] hover:underline">
            +123 456 7890
          </a>
        </p>
      </div>
    </div>
  </div>
</div>

      <Footer />
    </div>
  );
};

export default ContactUs;
