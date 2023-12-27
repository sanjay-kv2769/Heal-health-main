import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

import {  useNavigate } from "react-router-dom";

function StaffPatientBooking() {
  const navigate = useNavigate();
//   const { id } = useParams();
  const token = localStorage.getItem("token");
  console.log(token);
  const [patient, setPatient] = useState([]);

  useEffect(() => {
    if (token !== null) {
      axios
        .get("http://localhost:9090/api/patient-booking/view-patient", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response);
          setPatient(response.data.data);
        });
    }
  }, []);

//   const handleDelete = (idd) => {
//     // event.preventDefault();
//     axios
//       .delete(
//         `http://localhost:9090/api/patient-booking/delete-patient/${idd}  `
//       )
//       .then((response) => {
//         console.log(response);
//         navigate("/admbooking");
//         window.location.reload();
//       });
//   };
    navigate("/stfbooking");
  console.log(patient);

  return (
    <div
      className="row"
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "30px",
        marginBottom: "30px",
        maxWidth: "1361px",
      }}
    >{patient && patient.length > 0
      ?patient.map((item) => (
        <Card style={{ width: "18rem", marginBottom: "30px" }}>
          <Card.Img
            variant="top"
            src={`/upload/${patient.image}`}
            onError={(event) => (event.target.src = "/upload/avat.jpg")}
          />

          <ListGroup variant="flush">
          <img src={`/upload/${item.image}`} alt="" />
            
            <ListGroup.Item>
              <h5>Name:</h5>
              {item.name}
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>Age:</h5>
              {item.age}
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>Booking ID:</h5>
              {item.booking_id}
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>Test:</h5>
              {item.test}
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>Date:</h5>
              {item.date}
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>Time:</h5>
              {item.time}
            </ListGroup.Item>
            
          </ListGroup>
          
          <div
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            
          </div>
        </Card>
      ))
      : "No Bookings found"}
    </div>
  );
}

export default StaffPatientBooking;
