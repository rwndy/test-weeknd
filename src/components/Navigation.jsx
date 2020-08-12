import React from 'react'
import { Container } from 'reactstrap'


const Navigation = () => {
  return (
    <nav className="navigation">
      <Container>
        <div className="navigation__brand">
          <a href="/" className="img-brand">
            <img src="../../assets/images/bitmap-brand.png" alt="bitmap logo"/>
          </a>
          <div className="navigation__notif">
            <p className="navigation__greeting">Good Morning</p>
            <p className="navigation__username">Fellas</p>
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default Navigation
