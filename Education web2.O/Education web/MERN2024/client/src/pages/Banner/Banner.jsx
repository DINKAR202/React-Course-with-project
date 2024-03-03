import { motion } from "framer-motion";
import { Col, Row } from "react-bootstrap";
import "./Banner.css";
import Counter from "../Counter/Counter";
import Atom from "../../atom.json";
import Lottie from "lottie-react";

const Banner = () => {
  return (
    <>
      <motion.section
        initial={{ y: -250 }}
        animate={{ y: -10 }}
        transition={{ delay: 0.9, type: "spring", stiffness: 2500 }}
        id="home"
      >
        <div style={{ marginTop: "111px" }} className="container-fluid header">
          <Row className="align-items-center heading-title2 justify-content-center banner">
            <Col
              md={5}
              className="heading-title animate__animated animate__backInLeft animate__delay-1s"
            >
              <h1>
                Trailblazing new horizons in educational guidance for future
                leaders
              </h1>
              <div className="banner-button">
                <a href="/about">
                  <button className="button-87">Get Started</button>
                </a>
              </div>
            </Col>
            <Col className="offset-md-1" md={5}>
              <div className="banner-dynamic-img">
                <Lottie animationData={Atom} />
              </div>
            </Col>
          </Row>
        </div>
      </motion.section>
      <Counter />
    </>
  );
};

export default Banner;
