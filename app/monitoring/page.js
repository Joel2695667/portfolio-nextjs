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
                                    <h3 className="titre">Monitoring</h3>
                                </Card.Title>
                                <Card.Text>
                                    <ul className="textPerso">
                                        <li>Framework : .NET Core & WPF</li>
                                        <li>Langage de programmation : C#</li>
                                        <li>IDE : Visual Studio 2022</li>
                                        <li>
                                            Dans le cadre du cours : Développement d'application Desktop
                                        </li>
                                        <li>Utilisation de modèles de conception MVVM pour une séparation efficace des préoccupations</li>
                                        <li>Création d'interfaces utilisateur interactives et esthétiques en utilisant XAML</li>
                                        <li>Intégration de bases de données locales pour stocker et gérer les données de l'application</li>
                                        <li>Utilisation de contrôles WPF personnalisés pour une expérience utilisateur unique</li>
                                        <li>Mise en œuvre de fonctionnalités avancées telles que le glisser-déposer et l'annulation/rétablissement</li>
                                        <li>Optimisation de la performance et gestion de la mémoire pour des applications réactives</li>
                                        <li>Intégration de bibliothèques tierces pour des graphiques ou des fonctionnalités spécifiques</li>
                                        <li>Tests unitaires et tests d'interface utilisateur pour garantir la qualité du logiciel</li>
                                        <li>Documentation détaillée du code et des fonctionnalités pour faciliter la maintenance future</li>
                                        <li>Prise en charge de plusieurs langues et localisations</li>
                                        <li>Compatibilité avec différentes résolutions d'écran et modes sombres/lumineux</li>
                                        <li>Implémentation de notifications et de mises à jour automatiques</li>
                                        <li>Sécurité des données et protection contre les vulnérabilités courantes</li>
                                        <li>Utilisation de styles et de thèmes personnalisables pour une expérience visuelle attrayante</li>
                                        <li>Intégration avec des services cloud pour le stockage ou le partage de données</li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                            <Card.Img variant="bottom" src="/projet_wpf.png" className="custom-image" />
                        </Card>
                    </CardGroup>
                </div>
            </Container>
            <Footer />
        </div>
    );
}