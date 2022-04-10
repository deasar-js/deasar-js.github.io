import { Container, Row, Col, Card } from "react-bootstrap";

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
              <Card.Title>Sup (front-end)</Card.Title>
              <Card.Body>
                <p>
                  This project is a React JS front-end web interface for
                  handling all client-side interactions with the web app,
                  sending requests to the back-end API and receiving information
                  which is displayed for the user. Axios provides helpful tools
                  for adding queries to endpoints and react-bootstrap was
                  helpful for styling components in a responsive mobile-first
                  design.
                </p>
                <Card.Footer>React JS | Axios | react-bootstrap</Card.Footer>
                <a
                  rel="noreferrer noopener"
                  href={"https://stoic-austin-6977f9.netlify.app/"}
                  target="_blank"
                  className="project-link"
                >
                  <p className="project-btn mt-3">Website</p>
                </a>
                <a
                  rel="noreferrer noopener"
                  href={"https://github.com/deasar-js/fe-nc-news"}
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
                  rel="noreferrer noopener"
                  href={"https://deasar-news-app.herokuapp.com/api"}
                  target="_blank"
                  className="project-link"
                >
                  <p className="project-btn mt-3">Website</p>
                </a>
                <a
                  rel="noreferrer noopener"
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
              <Card.Title>Take-A-Paws (9 Day Team Project)</Card.Title>
              <Card.Body>
                <p>
                  This project is a React JS web app using Firebase for
                  authentication, firestore database and storage. Our overall
                  aim was to achieve an intuitive and user-friendly web
                  interface which allows pet sitters to display their services
                  and for pet owners to browse by proximity, have sufficient
                  information about pet sitters, and be able to directly
                  communicate with a pet sitter.
                </p>
                <Card.Footer>
                  React JS | Firebase9 | react-bootstrap | Trello | postcodes.io
                </Card.Footer>
                <a
                  rel="noreferrer noopener"
                  href={"https://pet-app-beta.vercel.app/"}
                  target="_blank"
                  className="project-link"
                >
                  <p className="project-btn mt-3">Website</p>
                </a>
                <a
                  rel="noreferrer noopener"
                  href={"https://github.com/deasar-js/pet-app"}
                  target="_blank"
                  className="project-link"
                >
                  <p className="project-btn">Source Code</p>
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
