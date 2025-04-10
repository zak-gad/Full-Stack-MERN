"use client";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaHotel, FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa"; // Correct import
import { Person } from "react-bootstrap-icons";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Check if user exists in localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  return (
    <nav className="py-5 px-6 lg:px-24 flex justify-between items-center bg-white shadow-md">
      {/* Logo Section */}
      <div className="flex items-center">
        <div className="p-4 bg-[#212121] text-[#f5f5f5] w-fit rounded-full">
          <FaHotel size={24} />
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex w-6/12 justify-between items-center">
        <Link className="text-lg text-gray-500 font-semibold transition-all hover:text-[#212121]" to={"/"}>
          Home
        </Link>
        <Link className="text-lg text-gray-500 font-semibold transition-all hover:text-[#212121]" to={"/hotels"}>
          Hotels
        </Link>
        <Link className="text-lg text-gray-500 font-semibold transition-all hover:text-[#212121]" to={"/abouts"}>
          About Us
        </Link>
        <Link className="text-lg text-gray-500 font-semibold transition-all hover:text-[#212121]" to={"/contact"}>
          Contact Us
        </Link>
      </div>

      {/* User Info / Sign In (Desktop) */}
      <div className="hidden lg:flex items-center">
        {user ? (
          <div className="flex items-center space-x-4">
            <span className="text-2xl font-semibold text-[#212121]">{user.name}</span>
            <Person className="text-3xl" />
            <button onClick={handleLogout} className="px-4 py-2 text-red-500 text-2xl rounded-md">Logout</button>
          </div>
        ) : (
          <Link to={"/login"} className="px-6 text-lg bg-black py-3 rounded-full text-white">
            SIGN IN
          </Link>
        )}
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden flex items-center">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl text-[#212121]">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-lg z-50 flex flex-col items-center py-6 space-y-6 transition-all">
          <Link className="text-lg text-gray-700 font-semibold" to={"/"} onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link className="text-lg text-gray-700 font-semibold" to={"/hotels"} onClick={() => setMenuOpen(false)}>
            Hotels
          </Link>
          <Link className="text-lg text-gray-700 font-semibold" to={"/abouts"} onClick={() => setMenuOpen(false)}>
            About Us
          </Link>
          <Link className="text-lg text-gray-700 font-semibold" to={"/contact"} onClick={() => setMenuOpen(false)}>
            Contact Us
          </Link>
          {user ? (
            <div className="flex flex-col items-center space-y-3">
              <div className="flex items-center justify-center" >
              <Person className="text-2xl mr-2" />
              <span className="text-lg font-semibold text-[#212121]">{user.name}</span>
              </div>
              <button onClick={handleLogout} className="px-4 py-2 text-red-500 rounded-md">Logout</button>
            </div>
          ) : (
            <Link to={"/login"} className="px-6 text-xl bg-black py-3 rounded-full text-white w-fit" onClick={() => setMenuOpen(false)}>
              SIGN IN
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Nav;
