import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import image from "../images/FORM.jpg";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function EditAdminStaff() {
  const navigate = useNavigate();
  const { id } = useParams();
  const token = localStorage.getItem("token");
  console.log(id);

  const [patient, setPatient] = useState({
  
  });

  useEffect(() => {
      axios.get(`http://localhost:9090/api/lab/view-reg-staff/${id}`,{
        headers: {
            Authorization: `Bearer ${token}`,
          },
      })
      
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
        .post(`http://localhost:9090/api/lab/update-reg-staff/${id}`,patient)
        .then((response) => {
          console.log(response);
          setPatient(response.data.data);
        });
        navigate("/s-info");
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
            <b>Gender</b>{" "}
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="*"
            name="gender"
            value={patient.gender}
            onChange={inputChange}
          />
        </Form.Group>

        <Form.Group className=" mb-3" controlId="formBasicEmail">
          <Form.Label>
            <b>Phone</b>
          </Form.Label>
          <Form.Control
            type="number"
            placeholder="phone"
            name="phone"
            value={patient.phone}
            onChange={inputChange}
          />
        </Form.Group>

        <Form.Group className=" mb-3" controlId="formBasicEmail">
          <Form.Label>
            <b>Experience</b>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="*"
            name="experience"
            value={patient.experience}
            onChange={inputChange}
          />
        </Form.Group>

        <Form.Group className=" mb-3" controlId="formBasicEmail">
          <Form.Label>
            <b>Email</b>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="*"
            name="email"
            value={patient.email}
            onChange={inputChange}
          />
        </Form.Group>

        <Form.Group className=" mb-3" controlId="formBasicEmail">
          <Form.Label>
            <b>City</b>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="phone"
            name="city"
            value={patient.city}
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

export default EditAdminStaff;
