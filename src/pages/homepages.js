import React from "react";
import Header from "parts/header";
import Hero from "parts/Homepages/hero";
import Clients from "parts/clients";
import Browserroom from "parts/Homepages/browserroom";
import Justarrived from "parts/Homepages/justarrived";
import Sitemaps from "parts/sitemaps";
import Footer from "parts/footer";
import Document from "parts/document";

export default function Homepage() {
  return (
    <Document>
      <Header theme="white" position="absolute" />
      <Hero />
      <Browserroom />
      <Justarrived />
      <Clients />
      <Sitemaps />
      <Footer />
    </Document>
  );
}
