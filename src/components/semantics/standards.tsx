import React from 'react'
import './semantics.css'

import { Container, Row, Col } from 'react-bootstrap'
import { data } from './standardData'

export const Standards = () => {
  return (
    <Container>
      <Row className="standards-row">
        <Col md={6}>
          <h1 className="standards-h1">The semantic standards we follow</h1>
          <h5>Why do we need to worry about semanticity</h5>
          <ul>
            <li>Readability Issues</li>
            <li>Accessibility Issues</li>
            <li>
              Consistency issues, its better everyone follow same conventions
            </li>
            <li>SEO issues</li>
          </ul>
        </Col>
        <Col md={6} className="standards-column">
          <img
            src={require('../../assets/standards.png')}
            alt="semantic standards"
            className="standards-img"
          />
        </Col>
      </Row>
      <Row className="standards-row">
        <h3 className="standards-h3">
          Below are the standards we evaluate against
        </h3>
        <ul className="standards-ul">
          {data.map((data) => {
            return (
              <div>
                <li className="standards-li">{data.key}</li>
                <ul>
                  {data.value.map((val) => {
                    return <li>{val}</li>
                  })}
                </ul>
              </div>
            )
          })}
        </ul>
        <p>and more..</p>
      </Row>
    </Container>
  )
}
