import React from 'react'
import './semantics.css'

import { Container, Row, Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

export const Semantic = () => {
  return (
    <Container className="semantic-container">
      <Row className="hero-row">
        <Col md={6} className="hero-column">
          <img
            src={require('../../assets/web-developer.png')}
            alt="semantic-img"
            className="svg-img"
          />
        </Col>
        <Col md={6} className="hero-column">
          <h2 className="semantic-hero-h1">
            Validate Your Website Against the Semantic Standards
          </h2>
          <p>
            Semantic HTML or semantic markup is HTML that introduces meaning to
            the web page rather than just presentation. All the tags should have
            meaning what they intend to do, and we should discourage using them
            out of their role.
          </p>
          <p>
            For e.g. a {'<p>'} element specifies by its name that it is a
            paragraph element, however a {'<div>'} element does not specify any
            meaning, hence is non-semantic. It is recommended to follow semantic
            standards for higher accessibility, SEO results and more
          </p>
          <Button className="semantic-hero-button">
            <a
              href="https://en.wikipedia.org/wiki/Semantic_Web"
              target="_blank"
              className="semantic-button-link"
              rel="noreferrer"
            >
              More on Semantic
            </a>{' '}
          </Button>
        </Col>
      </Row>
      <Row className="hero-row">
        <Col md={6} className="hero-column">
          <h2 className="semantic-hero-h1">Semantic Standards That We Use</h2>
          <p>
            We evaluate the semanticity of the website based on certain{' '}
            <a href="/semantics/standards">standards</a> gathered out from
            extensive research from across the web
          </p>
          <div className="hero-menu-div">
            <p className="semantic-hero-menu-para">
              <FontAwesomeIcon className="check-icon" icon={faCircleCheck} />
              Recommendations, not errors
            </p>
            <p className="semantic-hero-menu-para">
              <FontAwesomeIcon className="check-icon" icon={faCircleCheck} />
              Semantic Standards researched from various sources
            </p>
            <p className="semantic-hero-menu-para">
              <FontAwesomeIcon className="check-icon" icon={faCircleCheck} />
              Able to mark erros on the dom by highlighting and icons
            </p>
            <p className="semantic-hero-menu-para">
              <FontAwesomeIcon className="check-icon" icon={faCircleCheck} />
              Detailed messages and possible solutions on clicking an element
            </p>
          </div>
        </Col>
        <Col md={6} className="hero-column img-column-right">
          <img
            src={require('../../assets/semantics.png')}
            alt="semantic-img"
            className="semantic-dom-img"
          />
        </Col>
      </Row>
      <Row className="hero-row">
        <Col md={6} className="hero-column">
          <img
            src={require('../../assets/detailed-error.png')}
            alt="semantic-img"
            className="semantic-detailed-img"
          />
        </Col>
        <Col md={6} className="hero-column">
          <h2 className="semantic-hero-h1">
            Get Detailed Errors and Issues On a New Tab
          </h2>
          <p>
            On running the check semantics option, a new chrome tab also opens
            containing all the detailed errors that we found while traversing
            the dom
          </p>
          <div className="hero-menu-div">
            <p className="semantic-hero-menu-para">
              <FontAwesomeIcon className="check-icon" icon={faCircleCheck} />
              Detailed errors on all elements in a new tab
            </p>
            <p className="semantic-hero-menu-para">
              <FontAwesomeIcon className="check-icon" icon={faCircleCheck} />
              Ability to view position of element on window
            </p>
            <p className="semantic-hero-menu-para">
              <FontAwesomeIcon className="check-icon" icon={faCircleCheck} />
              Get the full path and highlight a specific element
            </p>
            <p className="semantic-hero-menu-para">
              <FontAwesomeIcon className="check-icon" icon={faCircleCheck} />
              Errors separated with respect to element type
            </p>
            <p className="semantic-hero-menu-para">
              <FontAwesomeIcon className="check-icon" icon={faCircleCheck} />
              Also gives accessibility violations using w3c APIs
            </p>
          </div>
        </Col>
      </Row>
      <Row className="hero-row">
        <Col md={6} className="hero-column">
          <h2 className="semantic-hero-h1">
            Violation Messages and Possible Fixes On the Dom
          </h2>
          <p>
            We evaluate the semanticity of the website based on certain gathered
            out from extensive research from across the web
          </p>
          <div className="hero-menu-div">
            <p className="semantic-hero-menu-para">
              <FontAwesomeIcon className="check-icon" icon={faCircleCheck} />
              Highlights the elements with violations on the dom
            </p>
            <p className="semantic-hero-menu-para">
              <FontAwesomeIcon className="check-icon" icon={faCircleCheck} />
              Also shows possible fixes to get rid of violation, if possible
            </p>
            <p className="semantic-hero-menu-para">
              <FontAwesomeIcon className="check-icon" icon={faCircleCheck} />
              Some errors are self-explanatory
            </p>
            <p className="semantic-hero-menu-para">
              <FontAwesomeIcon className="check-icon" icon={faCircleCheck} />
              Able to handle mutations on website for dynamic loading
            </p>
          </div>
        </Col>
        <Col md={6} className="hero-column img-column-right">
          <img
            src={require('../../assets/semantic-modal.png')}
            alt="semantic-img"
            className="semantic-img-modal"
          />
        </Col>
      </Row>
    </Container>
  )
}
