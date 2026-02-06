import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import './Home.css'
import Carousel from 'react-bootstrap/Carousel'
import bgimg from './7052824.jpg'
import abtimg from './Aboutimg.jpg'

const Home = () => {
  return (
    <>
      <section className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <div className="hero-box">
                <h1 className="hero-title">THE GLAM</h1>
                <p className="hero-tagline">Your Beauty,Our Passion</p>
              </div>
            </Col>

<Col md={6}>
  <div className="image-placeholder">
    <img src={bgimg} alt="Hero" className="placeholder-img" />
  </div>
</Col>

          </Row>
        </Container>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section">
        <Container>
          <h2 className="section-title text-center">Why Choose Us?</h2>
          <Row className="align-items-center mt-4">
            <Col md={6}>
              <div className="image-placeholder">
                <img src={abtimg} alt="Hero" className="placeholder-img" />
              </div>
            </Col>
            <Col md={6}>
              <p className="text-lines">
                With nearly a decade of experience in the beauty industry, our parlour is built on trust, dedication, and quality service. What started as a small home-based setup in 2015 has grown into a well-established beauty parlour in Hubballi—thanks to consistent customer satisfaction and personalized care.

We focus on understanding each client’s needs and delivering services with attention to detail and professionalism. As the industry evolves, we continue to improve by adopting modern techniques and providing a convenient digital experience that allows customers to explore our services and book appointments with ease.

Choosing us means choosing experience, reliability, and a commitment to helping you look and feel your best. 🌸
              </p>
            </Col>
          </Row>
        </Container>
      </section>


<section className="section">
  <Container>
    <h2 className="section-title text-center">Testimonials</h2>

    <Carousel className="testimonial-carousel" indicators={false}>
      <Carousel.Item>
        <div className="testimonial-slide">
          <p className="testimonial-text">
            "Amazing service and very friendly staff. I always feel relaxed
            and confident after every visit."
          </p>
          <h6 className="testimonial-name">Sara</h6>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="testimonial-slide">
          <p className="testimonial-text">
            “A wonderful place with skilled professionals who truly care about their customers. The services are relaxing, affordable, and always well done.”
          </p>
          <h6 className="testimonial-name">Laya</h6>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="testimonial-slide">
          <p className="testimonial-text">
           “I’ve been coming here for years and the quality has always been consistent. Great attention to detail and very friendly service. Highly recommended.”
          </p>
          <h6 className="testimonial-name">Dhanya</h6>
        </div>
      </Carousel.Item>
    </Carousel>
  </Container>
</section>

    </>
  )
}

export default Home
