import { MotionAnimate } from "react-motion-animate";
import { motion } from "framer-motion";
import { Col, Row, Container } from "react-bootstrap";
import "./K12.css";
import Atom from "../../json/K12.json";
import Lottie from "lottie-react";

const GamifiedLearning = () => {
  const data = [
    {
      title: "Interactive material",
      description:
        "Our interactive learning guides allow your learners to comprehend the essence of the training better and understand their functional areas.",
      imageSrc: "/images/small-card/thinking.png",
      altText: "placeholder",
    },
    {
      title: "Ideal for all training",
      description:
        "Our gamification service is inclusive; you can use it for various training purposes for both academic and professional.",
      imageSrc: "/images/small-card/awards.png",
      altText: "placeholder",
    },
    {
      title: "Learning with fun",
      description:
        "With our gamified learning solutions, your learners can have fun while learning, ensuring high user retention and helps in tuning in with the learning rhythm.",
      imageSrc: "/images/small-card/bricks.png",
      altText: "placeholder",
    },
    {
      title: "Personalized learning",
      description:
        "We also employ custom tailored gamified content, giving your learners a greater understanding of real-life scenarios in a personalized manner.",
      imageSrc: "/images/small-card/education.png",
      altText: "placeholder",
    },
  ];

  const gamedata = [
    {
      id: 1,
      imgSrc: "/images/boxes/Blended.jpg",
      title: "K12 Learning",
      description:
        "We create gamified learning content and design game-based training elements such as goals, decisions, and rewards to motivate K12 students for improved learning outcomes.",
    },
    {
      id: 2,
      imgSrc: "/images/boxes/Blended.jpg",
      title: "Higher Education",
      description:
        "We nurture a unique learning culture through our gamified learning services and help higher education students to experience an encouraging learning environment that gives them learning incentivization.",
    },
    {
      id: 3,
      imgSrc: "/images/boxes/Blended.jpg",
      title: "Corporate eLearning",
      description:
        "We help businesses communicate transparently through personalized learning materials and empower employees to optimally unleash their creativity and performance.",
    },
    // Add more data objects as needed
  ];

  const gamefielddata = [
    {
      id: 1,
      imgUrl:
        "https://www.acadecraft.com/assets/images/elearning-solution/gamification-services/achievement-badges.svg",
      title: "Achievement Badges",
      description:
        "It works great when using badges as a growth strategy or learning tool. Badges push learners to perform better each time they cross a certain stage. We create a learning environment through digital means that specifically addresses the needs of the learners and allows them to cover each milestone steadily.",
    },
    {
      id: 2,
      imgUrl:
        "https://www.acadecraft.com/assets/images/elearning-solution/gamification-services/achievement-badges.svg",
      title: "Leaderboards",
      description:
        "With our expertise in making learning more engaging and easier, we create leaderboards and allow learners to win against others. Moreover, incorporating interactive learning elements, we help learners navigate learning trends, allowing them to experience a better and more nourishing space.",
    },
    {
      id: 3,
      imgUrl:
        "https://www.acadecraft.com/assets/images/elearning-solution/gamification-services/achievement-badges.svg",
      title: " Role-Play",
      description:
        "Role-play is another gamification element, where we serve industries through various scenarios. We help learners in getting prepared for dealing with various on-ground challenges. The replicated real-life situations allow learners to understand the training module practically.",
    },
    {
      id: 4,
      imgUrl:
        "https://www.acadecraft.com/assets/images/elearning-solution/gamification-services/achievement-badges.svg",
      title: "Content Gamification",
      description:
        "We employ game-like elements such as feedback loops, storytelling, and challenges to transform the learners' awareness of learning. Our powerful and comprehensive approach to dealing with the numerous challenges makes us unique in our industry.",
    },
    {
      id: 5,
      imgUrl:
        "https://www.acadecraft.com/assets/images/elearning-solution/gamification-services/achievement-badges.svg",
      title: "Platform Game",
      description:
        "We design gamified learning modules which allow learners to remove obstacles at a time and get from one end to another. We also position a learning management tool, allowing you to track your learners' progress.",
    },
    {
      id: 6,
      imgUrl:
        "https://www.acadecraft.com/assets/images/elearning-solution/gamification-services/achievement-badges.svg",
      title: "Tactical Games",
      description:
        "Our tactical games encourage learners to attain achievements and allow them to think strategically. We employ dynamic strategies in making tactical games so learners can better apply gamification strategies to execute their long-term working strategies. Our tactical games improve teamwork and decision making abilities.",
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
                <h1>Gamification Services</h1>
                <ul className="title-para">
                  <li>Ultimate engagement plan</li>
                  <li>Drops learning boredom</li>
                  <li>Fosters peer connection</li>
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
              Interactive Gamified Learning Solutions
            </h3>
            <Row>
              <Col md={8} className="p-lg-5">
                <p>
                  Gamification services in the modern learning environment acts
                  as a great way to encourage students and learners to
                  accomplish their learning objectives efficiently by using game
                  elements in learning modules.
                </p>
                <p>
                  Acadecraft makes learning more engaging by employing
                  interactive game strategies. With our years of experience
                  creating and designing customized gamification solutions, we
                  help businesses and academic institutes leverage technology
                  efficiently. Our gamification design methodologies give a new
                  avatar to your learning content and optimize it as per
                  industry requirements. We create content through quizzes,
                  progress tools, sounds, levels, and points.
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

      <Container className="p-5">
        <h1 className="text-center">
          <b>Custom Game-Based Learning to Foster Innovation</b>
        </h1>

        <div className="col-lg-12 d-flex flex-wrap mt-5">
          <div className="row d-flex justify-content-around">
            {gamedata.map((item) => (
              <div key={item.id} className="card text-center card-text mt-2">
                <img
                  className="img-fluid mb-3 rounded-3"
                  src={item.imgSrc}
                  alt="small-img"
                />
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <div className="container-fluid">
        <Container className="py-5">
          <h3 className="text-center">
            <b>Types of Gamification Services</b>
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
                <h4>K12 Learning</h4>
                <p>
                  We serve our K12 learners by providing an interactive and
                  intuitive learning experience. With a gamified learning
                  approach, we impart topic-specific and in-depth learning to
                  the students and make their way to academic success. Our
                  gamification services are fun and interactive, providing an
                  immersive experience to the students.
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
              <h4>Higher Education</h4>
              <p>
                We have revolutionized the traditional teaching methods of
                higher education by utilizing gamification elements to create
                engaging learning materials for higher education students. Our
                gamified learning modules simulate real-world scenarios and
                challenges, enabling students to apply their knowledge and
                skills in practical contexts. This bridge between theory and
                application prepares students for real-world situations and
                enhances their problem-solving abilities.
              </p>
              <p>
                Our gamification solutions make the learning process more
                interactive and enjoyable, capturing students attention and
                motivating them to actively participate. By introducing game
                elements, such as challenges, rewards, and leaderboards,
                students are more engaged and invested in their learning
                journey.
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
              <h4>Corporate Training</h4>
              <p>
                We have extensive experience serving corporate employees
                training needs and providing them a constant and exciting
                opportunity to learn through gamified solutions.Our gamified
                learning solutions have gained popularity amongst our corporate
                clients due to its ability to engage employees, enhance learning
                outcomes, and drive behavior change.
              </p>
              <p>
                Our gamified online training modules can be used to encourage
                desired behaviors and develop specific skills. By setting clear
                goals, defining rewards or recognition systems, and tracking
                progress, gamified learning motivates employees to acquire new
                skills and adopt desired behaviors, promoting professional
                development.
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
          <h4 className="text-center">
            <b>What We Offer in Our Gamification Solutions</b>
          </h4>
          <p className="text-center">
            Our gamification services are structured in such a way that
            increases the user attention and allows them better understand their
            working process. Our gamified solutions are custom tailored and
            specifically deal with your requirements — some of the features our
            gamification services include.
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

      <Container>
        <h2 className="text-center">
          <b>Elements of Gamified Learning</b>
        </h2>

        <div className="row justify-content-center align-item-center">
          {gamefielddata.map((item) => (
            <div key={item.id} className="card col-lg-3 m-3">
              <div className="d-flex text-center mb-3 justify-content-center align-items-center">
                <img className="me-3" src={item.imgUrl} alt="" />
                <h6>{item.title}</h6>
              </div>
              <small>{item.description}</small>
            </div>
          ))}
        </div>
      </Container>

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

export default GamifiedLearning;
