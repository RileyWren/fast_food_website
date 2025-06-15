'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Button from './Button'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-black w-screen text-white p-5 flex justify-between items-center">
      <div>
        <Link className="text-white font-bold text-lg sm:text-2xl md:text-4xl" href="/">Burgary</Link>
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-10 items-center text-2xl">
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/contact">Contact</Link>
        <Button />
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-19 left-0 w-full bg-black flex flex-col items-center gap-4 sm:gap-6 text-lg sm:text-2xl py-5 md:hidden">
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
