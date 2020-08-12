import React from 'react'
import { Container } from 'reactstrap'

const SectionInfo = () => {
  return (
    <section className="section">
      <div className="section__bitmap-right">
        <img src="../../assets/images/group-4.png" alt=""/>
      </div>
      <Container>
        <Container className="section__w-533">
          <div className="section__quote">
            <p><span className="section__quote--rich-blue">Deffinition;</span> a practice or exercise to test or improve one's fitness for athletic competition, ability, or performance to exhaust (something, such as a mine) by working to devise, arrange, or achieve by resolving difficulties. Merriam-Webster.com Dictionary.</p>
          </div>
          <p className="section__author">-weeknd team</p>
        </Container>
      </Container>
    </section>
  )
}

export default SectionInfo
