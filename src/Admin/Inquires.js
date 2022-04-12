import Sidebar from "./Sidebar";
import jwt_decode from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Inquires = () => {
  const [query, setQuery] = useState([]);
  const sendGetRequest = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/Inquires/");
      setQuery(response.data);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    sendGetRequest();
  }, []);
  return (
    <>
      <div classname="container">
        <div className="row align-items-start">
          <div className="col">
            <Sidebar />
          </div>
          <div className="col-8">
            <br />
            <br />

            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Query Id</th>
                  <th scope="col">Query subject</th>
                  <th scope="col">From</th>
                  <th scope="col">Email</th>
                  <th scope="col">date</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {query.map((query) => (
                  <Querylist query={query} key={query.id} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

const Querylist = ({ query }) => {
    const deletefn = async (e) => {
      
      let decoded = null;
      let token = null;
      try {
        token = localStorage.getItem("Usertoken");
        decoded = jwt_decode(token);
        // valid token format
      } catch (error) {
        return "Forbidden";
      }
      let config = {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        },
      };
  

    };
  
    return (
      <tr>
        <td>{query.id}</td>
        <td>{query.firstname}</td>
        <td>{query.lastname}</td>
        <td>{query.email}</td>
        <td>{query.age}</td>
        <td>{query.phone}</td>
        <td>
          <form action="/editUser">
            <input type="text" name="userID" value={query.id} hidden />
            <input
              type="submit"
              value="Update details"
              className="btn btn-primary btn-sm"
            />
          </form>
        </td>
      </tr>
    );
  };

export default Inquires;
