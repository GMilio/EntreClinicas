import Head from 'next/head'
import Link from '../Link'

export default function Header({}){
    return( 
        <header class="cabecalho">
         <Link href="/">
                    Logo
                  </Link>
        <nav>
            <ul class="lista">
              <li>
                  <Link href="/atendimentos">
                    Atendimentos
                  </Link>
              </li>
              <li>
                  <Link href="/cursos">
                    Cursos
                  </Link>
              </li>
              <li>
                  <Link href="./parcerias">
                    Parcerias
                  </Link>
              </li>                  
                <li>
                <Link href="./login">
                    Entrar
                  </Link>
                </li>
                <li>
                <Link href="./cadastro">
                    Cadastre-se
                  </Link>
                </li>
            </ul>
        </nav>
        <div class="divban">
      </div>
    </header>
    )
}