import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import React, { useState,useEffect } from "react";
// import { useForm } from "react-hook-form";
import "../App.css";
import {Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from 'axios';



const Booking = (props) => {
    const{ id } = useParams();
    console.log(id)
    const[car, setCar] = useState([])
    const getUsers = async () => {
        const response = await axios.get(
          `http://localhost:5000/api/cars/${id}`
        );
        setCar(response.data);
        console.log(response.data);
     };
  
  
    useEffect(()=>{
        getUsers();
    },[setCar])

    return(
        <>

        <img src={car.image}style={{height: "300px",width:"500px"}}/>
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