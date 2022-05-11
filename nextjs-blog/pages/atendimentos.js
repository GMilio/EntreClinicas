import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Header from '../src/components/Containers/Header'

export default function Atendimentos() {
  return (
    <main>
      <Header></Header>
      <div>
        <Image src="/banner1.jpg" width={1000} height={700}/>
        <Image src="/banner2.jpg" width={1000} height={700}/>
        <Image src="/banner3.jpg" width={1000} height={700}/>
      </div>  
    </main>
  )
}