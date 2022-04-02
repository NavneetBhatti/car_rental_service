import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import React from "react";
// import { useForm } from "react-hook-form";
import "../App.css";
import {Link } from "react-router-dom";


const Booking = () => {
    return(
        <>

        <img src="https://media.istockphoto.com/photos/red-generic-sedan-car-isolated-on-white-background-3d-illustration-picture-id1189903200?k=20&m=1189903200&s=612x612&w=0&h=L2bus_XVwK5_yXI08X6RaprdFKF1U9YjpN_pVYPgS0o="style={{height: "300px",width:"500px"}}/>
        <h2 class="booking">Book Now</h2>
        <form class="bookingForm">
        <input type="button" value="Booked slots"/><br/><br/>
   
        <label>Date From : </label>            
        <input type="date" /><br/><br/>
        <label>Date To : </label>            
        <input type="date" /><br/><br/>
        <Link to="/Payment"><button>
              Pay Now
            </button>
            </Link>
      </form>
        </>
    )
}
export default Booking