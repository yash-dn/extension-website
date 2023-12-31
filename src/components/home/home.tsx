import React from 'react'
import './home.css'

import { CardComponent } from '../card/card'

import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

export const Home = () => {
  return (
    <Container>
      <Row className="hero-row">
        <Col md={6} className="hero-column">
          <img
            className="popup-img-svg"
            src={require('../../assets/home.png')}
            alt="popup-img"
          />
        </Col>
        <Col md={6} className="hero-column">
          <h1 className="hero-h1">Website Traverser Chrome Extension</h1>
          <h4>
            Validate your websites against semantic standards, styles
            configuration and density for some specific elements
          </h4>
          <p className="home-hero-para">
            Traverse the dom, inspect each element individually, and report
            errors in a presentable format
          </p>
        </Col>
      </Row>
      <Row className="hero-row">
        <Col md={6} className="hero-column">
          <h1 className="hero-h1">Features of the Chrome Extension</h1>
          <p>
            The chrome extension has been built keeping in mind the ease of
            usage as the first priority, we also have the video explaining the
            use case on the extension, it has been tried to keep the
            user-interface friendly and interactive
          </p>
          <div className="hero-menu-div">
            <p className="hero-menu-para">
              <FontAwesomeIcon className="check-icon" icon={faCircleCheck} />
              Easy to use
            </p>
            <p className="hero-menu-para">
              <FontAwesomeIcon className="check-icon" icon={faCircleCheck} />
              Easy to plug on any website
            </p>
            <p className="hero-menu-para">
              <FontAwesomeIcon className="check-icon" icon={faCircleCheck} />
              Works on both local and live websites
            </p>
            <p className="hero-menu-para">
              <FontAwesomeIcon className="check-icon" icon={faCircleCheck} />
              Configurable for checking styles
            </p>
          </div>
        </Col>
        <Col md={6} className="img-column-right hero-column">
          <img
            className="full-img-svg"
            src={require('../../assets/popup.png')}
            alt="popup-img"
          />
        </Col>
      </Row>
      <Row className="hero-row">
        <Col md={6} className="hero-column">
          <img
            className="popup-img-svg"
            src={require('../../assets/react.png')}
            alt="popup-img"
          />
        </Col>
        <Col md={6} className="hero-column">
          <h1 className="hero-h1">Architecture of the Extension</h1>
          <div className="hero-menu-div">
            <p className="hero-menu-para">
              <FontAwesomeIcon className="check-icon" icon={faCircleCheck} />
              Built using React Js and typescript
            </p>
            <p className="hero-menu-para">
              <FontAwesomeIcon className="check-icon" icon={faCircleCheck} />
              Follows container and presentational components patterns
            </p>
            <p className="hero-menu-para">
              <FontAwesomeIcon className="check-icon" icon={faCircleCheck} />
              Render props, controlled components, conditional rendering
            </p>
            <p className="hero-menu-para">
              <FontAwesomeIcon className="check-icon" icon={faCircleCheck} />
              Testing using Jest in Typescript
            </p>
          </div>
        </Col>
      </Row>
      <Row className="hero-row">
        <div className="content-heading-div">
          <h1 className="content-h1">Major Components of the Extension</h1>
        </div>
        <Col md={4} className="hero-column home-content-card">
          <CardComponent
            icon="semantics"
            title="Check Semantics"
            text="Validate the website against some common semantic standards and more"
          />
        </Col>
        <Col md={4} className="hero-column home-content-card">
          <CardComponent
            icon="styles"
            title="Check Styles"
            text="Validate the styles of website against default or custom configuration file"
          />
        </Col>
        <Col md={4} className="hero-column home-content-card">
          <CardComponent
            icon="density"
            title="Check Density"
            text="Validate the density of specific elements against compact and spacious view"
          />
        </Col>
      </Row>
    </Container>
  )
}
