import React from "react";

import { Link } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

import backWindow from '../assets/Blank-window.png'

import "../styles/AboutPage.css";

function AboutPage() {
  return (
    <div>
      <Header />
      <main>
        <section className="AboutPage">
          <h1 className="purpleNeon">O que fazemos</h1>
          <p className="boldParagraph">
            Nós inserimos os estudantes em um ambiente virtual aonde podem
            interagir com figuras históricas e participar do conteúdo que estão
            estudando, por meio do Metaverso.
          </p>
          <div className="callToAction">
            <img src={backWindow} alt="" />
            <Link to="/contact" className="purpleNeon roundButton">
              <p>Fale conosco</p>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default AboutPage;
