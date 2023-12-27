import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import image from "../images/FORM.jpg";
// import { v4 as uuid } from "uuid";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";

function PatientRegistration() {
  const navigate = useNavigate();
  const [patient, setPatient] = useState({});
 
  const inputChange = (event) => {
    const { name, value } = event.target;
    setPatient({ ...patient, [name]: value });
  };
  const handlePhoto = (event) => {
    setPatient({ ...patient, image: event.target.files[0] });
  };
  // console.log(patient.image);

  const handleSubmit = (event) => {
    event.preventDefault();

   
    
    const formData = new FormData();
    formData.append("image", patient.image);
    formData.append("name", patient.name);
    formData.append("patient_id", patient.patient_id);
    formData.append("test", patient.test);
    formData.append("blood_group", patient.blood_group);
    formData.append("doctor_name", patient.doctor_name);

    axios
      .post("http://localhost:9090/api/lab/add-patient", formData)
      .then((response) => {
        console.log(response);
        setPatient(response.data.data);
      });
      if (!patient.name) {
        toast.warning("Name cannot be empty");
        setTimeout(() => {}, 2000);
      }
      if (!patient.test) {
        toast.warning("Test cannot be empty");
        setTimeout(() => {}, 2000);
      }
       if (!patient.blood_group) {
        toast.warning("Blood Group cannot be empty");
        setTimeout(() => {}, 2000);
      }
      if (!patient.doctor_name) {
        toast.warning("Doctor Name cannot be empty");
        setTimeout(() => {}, 2000);
      } 
      else {
        toast.success("Patient added succesfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setTimeout(()=>{
          navigate("/");
        },3000)
        
  
      }
    
    // navigate("/");
  };

  return (
    <>
    <ToastContainer
position="top-left"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
    <div style={{ backgroundImage: `url(${image})` }}>
      <div style={{ width: "600px", marginLeft: "auto", marginRight: "auto" }}>
        {/* <div style={{backgroundColor:'grey'}}> */}
        <h1
          style={{ textAlign: "center", color: "GrayText", marginTop: "15px" }}
        >
          Patient Registration Form
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

          {/* <Form.Group className=" mb-3" controlId="formBasicEmail">
          <Form.Label>
            <b>Patient ID</b>{" "}
          </Form.Label>
          <Form.Control
            type="number"
            placeholder="ID"
            name="patient_id"
            onChange={inputChange}
          />
        </Form.Group> */}

          <Form.Group className=" mb-3" controlId="formBasicEmail">
            <Form.Label>
              <b>Test</b>
            </Form.Label>
            {/* <Form.Control
            type="text"
            placeholder="Test"
            name="test"
            onChange={inputChange}
          /> */}

            <Form.Select
              type="text"
              placeholder="Test"
              name="test"
              onChange={inputChange}
            >
              {" "}
              <option value="">Select</option>
              <option value="Arogya">Arogya</option>
              <option value="Thyroid">Thyroid</option>
              <option value="Lung & Body">Lung & Body</option>
              <option value="Renal Care">Renal Care</option>
              <option value="Liver Function Test">Liver function Test</option>
              <option value="RBS">RBS</option>
              <option value="HBA1C">HBA1C</option>
              <option value="Anti-HCV">Anti-HCV</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className=" mb-3" controlId="formBasicEmail">
            <Form.Label>
              <b>Blood Group</b>{" "}
            </Form.Label>

            <Form.Select
              type="text"
              placeholder="Enter Blood group"
              name="blood_group"
              onChange={inputChange}
            >
              <option value="">Select</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className=" mb-3" controlId="formBasicEmail">
            <Form.Label>
              <b>Doctor</b>
            </Form.Label>
            {/* <Form.Control
            type="text"
            placeholder="Doctor Name"
            name="doctor_name"
            onChange={inputChange}
          /> */}

            <Form.Select
              type="text"
              placeholder="Doctor Name"
              name="doctor_name"
              onChange={inputChange}
            >
              <option value="">Select</option>
              <option value="Dr. Abraham Qureshi">Dr. Abraham Qureshi</option>
              <option value="Dr. Rajeev Kumar">Dr. Rajeev Kumar</option>
              <option value="Dr. Arya P">Dr. Arya P</option>
              <option value="Dr. Althaf Muhammed">Dr. Althaf Muhammed</option>
              <option value="Dr. Adil Rahman">Dr. Adil Rahman</option>
              <option value="Dr. Shilpa S">Dr. Shilpa S</option>
              <option value="Dr. Saranya Anil">Dr. Saranya Anil</option>
              <option value="Dr. Abdul Hameed">Dr. Abdul Hameed</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className=" mb-3" controlId="formBasicEmail">
            <Form.Label>
              <b>Image</b>
            </Form.Label>
            <Form.Control
              type="file"
              placeholder="Upload image"
              name="image"
              onChange={handlePhoto}
            />
          </Form.Group>

          <div style={{ textAlign: "center" }}>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
    </>

  );
}

export default PatientRegistration;
