import { useEffect, useState } from "react";
import "./Navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import logo from "/images/logo.png";
import logotext from "/images/logo text.png";
import ChartComponent from "./Chart/Chart";
import { useAuth } from "../store/auth";

const NavBar = () => {
  const { isLoggedIn } = useAuth();
  const [showChart, setShowChart] = useState(false); // State variable to control chart visibility
  const [isSticky, setSticky] = useState(false);
  const [isCollapsed, setCollapsed] = useState(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);

  const toggleChart = () => {
    setShowChart(!showChart);
  };

  return (
    <>
      <Navbar
        expand="lg"
        className={
          isSticky || isCollapsed
            ? "slide in py-2 show shadow navbar navbar-expand-md bg-white navbar-light fixed-top"
            : "slide out show navbar shadow-sm navbar-expand-nd navbar-light py-2 fixed-top "
        }
      >
        <Container>
          <Navbar.Brand href="/">
            <Image className="logo-nav" style={{ width: "85px" }} src={logo} />
            <Image
              className="logo-text"
              style={{ width: "85px" }}
              src={logotext}
            />
          </Navbar.Brand>
          <Navbar.Toggle
            onClick={() => setCollapsed(!isCollapsed ? "show" : null)}
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto me-5">
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-basic"
                  className="nav-button"
                  variant="red"
                >
                  Solution
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={toggleChart}>
                    {" "}
                    {/* Add onClick to toggle the chart */}
                    <div className="drop-icons">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-menu-button-wide me-2"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v2A1.5 1.5 0 0 1 14.5 5h-13A1.5 1.5 0 0 1 0 3.5zM1.5 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5z" />
                        <path d="M2 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m10.823.323-.396-.396A.25.25 0 0 1 12.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0M0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5" />
                      </svg>
                      K12 Education
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    <div className="drop-icons">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-highlighter me-2"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.096.644a2 2 0 0 1 2.791.036l1.433 1.433a2 2 0 0 1 .035 2.791l-.413.435-8.07 8.995a.5.5 0 0 1-.372.166h-3a.5.5 0 0 1-.234-.058l-.412.412A.5.5 0 0 1 2.5 15h-2a.5.5 0 0 1-.354-.854l1.412-1.412A.5.5 0 0 1 1.5 12.5v-3a.5.5 0 0 1 .166-.372l8.995-8.07zm-.115 1.47L2.727 9.52l3.753 3.753 7.406-8.254zm3.585 2.17.064-.068a1 1 0 0 0-.017-1.396L13.18 1.387a1 1 0 0 0-1.396-.018l-.068.065zM5.293 13.5 2.5 10.707v1.586L3.707 13.5z"
                        />
                      </svg>
                      Postsecondary LP
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    <div className="drop-icons">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-play-btn-fill me-2"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2m6.79-6.907A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z" />
                      </svg>
                      Competition LP
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    <div className="drop-icons">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-pin-map-fill me-2"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8z"
                        />
                        <path
                          fillRule="evenodd"
                          d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"
                        />
                      </svg>
                      Localization Services
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    <div className="drop-icons">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-highlighter me-2"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.096.644a2 2 0 0 1 2.791.036l1.433 1.433a2 2 0 0 1 .035 2.791l-.413.435-8.07 8.995a.5.5 0 0 1-.372.166h-3a.5.5 0 0 1-.234-.058l-.412.412A.5.5 0 0 1 2.5 15h-2a.5.5 0 0 1-.354-.854l1.412-1.412A.5.5 0 0 1 1.5 12.5v-3a.5.5 0 0 1 .166-.372l8.995-8.07zm-.115 1.47L2.727 9.52l3.753 3.753 7.406-8.254zm3.585 2.17.064-.068a1 1 0 0 0-.017-1.396L13.18 1.387a1 1 0 0 0-1.396-.018l-.068.065zM5.293 13.5 2.5 10.707v1.586L3.707 13.5z"
                        />
                      </svg>
                      Editorial and pre-press
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    <div className="drop-icons">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-universal-access me-2"
                        viewBox="0 0 16 16"
                      >
                        <path d="M9.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M6 5.5l-4.535-.442A.531.531 0 0 1 1.531 4H14.47a.531.531 0 0 1 .066 1.058L10 5.5V9l.452 6.42a.535.535 0 0 1-1.053.174L8.243 9.97c-.064-.252-.422-.252-.486 0l-1.156 5.624a.535.535 0 0 1-1.053-.174L6 9z" />
                      </svg>
                      Accessibility
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    <div className="drop-icons">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-mortarboard-fill me-2"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z" />
                        <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z" />
                      </svg>
                      Abroad:
                    </div>
                  </Dropdown.Item>
                  {/* Other Dropdown Items */}
                </Dropdown.Menu>
              </Dropdown>
              <Nav.Link href="/" className="me-3 nav-button">
                Home
              </Nav.Link>
              <Nav.Link className="me-3 nav-button" href="/about">
                About
              </Nav.Link>
              <Nav.Link className="me-3 nav-button" href="/service">
                Services
              </Nav.Link>
              <Nav.Link className="me-3 nav-button" href="/contact">
                Contact
              </Nav.Link>

              {isLoggedIn ? (
                <li>
                  <Nav.Link className="me-3 nav-button" href="/logout">
                    Logout
                  </Nav.Link>
                </li>
              ) : (
                <>
                  <Nav.Link className="me-3 nav-button" href="/register">
                    {" "}
                    Register{" "}
                  </Nav.Link>
                  <Nav.Link className="me-3 nav-button" href="/login">
                    {" "}
                    Login{" "}
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {showChart && <ChartComponent />}{" "}
    </>
  );
};

export default NavBar;
