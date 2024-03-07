import { MotionAnimate } from "react-motion-animate";
import { Col, Row, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import "../K12/K12.css";

const HigherAnimatedVideos = () => {
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
      title: "Whiteboard Animation",
      description:
        "Whiteboard animation offers a distinctive approach to conveying information to audiences. Numerous companies embrace whiteboard animation techniques to captivate their customers. This method provides a creative means of delivering instructional content, captivating mobile users, boosting their retention capacities, and elevating website visitation rates.",
      imageSrc: "/images/small-card/thinking.png",
      altText: "placeholder",
    },
    {
      title: "Infographics",
      description:
        "Transforming plain text into captivating visual representations like animated graphs and illustrations ensures greater engagement from audiences. Globally, businesses leverage these appealing animated infographics to captivate customers of diverse ages, cultures, and languages, making information more accessible and memorable.",
      imageSrc: "/images/small-card/awards.png",
      altText: "placeholder",
    },
    {
      title: "Corporate Videos",
      description:
        "These videos depict the inner workings of a company, its aims, objectives, hierarchy, and beyond. Numerous ones are crafted as animated guides for employee training. Thus, presenting such content innovatively through interactive animations guarantees enhanced ROI, better comprehension among employees, and increased brand recognition.",
      imageSrc: "/images/small-card/awards.png",
      altText: "placeholder",
    },
    {
      title: "Product Demonstration Videos",
      description:
        "Effectively communicating a product or service is paramount for any client. In order to captivate the appropriate audience and foster conversions, clients must ensure a comprehensive comprehension of their offerings. Animated product demonstration videos stand out as distinctive and engaging methods for achieving this goal..",
      imageSrc: "/images/small-card/awards.png",
      altText: "placeholder",
    },
    {
      title: "2D Animation",
      description:
        "Clients realize their visions through the dynamic medium of 2D animation. Harnessing the power of digital art and animation captivates audiences, bolsters conversion rates, and elevates the SEO standing of websites. Diverse 2D animation techniques such as stop motion, motion graphics, traditional animation, and beyond offer creative avenues for expression.",
      imageSrc: "/images/small-card/awards.png",
      altText: "placeholder",
    },
    {
      title: "Animated Explainer Videos",
      description:
        "We specialize in crafting explainer videos utilizing live-action, screencast, typography, and various other techniques. Each video we create is unique and serves to enhance our clients' visibility and branding efforts. Our animated explainer videos are concise and impactful, optimized for seamless viewing across android phones, iPhones, tablets, and desktop PCs.",
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
                  PROFESSIONAL ANIMATED VIDEO SERVICES
                </h1>
                <h5 className="text-white px-5">
                  Animated Videos That Align With The Brand’s Goals And
                  Identity!
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
                Creating Animated Videos Using The Latest Software And Technique
              </b>
            </h2>
            <p className="text-center">
              We are a media services provider offering animated video solutions
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
                  Videos remain a top-tier method for captivating employees and
                  connecting with clients or customers. Yet, within the vast
                  landscape of social media, a myriad of video formats exists.
                  Consequently, businesses strive to devise inventive methods of
                  communication through video to distinguish themselves. Among
                  these, animated videos emerge as a rapidly expanding and
                  favored realm of video production. This medium facilitates
                  engagement across diverse linguistic audiences, prompting
                  numerous companies to integrate animation into their marketing
                  repertoire.
                </p>
                <p>
                  Creating an animated video is not a simple task. It demands a
                  unique skill set and a high level of expertise. Thats why many
                  businesses turn to professionals in animated video production.
                  However, not all agencies possess the necessary technical
                  know-how and software to consistently deliver top-notch
                  animated content. Furthermore, some service providers
                  specialize in specific genres or languages, limiting the scope
                  for clients aiming to broaden their reach. Therefore, its
                  essential for companies to thoroughly vet media service
                  providers, ensuring they have seasoned video creators capable
                  of catering to diverse industry sectors before engaging their
                  services.
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
          As a premier eLearning firm, Acadecraft boasts extensive experience in
          crafting diverse video content for clients across the globe, including
          the US. Our roster features top-tier video creators, producers, and
          editors, complemented by adept content writers and research analysts.
          This powerhouse team collaborates to produce captivating video
          materials spanning various industries. With our array of specialists,
          we offer animated video services tailored to different languages and
          concepts. Our repertoire includes product demos, service descriptions,
          ads, training modules, infographics, 2D animations, corporate
          presentations, and more. Leveraging cutting-edge software, we ensure
          our videos are both trendy and engaging, captivating wide audiences.
          Setting us apart, we offer round-the-clock services, ensuring timely
          delivery to clients worldwide. Furthermore, our experts adeptly
          customize each video to align with client-specific needs, target
          audiences, and business objectives. Our dedicated customer service
          team stands ready 24/7 to address new requests, modifications, and
          delivery queries.
        </p>
      </Container>
      <div className="container-fluid">
        <Container className="py-5">
          <h2 className="text-center">
            <b>Types of Animated Video Services</b>
          </h2>
          <p>
            Our extensive expertise and talented video creators play a pivotal
            role in crafting a diverse array of animated videos. Tailoring each
            video to meet the specific needs of our clients, we ensure they
            achieve the desired impact on their audience.
          </p>
          <Row>
            <Row
              md={12}
              className="d-flex array-data flex-wrap justify-content-center align-content-center"
            >
              {data.map((item, index) => (
                <motion.div
                  key={index}
                  className="box-types p-4 rounded-4 shadow d-flex"
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
                Through connection, comprehension, design, creation, review, and
                delivery, we ensure seamless progression.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default HigherAnimatedVideos;
