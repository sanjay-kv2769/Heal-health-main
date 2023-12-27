import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import image from "../images/FORM.jpg";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addPatients } from "../../redux/Reducer/patientAddSlice";
// import { v4 as uuid } from 'uuid';

function BookingForm() {
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const addpatient=useSelector((state)=>state.addpatient.patientData)
  // const status=useSelector((state)=>state.addpatient.status)
  const [patient, setPatient] = useState({});

  const inputChange = (event) => {
    const { name, value } = event.target;
    setPatient({ ...patient, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(addPatients(patient))

    // axios
    //   .post("http://localhost:9090/api/patient-booking/add-patient", patient)
    //   .then((response) => {
    //     console.log(response);
    //     setPatient(response.data.data);
    //   });
      // const ids = uuid();
      // const uniqueId = ids.slice(0, 3);
      // const { name, age,test,date,time } = patient;
      // patient.push({ name, age,test,date,time,id: uniqueId });
    navigate("/");
  };

  return (
    <div style={{ backgroundImage: `url(${image})` }}>
      <div style={{ width: "600px", marginLeft: "auto", marginRight: "auto" }}>
        {/* <div style={{backgroundColor:'grey'}}> */}
        <h1
          style={{ textAlign: "center", color: "GrayText", marginTop: "15px" }}
        >
          Test Booking
        </h1>
        <Form className="m-5">
          <Form.Group className=" mb-3" controlId="formBasicEmail">
            <Form.Label>
              <b>Name</b>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              name="name"
              onChange={inputChange}
            />
          </Form.Group>

          <Form.Group className=" mb-3" controlId="formBasicEmail">
            <Form.Label>
              <b>Age</b>
            </Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter age"
              name="age"
              onChange={inputChange}
            />
          </Form.Group>

          <Form.Group className=" mb-3" controlId="formBasicEmail">
            <Form.Label>
              <b>Test</b>
            </Form.Label>

            <Form.Select
              type="text"
              placeholder="Test"
              name="test"
              onChange={inputChange}
            >
              <option value="">Select</option>
              <option value="Arogya">Arogya</option>
              <option value="Thyroid">Thyroid</option>
              <option value="Lungs & Body">Lungs & Body</option>
              <option value="Renal Care">Renal Care</option>
              <option value="Liver Function Test">Liver function Test</option>
              <option value="RBS">RBS</option>
              <option value="HBA1C">HBA1C</option>
              <option value="Anti-HCV">Anti-HCV</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className=" mb-3" controlId="formBasicEmail">
            <Form.Label>
              <b>Preffered Date</b>
            </Form.Label>
            <Form.Control
              type="date"
              placeholder="Select Date"
              name="date"
              onChange={inputChange}
            />
          </Form.Group>

          <Form.Group className=" mb-3" controlId="formBasicEmail">
            <Form.Label>
              <b>Preffered Time</b>
            </Form.Label>

            <Form.Select
              type="text"
              placeholder="select a time range"
              name="time"
              onChange={inputChange}
            > 
            <option value="">Select</option>
              <option value="09:00 am - 10:00 am">09:00 am - 10:00 am</option>
              <option value="10:00 am - 11:00 am">10:00 am - 11:00 am</option>
              <option value="11:00 am - 12:00 pm">11:00 am - 12:00 pm</option>
              <option value="12:00 pm - 01:00 pm">12:00 pm - 01:00 pm</option>
              <option value="02:00 pm - 03:00 pm">02:00 pm - 03:00 pm</option>
              <option value="03:00 pm - 04:00 pm">03:00 pm - 04:00 pm</option>
              <option value="04:00 pm - 05:00 pm">04:00 pm - 05:00 pm</option>
              
            </Form.Select>
          </Form.Group>

          <div style={{ textAlign: "center" }}>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default BookingForm;
