import type {AppProps} from 'next/app'
import "../styles/tailwind.css";
import React, {Fragment} from "react";
import Head from 'next/head'
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <Fragment>
            <Head>
                <title>Rabbit Sitter Hana</title>
            </Head>
            <Navigation/>
            <Component {...pageProps} />
            <Footer/>
        </Fragment>)
}

export default MyApp
