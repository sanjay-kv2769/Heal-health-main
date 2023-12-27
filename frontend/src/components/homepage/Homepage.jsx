import React from "react";
import "./Homepage.css";
import imageone from "../images/WEB-BANNER-2.jpg";
import imagetwo from "../images/WEB-BANNER-3.jpg";
import imagethree from "../images/WEB-BANNER-4.jpg";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import avatar from "../images/AVATAR.jpg"

function Homepage() {
  return (
    <div>
      <Carousel fade data-bs-theme="dark">
        <Carousel.Item>
          <img className="d-block w-100" src={imageone} alt="First slide" />
          <Carousel.Caption>
            {/* <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={imagetwo} alt="Second slide" />
          <Carousel.Caption>
            {/* <h5>Second slide label</h5> */}
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={imagethree} alt="Third slide" />
          <Carousel.Caption>
            {/* <h5>Third slide label</h5> */}
            {/* <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div
        style={{ textAlign: "center", marginTop: "100px", color: "GrayText" }}
      >
        <h3>Our team of Qualified Professionals</h3>
        <h5>
          All our technicians are highly qualified and experiensed in laboratory
          industry...
        </h5>
      </div>
      <div className="cards">
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={avatar} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={avatar} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={avatar} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={avatar} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
