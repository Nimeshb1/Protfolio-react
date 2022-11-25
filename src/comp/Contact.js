import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";

export const Contact = () => {
  return (
    <Footer>
      <div className="containt" data-aos="fade-right">
        <Container fluid>
          <Row>
            <Col className="col-md">
              <div className="container-3">
                <h1 className="mx-lg-5 " data-aos="fade-left">
                  GET IN <p className="mx-5">TOUCH</p>
                </h1>
                <section className="titl-2 text-white" data-aos="fade-in">
                  <h3 className="mx-5 px-5  fs-5">Nimeshbista164@gmail.com</h3>
                  <button className="but btn btn-primary">
                    <Link
                      to="/about"
                      className="text-black text-decoration-none fs-5 "
                    >
                      More..
                    </Link>
                  </button>
                </section>
              </div>
            </Col>

            <Col className="col-md">
              <div className="backgroundeimg ">
                <i class=" icon12 fa-brands fa-github"></i>
                <i class="icon23 fa-brands fa-facebook"></i>
                <i class="icon34 fa-brands fa-linkedin"></i>
                <i class="icon45 fa-brands fa-instagram"></i>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Footer>
  );
};
