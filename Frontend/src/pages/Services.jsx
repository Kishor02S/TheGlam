import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Services.css'
import Eyebrow from './Eyebrow.jpg'
import Facial from './Facial.jpg'
import Haircut from './Haircut.jpg'
import Hairspa from './Hairspa.jpg'
import Pedicure from './Pedicure.jpg'
import Waxing from './Waxing.jpg'

const Services = () => {
  return (
    <section className="services-section">
      <Container>

        <h2 className="section-title text-center">Services</h2>

        {/* FACIAL */}
        <Row className="service-row align-items-center">
          <Col md={4}>
            <div className="service-image">
              <img src={Facial} alt="" />
            </div>
          </Col>
          <Col md={8}>
            <h4 className="service-title">Facial</h4>
            <p className="service-desc">
              A refreshing facial treatment that cleanses and revitalizes
              the skin, leaving it soft and glowing.
            </p>
            <p className="service-price">₹400</p>
          </Col>
        </Row>

        <hr className="service-divider" />

        {/* HAIRCUT */}
        <Row className="service-row align-items-center">
          <Col md={4}>
            <div className="service-image">
              <img src={Haircut} alt="" />
            </div>
          </Col>
          <Col md={8}>
            <h4 className="service-title">Haircut</h4>
            <p className="service-desc">
              Professional haircut service designed to match your style
              and enhance your overall look.
            </p>
            <p className="service-price">₹200</p>
          </Col>
        </Row>

        <hr className="service-divider" />

        {/* WAXING */}
        <Row className="service-row align-items-center">
          <Col md={4}>
            <div className="service-image">
              <img src={Waxing} alt="" />
            </div>
          </Col>
          <Col md={8}>
            <h4 className="service-title">Waxing</h4>
            <p className="service-desc">
              Gentle and hygienic waxing service that provides smooth
              and long-lasting results.
            </p>
            <p className="service-price">₹180</p>
          </Col>
        </Row>

        <hr className="service-divider" />

        {/* HAIR SPA & COLOR */}
        <Row className="service-row align-items-center">
          <Col md={4}>
            <div className="service-image">
              <img src={Hairspa} alt="" />
            </div>
          </Col>
          <Col md={8}>
            <h4 className="service-title">Hair Spa & Hair Color</h4>
            <p className="service-desc">
              Nourishing hair spa and coloring service to improve hair
              texture, strength, and shine.
            </p>
            <p className="service-price">₹400</p>
          </Col>
        </Row>

        <hr className="service-divider" />

        {/* PEDICURE */}
        <Row className="service-row align-items-center">
          <Col md={4}>
            <div className="service-image">
              <img src={Pedicure} alt="" />
            </div>
          </Col>
          <Col md={8}>
            <h4 className="service-title">Pedicure</h4>
            <p className="service-desc">
              A relaxing pedicure treatment that cleanses, nourishes,
              and refreshes your feet.
            </p>
            <p className="service-price">₹350</p>
          </Col>
        </Row>

{/* Eyebrow */}
        <Row className="service-row align-items-center">
          <Col md={4}>
            <div className="service-image">
              <img src={Eyebrow} alt="" />
            </div>
          </Col>
          <Col md={8}>
            <h4 className="service-title">Eye brows</h4>
            <p className="service-desc">
              A defined eyebrow!
            </p>
            <p className="service-price">₹50</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Services