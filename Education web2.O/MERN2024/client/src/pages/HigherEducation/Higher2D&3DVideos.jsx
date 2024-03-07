import { MotionAnimate } from "react-motion-animate";
import { Col, Row, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import "../K12/K12.css";

const Higher2D3DVideos = () => {
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
      title: "2D and 3D Storyboards",
      description:
        "Our videos support brands throughout the pre-production and post-production stages. We craft both black & white and colored storyboards, concept panels, structure panels, thumbnail sketches, and various other assets. These storyboards effectively communicate the core vision of a project, enabling clients to identify and rectify any errors during the pre-production phase.",
      imageSrc: "/images/small-card/thinking.png",
      altText: "placeholder",
    },
    {
      title: "3D Modelling and Visualization",
      description:
        "We utilize these methods to craft prototype videos showcasing products and architectural elements. These techniques significantly contribute to the initial phases of product development and conceptualization in projects. The 3D visualizations play a crucial role in captivating customers by enabling them to envision realistic outcomes of products that exist only as concepts. Observing the product in such detail fosters a sense of belief and trust in its potential among customers.",
      imageSrc: "/images/small-card/awards.png",
      altText: "placeholder",
    },
    {
      title: "3D Sculpting and Rendering",
      description:
        "Our 3D rendering services craft photorealistic graphics, showcasing products and their features in captivating detail. Additionally, our sculpting experts produce top-tier 3D designs, utilizing virtual objects, images, concepts, and 2D sketches to cater to clients' printing requirements. Our commitment to punctuality and flexibility in accommodating numerous changes makes us the trusted choice for clients.",
      imageSrc: "/images/small-card/awards.png",
      altText: "placeholder",
    },
    {
      title: "2D and 3D Cartoon Videos",
      description:
        "At Guidofie, our specialty lies in crafting distinctive 2D cartoons that convey messages in a one-of-a-kind fashion. Our clients leverage these characters for employee training videos and beyond. Additionally, we excel in sculpting lifelike 3D cartoon characters, seamlessly integrating them into animated storyboards, explainer videos, whiteboard animations, and various other projects. Our characters consistently captivate and enthrall diverse audiences.",
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
                  PROFESSIONAL 2D/3D VIDEO SERVICES
                </h1>
                <h5 className="text-white px-5">
                  Innovative video and animation to elevate your brand presence!
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
                Crafting captivating 2D and 3D video solutions curated by
                seasoned professionals for an unforgettable impact.
              </b>
            </h2>
            <p className="text-center">
              We specialize in crafting innovative 2D/3D videos for our esteemed
              clients across the globe as a media services provider.
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
                  Multimedia and video solutions stand out as the most impactful
                  methods for reaching both global and local audiences
                  effectively. Brands across the globe leverage digital
                  platforms to solidify their brand identity and broaden the
                  reach of their offerings. While numerous avenues exist for
                  engaging with audiences, not all are equally captivating and
                  memorable. Consequently, clients often turn to various media
                  service providers and video creators for assistance in
                  crafting compelling content.
                </p>
                <p>
                  Not all agencies possess the necessary resources and
                  creativity to craft videos utilizing 2D and 3D animation
                  methods. A considerable number lack access to the requisite
                  technology for producing interactive content, while others may
                  not be proficient in leveraging cutting-edge software tools to
                  their fullest extent. Moreover, its essential for clients to
                  ascertain whether their chosen agency can cater to diverse
                  content genres and languages, particularly if they aim to
                  engage with global audiences. Consequently, clients should opt
                  for service providers with a proven track record in managing
                  substantial projects and meeting deadlines consistently.
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
          Guidofie, a top-tier multimedia creator in the US, offers expertly
          crafted 2D and 3D animation videos tailored to convey brand messages
          effectively. Our versatile team excels in producing customized content
          across various industries, catering to informational, promotional, and
          educational needs. With a focus on storytelling and trend adaptation,
          we ensure each video is unique, engaging, and aligned with client
          goals and audience preferences.
        </p>
      </Container>
      <div className="container-fluid">
        <Container className="py-5">
          <h2 className="text-center">
            <b>Types of 2D/3D Video Services</b>
          </h2>
          <p>
            Owing to the widespread clientele and talented workforce, Acadecraft
            produces various types of 2D and 3D videos. So, we have a solution
            for every problem and budget.
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
                At Guidofie, our specialists work hand in hand with the content
                team to guarantee the accuracy and reliability of the videos
                they produce. Thus, we adhere to a systematic workflow that
                facilitates input and analysis from each expert.
              </p>
              <p>
                Initially, we establish a connection with the client,
                comprehending their needs thoroughly. Following that, we craft a
                detailed plan encompassing the diverse techniques essential for
                video creation, presenting a corresponding quotation. Upon the
                clients approval of the plan and quote, our team proceeds to
                craft captivating 2D and 3D videos. Subsequently, our quality
                assurance experts meticulously scrutinize the videos for
                precision and compatibility prior to delivery.
              </p>
              <p>
              Through connection, comprehension, design, creation, review, and delivery, we ensure seamless progression.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Higher2D3DVideos;
