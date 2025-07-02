
export default function Header() {
  return (
     <header className="bg-white-500 text-black p-5">
      <nav>
        <ul className="flex space-x-4">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}