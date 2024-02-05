import { useAuth } from "../store/auth";

const About = () => {
  const { user } = useAuth();

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
              As a passionate MERN Stack Developer, I thrive on crafting visually stunning, innovative, and functional websites that address real-world challenges. With expertise in MongoDB, Express.js, React.js, and Node.js, I seamlessly integrate front-end and back-end technologies to deliver seamless user experiences.
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
        </section>
      </main>
    </>
  );
};

export default About;
