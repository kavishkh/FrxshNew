import React from 'react';
import { motion } from 'framer-motion';
import { Trash2, Plus, Minus } from 'lucide-react';

const cartItems = [
  {
    id: 1,
    name: 'NONSENSE - BLACK',
    price: 23.65,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
  }
];

const Cart = () => {
  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1 
          className="text-4xl font-bold mb-8 font-['Poppins']"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Your Cart
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {cartItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gray-900 rounded-lg p-4 mb-4 flex items-center"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="ml-4 flex-grow">
                  <h3 className="font-['Poppins'] font-semibold">{item.name}</h3>
                  <p className="text-pink-500 font-['Poppins']">${item.price}</p>
                  <div className="flex items-center mt-2">
                    <button className="p-1 hover:text-pink-500">
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="mx-2 font-['Poppins']">{item.quantity}</span>
                    <button className="p-1 hover:text-pink-500">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <button className="p-2 hover:text-pink-500">
                  <Trash2 className="w-5 h-5" />
                </button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-900 rounded-lg p-6 h-fit"
          >
            <h2 className="text-xl font-bold mb-4 font-['Poppins']">Order Summary</h2>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-400">Subtotal</span>
                <span>$23.65</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Tax</span>
                <span>$2.37</span>
              </div>
              <div className="border-t border-gray-700 pt-2 mt-2">
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>$26.02</span>
                </div>
              </div>
            </div>
            <button className="w-full bg-pink-500 text-white py-3 rounded-lg font-semibold hover:bg-pink-600 transition-colors">
              Checkout
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Cart;