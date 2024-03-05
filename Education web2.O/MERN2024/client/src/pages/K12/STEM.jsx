import { MotionAnimate } from "react-motion-animate";
import { Col, Row, Container } from "react-bootstrap";
import "./K12.css";
import Atom from "../../json/atom.json";
import Lottie from "lottie-react";
// import { Container } from 'react-bootstrap/Container';

const STEM = () => {
  return (
    <>
      <MotionAnimate
        delay={0.4}
        speed={2}
        ease={[0.75, 0.45, 0.53, 0.94]}
        reset={true}
      >
        <div
          style={{ marginTop: "111px" }}
          className="container-fluid headerK12"
        >
          <Row className="align-items-center heading-title2 justify-content-center banner">
            <Col className="offset-md-1" md={5}>
              <div className="banner-dynamic-img2">
                <Lottie animationData={Atom} />
              </div>
            </Col>
            <Col md={5} className="heading-titleK12">
              <MotionAnimate reset={true}>
                <h1>Specialized K-12 Education</h1>
                <ul className="title-para">
                  <li>Nurturing Bright Futures</li>
                </ul>
              </MotionAnimate>
              <div className="banner-buttonK12">
                <MotionAnimate
                  delay={1.2} // Change delay to 1.2 seconds
                  speed={0.9} // Change speed to half
                  ease={[0.25, 0.1, 0.25, 1]} // Change easing function
                  reset={false} // Do not reset animation
                >
                  <a href="/contact">
                    <button className="button-87">
                      Get in Touch{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-arrow-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                        />
                      </svg>
                    </button>
                  </a>
                </MotionAnimate>
              </div>
            </Col>
          </Row>
        </div>
      </MotionAnimate>

      <div className="container-fluid K12-content">
        <Container className="py-5">
          <h3 className="text-center">Empowering K12 STEM Education</h3>
          <Row>
            <Col md={8} className="p-5">
              <p>
                We are committed to providing a comprehensive STEM curriculum to
                inspire and equip educators and students to thrive in the
                dynamic fields of Science, Technology, Engineering, and
                Mathematics. We aim to offer all students a meticulously crafted
                curriculum to cultivate critical thinking, problem-solving
                skills, and a passion for innovation. Our strong foundation in
                STEM is essential for students to be successful. Therefore, we
                collaborate with schools and other educational institutions to
                provide high-quality curriculum development, allowing students
                to be successful in the rapidly evolving sector of STEM.
              </p>
              <p>
                Our STEM curriculum is a transformative educational journey that
                empowers students to become problem-solvers, innovators, and
                leaders. Connect with us to equip the next generation with
                creativity, critical thinking, and an innovative future.
              </p>
              <a href="/contact">
                <button className="button-87">
                  Get in Touch{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                    />
                  </svg>
                </button>
              </a>
            </Col>
            <Col md={4}>
              <div className="banner-dynamic-img23">
                {/* <Lottie animationData={Atom} /> */}
                <img
                  src="../../../public/images/banner/mypic.png"
                  alt="mypic"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="container-fluid">
        <Container className="py-5">
          <h3 className="text-center">Key Components of STEM Curriculum</h3>
          <p className="text-center">
            Four disciplines are covered in K12 STEM education (Science,
            Technology, Engineering, and Mathematics).
          </p>
          <Row>
            <Col
              md={8}
              className="p-5 d-flex flex-column align-content-center justify-content-center"
            >
              <h4>Inquiry-Based Learning</h4>
              <p>
                In this approach, we frame the lessons so the students can
                explore scientific concepts and theories through hands-on
                experimentation and investigation. Our content and resources
                help educational institutions develop curricula that will engage
                students and foster their critical thinking, problem-solving
                skills, and creativity by adding real-world scenarios and
                providing an interactive and collaborative environment.
              </p>
            </Col>
            <Col md={4}>
              <div className="banner-dynamic-img23 shadow">
                {/* <Lottie animationData={Atom} /> */}
                <img src="https://placehold.co/400" alt="mypic" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="container-fluid">
        <Container className="py-5">
          <Row>
            <Col md={4}>
              <div className="banner-dynamic-img23 shadow">
                {/* <Lottie animationData={Atom} /> */}
                <img src="https://placehold.co/400" alt="mypic" />
              </div>
            </Col>
            <Col
              md={8}
              className="p-5 d-flex flex-column align-content-center justify-content-center"
            >
              <h4>Project-Based Learning</h4>
              <p>
                With our Project-Based Learning, we help educational
                institutions by developing content modules and resources where
                students can apply STEM concepts in solving real-world problems.
                Using this approach, educational institutions can help students
                learn to collaborate, communicate, and work together.
              </p>
              <p>
                Project-based learning helps students develop the critical
                thinking and problem-solving skills necessary to solve real-life
                problems. Students can think out of the box and develop
                innovative ideas and solutions.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="container-fluid">
        <Container className="py-5">
          <Row>
            <Col
              md={8}
              className="p-5 d-flex flex-column align-content-center justify-content-center"
            >
              <h4>Flipped Classroom</h4>
              <p>
                Our flipped classroom content and resource development focus on
                creating modules with pre-recorded video lectures or completing
                online activities before they come to the physical classroom. We
                build learning content, including hands-on activities,
                discussions, and group work in the classroom, giving learners a
                personalized and extended experience.
              </p>
              <p>
                Flipped classroom methods allow students to be engaged and
                actively participate in the learning process, which increases
                their knowledge and retention power. Additionally, by this
                service, we help create more time for teachers to provide
                individualized instructions to their students and help them
                identify and address issues that may arise in the classroom.
              </p>
            </Col>
            <Col md={4}>
              <div className="banner-dynamic-img23 shadow">
                {/* <Lottie animationData={Atom} /> */}
                <img src="https://placehold.co/400" alt="mypic" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="container-fluid">
        <Container className="py-5">
          <Row>
            <Col md={4}>
              <div className="banner-dynamic-img23 shadow">
                {/* <Lottie animationData={Atom} /> */}
                <img src="https://placehold.co/400" alt="mypic" />
              </div>
            </Col>
            <Col
              md={8}
              className="p-5 d-flex flex-column align-content-center justify-content-center"
            >
              <h4>Game-Based Learning</h4>
              <p>
                We implement game-based learning in K12 STEM education by adding
                educational games to teach students the concepts and skills used
                in STEM. We help to make students engage with their peers,
                motivate them, and maintain interest in the subject matter.
              </p>
              <p>
              We break down complex topics into smaller chunks, making them easier to understand. We help students to learn through trial and error methods, which increases their understanding of the concepts and matter. Additionally, our game-based learning approach offers entertaining and interactive learning experiences for students, keeping them motivated and engaged throughout the learning process.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default STEM;
