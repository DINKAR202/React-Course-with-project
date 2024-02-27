import { useEffect, useState } from "react";
import "./Navbar.css";
import { useAuth } from "../store/auth";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import Navbar from "react-bootstrap/Navbar";
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
            <Image style={{ width: "75px" }} src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle
            onClick={() => setCollapsed(!isCollapsed ? "show" : null)}
            aria-controls="basic-navbar-nav"
            style={{ background: "#10bad4" }}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto me-5">
              <Nav.Link href="/" className="me-3 font-weight-bold">
                Home
              </Nav.Link>
              <Nav.Link className="me-3" href="/about">
                About
              </Nav.Link>
              <Nav.Link className="me-3" href="/service">
                Services
              </Nav.Link>
              <Nav.Link className="me-3" href="/contact">
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
                  <Nav.Link className="me-3" href="/logout">
                    Logout
                  </Nav.Link>
                </li>
              ) : (
                <>
                  <li>
                    <Nav.Link className="me-3" href="/register">
                      {" "}
                      Register{" "}
                    </Nav.Link>
                  </li>
                  <li>
                    <Nav.Link className="me-3" href="/login">
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
