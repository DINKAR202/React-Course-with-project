import { MotionAnimate } from "react-motion-animate";
import { motion } from "framer-motion";
import { Col, Row, Container } from "react-bootstrap";
import "./K12.css";
// import Atom from "../../json/K12.json";
// import Lottie from "lottie-react";

const FlashcardCreation = () => {
  const data = [
    {
      title: "Textual Flashcards",
      description:
        "We create these flashcards for higher education learners. They use these text-based flashcards to learn and revise important definitions and learnings. So, we design them in attractive formats and colors, highlighting words and phrases of importance. We create these flashcard sets for complex concepts that are difficult to remember at one go.",
      imageSrc: "/images/small-card/thinking.png",
      altText: "placeholder",
    },
    {
      title: "Pictorial Flashcards",
      description:
        "Picture-based flashcards have a wide range of usage. It helps in learning foundational concepts like alphabets, numbers, and words. However, it also helps learners understand sophisticated scientific concepts through accurate diagrams, figures, and labeled pictures. We always provide high-quality images and graphics to ensure that the flashcards are immersive.",
      imageSrc: "/images/small-card/awards.png",
      altText: "placeholder",
    },
    {
      title: "Formula Flashcards",
      description:
        "These are flashcards specially made for science and Math subjects. They contain all formulas, equations, and facts related to a scientific concept. So, they help learners revise important points before exams and retain them for a longer time. Our online formula flashcards are highly interactive and compatible across all devices and operating systems.",
      imageSrc: "/images/small-card/bricks.png",
      altText: "placeholder",
    },
    {
      title: "Assessment Flashcards",
      description:
        "Guidofie designs flashcards that contain MCQs, one-word Q&As, quizzes, and assignments. We create them in both printed and digital formats for clients across all subjects and grades. The cards have questions on one side and answers on the other. So, clients receive instant feedback, which helps learners to analyze their understanding levels quickly.",
      imageSrc: "/images/small-card/education.png",
      altText: "placeholder",
    },
    {
      title: "Skill Learning Flashcards",
      description:
        "We design flashcards for concepts beyond academics. So, clients use them for various skills like sports, arts, and music. Our flashcards help learners understand the different features of a game, types of musical notes, brush strokes, and the like. We use high-quality text and images to make them vibrant and easily understandable.",
      imageSrc: "/images/small-card/education.png",
      altText: "placeholder",
    },
    {
      title: "Language Flashcards",
      description:
        "Flashcards are the best tools for language learning. We design them in both the target and native language. So, learners easily swap between languages to learn new words and sentences in the target language. Also, our online versions have audio features using which learners can listen to the pronunciation of a new word or sentence.",
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
          className="container-fluid headerK12 PPT-header"
        >
          <Container>
            <Col md={12} className="heading-titleK12">
              <MotionAnimate reset={true}>
                <h1 className="text-center">
                  PROFESSIONAL FLASHCARD CREATION SERVICES
                </h1>
                <h5 className="text-white">
                  Quick, easy, and simple methods of learning!
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
                Optimal Flashcards To Enhance Learning Experiences Across All
                Academic Levels
              </b>
            </h2>
            <p className="text-center">
              We are an eLearning company creating interactive flashcards for
              valued clients worldwide.
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
                  Flashcards are unique personalized learning tools that make
                  learning easy. It has found wide use in the foundational and
                  higher academic levels. Learners use them as markers to
                  understand complicated concepts. So, clients worldwide are now
                  interested in developing interactive flashcards for both
                  online and offline classes.
                </p>
                <p>
                  However, developing flashcards is not easy. Many rely on free
                  online software, but they are nowhere as professional as the
                  ones created by experts. Hence, clients seek assistance from
                  eLearning developers. But choosing the best service is
                  challenging because there are plenty of flashcard creation
                  services in the market today. Partnering with the wrong agency
                  may lead to various issues like low quality, a narrower range
                  of service, and delayed delivery. Only a few services have the
                  manual and technical expertise needed to develop impactful
                  flashcards. Some lack SMEs for every subject, which often
                  leads to the spread of misinformation. Also, they cannot
                  deliver in multiple languages. Hence, clients must associate
                  with agencies that are mindful of all these issues.
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
          <b>How Can GUIDOFIE Help?</b>
        </h1>
        <p className="text-center">
          Guidofie is one of the most reputed eLearning companies in the USA.
          So, we have qualified SMEs and academic writers across all subjects
          and academic levels. They collaborate with graphic designers and
          software developers to create colorful, accurate, and interactive
          flashcards. Besides, we also enable multilingual features for clients
          who have learners worldwide.
        </p>
        <p className="text-center">
          We understand that flashcards must act as efficient markers that lead
          the learner to a solution and not the concept itself. So, we ensure
          that they are clear, to-the-point, and decluttered. Accurate words and
          definitions are used that help learners retain and revise their
          concepts. Hence, we create sets containing multiple flashcards to
          break down a single complex topic into multiple simple parts. Our
          writers use images and animations to make the flashcards more
          interactive. Also, we create class-specific, subject-specific, and
          concept-specific sets for clients, if needed. In addition, we also
          create games, quizzes, and MCQs using flashcards. Our flashcards
          enhance learner engagement and productivity, thereby increasing the
          client’s ROI. We develop both printable and digital flashcards. Also,
          our customer service team is available 24/7 to receive requests from
          clients worldwide.
        </p>
      </Container>
      <div className="container-fluid">
        <Container className="py-5">
          <h2 className="text-center">
            <b>Types Of Flashcard Creation Services</b>
          </h2>
          <p className="text-center">
            We have a team of diverse professionals that bring new ideas and
            ways of meeting client demands. So, we create a wide range of
            flashcards for clients across the education industry.
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
    </>
  );
};

export default FlashcardCreation;
