import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";
function BasicExample() {
  return (
    <div className="section">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <a href="#">
            <img src="/img/logo.png" alt="logo" />
          </a>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* me auto = left side, Ms-Auto = right side */}
            <Nav className="ms-auto">
              <Nav.Link className="custom-nav-link" href="#home">Home</Nav.Link>
              <Nav.Link className="custom-nav-link" href="#link">About Us</Nav.Link>
              <Nav.Link className="custom-nav-link" href="#link">Services</Nav.Link>
              <Nav.Link className="custom-nav-link" href="#link">Our Team</Nav.Link>
              <Nav.Link className="custom-nav-link" href="#link">Price Plan</Nav.Link>
              <Nav.Link className="custom-nav-link" href="#link">Testimonials</Nav.Link>
              <Nav.Link className="custom-nav-link" href="#link">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default BasicExample;
