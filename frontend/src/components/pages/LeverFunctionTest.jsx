import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';



function LeverFunctionTest() {
  const {test}=useParams()
  console.log(test);
  const[patient,setPatient]=useState([])

  useEffect(()=>{
    axios
      .get(`http://localhost:9090/api/test/view-test/${test}`, patient)
      .then((response) => {
        console.log(response);
        setPatient(response.data.data);
      });
  },[])

  return (
    <div style={{maxWidth:'1250px',marginLeft:'20px'}}>
        <div>
        <h1 style={{ color: "grey", marginTop: "20px",textAlign: "center" }}>Liver Function Tests</h1>
        <h4>
        What are liver function tests?
        </h4>
        <div style={{ textAlign: "left", marginTop:'20px' }}>
          <i><p>
          Liver function tests check the levels of certain enzymes and proteins in your blood. Levels that are higher or lower than usual can mean liver problems. The pattern and degree of elevation of these tests along with the overall clinical picture can provide hints to the underlying cause of these problems.
          </p></i>
          
        </div>
        <div style={{marginTop:'20px'}}>
         <h4 >What are they used for?</h4>
        <i> <p><h5>Liver function tests are most often used to:</h5></p></i>
        <i><p><li>Help diagnose liver diseases, such as hepatitis</li></p></i>
        <i><p><li>Monitor treatment of liver disease. These tests can show how well the treatment is working.</li></p></i>
        <i><p><li>Check how badly a liver has been damaged or scarred by disease, such as cirrhosis</li></p></i>
        <i><p><li>Monitor side effects of certain medicines</li></p></i>
        
        </div>
        
      </div>
      <div style={{marginTop:'20px'}}>
      {patient.map((item) => (
      <Card className="bg-dark text-white" style={{ width: '28rem',marginLeft:'auto',marginRight:'auto',marginTop:'40px' }}>
      <Card.Body>
        <Card.Title>{item.test}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"> Healthy 2023 full body checkup</Card.Subtitle>
        <Card.Text>
        {item.amount}
        <Link to={`/specific-test/${item.test}`}>
          {/* <h1>{operation.test}</h1> */}
        <Button variant="primary" style={{marginLeft:'180px'}}>Book Now!</Button></Link>
        </Card.Text>
        
        <Card.Link href="#">Includes 90 tests</Card.Link>
        <Card.Link href="#">Show all</Card.Link>
       
      </Card.Body>
    </Card>
      ))}
      </div>

    </div>
  )
}

export default LeverFunctionTest