import { MotionAnimate } from "react-motion-animate";
import { motion } from "framer-motion";
import { Col, Row, Container } from "react-bootstrap";
import "../K12/K12.css";

const HigerLectureManual = () => {
  const data = [
    {
      title: "Higher Education Student Manual Development Services",
      description:
        "Our student manual development experts cautiously construct the instructor’s principles and training components that enfold all significant topics of the academic program. The constituents are filled with descriptive forms of content in demanding order for the students. Subject-focused student manuals are mapped correctly by subject matter experts. The student manual is a type of catalog promoting higher education content development services. A subject-focused student manual is constructed to clarify the intrinsicality of the course curriculum, which has to be learned by students. The student manual is a box of a subject-focused design, which can be dependable across higher education institutions. Student manuals are the tutoring catalogs supplied to pre-determine the subjects containing all chapters, and developing provisions to pass on academic assistance to the students.",
      imageSrc: "/images/small-card/thinking.png",
      altText: "placeholder",
    },
    {
      title: "Higher Education Teacher Manual Development Services",
      description:
        "We offer college-level teacher manual development services and facilitate the professors to effortlessly carry lectures by referring to the manuals. We plan the content of the manuals in view of that to the accreditation standards of higher education. Our teacher manual development specialists carefully build the instructor’s guidelines and training modules that wrap entire significant topics of the academic syllabus. The components are filled with explanatory content in detailed order for the teachers. Subject-centered teacher manuals are precisely designed and accurately instructed by subject matter experts. Such manual design includes a different set of courses highlighting the subjects as well as on the course curriculum. Our teacher manuals are a kind of prospectus utilized in higher education and higher education content development services. Teacher manuals are the step-wise solutions to topics in textbooks and provide support material to teachers while imparting education to the students.",
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
                  HIGHER EDUCATION STUDENT AND TEACHER MANUAL DEVELOPMENT
                  SERVICES
                </h1>
                <h5 className="text-white px-5">
                  Developing student and teacher manuals for higher education by
                  incorporating metadata and understanding distinctive formats
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
                Delivering detailed higher education student-teacher manual
                development services online using stepwise solutions
              </b>
            </h2>
            <p className="text-center">
              We deliver efficiently optimum student-teacher manual development
              services online for our valued partners.
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
                  Textbooks carry numerous practice questions, important to be
                  solved by students to score well in exams in higher education.
                  Although, multiple times not only students but even the
                  teachers face an issue in finding the solutions to some
                  problems. Student-teacher manuals, while devised to help,
                  often end up confusing the learners.
                </p>
                <p>
                  Higher education institutes often face challenges in finding a
                  team of experts who would design a detailed solution manual.
                  Teachers often find it difficult to get support material and
                  solutions for their course. One of the major problems faced by
                  students is finding descriptive and explanatory solutions
                  while studying for preparatory exams.
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
          Acadecraft has a team of experts that have the experience and
          knowledge to answer intrinsic questions in a detailed and stepwise
          manner. Our team of manual designers answers every question
          accurately. We place special importance in structuring the manuals and
          being precise in the formatting. Our team offers high-quality manual
          development services and uses high-resolution visuals and explanatory
          examples to help students in higher education understand better. We
          develop detailed and understandable solutions manuals for students
          studying for preparatory exams.
        </p>
      </Container>
      <div className="container-fluid">
        <Container className="py-5">
          <h2 className="text-center">
            <b>Types Of Manual Services</b>
          </h2>
          <p className="text-center">
            We design comprehensive and step-wise manual development services
            online to difficult and time-taking problems in higher education. A
            few of our services include:
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
          <b>Our K12 Clients</b>
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
                  src="https://www.acadecraft.com/images/Higher-Education-Student-Teacher-Manual/process.png"
                  alt="mypic"
                />
              </div>
            </Col>
            <Col
              md={8}
              className="p-5 d-flex flex-column align-content-center justify-content-center"
            >
              <h4>How It Works</h4>
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

export default HigerLectureManual;
