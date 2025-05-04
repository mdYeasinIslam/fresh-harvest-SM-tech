import React from 'react'

const Navbar = () => {
  return (
      <nav>
        <div className="flex justify-between items-center w-full">
            {/* Left Side: Logo */}
            <div className="flex-1">
            <img src="/path-to-logo.png" alt="Logo" className="h-10" />
            </div>

            {/* Center: Navigation Icons/Elements */}
            <div className="flex-2 flex justify-center gap-5">
            <a href="#home" className="hover:text-blue-500">Home</a>
            <a href="#about" className="hover:text-blue-500">About</a>
            <a href="#services" className="hover:text-blue-500">Services</a>
            <a href="#contact" className="hover:text-blue-500">Contact</a>
            </div>

            {/* Right Side: Favorite, Cart, Sign In */}
            <div className="flex-1 flex justify-end gap-4">
            <button className="hover:text-blue-500">Favorite</button>
            <button className="hover:text-blue-500">Cart</button>
            <button className="hover:text-blue-500">Sign In</button>
            </div>
            
        </div>
    </nav>
  )
}

export default Navbar