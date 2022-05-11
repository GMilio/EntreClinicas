import Head from 'next/head'
import Link from '../Link'

export default function Header({}){
    return( 
        <header class="cabecalho">
          <Link class="logtitulo" href="/">
          <h1 class="titulo" >EntreClinicas</h1>
            <img class="logopri" src="logo.png" alt="Logotipo do Site"/>
          </Link>
          <nav>
              <ul class="lista">           
                  <li>
                      <Link class="btnhead" href="/atendimentos">
                        Atendimentos.
                      </Link>
                  </li>
                  <li>
                    <Link class="btnhead" href="/atendimentos">
                      Profissionais
                    </Link>
                  </li>
                  <li>
                      <Link class="btnhead" href="/cursos">
                        Cursos
                      </Link>
                  </li>
                  <li>
                      <Link class="btnhead" href="./parcerias">
                        Parcerias
                      </Link>
                  </li>                  
                    <li>
                    <Link class="btnhead" href="./login">
                        Entrar
                      </Link>
                    </li>
                    <li>
                    <Link  class="btncad" href="./cadastro">
                        Cadastre-se
                      </Link>
                    </li>
                </ul>
            </nav>
    </header>
    )
}