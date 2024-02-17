import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>Lets Talk</h4>
              <p>
                The best web design requires having the best footer design on
                our web page. Although it may seem to be a detail, it has the
                paramount importance for website effectiveness and success.
              </p>
            </div>
            <div className="footer-col">
              <h4>PORTFOLIO</h4>
              <ul>
                <li>
                  <a href="#">about us</a>
                </li>
                <li>
                  <a href="#">our services</a>
                </li>
                <li>
                  <a href="#">privacy policy</a>
                </li>
                <li>
                  <a href="#">affiliate program</a>
                </li>
              </ul>
            </div>
            <div className="footer-col footer-col-demo">
              <h4>demo</h4>
              <ul>
                <li>
                  <a href="#">soon</a>
                </li>
                <li>
                  <a href="#">soon</a>
                </li>
                <li>
                  <a href="#">soon</a>
                </li>
                <li>
                  <a href="#">soon</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
                <a href="https://www.linkedin.com/in/dinkar-kumar-pri/">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a href="https://github.com/DINKAR202">
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
