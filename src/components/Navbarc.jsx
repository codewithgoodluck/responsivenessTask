import React from 'react';
import {
  Breadcrumb,
  Carousel,
  Container,
  Nav,
  Navbar,
  Form,
  NavDropdown,
  Row,
  Button,
  Dropdown,
  FormControl,
} from 'react-bootstrap';

const Navbarc = () => {
  return (
    <Container fluid>
       <Navbar bg="white" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src="Images/logo.svg" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Pricing</Nav.Link>
            <Nav.Link href="#action2">Product</Nav.Link>
            <Nav.Link href="#action2">About Us</Nav.Link>
            <Nav.Link href="#action2">Careers</Nav.Link>
            <Nav.Link href="#action2">Community</Nav.Link>
          </Nav>
          <div>
            <Button
              variant="secondary"
              style={{ borderRadius: '20px!important' }}
              size="lg"
              active
            >
              Get Started
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Container>
   
  );
};

export default Navbarc;
