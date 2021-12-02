import NavBar from "../components/NavBar";
import Head from "next/head";

function AboutPage() {
    console.log('[HomePage] render')
    return (
        <>
            <Head>
                <title>About - My Blog</title>
            </Head>
            <main>
                <h1>About</h1>
            </main>
        </>
    )
}

export default AboutPage


