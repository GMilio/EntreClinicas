import Head from 'next/head'
import Link from 'next/link'

export default function Atendimentos() {
  return (
    <div>
      <ul>
        <li>
            Atendimentos
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