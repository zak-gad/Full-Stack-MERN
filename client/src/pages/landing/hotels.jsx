import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Search, StarFill } from "react-bootstrap-icons";

import Nav from "../../components/nav/nav";
import Footer from "../../components/footer/footer";
import { GetHotels, GetHotelsByCity } from "../../apis/hotels";
import { URL } from "../../apis/baseurl";

const Hotels = () => {
  const { city } = useParams(); // Get city from URL
  const [hotels, setHotels] = useState([]); // Store fetched hotels
  const [filteredHotels, setFilteredHotels] = useState([]); // Store filtered hotels
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(""); // Store input value

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        let data;
        if (city) {
          data = await GetHotelsByCity(city);
        } else if (lat !== null && lng !== null) {
          data = await GetHotels(lat, lng);
        }

        if (data && data.success) {
          setHotels(data.hotels);
          setFilteredHotels(data.hotels); // Initialize filteredHotels with all hotels
        } else {
          console.error("Failed to fetch hotels");
        }
      } catch (error) {
        console.error("Error fetching hotels:", error);
      } finally {
        setLoading(false);
      }
    };

    if (city || (lat !== null && lng !== null)) {
      fetchHotels();
    }
  }, [city, lat, lng]);

  useEffect(() => {
    if (!city) {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLat(position.coords.latitude);
            setLng(position.coords.longitude);
            console.log(position.coords.latitude," ",position.coords.longitude);
          },
          (error) => {
            console.error("Error getting location:", error);
            setLoading(false);
          }
        );
     
        
      } else {
        console.error("Geolocation is not supported by this browser.");
        setLoading(false);
      }
    }
  }, [city]);

  // Function to filter hotels by name dynamically as user types
  useEffect(() => {
    const filtered = hotels.filter((hotel) =>
      hotel.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredHotels(filtered);
  }, [searchQuery, hotels]);

  return (
    <div>
      <Nav />
      <div className="px-6 lg:px-24 py-8 min-h-screen">
        <div className="flex flex-col lg:flex-row justify-between items-center mt-8">
          <h3 className="text-3xl lg:text-5xl font-semibold text-[#212121] mb-6 lg:mb-0">
            {city ? `Hotels in ${city}` : "Hotels Near You"}
          </h3>
          <div className="flex w-full lg:w-4/12 items-center">
            <input
              type="text"
              className="p-3 lg:p-4 px-6 lg:px-10 border-2 lg:border-3 border-gray-400 w-full rounded-full placeholder:text-lg lg:placeholder:text-2xl placeholder:text-[#212121]"
              placeholder="Search by hotel name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="p-4 lg:p-5 cursor-pointer text-lg lg:text-xl rounded-full bg-[#212121] text-white font-bold -ml-10 lg:-ml-12">
              <Search />
            </div>
          </div>
        </div>
        
        {/* Hotels Grid */}
        {loading ? (
          <p className="text-center text-2xl mt-10">Loading hotels...</p>
        ) : filteredHotels.length > 0 ? (
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredHotels.map((hotel) => (
              <Link to={`/hotel/${hotel._id}`} key={hotel._id} className="cursor-pointer flex flex-col w-full mx-auto">
                <img src={`${URL}${hotel.cover}`} alt={hotel.name} className="rounded-xl h-80 w-full object-cover" />
                <div className="text-start mt-4">
                  <h4 className="text-xl lg:text-2xl font-semibold">{hotel.name}</h4>
                  <p className="text-lg lg:text-xl mt-2 mb-4">{hotel.city}</p>
                  {/* Star Ratings */}
                  <div className="flex items-center text-2xl text-yellow-500">
                    {Array.from({ length: hotel.stars }, (_, index) => (
                      <StarFill key={index} />
                    ))}
                  </div>
                  {/* Book Now Button */}
                  <button className="w-full cursor-pointer rounded-full text-[#212121] border-2 border-[#212121] transition-all text-center text-xl lg:text-2xl py-3 my-4 hover:text-white hover:bg-[#212121]">
                    Book Now
                  </button>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-center text-xl mt-10 text-gray-500">No hotels found.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Hotels;
