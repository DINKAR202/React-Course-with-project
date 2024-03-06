import { MotionAnimate } from "react-motion-animate";
import { motion } from "framer-motion";
import { Col, Row, Container } from "react-bootstrap";
import "./K12.css";
import Atom from "../../json/K12.json";
import Lottie from "lottie-react";

const AssessmentDevelopment = () => {
  const data = [
    {
      title: "Engaging Content",
      description:
        "When kids learn with interactive assessments, they use their senses simultaneously. Only reading and listening are not happening, but it also includes watching, participating, experiencing, and engaging. This helps them build multiple parts of their brains and makes it more comfortable for them to retain information.",
      imageSrc: "/images/small-card/thinking.png",
      altText: "placeholder",
    },
    {
      title: "Provides Flexible Learning",
      description:
        "Interactive assessment learning services also help extend the relationship between parents and teachers. They can track a student’s improvement report to ensure they get precisely what they require at the right time in their learning journey. As these assessments are compatible with many devices, they can be accessed from anywhere anytime.",
      imageSrc: "/images/small-card/awards.png",
      altText: "placeholder",
    },
    {
      title: "Saving Time and Cost",
      description:
        "With digital learning, students are not required to visit the tuition centers at different locations. Instead, they can learn from anywhere. Interactive assessment development services also save a lot of time and cost. We also aim to provide cost-effective solutions and help as many kids as possible to unravel their full potential.",
      imageSrc: "/images/small-card/bricks.png",
      altText: "placeholder",
    },
    {
      title: "Track Progress",
      description:
        "The interactive assessment also helps teachers to track a student’s progress at all times. This helps them to know exactly where the students are required with more help to succeed. With immersed engagement in the stream of education, they are more likely to continue learning at their own pace.",
      imageSrc: "/images/small-card/education.png",
      altText: "placeholder",
    },
  ];

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
                <h1>Interactive Assessment Development Services</h1>
                <ul className="title-para">
                  <li>Developed by domain experts</li>
                  <li>Plagiarism free assessments</li>
                  <li>Engaging content</li>
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
              Delivering Subject Specific Assessment Services
            </h3>
            <Row>
              <Col md={8} className="p-lg-5">
                <p>
                  The K-12 curriculum demands writing questions and answers for
                  various higher-order thinking skills across all grades and
                  subjects. Our interactive assessment development services help
                  to create game-based, situation-based assignments and surveys
                  that enhance their courseware and achieve their learning
                  objectives. We have a team of subject matter experts who
                  develop interactive assessment solutions so our clients can
                  efficiently manage and monitor their student learning
                  progress, assess their achievements, and help them understand
                  the learning concepts and topics.
                </p>
                <p>
                  We have an optimum blend of skilled personnel, advanced
                  technology, and domain expertise, which let us build
                  interactive assessment solutions to assess students skills and
                  knowledge. With the help of interactive assessments, the
                  development services that we offer are as follows:
                </p>
                <ul className="title-para">
                  <li className="text-dark">
                    &#x2022; Developing interactive assessments for all major
                    devices, such as desktops, smartphones, and tablets.
                  </li>
                  <li className="text-dark">
                    &#x2022; Creating assessment tests that are based on your
                    specific learning needs.
                  </li>
                  <li className="text-dark">
                    &#x2022; Building robust reports that provide critical
                    information at your fingertips.
                  </li>
                </ul>
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
            <b>Types of Interactive Assessments</b>
          </h3>
          <p className="text-center">
            Several online assessment development services exist that can be
            used to create fascinating and effective assessments for various
            purposes. Some of them are cited below:
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
                <h4>Quiz and Survey</h4>
                <p>
                  We develop assessments for the online test, including quizzes,
                  surveys, and questionnaires designed to collect information
                  and provide feedback to learners. These assessments can be
                  used for market research, employee feedback, customer surveys,
                  and to get reliable data. With the help of this data, one can
                  make informed decisions to optimize and improve user
                  experience with the quality of offerings.
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
              <h4>Educational Assessment</h4>
              <p>
                Educational assessment development services are designed to
                create assessments for educational institutions, including
                schools and universities. These assessments include MCQ, which
                involves explaining incorrect answers on the spot. These
                assessments can assess student learning, provide teacher
                feedback, and measure overall academic performance. They also
                allow deeper analysis of the student’s understanding of the
                material and can provide a more accurate assessment of the
                student’s knowledge.
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
              <h4>Game-Based Assessment</h4>
              <p>
                Our professionals develop engaging and interactive assessments
                that use game mechanisms to increase motivation and engagement.
                These assessments can be used for training, skill development,
                and other purposes. Leveraging game-based learning such as
                rewards, leaderboards, points, and others can create an
                atmosphere of competition and encourage users to take ownership
                of their learning and development. This type of assessment can
                help keep users engaged while completing the assessments.
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
              <h4>Performance-Based Assessment</h4>
              <p>
                The skills in evaluating these assessments include
                problem-solving, critical thinking, and decision-making. Most of
                the time, these assessments are used to evaluate student
                learning outcomes. These assessments are designed to identify
                the individual strengths and weaknesses in the areas that are
                being assessed. These assessments also allow educators to
                provide feedback to students about their performance, allowing
                them to make the improvements needed and become more successful.
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
              <h4>Constructed Response Questions (CRQ)</h4>
              <p>
                We furnish questions with a standard set of rubrics representing
                all levels of Bloom’s taxonomy associated with higher-order
                thinking skills. With the help of these assessments, students
                can apply, analyze, create, and evaluate questions. It helps
                enhance students’ problem-solving and critical-thinking skills.
                Applying such skills as comparing, drawing conclusions,
                categorizing, and synthesizing new information. By giving
                students questions that require higher-order thinking, we help
                students develop cognitive skills and become better problem
                solvers.
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
                  src="/images/boxes/coding.jpg"
                  alt="mypic"
                />
              </div>
            </Col>
            <Col
              md={8}
              className="p-5 d-flex flex-column align-content-center justify-content-center"
            >
              <h4>Subject Integrated</h4>
              <p>
                We also develop questions for a particular discipline integrated
                with another subject, as required by a certain K-12 curriculum.
                With the help of such questions, students can apply their
                knowledge to a broader range of scenarios. By combining two
                subjects, students learn to think critically and apply their
                knowledge across disciplines. It helps them understand complex
                topics better, as they can connect the two subjects.
                Furthermore, subject-integrated assessments can help them
                identify patterns and develop creative solutions to problems.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="container-fluid">
        <Container className="py-5">
          <h4 className="text-center">
            <b>Benefits of Interactive Assessments</b>
          </h4>
          <Row>
            <Row
              md={12}
              className="d-flex array-data flex-wrap justify-content-center align-content-center"
            >
              {data.map((item, index) => (
                <motion.div
                  key={index}
                  className="col-lg-5 p-3 rounded-4 shadow d-flex"
                  initial={{
                    opacity: 0,
                    // if odd index card,slide from right instead of left
                    x: index % 2 === 0 ? 50 : -50,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0, // Slide in to its original position
                    transition: {
                      duration: 1, // Animation duration
                    },
                  }}
                  viewport={{ once: false }}
                >
                  <div className="8">
                    <h4>{item.title}</h4>
                    <p className="small">{item.description}</p>
                  </div>
                  <div className="col-3 card-image-icons img-fluid d-flex justify-content-center">
                    <img src={item.imageSrc} alt={item.altText} />
                  </div>
                </motion.div>
              ))}
            </Row>
          </Row>
          <div className="banner-buttonK12 center-button">
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

export default AssessmentDevelopment;

// export default AssessmentDevelopment;
