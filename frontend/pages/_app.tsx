import type {AppProps} from 'next/app'
import "tailwindcss/tailwind.css";
import React from "react";
import Head from 'next/head'

function MyApp({Component, pageProps}: AppProps) {
    return <>
        <Head>
            <title>Rabbit Sitter Hana</title>
        </Head>
        <Component {...pageProps} />
    </>
}

export default MyApp
