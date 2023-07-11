import React from 'react'
import './usage.css'

import { Container, Row, Col } from 'react-bootstrap'
import { usageData, semanticData, stylesData, densityData } from './usageData'

export const Usage = () => {
  return (
    <Container>
      <Row className="standards-row">
        <Col md={6}>
          <h1 className="standards-h1">The how-to-use of the extension</h1>
          <h5>The user-guide for a seamless usage of the extension</h5>
          <ul>
            <li>The workflow of the extension</li>
            <li>Separate usage for semantics option</li>
            <li>Separate usage for styles and density option</li>
            <li>
              Extension can be installed from -{' '}
              <a
                href="https://chrome.google.com/webstore/detail/dom-traversal-extension/dfmlldndmgpnehmldhgejcpeoggjhhjj"
                target="_blank"
                rel="noreferrer"
              >
                DOM Validation Extension
              </a>
            </li>
            <li>
              Alternatively, the extension can be set up and loaded unpacked
              locally from -{' '}
              <a
                href="https://prod-gitlab.sprinklr.com/sprinklr/frontend/interns-2023/website-dom-validation-chrome-extension"
                target="_blank"
                rel="noreferrer"
              >
                GitLab
              </a>
            </li>
          </ul>
        </Col>
        <Col md={6} className="standards-column">
          <img
            src={require('../../assets/terms.png')}
            alt="semantic standards"
            className="usage-img"
          />
        </Col>
      </Row>
      <Row className="standards-row">
        <Col md={6}>
          <img
            src={require('../../assets/workflow.png')}
            alt="semantic standards"
            className="usage-img-workflow"
          />
        </Col>
        <Col md={6}>
          <h1 className="standards-h1">The general workflow of extension</h1>
          <ul>
            {usageData.map((data) => {
              return <li>{data}</li>
            })}
          </ul>
        </Col>
      </Row>
      <Row className="standards-row-usage">
        <Col md={6}>
          <h1 className="standards-h1">Guide for semantics option</h1>
          <ul className="standards-ul">
            {semanticData.map((data) => {
              return (
                <div>
                  <li>{data.key}</li>
                  {data.value.length > 0 && (
                    <ul>
                      {data.value.map((val) => {
                        return <li>{val}</li>
                      })}
                    </ul>
                  )}
                </div>
              )
            })}
          </ul>
        </Col>
        <Col md={6} className="standards-column">
          <img
            src={require('../../assets/semantic-modal.png')}
            alt="semantic-guide"
            className="usage-image-right"
          />
        </Col>
      </Row>
      <Row className="standards-row-usage">
        <Col md={6}>
          <img
            src={require('../../assets/styles-popup.png')}
            alt="styles-guide"
            className="usage-image-right"
          />
        </Col>
        <Col md={6}>
          <h1 className="standards-h1">Guide for styles option</h1>
          <ul className="standards-ul">
            {stylesData.map((data) => {
              return (
                <div>
                  <li>{data.key}</li>
                  {data.value.length > 0 && (
                    <ul>
                      {data.value.map((val) => {
                        return <li>{val}</li>
                      })}
                    </ul>
                  )}
                </div>
              )
            })}
          </ul>
        </Col>
      </Row>
      <Row className="standards-row-usage">
        <Col md={6}>
          <h1 className="standards-h1">Guide for density option</h1>
          <ul className="standards-ul">
            {densityData.map((data) => {
              return (
                <div>
                  <li>{data.key}</li>
                  {data.value.length > 0 && (
                    <ul>
                      {data.value.map((val) => {
                        return <li>{val}</li>
                      })}
                    </ul>
                  )}
                </div>
              )
            })}
          </ul>
        </Col>
        <Col md={6} className="standards-column">
          <img
            src={require('../../assets/density-popup.png')}
            alt="semantic-guide"
            className="usage-image-right"
          />
        </Col>
      </Row>
    </Container>
  )
}
