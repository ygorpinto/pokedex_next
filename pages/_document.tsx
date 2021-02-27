import Document, { Head, Main, Html, NextScript } from 'Next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                <link rel="shortcut icon" type="image/ico" href="/pokemon.ico"/>
                </Head>
                <Main />
                <NextScript />
            </Html>
        )
    }
}