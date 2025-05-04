'use client'
import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    return (
        <nav className="relative">
            <div className="flex justify-between items-center w-full px-4 py-8">
                {/* Left Side: Logo */}
                <div className="w-full flex items-center justify-between ">
                    

                    <Image
                        src="/logoName.png"
                        alt="Logo"
                        width={500}
                        height={500}
                        className="w-[181px] h-[32px] lg:w-[225px] lg:h-[39px]" />
                    {/* <h1 className='text-[#212337] text-xl font-bold'>Fresh Harvest</h1> */}
                    <div className=' sm:hidden'>
                        <button className="hover:text-blue-500 ">
                            <ShoppingCart className='w-6 h-6'/>
                         </button>
                        <button
                            className="text-2xl ml-4"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            {menuOpen ? "X" : "☰"}
                        </button>
                    </div>
                    {/* Hamburger Menu for Small Devices */}
                </div>

                {/* Center: Navigation Icons/Elements (Hidden on small devices) */}
                <div className="hidden sm:flex flex-2 justify-center gap-16">
                    <a href="#home" className="hover:text-blue-500">Home</a>
                    <a href="#about" className="hover:text-blue-500">About</a>
                    <a href="#services" className="hover:text-blue-500">Services</a>
                    <a href="#contact" className="hover:text-blue-500">Contact</a>
                </div>

                {/* Right Side: Favorite, Cart, Sign In (Hidden on small devices) */}
                <div className="hidden sm:flex flex-1 justify-end gap-4">
                    <button className="hover:text-blue-500">Favorite</button>
                    <button className="hover:text-blue-500">Cart</button>
                    <button className="hover:text-blue-500">Sign In</button>
                </div>
            </div>

            {/* Sidebar Navigation for Small Devices */}
            <div
                className={`fixed top-0 right-0 h-full bg-white shadow-lg z-50 transform ${
                    menuOpen ? "translate-x-0" : "translate-x-full"
                } transition-transform duration-700 w-2/3 sm:hidden`}
            >
                <button
                    className="text-2xl p-4"
                    onClick={() => setMenuOpen(false)}
                >
                    X
                </button>
                
                <nav className="flex flex-col items-start p-5">
                    <a href="#home" className="mb-4 hover:text-blue-500">
                        Home
                    </a>
                    <a href="#about" className="mb-4 hover:text-blue-500">
                        About
                    </a>
                    <a href="#services" className="mb-4 hover:text-blue-500">
                        Services
                    </a>
                    <a href="#contact" className="mb-4 hover:text-blue-500">
                        Contact
                    </a>
                </nav>
            </div>
        </nav>
    );
};

export default Navbar;
