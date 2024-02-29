// import { motion } from "framer-motion";
import { Col, Row, Image } from "react-bootstrap";
import banner from "/images/Animation.gif";
import "./Banner.css";
import "animate.css";
import Counter from "../Counter/Counter";

const Banner = () => {
  return (
    <>
      <section
      // initial={{ y: -250 }}
      // animate={{ y: -10 }}
      // transition={{ delay: 0.9, type: "spring", stiffness: 2500 }}
      // id="home"
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
              {/* <p className="text-muted">
                <small className="para-heading">
                  We shape your learners academic needs through our innovative
                  and next-generation educational support.
                </small>
              </p> */}
              <div className="banner-button">
                <a href="/about">
                  <button className="button-87">Get Started</button>
                </a>
              </div>
            </Col>
            <Col className="offset-md-1" md={5}>
              <div className="banner-dynamic-img">
                <Image className="img-fluid" src={banner} alt="banner img" />
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <Counter />
    </>
  );
};

export default Banner;
