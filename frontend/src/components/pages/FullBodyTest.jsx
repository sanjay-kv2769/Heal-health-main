import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function FullBodyTest() {
  const {test}=useParams()
  console.log(test);
  const[patient,setPatient]=useState([])
  // const[operation,setOperation]=useState({
  //   arogya:'arogya',thyroid:'thyroid',lung_and_body:"lung & body",Renal_care:'renal care'
  // })
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
        <h1 style={{ color: "grey", marginTop: "20px",textAlign: "center" }}>Body Tests</h1>
        <h4 >
          What is a Body Health Checkup?
        </h4>
        <div style={{ textAlign: "left", marginTop:'10px' }}>
          <i><p>
            1. A comprehensive, body checkup is an extensive body
            checkup that diagnoses a healthy body and evaluates its health
            status thoroughly.
          </p></i>
         <i> <p>
            2. It helps in the overall assessment of all organs and systems of
            the body.
          </p></i>
          <i><p>
            3. A full body health checkup includes a wide range of tests that
            give an insight into the current health condition of a person.
          </p></i>
          <i><p>
            4. It covers more than 60 tests to confirm the healthiness of each
            organ of the body, including kidneys, heart, lungs, liver, thyroid,
            and more.
          </p></i>
        </div>
        <div style={{marginTop:'20px'}}>
        <h4 >
        What Tests are Included in a Body Checkup Package?
        </h4>
        <i><p style={{marginTop:'10px'}}>
        Body checkup includes the Haemogram, Blood Sugar, Pulmonary Function Test, Lipid profile, Liver profile, Thyroid profile, Vitamin Check, CT Calcium score, ECG, Chest X-ray, BMI, 2D-ECHO, USG Abdomen and Pelvis, Pap Smear for females, Cardiac Test, Lungs Function Test, consultations, counseling, and more.
        </p></i>
        </div>
      </div>
      <div  style={{marginTop:'50px',textAlign:'center'}}>
      <div style={{marginTop:'50px'}}>


      {patient.map((item) => (
      <Card className="bg-dark text-white" style={{ width: '28rem',marginLeft:'auto',marginRight:'auto',marginTop:'25px' }}>
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
    </div>
  )
}

export default FullBodyTest