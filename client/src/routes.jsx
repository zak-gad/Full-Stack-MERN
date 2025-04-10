import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing/landing";
import Login from "./pages/auth/login";
import SignUppage from "./pages/auth/signup";
import Forget from "./pages/auth/forgetpass";
import CheckCodepage from "./pages/auth/checkCode";
import ChangePass from "./pages/auth/changePassword";
import Hotels from "./pages/landing/hotels";
import AboutUs from "./pages/landing/aboutUs";
import ContactUs from "./pages/landing/contactUs";
import HotelPage from "./pages/hotel/hotel";

// import Page404 from "./pages/Page404"; // Make sure this import path is correct

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} /> 
        <Route path="/hotels/:city?" element={<Hotels />} />
        <Route path="/hotel/:id" element={<HotelPage />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/signup" element={<SignUppage />} /> 
        <Route path="/forget" element={<Forget />} /> 
        <Route path="/abouts" element={<AboutUs />} /> 
        <Route path="/contact" element={<ContactUs />} /> 
        <Route path="/checkcode/:email" element={<CheckCodepage />} /> 
        <Route path="/changepass/:email" element={<ChangePass />} /> 
{/* 
        <Route path="*" element={<Page404 />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
