import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap'
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-start">

          {/* CONTACT INFO */}
          <Col md={4}>
            <h5 className="footer-title">Contact</h5>
            <ul className="footer-list">
              <li>
                <FaMapMarkerAlt />
                <span>Nehru Nagar, Hubballi</span>
              </li>
              <li>
                <FaEnvelope />
                <span>theglam@example.com</span>
              </li>
              <li>
                <FaPhone />
                <span>+91 93000 30000</span>
              </li>
            </ul>
          </Col>

          {/* SOCIAL MEDIA */}
          <Col md={4}>
            <h5 className="footer-title">Social Media</h5>
            <ul className="footer-list">
              <li><FaFacebook /> TheGlam</li>
              <li><FaInstagram /> @theglam</li>
            </ul>
          </Col>

          {/* COPYRIGHT */}
          <Col md={4} className="text-md-end">
            <h5 className="footer-title">The Glam</h5>
            <p className="footer-text">
              © 2026 The Glam. All rights reserved.
            </p>
            <p className="footer-links">
              Terms of Service · Privacy Policy
            </p>
          </Col>

        </Row>
      </Container>
    </footer>
  )
}

export default Footer
