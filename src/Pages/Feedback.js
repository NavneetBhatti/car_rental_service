import React, { useEffect, useState } from "react";
import {Link } from "react-router-dom";
import axios from 'axios';




const Feedback=()=> {
  const url="http://localhost:5000/api/feedbacks" 
  const[users,setUsers]=useState([]) 
  const [data, setData] = useState({
      name: "",
      email:"",
      feedback:""
  })

  function handle(e){
      const newdata={...data}
      newdata[e.target.id]=e.target.value
      setData(newdata)
      console.log(newdata)

  }
  function submit(e){
      e.preventDefault();
      axios.post(url,{
          name:data.name,
          email:data.email,
          feedback:data.feedback
      })
      .then(res=>{
          console.log(res.data)
      })
  }
  const getUsers = async () => {
      const response = await axios.get(
        'http://localhost:5000/api/feedbacks/'
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
          <form onSubmit={(e)=>submit(e)}>
              <label>Name: </label>
              <input  type="text" onChange={(e)=>handle(e)} id="name" value={data.name} /><br/><br/>
              <label>Email: </label>
              <input type="text" onChange={(e)=>handle(e)} id="email" value={data.email}/><br/><br/>
              <label >Your Feedback</label> 
              <textarea name="feedback"  onChange={(e)=>handle(e)} id="feedback" value={data.feedback}/><br/><br/>
              <input type="submit" value="Submit" />
              <input type="reset" value="Clear" />
          </form>
          {
            users.map((currElem)=>{
              return(
          <div class= "feed">
              <h1>{currElem.feedback}</h1>
              <p>{currElem.name}</p>
              <p>{currElem.email}</p>

          </div>
              )
            })}

      </div>
   </>
  );
}

export default Feedback;
