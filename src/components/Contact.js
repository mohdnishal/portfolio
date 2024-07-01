import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../App.css'; // Ensure your custom CSS file is imported

const Contact = () => {
  // Function to handle scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="contact-section" id="contact">
      <Container>
        <Row className="my-5">
          <Col>
            <h2 className="text-center contact-titles">Contact</h2>
          </Col>
        </Row>
        <Row className="contact-icons-row text-white">
          <Col md={4} className="text-center">
            
              <div className="rounded-icon">
                <FontAwesomeIcon icon={faMapMarkerAlt} size="3x" />
              </div>
              <p className="icon-text">ADDRESS</p>
              <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className='linkaddress'>
              <strong>Kondotty,Malappuram<br/>kerala,India</strong>
            </a>
          </Col>
          <Col md={4} className="text-center">
           
              <div className="rounded-icon">
                <FontAwesomeIcon icon={faPhone} size="3x" />
              </div>
              <p className="icon-text">CONTACT ME</p>
              <a href="tel:+919946158519" className='linkaddress'>
              <strong>9946158519</strong>
            </a>
          </Col>
          <Col md={4} className="text-center">
            
              <div className="rounded-icon">
                <FontAwesomeIcon icon={faEnvelope} size="3x" />
              </div>
              <p className="icon-text">EMAIL ADDRESS</p>
              <a href="mailto:nishalutd@gmail.com" className='linkaddress'><strong>nishalutd@gmail.com</strong>
            </a>
          </Col>
        </Row>
        <Footer />
        <div className="scroll-to-top" onClick={scrollToTop}>
          <FontAwesomeIcon icon={faArrowUp} size="2x" />
        </div>
      </Container>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row>
          <Col className="text-center">
            <p className="footer-summary">
            A motivated and dedicated final-year Computer Science and Engineering student seeking an opportunity to apply technical skills and contribute to a dynamic team. Passionate about software development and problem-solving.
            </p>
            <a href="https://github.com/mohdnishal" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="3x" className="footer-icon" />
            </a>
            <a href="https://www.linkedin.com/in/mohammed-nishal-pk-b23b30242?trk=contact-info" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="3x" className="footer-icon" />
            </a>
            <p className="copyright-text">© Mohd Nishal</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Contact;
