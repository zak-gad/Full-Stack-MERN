"use client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "react-bootstrap-icons";

import Nav from "../../components/nav/nav";
import Footer from "../../components/footer/footer";

// Import images
import img1 from "../../../public/images/5536fbbe4944cceeee25db1bd75a0faf.jpg";
import img2 from "../../../public/images/6c886a58955b62b80b29d29a69432904.jpg";
import img3 from "../../../public/images/b866c3e894ab5648a3b779679b8b9069.jpg";
import im1 from "../../../public/images/img1.jpg";
import im2 from "../../../public/images/img2.jpg";
import im3 from "../../../public/images/img3.jpg";

const Landing = () => {
  const [city, setCity] = useState("");
  const navigate = useNavigate(); // ✅ Use useNavigate for navigation

  const handleSearch = () => {
    if (city.trim()) {
      navigate(`/hotels/${city}`);
    }
  };

  return (
    <div>
      <Nav />

      <div className="w-full px-6 lg:px-24 my-12 lg:my-16 flex flex-wrap lg:flex-nowrap justify-between items-start bg-[#f5f5f5]">
        
        {/* Left Section */}
        <div className="w-full lg:w-6/12 flex flex-col text-center lg:text-start">
          <h3 className="text-5xl lg:text-7xl font-bold text-[#212121]">
            Best <br className="hidden lg:block"/> hotels <br className="hidden lg:block"/> nearby now
          </h3>
          <p className="w-full lg:w-7/12 text-gray-600 leading-7 lg:leading-8 text-lg lg:text-xl my-8 lg:my-12">
            Discover the best hotels nearby now, offering luxury, comfort, and top amenities. Book instantly for a perfect stay, whether for business, leisure, or relaxation.
          </p>
          <div className="flex items-center justify-center lg:justify-start">
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="p-3 lg:p-4 px-6 lg:px-10 border-[2px] lg:border-[3px] border-[#777] w-10/12 lg:w-7/12 rounded-full placeholder:text-lg lg:placeholder:text-2xl placeholder:text-[#212121]"
              placeholder="Search By City"
            />
            <div 
              onClick={handleSearch}
              className="p-4 lg:p-5 cursor-pointer text-lg lg:text-xl rounded-full bg-[#212121] text-white font-bold -ml-10 lg:-ml-12"
            >
              <Search />
            </div>
          </div>

          {/* Circular images */}
          <div className="flex justify-center lg:justify-start mt-16 lg:mt-32">
            <div className="w-16 h-16 lg:w-24 lg:h-24">
              <img src={im3} className="h-full w-full rounded-full" alt="Hotel 1" />
            </div>
            <div className="w-16 h-16 lg:w-24 lg:h-24">
              <img src={im1} className="h-full w-full rounded-full -ml-3 lg:-ml-4" alt="Hotel 2" />
            </div>
            <div className="w-16 h-16 lg:w-24 lg:h-24">
              <img src={im2} className="h-full w-full rounded-full -ml-3 lg:-ml-8" alt="Hotel 3" />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-6/12 flex flex-col items-center justify-center mt-12 lg:mt-0">
          <div className="w-full h-[250px] lg:h-[370px] rounded-2xl">
            <img src={img2} className="shadow-xl w-full h-full rounded-2xl object-cover" alt="Featured Hotel" />
          </div>
          <div className="mt-6 lg:mt-8 rounded-full px-8 lg:px-12 p-3 lg:p-4 w-full text-white bg-[#212121] flex justify-between items-center text-center">
            <h2 className="text-2xl lg:text-3xl font-semibold">2,000+</h2>
            <h2 className="text-2xl lg:text-3xl font-semibold">Unique Places</h2>
          </div>
          <div className="mt-6 lg:mt-8 flex justify-center items-center">
            <div className="w-5/12 lg:w-6/12 mx-2 lg:mx-4">
              <img src={img3} className="shadow-xl w-full h-full rounded-2xl object-cover" alt="Featured Hotel" />
            </div>
            <div className="w-5/12 lg:w-6/12 mx-2 lg:mx-4">
              <img src={img1} className="shadow-xl w-full h-full rounded-2xl object-cover" alt="Featured Hotel" />
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default Landing;
