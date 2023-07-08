import React from 'react'
import './density.css'

import { Container, Row, Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

export const Density = () => {
  return (
    <Container className="semantic-container">
      <Row className="hero-row">
        <Col className="hero-column">
          <img
            src={require('../../assets/density.png')}
            alt="semantic-img"
            className="svg-img-styles"
          />
        </Col>
        <Col className="hero-column">
          <h2 className="semantic-hero-h1">
            Validate Density of Dome Specific Elements
          </h2>
          <p>
            Validate the density or spacings of some specific elements like -
            heading and main, buttons or rows of the heading and more. We
            support configuration for two types of spacing - spacious and
            compact
          </p>
          <p>
            Similar to the other two options of the extension, here also we open
            the new tab and show detailed violations along with highligthing the
            element on the dom itself
          </p>
          <Button className="semantic-hero-button">
            <a href="/density/configuration" className="semantic-button-link">
              Density Config
            </a>{' '}
          </Button>
        </Col>
      </Row>
      <Row className="hero-row">
        <Col className="hero-column">
          <h2 className="semantic-hero-h1">
            Validate the Density and Show Violations
          </h2>
          <p>
            By default, we evaluate the density of specifc elements based on
            option provided by user to choose spacious or compact spacing
          </p>
          <div className="hero-menu-div">
            <p className="semantic-hero-menu-para">
              <FontAwesomeIcon className="check-icon" icon={faCircleCheck} />
              Travel the DOM and validate density against config
            </p>
            <p className="semantic-hero-menu-para">
              <FontAwesomeIcon className="check-icon" icon={faCircleCheck} />
              Similar to the other two options, highlight and show detailed
              error messages
            </p>
            <p className="semantic-hero-menu-para">
              <FontAwesomeIcon className="check-icon" icon={faCircleCheck} />
              Also covers the case to identify headers and main by assigning
              custom attributes
            </p>
            <p className="semantic-hero-menu-para">
              <FontAwesomeIcon className="check-icon" icon={faCircleCheck} />
              Ability to constantly look for mutations as well
            </p>
          </div>
        </Col>
        <Col className="hero-column img-column-right">
          <img
            src={require('../../assets/density-modal.png')}
            alt="semantic-img"
            className="styles-hero-img-screenshot"
          />
        </Col>
      </Row>
      <Row className="hero-row">
        <Col className="hero-column">
          <img
            src={require('../../assets/desnity-popupo.png')}
            alt="semantic-img"
            className="styles-popup-img"
          />
        </Col>
        <Col className="hero-column">
          <h2 className="semantic-hero-h1">
            Spacious, Compact, and Custom Configuration File
          </h2>
          <div className="hero-menu-div">
            <p className="semantic-hero-menu-para">
              <FontAwesomeIcon className="check-icon" icon={faCircleCheck} />
              You get two options with either spacious or compact configuration
            </p>
            <p className="semantic-hero-menu-para">
              <FontAwesomeIcon className="check-icon" icon={faCircleCheck} />
              The user must select one of the two to proceed
            </p>
            <p className="semantic-hero-menu-para">
              <FontAwesomeIcon className="check-icon" icon={faCircleCheck} />
              Alternatively, upload a custom configuration file
            </p>
            <p className="semantic-hero-menu-para">
              <FontAwesomeIcon className="check-icon" icon={faCircleCheck} />
              Click on submit to start the check
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
