import React from 'react'
import {Link} from 'react-router-dom'

const NavbarApp = () => {
  return  (
    <nav className="bg-cyan-800 text-white w-lvw ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-xl font-bold">Shopping store</div>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"  to='/'>Home</Link>
            <Link className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium" to='/AddProduct'>Add</Link>
            <Link className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium" to='/cart'>cart</Link>

            {/* <a href="/services" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
              Services
            </a>
            <a href="/contact" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
              Contact
            </a> */}
          </div>

        </div>
      </div>

    
    </nav>
  );
};
export default NavbarApp