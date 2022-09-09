import Errorpages from "parts/404/errorpages";
import Footer from "parts/footer";
import Header from "parts/header";
import React from "react";

export default function Notfound(){
  return(
    <>
      <Header/>
      <Errorpages/>
      <Footer/>
    </>
  )
}