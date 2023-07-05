import React from 'react'
import './styles.css'

import { Container, Row, Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

export const Styles = () => {
  return (
    <Container className="semantic-container">
      <Row className="hero-row">
        <Col className="hero-column">
          <img
            src={require('../../assets/styles.png')}
            alt="semantic-img"
            className="styles-svg-img"
          />
        </Col>
        <Col className="hero-column">
          <h2 className="semantic-hero-h1">
            Validate Styles Applied to Your Website
          </h2>
          <p>
            Validate the styles applied to your website against set of standards
            that can be input as a configuration file or you can also use
            sprinklr's default styles configuration
          </p>
          <p>
            We traverse the dom and validate elements against the inputed or the
            default styles configuration to collect elemrents which violate the
            configuration and show them in a presentable manner
          </p>
          <Button className="semantic-hero-button">
            <a
              href="https://www.evernote.com/shard/s480/sh/484515b5-51ef-1563-fa2a-a3e6f0859cee/smpYTrtu2ni8ZqJkRz5cFE4lW3b56uUo9VLeo8-yLHqgz0ouytw-wiUWrg"
              target="_blank"
              className="semantic-button-link"
              rel="noreferrer"
            >
              Default Styles
            </a>{' '}
          </Button>
        </Col>
      </Row>
      <Row className="hero-row">
        <Col className="hero-column">
          <h2 className="semantic-hero-h1">
            How We Validate and Show Results On Dom
          </h2>
          <p>
            By default, we evaluate the styles of a website's elements based on
            a configuration file gathered from spaceweb themes, your config
            should follow the same JSON format
          </p>
          <div className="hero-menu-div">
            <p className="semantic-hero-menu-para">
              <FontAwesomeIcon className="check-icon" icon={faCircleCheck} />
              Travel the DOM and validate styles against configuration
            </p>
            <p className="semantic-hero-menu-para">
              <FontAwesomeIcon className="check-icon" icon={faCircleCheck} />
              If an element violates styles, highlight it with cross icon and
              border
            </p>
            <p className="semantic-hero-menu-para">
              <FontAwesomeIcon className="check-icon" icon={faCircleCheck} />
              Detailed error messages on clicking the element cross icon
            </p>
            <p className="semantic-hero-menu-para">
              <FontAwesomeIcon className="check-icon" icon={faCircleCheck} />
              Ability to constantly look for mutations
            </p>
          </div>
        </Col>
        <Col className="hero-column img-column-right">
          <img
            src={require('../../assets/styles-modal.png')}
            alt="semantic-img"
            className="styles-modal-img"
          />
        </Col>
      </Row>
      <Row className="hero-row">
        <Col className="hero-column">
          <img
            src={require('../../assets/styles-tab.png')}
            alt="semantic-img"
            className="styles-detailed-img"
          />
        </Col>
        <Col className="hero-column">
          <h2 className="semantic-hero-h1">Get Detailed Errors On a New Tab</h2>
          <p>
            On running the check styles option, a new chrome tab also opens
            containing all the detailed errors that we found while validating
            the styles of website against the configuration provided
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
              Relevant alerts and error messages for ongoing or failed actions
            </p>
          </div>
        </Col>
      </Row>
      <Row className="hero-row">
        <Col className="hero-column">
          <h2 className="semantic-hero-h1">
            Default and Custom Configuration File
          </h2>
          <div className="hero-menu-div">
            <p className="semantic-hero-menu-para">
              <FontAwesomeIcon className="check-icon" icon={faCircleCheck} />
              You get two options with either default or custom configuration
            </p>
            <p className="semantic-hero-menu-para">
              <FontAwesomeIcon className="check-icon" icon={faCircleCheck} />
              The custom file must be a JSON in the specified format
            </p>
            <p className="semantic-hero-menu-para">
              <FontAwesomeIcon className="check-icon" icon={faCircleCheck} />
              You can download the config, edit and re-upload it
            </p>
          </div>
        </Col>
        <Col className="hero-column img-column-right">
          <img
            src={require('../../assets/styles-popup.png')}
            alt="semantic-img"
            className="styles-popup-img"
          />
        </Col>
      </Row>
    </Container>
  )
}
