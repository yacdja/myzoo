import React, { Component } from "react";
import Titre from "../../../components/UI/Titres/TitreH1";
import Formulaire from "./Formulaire/Formulaire";
import axios from "axios";

class Contact extends Component {
  componentDidMount = () => {
    document.title = "Page de contact";
  };

  handleEnvoiMail = (message) => {
    axios
      .post(`http://localhost/serveurAnimaux/front/sendMessage`, message)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <>
        <Titre bgColor="bg-success">Contactez nous !</Titre>
        <div className="container">
          <h2>Adresse :</h2>
          ******************************
          <h2>Adresse :</h2>
          ***-***-****
          <h2>Vous préférez nous écrire? </h2>
          <Formulaire sendMail={this.handleEnvoiMail} />
        </div>
      </>
    );
  }
}
export default Contact;
