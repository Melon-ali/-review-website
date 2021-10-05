import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand > General Education</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav>
                            <Nav.Link  ><NavLink to="/home" className="link">Home</NavLink></Nav.Link>
                            <Nav.Link eventKey={2}>
                                <NavLink to
                                    ="/about" className="link">About</NavLink>
                            </Nav.Link>
                            <Nav.Link eventKey={2}>
                                <NavLink to
                                    ="/services" className="link">Services</NavLink>
                            </Nav.Link>
                            <Nav.Link eventKey={2}>
                                <NavLink to
                                    ="/update" className="link">Update</NavLink>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;