import React from "react";

import "../styles/ContactPage.css"

import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

function ContactPage() {
  return (
    <div>
      <Header />
      <main className="ContactPage" >
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default ContactPage;
