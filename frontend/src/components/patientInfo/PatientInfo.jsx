import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
// import Button from "react-bootstrap/Button";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
// import { useNavigate, useParams } from "react-router-dom";


function PatientInfo() {
  // const navigate = useNavigate();
  // const { id } = useParams();
  const token = localStorage.getItem('token')
  const [patient, setPatient] = useState([]);
  useEffect(() => {
    if(token!==null){

      axios.get("http://localhost:9090/api/lab/view-patient",{
        headers:{
          Authorization:`Bearer ${token}`
        }
      }).then((response) => {
        console.log(response);
        setPatient(response.data.data);
      });
    }
  }, [token]);
  return (
    <div className="row" style={{display:'flex',justifyContent:'space-around',marginTop:'30px'}}>
      
      {patient.map((item) => (
        
        <Card style={{ width: "18rem" }}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h5>Name:</h5>
              {item.name}
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>ID:</h5>
              {item.patient_id}
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>Test:</h5>
              {item.test}
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>Blood Group:</h5>
              {item.blood_group}
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>Doctor:</h5>
              {item.doctor_name}
            </ListGroup.Item>
          </ListGroup>
        </Card>
        
      ))}
    </div>
  );
}

export default PatientInfo;
