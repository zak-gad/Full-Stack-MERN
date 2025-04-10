import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { changePassword } from '../../apis/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import bg from '../../../public/images/background.jpg';

const ChangePass = () => {
  const navigate = useNavigate();
  const { email } = useParams(); // Get email from URL
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    if (e.target.name === 'newPassword') setNewPassword(e.target.value);
    if (e.target.name === 'confirmPassword') setConfirmPassword(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      toast.error('Passwords do not match!');
      return;
    }

    try {
      const result = await changePassword(email, newPassword);
      if (result) {
        navigate('/login');
      }
    } catch (error) {
      toast.error('Error changing password. Please try again.');
    }
  };

  return (
    <div 
      className="h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-white">
        <div className="w-full lg:w-4/12 h-fit bg-white/60 rounded-2xl text-center p-8">
          <h2 className="text-[#212121] mt-4 text-2xl lg:text-3xl font-bold mb-6">
            Change Password
          </h2>

          <form onSubmit={handleSubmit} className='text-[#212121]'>
            <input 
              type="password" 
              name="newPassword"
              value={newPassword}
              onChange={handleChange}
              className="w-10/12 p-3 text-2xl placeholder:text-[#212121] mb-4 border border-gray-300 rounded-lg"
              placeholder="New Password" 
              required
            />
            <input 
              type="password" 
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
              className="w-10/12 p-3 text-2xl placeholder:text-[#212121] mb-4 border border-gray-300 rounded-lg"
              placeholder="Confirm Password" 
              required
            />
            <button 
              type="submit"
              className="block w-10/12 text-center mx-auto text-2xl p-3 bg-[#212121] text-white rounded-lg hover:bg-gray-900 transition duration-300 mb-6"
            >
              Change Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePass;
