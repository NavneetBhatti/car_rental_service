import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import React, { useState,useEffect } from "react";
// import { useForm } from "react-hook-form";
import "../App.css";
import {Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from 'axios';
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import { Col, Row } from "react-bootstrap";
// import 'reactjs-popup/dist/index.css';
import BookedSlots from './BookedSlots';





const Booking = () => {
  const[car, setCar] = useState([])
  const[days, setDays] = useState([])
  const[price, setPrice] = useState([])
  const [modalShow, setModalShow] = React.useState(false);

  const{ id } = useParams();
  console.log(id)


  const getUsers = async () => {
    const response = await axios.get(
      `http://localhost:5000/api/cars/${id}`
    );
    setCar(response.data);
    console.log(response.data);
    console.log("------------final_______________");
    console.log(car.name)
 };


useEffect(()=>{
    getUsers();
},[setCar])

  const [data, setData] = useState({
    dateFrom: "",
    dateTo:"",
    status:"pending"
  })

   

    function handle(e){
      const newdata={...data}
      newdata[e.target.id]=e.target.value
      setData(newdata)
      console.log(newdata)

    }
   
    

    function onSubmit(e){
      e.preventDefault();
      let token = localStorage.getItem('Usertoken');
    let config = {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token,
      },
    };
      axios.post("http://localhost:5000/api/bookings/",{
        carId:id,
        carName:car.name,
        carType:car.type,
        dateFrom:data.dateFrom,
        dateTo:data.dateTo,
        totalPrice:price,
        status:data.status
      },config)
      .then(res=>{
        console.log("--test2--")
        console.log(car.carName)
        console.log(res.data)
        console.log(typeof(dateFrom));
        alert("Car Booked successfully !!")

    })
    }

    
    

   
   

    function noOfdays() {
      var date1 = new Date(data.dateFrom);
      var date2 = new Date(data.dateTo);
      var Difference_In_Time = date2.getTime() - date1.getTime();
      var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
      var price = Difference_In_Days*car.price
      setDays(Difference_In_Days)
      setPrice(price)
      }
    
    useEffect(()=>{
      noOfdays();
    },[data])

  

    return(
        <>






<Row className="m-5">
  <Col>
    <Card style={{ width: '35rem' }} className="p-2" >
        <Card.Header class="bg-dark text-white"><b>{car.name}</b></Card.Header>
        <Card.Img variant="top" src={car.image} width="290" height="350"  />
        <ListGroup className="list-group-flush">
            <ListGroupItem>{car.name}</ListGroupItem>
            <ListGroupItem>{car.type}</ListGroupItem>
            <ListGroupItem>{car.price}/Day</ListGroupItem>
        </ListGroup>
   </Card>
  </Col> 

{/* --------------- */}
  <Col>

   <Card className="p-2">
    <Card.Body>
    <Card.Header>Booking Details</Card.Header><br/>

      <Form onSubmit={(e)=>onSubmit(e)}>
          <Row>
            <Col>
              <Form.Label>From Date</Form.Label>
              <Form.Control type="date" placeholder="First name" onChange={(e)=>handle(e)} value={data.dateFrom} id="dateFrom"  />
            </Col>
            <Col>
              <Form.Label>To Date </Form.Label>
              <Form.Control type="date" placeholder="Last name" value={data.dateTo} onChange={(e)=>handle(e)} id="dateTo" />
            </Col>
        
          </Row><br/>

          
          {days? <h5><b>No. of days: {days}</b></h5>: ('')}
          {days? <h5><b>Rent per day: {car.price}</b></h5>: ('')}
          {days? <h5><b>Total Price: {price}</b></h5>: ('')}<br/>

              {/* -----------booked slots------------ */}
        <Button variant="primary" onClick={() => setModalShow(true)} style={{ "width" : "30%"}}>
           Check Booked Slots
         </Button>
  
         <BookedSlots
           show={modalShow}
           onHide={() => setModalShow(false)}
           car={car}
           data={data}
          id={id}
         /><br/><br/>

          <Card.Header variant="primary">Payment Details</Card.Header> <br/>

          <Row>

            <Col>
              <Form.Label>Card Number </Form.Label>
              <Form.Control placeholder="card number" required />
            </Col>
            <Col>
              <Form.Label>Name on Card</Form.Label>
              <Form.Control placeholder="name on card" required />
            </Col>
          </Row><br/>
          <Row>
            <Col>
              <Form.Label>CVV</Form.Label>
              <Form.Control placeholder="cvv" required />
            </Col>
            <Col>
              <Form.Label>Expiry Date </Form.Label>
              <Form.Control placeholder="expiry date" required />
            </Col>

          </Row><br/>
      
          

          <Button variant="primary" type="submit"  name="submit">
              Book Now
          </Button> 
      </Form>

     
    </Card.Body>
     </Card><br/><br/>
   
  </Col>

</Row> 



          

    </>
    )
}
export default Booking


