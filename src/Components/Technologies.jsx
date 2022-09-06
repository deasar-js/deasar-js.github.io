import {
  Container,
  Row,
  Col,
  Figure,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import javascript from "../assets/javascript.svg";
import node from "../assets/nodejs-icon.svg";
import postgres from "../assets/postgresql.svg";
import native from "../assets/react.svg";
import bootstrap from "../assets/bootstrap.svg";
import python from "../assets/python.svg";
import typescript from "../assets/typescript.svg";
import mongodb from "../assets/mongodb-icon-1.svg";

export default function Technologies() {
  return (
    <section id="technologies" className="technologies-section">
      <h3 className="page-title" style={{ color: "white" }}>
        // Technologies
      </h3>
      <Container>
        <Row className="py-5 g-3 text-center">
          <Col>
            <OverlayTrigger
              placement="bottom"
              overlay={
                <Tooltip id="button-tooltip-2">JavaScript (ES6+)</Tooltip>
              }
            >
              <Figure>
                <Figure.Image
                  height={80}
                  width={80}
                  alt="javascript"
                  src={javascript}
                />
              </Figure>
            </OverlayTrigger>
          </Col>
          <Col>
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip id="button-tooltip-2">Node.js</Tooltip>}
            >
              <Figure>
                <Figure.Image height={80} width={80} alt="node" src={node} />
              </Figure>
            </OverlayTrigger>
          </Col>
          <Col>
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id="button-tooltip-2">TypeScript</Tooltip>}
            >
              <Figure>
                <Figure.Image
                  height={80}
                  width={80}
                  alt="typescript"
                  src={typescript}
                />
              </Figure>
            </OverlayTrigger>
          </Col>
          <Col>
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip id="button-tooltip-2">PostgreSQL</Tooltip>}
            >
              <Figure>
                <Figure.Image
                  height={80}
                  width={80}
                  alt="postgres"
                  src={postgres}
                />
              </Figure>
            </OverlayTrigger>
          </Col>
          <Col>
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id="button-tooltip-2">React-Native</Tooltip>}
            >
              <Figure>
                <Figure.Image
                  height={80}
                  width={80}
                  alt="react-native"
                  src={native}
                />
              </Figure>
            </OverlayTrigger>
          </Col>
          <Col>
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip id="button-tooltip-2">MongoDB</Tooltip>}
            >
              <Figure>
                <Figure.Image
                  height={80}
                  width={80}
                  alt="mongodb"
                  src={mongodb}
                />
              </Figure>
            </OverlayTrigger>
          </Col>
          <Col>
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id="button-tooltip-2">Bootstrap</Tooltip>}
            >
              <Figure>
                <Figure.Image
                  height={80}
                  width={80}
                  alt="bootstrap"
                  src={bootstrap}
                />
              </Figure>
            </OverlayTrigger>
          </Col>
          <Col>
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip id="button-tooltip-2">Python3</Tooltip>}
            >
              <Figure>
                <Figure.Image
                  height={80}
                  width={80}
                  alt="python"
                  src={python}
                />
              </Figure>
            </OverlayTrigger>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
