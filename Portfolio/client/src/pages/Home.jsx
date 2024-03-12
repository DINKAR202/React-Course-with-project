// import { Analytics } from "../components/Analytics";
import About from "./About";
import Service from "./Services/Service";
import Skills from "./../components/Skills/Skills";
import Project from "./project/project";
// import TextAnimation from "./styling/styling";

const Home = () => {
  return (
    <>
      <main>
        {/* yes its done */}
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>
                <b>Hello, Its Me</b>
              </p>
              <h1>Dinkar Kumar</h1>
              <h2>And I am MERN Stack developer</h2>
              <p>
                <b>I am</b> a web developer with extensive experience for over 1
                years, expertice is to create innovative logic and website using
                MERN Stack technology and many more...
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="button-40">connect now</button>
                </a>
                <a
                  href="https://drive.google.com/file/d/1laD_EZ_Bd6tF1R0DKmOnrBL8w7y7Yrhn/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn secondary-btn">Resume</button>
                </a>
              </div>
            </div>

            {/* hero images  */}
            <div className="hero-image">
              <img
                src="/images/passport_size_pic.jpg"
                alt="coding together"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      {/* 2nd section  */}
      {/* <Analytics /> */}

      {/* <section className="section-analytics">
        <div className="container grid grid-four-cols">
          <div className="div1">
            <h2>50+</h2>
            <p>registered companies</p>
          </div>
          <div className="div1">
            <h2>100,00+</h2>
            <p>Happy clients</p>
          </div>
          <div className="div1">
            <h2>500+</h2>
            <p>Well know Developer</p>
          </div>
          <div className="div1">
            <h2>24/7</h2>
            <p>service</p>
          </div>
        </div>
      </section> */}

      {/* 3rd section  */}
      {/* <section className="section-hero">
        <div className="container grid grid-two-cols">
          <div className="hero-image">
            <img
              src="/images/design.png"
              alt="coding together"
              width="400"
              height="500"
            />
          </div>

          <div className="hero-content">
            <p>We are here to help you</p>
            <h1>Get Started Today</h1>
            <p>
              Ready to take the first step towards a more efficient and secure
              IT infrastructure? Contact us today for a free consultation and
              lets discuss how Thapa Technical can help your business thrive in
              the digital age.
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">connect now</button>
              </a>
              <a href="/services">
                <button className="btn secondary-btn">learn more</button>
              </a>
            </div>
          </div>
        </div>
      </section> */}
      {/* About section */}
      <About />
      {/* Service section */}
      <Service />

      {/* Skills section */}
      <Skills />

      {/* project section */}
      <Project />

      {/* style css */}
      {/* <TextAnimation /> */}
    </>
  );
};

export default Home;
