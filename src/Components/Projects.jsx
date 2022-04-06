import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h1 style={{ color: "white" }}>Some Things I’ve Built</h1>
      <Container>
        <Row className="py-5 g-3">
          <Col>
            <Card className="portfolio-card p-4 shadow border-0">
              <Card.Title>News API (back-end)</Card.Title>
              <Card.Body>
                <p>
                  Lorem ipsum dolor sit amet, illum scaevola et eam, id mel elit
                  insolens definitionem, assum explicari ea mea. Ne indoctum
                  deseruisse cotidieque ius. His ad atqui appareat indoctum.
                  Falli indoctum tincidunt per ad, et minim legendos rationibus
                  ius. Ne quo vidit persius. Mei et option delicata.
                </p>
                <Button className="hello-btn">Say Hello</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="portfolio-card p-4 shadow border-0">
              <Card.Title>Sup news (front-end)</Card.Title>
              <Card.Body>
                <p>
                  Lorem ipsum dolor sit amet, illum scaevola et eam, id mel elit
                  insolens definitionem, assum explicari ea mea. Ne indoctum
                  deseruisse cotidieque ius. His ad atqui appareat indoctum.
                  Falli indoctum tincidunt per ad, et minim legendos rationibus
                  ius. Ne quo vidit persius. Mei et option delicata.
                </p>
                <Button className="hello-btn">Say Hello</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="portfolio-card p-4 shadow border-0">
              <Card.Title>Take-A-Paws (9 Day Group project)</Card.Title>
              <Card.Body>
                <p>
                  Lorem ipsum dolor sit amet, illum scaevola et eam, id mel elit
                  insolens definitionem, assum explicari ea mea. Ne indoctum
                  deseruisse cotidieque ius. His ad atqui appareat indoctum.
                  Falli indoctum tincidunt per ad, et minim legendos rationibus
                  ius. Ne quo vidit persius. Mei et option delicata.
                </p>
                <Button className="hello-btn">Say Hello</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
