const About = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>We Dinkar Developer!</p>
              <h1>Why Choose Us?</h1>
              <p>
                Expertice: Our team consists of experienced IT professionals who are passoniate about staying up-to-date with the latest industry trends.
              </p>
              <p>
                Customization: We understood that every business is unique. That's why we create solutions that are tailored to your specific needs and goals.
              </p>
              <p>
                Expertice: Our team consists of experienced IT professionals who are passoniate about staying up-to-date with the latest industry trends.
              </p>
              <p>
                Expertice: Our team consists of experienced IT professionals who are passoniate about staying up-to-date with the latest industry trends.
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

            {/* hero images  */}
            <div className="hero-image">
              <img
                src="/images/about.png"
                alt="coding together"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default About