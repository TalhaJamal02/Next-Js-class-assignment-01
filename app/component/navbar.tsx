import Link from "next/link";

function Navbar() {
  return (
    <div className="main">
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/service">Service</Link></li>
          </ul>
        </nav>
      </div>
  )
}

export default Navbar