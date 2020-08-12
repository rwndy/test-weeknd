import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import axios from 'axios'
import Carousel from "react-multi-carousel"

const SectionTestimonial = () => {
  const [testimonials, setTestimonials] = useState([])
  const [tips, setTips] = useState([])
  
  useEffect(()=> {
    
    axios.all([
      axios.get(
        'https://wknd-take-home-challenge-api.herokuapp.com/testimonial'
      ),
      axios.get(
        'https://wknd-take-home-challenge-api.herokuapp.com/help-tips'
      )
    ])
    .then(axios.spread((getTestimoni, getTips) => {
      setTestimonials(getTestimoni.data)
      setTips(getTips.data)
    }))
    .catch((error) => {
      console.error(error)
    })
  }, [])

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: {
        max: 480,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 10
    }
  }
  return (
    <section className="section__testimoni">
      <Container className="w-75">
        <Row>
          <Col md="12">
            <div className="section__testimoni-box">
              <h1 className="section__testimoni-title">Testimonial</h1>
              <Carousel
                responsive={responsive}
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container-with-dots"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
              >
                {
                  testimonials.map(testimoni => (
                    <Container key={testimoni.id} className="w-75">
                    <div  className="section__testimoni-carousel">
                      <h4 className="section__testimoni-carousel--title">{testimoni.by}</h4>
                      <p className="section__testimoni-carousel--testimony">{testimoni.testimony}</p>
                    </div>
                    </Container>
                  ))
                }
              </Carousel>
            </div>
            <div className="section__testimoni-box-2">
              <div className="section__testimoni-pov">
                <h1 className="section__testimoni-pov-title">
                  POV
                </h1>
                <p className="section__testimoni-pov-sub">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                </p>
              </div>
              <div className="section__testimoni-resource">
                <h1 className="section__testimoni-pov-title">
                Resource
                </h1>
                <p className="section__testimoni-pov-sub">
                These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best
                </p>
              </div>
            </div>
            <div className="section__testimoni-tips">
              <h1 className="section__testimoni-pov-title mb-28">Help & Tips</h1>
              <div className="section-path">
                <img src="../assets/images/path-3.svg" alt="path"/>

              </div>
              <Container>
                <Row>
                  {
                    tips.map(tip => (
                      <Col sm="4" key={tip.id}>
                        <div className="section-tips">
                          <figure className="section-figure">
                            <img src={tip.image} alt="tips & help"/>
                          </figure>
                          <div className="section__contain-text">
                          <p className="section-text">{tip.title}</p>
                          <img src="../assets/images/oval-icon.svg" alt="icon"/>
                        </div>
                        </div>
                      </Col>
                    ))
                  }
                </Row>
              </Container>
            </div>
            <div className="section__testimoni-all">
        <h1 className="section__testimoni-pov-title mb-28">You’re all set.</h1>
        <p className="section__testimoni-pov-sub">
        The wise man therefore always holds in these matters to this principle of selection.
        </p>
      </div>
          </Col>
        </Row>
      </Container>
      <div className="section__bitmap-left">
          <img src="../assets/images/group-3.png" alt="bitmap"/>
        </div>
    </section>
  )
}

export default SectionTestimonial
