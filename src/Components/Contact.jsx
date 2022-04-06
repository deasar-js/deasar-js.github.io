import React, { useState, useRef } from "react";
import {
  Container,
  Button,
  Image,
  Alert,
  Row,
  Col,
  Form,
} from "react-bootstrap";
import github from "../assets/github.png";
import emailjs from "emailjs-com";
import { HashLink } from "react-router-hash-link";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const form = useRef();

  const SERVICE_ID = "service_cx0h8as";
  const TEMPLATE_ID = "template_ggifi8o";
  const USER_ID = "EmXkslv4cTNh3ikdH";

  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
      .then((result) => {
        console.log(result.text);
        setName("");
        setEmail("");
        setMessage("");
        setSent(true);
      })
      .catch((error) => {
        console.log(error.text);
      });
    // setSent(false);
  };

  return (
    <>
      <section id="contact" className="contact-section">
        <h1 style={{ color: "white" }}>Contact</h1>
        <Container className="text-center mt-5 p-5">
          <h1
            style={{
              fontSize: "3rem",
              letterSpacing: "0.1rem",
              color: "white",
            }}
          >
            Get in touch
          </h1>
          <p style={{ color: "#CBD5E0" }} className="p-3">
            My inbox is always open. Whether you have a question or just want to
            say hi, I’ll try my best to get back to you!
          </p>
          <Container className="justify-content-center text-center">
            <Form ref={form} onSubmit={handleSubmit} className="contact-group">
              <Row className="justify-content-center">
                <Col lg="8">
                  {!sent ? (
                    <>
                      <Form.Control
                        name="user_name"
                        className="my-3 contact shadow"
                        id="form-input-control-last-name"
                        placeholder="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                      />
                      <Form.Control
                        name="user_email"
                        className="my-3 contact shadow"
                        id="form-input-control-email"
                        placeholder="email"
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                      />
                      <Form.Control
                        name="message"
                        className="my-3 message shadow"
                        id="form-textarea-control-opinion"
                        as="textarea"
                        rows={4}
                        placeholder="message"
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                      />
                      <Button type="submit" className="hello-btn mt-3">
                        Say Hello
                      </Button>
                    </>
                  ) : (
                    <>
                      <Alert variant="success" className="alert">
                        <Alert.Heading className="alert-text">
                          Success, message has been delivered!
                        </Alert.Heading>
                        <hr />
                        <div className="d-flex justify-content-center">
                          <HashLink to="#" smooth className="nav-link">
                            <Button
                              onClick={() => setSent(false)}
                              variant="outline-success"
                              className="hello-btn"
                            >
                              Back to the top
                            </Button>
                          </HashLink>
                        </div>
                      </Alert>
                    </>
                  )}
                </Col>
              </Row>
            </Form>
          </Container>
        </Container>
      </section>
      <footer className="text-center mb-5">
        <a href={"https://github.com/deasar-js"}>
          <Image src={github} width="40" height="40" />
        </a>
      </footer>
    </>
  );
}
