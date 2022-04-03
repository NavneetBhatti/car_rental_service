import React, { useEffect, useState } from "react";
import {Link } from "react-router-dom";
import axios from 'axios';




const CarList=()=> {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
      const response = await axios.get(
        'http://localhost:5000/api/cars/'
      );
      setUsers(response.data);
      console.log(response.data);
      console.log("--test");

   };


  useEffect(()=>{
    getUsers();
  },[])


  return (
   <>
      <div className="container-fluid mt-5">
        <div className="row text-center">

          {
            users.map((currElem)=>{
              return(
                <div className="col-10 col-md-4 mt-5 mb-5">
                <div class="card p-2  ">
                  <div class="d-flex align-items-center">
                    <div class="image"><img src={currElem.image} class="rounded" width="155" height="100" /> </div>
                    <div class="ml-3 w-100">
                      <h4 class="mb-0 mt-0 textLeft">{currElem.name}</h4> <span className="textLeft">{currElem.type}</span>
                      <div class="price">

                        <span className="textRight">{currElem.price}</span>
                        {/* both ways are correct */}
                        <Link to={`/Booking/${currElem._id}`}><button class="btn2">  
                        {/* <Link to={'/Booking/'+currElem._id+'/'+currElem.name+'/'+currElem.type+'/'+currElem.price+'/'+currElem.image}><button class="btn2"> */}

                              Book Now
                         </button>
                        </Link>
                      </div>
    
                    </div>
    
                  </div>
    
                </div>
    
              </div>
              )
            })
          }
    
      </div>

      </div>
   </>
  );
}

export default CarList;
