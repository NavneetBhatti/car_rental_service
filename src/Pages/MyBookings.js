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
      <div className="container m-4 p-4">
      <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Car Name</th>
                      <th scope="col">Car Type</th>
                      <th scope="col">Date From</th>
                      <th scope="col">Date To</th>
                      <th scope="col">Total Price</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
          {
            users.map((currElem)=>{
              return(
                    <tr>
                      <td>{currElem.carName}</td>
                      <td>{currElem.carType}</td>
                      <td>{currElem.dateFrom}</td>
                      <td>{currElem.dateTo}</td>
                      <td>{currElem.totalPrice}</td>
                      <td>{currElem.status}</td>
                    </tr>
                
              )
            })}
            </tbody>
                </table>
      </div>
   </>
  );
}

export default Bookings;
