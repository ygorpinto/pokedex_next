import Document, { Head, Main, Html, NextScript } from 'Next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                <link rel="shortcut icon" type="image/ico" href="/pokemon.ico"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>
                </Head>
                <Main />
                <NextScript />
            </Html>
        )
    }
}