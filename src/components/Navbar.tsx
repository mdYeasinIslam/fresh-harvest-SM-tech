'use client'
import { Heart, ShoppingCart, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    return (
        <nav className="relative">
            <div className="flex justify-between items-center w-full px-4 py-8 lg:px-20 ">
                {/* Left Side: Logo */}
                <div className="w-full md:max-w-fit flex items-center justify-between ">
                    <Image
                        src="/logoName.png"
                        alt="Logo"
                        width={500}
                        height={500}
                        className="w-[181px] h-[32px] lg:w-[225px] lg:h-[39px]" />
                    <div className='flex items-center sm:hidden '>
                        <button className="hover:text-blue-500 ">
                            <ShoppingCart className='w-6 h-6'/>
                         </button>
                        <button
                            className="text-2xl ml-4"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            {menuOpen ? <X/> : "☰"}
                        </button>
                    </div>
                    {/* Hamburger Menu for Small Devices */}
                </div>

                {/* Center: Navigation Icons/Elements (Hidden on small devices) */}
                <div className="hidden sm:flex flex-2 justify-center gap-16  ">
                    <a href="#home" className="hover:text-blue-500">Home</a>
                    <a href="#about" className="hover:text-blue-500">About</a>
                    <a href="#services" className="hover:text-blue-500">Services</a>
                    <a href="#contact" className="hover:text-blue-500">Contact</a>
                </div>

                {/* Right Side: Favorite, Cart, Sign In (Hidden on small devices) */}
                <div className="hidden sm:flex flex-1 justify-end gap-4">
                    <button className="flex items-center gap-2 hover:text-blue-500"><Heart /><span>Favorite</span></button>
                    <button className="flex items-center gap-2 hover:text-blue-500"><ShoppingCart className='w-6 h-6'/><span>Cart</span></button>
                    <button className="hover:text-blue-500">Sign In</button>
                </div>
            </div>

            {/* Sidebar Navigation for Small Devices */}
            <div
                className={`block md:hidden fixed top-0 right-0 h-full bg-[#749B3F] shadow-lg z-50 transform ${
                    menuOpen ? "translate-x-0" : "translate-x-full"
                } transition-transform duration-700 w-2/3 sm:hidden`}
            >
                <button
                    className="text-2xl px-4 py-2 w-full "
                    onClick={() => setMenuOpen(false)}
                >
                    <X className='w-6 h-6 font-bold ' />
                </button>
                
                <nav className="flex flex-col items-start p-5">
                    <a href="#home" className=" hover:text-blue-500">
                        Home
                    </a>
                    <a href="#about" className=" hover:text-blue-500">
                        About
                    </a>
                    <a href="#services" className=" hover:text-blue-500">
                        Services
                    </a>
                    <a href="#contact" className=" hover:text-blue-500">
                        Contact
                    </a>
                </nav>
            </div>
        </nav>
    );
};

export default Navbar;
