import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Navigation/Nav";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Carlist from "./Pages/Carlist";
import Admin_addcar from "./Admin/AddCars";
import Payment from "./Pages/Payment";
import Bookings from "./Pages/MyBookings";
import BookCar from "./Pages/BookCar";
import Register from "./Pages/Register";
import Feedback from "./Pages/Feedback";
import Login from "./Pages/Login";
import ForgotPassword from "./Pages/ForgotPassword";
import { useState } from "react";
import UserProfile from "./Pages/UserProfile";
import EditUser from "./Pages/EditUser";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import PasswordReset from "./Pages/PasswordReset";
import Faq from "./Pages/Faq";
import AuthContext from "./Components/context/AuthContext";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("false");

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("Usertoken");
    setIsLoggedIn(false);
  };
  let appRoutes;

  if (isLoggedIn) {
    appRoutes = (
      <Routes>
        
        <Route path="Admin_addcar" element={<Admin_addcar />} />
        <Route path="Carlist" element={<Carlist />} />
        <Route path="Payment" element={<Payment />} />
        <Route path="Booking/:id" element={<BookCar />} />
      
		   <Route path="Contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
        <Route path="Feedback" element={<Feedback />} />
       <Route path="UserProfile" element={<UserProfile />} />
        <Route path="EditUser" element={<EditUser />} />
        <Route path="Bookings" element={<Bookings />} />
        <Route path="/password-reset/:id/:token" element={<PasswordReset />} />
        <Route path="Faq" element={<Faq/>} />
        <Route path="About" element={<About/>} />

        



      </Routes>
    );
  } else {
    appRoutes = (
      <Routes>
		  <Route path="Contact" element={<Contact />} />
		  <Route path="/" element={<Home />} />
        <Route path="Login" element={<Login />} />
        <Route path="Register" element={<Register />} />
        <Route path="Forgot" element={<ForgotPassword />} />
        <Route path="/password-reset/:id/:token" element={<PasswordReset />} />
        <Route path="Faq" element={<Faq />} />
        <Route path="About" element={<About/>} />





      </Routes>
    );
  }
  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <BrowserRouter>
        <div>
          <Nav />
          <div className="bodyy">{appRoutes}</div>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};
export default App;
