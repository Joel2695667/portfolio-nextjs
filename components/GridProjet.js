import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "./component.css";

const GridProjet = () => {
  return (
   <Container>
     <div className="persoProjet">
      <h5 className="titreProjet">
        Voici une sélection de quelques-uns de mes projets récents
      </h5>

      <CardGroup>
        <Card>
          <Card.Img variant="top" src="/projet_monogame.png" />
          <Card.Body>
            <Card.Title className="titreCard">
              <strong>Pacman</strong>
            </Card.Title>
            <Card.Text>
              <ul>
                <li>Framework : .NET Core & Monogame</li>
                <li>Langage de programmation : C#</li>
                <li>IDE : Visual Studio 2019</li>
                <li>Dans le cadre du cours : Developpement de jeux</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="/projet_html.png" />
          <Card.Body>
            <Card.Title>
              <strong className="titreCard">2048</strong>
            </Card.Title>
            <Card.Text>
              <ul>
                <li>Framework : Vue.js</li>
                <li>Langage : Html 5, CSS 3 & Javascript</li>
                <li>IDE : Visual Studio Code</li>
                <li>
                  Dans le cadre du cours : Introduction à la programmation Web
                  client
                </li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="/projet_wpf.png" />
          <Card.Body>
            <Card.Title>
              <strong className="titreCard">Monitoring</strong>
            </Card.Title>
            <Card.Text>
              <ul>
                <li>Framework : .NET core & WPF </li>
                <li>Langage de programmation : C#</li>
                <li>IDE : Visual Studio 2022</li>
                <li>
                  {"Dans le cadre du cours : Developpement d'application Desktop"}
                </li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
   </Container>
  );
};

export default GridProjet;
