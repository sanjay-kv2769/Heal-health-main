import React from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


function Demo() {
  return (
    <div>
        <Form className="m-5">
        <Form.Group className=" mb-3" controlId="formBasicEmail">
          <Form.Label>
            <b>Name</b>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            name="name"
            
          />
        </Form.Group>

        <Form.Group className=" mb-3" controlId="formBasicEmail">
          <Form.Label>
            <b>Patient ID</b>{" "}
          </Form.Label>
          <Form.Control
            type="number"
            placeholder="ID"
            name="patient_id"
            
          />
        </Form.Group>

        <Form.Group className=" mb-3" controlId="formBasicEmail">
          <Form.Label>
            <b>Test</b>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Test"
            name="test"
            
          />
        </Form.Group>

        <Form.Group className=" mb-3" controlId="formBasicEmail">
          <Form.Label>
            <b>Blood Group</b>{" "}
          </Form.Label>
          {/* <Form.Control
            type="text"
            placeholder="Enter Blood group"
            name="blood_group"
            
          /> */}
          
          <Form.Select
              
              type="text"
              placeholder="Enter Blood group"
              name="blood_group"
            >
              <option value="O">O</option>
              <option value="Female">Female</option>
            </Form.Select>
          

        </Form.Group>

        <Form.Group className=" mb-3" controlId="formBasicEmail">
          <Form.Label>
            <b>Doctor</b>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Doctor Name"
            name="doctor_name"
            
          />
        </Form.Group>

        <Form.Group className=" mb-3" controlId="formBasicEmail">
          <Form.Label>
            <b>Image</b>
          </Form.Label>
          <Form.Control
            type="file"
            placeholder="Upload image"
            name="image"
          />
        </Form.Group>

        <div style={{ textAlign: "center" }}>
          <Button variant="primary" type="submit" >
            Submit
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default Demo