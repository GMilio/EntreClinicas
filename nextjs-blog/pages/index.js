import Head from 'next/head'
import Link from '../src/components/Link'


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

      <footer>
      <p>Entre Em Contato conosco atraves de nossos canais de atendimento Esperamos ter Ajudado  Volte Sempre</p>
        <nav>
          <ul class="lista">
              <form class="form" action="">
                <fieldset>
                    <li><label>Nome Completo:</label><input type="text" name="" id=""/></li>
                    <li><label>Email:</label> <input class="email" type="email" name="" id=""/></li>
                    <li><label>Telefone:</label><input class="tel" type="tel" name="" id=""/></li>
                    <li><label>Envie sua Sugest?o ou Duvida:</label><textarea name="" id="" cols="38" rows="8"></textarea></li>
                    <li> <label> Enviar </label></li>
                </fieldset>
            </form>
          </ul>
      </nav>

      </footer>

    </div>
  )
}
