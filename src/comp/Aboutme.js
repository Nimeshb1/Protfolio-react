import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import qurcode from "../img/qrcode1.png";

export const Aboutme = () => {
  return (
    <div className="containt" data-aos="fade-right">
      <Container fluid>
        <Row>
          <Col className="col-md">
            <div className="container-2">
              <h1 className="mx-5 " data-aos="fade-left">
                ABOUT <p className="mx-5">ME</p>
              </h1>
              <section className="titl-2 text-white" data-aos="fade-in">
                <h3 className="mx-5 fs-5">
                  Creating new websites and software and playing with silly code
                  is my passion and is only thing that bring smile, anger and
                  creative ideas in my face and brain.{" "}
                </h3>
                <button className="but btn btn-primary">
                  <Link
                    to="/about"
                    className="text-black text-decoration-none fs-5"
                  >
                    More..
                  </Link>
                </button>
              </section>
            </div>
          </Col>

          <Col className="col-md">
            <img src={qurcode} alt="" className="imgme text-white" />
            <h1 className="text-white d-flex justify-content-center">
              SCAN ME
            </h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
