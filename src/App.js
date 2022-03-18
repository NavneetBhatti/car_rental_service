import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from "./Components/Navigation/Nav";
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Carlist from './Pages/Carlist';
import Payment from './Pages/Payment';
import Bookings from './Pages/MyBookings';
import Register from './Pages/Register';
import Login from './Pages/Login';


const App = () => {
	return (
		<BrowserRouter>
			<div>
				<Nav />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="Carlist" element={<Carlist />} />
					<Route path="Payment" element={<Payment />} />
					<Route path="Booking" element={<Bookings />} />
					<Route path="Register" element={<Register />} />
					<Route path="Sign" element={<Login />} />
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	);
};
export default App;




