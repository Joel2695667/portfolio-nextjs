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
                                    <h3 className="titre">Pacman</h3>
                                </Card.Title>
                                <Card.Text>
                                    <ul className="textPerso">
                                        <li>Framework : .NET Core & Monogame</li>
                                        <li>Langage de programmation : C#</li>
                                        <li>IDE : Visual Studio 2019</li>
                                        <li>Dans le cadre du cours : Développement de jeux</li>
                                        <li>Plateformes ciblées : PC, consoles, mobiles</li>
                                        <li>Utilisation de la programmation orientée objet pour une conception modulaire</li>
                                        <li>Intégration de graphismes 2D/3D avec support de shaders</li>
                                        <li>Gestion avancée des entrées utilisateurs : clavier, souris, manettes</li>
                                        <li>Implémentation de mécanismes de physique réaliste ou stylisée</li>
                                        <li>Création d'une interface utilisateur interactive et conviviale</li>
                                        <li>Intégration de sons et de musiques pour une expérience audio immersive</li>
                                        <li>Optimisation des performances pour assurer un gameplay fluide</li>
                                        <li>Utilisation de patrons de conception de jeu pour résoudre des problèmes courants</li>
                                        <li>Tests unitaires et débogage pour garantir la stabilité du jeu</li>
                                        <li>Intégration de fonctionnalités multijoueurs en ligne</li>
                                        <li>Utilisation de bases de données pour sauvegarder les scores et les progressions</li>
                                        <li>Application des principes de conception de jeux pour améliorer l'expérience utilisateur</li>
                                        <li>Documentation claire du code source et des fonctionnalités du jeu</li>
                                        <li>Participation à des cycles itératifs de développement pour améliorer le jeu au fil du temps</li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                            <Card.Img variant="bottom" src="/projet_monogame.png" className="custom-image" />
                        </Card>
                    </CardGroup>
                </div>
            </Container>
            <Footer />
        </div>
    );
}