import React from "react";
import Layout from "../components/layout/Layout";
import { ProductProvider } from "../state/context/productContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ProductProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ProductProvider>
  );
}

export default MyApp;
