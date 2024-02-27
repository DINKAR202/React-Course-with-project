import { motion } from "framer-motion";
import { Col, Container, Row, Image } from "react-bootstrap";
import banner from "../../../public/images/home.png";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <motion.section
        initial={{ y: -250 }}
        animate={{ y: -10 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 2500 }}
        id="home"
      >
        <div className="header">
          <Container style={{ marginTop: "114px" }}>
            <Row className="align-items-center justify-content-center banner">
              <Col md={4} className="heading-title">
                <h1>
                  WELCOME TO <h2>GUIDOFIE</h2>
                </h1>
                <p className="text-muted">
                  <small className="para-heading">
                    The Art of Teaching is the Art of Assisting Discovery
                  </small>
                </p>
                {/* <motion.button
                whileHover={{
                  scale: 1.1,
                  textShadow: "0px 0px 8px rgb(255 255 255)",
                  boxShadow: "0px 0px 8px #17a2b8",
                  transition: { duration: 0.4, yoyo: "Infinity" },
                }}
                className="main-button"
              >
              </motion.button> */}
                <a href="/about">
                  <button className="button-87"> Get Started</button>
                </a>
              </Col>
              <Col className="offset-md-1" md={6}>
                <Image className="img-fluid" src={banner} alt="banner img" />
              </Col>
            </Row>
          </Container>
        </div>
      </motion.section>
    </>
  );
};

export default Banner;
