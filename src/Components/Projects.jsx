import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h3 className="page-title" style={{ color: "white" }}>
        // Some things i've built
      </h3>
      <Container>
        <Row className="py-5 g-3">
          <Col>
            <Card className="project-card p-4 shadow border">
              <Card.Title>REST API (back-end)</Card.Title>
              <Card.Body>
                <p>
                  This project is a Node.js REST API with GET, POST, PATCH and
                  DELETE requests. Using node-postgres to interact with the
                  PostgreSQL database. The client can create and manage new
                  articles, users, topics and comments. It is an example of a
                  back-end service allowing access to application data
                  programmatically which serves the information to the front-end
                  architecture.
                </p>
                <Card.Footer>
                  Node | Express JS | node-postgres | Jest | Supertest | Husky
                </Card.Footer>
                <a
                  href={"https://deasar-news-app.herokuapp.com/api"}
                  target="_blank"
                  className="project-link"
                >
                  <p className="project-btn mt-3">Website</p>
                </a>
                <a
                  href={"https://github.com/deasar-js/nc-news"}
                  target="_blank"
                  className="project-link"
                >
                  <p className="project-btn">Source Code</p>
                </a>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="project-card p-4 shadow border">
              <Card.Title>Sup (front-end)</Card.Title>
              <Card.Body>
                <p>
                  Lorem ipsum dolor sit amet, illum scaevola et eam, id mel elit
                  insolens definitionem, assum explicari ea mea. Ne indoctum
                  deseruisse cotidieque ius. His ad atqui appareat indoctum.
                  Falli indoctum tincidunt per ad, et minim legendos rationibus
                  ius. Ne quo vidit persius. Mei et option delicata.
                </p>
                <Button className="project-btn">Say Hello</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="project-card p-4 shadow border">
              <Card.Title>Take-A-Paws (9 Day Team Project)</Card.Title>
              <Card.Body>
                <p>
                  Lorem ipsum dolor sit amet, illum scaevola et eam, id mel elit
                  insolens definitionem, assum explicari ea mea. Ne indoctum
                  deseruisse cotidieque ius. His ad atqui appareat indoctum.
                  Falli indoctum tincidunt per ad, et minim legendos rationibus
                  ius. Ne quo vidit persius. Mei et option delicata.
                </p>
                <Button className="project-btn">Say Hello</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
