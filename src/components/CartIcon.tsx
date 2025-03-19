import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartIcon = () => {
  return (
    <Link to="/cart" className="relative">
      <ShoppingCart className="h-6 w-6 text-white hover:text-pink-500 transition-colors" />
      <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
        0
      </span>
    </Link>
  );
};

export default CartIcon;