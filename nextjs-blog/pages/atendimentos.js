import Image from 'next/image'


export default function Atendimentos() {
  return (
    <main>

      <div>
        <div>
          <Image src="/banner1.jpg" width={1000} height={700}/>
        </div>
        <div>
          <Image src="/banner2.jpg" width={1000} height={700}/>
        </div>
        <div>
          <Image src="/banner3.jpg" width={1000} height={700}/>
        </div>
      </div>  
 
    </main>
  )
}