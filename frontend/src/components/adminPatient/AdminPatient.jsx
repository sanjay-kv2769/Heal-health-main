import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPatients } from "../../redux/Reducer/patientSlice";
// import { TailSpin } from  'react-loader-spinner'
import  PuffLoader  from  'react-spinner'


function AdminPatient() {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  // const patient=useSelector((state)=>state.patient.patientData)
  const status=useSelector((state)=>state.patient.status)
  const { id } = useParams();
  const token = localStorage.getItem('token')
  console.log(token);
  const [patient, setPatient] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    if(token!==null){
      // dispatch(getPatients())
    axios.get("http://localhost:9090/api/lab/view-patient",{
      headers:{
        Authorization:`Bearer ${token}`
      }
    }).then((response) => { 
     
      console.log(response);
      setPatient(response.data.data);
    });
    axios.get("http://localhost:9090/api/lab/view-reg-patient",{
      headers:{
        Authorization:`Bearer ${token}`
      }
    }).then((response) => {
     
      console.log(response);
      setUser(response.data.data);
    });
    

    
  }
  }, [id]);

  const handleDelete = (idd) => {
    // event.preventDefault();
    axios
      .delete(`http://localhost:9090/api/lab/delete-patient/${idd}  `)
      .then((response) => {
        console.log(response);
        navigate("/admpatient");
        window.location.reload()
      });
  };

  const handleRemove = (idd) => {
    // event.preventDefault();
    axios
      .delete(`http://localhost:9090/api/lab/delete-reg-patient/${idd}`)
      .then((response) => {
        console.log(response);
        navigate("/admpatient");
        window.location.reload()
      });
  };


  if(status==="loading"){
    return (
    <div className="text-center">

    {/* <TailSpin
    height="80"
    width="80"
    color="#4fa94d"
    ariaLabel="tail-spin-loading"
    radius="5"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
    /> */}
    <PuffLoader
  color="#f11960"
  size={80}
  speedMultiplier={3}
/>
    </div>
    )
  }
  else if(status==="failed"){
    return <h1 className="text-center">Something went wrong.....</h1>
  }

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
      {
      patient && patient.length > 0
      ?patient.map((item) => (
        <Card style={{ width: "18rem",marginBottom:'30px' }}>
          {/* <Card.Img variant="top" src={`/upload/${patient.image}`}
           onError={(event) =>
            event.target.src ="/upload/avat.jpg"
                 
            }
          /> */}

          <ListGroup variant="flush">
          <ListGroup.Item>

            <Card.Img variant="top" src={`/upload/${item.image}`}
           onError={(event) =>
            event.target.src ="/upload/avat.jpg"
                 
            }
          />
          
              
            </ListGroup.Item>
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
          <div style={{ textAlign: "center",display:'flex',justifyContent:'space-around' }}>
            <Link to={`/p-edit/${item._id}`}>
              <Button variant="primary">Edit</Button>
            </Link>
                
            <Button variant="danger" onClick={() => handleDelete(item._id)}>
              Delete
            </Button>
          </div>
        </Card>
      )):"No Patients Found"}
      {
      user && user.length > 0
      ?user.map((item) => (
        <>
        <Card style={{ width: "18rem",marginBottom:'30px' }}>
        <Card.Img variant="top" src={`/upload/${item.image}`} 
          onError={(event) =>
            event.target.src ="/upload/avat.jpg"
                 
            }
        />

          <ListGroup variant="flush">
            <ListGroup.Item>
              <h5>Name:</h5>
              {item.name}
             
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>Address:</h5>
              {item.address}
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>Phone:</h5>
              {item.phone}
            </ListGroup.Item>
            {/* <ListGroup.Item>
              <h5>Username:</h5>
              {item.username}
            </ListGroup.Item> */}
            {/* <ListGroup.Item>
              <h5>Doctor:</h5>
              {item.doctor_name}
            </ListGroup.Item> */}
            
          </ListGroup>
          <div style={{ textAlign: "center",display:'flex',justifyContent:'space-around' }}>
            <Link to={`/p-admedit/${item._id}`}>
              <Button variant="primary">Edit</Button>
            </Link>
                
            <Button variant="danger" onClick={() => handleRemove(item._id)}>
              Delete
            </Button>
          </div>
        </Card></>
         
      )):"No Patient Found"}
    </div>
  );
}

export default AdminPatient;