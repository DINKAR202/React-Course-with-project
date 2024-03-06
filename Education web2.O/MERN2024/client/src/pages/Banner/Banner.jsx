import { useEffect } from "react";
import { MotionAnimate } from "react-motion-animate";
import { motion } from "framer-motion";
import { Col, Row } from "react-bootstrap";
import "./Banner.css";
import Counter from "../Counter/Counter";
import Atom from "../../json/atom.json";
import Lottie from "lottie-react";
import anime from "animejs"; // Import animejs

const Banner = () => {
  useEffect(() => {
    var textWrapper = document.querySelector(".ml2");
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    anime
      .timeline({ loop: true })
      .add({
        targets: ".ml2 .letter",
        scale: [4, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 950,
        delay: (el, i) => 70 * i,
      })
      .add({
        targets: ".ml2",
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000,
      });
  }, []); // Run only once on component mount

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
              <h1 className="ml2">
                Trailblazing new horizons in educational guidance for future
                leaders
              </h1>
              <div className="banner-button">
                <MotionAnimate
                  delay={1.2} // Change delay to 1.2 seconds
                  speed={0.9} // Change speed to half
                  ease={[0.25, 0.1, 0.25, 1]} // Change easing function
                  reset={false} // Do not reset animation
                >
                  <a href="/about">
                    <motion.button
                      whileTap={{ scale: 0.85 }}
                      className="button-87"
                    >
                      Get Started
                    </motion.button>
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
