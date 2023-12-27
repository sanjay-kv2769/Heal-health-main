import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import image from "../images/FORM.jpg";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [patient, setPatient] = useState({});

  const inputChange = (event) => {
    const { name, value } = event.target;
    setPatient({ ...patient, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios 
      .post("http://localhost:9090/api/login", patient)
      .then((response) => {
        console.log(response);
        setPatient(response.data.data);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role", response.data.userRole);
        navigate("/profile");
    window.location.reload()  
    })
      .catch((error) => {
        console.log(error);
      });

  };

  console.log(patient);

  return (
    <div style={{ backgroundImage: `url(${image})`,height:'500px' }}>
      <div style={{ width:"600px",marginLeft:'auto',marginRight:'auto' }}>
        <h1
          style={{ textAlign: "center", color: "GrayText", marginTop: "15px" }}
        >
          Login
        </h1>
        <Form className="m-5">
          <Form.Group className=" mb-3" controlId="formBasicEmail">
            <Form.Label>
              <b>User Name</b>{" "}
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="*"
              name="username"
              onChange={inputChange}
              
            />
          </Form.Group>

          <Form.Group className=" mb-3" controlId="formBasicEmail">
            <Form.Label>
              <b>Password</b>
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              name="password"
              onChange={inputChange}
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
  );
}

export default Login;
