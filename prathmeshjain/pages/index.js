import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Prathmesh Jain</title>
      </Head>
      <h1>Prathmesh Jain</h1>
      <h2>Under Construction :/</h2>
      <h3>Quick Links:</h3>
      <ul>
        <li><Link href="/minecraft">Minecraft?</Link></li>
        <li><Link href="https://69.prathmeshjain.com">69!</Link></li>
      </ul>
    </>
  )
}