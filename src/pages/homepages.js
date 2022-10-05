import React from "react";
import Header from "parts/header";
import Hero from "parts/Homepages/hero";
import Clients from "parts/clients";
import Browserroom from "parts/Homepages/browserroom";
import Justarrived from "parts/Homepages/justarrived";
import Sitemaps from "parts/sitemaps";
import Footer from "parts/footer";
import useScrollAnchor from "helpers/hooks/useScrollAnchor";
import useModalDOM from "helpers/hooks/useModalDOM";

export default function Homepage() {
  useScrollAnchor();
  useModalDOM();
  return (
    <>
      <Header theme="white" position="absolute" />
      <Hero />
      <Browserroom />
      <Justarrived />
      <Clients />
      <Sitemaps />
      <Footer />
    </>
  );
}
