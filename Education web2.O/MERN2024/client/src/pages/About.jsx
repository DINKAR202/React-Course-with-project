// import { useAuth } from "../store/auth";
import "animate.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./About/About.css";

const About = () => {
  // const { user } = useAuth();

  return (
    <>
      <Container style={{ marginTop: "111px" }}>
        <Row className="section-hero">
          {/* <div className="container grid grid-two-cols"> */}
          <Col
            md={12}
            lg={6}
            className="animate__animated animate__bounce about-content p-4"
          >
            {/* <p>Hi {user.username} Developer</p> */}
            <h2 className="text-start">
              <b>Why Choose Us?</b>
            </h2>
            <h6 className="text-warning">
              <b>MUSKAN SINGH</b>
            </h6>
            <p>
              <b>Muskan Vision:</b> Muskan Singh envisioned Guidofie to bridge
              gaps in traditional education through technology.
            </p>
            <p>
              <b>Realization of Education Gaps:</b> Muskan identified
              shortcomings in traditional education systems.
            </p>
            <p>
              <b>Platform Evolution:</b> Guidofie evolved from idea to
              comprehensive EdTech service.
            </p>
            <p>
              <b>Technological Infrastructure:</b> Built robust infrastructure
              to host diverse educational content.
            </p>
            <p>
              <b>Expansion to Tutoring:</b> Added tutoring services recognizing
              the need for human guidance.
            </p>
            <p>
              <b>Venture into IT Solutions:</b> Leveraged tech expertise to
              offer IT solutions to educational institutions.
            </p>
            <div className="btn btn-group d-flex justify-content-end">
              <a href="/contact" className="me-2">
                <button className="btn btn-warning text-white">
                  Connect now
                </button>
              </a>
              <a href="/services">
                <button className="btn btn-secondary">learn more</button>
              </a>
            </div>
          </Col>

          {/* hero images  */}
          <Col
            md={12}
            lg={6}
            className="animate__animated animate__bounce about-content d-flex justify-content-center align-items-center p-4"
          >
            <img
              src="/images/about.png"
              alt="coding together"
              width="400"
              height="500"
            />
          </Col>
          {/* </div> */}
        </Row>
      </Container>
      <div className="container-fluid our-journey mb-5 p-5">
        <Row className="section-hero">
          <Col
            md={12}
            lg={6}
            className="animate__animated animate__bounce about-content d-flex justify-content-center align-items-center p-4"
          >
            <img
              src="/images/about.png"
              alt="coding together"
              width="400"
              height="500"
            />
          </Col>
          <Col
            md={12}
            lg={6}
            className="animate__animated animate__bounce about-content p-4"
          >
            {/* <p>Hi {user.username} Developer</p> */}
            <h3 className="text-start">
              <b>OUR JOURNEY..</b>
            </h3>
            <h6 className="text-light">
              <b>MUSKAN SINGH</b>
            </h6>
            <p>
              Muskan Singh journey is one of visionary leadership and unwavering
              commitment to enhancing education. From a young age, driven by
              curiosity and a passion for innovation, Muskan recognized the
              shortcomings of traditional education systems. This awareness
              fueled her mission to bridge these gaps through technology,
              leading to the founding of Guidofie.
            </p>
            <p>
              An ISO-certified company with a headcount of over 350 employees,
              we provide round-the-clock e-learning services and solutions to
              our clients based in the USA, the UK, Singapore, the UAE,
              Australia, Ireland, and India.
            </p>
            <div className="btn btn-group">
              <a href="/contact" className="me-2">
                <button className="btn btn-danger">connect now</button>
              </a>
              <a href="/services">
                <button className="btn btn-secondary">learn more</button>
              </a>
            </div>
          </Col>

          {/* hero images  */}
        </Row>
      </div>
    </>
  );
};

export default About;
