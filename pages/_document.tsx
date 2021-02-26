import Document, { Head, Main, Html, NextScript } from 'Next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                </Head>
                <Main />
                <NextScript />
            </Html>
        )
    }
}