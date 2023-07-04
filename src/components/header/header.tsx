import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './header.css'

import { Container, Nav, Navbar } from 'react-bootstrap'

export const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="header-navbar">
      <Container>
        <Navbar.Brand href="/">
          <span className="navbar-brand-name navbar-color">
            DOM Traverser Extension
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="navbar-color" href="/semantics">
              Semantics
            </Nav.Link>
            <Nav.Link className="navbar-color" href="/styles">
              Styles
            </Nav.Link>
            <Nav.Link className="navbar-color" href="/density">
              Density
            </Nav.Link>
            <Nav.Link className="navbar-color" href="/">
              About
            </Nav.Link>
            <Nav.Link className="navbar-color" href="/">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
