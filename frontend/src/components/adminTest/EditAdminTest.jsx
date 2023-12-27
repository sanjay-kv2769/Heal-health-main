import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";

function EditAdminTest() {
  const navigate = useNavigate();
  const { id } = useParams();
  const token = localStorage.getItem('token')
  console.log(token);
  const [patient, setPatient] = useState([]);
  

  useEffect(() => {
    if(token!==null){
    axios.get("http://localhost:9090/api/test/view-test",{
      headers:{
        Authorization:`Bearer ${token}`
      }
    }).then((response) => { 
     
      console.log(response);
      setPatient(response.data.data);
    });
    
    

    
  }
  }, [id]);

  const handleDelete = (idd) => {
    // event.preventDefault();
    axios
      .delete(`http://localhost:9090/api/test/delete-test/${idd}  `)
      .then((response) => {
        console.log(response);
        navigate("/edit-admtest");
        window.location.reload()
      });
  };

  

  console.log(patient);

  return (
    <div
      className="row"
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "30px",
        marginBottom: "30px",
        maxWidth:"1361px"
      }}
    >
      {patient.map((item) => (
        <Card style={{ width: "18rem",marginBottom:'30px' }}>
          

          <ListGroup variant="flush">
          
            <ListGroup.Item>
              <h5>Test:</h5>
              {item.test}
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>Amount:</h5>
              {item.amount}
            </ListGroup.Item>
            
            
            
            
          </ListGroup>
          <div style={{ textAlign: "center",display:'flex',justifyContent:'space-around' }}>
            
                
            <Button variant="danger" onClick={() => handleDelete(item._id)}>
              Delete
            </Button>
          </div>
        </Card>
      ))}
      
    </div>
  );
}

export default EditAdminTest;