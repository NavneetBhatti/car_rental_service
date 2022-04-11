import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../Components/css/carlist.css";

const CarList = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    let token = localStorage.getItem("token");
    let config = {
      header: {
        "Content-Type": "application/json",
        //'x-auth-token': token,
      },
    };
    const response = await axios.get("http://localhost:5000/api/cars/", config);
    setUsers(response.data);
    console.log(response.data);
    console.log("--test");
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div className="container-fluid mt-5">
        <div className="container">
          {users.map((currElem) => {
            let imgurl = "http://localhost:5000/uploads/" + currElem.image;
            return (
              <div className="card p-2  ">
                <div className="d-flex align-items-center" id="wrapper">
                  <div className="image">
                    <img
                      src={imgurl}
                      className="rounded"
                      width="155"
                      height="100"
                    />{" "}
                  </div>
                  <div className="ml-3 w-100" id="left" >
                    <h4 className="mb-2 mt-2 textLeft">{currElem.name}</h4>{" "}
                    <span className="textLeft">{currElem.type}</span>
                    <div className="price">
                      <span className="textRight">
                        $ {currElem.price} / Day
                      </span>
                      <div id="right">
                        <Link to={`/Booking/${currElem._id}`}>
                          <button className="btn2">
                            {/* <Link to={'/Booking/'+currElem._id+'/'+currElem.name+'/'+currElem.type+'/'+currElem.price+'/'+currElem.image}><button className="btn2"> */}
                            Book Now
                          </button>
                        </Link>
                      </div>
                      {/* both ways are correct */}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CarList;
