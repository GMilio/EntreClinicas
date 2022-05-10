import Head from 'next/head'
import Link from 'next/link'
import Header from '../src/components/Containers/Header'

export default function Login() {
    return (    
      <main>
          <Header></Header> 
      <div>
          <div>
              <section>
                  <form action="">
                      <h2>Email ou Nome de Usuario<input type="text" name="usuario" id="usuario" /></h2>
                      <h2>Digite sua Senha<input type="text" name="senha" id="senha" /></h2>
                      <input type="button" value="Entrar" />
                  </form>
              </section>
          </div>
      </div>
      </main>
    )
  }