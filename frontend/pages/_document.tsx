import React from "react";
import Document, {Html, Main, Head, NextScript} from 'next/document'
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";


class MyDocument extends Document {
    render() {
        return (
            <Html lang="ja">
                <Head>
                    <title>Rabbit Hana</title>
                </Head>
                <body className={'max-w-screen-[lg] items-center'}>
                <Navigation/>
                <Main/>
                <Footer/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument
