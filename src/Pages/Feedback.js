import React, { useEffect, useState } from "react";
import {
  Form,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
} from "react-bootstrap";
import "../App.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "react-bootstrap/Card";

const Feedback = () => {
  const url = "http://localhost:5000/api/feedbacks";
  const [users, setUsers] = useState([]);
  const [data, setData] = useState({
    name: "",
    email: "",
    feedback: "",
  });
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  const getUsers = async () => {
    try {
      let token = localStorage.getItem("Usertoken");

      let config = {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        },
      };
      const response = await axios.get(
        "http://localhost:5000/all/api/feedbacks",
        config
      );
      setUsers(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <Card className="m-5 p-5">
        <Card.Header>Customer Feedback</Card.Header>
        <Card.Body>
          <Card.Title>Help us to give you better services !!</Card.Title>
          <Card.Text className="feedback">
            <h5>
              Here at Car Rental the customer satisfaction is our highest
              priority. Therefore our customers’ feedback is really important to
              us. Your comments, not only that you will help us thrive but will
              also help us improve our services.
              <br />
              <br />
              If you are one our beloved clients, please take 2 minutes of your
              time to leave us few comments.
            </h5>
            <h5>
              We want CarRental Service to be a place where you find all of the
              Car Rental information you need. If you have comments or feedback
              please fill out the form below. <br />
              <br />
              Our FAQs page can help answer many of your car rental questions.
            </h5>{" "}
          </Card.Text>
        </Card.Body>
        <br />

        {/* --form */}
      </Card>

      {/* ---show added feedback---- */}
      <Card className="m-5 p-5">
        {users.map((currElem) => {
          return (
            <div
              class="feed"
              style={{ border: "1px solid black", marginTop: "10px" }}
            >
              <Card.Header>
                <i>{currElem.name}</i>
              </Card.Header>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p> {currElem.feedback} </p>
                  <footer className="blockquote-footer">
                    <i>
                      {date} by {currElem.name}
                    </i>
                  </footer>
                </blockquote>
              </Card.Body>
            </div>
          );
        })}
      </Card>
    </>
  );
};

export default Feedback;
