import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Neon Dreams Hoodie',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    rating: 4.8
  },
  {
    id: 2,
    name: 'Cyber Punk Jacket',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    rating: 4.9
  },
  {
    id: 3,
    name: 'Matrix Overcoat',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    rating: 4.7
  }
];

const FutureCollection = () => {
  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative h-[500px] rounded-2xl overflow-hidden mb-16"
        >
          <img
            src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
            alt="Future Collection"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-5xl font-bold mb-4 font-['Poppins']"
            >
              The Future Collection
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-300 max-w-2xl font-['Poppins']"
            >
              Step into tomorrow with our cutting-edge designs. Where fashion meets innovation.
            </motion.p>
          </div>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900 rounded-2xl overflow-hidden group"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-500 fill-current'
                          : 'text-gray-400'
                      }`}
                    />
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2 font-['Poppins']">{product.name}</h3>
                <p className="text-pink-500 font-['Poppins'] mb-4">${product.price}</p>
                <button className="w-full bg-white text-black py-3 rounded-full font-['Poppins'] hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2 group">
                  <span>View Details</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {['Innovative Design', 'Premium Materials', 'Sustainable Future'].map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="bg-gray-900 p-6 rounded-2xl text-center"
            >
              <h3 className="text-xl font-bold mb-2 font-['Poppins']">{feature}</h3>
              <p className="text-gray-400 font-['Poppins']">
                Experience the next generation of fashion with our cutting-edge collection.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FutureCollection;