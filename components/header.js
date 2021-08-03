import Link from 'next/link'

export default function Header(props){
    return(
      <header className="flex justify-between bg-green-500 p-4 items-center">
          <h1 className="text-4xl">Cookie Stand Admin</h1>
          <Link  href='/overview'>
            <a className="p-1 rounded bg-green-50"> Overview </a>
          </Link>
      </header>
    )
    }