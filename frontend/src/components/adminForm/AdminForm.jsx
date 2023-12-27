import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import image from "../images/FORM.jpg";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";



function AdminForm() {
    const navigate = useNavigate();
  const [patient, setPatient] = useState({
  });

  const inputChange = (event) => {
    const { name, value } = event.target;
    setPatient({ ...patient, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:9090/api/patient-booking", patient)
      .then((response) => {
        console.log(response);
        setPatient(response.data.data);
      });
      navigate("/");
  };
  console.log(patient);

  return (
    <div style={{ backgroundImage: `url(${image})` }}>
      <div style={{ width:"600px",marginLeft:'auto',marginRight:'auto' }}>
        <h1
          style={{ textAlign: "center", color: "GrayText", marginTop: "15px" }}
        >
          Admin
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
              <b>email</b>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="@mail.com"
              name="email"
              onChange={inputChange}
            />
          </Form.Group>

          <Form.Group className=" mb-3" controlId="formBasicEmail">
            <Form.Label>
              <b>City</b>
            </Form.Label>
            {/* <Form.Control
              type="text"
              placeholder="*"
              name="city"
              onChange={inputChange}
            /> */}
            <Form.Select
              type="text"
              placeholder="*"
              name="city"
              onChange={inputChange}
            >
              <option style={{width:'150px'}} value="Calicut">Calicut</option>
              <option value="Kannur">Kannur</option>
              <option value="Malappuram">Malappuram</option>
              <option value="Wayanad">Wayanad</option>
              <option value="Kollam">Kollam</option>
              <option value="Kottayam">Kottayam</option>
              <option value="Alappuzha">Alappuzha</option>
              <option value="Idukki">Idukki</option>
              <option value="Palakkad">Palakkad</option>
              <option value="Trivandrum">Trivandrum</option>
              <option value="Trichur">Trichur</option>
              <option value="Ernakulam">Ernakulam</option>
              <option value="Patanamthitta">Pathanathitta</option>
              <option value="Kasargod">Kasargod</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className=" mb-3" controlId="formBasicEmail">
            <Form.Label>
              <b>Admin</b>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="*"
              name="admin"
              onChange={inputChange}
            />
          </Form.Group>

          <Form.Group className=" mb-3" controlId="formBasicEmail">
            <Form.Label>
              <b>User Name</b>
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

export default AdminForm;
