import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import img from "../img/Profile.png";
import { Footer } from "./Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import { Skill } from "./Skill";
import { Projects } from "./Projects";
import { Aboutme } from "./Aboutme";
import { Contact } from "./Contact";

export const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <Footer>
      <div className="containt">
        <Container fluid>
          <Row>
            <Col className="">
              <div className="container">
                <h1 className="">
                  NIMESH <p>BISTA</p>
                </h1>
                <section className="titl text-white">
                  <h3>Sofetware Enginer </h3>
                  <h3 className="mx-5">Jouniour Front-End Developer </h3>
                </section>
                <div className="scroll text-white">SCROLL --></div>
              </div>
            </Col>

            <Col>
              <div className="img text-white">
                <img src={img} alt="" height={300} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Skill />
      <Projects />
      <Aboutme />
      <Contact />
    </Footer>
  );
};
