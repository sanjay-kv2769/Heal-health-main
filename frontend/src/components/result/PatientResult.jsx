import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import image from "../images/FORM.jpg";
import Button from "react-bootstrap/Button";
// import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
function PatientResult() {
  const navigate = useNavigate();
  
  const [patient, setPatient] = useState({});
 
  const inputChange = (event) => {
    const { name, value } = event.target;
    setPatient({ ...patient, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // axios
    // .get("http://localhost:9090/api/patient-booking/view-result")
    // .then((response) => {
    //   console.log(response);
    //   setPatient(response.data.data);
    //   console.log(response.data.data);
      
      
    // });
    
  }
  return (
    <div style={{ backgroundImage: `url(${image})`,height:"500px" }}>
      <div style={{ width: "600px", marginLeft: "auto", marginRight: "auto" }}>
        
         <Form className="m-5">
          <Form.Group className=" mb-3" controlId="formBasicEmail">
            <Form.Label>
              <b>Enter Your ID</b>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your ID"
              name="booking_id"
              // value={booking_id}
              onChange={inputChange}
            />  
          </Form.Group>

          <div style={{ textAlign: "center" }}>
          <Link to={`/result/${patient.booking_id}`}>
              <Button variant="primary">Submit</Button>
            </Link>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default PatientResult