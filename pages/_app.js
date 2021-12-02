import NavBar from "../components/NavBar";
import "../styles/global.css"
import Head from "next/head";

function App({Component, pageProps}) {

    return (
        <>
            <Head>
                <link rel="shortcut icon" href="icons/favicon.ico"/>
            </Head>
            <header>
                <NavBar/>
            </header>
            <Component {...pageProps}/>
        </>
    )
}

export default App