import Head from 'next/head'
import Link from 'next/link'

export default function Cursos() {
  return (
    <div>
        <ul>
            <li>
                Cursos
            </li>
            <li>
                <Link href="./">
                    Home
                </Link>
            </li>
        </ul>
    </div>
    
  )
}