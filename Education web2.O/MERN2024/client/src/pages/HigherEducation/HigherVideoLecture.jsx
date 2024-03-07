import { MotionAnimate } from "react-motion-animate";
import { Col, Row, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import "../K12/K12.css";

const HigherVideoLecture = () => {
  const gamedata = [
    {
      id: 1,
      imgSrc:
        "https://www.acadecraft.com/images/Accessibility-Accessibility-Audit/Industry-Cover/E-learning.png",
      title: "E-learning",
      description:
        "We prioritize keeping abreast of the newest education trends, ensuring our expertise in e-learning video solutions remains current. Well-versed in cutting-edge tools and digital platforms, we specialize in crafting interactive video solutions to enhance student engagement in college settings, facilitating better comprehension of subjects. Our team of video solution developers is dedicated to delivering an optimal e-learning experience tailored to diverse audiences.",
    },
    {
      id: 2,
      imgSrc:
        "https://www.acadecraft.com/images/Accessibility-PDF-PPT-DOC-Remediation/Industry-Cover/K12-Schools-and-Colleges.png",
      title: "Colleges/Universities",
      description:
        "We stand out as a leading provider of Higher Education video solutions, offering tailored services to colleges and universities across the USA, UK, Australia, UAE, and Singapore. Our expertise lies in crafting interactive and comprehensive video lectures, revolutionizing traditional teaching methods into engaging and dynamic experiences.",
    },
    {
      id: 3,
      imgSrc:
        "https://www.acadecraft.com/images/Accessibility-Accessibility-Audit/Industry-Cover/Colleges-Universities.png",
      title: "Publishers",
      description:
        "Guidofie, the best video lectures company, provides college-level video solutions to all questions of the university students along with providing interactive video lectures online to avoid monotony becoming a hurdle in covering the course. We ensure that our video solutions do not become a problem for students and deliver innovative, interactive, engaging, explanatory, and descriptive video solutions to seemingly difficult topics in a course.",
    },
    // Add more data objects as needed
  ];

  const data = [
    {
      title: "Step by step video solutions development",
      description:
        "Utilizing cutting-edge technology and an advanced real-time IT platform, we deliver meticulously crafted video solutions. Our subject matter experts, collaborating closely with the client's academic panel, utilize Pen Tablet technology to define each step, ensuring precision and clarity in higher education contexts. Employing high-definition video equipment, top-notch audio recorders, microphones, and supplementary accessories, we offer immersive live-stage learning experiences to university students.",
      imageSrc: "/images/small-card/thinking.png",
      altText: "placeholder",
    },
    {
      title: "Video lesson Development",
      description:
        "Guidofie revolutionizes learning with a contemporary twist, infusing each lesson with engaging and dynamic elements. Our platform delivers high-quality video lectures enriched with interactive infographics, meticulously crafted charts for comprehensive explanations, a neutral voiceover approach, and compelling anchoring by subject matter experts. Our goal is to seamlessly aid students in higher education, ensuring they effortlessly grasp complex topics.",
      imageSrc: "/images/small-card/awards.png",
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
          className="container-fluid headerK12 PPT-header"
        >
          <Container>
            <Col md={12} className="heading-titleK12">
              <MotionAnimate reset={true}>
                <h1 className="text-center">
                  HIGHER EDUCATION E-LEARNING VIDEO SOLUTIONS
                </h1>
                <h5 className="text-white px-5">
                  Guidofie crafts dynamic, engaging, solution-driven, and
                  accessible video solutions for its esteemed partners.
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
                Delivering interactive and professional video solutions to
                engrain easy learning practices among Higher education Students
              </b>
            </h2>
            <p className="text-center">
              Acadecraft creates interactive, interesting, solution-oriented,
              and easy-to-understand video solutions for its valued partners.
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
                  Video solutions serve as a dynamic pathway to comprehending
                  concepts more effectively for students in higher education.
                  While prolonged reading sessions can often lead to boredom and
                  monotony, interactive video solutions offer a refreshing
                  alternative that enables students to focus more intently on
                  their course materials. Many college and university students
                  encounter challenges in fully grasping certain topics or
                  reading materials during lectures. Video solutions play a
                  vital role in helping such students develop a deeper
                  understanding of the subjects in higher education.
                </p>
                <p>
                  Because of the expansive scope of course material, its crucial
                  that video solutions are highly interactive, inventive, and
                  captivating. Clients often struggle to locate designers who
                  grasp the intricacies of a topic and can craft articulate and
                  user-friendly interactive videos. Many designers lack
                  familiarity with emerging technologies, resulting in videos
                  that are as dull as traditional higher education text.
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
          Guidofie operates with a dedicated squad of video designers and
          editors collaborating closely with Subject Matter Experts to craft
          dynamic and immersive videos aimed at educating college students
          through expertly curated video lectures. Our mission is to elevate
          student engagement by transcending the confines of traditional
          classrooms, empowering university students with avenues for autonomous
          learning and academic reinforcement.
        </p>
      </Container>
      <div className="container-fluid">
        <Container className="py-5">
          <h2 className="text-center">
            <b>Types of Video Solution Services</b>
          </h2>
          <Row>
            <Row
              md={12}
              className="d-flex array-data flex-wrap justify-content-center align-content-center"
            >
              {data.map((item, index) => (
                <motion.div
                  key={index}
                  className="box-types p-3 rounded-4 shadow d-flex"
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
          <b>Our Clients</b>
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
                <h4 className="text-center text-danger">
                  <b>{item.title}</b>
                </h4>
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
                  src="https://www.acadecraft.com/images/K12-Video-Lecture/process.png"
                  alt="mypic"
                />
              </div>
            </Col>
            <Col
              md={8}
              className="p-5 d-flex flex-column align-content-center justify-content-center"
            >
              <h4>How It Works?</h4>
              <p>
                At Guidofie, our systematic approach guarantees learners access
                to enriched concepts, comprehensive knowledge, and user-friendly
                video materials to excel in their studies.
              </p>
              <p>
                We commence by comprehending our clients needs, followed by
                pinpointing video development focal points. Subsequently, we
                meticulously outline the necessary tasks. Then, we craft a
                script through storyboarding with manuscripts and tailor the
                template/blueprint accordingly for content creation. Ultimately,
                our team of quality analysts and editors scrutinizes the content
                for both factual accuracy and linguistic precision.
              </p>
              <p>
                Summarily, our workflow encompasses six essential stages:
                understanding, identifying, documenting, scripting, designing,
                developing, and assessing.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default HigherVideoLecture;
