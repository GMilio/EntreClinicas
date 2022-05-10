import Head from 'next/head'
import Link from 'next/link'
import Header from '../src/components/Containers/Header'

export default function Cursos() {
  return (    
    <main>
        <Header></Header> 
    <div>
        <div>
            <section>
                <h1>Conheça Mais dos Cursos Disponiveis:</h1>
                <h2>Cursos nas Areas de Tecnologia, Saúde e Terapias </h2>
                <div>
                    <h3>INFORMÁTICA</h3>
                    <h3>INGLÊS</h3>
                    <h3>EXCEL AVANÇADO</h3>
                    <h3>GESTÃO EMPRESARIAL</h3>
                </div>
                <div>
                    <h3>CUIDADOR DE IDOSO</h3>
                    <h3>RECEPCIONISTA EM SERVIÇO DE SAÚDE</h3>
                    <h3>AUXILIAR DE FARMÁCIA</h3>
                    <h3>RECEPCIONISTA AMBULATORIAL</h3>
                </div>
                <h2>Encontre os melhores cursos e se qualifique para trabalhar em nossas clicnicas ou em seu proprio negocio.</h2>
            </section>
        </div>
    </div>
    </main>
  )
}