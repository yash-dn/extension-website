import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import { spaciousDensity, compactDensity } from './densityJson'

export const DensityConfig = () => {
  const [spacious, setSpacious] = useState('')
  const [compact, setCompact] = useState('')

  useEffect(() => {
    const spaciousData = JSON.stringify(spaciousDensity, null, 2)
    const compactData = JSON.stringify(compactDensity, null, 2)
    setSpacious(spaciousData)
    setCompact(compactData)
  }, [])
  return (
    <Container>
      <Row className="density-standards-row">
        <Col md={6}>
          <h1 className="standards-h1">The density standards we follow</h1>
          <h5>
            The default density configuration against which we evaluate specific
            elements on the website
          </h5>
          <ul>
            <li>Spacious Density for spacious view</li>
            <li>Compact density for compact view of the page</li>
            <li>Alternatively, users can also input their own configuration</li>
            <li>Make sure the config is JSON and follows correct pattern</li>
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
      <Row className="density-standards-row-bottom">
        <h3 className="density-h3">The spacious density config</h3>
        <pre className="styles-pre">
          <code className="styles-code">{spacious}</code>
        </pre>
        <h3 className="density-h3">The compact density config</h3>
        <pre className="styles-pre">
          <code className="styles-code">{compact}</code>
        </pre>
      </Row>
    </Container>
  )
}
