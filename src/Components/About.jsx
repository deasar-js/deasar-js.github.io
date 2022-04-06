import { Container, Card, Row, Col, Image } from "react-bootstrap";
import selfie from "../assets/ds.png";

export default function About() {
  return (
    <section id="about" className="about-section">
      <h1>About</h1>
      <Container>
        <Card className="border-0 shadow-sm p-3">
          <Card.Body>
            {/* <Card.Title>
              <h1>Dean Sargeant</h1>
            </Card.Title> */}
            <Card.Text className="mt-2">
              <p>
                I have developed a keen interest in software over the years and
                have always been an early adopter of new technology. It was
                within the past 4 years or so that I began tinkering with
                templates, content management systems and components to create
                basic platforms that would emulate the most popular sites people
                use. I graduated Northcoders' full stack JavaScript course early
                April 2022 and currently I am learning new frameworks/libraries.
              </p>
              <p>
                Here are a few technologies I’ve been working with recently:
              </p>
            </Card.Text>
            <Row className="align-items-center">
              <Col>
                <p className="tech"> - JavaScript (ES6+)</p>
                <p className="tech"> - Node.js</p>
                <p className="tech"> - Express.js</p>
                <p className="tech"> - PostgreSQL</p>
              </Col>
              <Col>
                <p className="tech"> - React-Native</p>
                <p className="tech"> - Expo</p>
                <p className="tech"> - Chakra UI</p>
                <p className="tech"> - Python3</p>
              </Col>
              <Col className="text-center">
                <Image src={selfie} rounded height="200" width="auto" />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
}
