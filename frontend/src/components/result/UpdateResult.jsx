import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import image from "../images/FORM.jpg";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function UpdateResult() {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  const [patient, setPatient] = useState({
  
  });

  useEffect(() => {
      axios.get(`http://localhost:9090/api/patient-booking/view-patient/${id}`)
      .then((response) => {
        console.log(response);
        setPatient(response.data.data)
  })
    }, [id]);

  const inputChange = (event) => {
    const { name, value } = event.target;
    setPatient({ ...patient, [name]: value });
  };
  const handlePhoto = (event) => {
    setPatient({ ...patient, result: event.target.files[0] });
  };
  console.log(patient.result);

    const handleSubmit = (event) => {
      event.preventDefault();
console.log(patient.result);
      const formData = new FormData(); 
    formData.append("result", patient.result);
    formData.append("name", patient.name);
    formData.append("age", patient.age);
    formData.append("test", patient.test);
    formData.append("date", patient.date);
    formData.append("time", patient.time);

      axios
        .post(`http://localhost:9090/api/patient-booking/update-patient/result/${id}`,formData)
        .then((response) => {
          console.log(response);
          setPatient(response.data.data);
        });
        navigate("/admbooking");
    };
  return (
    <div style={{ backgroundImage: `url(${image})` }}>
      <div style={{ width: "600px", marginLeft: "auto", marginRight: "auto" }}>
        {/* <div style={{backgroundColor:'grey'}}> */}
        <h1
          style={{ textAlign: "center", color: "GrayText", marginTop: "15px" }}
        >
          Result Update
        </h1>
        <Form className="m-5" encType="multipart/formdata">
          <Form.Group className=" mb-3" controlId="formBasicEmail">
            <Form.Label>    
              <b>Name</b>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              name="name"
              value={patient.name}
              disabled
            //   onChange={inputChange}
            />
          </Form.Group>

          <Form.Group className=" mb-3" controlId="formBasicEmail">
            <Form.Label>
              <b>Age</b>
            </Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter age"
              name="age"
              value={patient.age}
              disabled
            //   onChange={inputChange}
            />
          </Form.Group>

          <Form.Group className=" mb-3" controlId="formBasicEmail">
            <Form.Label>
              <b>Test</b>
            </Form.Label>

            <Form.Select
              type="text"
              placeholder="Test"
              name="test"
              value={patient.test}
              disabled
            //   onChange={inputChange}
            >
              <option value="Arogya">Arogya</option>
              <option value="Thyroid">Thyroid</option>
              <option value="Lungs & Body">Lungs & Body</option>
              <option value="Renal Care">Renal Care</option>
              <option value="Liver Function Test">Liver function Test</option>
              <option value="RBS">RBS</option>
              <option value="HBA1C">HBA1C</option>
              <option value="Anti-HCV">Anti-HCV</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className=" mb-3" controlId="formBasicEmail">
            <Form.Label>
              <b>Preffered Date</b>
            </Form.Label>
            <Form.Control
              type="date"
              placeholder="Select Date"
              name="date"
              value={patient.date}
              onChange={inputChange}
              disabled
            />
          </Form.Group>

          <Form.Group className=" mb-3" controlId="formBasicEmail">
            <Form.Label>
              <b>Preffered Time</b>
            </Form.Label>

            <Form.Select
              type="text"
              placeholder="select a time range"
              name="time"
              value={patient.time}
              disabled
            //   onChange={inputChange}
            > 
              <option value="09:00 am - 10:00 am">09:00 am - 10:00 am</option>
              <option value="10:00 am - 11:00 am">10:00 am - 11:00 am</option>
              <option value="11:00 am - 12:00 pm">11:00 am - 12:00 pm</option>
              <option value="12:00 pm - 01:00 pm">12:00 pm - 01:00 pm</option>
              <option value="02:00 pm - 03:00 pm">02:00 pm - 03:00 pm</option>
              <option value="03:00 pm - 04:00 pm">03:00 pm - 04:00 pm</option>
              <option value="04:00 pm - 05:00 pm">04:00 pm - 05:00 pm</option>
              
            </Form.Select>

            <Form.Group className=" mb-3" controlId="formBasicEmail">
          <Form.Label>
            <b>Image</b>
          </Form.Label>
          <Form.Control
            type="file"
            placeholder="Upload image"
            name="result"
            onChange={handlePhoto}
          />
        </Form.Group>
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

export default UpdateResult