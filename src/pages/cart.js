import React from "react";
import Header from "parts/header";
import Footer from "parts/footer";
import Sitemaps from "parts/sitemaps";
import Breadcrumb from "components/Breadcrumb";
import Shoppingcart from "parts/Cart/shoppingcart";
import Shippingdetail from "parts/Cart/shippingdetail";
import Document from "parts/document";

export default function Cart() {
  return (
    <Document>
      <Header theme="black" />
      {/* list merupakan props */}
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/cart", name: "Shopping Cart" },
        ]}
      />

      {/* wraper cart */}

      <section className="md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex -mx-4 flex-wrap">
            <Shoppingcart />
            <Shippingdetail />
          </div>
        </div>
      </section>

      {/* end wrapper cart */}
      <Sitemaps />
      <Footer />
    </Document>
  );
}
