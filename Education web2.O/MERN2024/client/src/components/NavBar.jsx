import { useEffect, useState } from "react";
import "./Navbar.css";
import { useAuth } from "../store/auth";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import logo from "../../public/images/logo.png";

const NavBar = () => {
  const { isLoggedIn } = useAuth();
  const [isSticky, setSticky] = useState(false); // Define a state variable for tracking whether the navigation bar is sticky
  const [isCollapsed, setCollapsed] = useState(null); // Define a state variable for tracking the collapse state of the navbar

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setSticky(true); // Make the navigation bar sticky when the scroll position exceeds 50
      } else {
        setSticky(false); // Remove sticky behavior when the scroll position is less than or equal to 50
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
            <Image style={{ width: "85px" }} src={logo} />
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
                  <Dropdown.Item href="#/action-1">Education</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Business</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">General store</Dropdown.Item>
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
