import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <link rel="styleeshet" href="./style.css"></link>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <header class="cabecalho">
      <a href="">Logo</a>
      <nav>
          <ul class="lista">
              <li>
                <Link href="./atendimentos">
                  <a>Atendimentos</a>
                </Link>
              </li>
              <li><a href="">Cursos</a></li>
              <li><a href="">Parcerias</a></li>
              <li><a href="">Entrar</a></li>
              <li><a href="">Cadastre-se</a></li>
          </ul>
      </nav>
      <div class="divban">
    </div>
  </header>
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

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
