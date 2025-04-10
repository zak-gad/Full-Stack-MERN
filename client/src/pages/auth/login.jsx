import  { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../apis/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import bg from '../../../public/images/background.jpg';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent reload 
    const { email, password } = formData;

    try {
      const result = await login(email, password);
      if (result) {
        const { token, name } = result;
        localStorage.setItem("user", JSON.stringify({ token, name }));
        navigate('/');
      }
    } catch (error) {
      toast.error("Login failed. Please check your credentials.");
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
        <div className='w-full lg:w-4/12 h-fit bg-white/60 rounded-2xl text-center '>
          <h2 className='text-[#212121] mt-12 text-2xl lg:text-3xl font-bold mb-4'>
            Sign in or Create an Account
          </h2>
          <p className='text-xl text-gray-900 font-semibold mb-12'>Welcome back! Please enter your details.</p>

          <form onSubmit={handleSubmit} className='text-[#212121]'>
            <input 
              type="text" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className='w-10/12 p-3 text-2xl placeholder:text-[#212121] mb-4' 
              placeholder='Email address' 
            />
            <input 
              type="password" 
              name="password"
              value={formData.password}
              onChange={handleChange}
              className='w-10/12 p-3 text-2xl placeholder:text-[#212121] mb-4' 
              placeholder='Password' 
            />
            <button 
              type="submit"
              className='block w-10/12 text-center mx-auto text-2xl p-3 bg-[#212121] mb-4 text-white rounded-lg'
            >
              Sign in
            </button>
          </form>

          <div className='w-10/12 mb-12 mx-auto flex justify-between items-center'>
            <Link className="text-xl text-[#212121]" to="/signup">
              Don't have an account? Sign up here.
            </Link>
            <Link className="text-xl text-[#212121]" to="/forget">
              Forgot your password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
