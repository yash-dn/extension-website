import React, { useEffect, useState } from 'react'
import './styles.css'

import { Container, Row, Col } from 'react-bootstrap'
import { deafultConfig } from './stylesJson'

export const Configuration = () => {
  const [jsonData, setJsonData] = useState('')

  useEffect(() => {
    const data = JSON.stringify(deafultConfig, null, 2)
    setJsonData(data)
  }, [])

  return (
    <Container>
      <Row className="standards-row">
        <Col md={6}>
          <h1 className="standards-h1">Default Style Configuration Format</h1>
          <h5 className="config-h5">
            If not given any custom config, this is how we evaluate styles
          </h5>
          <ul>
            <li>Taken from the spaceweb styling guides</li>
            <li>Has two types of keys, property and elements</li>
            <li>Property keys have values as array of strings</li>
            <li>Elements keys have values as array of objects</li>
            <li>
              Elements' styles are specifc to elements while property ones are
              global
            </li>
            <li>The styles config must be JSON formatted</li>
          </ul>
        </Col>
        <Col md={6} className="standards-column">
          <img
            src={require('../../assets/server.png')}
            alt="styles-configuration"
            className="standards-img"
          />
        </Col>
      </Row>
      <Row className="standards-row">
        <h3 className="standards-h3">The default JSON file</h3>
        <pre className="styles-pre">
          <code className="styles-code">{jsonData}</code>
        </pre>
      </Row>
    </Container>
  )
}
