import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { TbArrowNarrowRight } from "react-icons/tb";
import Image from "react-bootstrap/Image";
import "./component.css";
import { useRouter } from "next/navigation";

const LayoutPage = () => {
  const router = useRouter();

  const handleContactClick = () => {
    // Rediriger vers la page de contact
    router.push("/contact");
  };

  const handleDownloadClick = () => {
    // Logique pour le bouton de téléchargement du CV
    // Déclencher le téléchargement du fichier en créant un lien de téléchargement
    const downloadUrl = process.env.PUBLIC_URL + "/CurriculumVitae_Fernand.pdf";
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "CurriculumVitae_Fernand.pdf";
    link.click();
  };

  return (
    <Container className="layoutAcceuil">
      <Row>
        <Col xs={12} lg={7}>
          <h2 className="titrePerso">
            Je suis Fernand, un étudiant passionné par le développement web.
          </h2>
          <p style={{ fontFamily: "'Diphylleia', serif", fontSize: "1.2rem" }}>
            {`En quête d'expériences enrichissantes, je souhaite mettre mes
            compétences en pratique et contribuer à des projets web captivants
            qui me permettront de grandir et d'apprendre continuellement.`}
          </p>
          <div className="text-center">
            <button
              onClick={handleContactClick}
              className="btn boutonBordure py-2 mx-3"
            >
              Me contacter
            </button>
            <button
              onClick={handleDownloadClick}
              className="btn boutonBordure py-2"
            >
              Télécharger mon CV <TbArrowNarrowRight size={24} />
            </button>
          </div>
        </Col>
        <Col xs={12} lg={5} className="persoColImage">
          <Image
            src="/photo_profile.png"
            alt="profile_picture"
            roundedCircle
            className="persoImage"
            fluid
          />
        </Col>
      </Row>
    </Container>
  );
};

export default LayoutPage;
