import React, { Component } from "react";
import Navbar from "../../components/UI/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
import Accueil from "./Accueil/Accueil";
import Error from "../../components/Error/Error";
import Footer from "../../components/Footer/Footer";
import Application from "./Application/Application";
import Contact from "./Contact/Contact";

class Site extends Component {
  render() {
    return (
      <>
        <div className="site">
          <Navbar />
          <Routes>
            <Route path="/animaux" element={<Application />} />

            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Accueil />} />
            <Route
              path="*"
              element={<Error type="404">La page n'existe pas</Error>}
            />
          </Routes>
          <div className="minSite"></div>
        </div>

        <Footer />
      </>
    );
  }
}
export default Site;
