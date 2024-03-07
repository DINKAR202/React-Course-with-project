import { MotionAnimate } from "react-motion-animate";
import { Col, Row, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import "../K12/K12.css";

const HigherPPTDevelopment = () => {
  const gamedata = [
    {
      id: 1,
      imgSrc:
        "https://www.acadecraft.com/images/Accessibility-Accessibility-Audit/Industry-Cover/E-learning.png",
      title: "Corporate",
      description:
        "Corporate clients in the US and worldwide are known to work on multiple projects at a time. So, they use our full-service project management services to ensure quality execution of all product-related, legal, marketing, and financial initiatives.",
    },
    {
      id: 2,
      imgSrc:
        "https://www.acadecraft.com/images/Accessibility-PDF-PPT-DOC-Remediation/Industry-Cover/K12-Schools-and-Colleges.png",
      title: "Education",
      description:
        "Academic clients like eLearning platforms, schools, colleges, and universities initiate a wide range of projects. So, they use our services to implement new learning programs, branch development, promotion, admissions, and legal compliances.",
    },
    {
      id: 3,
      imgSrc:
        "https://www.acadecraft.com/images/Accessibility-Accessibility-Audit/Industry-Cover/Colleges-Universities.png",
      title: "Banking & Finance",
      description:
        "We have financial experts who are familiar with all banking concepts, financial compliances, and operations. They execute different projects like annual report submission, implementation of new policies and marketing schemes, market analysis, and more.",
    },
    // Add more data objects as needed
  ];

  const data = [
    {
      title: "Textual PPT Animations",
      description:
        "In these PPT animations, we animate letters, words, and sentences. They are focused on text and numbers and are largely based on simple information. Clients use these videos to brief their in-house teams who already know the ongoing projects and terminologies. Textual PPT animations are also used to promote new services and products by using testimonials and statistics.",
      imageSrc: "/images/small-card/thinking.png",
      altText: "placeholder",
    },
    {
      title: "Conceptual PPT Animations",
      description:
        "These PPT animations are image-heavy. We use 2D cartoon images, shapes, arrows, and flow charts to explain ideas and concepts. They are beneficial in meetings that involve the general public and diverse audiences. It helps them stay hooked to the information without being overburdened with information. They are great for opening speech presentations, business pitches, and story-telling.",
      imageSrc: "/images/small-card/awards.png",
      altText: "placeholder",
    },
    {
      title: "Conceptual PPT Animations",
      description:
        "These PPT animations are image-heavy. We use 2D cartoon images, shapes, arrows, and flow charts to explain ideas and concepts. They are beneficial in meetings that involve the general public and diverse audiences. It helps them stay hooked to the information without being overburdened with information. They are great for opening speech presentations, business pitches, and story-telling.",
      imageSrc: "/images/small-card/awards.png",
      altText: "placeholder",
    },
    {
      title: "Persuasive PPT Animations",
      description:
        "Persuading investors, clients or customers is not easy. One must be able to captivate the audience and convince them to take action. So, we create PPT animations that can perfectly aid the client’s speech or idea. We use stunning effects, images, quotes, information, quizzes, games, and activities to enable the audience to participate and connect with the content instead of being a spectator.",
      imageSrc: "/images/small-card/awards.png",
      altText: "placeholder",
    },
    {
      title: "Motivational PPT Animations",
      description:
        "Companies and leaders often require to motivate their buyers and workforce. Many meetings and conferences are held regularly for this purpose. We create inspiring PPT animations for clients that complement the activities and speech of the event. Our experts carefully choose colors, fonts, and music that help the viewers connect to the content emotionally. Also, it keeps them hooked for a longer time.",
      imageSrc: "/images/small-card/awards.png",
      altText: "placeholder",
    },
    {
      title: "Decision-making PPT Animations",
      description:
        "These are part of important meetings that involve decision-making. It may be a decision that decides the future of a company. So, we never take them lightly and ensure to include accurate information and descriptions at all times. We include analogies, examples of similar situations, and probable solutions. The client may provide us with the content, or our experts will brainstorm plausible solutions.",
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
                  PROFESSIONAL PPT ANIMATION SERVICES
                </h1>
                <h5 className="text-white px-5">
                  Putting plain 2D presentations in motion!
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
                Creating Interactive Powerpoint Animations To Attract Viewer’s
                Attention And Promote Action
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
          <b>How Can Guidofie Help?</b>
        </h1>
        <p className="text-center">
          Acadecraft is one of the leading media service providers in the US so,
          we have experienced content creators and PowerPoint exports for every
          industry need. They are fluent in multiple languages and content
          genres. So, we create PPT animations for marketing, educational,
          training, and employment purposes. Our team includes content writers,
          multimedia creators, software experts, and research analysts. Hence,
          we always include trendy and accurate information on our PPT animation
          videos. It enhances audience engagement, heightens curiosity, and
          facilitates easy understanding of complex concepts. We also have
          linguists who assist in creating content for multiple international
          and regional clients worldwide.
        </p>
        <p>
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
                  src="https://www.acadecraft.com/images/Accessibility-Accessibility-Audit/process.png"
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

export default HigherPPTDevelopment;
