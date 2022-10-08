import Breadcrumb from "components/Breadcrumb";
import Congratulation from "parts/Congratulation/congratulation";
import Footer from "parts/footer";
import Header from "parts/header";
import Sitemaps from "parts/sitemaps";
import React from "react";
import Document from "parts/document";

export default function Success() {
  return (
    <Document>
      <Header />
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/success", name: "Success Checkout" },
        ]}
      />
      <Congratulation />
      <Sitemaps />
      <Footer />
    </Document>
  );
}
