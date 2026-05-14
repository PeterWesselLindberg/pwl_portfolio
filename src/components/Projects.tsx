import { Card, Col, Row } from 'react-bootstrap'
import { motion } from "framer-motion";

function Projects() {
    const projects = [
    {
        title: "Portfolio Website",
        description: "This very page Built with React and TypeScript",
        image: "",
        repo: "https://github.com/PeterWesselLindberg/pwl_portfolio",
        video: "",
        live: ""
    },
    {
        title: "Algoritm Visualizer",
        description: "A tool for visualising selected algorithms built with React and Typescript",
        image: "",
        repo: "https://github.com/PeterWesselLindberg/Algorithm_Analysis_Tool",
        video: "",
        live: "https://peterwessellindberg.github.io/Algorithm_Analysis_Tool/"
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

                            {project.video && (
                            <a href={project.video} target="_blank" rel="noreferrer">
                                Video
                            </a>
                            )}

                            {project.live && (
                            <a href={project.live} target="_blank" rel="noreferrer">
                                Live demo
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