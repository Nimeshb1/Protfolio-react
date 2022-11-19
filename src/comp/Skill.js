import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Footer } from "./Footer";
import { Link } from "react-router-dom";

export const Skill = () => {
  return (
    <div className="containt" data-aos="fade-in">
      <Container fluid>
        <Row>
          <Col className="col-md">
            <div className="container-bot">
              <h1 className="mx-5" data-aos="fade-in">
                SKILLS
              </h1>
              <section className="titl-2 text-white" data-aos="fade-up">
                <h3 className="mx-5">HTML, CSS, JavaScript And REACT </h3>
              </section>
            </div>
          </Col>

          <Col>
            <div className="img-2 text-danger">
              <i
                class="fa-brands fa-html5 icon1 text-orange"
                data-aos="fade-down"
              ></i>

              <i
                class="fa-brands fa-css3-alt icon2  text-primary"
                data-aos="fade-up"
              ></i>

              <i
                class="fa-brands fa-js icon3  text-warning"
                data-aos="fade-in"
              ></i>

              <i
                class="fa-brands fa-react icon4  text-primary"
                data-aos="fade-up"
              ></i>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
