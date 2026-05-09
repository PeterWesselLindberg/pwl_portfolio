import { Card, Col, Row } from 'react-bootstrap'

function Projects() {
  return (
    <section className="snap-section projects-section">
        <h2 className="section-title">Projekter</h2>
            <div className="section-content">
                <Row className="g-4">
                <Col md={6}>
                    <Card bg="dark" text="light">
                    <Card.Body>
                        <Card.Title>
                        Portfolio Website
                        </Card.Title>

                        <Card.Text>
                        Bygget med React og TypeScript.
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card bg="dark" text="light">
                    <Card.Body>
                        <Card.Title>
                        Weather App
                        </Card.Title>

                        <Card.Text>
                        App med API integration.
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                </Row>
            </div>
    </section>
  )
}

export default Projects