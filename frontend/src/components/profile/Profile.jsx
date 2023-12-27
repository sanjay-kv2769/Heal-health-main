import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
// import image from "../images/avat.jpg";
import axios from "axios";
import {  useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";



function Profile() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  console.log(role);
  const [patient, setPatient] = useState([]);
  useEffect(() => {
    if (role == 2) {
      if (token !== null) {
        axios
          .get("http://localhost:9090/api/profile/user-profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            console.log(response);
            setPatient(response.data.data);
            console.log(response.data.data);
          });
      }
    }
    if (role == 3) {
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
    }
    if (role == 1) {
      navigate("/")
    }
  }, []);
  return (
    <div>
      <Card
        style={{
          width: "18rem",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "60px",
          textAlign: "center",
        }}
      >
        <Card.Img variant="top" src={`/upload/${patient.image}`} 
        onError={(event) =>
          event.target.src ="/upload/avat.jpg"
               
          }/>
        <Card.Body>
          <Card.Title>Name:{patient.name}</Card.Title>
          <Card.Body>
            <Card.Title>Username:{patient.username}</Card.Title>
          </Card.Body>
        </Card.Body>
        <ListGroup className="list-group-flush">
          {/* <ListGroup.Item>{patient.phone}</ListGroup.Item>
        <ListGroup.Item>{patient.gender}</ListGroup.Item>
        <ListGroup.Item>{patient.experience}</ListGroup.Item>
        <ListGroup.Item>{patient.email}</ListGroup.Item> */}
          <ListGroup.Item>
          {patient.address != null ? (
              <>
                Address:{patient.address}
                <br></br>
              </>
            ) : (
              ""
            )}
            <br></br>
            Phone:{patient.phone}
            <br></br>
            {patient.email != null ? (
              <>
                Email:{patient.email}
                <br></br>
              </>
            ) : (
              ""
            )}
            {patient.gender != null ? (
              <>
                Gender:{patient.gender}
                <br></br>
              </>
            ) : (
              ""
            )}
            {patient.experience != null ? (
              <>
                Experience:{patient.experience}
                <br></br>
              </>
            ) : (
              ""
            )}
          </ListGroup.Item>
          {/* <ListGroup.Item>{item.doctor_name}</ListGroup.Item> */}
        </ListGroup>
        {/* <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body> */}
      <Link to={`/edit-profile/${patient._id}`}>
              <Button variant="primary">Edit</Button>
            </Link>
      </Card>
    </div>
  );
}

export default Profile;
