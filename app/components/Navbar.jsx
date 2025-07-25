
'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import Button from './Button'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav
      className="bg-transparent w-full text-white px-5 py-4 flex justify-between items-center relative z-50"
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
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
      <div className="hidden md:flex gap-8 items-center text-sm">
        <Link href="/">Home</Link>
        <Link href="/about">About Us</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/contact">Contact</Link>
        <Button content="shop now" />
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-full left-0 w-full bg-black flex flex-col items-center gap-4 text-lg py-6 shadow-md md:hidden"
        >
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link href="/menu" onClick={() => setIsOpen(false)}>Menu</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          <Button content="Shop now" />
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar
