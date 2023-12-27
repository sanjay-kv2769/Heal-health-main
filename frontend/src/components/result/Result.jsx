import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Table from 'react-bootstrap/Table';

function Result() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [details, setDetails] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:9090/api/patient-booking/view-result/${id}`)
      .then((response) => {
        setData(response.data.data);
        console.log(response.data.data);
        // console.log(data.result);
        console.log("hellooo");
        if (data.result == null) {
          axios
            .get(
              `http://localhost:9090/api/patient-booking/view-result/details/${id}`
            )
            .then((response) => {
              setDetails(response.data.data);
              console.log(response.data.data);
              console.log("hiii");
            });
        }
      })
      .catch((err) => console.log(err));
    
  }, []);
  

  const Detail = () => {
    return (
      <div style={{textAlign:"center"}}>
         <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID:{details.booking_id}</th>
          <th>Test Description</th>
          <th>Test Count  (in %)</th>
          <th>Normal Range</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Lymphocytes</td>
          <td>{details.a}</td>
          <td>20 - 40</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Eosinophils</td>
          <td>{details.b}</td>
          <td>1 - 6</td>
        </tr>
        <tr>
        <td>3</td>
          <td>Monocytes</td>
          <td>{details.c}</td>
          <td>2 - 10</td>
        </tr>
        <tr>
        <td>4</td>
          <td>Basophils</td>
          <td>{details.d}</td>
          <td>0 - 2</td>
        </tr>
      </tbody>
    </Table>
    <Button variant="success">Download Result</Button>
      </div>
      // <div>
      //   <Card
      //     style={{
      //       width: "18rem",
      //       marginLeft: "auto",
      //       marginRight: "auto",
      //       marginTop: "60px",
      //       textAlign: "center",
      //     }}
      //   >
      //     <Card.Body>
      //       <Card.Title>Booking ID:{details.booking_id}</Card.Title>
      //     </Card.Body>
      //     <Card.Body>
      //       <Card.Title>Lymphocytes:{details.a}</Card.Title>
      //     </Card.Body>
      //     <Card.Body>
      //       <Card.Title>Eosinophils:{details.b}</Card.Title>
      //     </Card.Body>
      //     <Card.Body>
      //       <Card.Title>Monocytes:{details.c}</Card.Title>
      //     </Card.Body>
      //     <Card.Body>
      //       <Card.Title>Basophils:{details.d}</Card.Title>
      //     </Card.Body>
      //     <Card.Body>
      //       <Button variant="success">Download Result</Button>
      //     </Card.Body>
      //   </Card>
      // </div>
    );
  };

  const Detail2 = () => {
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
          <Card.Img
            variant="top"
            src={`/upload/${data.result !== null ? data.result : "avat.jpg"}`}
          />
          <Card.Body>
            <Card.Title>
              Booking ID:{data.booking_id ? data.booking_id : ""}
            </Card.Title>
          </Card.Body>
          <Card.Body>
            <Button variant="success">Download Result</Button>
          </Card.Body>
        </Card>
      </div>
    );
  };
  return (
    <div
      className="row"
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "30px",
        marginBottom: "30px",
        maxWidth: "1361px",
      }}
    >
      {data == null ? <Detail /> : <Detail2 />}
    </div>
  );
}

export default Result;
