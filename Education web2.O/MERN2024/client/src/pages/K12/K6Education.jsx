import { MotionAnimate } from "react-motion-animate";
import { motion } from "framer-motion";
import { Col, Row, Container } from "react-bootstrap";
import "./K12.css";
import Atom from "../../json/K12.json";
import Lottie from "lottie-react";

const K6Education = () => {
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
                <h1>K6 Education Solutions</h1>
                <ul className="title-para">
                  <li>Subject Specific Worksheets</li>
                  <li>High-quality and accuracy questions</li>
                  <li>Plagiarism free content</li>
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
              <b>Curating K6 Curriculum Solutions</b>
            </h3>
            <Row>
              <Col md={8} className="p-lg-5">
                <p>
                  We provide innovative and effective educational solutions
                  customized to the unique needs of K-6 students. Our wide range
                  of resources support teachers which they need to excel in the
                  classroom, including lesson plans, teacher guides, and ongoing
                  support. We foster parents by keeping them informed and
                  engaged in their child’s education.
                </p>
                <p>
                  Curating a K-6 curriculum is an important task that involves
                  selecting and organizing educational content and resources for
                  students in kindergarten through sixth grade. The goal is to
                  create a cohesive and effective curriculum that aligns with
                  educational standards and meets the needs of students at
                  various developmental stages.
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
            <b>Types of K6 Education Solutions</b>
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
                <h4>Math Worksheets</h4>
                <p>
                  Developing effective math worksheets involves creating
                  engaging and educational materials that help students practice
                  and master mathematical concepts. Our K-6 math education
                  worksheets are acclaimed to be the best in both content and
                  presentation as per the target age group. Our worksheets are
                  designed to be engaging and interactive, with colorful visuals
                  and activities that make learning mathematics fun and
                  intuitive. We also provide detailed explanations and guides
                  for students to understand each concept better.
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
              <h4>Vocabulary Worksheets</h4>
              <p>
                Our subject matter experts design top-notch vocabulary
                worksheets for K-6 students. It helps the students build
                vocabulary and know how and when to use the correct words. We
                tailor each worksheet to the students age group containing
                various activities to help them learn. We also provide visuals
                to help students understand the context of the words and how
                they should be used in different situations.
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
              <h4>Spelling Worksheets</h4>
              <p>
                Spellings create confusion among students most of the time;
                therefore with the help of our spelling worksheets for grades
                1-6 will help young learners practice and improve their spelling
                skills. With our spelling worksheets, we provide a series of
                activities designed to help students learn and practice the
                correct spelling of words. With the help of this, students can
                practice their spelling in an interactive and fun way,
                reinforcing the knowledge they have acquired.
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
              <h4>Science Worksheets</h4>
              <p>
                Science is a subject that creates a lot of curiosity among young
                minds as they get to know about many interesting things.
                However, sometimes it becomes difficult for them to grasp the
                information and concepts. Here, our Science worksheets help as
                it makes their learning fun. Our specialist designed the
                worksheets as per the K-6 curriculum.
              </p>
              <p>
                We design the worksheets with activity-based learning in mind
                that can provide interactive ways for kids to learn. Our
                worksheets provide visual illustrations, diagrams, and charts to
                explain the concepts more easily, leading students to understand
                and remember the concepts for longer time frames.
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
              <h4>Cursive Worksheets</h4>
              <p>
                Handwriting matters when you are in the early stage of schooling
                as it makes an impression on teachers and examiners. Our cursive
                worksheets help children practice their writing skills to make
                their handwriting impeccable.
              </p>
              <p>
                Good handwriting is an important skill for every student to
                learn as it boosts their confidence in their own work and helps
                them to be organized. Therefore, We develop cursive writing
                worksheets paying attention to details so that students can also
                learn these valuable skills as they progress through their
                educational journey.
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
              <h4>Flashcards</h4>
              <p>
                Flashcards are an interactive way of learning and improving your
                retaining skills. We are a foremost service provider in the
                e-learning industry, well versed in furnishing attractive flash
                cards for K-6 students for any subject.
              </p>
              <p>
              With the help of our flashcards creation services, students learn effectively as they can quickly review concepts and test their knowledge. We create flashcards to help students to focus on key concepts and sharpen their critical thinking skills. With the help of flashcards, students can learn in a self-paced environment.
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

export default K6Education;
