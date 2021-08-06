import React from "react";
import Document, {Html, Head, Main, NextScript} from 'next/document'
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

interface logoType{
    logo: StaticImageData;
}
class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head/>
                <body className={'max-w-screen-[lg] items-center'}>

                <Navigation/>
                <Main/>
                <NextScript/>
                <Footer/>
                </body>
            </Html>
        )
    }
}

export default MyDocument
