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
              <p>Semantics</p>
            </Nav.Link>
            <Nav.Link className="navbar-color" href="/styles">
              <p>Styles</p>
            </Nav.Link>
            <Nav.Link className="navbar-color" href="/density">
              <p className="nav-para">Density</p>
            </Nav.Link>
            <Nav.Link className="navbar-color" href="/usage">
              <p className="nav-para">Usage</p>
            </Nav.Link>
            <Nav.Link className="navbar-color" href="/contact">
              <p>Contact</p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
