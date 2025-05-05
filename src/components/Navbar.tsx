'use client'
import { Heart, ShoppingCart, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

type NavbarProps = {
    name: string;
    path: string;

};

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathName = usePathname();
    console.log(pathName)
    const navElement = ({name,path}:NavbarProps)=>{
        return (
            <div className={`font-semibold ${pathName === `/${path}` ? "text-black md:text-blue-500" : "text-white md:text-black"}`}>
                <Link href={`/${path}`} className="hover:text-blue-500">{name}</Link>
            </div>
        )

    }
    const othersNavElement = <>
            <div className='hidden md:flex justify-between items-center gap-4 '>
                <button className="flex items-center gap-2 hover:text-black"><Heart  className='w-6 h-6'/><span className='hidden md:flex'>Favorite</span></button>
                <button className="hidden md:flex items-center gap-2 hover:text-black "><ShoppingCart className='w-6 h-6 '/><span className='hidden md:flex'>Cart</span></button>
            </div>
            <button className="hover:text-black text-white border px-1 rounded-md font-semibold ">Sign In</button>
    </>
    return (
        <nav className="relative ">
            <div className="container mx-auto flex justify-around items-center w-full px-4 py-8 lg:px-0  ">
                {/* Left Side: Logo */}
                <div className="w-full md:max-w-fit flex items-center justify-between ">
                    <Image
                        src="/logoName.png"
                        alt="Logo"
                        width={500}
                        height={500}
                        className="w-[181px] h-[32px] lg:w-[225px] lg:h-[39px]" />
                    <div className='flex items-center sm:hidden '>
                        <button className="text-white hover:text-blue-500 ">
                            <ShoppingCart className='w-6 h-6'/>
                         </button>
                        <button
                            className="text-white text-2xl ml-4"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            {menuOpen ? <X/> : "☰"}
                        </button>
                    </div>
                    {/* Hamburger Menu for Small Devices */}
                </div>

                {/* Center: Navigation Icons/Elements (Hidden on small devices) */}
                <div className="hidden sm:flex flex-2 justify-center gap-16 ">
                    {navElement({name:"Home",path:""})}
                    {navElement({name:"Shop",path:"shop"})}
                    {navElement({ name: "About us", path: "about" })}
                    {navElement({ name: "Blog", path: "blog" })}
                </div>

                {/* Right Side: Favorite, Cart, Sign In (Hidden on small devices) */}
                <div className="hidden md:flex text-black lg:text-white font-semibold flex-1 justify-center gap-4">
                  {othersNavElement}
                </div>
            </div>

            {/* Sidebar Navigation for Small Devices */}
            <div
                className={`block md:hidden fixed top-0  right-0 h-full bg-[#749B3F] shadow-lg z-50 transform ${
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
                    {navElement({name:"Home",path:""})}
                    {navElement({name:"Shop",path:"shop"})}
                    {navElement({ name: "About us", path: "about" })}
                    {navElement({ name: "Blog", path: "blog" })}
                   

                    {othersNavElement}
                   
                </nav>
            </div>
        </nav>
    );
};

export default Navbar;
