import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';

const Projects = () => {
  const projectList = [
    { title: 'DELTRON', description: 'Proficient in implementing fluid layouts, media queries, and mobile-first design principles to enhance usability.', demo: 'Demonstrates expertise in JavaScript, HTML, Bootstrap, and CSS.', link: 'https://www.deltron.qa/' },
    { title: 'REX 4.0', description: 'The responsive REX website ensures a seamless user experience, offering easy access to event schedules and updates.', demo: 'Proficient in JavaScript, HTML, Bootstrap, CSS, and animations', link: 'https://rex.ieeesbrit.com/' },
    { title: 'HOSTEL-MATE', description: 'It is a Hostel Management Platform specifically designed for the Ladies Hostel of RIT, offering to fully automate the functions.', demo: 'Proficient in React.js, Node.js, Express.js, MongoDB, CSS, and Bootstrap', link: 'https://hostel-mate-frontend.vercel.app/' }
  ];

  return (
    <div className="projects-section">
      <Container id="projects">
        <Row className="my-5">
          <Col>
            <h2 className="text-center projects-title">Projects</h2>
            <Row>
              {projectList.map((project, index) => (
                <Col key={index} md={4} className="my-2">
                  <div className="project-card" >
                    <h3 className="text-center text-white mb-3" style={{ fontWeight: 700 }}>{project.title}</h3>
                    <p style={{ color: '#999999' }}>{project.description}</p>
                    <p style={{ color: '#999999' }}>{project.demo}</p>
                    <a href={project.link} className="text-center" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', cursor: 'pointer', textDecoration: 'underline' }}>{project.link}</a>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
