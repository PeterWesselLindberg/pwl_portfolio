import { Card, Col, Row } from 'react-bootstrap'
import { motion } from "framer-motion";

function Projects() {
    const projects = [
    {
        title: "Portfolio Website",
        description: "Built with React and TypeScript",
        image: "",
        repo: "https://github.com/yourname/portfolio",
        video: "https://youtube.com/yourvideo",
        live: "https://yourportfolio.com"
    },
    {
        title: "Weather App",
        description: "API-based weather application",
        image: "",
        repo: "https://github.com/yourname/weather-app",
        video: "https://youtube.com/yourvideo",
        live: ""
    }
    ]; 
    const cardVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    };
    
    return (
    <>
      <h2 className="section-title">Projects</h2>

      <div className="section-content">
        <Row className="g-4">
          {projects.map((project, index) => (
            <Col md={6} key={index}>
                <motion.div
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                    <Card bg="dark" text="light" className="project-card">
                        <Card.Img
                            variant="top"
                            src={project.image}
                            className="project-image"
                        />
                        <Card.Body>
                        <Card.Title>{project.title}</Card.Title>

                        <Card.Text>{project.description}</Card.Text>

                        <div className="project-links">
                            <a href={project.repo} target="_blank" rel="noreferrer">
                            GitHub
                            </a>

                            <a href={project.video} target="_blank" rel="noreferrer">
                            Video
                            </a>

                            {project.live && (
                            <a href={project.live} target="_blank" rel="noreferrer">
                                Live
                            </a>
                            )}
                        </div>
                        </Card.Body>
                    </Card>
                </motion.div>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default Projects;