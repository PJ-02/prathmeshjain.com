import Head from 'next/head'
import Link from 'next/link'
import Button from 'react-bootstrap/Button'

export default function Home() {
    return (
        <>
            <Head>
                <title>Minecraft?</title>
            </Head>
            <h1>Minecraft?</h1>
            <Button variant="light" href="/">Back</Button>
        </>
    )
}