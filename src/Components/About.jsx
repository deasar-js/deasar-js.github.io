import { Container, Card, Row, Col, Image } from "react-bootstrap";
import selfie from "../assets/ds.png";

export default function About() {
  return (
    <section id="about" className="about-section">
      <h3 className="page-title" style={{ color: "white" }}>
        // About me
      </h3>
      <Container className="center-card">
        <Card className="project-card p-4 shadow border">
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
                use. I graduated Northcoders' full stack JavaScript programme
                early April 2022 and currently I am learning new
                frameworks/libraries.
              </p>
              <p>
                Here are a few technologies I’ve been working with recently:
              </p>
            </Card.Text>
            <Row className="align-items-center">
              <Col>
                <p className="tech"> - MongoDB</p>
                <p className="tech"> - TypeScript</p>
                <p className="tech"> - React-Native</p>
              </Col>
              <Col className="text-center">
                <Image
                  src={selfie}
                  rounded
                  height="200"
                  width="auto"
                  className="profile-photo"
                />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
}
