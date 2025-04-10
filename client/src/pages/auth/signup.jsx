import  { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SignUp } from '../../apis/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import bg from '../../../public/images/background.jpg';

const SignUppage = () => {
  const navigate = useNavigate(); // Fix: Initialize navigate
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });  
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();  // to prevent reload
    
    const { name, email, phone, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      toast.error('Passwords do not match!');
      return;
    }

    try {
      const result = await SignUp(name, email, phone, password);
      if (result) {
        console.log(result);
        const { token, name } = result;

        localStorage.setItem("user", JSON.stringify({ token, name })); // Fix: Use JSON.stringify
        navigate('/'); // Redirect to home page
      }
    } catch (error) {
      toast.error('Signup failed. Please try again.');
      console.error(error);
    }
  };

  return (
    <div 
      className="h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 flex items-center justify-center h-full text-white">
        <div className="w-full lg:w-4/12 h-fit bg-white/60 rounded-2xl text-center">
          <h2 className="text-[#212121] mt-12 text-2xl lg:text-3xl font-bold mb-4">
            Sign Up or Login 
          </h2>
          <p className="text-xl text-gray-900 font-semibold mb-12">Welcome back! Please enter your details.</p>

          <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="text-[#212121] w-10/12 p-3 text-2xl placeholder:text-[#212121] mb-4" placeholder="Enter Name" required />
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="text-[#212121] w-10/12 p-3 text-2xl placeholder:text-[#212121] mb-4" placeholder="Phone" required />
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="text-[#212121] w-10/12 p-3 text-2xl placeholder:text-[#212121] mb-4" placeholder="Email address" required />
            <input type="password" name="password" value={formData.password} onChange={handleChange} className="text-[#212121] w-10/12 p-3 text-2xl placeholder:text-[#212121] mb-4" placeholder="Password" required />
            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="text-[#212121] w-10/12 p-3 text-2xl placeholder:text-[#212121] mb-4" placeholder="Confirm Password" required />

            <button type="submit" className="block w-10/12 text-center mx-auto text-2xl p-3 bg-[#212121] text-white mb-4">
              Sign Up
            </button>
          </form>

          <div className="w-10/12 mb-12 mx-auto flex justify-end items-center">
            <Link className="text-xl text-[#212121]" to="/login">
              Already have an account?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUppage;
