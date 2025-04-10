import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaFacebook, FaWhatsapp, FaStar } from "react-icons/fa";
import { GetHotelsById } from "../../apis/hotels";
import { URL } from "../../apis/baseurl";
import Nav from "../../components/nav/nav";
import Footer from "../../components/footer/footer";

const HotelPage = () => {
  const { id } = useParams(); // Get hotel ID from URL
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHotel = async () => {
      setLoading(true);
      const data = await GetHotelsById(id);
      if (data?.success) {
        setHotel(data.hotel);
      } else {
        console.error("Failed to fetch hotel details");
      }
      setLoading(false);
    };
    fetchHotel();
  }, [id]);

  if (loading) {
    return <div className="flex justify-center items-center h-screen text-2xl">Loading...</div>;
  }

  if (!hotel) {
    return <div className="flex justify-center items-center h-screen text-2xl text-red-500">Hotel not found</div>;
  }

  return (
    <div>
          <Nav />
          <div className="p-6 lg:p-12 min-h-screen  text-black transition-all">
      {/* Hotel Cover Image */}
      <div className="relative w-full h-[450px] rounded-xl overflow-hidden shadow-lg">
        <img
          src={`${URL}${hotel.cover}`}
          alt={hotel.name}
          className="w-full h-full object-cover transform scale-100 hover:scale-105 transition duration-500"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-5xl lg:text-7xl font-extrabold  px-6 py-3 rounded-xl">
            {hotel.name}
          </h1>
        </div>
      </div>

      {/* Hotel Details - Centered */}
      <div className="mt-12 flex flex-col items-center text-center">
        <h2 className="text-4xl font-bold">{hotel.name}</h2>
        <p className="text-lg text-gray-600 mt-2">{hotel.city}</p>

        {/* Stars & Social Links - Centered */}
        <div className="flex flex-col items-center mt-4 space-y-4">
          {/* Stars */}
          <div className="flex items-center text-yellow-500 text-2xl">
            {Array.from({ length: hotel.stars }, (_, index) => (
              <FaStar key={index} />
            ))}
          </div>

          {/* Social Media Links */}
          <div className="flex gap-6 mt-3">
            <a
              href={hotel.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-blue-600 p-4 rounded-full hover:bg-blue-700 transition transform hover:scale-110"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href={hotel.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-green-500 p-4 rounded-full hover:bg-green-600 transition transform hover:scale-110"
            >
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>

        {/* Description */}
        <p className="mt-6 text-lg text-gray-700 max-w-2xl">{hotel.description}</p>
      </div>

      {/* Hotel Images Grid */}
      {/* Hotel Images Scrollable Section */}
        <div className="mt-12 overflow-x-auto whitespace-nowrap px-4">
        <div className="flex gap-6">
            {hotel.images.map((img, index) => (
            <div key={index} className="relative min-w-[250px] md:min-w-[300px] lg:min-w-[350px] overflow-hidden rounded-xl shadow-md">
                <img
                src={`${URL}${img}`}
                alt={`Hotel Image ${index + 1}`}
                className="w-full h-56 object-cover transform hover:scale-105 transition duration-500"
                />
            </div>
            ))}
        </div>
        </div>


      {/* Book Now Button */}
      <div className="mt-12 text-center">
        <button className="px-8 py-4 text-xl font-semibold bg-black text-white rounded-full hover:bg-gray-800 transition transform hover:scale-105 shadow-lg">
          Book Now
        </button>
      </div>
    </div>
  <Footer />
    </div>
 
  );
};

export default HotelPage;
