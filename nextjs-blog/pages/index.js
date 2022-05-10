import Head from 'next/head'
import Link from '../src/components/Link'

import Header from '../src/components/Containers/Header'
import Footer from '../src/components/Containers/Footer/footer'


export default function Home() {
  return (
    <div className="container">
      <Head>
        <link rel="styleeshet" href="./style.css"></link>
        <title>Entre Clinicas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
    <Header></Header>
      </main>



      <Footer></Footer>

    </div>
  )
}
