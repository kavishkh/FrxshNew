import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import CartIcon from './CartIcon';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <ShoppingBag className="h-8 w-8 text-pink-500" />
            <span className="text-xl font-bold font-['Poppins']">FRXSH</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link to="/" className="hover:text-pink-500">Home</Link>
            <Link to="/new-collection" className="hover:text-pink-500">New Collection</Link>
            <Link to="/catalog" className="hover:text-pink-500">Catalog</Link>
            <Link to="/blogs" className="hover:text-pink-500">Blogs</Link>
            <CartIcon />
            <Link 
              to="/login"
              className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600"
            >
              Explore
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;