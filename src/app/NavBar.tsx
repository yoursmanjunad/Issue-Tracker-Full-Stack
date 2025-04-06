'use client'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React from 'react'
import { FaBug } from "react-icons/fa";
import page from './issues/page';
const NavBar = () => {
    const links = [
        { href: '/', text: 'Dashboard' },
        { href: '/issues', text: 'Issues' }, // Add link to Issues page
      ];
    const pathname = usePathname();
  return (
    <nav className="flex border-b items-center space-x-4  p-5 h-15 text-zinc">
    <Link href={'/'}><FaBug /></Link>
    <ul className='flex space-x-4 justify-between'>
      {links.map((link, index) => (
        <li key={index}>
          <Link
            href={link.href}
            className={`${pathname === link.href ? 'text-zinc-900' : 'text-zinc-500'} hover:text-zinc-700 transition-colors duration-200`}
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