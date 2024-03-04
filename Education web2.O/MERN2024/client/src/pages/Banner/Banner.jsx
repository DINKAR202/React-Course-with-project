import { MotionAnimate } from "react-motion-animate";
import { Col, Row } from "react-bootstrap";
import "./Banner.css";
import Counter from "../Counter/Counter";
import Atom from "../../json/atom.json";
import Lottie from "lottie-react";

const Banner = () => {
  return (
    <>
      <MotionAnimate
        delay={0.4}
        speed={2}
        ease={[0.75, 0.45, 0.53, 0.94]}
        reset={true}
      >
        <div style={{ marginTop: "111px" }} className="container-fluid header">
          <Row className="align-items-center heading-title2 justify-content-center banner">
            <Col md={5} className="heading-title">
              <MotionAnimate reset={true}>
                <h1>
                  Trailblazing new horizons in educational guidance for future
                  leaders
                </h1>
              </MotionAnimate>
              <div className="banner-button">
                <MotionAnimate
                  delay={1.2} // Change delay to 1.2 seconds
                  speed={0.9} // Change speed to half
                  ease={[0.25, 0.1, 0.25, 1]} // Change easing function
                  reset={false} // Do not reset animation
                >
                  <a href="/about">
                    <button className="button-87">Get Started</button>
                  </a>
                </MotionAnimate>
              </div>
            </Col>
            <Col className="offset-md-1" md={5}>
              <div className="banner-dynamic-img">
                <Lottie animationData={Atom} />
              </div>
            </Col>
          </Row>
        </div>
      </MotionAnimate>
      <Counter />
    </>
  );
};

export default Banner;
