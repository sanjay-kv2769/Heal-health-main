import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import image from "../images/FORM.jpg";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";




function LoginRegistration() {
    const navigate = useNavigate();
  const [patient, setPatient] = useState({
  });

  const inputChange = (event) => {
    const { name, value } = event.target;
    setPatient({ ...patient, [name]: value });
  };
  
  const handlePhoto = (event) => {
    setPatient({...patient, image: event.target.files[0]});
  }

  const handleSubmit = (event) => {

    if (!patient.name) {
      toast.warning("Name cannot be empty");
      setTimeout(() => {}, 1000);
    }
    else if (!patient.address) {
      toast.warning("address cannot be empty",{
        position: toast.POSITION.TOP_RIGHT
      });
      setTimeout(() => {}, 1000);
    }
    else if (!patient.phone) {
      toast.warning("phone cannot be empty");
      setTimeout(() => {}, 1000);
    }
    else if (!patient.username) {
      toast.warning("Username cannot be empty");
      setTimeout(() => {}, 1000);
    }
    else if (!patient.password) {
      toast.warning("Password cannot be empty");
      setTimeout(() => {}, 1000);
    }
    else {
      toast.success("Patient Registered Succesfully", {
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
    event.preventDefault();
    const formData = new FormData();
        formData.append('image', patient.image);
        formData.append('name', patient.name);
        formData.append('address', patient.address);
        formData.append('phone', patient.phone);
        formData.append('username', patient.username);
        formData.append('password', patient.password);
        
    axios
      .post("http://localhost:9090/api/registration", formData)
      .then((response) => {
        console.log(response);
        setPatient(response.data.data);
      });
      navigate("/");
  };
  console.log(patient);

  return (
    
    <div style={{ backgroundImage: `url(${image})`}}>
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
      <div style={{ width:"600px",marginLeft:'auto',marginRight:'auto' }}>
        <div><h1
          style={{ textAlign: "center", color: "GrayText", marginTop: "15px" }}
        >
          Registration
        </h1></div>
        
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
              <b>Address</b>{" "}
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="*"
              name="address"
              onChange={inputChange}
              style={{height:'70px'}}
            />
          </Form.Group>

          <Form.Group className=" mb-3" controlId="formBasicEmail">
            <Form.Label>
              <b>Phone</b>
            </Form.Label>
            <Form.Control
              type="number"
              placeholder="*"
              name="phone"
              onChange={inputChange}
            />
          </Form.Group>

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
            <Button
              variant="primary"
              type="submit"
                onClick={handleSubmit}
            >
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default LoginRegistration;
