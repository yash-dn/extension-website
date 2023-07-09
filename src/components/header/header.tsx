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
              <p className="nav-para">Semantics</p>
            </Nav.Link>
            <Nav.Link className="navbar-color" href="/styles">
              <p className="nav-para">Styles</p>
            </Nav.Link>
            <Nav.Link className="navbar-color" href="/density">
              <p className="nav-para">Density</p>
            </Nav.Link>
            <Nav.Link className="navbar-color" href="/usage">
              <p className="nav-para">Usage</p>
            </Nav.Link>
            <Nav.Link className="navbar-color" href="/contact">
              <p className="nav-para">Contact</p>
            </Nav.Link>
            <Nav.Link
              className="navbar-color"
              href="https://drive.google.com/file/d/1Qnc9sTqCCzbjlUCUXiBKQM47M-NbmeLG/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <p className="nav-para">Video</p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
