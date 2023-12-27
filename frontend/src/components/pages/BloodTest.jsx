import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link,useParams } from "react-router-dom";
import axios from "axios";

function BloodTest() {
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
    <div style={{maxWidth:'1250px',marginLeft:'50px'}}>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ color: "grey", marginTop: "20px" }}>Blood Tests</h1>
        <div style={{textAlign:'left'}}>
          
        </div>
        <h4 style={{ textAlign:'left' }}>
        What are blood tests?
        </h4>
        <div style={{ textAlign: "left", marginTop:'20px' }}>
          <i><p>
          Blood tests are common medical tests. You may have a blood test as part of a routine physical examination or because you have certain symptoms.
          </p></i>
          <i><p>
          There are many different blood tests. Some tests focus on your blood cells and platelets. Some evaluate substances in your blood such as electrolytes, proteins and hormones. Others measure certain minerals in your blood.
          </p></i>
          <i><p>
          Regardless of why you’re having a blood test, it’s important to remember that blood tests help healthcare providers diagnose health issues. But blood test results aren’t diagnoses. An abnormal blood test result may not mean you have a serious medical condition.
          </p></i>
          <h4 style={{ marginTop:'20px' }}>
          What are the most common blood tests?

        </h4>
        <i><p>
        There are many different blood tests. Some tests — such as complete blood count tests, basic metabolic panels, complete metabolic panels and electrolyte panels — check on several different elements in your blood at the same time. Other blood tests look for very specific elements in your blood.
        </p></i>
          
        </div>
        <div style={{marginTop:'20px',textAlign:"left"}}>
        
         <h4>What are they used for?</h4>
         
         <i><p><h5>Liver function tests are most often used to:</h5></p></i>
         
         <i><p><li>Help diagnose liver diseases, such as hepatitis</li></p></i>
         <i><p><li>Monitor treatment of liver disease. These tests can show how well the treatment is working.</li></p></i>
         <i><p><li>Check how badly a liver has been damaged or scarred by disease, such as cirrhosis</li></p></i>
         <i><p><li>Monitor side effects of certain medicines</li></p></i>
         
        </div>
        
      </div>
      <div style={{marginTop:'30px'}}>
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
  );
}

export default BloodTest;
