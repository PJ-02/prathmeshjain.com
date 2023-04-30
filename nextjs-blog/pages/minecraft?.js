import Head from 'next/head'
import Link from 'next/link'

export default function Minecraft() {
    return (
        <>
            <Head>
                <title>Minecraft?</title>
            </Head>
            <h1>Minecraft</h1>
            <h2>
                <Link href="/">← Back to home</Link>
            </h2>
        </>
    );
}