import React from "react";
import img from "../img/project1.png";
import img2 from "../img/project2.png";
import img3 from "../img/project3.png";
import img4 from "../img/project4.png";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

export const Projects = () => {
  return (
    <div className="containt" data-aos="fade-right">
      <Container fluid>
        <Row>
          <Col className="col-md">
            <div className="container-2">
              <h1 className="mx-5 " data-aos="fade-left">
                PROJECTS
              </h1>
              <section className="titl-2 text-white" data-aos="fade-in">
                <h3 className="mx-5 w-75">HTML, CSS, JavaScript And REACT </h3>
                <button className="but btn btn-primary">
                  <Link
                    to="/about"
                    className="text-black text-decoration-none fs-5"
                  >
                    More Projects..
                  </Link>
                </button>
              </section>
            </div>
          </Col>

          <Col className="col-md">
            <Carousel variant="dark" className="mt-5">
              <Carousel.Item>
                <img className="d-block w-100" src={img} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={img2} alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 h-75"
                  src={img3}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={img4} alt="Third slide" />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
