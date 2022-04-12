
import React, { useEffect, useState } from "react";
import {Card } from "react-bootstrap";
import axios from 'axios';




const About=()=> {

  
    const[users,setUsers]=useState([]) 

  const getUsers = async () => {
      const response = await axios.get(
        'http://localhost:5000/api/aboutus'
      );
      setUsers(response.data);
      console.log(response.data);
      console.log("--test");

   };


  useEffect(()=>{
    getUsers();
  },[])


  return (
   <div className="inner">
      <div className="mb-4">
      
          {
            users.map((currElem)=>{
              return(
          <div >
          <Card style={{ width: '20rem'}}>
          
            <Card.Body>
            <Card.Title>{currElem.title}</Card.Title>
            <Card.Text>
             {currElem.description}
            </Card.Text>
            </Card.Body>
            </Card>

          </div>
              )
            })}

      </div>
   </div>
  );
}

export default About;
