import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const collections = [
  {
    id: 1,
    name: 'Summer Collection 2025',
    description: 'Experience the perfect blend of style and comfort with our latest summer collection.',
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 2,
    name: 'Urban Street Style',
    description: 'Discover the latest trends in urban fashion with our exclusive street style collection.',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
  }
];

const NewCollection = () => {
  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1 
          className="text-4xl font-bold mb-8 font-['Poppins']"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          New Collection
        </motion.h1>

        <div className="space-y-12">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative h-[500px] rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img
                src={collection.image}
                alt={collection.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h2 className="text-3xl font-bold mb-4 font-['Poppins']">{collection.name}</h2>
                <p className="text-gray-300 mb-6 max-w-xl font-['Poppins']">{collection.description}</p>
                <motion.button 
                  className="flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-full font-['Poppins'] group"
                  whileHover={{ scale: 1.05 }}
                >
                  <span>Explore Collection</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewCollection;