import { MotionAnimate } from "react-motion-animate";
import { motion } from "framer-motion";
import { Col, Row, Container } from "react-bootstrap";
import "./K12.css";
import Atom from "../../json/K12.json";
import Lottie from "lottie-react";
// import { Container } from 'react-bootstrap/Container';

const STEM = () => {
  const data = [
    {
      title: "Enhances critical thinking",
      description:
        "With the help of k12 STEM education, students can think strategically to solve problems by applying what they have learned about technology and engineering to find solutions. The projects included in STEM education allow them to see the subject through diverse perspectives.",
      imageSrc: "https://placehold.co/350",
      altText: "placeholder",
    },
    {
      title: "Improves cognitive skills",
      description:
        "Responsive education solution STEM provides fundamental learning to coding and engineering in primary school. With the help of K12 education solutions, you are not only developing the kid’s mind but also allowing them to build cognitive skills at a young age.",
      imageSrc: "https://placehold.co/350",
      altText: "placeholder",
    },
    {
      title: "Encourages creativity and curiosity",
      description:
        "Solutions to STEM education also encourage creativity and curiosity among learners. It allows them to exercise their creativity and imagination and devise various new solutions and ideologies. As a result, their motivation is boosted.",
      imageSrc: "https://placehold.co/350",
      altText: "placeholder",
    },
    {
      title: "Enhances communication skills",
      description:
        "The group activities involved in K12 STEM education allow children to enhance their social skills. They learn to communicate complex issues with others while learning it all together from their classmates.",
      imageSrc: "https://placehold.co/350",
      altText: "placeholder",
    },
    {
      title: "Enhances Socio-emotional learning",
      description:
        "STEM education extends beyond knowledge and employment opportunities. It helps students enhance the socio-emotional qualities responsible for success and happiness. STEM education pushes students to master these abilities before entering the workforce.",
      imageSrc: "https://placehold.co/350",
      altText: "placeholder",
    },
    {
      title: "Maximizes team collaboration",
      description:
        "With the help of the activities involved in STEM education modules, students can collaborate with their classmates to solve issues and complete projects. This allows them to know about cooperation with others in a team-oriented setting.",
      imageSrc: "https://placehold.co/350",
      altText: "placeholder",
    },
    {
      title: "Encourages the use of technology",
      description:
        "Students learn the importance of innovation and technology when learning and studying through the K12 STEM education format. Learning new technologies can increase their eagerness to learn and understand them rather than being afraid or hesitant to try something new.",
      imageSrc: "https://placehold.co/350",
      altText: "placeholder",
    },
    {
      title: "Improves Language Proficiency",
      description:
        "Learning with STEM education criteria can also aid children’s language development through the education process. It improves their vocabulary, leading to language skills and general knowledge development.",
      imageSrc: "https://placehold.co/350",
      altText: "placeholder",
    },
    {
      title: "Motivates experimentation",
      description:
        "When learning through different activities, students apply methods and experiments that benefit them and those around them. By K12 STEM learning, the answer to the question that it would not work is now “let’s try and see” is the attitude they develop.",
      imageSrc: "https://placehold.co/350",
      altText: "placeholder",
    },
    {
      title: "Inspires the application of knowledge",
      description:
        "K12 STEM education offers knowledge of the skills that may apply in the real world. It encourages students to learn because now, they are aware of the abilities they gain by using the information in the real world, such as in workplaces.",
      imageSrc: "https://placehold.co/350",
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
                <h1>Specialized K-12 Education</h1>
                <ul className="title-para">
                  <li>Nurturing Bright Futures</li>
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

      <MotionAnimate animation='scrollFadeIn' scrollPositions={[0.1, 0.9]}>
      <div className="container-fluid K12-content">
        <Container className="py-5">
          <h3 className="text-center">Empowering K12 STEM Education</h3>
          <Row>
            <Col md={8} className="p-5">
              <p>
                We are committed to providing a comprehensive STEM curriculum to
                inspire and equip educators and students to thrive in the
                dynamic fields of Science, Technology, Engineering, and
                Mathematics. We aim to offer all students a meticulously crafted
                curriculum to cultivate critical thinking, problem-solving
                skills, and a passion for innovation. Our strong foundation in
                STEM is essential for students to be successful. Therefore, we
                collaborate with schools and other educational institutions to
                provide high-quality curriculum development, allowing students
                to be successful in the rapidly evolving sector of STEM.
              </p>
              <p>
                Our STEM curriculum is a transformative educational journey that
                empowers students to become problem-solvers, innovators, and
                leaders. Connect with us to equip the next generation with
                creativity, critical thinking, and an innovative future.
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
                  src="../../../public/images/boxes/teachertech.jpg"
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
          <h3 className="text-center">Key Components of STEM Curriculum</h3>
          <p className="text-center">
            Four disciplines are covered in K12 STEM education (Science,
            Technology, Engineering, and Mathematics).
          </p>
          <Row>
            <Col
              md={8}
              className="p-5 d-flex flex-column align-content-center justify-content-center"
            >
              <h4>Inquiry-Based Learning</h4>
              <p>
                In this approach, we frame the lessons so the students can
                explore scientific concepts and theories through hands-on
                experimentation and investigation. Our content and resources
                help educational institutions develop curricula that will engage
                students and foster their critical thinking, problem-solving
                skills, and creativity by adding real-world scenarios and
                providing an interactive and collaborative environment.
              </p>
            </Col>
            <Col md={4}>
              <div className="banner-dynamic-img23 shadow">
                {/* <Lottie animationData={Atom} /> */}
                <img src="https://placehold.co/400" alt="mypic" />
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
                <img src="https://placehold.co/400" alt="mypic" />
              </div>
            </Col>
            <Col
              md={8}
              className="p-5 d-flex flex-column align-content-center justify-content-center"
            >
              <h4>Project-Based Learning</h4>
              <p>
                With our Project-Based Learning, we help educational
                institutions by developing content modules and resources where
                students can apply STEM concepts in solving real-world problems.
                Using this approach, educational institutions can help students
                learn to collaborate, communicate, and work together.
              </p>
              <p>
                Project-based learning helps students develop the critical
                thinking and problem-solving skills necessary to solve real-life
                problems. Students can think out of the box and develop
                innovative ideas and solutions.
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
              <h4>Flipped Classroom</h4>
              <p>
                Our flipped classroom content and resource development focus on
                creating modules with pre-recorded video lectures or completing
                online activities before they come to the physical classroom. We
                build learning content, including hands-on activities,
                discussions, and group work in the classroom, giving learners a
                personalized and extended experience.
              </p>
              <p>
                Flipped classroom methods allow students to be engaged and
                actively participate in the learning process, which increases
                their knowledge and retention power. Additionally, by this
                service, we help create more time for teachers to provide
                individualized instructions to their students and help them
                identify and address issues that may arise in the classroom.
              </p>
            </Col>
            <Col md={4}>
              <div className="banner-dynamic-img23 shadow">
                {/* <Lottie animationData={Atom} /> */}
                <img src="https://placehold.co/400" alt="mypic" />
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
                <img src="https://placehold.co/400" alt="mypic" />
              </div>
            </Col>
            <Col
              md={8}
              className="p-5 d-flex flex-column align-content-center justify-content-center"
            >
              <h4>Game-Based Learning</h4>
              <p>
                We implement game-based learning in K12 STEM education by adding
                educational games to teach students the concepts and skills used
                in STEM. We help to make students engage with their peers,
                motivate them, and maintain interest in the subject matter.
              </p>
              <p>
                We break down complex topics into smaller chunks, making them
                easier to understand. We help students to learn through trial
                and error methods, which increases their understanding of the
                concepts and matter. Additionally, our game-based learning
                approach offers entertaining and interactive learning
                experiences for students, keeping them motivated and engaged
                throughout the learning process.
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
              <h4>Maker Education</h4>
              <p>
                In maker education, we create content for a list of projects
                educational institutes can incorporate into the syllabus.
                Students get hands-on experience creating something from scratch
                using the concepts, tools, and materials they have learned in
                their K12 STEM education.
              </p>
              <p>
                Our maker education aims to provide institutions with the
                content material and resources to help students develop creative
                solutions to problems and acquire new skills. Additionally, with
                this approach to learning, students get practical experience in
                coming up with innovative solutions.
              </p>
            </Col>
            <Col md={4}>
              <div className="banner-dynamic-img23 shadow">
                {/* <Lottie animationData={Atom} /> */}
                <img src="https://placehold.co/400" alt="mypic" />
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
                <img src="https://placehold.co/400" alt="mypic" />
              </div>
            </Col>
            <Col
              md={8}
              className="p-5 d-flex flex-column align-content-center justify-content-center"
            >
              <h4>Coding Education</h4>
              <p>
                Our coding approach in K12 education involves creating content
                and modules for the students learning programming languages and
                coding skills. We help educational institutions to help their
                students in developing their computational thinking skills,
                problem-solving, and creative thinking.
              </p>
              <p>
                With the help of coding education, students can apply their
                knowledge to solve real-world problems and use their coding
                skills to develop innovative solutions. Additionally, we create
                content by remembering that the modules help students use
                technology and manipulate data to drive decision-making.
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
              <h4>Blended Learning</h4>
              <p>
                Our blended learning solutions come with a combination of
                traditional classroom instructions and online learning. We
                flexibly develop content and resources and offer personalized
                learning experiences.
              </p>
              <p>
                Following this learning technique in the classroom offers
                students the opportunity to learn at their own pace by obeying
                the instructions we have detailed in the modules. We also
                construct a different instructional manual for teachers, with
                the help of which teachers can concentrate on offering more
                individualized attention and support to each student.
              </p>
            </Col>
            <Col md={4}>
              <div className="banner-dynamic-img23 shadow">
                {/* <Lottie animationData={Atom} /> */}
                <img src="https://placehold.co/400" alt="mypic" />
              </div>
            </Col>
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

      <div className="container-fluid">
        <Container className="py-5">
          <h4 className="text-center">Benefits of K12 STEM Education</h4>
          <p className="text-center">
            Some of the major benefits of incorporating K12 STEM Education
            include the following:
          </p>
          <Row>
            <Row
              md={12}
              className="d-flex array-data flex-wrap justify-content-center align-content-center"
            >
              {data.map((item, index) => (
                <motion.div
                  key={index}
                  className="col-lg-5 p-3 rounded-4 shadow d-flex" initial={{
                    opacity: 0,
                    // if odd index card,slide from right instead of left
                    x: index % 2 === 0 ? 50 : -50
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0, // Slide in to its original position
                    transition: {
                      duration: 1 // Animation duration
                    }
                  }}
                  viewport={{ once: true }}
                >
                  <div className="8">
                    <h4>{item.title}</h4>
                    <p className="small">{item.description}</p>
                  </div>
                  <div className="4 d-flex justify-content-center">
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

export default STEM;
