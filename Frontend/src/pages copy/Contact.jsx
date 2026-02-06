import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaClock, FaMapMarkerAlt } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  return (
    <section className="contact-section">
      <Container>
        <Row className="justify-content-center text-center">

          {/* STORE TIMING */}
          <Col md={5} className="info-card">
            <FaClock className="info-icon" />
            <h2 className="info-title">Store Timings</h2>
            <p className="info-text">
              Monday – Saturday
            </p>
            <p className="info-highlight">
              10:00 AM – 7:00 PM
            </p>
            <p className="info-text">
              Sunday : <span className="closed">Holiday</span>
            </p>
          </Col>

          {/* LOCATION */}
          <Col md={5} className="info-card">
            <FaMapMarkerAlt className="info-icon" />
            <h2 className="info-title">Our Location</h2>
            <p className="info-text">
              The Glam Beauty Parlour
            </p>
            <p className="info-text">
              Gokul Road, Nehru Nagar
            </p>
            <p className="info-highlight">
              Hubballi, Karnataka
            </p>
          </Col>

        </Row>
      </Container>
    </section>
  )
}

export default Contact
