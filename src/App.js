import React from "react";

import Header from "./Header";
import PinkButton from "./pinkButton";
import Footer from "./Footer"

import "./App.css";

function App() {
  return (
    <div className="main">
      <Header />
      <section className="hero">
        <h1>
          Onde os estudantes <b>vivem</b> o conteúdo
        </h1>
        <p>
          A Roadplay quer inovar o ensino, inserindo os alunos no ambiente do
          conteúdo que estão estudando, aumentando a familiaridade inicial do
          aluno com o conteúdo e aumentando também o engajamento durante aulas.
        </p>

        <PinkButton text="Saiba mais" />
      </section>
      <section className="About">
        <div>
          <h3>Conheça um pouco mais o nosso trabalho</h3>
          <p>
            Se você é um professor que está tendo problemas com alunos
            desmotivados e que não prestam atenção, clique no botão abaixo para
            conhecer nossa solução!
          </p>
          <button className="orangeButton">
            <p>Saiba Mais</p>
          </button>
        </div>
      </section>
      <section className="contact">

      </section>
      <Footer></Footer>
    </div>
  );
}

export default App;
