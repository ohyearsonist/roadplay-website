import { React } from "react";
import { Link } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

import "./styles/App.css";

import aboutBackgroundWindow from "./assets/Windows XP.png";

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <section className="Hero">
          <h1>
            Onde os estudantes <b className="pinkNeon">vivem</b> o conteúdo
          </h1>
          <p className="boldParagraph" >
            A Roadplay quer inovar o ensino, inserindo os alunos no ambiente do
            conteúdo que estão estudando, aumentando a familiaridade inicial do
            aluno com o conteúdo e aumentando também o engajamento durante
            aulas.
          </p>
          <Link to="about" className="roundButton pinkNeon">
            <p>Saiba mais</p>
          </Link>
        </section>
        <section className="About">
          <img
            src={aboutBackgroundWindow}
            alt="Sobre nós"
            className="aboutBackgroundWindow"
          />
          <div className="content">
            <h1 className="orangeNeon">
              Conheça um pouco mais o nosso trabalho
            </h1>
            <p>
              Nós inserimos os estudantes em um ambiente virtual aonde podem
              interagir com figuras históricas e participar do conteúdo que
              estão estudando, por meio do Metaverso.
            </p>
            <Link to="contact" className="squareButton orangeNeon">
              <p>Fale conosco</p>
            </Link>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
