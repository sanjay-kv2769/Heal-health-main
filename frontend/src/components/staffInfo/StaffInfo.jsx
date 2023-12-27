import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";

function StaffInfo() {
    const navigate = useNavigate();
  const { id } = useParams();
  const token = localStorage.getItem('token')
  console.log(token);
  const [patient, setPatient] = useState([]);
  

  useEffect(() => {
    if(token!==null){
    
    axios.get("http://localhost:9090/api/lab/view-reg-staff",{
      headers:{
        Authorization:`Bearer ${token}`
      }
    }).then((response) => {
     
      console.log(response);
      setPatient(response.data.data);
    });
  }
  }, [id]);

  
   
  const handleRemove = (idd) => {
    // event.preventDefault();
    axios
      .delete(`http://localhost:9090/api/lab/delete-reg-staff/${idd}`)
      .then((response) => {
        console.log(response);
        navigate("/s-info");
        window.location.reload()
      });
  };

  console.log(patient);

  return (
    <div>
        
       <div
      className="row"
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "30px",
        marginBottom: "30px",
      }}
    >
      {
      patient&&patient.length>0

      ?patient.map((item) => (
        <Card style={{ width: "18rem" }}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h5>Name:</h5>
              {item.name}
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>Gender:</h5>
              {item.gender}
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>Phone:</h5>
              {item.phone}
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>Experience:</h5>
              {item.experience}
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>Email:</h5>
              {item.email}
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>City:</h5>
              {item.city}
            </ListGroup.Item>
          
          </ListGroup>
          <div style={{ textAlign: "center",display:'flex',justifyContent:'space-around' }}>
            <Link to={`/s-admedit/${item._id}`}>
              <Button variant="primary">Edit</Button>
            </Link>
                
            <Button variant="danger" onClick={() => handleRemove(item._id)}>
              Delete
            </Button>
          </div>
        </Card>
      )):"No Staff Found"}
    </div>
    </div>
  )
}

export default StaffInfo


