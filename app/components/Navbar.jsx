import Link from 'next/link'
import React from 'react'
import Button from './Button'


const Navbar = () => {
  return (
    <>
        <nav className='flex justify-between p-5'>
            <div>
                <Link className='text-white font-bold text-2xl m-5' href='/'>Burgary</Link>
                </div>
            <div className='text-2xl text-white flex justify-between gap-10 mr-5'>
            <Link href='/'>Home</Link>
            <Link href='/about'>About Us</Link>
            <Link href='/menu'>Menu</Link>
            <Link href='/contact'>Contact</Link>
            <Button />
            </div>  
        </nav>
    </>
  )
}

export default Navbar