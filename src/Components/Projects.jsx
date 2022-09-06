import {
  Container,
  Row,
  Col,
  Card,
  Figure,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import beatleimg from "../assets/beatle-input.png";
import tap from "../assets/tap-web.png";
import sup from "../assets/sup-web01.png";

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
              <Card.Title>Beatle</Card.Title>
              <Card.Body>
                <p>
                  A lyric memorisation game inspired by Wordle. Front-end is a
                  React JS interactive UI that aims to achieve a fun and
                  engaging game design with animated loading components and
                  arcade sound effects. It was important to be able to play
                  snippets of songs using timestamps and React-player component
                  is a lightweight and user friendly solution to media playback
                  from various sources with the ability to control playback.
                </p>
                <Card.Footer>
                  React JS | react-player | react-bootstrap | Node | Firebase9
                </Card.Footer>
                <OverlayTrigger
                  placement="top"
                  overlay={
                    <Tooltip id="button-tooltip-2">
                      {" "}
                      <Figure>
                        <Figure.Image
                          height={300}
                          width={500}
                          alt="beatleimg"
                          src={beatleimg}
                        />
                      </Figure>
                    </Tooltip>
                  }
                >
                  <a
                    rel="noreferrer noopener"
                    href={"https://beatle.pro"}
                    target="_blank"
                    className="project-link"
                  >
                    <p className="project-btn mt-3">Website</p>
                  </a>
                </OverlayTrigger>
                <a
                  rel="noreferrer noopener"
                  href={"https://github.com/deasartech/beatle-app"}
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
              <Card.Title>Sup news (FE and BE REST API)</Card.Title>
              <Card.Body>
                <p>
                  This project is a React JS front-end web interface for
                  handling all client-side interactions with the web app,
                  sending requests to the back-end API and receiving information
                  which is displayed for the user. Node.js REST API with GET,
                  POST, PATCH and DELETE requests. Using node-postgres to
                  interact with the PostgreSQL database. The client can create
                  and manage new articles, users, topics and comments. It is an
                  example of a back-end service allowing access to application
                  data programmatically which serves the information to the
                  front-end architecture.
                </p>
                <Card.Footer>
                  Node | Express JS | node-postgres | Jest | Supertest | Husky
                </Card.Footer>
                <OverlayTrigger
                  placement="top"
                  overlay={
                    <Tooltip id="button-tooltip-2">
                      {" "}
                      <Figure>
                        <Figure.Image
                          height={300}
                          width={500}
                          alt="sup"
                          src={sup}
                        />
                      </Figure>
                    </Tooltip>
                  }
                >
                  <a
                    rel="noreferrer noopener"
                    href={"https://stoic-austin-6977f9.netlify.app/"}
                    target="_blank"
                    className="project-link"
                  >
                    <p className="project-btn mt-3">Website</p>
                  </a>
                </OverlayTrigger>
                <a
                  rel="noreferrer noopener"
                  href={"https://github.com/deasartech/nc-news"}
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
                <OverlayTrigger
                  placement="top"
                  overlay={
                    <Tooltip id="button-tooltip-2">
                      {" "}
                      <Figure>
                        <Figure.Image
                          height={300}
                          width={500}
                          alt="takeapaws"
                          src={tap}
                        />
                      </Figure>
                    </Tooltip>
                  }
                >
                  <a
                    rel="noreferrer noopener"
                    href={"https://pet-app-beta.vercel.app/"}
                    target="_blank"
                    className="project-link"
                  >
                    <p className="project-btn mt-3">Website</p>
                  </a>
                </OverlayTrigger>
                <a
                  rel="noreferrer noopener"
                  href={"https://github.com/deasartech/pet-app"}
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
