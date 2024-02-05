// import { useAuth } from "../store/auth";
import { BsLinkedin } from "react-icons/bs";
import { VscGithub } from "react-icons/vsc";
import { SiHackerearth, SiCodechef } from "react-icons/si";

const About = () => {
  // const { user } = useAuth();

  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            {/* hero images  */}
            <div className="hero-image">
              <img
                src="/images/about.png"
                alt="coding together"
                width="400"
                height="500"
              />
            </div>

            <div className="hero-content">
              {/* <p>Hi {user.username} Developer</p> */}
              <h1>Hi, I'm Dinkar Kumar</h1>
              <h2>A MERN Stack Developer.</h2>
              <p>
                As a passionate MERN Stack Developer, I thrive on crafting
                visually stunning, innovative, and functional websites that
                address real-world challenges. With expertise in MongoDB,
                Express.js, React.js, and Node.js, I seamlessly integrate
                front-end and back-end technologies to deliver seamless user
                experiences.
              </p>
              <div className="btn btn-group">
                <span>
                  <a href="https://www.linkedin.com/in/dinkar-kumar-pri/">
                    <BsLinkedin />
                  </a>
                </span>
                <span>
                  <a href="https://github.com/DINKAR202">
                    <VscGithub />
                  </a>
                </span>
                <span>
                  <a href="https://www.hackerrank.com/profile/rathordinkar5">
                    <SiHackerearth />
                  </a>
                </span>
                <span>
                  <a href="https://www.codechef.com/users/dinkar7079">
                    <SiCodechef />
                  </a>
                </span>
              </div>
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
        </section>
      </main>
    </>
  );
};

export default About;
