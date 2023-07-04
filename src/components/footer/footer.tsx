import React from 'react'
import './footer.css'

import { Container, Row, Col } from 'react-bootstrap'

export const Footer = () => {
  return (
    <div className="footer-main-div">
      <Container>
        <div className="footer-container-div">
          <Row>
            <Col xs={8} className="footer-logo-col">
              <img
                className="sprinklr-logo"
                src={require('../../assets/sprinklr.png')}
                alt="sprinklr-logo"
              />
            </Col>
            <Col xs={4} className="footer-links-col">
              <Row>
                <Col>Version 0.0.1</Col>
                <Col>
                  <a className="footer-links" href="github.com" target="_blank">
                    GitLab
                  </a>
                </Col>
                <Col>
                  <a className="footer-links" href="/contact" target="_blank">
                    Contact
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}
