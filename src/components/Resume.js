import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../App.css';

const Resume = () => {
  const educationDetails = [
    {
      school: 'Rajiv Gandhi Institute of Technology, Kottayam',
      degree: 'B.Tech in Computer Science & Engineering',
      duration: '2022 - 2025',
    },
    {
      school: 'AKNM Govt Polytechnic College, Thirurangadi',
      degree: 'Diploma in Computer Engineering',
      duration: '2019 - 2022',
    },
    {
      school: 'PPMHSS Kottukara',
      degree: 'Science',
      duration: '2017 - 2019',
    },
    {
      school: 'PPMHSS Kottukara',
      degree: 'SSLC',
      duration: '2016 - 2017',
    },
    {
      school: 'Front-End Developer | Freelancing',
      degree: 'Committed to creating visually appealing and accessible designs that prioritize user engagement and satisfaction.',
      duration: 'Oct 2022 - Dec 2022',
    }
  ];

  return (
    <div className="resume-section">
      <Container className="h-100"  id="resume">
        <Row className="h-100 align-items-center justify-content-center">
          <Col md={10}>
            <h1 className="text-center resume-title">Resume</h1>
            <Row>
              {educationDetails.map((edu, index) => (
                <Col md={6} key={index} className="mb-4">
                  <Card className="education-card bg-dark">
                    <Card.Body>
                      <Card.Title className="text-white">{edu.school}</Card.Title>
                      <Card.Subtitle className="mb-2" style={{color:'#999999'}}>{edu.degree}</Card.Subtitle>
                      <Card.Text className="text-warning">
                        <strong>{edu.duration}</strong>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
              <div className="text-center w-100 mt-4">
                <button className="download-cv-button" href="/path/to/your/cv.pdf" download>DOWNLOAD CV</button>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Resume;
