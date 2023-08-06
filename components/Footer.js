import React from "react";
import "./component.css";
import { Container } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-4">
      <Container className="d-flex justify-content-between align-items-center policePerso">
        <div>
          <p className="m-0">&copy; Fernand - Tous droits réservés</p>
        </div>
        <div>
          <a
            href="https://github.com/Joel2695667"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} className="me-2" style={{ color: "#211F1F" }} />
          </a>
          <a
            href="https://www.linkedin.com/in/fotso-sukam-fernand-joel-b6a0a65a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              size={30}
              className="ms-2"
              style={{ color: "#0A66C2" }}
            />
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
