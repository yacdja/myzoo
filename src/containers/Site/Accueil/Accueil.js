import React, { Component } from "react";
import TitreH1 from "../../../components/UI/Titres/TitreH1";
import banderole from "../../../assets/images/banderole.png";
import logo from "../../../assets/images/logo.png";

class Accueil extends Component {
  componentDidMount = () => {
    document.title = "Parc d'animaux MyZoo";
  };

  render() {
    return (
      <div>
        <img src={banderole} alt="bandrole" className="img-fluid" />
        <TitreH1 bgColor="bg-success">Bienvenue à MyZoo !</TitreH1>
        <div className="container">
          <p>
            Bienvenue au Zoo My Zoo, un paradis pour les amoureux de la nature
            et les passionnés d'animaux de toutes sortes. Situé au cœur de
            paysages pittoresques, notre zoo offre une expérience immersive qui
            célèbre la diversité de la vie sauvage. Que vous soyez un enfant
            émerveillé par les animaux exotiques ou un adulte curieux désireux
            d'en apprendre davantage sur la conservation, le Zoo My Zoo vous
            invite à découvrir un monde fascinant où la beauté de la nature est
            à son apogée.
          </p>

          <p>
            Découvrez la diversité de la vie sauvage Explorez nos vastes
            terrains où chaque coin révèle une nouvelle aventure. Rencontrez des
            créatures étonnantes, des majestueux éléphants aux petits primates
            malicieux. Nos habitats soigneusement conçus recréent les
            environnements naturels de nos résidents, offrant ainsi une
            expérience immersive et éducative. Assistez à des présentations
            passionnantes où nos gardiens partagent leur expertise et leur amour
            pour les animaux, et apprenez l'importance cruciale de la
            conservation pour préserver ces espèces extraordinaires.
          </p>

          <div className="row no-gutters align-items-center">
            <div className="col-12 col-md-6">
              <img src={logo} alt="logo du site" className="img-fluid" />
            </div>

            <div className="col-12 col-md-6">
              Une expérience inoubliable pour toute la famille Au Zoo My Zoo,
              chaque visite est une expérience inoubliable. Laissez-vous
              émerveiller par nos expositions interactives, où vous pourrez
              découvrir des informations fascinantes sur le comportement,
              l'habitat et les efforts de conservation des différentes espèces.
              Participez à des activités ludiques qui plairont aux petits comme
              aux grands, des visites guidées aux ateliers interactifs. Que vous
              soyez un visiteur régulier ou que vous découvriez notre zoo pour
              la première fois, notre équipe dévouée est là pour rendre votre
              séjour aussi enrichissant que possible, en vous invitant à
              explorer, à apprendre et à vous émerveiller devant la magnificence
              de la vie sauvage.
            </div>

            <div className="col-12 col-md-6">
              Le Zoo My Zoo est bien plus qu'une attraction touristique : c'est
              un lieu de découverte, d'apprentissage et d'émerveillement pour
              tous les âges. Que vous soyez un étudiant passionné de biologie,
              un parent cherchant une sortie éducative pour ses enfants ou un
              groupe d'amis à la recherche d'une aventure différente, notre zoo
              offre quelque chose pour chacun. Rejoignez-nous pour une journée
              de rencontres avec la faune, d'aventures ludiques et de moments
              inoubliables au cœur de la nature.
            </div>

            <div className="col-12 col-md-6">
              <img src={logo} alt="logo du site" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Accueil;
