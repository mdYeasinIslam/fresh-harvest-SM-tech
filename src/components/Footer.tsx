import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and App Links */}
        <div>
          <div className="flex items-center mb-4">
            <Image src="/logo.svg" alt="Fresh Harvests Logo" width={40} height={40} />
            <span className="text-lg font-bold ml-2">Fresh Harvests</span>
          </div>
          <p className="mb-4">Download App:</p>
          <div className="flex gap-2">
            <Image src="/app-store.svg" alt="App Store" width={120} height={40} />
            <Image src="/google-play.svg" alt="Google Play" width={120} height={40} />
          </div>
        </div>

        {/* Quick Links 1 */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links 1</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Shop</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Detail Blog</a></li>
          </ul>
        </div>

        {/* Quick Links 2 */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links 2</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Favorites</a></li>
            <li><a href="#" className="hover:underline">Cart</a></li>
            <li><a href="#" className="hover:underline">Sign In</a></li>
            <li><a href="#" className="hover:underline">Register</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Image src="/phone.svg" alt="Phone" width={16} height={16} />
              <span>123-456-7890</span>
            </li>
            <li className="flex items-center gap-2">
              <Image src="/email.svg" alt="Email" width={16} height={16} />
              <span>FreshHarvests@gmail.com</span>
            </li>
            <li className="flex items-center gap-2">
              <Image src="/location.svg" alt="Location" width={16} height={16} />
              <span>Young Sari Street, Pontianak, Indonesia</span>
            </li>
          </ul>
          <p className="mt-4">Accepted Payment Methods:</p>
          <div className="flex gap-2">
            <Image src="/visa.svg" alt="Visa" width={40} height={24} />
            <Image src="/paypal.svg" alt="PayPal" width={40} height={24} />
            <Image src="/apple-pay.svg" alt="Apple Pay" width={40} height={24} />
          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-sm text-gray-500">
        © Copyright 2024, All Rights Reserved by Banana Studio
      </div>
    </footer>
  )
}

export default Footer