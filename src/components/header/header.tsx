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
            <Nav.Link
              className="navbar-color"
              href="https://www.evernote.com/shard/s480/sh/e6c82f98-290e-f99f-b369-69e0da17f55e/sOpzCJ0NUErWUBJbC1ZEPN2PXmcmjKfiIIsBv5GHGcFHZXilEMxqK5asyg"
              target="_blank"
              rel="noreferror"
            >
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
