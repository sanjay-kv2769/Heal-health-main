import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import image from "../images/FORM.jpg";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function EditPatientProfile() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const { id } = useParams();
  console.log(id);

  const [patient, setPatient] = useState({
    username: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:9090/api/staff_profile/staff-profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        setPatient(response.data.data);
        console.log(response.data.data);
      });
  }, []);

  const inputChange = (event) => {
    const { name, value } = event.target;
    setPatient({ ...patient, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        `http://localhost:9090/api/staffregistration/update/staff-profile/${patient._id}`,
        patient
      )
      .then((response) => {
        console.log(response);
        setPatient(response.data.data);
      });
    navigate("/profile");
  };
  return (
    <div style={{ backgroundImage: `url(${image})` }}>
      <div style={{ width: "600px", marginLeft: "auto", marginRight: "auto" }}>
        {/* <div style={{backgroundColor:'grey'}}> */}
        <h1
          style={{ textAlign: "center", color: "GrayText", marginTop: "15px" }}
        >
          Edit Profile
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
              value={patient.name}
              onChange={inputChange}
            />
          </Form.Group>

          <Form.Group className=" mb-3" controlId="formBasicEmail">
            <Form.Label>
              <b>Gender</b>
            </Form.Label>
            <Form.Select
              type="text"
              placeholder="select a gender"
              name="time"
              value={patient.gender}
              onChange={inputChange}
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className=" mb-3" controlId="formBasicEmail">
            <Form.Label>
              <b>Phone</b>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter phone"
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
              type="number"
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
              placeholder="Enter new Email"
              name="email"
              value={patient.email}
              onChange={inputChange}
            />
          </Form.Group>

          {/* <Form.Group className=" mb-3" controlId="formBasicEmail">
            <Form.Label>
              <b>City</b>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter city"
              name="phone"
              value={patient.city}
              onChange={inputChange}
            />
          </Form.Group> */}

          <Form.Group className=" mb-3" controlId="formBasicEmail">
            <Form.Label>
              <b>Username</b>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter New Username"
              name="username"
              value={patient.username}
              onChange={inputChange}
            />
          </Form.Group>

          {/* <Form.Group className=" mb-3" controlId="formBasicEmail">
            <Form.Label>
              <b>Preffered Time</b>
            </Form.Label>

            <Form.Select
              type="text"
              placeholder="select a time range"
              name="time"
              value={patient.time}
              onChange={inputChange}
            > 
              <option value="09:00 am - 10:00 am">09:00 am - 10:00 am</option>
              <option value="10:00 am - 11:00 am">10:00 am - 11:00 am</option>
              <option value="11:00 am - 12:00 pm">11:00 am - 12:00 pm</option>
              <option value="12:00 pm - 01:00 pm">12:00 pm - 01:00 pm</option>
              <option value="02:00 pm - 03:00 pm">02:00 pm - 03:00 pm</option>
              <option value="03:00 pm - 04:00 pm">03:00 pm - 04:00 pm</option>
              <option value="04:00 pm - 05:00 pm">04:00 pm - 05:00 pm</option>
              
            </Form.Select>
          </Form.Group> */}

          <div style={{ textAlign: "center" }}>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </Form>
        ))
      </div>
    </div>
  );
}

export default EditPatientProfile;
