import React, { useState } from 'react'
import './contact.css'

import { Container, Button, Row, Col, Form } from 'react-bootstrap'

export const Contact = () => {
  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (name === '' || subject === '' || message === '') return
    console.log(name, subject, message)

    let mailtoLink = 'mailto:yash.vardhan@sprinklr.com'
    mailtoLink += `?subject=${subject}`
    mailtoLink += `&body=Name: ${name}`
    mailtoLink += `%OAmessage: ${message}`
    window.location.href = mailtoLink
  }
  return (
    <Container className="main-form-container">
      <h1 className="form-h1">Have any questions or issues?</h1>
      <Row className="contact-row">
        <Col md={6} className="contact-column">
          <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                required
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your first and last name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Subject</Form.Label>
              <Form.Select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
                aria-label="Default select example"
              >
                <option>Choose from dropdown</option>
                <option value="faced-an-issue">
                  Faced an issue while using the extension
                </option>
                <option value="got-wrong-result">
                  Extension giving wrong results
                </option>
                <option value="give-feedback">
                  Wanted to submit a feedback
                </option>
              </Form.Select>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Your Message</Form.Label>
              <Form.Control
                required
                as="textarea"
                rows={5}
                placeholder="Please describe your query in detail"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>
            <Button className="form-submit-button" type="submit">
              Mail to us
            </Button>
          </Form>
        </Col>
        <Col md={6} className="contact-column img-column-right">
          <img
            src={require('../../assets/contact.png')}
            alt="send-mail"
            className="form-mail-img"
          />
        </Col>
      </Row>
    </Container>
  )
}
