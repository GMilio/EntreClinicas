import Head from 'next/head'
import Link from '../src/components/Link'
import Footer from '../src/components/Containers/Footer/footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <link rel="styleeshet" href="./style.css"></link>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

  <section class="sectstyle">
        <div>
            <img src="..//Projeto Yooper/img/img1.jpg"/>
            <h2>
               Como podemos lhe ajudar?
            </h2>
            <select name="FiltroPesq" id="FiltroPesq">
                <option value="-1">Selecione uma op��o</option>
                <option value="0">Tratamento Psicologico</option>
                <option value="1">Tratamento Psquiatrico</option>
            </select>
            <input type="button" name="Filtrar" id="Filtrar" value="Pesquisar" onclick="Pesquisar()"/>
        </div>
        <div>
            <img src="..//Projeto Yooper/img/img2.jpg"/>
            <h2>
               Lorem ipsum dolor sit amet consectetur 
               adipisicing elit. Animi soluta repudiandae 
               sit doloribus dolor provident distinctio ipsam
               ducimus ex expedita. Ratione dolores fugit officia
               molestiae eum eligendi odit quibusdam beatae.
            </h2>
        </div>
    </section>
      </main>

      <Footer></Footer>

    </div>
  )
}
