import Head from 'next/head'
import Link from 'next/link'
import Header from '../src/components/Containers/Header'

export default function Cadastro() {
    return (    
      <main>
          <Header></Header> 
      <div>
          <div>
              <section>
                  <form action="">
                      <h2>Nome Completo<input type="text" name="nome" id="nome" /></h2>
                      <h2>email<input type="text" name="email" id="email" /></h2>
                      <h2>idade<input type="text" name="idade" id="idade" /></h2>
                      <h2>Sou:</h2>
                      <h3>Paciente<input type="radio" name="paciente" id="paciente" /></h3>
                      <h3>Profissional de Saude <input type="radio" name="profissional" id="profissional" /></h3>
                      <input type="button" value="Entrar" />
                  </form>
              </section>
          </div>
      </div>
      </main>
    )
  }