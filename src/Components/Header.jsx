import React from 'react'
import './Header.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../assets/logo.png'

const Header = () => {
  return (
    <><Navbar expand="lg" className="container ">
      <Container fluid>
        <Navbar.Brand href="#"><img src={Logo} alt="logoimg" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" id='homeClr'>Home</Nav.Link>
            <Nav.Link href="#action2" className='clr'>About</Nav.Link>
            <Nav.Link href="#action3" className='clr'>Services</Nav.Link>
            <Nav.Link href="#action4" className='clr'>Doctors</Nav.Link>
            <Nav.Link href="#action5" className='clr'>Appointments</Nav.Link>
            <Nav.Link href="#action6" className='clr'>Contacts</Nav.Link>

</Nav>
            <Button variant="" className='Btn'>Book Now</Button>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header





