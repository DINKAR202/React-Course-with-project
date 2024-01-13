import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-dark">
        <Container>
          <Navbar.Brand className="text-white" href="/"><b>LOGO</b></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link className="text-white" href="/">Home</Nav.Link>
              <Nav.Link href="/about" className="text-white">About</Nav.Link>
              <Nav.Link href="/service" className="text-white">Services</Nav.Link>
              <Nav.Link href="/contact" className="text-white">Contact</Nav.Link>
              <Nav.Link href="/login" className="text-white">login</Nav.Link>
              <Nav.Link href="/register" className="text-white">Register</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
