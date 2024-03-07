import { MotionAnimate } from "react-motion-animate";
import { motion } from "framer-motion";
import { Col, Row, Container } from "react-bootstrap";
import "./K12.css";
import Atom from "../../json/K12.json";
import Lottie from "lottie-react";

const WorkbookDevelopment = () => {
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
                <h1>Workbook Development Services</h1>
                <ul className="title-para">
                  <li>Subject-specific workbooks</li>
                  <li>Align with educational curricula</li>
                  <li>Inclusion of interactive elements</li>
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
              <b>Delivering High Quality Workbooks</b>
            </h3>
            <Row>
              <Col md={8} className="p-lg-5">
                <p>
                  The quality of educational workbooks enhances the
                  effectiveness of student learning experiences. We ensure it
                  precisely as our team of expert professionals carefully
                  develop and design workbooks that align with the educational
                  curricula while incorporating interactive elements.
                </p>
                <p>
                  The content includes instructional materials, exercises,
                  quizzes, and assessments to provide students with engaging and
                  effective learning materials, ensuring an informative and
                  enjoyable learning journey. Schools, businesses, or
                  corporations can use these workbooks to enrich their training
                  programs or educational initiatives.
                </p>
                <p>
                  Whether its for classroom use, employee training, or
                  self-study, these meticulously designed workbooks are a
                  valuable resource for any learning environment.
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
            <b>Types of Workbook Development</b>
          </h3>
          <Row className="mt-3">
            <Col
              md={8}
              className="p-lg-5 d-flex flex-column align-content-center justify-content-center"
            >
              <motion.div
                animate={{ x: 10 }}
                transition={{ ease: "easeOut", duration: 2 }}
              >
                <h4>Chapter-Wise Worksheets</h4>
                <p>
                  Students and learners succeed and grow progressively with our
                  innovative approach to learning materials. Our Chapter-wise
                  worksheets are bit-sized focused, breaking down complex
                  chapters into manageable sections.
                </p>
                <p>
                  Students can conveniently understand and absorb information by
                  dividing the content into smaller chunks. We aim to enhance
                  comprehension and retention, making learning a smoother and
                  more engaging experience for students of all ages. It helps
                  them better understand the concepts and increases their
                  motivation and interest in the subject.
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
              <h4>Full-Syllabus Worksheets</h4>
              <p>
                With Full-Syllabus Worksheets, you save valuable time on
                curriculum planning and content creation. We ensure that all the
                important topics and concepts are covered properly. Our
                worksheets are designed to cater to different learning styles
                and abilities, making them the perfect resource for
                individualized instruction.
              </p>
              <p>
                These worksheets help students understand the content and grasp
                information effectively. It simplifies the teaching process and
                enhances students learning power and retention process. These
                worksheets promote critical thinking and problem-solving skills,
                encouraging students to apply their knowledge in real-life
                scenarios.
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
              <h4>Topic-Based Workbooks</h4>
              <p>
                Topic-based worksheets are dynamic educational resources
                designed to provide a focused learning experience to learners.
                These workbooks focus on specific subjects or themes, allowing
                learners to master key concepts efficiently. It simplifies
                complex topics and concepts, making learning accessible for all.
              </p>
              <p>
                Our team of professionals crafts content, ensuring the utmost
                clarity and engagement fostering a deep understanding of the
                subject matter. We assist learners of all ages, from study
                materials to comprehensive teaching materials. It provides a
                flexible and impactful solution, containing an array of
                exercises, activities, and assessments to ensure full
                comprehension of the material.
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
              <h4>Full-Length Workbooks</h4>
              <p>
                Full-length Workbooks are inclusive learning resources designed
                to cover an entire subject or topic in a structured and detailed
                manner. It is a powerful tool for employee training and skill
                development.
              </p>
              <p>
                It provides in-depth knowledge, practical activities, and
                assessments, ensuring a thorough understanding of the subject
                matter. These workbooks provide a holistic learning experience
                by encompassing all key concepts, exercises, and assessments
                within one resource. It allows them to combine knowledge, track
                progress, and practice efficiently.
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
              <h4>Quizlets</h4>
              <p>
                We specialize in creating Quizlets that improve users learning
                process by encouraging active participation, retention, and
                self-evaluation. It involves a variety of question formats, such
                as multiple choice, matching, and fill-in-the-blanks, to cater
                to different learning styles.
              </p>
              <p>
                The design is easily navigable and user-friendly, providing
                immediate feedback to learners. We aim to simplify complex
                concepts, making them easy to understand and aligning them with
                the content in the learners workbook to ensure a seamless and
                effective learning experience.
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
      <div className="container-fluid">
        <Container className="py-5">
          <Row>
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
            <Col
              md={8}
              className="p-5 d-flex flex-column align-content-center justify-content-center"
            >
              <h4>Online Worksheets</h4>
              <p>
                Online Worksheets are digital educational resources developed
                for interactive learning. Students and educators can access
                subject-specific exercises, activities, and quizzes online. Our
                team of experts excels in creating these worksheets that are
                user-centric. It is accessible anytime, anywhere, making
                learning flexible and convenient. With our expertise, learners
                can access engaging, interactive content that promotes active
                participation among learners and a deeper understanding of the
                subject matter, enhancing their overall academic performance.
              </p>
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

export default WorkbookDevelopment;
