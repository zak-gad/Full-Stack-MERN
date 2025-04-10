import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { forgetPassword } from '../../apis/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import bg from '../../../public/images/background.jpg';

const Forget = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  // Handle input change
  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent reload
    try {
      const result = await forgetPassword(email);
      if (result) {
        navigate(`/checkcode/${email}`);
      }
    } catch (error) {
      toast.error('Error sending verification code. Please try again.');
    }
  };

  return (
    <div 
      className="h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content (placed above the overlay) */}
      <div className="relative z-10 flex items-center justify-center h-full text-white">
        <div className='w-full lg:w-4/12 h-fit bg-white/60 rounded-2xl text-center'>
          <h2 className='text-[#212121] my-12 text-2xl lg:text-3xl font-bold mb-8'>
            Enter Email To Your Account
          </h2>

          <form onSubmit={handleSubmit} className='text-[#212121]'>
            <input 
              type="email" 
              value={email} 
              onChange={handleChange} 
              className='w-10/12 p-3 text-2xl placeholder:text-[#212121] mb-4' 
              placeholder='Email address' 
              required 
            />
            <button 
              type="submit"
              className='block w-10/12 text-center mx-auto text-2xl p-3 bg-[#212121] mb-12 text-white rounded-lg'
            >
              Send Code
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forget;
