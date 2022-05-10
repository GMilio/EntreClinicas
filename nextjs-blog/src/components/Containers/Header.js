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
                <li><a href="">Entrar</a></li>
                <li><a href="">Cadastre-se</a></li>
            </ul>
        </nav>
        <div class="divban">
      </div>
    </header>
    )
}