import { useEffect, useState } from "react";
import "./Navbar.css";
import { useAuth } from "../store/auth";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import logo from "/images/logo.png";
import logotext from "/images/logo text.png";

const NavBar = () => {
  const { isLoggedIn } = useAuth();
  const [isSticky, setSticky] = useState(false); // Define a state variable for tracking whether the navigation bar is sticky
  const [isCollapsed, setCollapsed] = useState(null); // Define a state variable for tracking the collapse state of the navbar

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);

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
                  
                  <Dropdown.Item href="#/action-1">
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
                      Higher Education
                    </div>
                  </Dropdown.Item>

                  <Dropdown.Item href="#/action-3">
                    <div className="drop-icons">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-book-fill me-2"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                      </svg>
                      Learning Solutions
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
                      Editorial and Pre Press
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
                        className="bi bi-play-btn-fill me-2"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2m6.79-6.907A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z" />
                      </svg>
                      Video Solutions
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    <div className="drop-icons">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-pen-fill me-2"
                        viewBox="0 0 16 16"
                      >
                        <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001" />
                      </svg>
                      Writing Services
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    <div className="drop-icons">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-file-post me-2"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4 3.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5z" />
                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1" />
                      </svg>
                      Test Prep
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    <div className="drop-icons">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-display-fill me-2"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6 12q0 1-.25 1.5H5a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-.75Q10 13 10 12h4c2 0 2-2 2-2V4c0-2-2-2-2-2H2C0 2 0 4 0 4v6c0 2 2 2 2 2z" />
                      </svg>
                      Digital Content
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    <div className="drop-icons">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-person-fill-check me-2"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4" />
                      </svg>
                      Our Experts
                    </div>
                  </Dropdown.Item>
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
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
              {isLoggedIn ? (
                <li>
                  <Nav.Link className="me-3 nav-button" href="/logout">
                    Logout
                  </Nav.Link>
                </li>
              ) : (
                <>
                  <li>
                    <Nav.Link className="me-3 nav-button" href="/register">
                      {" "}
                      Register{" "}
                    </Nav.Link>
                  </li>
                  <li>
                    <Nav.Link className="me-3 nav-button" href="/login">
                      {" "}
                      Login{" "}
                    </Nav.Link>
                  </li>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
