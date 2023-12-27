import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import image from "../images/FORM.jpg";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function EditPatient() {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  const [patient, setPatient] = useState({
  
  });

  useEffect(() => {
      axios.get(`http://localhost:9090/api/lab/view-patient/${id}`)
      .then((response) => {
        console.log(response);
        setPatient(response.data.data)
  })
    }, [id]);

  const inputChange = (event) => {
    const { name, value } = event.target;
    setPatient({ ...patient, [name]: value });
  };

    const handleSubmit = (event) => {
      event.preventDefault();
      axios
        .post(`http://localhost:9090/api/lab/update-patient/${id}`,patient)
        .then((response) => {
          console.log(response);
          setPatient(response.data.data);
        });
        navigate("/admpatient");
    };
  return (
    <div style={{ backgroundImage: `url(${image})`}}>
    <div style={{ width:"600px",marginLeft:'auto',marginRight:'auto' }}>
      <h1 style={{ textAlign: "center", color: "GrayText", marginTop: "30px" }}>
        Heal Health Labs
      </h1>
      <Form className="m-5" onSubmit={handleSubmit}>
        <Form.Group className=" mb-3" controlId="formBasicEmail">
          <Form.Label>
            <b>Name</b>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            name="name"
            value={patient.name}
            onChange={inputChange}
          />
        </Form.Group>

        <Form.Group className=" mb-3" controlId="formBasicEmail">
          <Form.Label>
            <b>Patient ID</b>{" "}
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="ID"
            name="patient_id"
            value={patient.patient_id}
            onChange={inputChange}
          />
        </Form.Group>

        <Form.Group className=" mb-3" controlId="formBasicEmail">
          <Form.Label>
            <b>Test</b>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Test"
            name="test"
            value={patient.test}
            onChange={inputChange}
          />
        </Form.Group>

        <Form.Group className=" mb-3" controlId="formBasicEmail">
          <Form.Label>
            <b>Blood Group</b>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Blood group"
            name="blood_group"
            value={patient.blood_group}
            onChange={inputChange}
          />
        </Form.Group>

        <Form.Group className=" mb-3" controlId="formBasicEmail">
          <Form.Label>
            <b>Doctor</b>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Doctor Name"
            name="doctor_name"
            value={patient.doctor_name}
            onChange={inputChange}
          />
        </Form.Group>
        <div style={{ textAlign: "center" }}>
          <Button variant="primary" type="submit" >
            Submit
          </Button>
        </div>
      </Form>
    </div>
    </div>
  );
}

export default EditPatient;
