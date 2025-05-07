'use client'
import { openLoginModal } from '@/features/modal/modalSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { logout, setToken } from '@/services/auth/authSlice';
import { Heart, ShoppingCart, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

type NavbarProps = {
    name: string;
    path: string;

};

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const dispatch = useAppDispatch()
    const pathName = usePathname();


    const token = useAppSelector(state => state.auth.token);

    useEffect(() => {
        const tokenValue = localStorage.getItem('authToken');
       
        if (tokenValue) {
            dispatch(setToken(tokenValue));
        }
    }, []);

    const handleOnclick = () => {
        dispatch(openLoginModal())
        setMenuOpen(false)
    }
    const signOutHandler = () => {
        dispatch(logout());
        localStorage.removeItem('authToken')
        toast.success("Sign out successfully")
        dispatch(openLoginModal())
    }

    const navElement = ({name,path}:NavbarProps)=>{
        return (
            <div onClick={()=>setMenuOpen(false)} className={`font-semibold ${pathName === `${path}` || pathName.includes(path+'/')? "text-black md:text-blue-500" : "text-white md:text-black"}`}>
                <Link href={`${path}`} className="hover:text-blue-500 text-md">{name}</Link>
            </div>
        )
    }
    const othersNavElement = <>
            <div className='hidden md:flex justify-between items-center gap-5 lg:gap-3 xl:gap-4 text-md'>
                <button className={`flex items-center   lg:gap-2 xl:gap-1  ${pathName=='/'?'hover:text-black':'hover:text-blue-500'}`}><Heart className=' w-6 lg:w-5 xl:w-6 h-6 lg:h-5 xl:h-6  '/><span className='hidden lg:flex'>Favorite</span></button>
                <button className={`hidden md:flex items-center relative gap-3 xl:gap-2 ${pathName=='/'?' hover:text-black':'hover:text-blue-500 '}`}>
                <span className='relative flex items-center gap-1'>
                <ShoppingCart className='w-6 h-6 lg:w-5 xl:w-6 lg:h-5 xl:h-6' ></ShoppingCart>
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 lg:w-4 lg-4 xl:w-5 xl:h-5 flex items-center justify-center">3</span>
                </span>   
                    <span className='hidden lg:flex'>Cart</span>
                </button>
            </div>
            {
              token !== null && token?.length > 0 ?
                 <button onClick={signOutHandler} className={`${pathName=='/'?'text-white  hover:text-black':' hover:text-blue-500 text-white md:text-black'}  border px-1 rounded-md font-semibold`}>Sign-Out</button>
                :

                 <button onClick={handleOnclick} className={`${pathName=='/'?'text-white  hover:text-black':' hover:text-blue-500 text-white md:text-black'}  border px-1 rounded-md font-semibold`}>Sign In</button>
            }
           
    </>
    return (
        <nav className="relative ">
            {/* Log in component*/}
            
            <div className="container mx-auto flex justify-around items-center w-full px-4 py-8 lg:px-5  ">
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
                           <span className='relative flex items-center gap-1'>
                         <ShoppingCart className={`w-6 h-6 ${pathName=='/'?'text-white  hover:text-black':' hover:text-blue-500 text-black'} `} ></ShoppingCart>
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5  flex items-center justify-center">3</span>
                </span>   
                    <span className='hidden lg:flex'>Cart</span>
                         </button>
                        <button
                            className={`text-2xl ml-4 ${pathName=='/'?'hover:text-black text-white ':'text-black hover:text-blue-500'}`}
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            {menuOpen ? <X/> : "☰"}
                        </button>
                    </div>
                    {/* Hamburger Menu for Small Devices */}
                </div>

                {/* Center: Navigation Icons/Elements (Hidden on small devices) */}
                <div className="hidden sm:flex flex-2 justify-center gap-6 lg:gap-10 xl:gap-16 ">
                    {navElement({name:"Home",path:"/"})}
                    {navElement({name:"Shop",path:"/shop"})}
                    {navElement({ name: "About us", path: "/about" })}
                    {navElement({ name: "Blog", path: "/blog" })}
                </div>

                {/* Right Side: Favorite, Cart, Sign In (Hidden on small devices) */}
                <div className={`hidden md:flex text-black  ${pathName==='/'?'md:text-white':' md:text-black'} font-semibold flex-1 justify-end xl:justify-center md:gap-5 lg:gap-2 xl:gap-4`}>
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
                
                <nav className="flex flex-col items-start p-5 gap-2">
                    {navElement({name:"Home",path:"/"})}
                    {navElement({name:"Shop",path:"/shop"})}
                    {navElement({ name: "About us", path: "/about" })}
                    {navElement({ name: "Blog", path: "/blog" })}
                    {othersNavElement}
                   
                </nav>
            </div>
        </nav>
    );
};

export default Navbar;
