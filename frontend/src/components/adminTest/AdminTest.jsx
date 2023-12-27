import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import image from "../images/FORM.jpg";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminTest() {
    const navigate = useNavigate();
  const [patient, setPatient] = useState({});

  const inputChange = (event) => {
    const { name, value } = event.target;
    setPatient({ ...patient, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:9090/api/test/add-test", patient)
      .then((response) => {
        console.log(response);
        setPatient(response.data.data);
      });
    navigate("/");
  };
  return (
    <div style={{ backgroundImage: `url(${image})` }}>
      <div style={{ width: "600px", marginLeft: "auto", marginRight: "auto" }}>
        {/* <div style={{backgroundColor:'grey'}}> */}
        <h1
          style={{ textAlign: "center", color: "GrayText", marginTop: "15px" }}
        >
          Add Test
        </h1>
        <Form className="m-5">
          <Form.Group className=" mb-3" controlId="formBasicEmail">
            <Form.Label>
              <b>Package Name</b>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter package Name"
              name="test"
              onChange={inputChange}
            />
          </Form.Group>

          

          <Form.Group className=" mb-3" controlId="formBasicEmail">
            <Form.Label>
              <b>Amount</b>
            </Form.Label>

            <Form.Control
              type="text"
              placeholder="amount"
              name="amount"
              onChange={inputChange}
            >
              
            </Form.Control>
          </Form.Group>

          <Form.Group className=" mb-3" controlId="formBasicEmail">
            <Form.Label>
              <b>Category</b>
            </Form.Label>

            <Form.Select
              type="text"
              placeholder="*"
              name="category"
              onChange={inputChange}
            >
              <option value="">Select</option>
            <option value="Body Tests">Body Tests</option>
            <option value="Liver Function Test">Liver Function Test</option>
            <option value="Blood Test">Blood Test</option>
              
            </Form.Select>
          </Form.Group>

          

          

          <div style={{ textAlign: "center" }}>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default AdminTest