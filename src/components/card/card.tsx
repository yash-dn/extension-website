import React from 'react'
import './card.css'

import { Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBorderTopLeft,
  faFlask,
  faRocket,
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

type CardProps = {
  icon: string
  title: string
  text: string
}

export const CardComponent = ({ icon, title, text }: CardProps) => {
  let logo = faRocket
  if (icon === 'styles') logo = faFlask
  else if (icon === 'density') logo = faBorderTopLeft
  return (
    <Link to={'/' + icon} className="card-link">
      <Card className="content-card">
        <Card.Body>
          <Card.Title>
            <p className="card-icon">
              <FontAwesomeIcon icon={logo} />
            </p>
            <p className="card-heading">{title}</p>
          </Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  )
}
