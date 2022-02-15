import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from "./Components/Navigation/Nav";
import Footer from './Components/Footer';
import Home from './Components/Home';
import Carlist from './Components/Carlist';
import Payment from './Components/Payment';
import Bookings from './Components/Bookings';
import Register from './Components/Register';




 

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
      <Route path="Signup" element={<Register />} />
        </Routes>
        {/* <Footer />  */}
      </div>
    </BrowserRouter>
  );
};
export default App;
 



