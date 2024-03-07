import { MotionAnimate } from "react-motion-animate";
import { motion } from "framer-motion";
import { Col, Row, Container } from "react-bootstrap";
import "../K12/K12.css";
// import Atom from "../../json/K12.json";
// import Lottie from "lottie-react";

const HigherCurriculum = () => {
  const data = [
    {
      title: "Subject-Centered Curriculum Design Services",
      description:
        "Our curriculum designers meticulously develop instructor guides and training modules covering all the topics intrinsic to the academic course. We are the best curriculum development companies design modules that are filled with innovative videos, interactive infographics, and other forms of content in a way that captivates the students. Subject-centered curriculum design revolves around developing a curriculum for a specific subject matter or course. ",
      imageSrc: "/images/small-card/thinking.png",
      altText: "placeholder",
    },
    {
      title: "Learner-Centered Curriculum Design Services",
      description:
        "We provide accurately devised syllabus and lesson plans to the teachers, so they can efficiently conduct their daily lectures by referring to the plans. We map the content of the courses according to the requirements of the university and course in order to gain uniformity in teaching. The learner-centered curriculum pays attention to the learning objectives and imparts knowledge taking the course level into deliberation. We recognize the course level of the learners and regulate the curriculum according to the client’s requirements.",
      imageSrc: "/images/small-card/awards.png",
      altText: "placeholder",
    },
  ];

  const gamedata = [
    {
      id: 1,
      imgSrc: "/images/boxes/Blended.jpg",
      title: "E-learning",
      description:
        "We believe in staying updated with the latest trends in higher education and so we have a tight grasp over e-learning solutions. We are familiar with the latest tools and digital platforms for the development of an innovative curriculum to meet the learning objectives of the courses in higher education. We aim to create an optimum e-learning experience across diverse audiences.",
    },
    {
      id: 2,
      imgSrc: "/images/boxes/Blended.jpg",
      title: "Colleges/Universities",
      description:
        "We are one of the most reputed higher education curriculum development companies, which delivers curriculum development solutions to higher education institutions in the USA, UK, Australia, UAE and Singapore. Our curriculum is designed with strict adherence to the guidelines by the university and keeping the learning objectives of the course in mind.",
    },
    {
      id: 3,
      imgSrc: "/images/boxes/Blended.jpg",
      title: "Publishers",
      description:
        "While designing a curriculum we pay special attention to the sequence in which education would be imparted. Acadcraft, one of the most reputed curriculum development companies, develops a curriculum from scratch and plan semesters for courses as per university guidelines. Our lesson planners keep in mind the flow of learning while developing the curriculum.",
    },
    // Add more data objects as needed
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
          className="container-fluid headerK12 PPT-header"
        >
          <Container>
            <Col md={12} className="heading-titleK12">
              <MotionAnimate reset={true}>
                <h1 className="text-center">
                  CURRICULUM DEVELOPMENT FOR HIGHER EDUCATION
                </h1>
                <h5 className="text-white">
                  Designing professional education curriculums to meet distinct
                  learning objectives
                </h5>
              </MotionAnimate>
              {/* <div className="banner-buttonK12">
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
              </div> */}
            </Col>
          </Container>
        </div>
      </MotionAnimate>

      <MotionAnimate animation="scrollFadeIn" scrollPositions={[0.1, 0.9]}>
        <div className="container-fluid K12-content">
          <Container className="py-5">
            <h2 className="text-center">
              <b>
                Delivering subject-specific curriculum development services
                online based on client’s requirements.
              </b>
            </h2>
            <p className="text-center">
              We are an elementary curriculum development services online
              providing company serving our valued partners.
            </p>
            <Row>
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
              <Col md={8} className="p-lg-5">
                <h3>
                  <b>Key Issues</b>
                </h3>
                <p>
                  Curriculum development is an essential part of imparting
                  higher education. Curriculums are a base of academic learning
                  and practical experiences in higher education. The process of
                  developing curriculum entails defining a sequence of imparting
                  knowledge and learning objectives for the students. Mostly,
                  the teachers and curriculum planners fail to effectively plan
                  semesters as per the specifics that are intrinsic to the
                  course.
                </p>
                <p>
                  It is tough to find freelance curriculum developers who are
                  aware of the pedagogy revolving around various concept fields.
                  Institutions find it extremely difficult to identify and
                  create learning objectives for distinct courses and align a
                  curriculum around them.
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
            </Row>
          </Container>
        </div>
      </MotionAnimate>

      <Container className="p-5">
        <h1 className="text-center">
          <b>How Can Guidofie Help?</b>
        </h1>
        <p className="text-center">
          Acadecraft, a curriculum development company, has an efficient team of
          curriculum planners who adhere to the guidelines provided by
          universities and design a professional education curriculum framework
          for specific courses. We are the best curriculum development companies
          and have a team of innovative and out-of-the-box thinking curriculum
          designers. We have a team of experienced curriculum designers who
          organize and design curriculum from scratch. We plan a curriculum for
          every semester for the courses that different universities offer. Our
          lesson planners indulge in innovative ways to impart education.
        </p>
      </Container>
      <div className="container-fluid">
        <Container className="py-5">
          <h2 className="text-center">
            <b>Types Of Curriculum Development Services</b>
          </h2>
          <p className="text-center">
            We define the sequence of imparting education along with defining
            learning objectives for higher education courses. We are the best
            among all curriculum development companies. We provide curriculum
            development services online such as:
          </p>
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
      <Container className="p-5">
        <h2 className="text-center">
          <b>Our Higher Education Clients</b>
        </h2>

        <div className="col-lg-12 d-flex flex-wrap mt-5">
          <div className="row d-flex justify-content-around">
            {gamedata.map((item) => (
              <div key={item.id} className="text-start card-text mt-2">
                <img
                  className="img-fluid mb-3"
                  src={item.imgSrc}
                  alt="small-img"
                />
                <h4 className="text-center">{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
      <div className="container-fluid">
        <Container className="py-5">
          <Row>
            <Col md={4}>
              <div className="banner-dynamic-img23 rounded-3">
                {/* <Lottie animationData={Atom} /> */}
                <img
                  className="rounded-3"
                  src="https://www.acadecraft.com/images/Higher-Education-Curriculum-Development-Services/process.png"
                  alt="mypic"
                />
              </div>
            </Col>
            <Col
              md={8}
              className="p-5 d-flex flex-column align-content-center justify-content-center"
            >
              <h4>Process Flow</h4>
              <p>
                At Guidofie, our process flow ensures that the learners in
                higher education find better concepts, in-depth knowledge, and
                easy-to-understand content to ace their curriculum.
              </p>
              <p>
                We first, Assess the needs of our clients, then develop a
                rationale according to the course of the students. We then
                design the goals to be achieved through the curriculum. Next, we
                design the learning objectives including the methods of
                imparting knowledge as well as evaluation strategies. Then, we
                develop a plan to manage and implement teaching strategies. At
                last, we Review the curriculum and revise it.
              </p>
              <p>
                Our major goal is to design a curriculum meeting the needs of
                the client as well as the learning objectives of a grade.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default HigherCurriculum;
