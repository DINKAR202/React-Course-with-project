import { MotionAnimate } from "react-motion-animate";
import { motion } from "framer-motion";
import { Col, Row, Container } from "react-bootstrap";
import "./K12.css";
import Atom from "../../json/K12.json";
import Lottie from "lottie-react";

const TeacherLessonPlan = () => {
  const gamefielddata = [
    {
      id: 1,
      imgUrl:
        "https://www.acadecraft.com/assets/images/elearning-solution/gamification-services/achievement-badges.svg",
      title: "Structured Learning",
      description:
        "Lesson plans provide a clear and organized structure for each class, ensuring teachers cover all necessary content or activities within a specific allotted time.",
    },
    {
      id: 2,
      imgUrl:
        "https://www.acadecraft.com/assets/images/elearning-solution/gamification-services/achievement-badges.svg",
      title: "Time-Management",
      description:
        "Teacher lesson plans ensure each part of the lesson must be given appropriate attention and can help teachers to manage their time effectively.",
    },
    {
      id: 3,
      imgUrl:
        "https://www.acadecraft.com/assets/images/elearning-solution/gamification-services/achievement-badges.svg",
      title: " Resource Organization",
      description:
        "Including a list of materials, resources, and teaching aids for the lesson is helpful when substitute teachers are present, and students can focus easily as the format remains unchanged.",
    },
    {
      id: 4,
      imgUrl:
        "https://www.acadecraft.com/assets/images/elearning-solution/gamification-services/achievement-badges.svg",
      title: "Professional Development",
      description:
        "Preparing lesson plans encourages educators to research, learn, and grow in their subject areas and teaching methods, contributing to their professional development.",
    },
    {
      id: 5,
      imgUrl:
        "https://www.acadecraft.com/assets/images/elearning-solution/gamification-services/achievement-badges.svg",
      title: "Student Engagement",
      description:
        "Well-designed lesson plans include interactive elements that can enhance student participation and engagement that align with their abilities.",
    },
    {
      id: 6,
      imgUrl:
        "https://www.acadecraft.com/assets/images/elearning-solution/gamification-services/achievement-badges.svg",
      title: "Differentiation",
      description:
        "Teachers use lesson plans to incorporate strategies for accommodating diverse student learning styles and abilities, ensuring that all students have the opportunity to succeed.",
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
                <h1>Teacher Lesson Plan Solutions</h1>
                <p>
                  We provide unique and engaging strategic lesson plans aligned
                  with the curriculum.
                </p>
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
              Customized and Flexible Lesson Plans
            </h3>
            <Row>
              <Col md={8} className="p-lg-5">
                <p>
                  Our well-designed lesson plans provide a structured framework
                  for teaching, ensuring that teachers focus on what students
                  should achieve during the lesson. These teacher lesson plans
                  maintain consistency in teaching and ensure instruction aligns
                  with curriculum standards and educational goals. We outline
                  specific learning objectives, helping teachers to adapt to
                  unforeseen circumstances while maintaining the overall lesson
                  structure.
                </p>
                <p>
                  Teachers juggle numerous tasks, including crafting lesson
                  plans, administrative duties, paperwork, classroom operation,
                  and face challenges. The subject matter experts can curate
                  valuable lesson plans that focus on facilitating teaching and
                  building strong connections with the students. By utilizing
                  our teacher lesson plan solutions, teachers can reclaim a
                  substantial amount of time while gaining access to
                  well-crafted, engaging lesson plans.
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
            <b>Types of Teacher Lesson Plans</b>
          </h3>
          <p className="text-center">
            Teachers can use various lesson plans depending on their
            preferences, the subject matter expert, specific teaching goals, and
            grade level. Some of the common types of teacher lesson plans
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
                <h4>Daily Lesson Plan</h4>
                <p>
                  The daily lesson plan is a specific type of lesson plan that
                  outlines what a teacher intends to cover during a single
                  class. It provides a roadmap of activities and ensures that
                  the learning objectives are met within the allotted time. To
                  deliver the best daily lesson plan, we include the lesson
                  title, grade level, subject, date, duration, objective, list
                  of all the resources, description of any pre-lesson
                  preparations, anticipatory test, assessment, homework, and
                  reflection to make it more focused and engaging. Here are the
                  five steps we follow to create a daily lesson plan:
                </p>
                <ul className="title-para text-dark">
                  <li>
                    <b>Anticipatory Set:</b> Our professionals add the lesson’s
                    objective by explaining how it connects to past learning and
                    describing the purpose of what is being taught. While
                    writing these points, simple language is used so students
                    can understand them easily.
                  </li>
                  <li>
                    <b>Instruction Set:</b> Here, we focus on the points that
                    are supposed to be taught to students, such as lecturing,
                    furnishing notes, or showing a video. It can also involve
                    demonstrating how to complete a process or activity.
                    Additionally, several brief activities are added to know if
                    the students can understand the concepts.
                  </li>
                  <li>
                    <b>Guided Practice:</b> In this step, our experts list some
                    activities for students to complete during the classroom as
                    per teacher assistance.
                  </li>
                  <li>
                    <b>Closure or Assessment:</b> Our SMEs add an activity to
                    help the teacher get an image of what students learned that
                    day, including an exit slip, a short quiz, or a test.
                  </li>
                  <li>
                    <b>Independent Practice:</b> The last step involves the list
                    of homework assignments students must complete.
                  </li>
                </ul>
              </motion.div>
            </Col>
            <Col md={4}>
              <div className="banner-dynamic-img23 shadow">
                {/* <Lottie animationData={Atom} /> */}
                <img
                  className="rounded-3 shadow"
                  src="../../../public/images/boxes/teachertech.jpg"
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
                  src="../../../public/images/boxes/teachertech.jpg"
                  alt="mypic"
                />
              </div>
            </Col>
            <Col
              md={8}
              className="p-5 d-flex flex-column align-content-center justify-content-center"
            >
              <h4>Five-E Lesson Plan</h4>
              <p>
                5E lesson plan is a framework educators use to design and
                deliver student-centered and inquiry-based lessons in the
                classroom. In the Five-E lesson plan, each “E” represents a
                phase of the lesson, such as:
              </p>
              <ul className="title-para text-dark">
                <li>
                  <b>Engagement: </b> To engage students, we focus on creating a
                  compelling hook, question, or brief activity to pique
                  students’ curiosity and connect the lesson to real-world
                  examples. By conducting a brainstorming session, teachers can
                  assess prior knowledge.
                </li>
                <li>
                  <b>Explanation: </b> To explain the concept or topic to
                  students, our experts write a well-explained passage related
                  to the topic. Our experts use multimedia, visuals, and
                  interactive tools to enhance understanding and address
                  misconceptions.
                </li>
                <li>
                  <b>Exploration: </b> To explore the topic, we now provide an
                  activity where students can implement the learning and provide
                  a result. These activities include games, cooperative learning
                  groups, worksheets, and more.
                </li>
                <li>
                  <b>Elaboration: </b> For elaborating, we add some complex
                  tasks, such as problem-solving and critical thinking, to
                  encourage students to apply what they’ve learned in real-world
                  scenarios. Here, we promote peer discussions.
                </li>
                <li>
                  <b>Evaluation: </b> The evaluation process includes a formal
                  assessment with a question-answer session or a short writing
                  prompt. We administer quizzes and reflect on the overall
                  effectiveness of the lesson plan.
                </li>
              </ul>
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
              <h4>Weekly Lesson Plan</h4>
              <p>
                It is a broader instructional plan covering the content and
                activities to be taught weekly. Our Weekly lesson plan services
                allow you to plan your weekly lesson in one go. This type of
                service is for teachers who want to pre-plan every lesson
                beforehand without facing any delays.
              </p>
              <p>
                Our specialist added a list of standards and objectives on the
                top of the lesson plan, below which all the essential questions
                will be covered during the week. The next section is underlined
                with a short description of different-day activities. The last
                section includes the list of assessments you can cover per the
                week’s instruction, such as a unit, chapter exam, or special
                project.
              </p>
            </Col>
            <Col md={4}>
              <div className="banner-dynamic-img23 shadow">
                {/* <Lottie animationData={Atom} /> */}
                <img
                  className=" rounded-3 shadow "
                  src="../../../public/images/boxes/classroom.jpg"
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
              <h4>Unit Plan</h4>
              <p>
                The Unit lesson plan is a comprehensive instructional plan that
                spans an extended period, covering days or weeks. Our unit plan
                is designed to teach a broader topic or unit of study in depth.
                The structure followed by our experts to curate a unit lesson
                plan for educators involves the unit title, grade level,
                subject, duration, unit overview, unit objectives, list of
                resources textbooks, assessments, and differentiation. The
                lesson plan is divided into days like Week/Day 1, Week/Day 2,
                etc. It allows an in-depth approach to teaching a subject,
                ensuring students have ample time to explore, understand, and
                apply the content.
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
              <h4>Inquiry-Based Lesson Plan</h4>
              <p>
                In maker education, we create content for a list of projects
                educational institutes can incorporate into the syllabus.
                Students get hands-on experience creating something from scratch
                using the concepts, tools, and materials they have learned in
                their K12 STEM education.
              </p>
              <p>
                These lesson plans are for teachers teaching a science subject
                as they involve experimentation and hands-on activities. Our
                subject matter experts design the lesson plans in such a way
                that it allows the teacher to be a facilitator of learning
                rather than an instructor. The top of the lesson plan consists
                of objectives, below which is a detailed description of some
                activities mentioned that are required to be completed by
                students during the day’s lesson.
              </p>
              <p>
                The inquiry-based lesson plans involve hands-on problem-solving
                experiences through cooperative learning groups, experiments, or
                stations. Lastly, there is a list of inquiry-based questions
                teachers can ask students to promote discussion of the concepts
                and material covered in the lesson plan to enhance their
                learning experience.
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

      <Container>
        <h2 className="text-center">
          <b>Benefits of Teacher Lesson Plans</b>
        </h2>
        <p className="text-center">
          Adopting a teacher lesson plan is an effective way of teaching by
          providing structure, focus, and flexibility. It also promotes student
          engagement, learning, and success. Here are a few benefits of teacher
          lesson plans.
        </p>

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
              <summary>
                What significance does selecting STEM education in schools hold?
              </summary>
              <p className="text">
                By choosing STEM education in schools, students have the
                opportunity to acquire skills and principles through hands-on
                learning, diverging from conventional memorization-centered
                approaches.
              </p>
            </details>
            <details>
              <summary>
                What objectives does your K to 12 curriculum development
                services aim to achieve?{" "}
              </summary>
              <p className="text">
                Our goal is to establish a fundamental operational framework
                that nurtures capable and responsible individuals equipped with
                vital competencies and knowledge for gainful employment.
              </p>
            </details>
          </div>
        </div>
      </Container>
    </>
  );
};

export default TeacherLessonPlan;
