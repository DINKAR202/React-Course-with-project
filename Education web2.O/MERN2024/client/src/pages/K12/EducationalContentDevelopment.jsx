import { MotionAnimate } from "react-motion-animate";
import { motion } from "framer-motion";
import { Col, Row, Container } from "react-bootstrap";
import "./K12.css";
import Atom from "../../json/K12.json";
import Lottie from "lottie-react";

const EducationalContentDevelopment = () => {
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
          <Row className="align-items-center heading-title22 justify-content-center banner">
            <Col className="offset-md-1" md={5}>
              <div className="banner-dynamic-img2">
                <Lottie animationData={Atom} />
              </div>
            </Col>
            <Col md={5} className="heading-titleK12">
              <MotionAnimate reset={true}>
                <h1>Educational Content Development Services</h1>
                <ul className="title-para">
                  <li>Complete suite of solutions for K-12 content</li>
                  <li>Content for different learning styles</li>
                  <li>Engaging and interactive academic content</li>
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

      <MotionAnimate animation="scrollFadeIn" scrollPositions={[0.1, 0.9]}>
        <div className="container-fluid K12-content">
          <Container className="py-5">
            <h3 className="text-center">
              <b>Delivering High Quality Education Content Solutions</b>
            </h3>
            <Row>
              <Col md={8} className="p-lg-5">
                <p>
                  We are one of the leading educational content development
                  service providers. We develop instructional, educational,
                  interactive, and academic content for learners worldwide.
                </p>
                <p>
                  We have a broader vision of delivering access to a larger
                  audience without compromising the quality of the content. We
                  are equipped with all the latest techniques for the students
                  to have a comprehensive learning experience. We also have a
                  team of Content developers, SMEs, Subject Leads &
                  Instructional Designers with the right talent to get things
                  done and take care of your project deliverables.
                </p>
                <p>
                  We have helped several ed-tech companies worldwide with the
                  most difficult topics and delivered projects under tight
                  deadlines. We work in accordance to establish the scope of
                  work, develop timeframes and define deliverables ensuring
                  perfect alignment.
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
                <div className="banner-dynamic-img23 shadow ">
                  {/* <Lottie animationData={Atom} /> */}
                  <img
                    className="rounded-3 shadow"
                    src="/images/boxes/teachertech.jpg"
                    alt="mypic"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </MotionAnimate>
      <div className="container-fluid">
        <Container className="py-5">
          <h3 className="text-center">
            <b>Types of educational content development</b>
          </h3>
          <p className="text-center">
            SThere are different types of educational content development
            services, a few of them are listed below:
          </p>
          <Row className="mt-3">
            <Col
              md={8}
              className="p-lg-5 d-flex flex-column align-content-center justify-content-center"
            >
              <motion.div
                animate={{ x: 10 }}
                transition={{ ease: "easeOut", duration: 2 }}
              >
                <h4>Textbook Content</h4>
                <p>
                  Textbook content development is a collaborative effort of our
                  subject matter experts, educational content developers,
                  editors, designers, and educational publishers. The goal is to
                  create a high-quality educational resource that supports the
                  learning objectives of students and the teaching goals of
                  educators.
                </p>
              </motion.div>
            </Col>
            <Col md={4}>
              <div className="banner-dynamic-img23 shadow">
                {/* <Lottie animationData={Atom} /> */}
                <img
                  className="rounded-3 shadow"
                  src="../../../public/images/boxes/inquery.jpg"
                  alt="mypic"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="container-fluid">
        <Container className="py-5">
          <Row>
            <Col md={4}>
              <div className="banner-dynamic-img23 rounded-3 shadow">
                {/* <Lottie animationData={Atom} /> */}
                <img
                  className="rounded-3 shadow"
                  src="../../../public/images/boxes/project.jpg"
                  alt="mypic"
                />
              </div>
            </Col>
            <Col
              md={8}
              className="p-5 d-flex flex-column align-content-center justify-content-center"
            >
              <h4>Solution Manuals</h4>
              <p>
                With the help of our solution manuals, students are able to find
                answers to the typical problems in a textbook. Our team of SMEs
                is well-equipped and experienced in furnishing step-by-step
                answers to the most complex questions lucidly, resulting in
                building knowledge among students. Our solution manuals are not
                only there to solve some particular problems but also offer
                students enough insights to solve similar problems that may
                appear in their test papers.
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
              <h4>Question Bank</h4>
              <p>
                We develop unique and customized question banks, mock tests,
                practice questions, previous year’s question solutions as per
                clients’ requirements. Our experts design the questions and
                their solutions based on the inputs and feedback received from
                the clients. We also use statistical measures to validate our
                question banks for extra reliability and ensure that our
                question banks are highly effective for exam preparation.
              </p>
            </Col>
            <Col md={4}>
              <div className="banner-dynamic-img23 shadow">
                {/* <Lottie animationData={Atom} /> */}
                <img
                  className=" rounded-3 shadow "
                  src="/images/boxes/classroom.jpg"
                  alt="mypic"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="container-fluid">
        <Container className="py-5">
          <Row>
            <Col md={4}>
              <div className="banner-dynamic-img23 shadow d-flex ">
                {/* <Lottie animationData={Atom} /> */}
                <img
                  className="img-fluid img-done rounded-2"
                  src="../../../public/images/boxes/play.jpg"
                  alt="mypic"
                />
              </div>
            </Col>
            <Col md={8} className="p-5">
              <h4>Curriculum</h4>
              <p>
                We create, design, and enhance educational curricula to help
                educational institutions, schools, universities, and other
                entities align with educational standards and learning
                objectives. Our focus is to provide solutions to different grade
                levels of K-12,which is to develop content systematically. While
                our curriculum is structured around the common core standards,
                we also add extra material that would contribute to a student’s
                overall personality development.
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
              <h4>Lesson Plan</h4>
              <p>
                Our SMEs create lesson plans tailored to your curriculum, grade
                level, and subject, ensuring they align with educational
                standards and objectives. We incorporate innovative teaching
                strategies and educational technology to make lessons
                interactive and captivating for students. Our lesson plans are
                designed to cater to diverse learners, with strategies to
                support students with special educational needs.
              </p>
            </Col>
            <Col md={4}>
              <div className="banner-dynamic-img23 shadow">
                {/* <Lottie animationData={Atom} /> */}
                <img
                  className="rounded-3 shadow"
                  src="/images/boxes/Maker.jpg"
                  alt="mypic"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* faq */}
      <Container>
        <div className="box">
          <p className="heading256">FAQs</p>
          <div className="faqs">
            <details>
              <summary>
                <b>What are the major benefits of K12 STEM education?</b>
              </summary>
              <p className="text">
                <h6 className="ms-3">Some of the major benefits include:</h6>
                <ul className="faq23">
                  <li>&#x2022; Incorporates hands-on learning experiences</li>
                  <li>&#x2022; Shows real-world applications</li>
                  <li>&#x2022; Promotes equality</li>
                  <li>&#x2022; Develop critical thinking</li>
                  <li>&#x2022; Fosters creativity</li>
                </ul>
              </p>
            </details>
            <details>
              <summary>What is Lorem ipsum?</summary>
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </details>
            <details>
              <summary>What is Lorem ipsum?</summary>
              <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </details>
          </div>
        </div>
      </Container>
    </>
  );
};

export default EducationalContentDevelopment;
