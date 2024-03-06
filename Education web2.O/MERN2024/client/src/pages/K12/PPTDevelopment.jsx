import { MotionAnimate } from "react-motion-animate";
import { motion } from "framer-motion";
import { Col, Row, Container } from "react-bootstrap";
import "./K12.css";
// import Atom from "../../json/K12.json";
// import Lottie from "lottie-react";

const PPTDevelopment = () => {
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
          className="container-fluid headerK12 PPT-header"
        >
          <Container>
            <Col md={12} className="heading-titleK12">
              <MotionAnimate reset={true}>
                <h1 className="text-center">
                  PROFESSIONAL PPT ANIMATION SERVICES
                </h1>
                <h5 className="text-white">
                  Putting plain 2D presentations in motion!
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
                Creating Interactive Powerpoint Animations To Attract Viewer’s
                Attention And Promote Action
              </b>
            </h2>
            <p className="text-center">
              We are a media services company providing PPT animation solutions
              to valued clients worldwide.
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
                  PowerPoint presentations are not what it was years ago. It is
                  not just a textual representation of information with few
                  letters and sentences fading in and out. Today, the PPT
                  presentations have animations that enable clients to create
                  videos and movies. So, businesses worldwide are adopting
                  techniques that make their presentations unique and
                  attractive. They approach professional media service providers
                  for assistance.
                </p>
                <p>
                  However, all agencies are not equally equipped to deliver
                  impeccable PPT animations for all industry sectors. Some
                  handle very specific projects, while others work with only a
                  few restricted genres of information. Also, every agency does
                  not have professionals equipped with the expertise of handling
                  the latest software programs and technology. Hence, clients
                  must carefully analyze their service partners before
                  finalizing anything. They must ensure that the agency has
                  experts for different content genres and can handle large
                  volumes of data. Also, they must guarantee the complete
                  security of the client’s data and deliver projects on time. In
                  addition, they must also be available 24/7.
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
          <b>How Can Acadecraft Help?</b>
        </h1>
        <p className="text-center">
          Guidofie is one of the premier media service providers in the US. We
          boast experienced content creators and PowerPoint experts who cater to
          diverse industry needs. Proficient in various languages and content
          genres, we specialize in crafting PPT animations for marketing,
          educational, training, and employment endeavors. Our team comprises
          adept content writers, multimedia creators, software specialists, and
          research analysts, ensuring the integration of cutting-edge and
          precise information into our PPT animation videos. This approach not
          only amplifies audience engagement but also fosters comprehension of
          intricate concepts. Additionally, our linguists collaborate in
          generating content for a broad spectrum of international and regional
          clientele worldwide.
        </p>
        <p className="text-center">
          Moreover, we create PPT animations using the latest software
          technologies and multimedia elements like videos, audio, motion
          graphics, illustrations, and more. We transform boring, informative
          videos into attractive and memorable animations. So, clients use these
          videos to train their recruits, educate their learners, impress
          investors and explain ideas. Also, we ensure to include interactive
          layout designs, colors, and typography to enhance brand popularity and
          reliability. We follow a collaborative workflow that enables us to
          deliver high-quality PPT animations for every project. We deliver on
          time and accommodate multiple reworks and adjustments. Our customer
          service team is always available to handle queries, requests, and
          alterations, whenever necessary. Most importantly, we have packages
          for every budget and project size.
        </p>
      </Container>
      <div className="container-fluid">
        <Container className="py-5">
          <h3 className="text-center">
            <b>Types of PPT Presentation Based Services</b>
          </h3>
          <p className="text-center">
            We create PPT animations for all business types and purposes. So, we
            provide numerous options to clients to choose the most suitable PPT
            animation type for their project. Also, we always follow the latest
            concepts and techniques trends so; clients receive updated and
            popular content only.
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

export default PPTDevelopment;

// export default AssessmentDevelopment;
