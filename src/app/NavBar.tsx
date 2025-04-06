import Link from 'next/link';
import React from 'react'
import { FaBug } from "react-icons/fa";
import page from './issues/page';
const NavBar = () => {
    const links = [
        { href: '/', text: 'Dashboard' },
        { href: '/issues', text: 'Issues' }, // Add link to Issues page
      ];
  return (
    <nav className="flex border-b items-center space-x-4  p-5 h-15 text-zinc">
    <Link href={'/'}><FaBug /></Link>
    <ul className='flex space-x-4 justify-between'>
      {links.map((link, index) => (
        <li key={index}>
          <Link
            href={link.href}
            className='text-zinc-600 hover:text-zinc-800 transition-colors'
          >
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
    </nav>  
  )
}

export default NavBar