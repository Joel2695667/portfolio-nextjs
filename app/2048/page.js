"use client";
import Footer from "@/components/Footer";
import GridProjet from "@/components/gridProjet";
import Navigation from "@/components/Navigation";
import "../projet.css";
import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "../../components/component.css";

export default function Projet() {
    return (
        <div>
            <Navigation />
            <Container>
                <div className="persoProjet">
                    <CardGroup>
                        <Card>
                            <Card.Body>
                                <Card.Title className="titreCard">
                                    <h3 className="titre">2048</h3>
                                </Card.Title>
                                <Card.Text>
                                    <ul className="textPerso">
                                        <li>Framework : Vue.js</li>
                                        <li>Langage : HTML5, CSS3 & JavaScript</li>
                                        <li>IDE : Visual Studio Code</li>
                                        <li>
                                            Dans le cadre du cours : Introduction à la programmation Web client
                                        </li>
                                        <li>Création de composants réactifs avec Vue.js pour une expérience utilisateur interactive</li>
                                        <li>Utilisation de HTML5 pour structurer le contenu de la page web</li>
                                        <li>Stylisation des éléments avec CSS3 pour un design attrayant et responsive</li>
                                        <li>Intégration de JavaScript pour ajouter des fonctionnalités dynamiques</li>
                                        <li>Gestion des états et des données avec Vue.js</li>
                                        <li>Utilisation d'APIs pour récupérer et afficher des données externes</li>
                                        <li>Mise en œuvre de transitions et d'animations pour améliorer l'expérience utilisateur</li>
                                        <li>Optimisation du chargement des ressources pour des temps de réponse rapides</li>
                                        <li>Tests unitaires avec des frameworks tels que Jest</li>
                                        <li>Accessibilité web : mise en place de bonnes pratiques pour les utilisateurs ayant des besoins spécifiques</li>
                                        <li>Intégration de bibliothèques tierces pour des fonctionnalités avancées</li>
                                        <li>Sécurité : gestion des vulnérabilités et des attaques courantes</li>
                                        <li>Responsive design : adaptation de l'interface à différentes tailles d'écran</li>
                                        <li>Utilisation de préprocesseurs CSS tels que SASS ou LESS</li>
                                        <li>Intégration de plugins et d'extensions pour améliorer la productivité</li>
                                        <li>Déploiement et hébergement d'une application Vue.js</li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                            <Card.Img variant="bottom" src="/projet_html.png" className="custom-image" />
                        </Card>
                    </CardGroup>
                </div>
            </Container>
            <Footer />
        </div>
    );
}