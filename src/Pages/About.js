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
import {Link } from "react-router-dom";
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
          <div class= "inner">
              <h1>Name:{currElem.name}</h1>
              <p>Email:{currElem.email}</p>

          </div>
              )
            })}

      </div>
   </>
  );
}

export default About;
