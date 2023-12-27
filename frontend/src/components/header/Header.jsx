import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import "./Header.css";
import logo from "../images/LOGONAV.png";
import { useNavigate } from "react-router-dom";

function Header() {
  const[test,setTest]=useState({
    bodytest: "Body Tests", liverfunctiontest:"Liver Function Test",
    bloodtest:"Blood Test"
  })
  console.log(test.bodytest);
  // const bodytest= "Body Tests"
  // const liverfunctiontest="Liver Function Test"
  // const bloodtest="Blood Test"
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  console.log(token);
  const role = localStorage.getItem("role");
  console.log(role);

  const Logout = () => {

    localStorage.removeItem("token");
    navigate("/");
    localStorage.removeItem("role");
    window.location.reload();
  };

  return (
    <div >
      <Navbar
        bg="primary"
        data-bs-theme="dark"
        collapseOnSelect
        expand="lg"
        // className="bg-body-tertiary"
      >
        <Container>
          <Navbar.Brand Link as={Link} to="/">
            <img src={logo} alt="" style={{ width: "50px", height: "40px" }} />
            Heal Health Labs
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              {/* <Nav.Link as={Link} to="/">
                Home
              </Nav.Link> */}
              <Nav.Link as={Link} to="/p-id">
                Results
              </Nav.Link>
              <Nav.Link as={Link} to="/booking">
                Do Test
              </Nav.Link>
              <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                  Our Tests
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item >
                  <Link to={`/full-body/${test.bodytest}`}>
                    Body Tests
                  </Link>
                  </Dropdown.Item>
                  <Dropdown.Item >
                  <Link to={`/lft/${test.liverfunctiontest}`}>
                  
                    Liver Function Test
                  
                  </Link>
                  </Dropdown.Item>
                  <Dropdown.Item >
                  <Link to={`/blood/${test.bloodtest}`}>
                  
                    Blood Test
                  
                  </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              {role == 1 ? (
                <Nav.Link as={Link} to="s-info">
                  Staff Info
                </Nav.Link>
              ) : (
                ""
              )}

              {role === 3 ? (
                <Nav.Link as={Link} to="p-info">
                  Patient List
                </Nav.Link>
              ) : (
                ""
              )}

              {role == 1 ? (
                <Nav.Link as={Link} to="admpatient">
                  Patient Info
                </Nav.Link>
              ) : (
                ""
              )}
              
{role == 1 ? (
                <Nav.Link as={Link} to="admtest">
                  Add Tests
                </Nav.Link>
              ) : (
                ""
              )}

              {role == 1 ? (
                <Nav.Link as={Link} to="admbooking">
                  Bookings
                </Nav.Link>
              ) : (
                ""
              )}
              {role == 3? (
                <Nav.Link as={Link} to="stfbooking">
                  Bookings
                </Nav.Link>
              ) : (
                ""
              )}
              <Nav.Link as={Link} to="p-registration">
                P-Registration
              </Nav.Link>

              {token == null ? (
                <>
                  <Nav.Link as={Link} to="/login">
                    login
                  </Nav.Link>
                  <Nav.Link as={Link} to="/registration">
                    <i>Register Now</i>
                  </Nav.Link>
                </>
              ) : (
                <Nav.Link onClick={Logout}>Logout</Nav.Link>
              )}

             {role == 3? (
                <Nav.Link as={Link} to="profile">
                  Profile
                </Nav.Link>
              ) : (
                ""
              )}

            {role == 2? (
                <Nav.Link as={Link} to="profile">
                  Profile
                </Nav.Link>
              ) : (
                ""
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
