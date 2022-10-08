import useScrollToTop from "helpers/hooks/useScrollToTop";
import Errorpages from "parts/404/errorpages";
import Footer from "parts/footer";
import Header from "parts/header";
import React from "react";
import Document from "parts/document";

export default function Notfound() {
  useScrollToTop();
  return (
    <Document>
      <Header />
      <Errorpages />
      <Footer />
    </Document>
  );
}
