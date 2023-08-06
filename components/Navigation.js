import React from "react";
import "./component.css";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import Link from "next/link";

const Navigation = () => {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg">
        <Container className="policePerso">
          <Navbar.Brand href="/">
            <h3>
              Fernand<span className="pointPerso">.</span>dev
            </h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="navbarPerso">
              <Link
                href="/"
                exact
                className="nav-link"
                activeClassName="active"
              >
                Accueil
              </Link>
              <Link
                href="/projet"
                className="nav-link"
                activeClassName="active"
              >
                Projets
              </Link>
              <Link
                href="/temoignage"
                className="nav-link"
                activeClassName="active"
              >
                Témoignages
              </Link>
              <Link
                href="/contact"
                className="nav-link"
                activeClassName="active"
              >
                Contact
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Navigation;
