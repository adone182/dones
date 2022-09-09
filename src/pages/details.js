import React from "react";
import Header from "parts/header";
import Sitemaps from "parts/sitemaps";
import Footer from "parts/footer";
import Breadcrumb from "components/breadcrumb";
import Productdetails from "parts/Details/productdetails";
import Suggestion from "parts/Details/suggestion";

export default function Details(){
  return(
    <>
      <Header theme="black"/>
      {/* list merupakan props */}
      <Breadcrumb list={[
        {url : "/" , name: "Home"},
        {url : "/categories/93842" , name: "Office Room"},
        {url : "/categories/93842/products/1213" , name: "Details"}
      ]} />
      <Productdetails/>
      <Suggestion/>
      <Sitemaps/>
      <Footer/>
    </>
  )
}