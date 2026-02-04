import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './About.css'
import Aboutus from './Aboutus.jpg'

const About = () => {
  return (
    <section className="about-section">
      <Container>

        {/* ABOUT US */}
        <h2 className="section-title text-center">About Us</h2>

        <Row className="align-items-start mt-4">
          {/* Text */}
          <Col md={7}>
            <p className="about-text">
              Our client, Ms. Devaki Shetty, began her journey in the beauty
              industry in 2015 with a small home-based parlour. Through
              dedication and quality service, she gradually expanded her
              business and later established a physical beauty parlour in
              Hubballi.
            </p>
            <p className="about-text">
              With a growing customer base and increasing competition, she is
              now focused on strengthening her digital presence. The goal is to
              provide customers with an easy way to explore services, understand
              expertise, and conveniently request appointments online.
            </p>
          </Col>

          {/* Images */}
          <Col md={5}>
            <div className="about-image-box large">
              <img src={Aboutus} alt="About" />
            </div>
          </Col>
        </Row>

        <hr className="divider" />

        {/* MISSION */}
        <Row className="mt-4">
          <Col>
            <h3 className="sub-title">Mission</h3>
            <p className="about-text">
              Our mission is to provide high-quality beauty services in a
              comfortable and welcoming environment. We aim to enhance every
              client’s confidence by offering personalized care, professional
              techniques, and consistent service excellence.
            </p>
          </Col>
        </Row>

        {/* VISION */}
        <Row className="mt-4">
          <Col>
            <h3 className="sub-title">Vision</h3>
            <p className="about-text">
              Our vision is to become a trusted and well-recognized beauty
              destination by combining traditional expertise with modern
              practices. We strive to grow digitally while maintaining strong
              relationships with our clients through quality and reliability.
            </p>
          </Col>
        </Row>

      </Container>
    </section>
  )
}

export default About
