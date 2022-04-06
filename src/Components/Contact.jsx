import { Container, Button } from "react-bootstrap";

export default function Contact() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  return (
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
        {/* <Container>
          <Form onSubmit={}>
            <Form.Control placeholder="name" />
            <Form.Control placeholder="email" />
            <Form.Control placeholder="message" />
          </Form>
        </Container> */}
        <Button className="hello-btn">Say Hello</Button>
      </Container>
    </section>
  );
}
