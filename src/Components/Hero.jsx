import Particles from "react-tsparticles";
import particlesOptions from "../particles.json";
import { Button, Container } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
export default function Hero() {
  return (
    <section className="hero-section">
      <Particles options={particlesOptions} />
      <div className="center-all p-3">
        {/* <h2 style={{ color: "#38B2AC" }}>Hi I'm</h2> */}
        {/* <h1
          style={{
            fontSize: "4rem",
            letterSpacing: "0.1rem",
            color: "#CBD5E0",
          }}
        >
          Dean,
        </h1> */}
        <h1 style={{ fontSize: "4rem", letterSpacing: "0.1rem" }}>
          Software Engineer
        </h1>
        <h2 style={{ color: "#38B2AC" }}>I like to build cool things</h2>
        <Container className="text-center mt-3">
          <HashLink to="#contact" smooth>
            <Button className="hello-btn mt-3">Get in touch</Button>
          </HashLink>
        </Container>
      </div>
    </section>
  );
}
