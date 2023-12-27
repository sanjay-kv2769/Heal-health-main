import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBookings } from "../../redux/Reducer/bookingSlice";
// import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";



function AdminPatientBooking() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const booking = useSelector((state) => state.booking.bookingData);
  const status = useSelector((state) => state.patient.status);
  const { id } = useParams();
  const token = localStorage.getItem("token");
  console.log(token);
  // const [patient, setPatient] = useState([]);

  useEffect(() => {
    if (token !== null) {
      dispatch(getBookings());
      // axios
      //   .get("http://localhost:9090/api/patient-booking/view-patient", {
      //     headers: {
      //       Authorization: `Bearer ${token}`,
      //     },
      //   })
      //   .then((response) => {
      //     console.log(response);
      //     setPatient(response.data.data);
      //   });
    }
  }, [id]);

  const handleDelete = (idd) => {
    // event.preventDefault();
    axios
      .delete(
        `http://localhost:9090/api/patient-booking/delete-patient/${idd}  `
      )
      .then((response) => {
        console.log(response);
        navigate("/admbooking");
        window.location.reload();
      });
  };

  console.log(booking);

  if (status === "loading") {
    return <div className="text-center"></div>;
  } else if (status === "failed") {
    return <h3 className="text-center">Something went wrong.....</h3>;
  }

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
      {booking && booking.length > 0
        ? booking.map((item) => (
            <Card style={{ width: "18rem", marginBottom: "30px" }}>
              <Card.Img
                variant="top"
                src={`/upload/${booking.image}`}
                onError={(event) => (event.target.src = "/upload/avat.jpg")}
              />

              <ListGroup variant="flush">
                <img src={`/upload/${item.image}`} alt="" />

                <ListGroup.Item>
                  <h5>Name:</h5>
                  {item.name}
                </ListGroup.Item>
                <ListGroup.Item>
                  <h5>ID:</h5>
                  {item.booking_id}
                </ListGroup.Item>
                <ListGroup.Item>
                  <h5>Age:</h5>
                  {item.age}
                </ListGroup.Item>
                <ListGroup.Item>
                  <h5>Test:</h5>
                  {item.test}
                </ListGroup.Item>
                <ListGroup.Item>
                  <h5>Date:</h5>
                  {item.date}
                </ListGroup.Item>
                <ListGroup.Item>
                  <h5>Time:</h5>
                  {item.time}
                </ListGroup.Item>
              </ListGroup>
              <div
                style={{
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                
                <Link to={`/edit-booking/${item._id}`}>
                  <Button variant="primary">Edit</Button>
                </Link>

                <Button variant="danger" onClick={() => handleDelete(item._id)}>
                  Delete
                </Button>
                
              </div><br />
              <div style={{
                  textAlign: "center",
                  marginLeft:"auto",
                  marginRight:"auto",
                  display: "flex",
                  justifyContent: "space-between",
                }}>
                {/* <Link to={`/edit-result/${item._id}`}>
                  <Button variant="success">Upload Result</Button>
                </Link> */}
                {/* <div>
                <Link to={`/edit-resultform/${item._id}`}>
                  <Button variant="success">Upload Details</Button>
                </Link></div>
                 
                 <div>
                <Link to={`/edit-result/${item._id}`}>
                  <Button variant="success">Upload Image</Button>
                </Link>
                </div> */}

                <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Upload Result
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item >
                  <Link to={`/edit-result/${item._id}`}>
                  <Button variant="light">Upload As Image</Button>
                  </Link>
                  </Dropdown.Item>
                  <Dropdown.Item >
                  <Link to={`/edit-resultform/${item._id}`}>
                  
                  <Button variant="light">Upload As Details</Button>
                  
                  </Link>
                  </Dropdown.Item>
                  {/* <Dropdown.Item >
                  <Link to={`/blood/${test.bloodtest}`}>
                  
                    Blood Test
                  
                  </Link>
                  </Dropdown.Item> */}
                </Dropdown.Menu>
              </Dropdown>
                

                </div>
            </Card>
          ))
        : "No Bookings Found"}
    </div>
  );
}

export default AdminPatientBooking;
