import React from "react";
import Document, {Html, Main, Head, NextScript} from 'next/document'


class MyDocument extends Document {
    render() {
        return (
            <Html lang="ja">
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Gaegu:wght@400;700&family=Kaisei+Tokumin:wght@400;700&display=swap"
                        rel="stylesheet"/>
                </Head>
                <body className={'max-w-screen-[lg] items-center'}>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument
