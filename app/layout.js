import Head from "next/head";

export default function RootLayout({ children }) {

    return (
        <html lang="en">
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
                <title>Will LeVan</title>
                <meta name="description" content="Will LeVan - Portfolio" />
            </Head>
            <body>
                {children}
            </body>
        </html>
    )
}
