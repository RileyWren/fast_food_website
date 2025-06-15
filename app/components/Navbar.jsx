
'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Button from './Button'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-black w-full text-white px-5 py-4 flex justify-between items-center relative z-50">
      {/* Logo */}
      <Link href="/" className="font-bold text-xl sm:text-2xl md:text-4xl">
        Burgary
      </Link>

      {/* Hamburger (mobile) */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-8 items-center text-xl">
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/contact">Contact</Link>
        <Button content="shop now"/>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black flex flex-col items-center gap-4 text-lg py-6 shadow-md md:hidden transition-all duration-300 ease-in-out">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link href="/menu" onClick={() => setIsOpen(false)}>Menu</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          <Button />
        </div>
      )}
    </nav>
  )
}

export default Navbar
