import { MotionAnimate } from "react-motion-animate";
import { Col, Row, Container } from "react-bootstrap";
import "../K12/K12.css";

const HigherManagement = () => {
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

  const responsibilities = [
    "Act as project leaders and become the communication link for the clients.",
    "They set project objectives and ensure to fulfill them all.",
    "Before taking on any project, they analyze its feasibility and set appropriate milestones and deadlines.",
    "Using the latest technology, they track and report progress at regular intervals.",
    "In case of any resource procurement, they look after all agreements and deals.",
    "They are also responsible for all documentation processes involved in starting new programs, engineering improvements, and pilot programs.",
    "Before beginning any project, they also make a budget plan and sort out the tools required.",
    "They observe the customer service delivery to ensure that clients are updated.",
    "Most importantly, they guarantee to meet the quality standards of the product or service at all times.",
    "They monitor vendors and their supplies while also assisting them.",
    "Lastly, they test the project functionality before delivery.",
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
                  PROFESSIONAL FULL-SERVICE PROJECT MANAGEMENT
                </h1>
                <h5 className="text-white px-5">
                  Ensured success through guided management and execution!
                </h5>
              </MotionAnimate>
            </Col>
          </Container>
        </div>
      </MotionAnimate>

      <MotionAnimate animation="scrollFadeIn" scrollPositions={[0.1, 0.9]}>
        <div className="container-fluid K12-content">
          <Container className="py-5">
            <h2 className="text-center">
              <b>
                Project Management Services To Streamline Work Process For
                Maximum Productivity
              </b>
            </h2>
            <p className="text-center">
              We are a company dedicated to providing full-service project
              management to our clients worldwide.
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
                  Many ideas never get the spotlight it deserves because of poor
                  execution. Some crumble even before the execution process
                  begins. Project execution and management require a team
                  effort. But, clients often fail to build a team of
                  professionals that can collectively work and deliver results.
                  Hence, outsourcing project management solutions is a better
                  alternative.
                </p>
                <p>
                  However, most service providers do not provide full support.
                  Most agencies only offer specialized services, while others
                  only take responsibility for a part of the project. So,
                  finding a full-service project management company is
                  challenging. Even when clients do find one, they might have to
                  deal with some issues later. It may be delayed delivery,
                  hidden costs, unprofessional services by amateurs, and more.
                  Also, many service providers are incapable of dealing with
                  offshore clients or clients across diverse industry sectors.
                  Therefore, choosing the right project management agency is
                  crucial.
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
          As a leading full-service project management company in the US,
          Acadecraft houses professionals for every project type. Our project
          managers assist the clients at every stage of development and take
          responsibility for the entire project. They customize the services
          based on the project goals, service genre, business requirements, risk
          factors, limiting factors, and stakeholder interests. Acadecraft
          always delivers on time and provides regular updates to all clients.
          Our project managers ensure to fulfill all project requirements within
          the budget provided. Besides, our experience helps us identify risks
          and mitigate them accordingly.
        </p>
      </Container>

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
      <MotionAnimate animation="scrollFadeIn" scrollPositions={[0.1, 0.9]}>
        <div className="container-fluid K12-content">
          <Container className="py-5">
            <h2 className="text-center">
              <b>
                Benefits Of Acadecraft’s Full-Service Project Management
                Solutions
              </b>
            </h2>
            <p className="text-center">
              Acadecraft serves clients across all geographical and linguistic
              barriers. So, clients worldwide can easily access and utilize our
              services. We ensure to meet all their project goals within the
              allocated time and budget. Our Project managers:
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
                <ul className="title-para text-dark">
                  {responsibilities.map((responsibility, index) => (
                    <li key={index}>
                      <i className="bx bx-right-arrow-alt text-danger"></i>{" "}
                      {responsibility}
                    </li>
                  ))}
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
            </Row>
          </Container>
        </div>
      </MotionAnimate>
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

export default HigherManagement;
