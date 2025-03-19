import React from 'react';
import { motion } from 'framer-motion';
import { Filter, ChevronDown } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'NONSENSE - BLACK',
    price: 23.65,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    category: 'Hoodies'
  },
  {
    id: 2,
    name: 'EDGE RUNNER YELLOW',
    price: 23.65,
    image: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    category: 'Hoodies'
  }
];

const Catalog = () => {
  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <motion.h1 
            className="text-4xl font-bold font-['Poppins']"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Catalog
          </motion.h1>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center space-x-2 bg-gray-900 px-4 py-2 rounded-lg hover:bg-gray-800"
          >
            <Filter className="w-5 h-5" />
            <span>Filter</span>
            <ChevronDown className="w-4 h-4" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900 rounded-lg overflow-hidden group cursor-pointer"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-pink-500 mb-1">{product.category}</p>
                <h3 className="font-['Poppins'] font-semibold mb-2">{product.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="font-['Poppins'] text-lg">${product.price}</span>
                  <button className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm hover:bg-pink-600 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;