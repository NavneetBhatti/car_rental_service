import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from "./Components/Navigation/Nav";
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Carlist from './Pages/Carlist';
import Admin_addcar from './Admin/AddCars';
import Payment from './Pages/Payment';
import Bookings from './Pages/MyBookings';
import Register from './Pages/Register';
import Login from './Pages/Login';
import ForgotPassword from './Pages/ForgotPassword';
import { useState } from 'react';
import AuthContext from './context/AuthContext';

const App = () => {
	const [isLoggedIn, setIsLoggedIn] = useState('false');

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };
  let appRoutes;

  if (isLoggedIn) {
    appRoutes = (
		<Routes>
	
		<Route path="/" element={<Login />} />
		<Route path="Admin_addcar" element={<Admin_addcar />} />
		<Route path="Carlist" element={<Carlist />} />
		<Route path="Payment" element={<Payment />} />
		<Route path="Booking" element={<Bookings />} />
		<Route path="Register" element={<Register />} />
		<Route path="Home" element={<Home />} />
		<Route path="Forgot" element={<ForgotPassword />} />

	</Routes>			
    );
  } else {
    appRoutes = (
		<Routes>
		<Route path="/" element={<Login />} />
		<Route path="Register" element={<Register />} />
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
				<div className='bodyy'>
				{appRoutes}		
				</div>
				<Footer />
			</div>
		</BrowserRouter>
		</AuthContext.Provider>

	);
};
export default App;




