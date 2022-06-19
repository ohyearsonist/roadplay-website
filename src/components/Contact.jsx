import React from "react";

import "../styles/Contact.css"

import contactStatue from "../assets/contact-statue.png";

function Contact() {
  return (
    <section className="Contact">
      <h1 className="purpleNeon">Entre em contato</h1>
      <p>
        Fale com a gente para agendar uma reunião e contratar uma aula! Qualquer
        feedback também é bem-vindo e retronaremos no seu e-mail assim que
        possível.
      </p>
      <a
        href="mailto:gamesroadplay@gmail.com"
        className="roundButton purpleNeon"
      >
        <p>Olá!</p>
      </a>
      <img src={contactStatue} alt="" className="contactStatue" />
    </section>
  );
}

export default Contact;