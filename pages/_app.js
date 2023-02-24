import '@/styles/globals.css'
import Head from "next/head";
import "semantic-ui-css/semantic.min.css";
import { Fragment, useEffect, useState } from "react";
import baseStyles from "/src/component/css/Base.module.css";
import Footer from "../src/component/Footer";
// import Top from "../src/component/Top";

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

export default function App({ Component, pageProps }) {

  return (
    // <div className={baseStyles.fill_window}>
    <div>
      <Head>
        <title></title>
        <meta name="description" content="Generated by EmartDT" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Top/> */}
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
