// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const About = () => {
//   const [todos, setTodos] = useState([]);

//   const sendGetRequest = async () => {
//     try {
     
//       const response = await axios.get(
//         'http://localhost:5000/api/faq'
//       );
//       setTodos(response);
//       console.log(response);
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   return (
//     <div>
//       {todos.map((t) => (
//         <Todo todo={t} key={t._id} />
//       ))}
//     </div>
//   );
// };

// const Todo = ({ todo }) => {
//   return (
//     <div>
//       <h3>{todo.name}</h3>
//       <p>{todo.email}</p>
//     </div>
//   );
// };

// export default About;


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
   <>
      <div>
          {
            users.map((currElem)=>{
              return(
          <div className="container-fluid px-0" >
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
            <Card.Title>{currElem.name}</Card.Title>
            <Card.Text>
             {currElem.email}
            </Card.Text>
            </Card.Body>
            </Card>

          </div>
              )
            })}

      </div>
   </>
  );
}

export default About;
