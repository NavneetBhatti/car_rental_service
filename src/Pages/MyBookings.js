import React, { useEffect, useState } from "react";
import axios from 'axios';




const Bookings=()=> {

  const[users,setUsers]=useState([]) 


 
  const getUsers = async () => {
    try {
      let token = localStorage.getItem('Usertoken');

      let config = {
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token,
        },
      };
      const response = await axios.get(
        'http://localhost:5000/api/bookings/',
        config
      );
      setUsers(response.data);
    } catch (err) {
      console.log(err);
    }
  };
    
 


  useEffect(()=>{
    getUsers();
  },[])


  return (
   <>
      <div>
         
          {
            users.map((currElem)=>{
              return(
          <div>
              <p>Car Name: {currElem.carName}</p>
              <p>Car Type: {currElem.carType}</p>
              <p>Date From: {currElem.dateFrom}</p>
              <p>Date To: {currElem.dateTo}</p>
              <p>Total Price: {currElem.totalPrice}</p>
              <p>Status: {currElem.status}</p><br/>
              {/* <p>car id : {currElem.carId}</p>
              <p>user: {currElem.user}</p> */}



          </div>
              )
            })}

      </div>
   </>
  );
}

export default Bookings;
