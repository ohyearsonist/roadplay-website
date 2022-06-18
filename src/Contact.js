import React from "react";
import contactStatue from "./assets/contact-statue.png";
import "./Contact.css";

function Contact() {
  return (
    <div className="Contact">
      <h1>Entre em contato</h1>
      <p>
        Fale com a gente para agendar uma reunião e contratar uma aula! Qualquer
        feedback também é bem-vindo, e retornaremos no seu e-mail asism que
        possível.
      </p>

      <a href="mailto:gamesroadplay@gmail.com" className="Link">
        <button>
          <p>Fale com a gente!</p>
        </button>
      </a>

      <img src={contactStatue} alt="Estátua legal" />
    </div>
  );
}

export default Contact;
