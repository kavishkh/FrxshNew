import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Star, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const brands = ['BOSS', 'LACOSTE', 'ASOS', 'ADIDAS', 'NIKE'];

const products = [
  {
    id: 1,
    name: 'NONSENSE - BLACK',
    price: 23.65,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    isNew: true
  },
  {
    id: 2,
    name: 'EDGE RUNNER YELLOW',
    price: 23.65,
    image: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    isNew: true
  },
  {
    id: 3,
    name: 'EDGE RUNNER BLACK',
    price: 23.65,
    image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    isNew: true
  }
];

const featuredProducts = [
  {
    id: 1,
    name: 'Edge Runner',
    description: '20% OFF on all purchases & free shipping on purchases of 5 items',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    bgColor: 'from-orange-400 to-pink-600'
  },
  {
    id: 2,
    name: 'Nike Air Man Max',
    description: 'Get up to 30% off! Hurry up!',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    bgColor: 'from-blue-400 to-purple-600'
  },
  {
    id: 3,
    name: 'The Future Collection',
    description: 'Shop the Trending Future Collection',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    isNew: true,
    bgColor: 'from-purple-400 to-pink-600'
  }
];

const bestSelling = [
  { id: 1, name: 'TOMI OSAKA', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { id: 2, name: 'BLACK ER-01', image: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { id: 3, name: 'YELLOW ER-08', image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { id: 4, name: 'AIR MAX DN', image: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { id: 5, name: 'JORDAN SPORT', image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
];

const reviews = [
  {
    id: 1,
    name: 'ALEX R.',
    rating: 5,
    comment: 'GREAT QUALITY AND FAST SHIPPING! LOVE MY NEON HOODIE!',
    image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
  }
];

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-black pt-20">
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 font-['Poppins']"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">FRXSH</span>
              <br />
              Your Style, <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">Your Way</span>
            </motion.h1>
            <motion.p 
              className="text-gray-400 mb-8 font-['Poppins']"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Make Your Shopping Experience Easier Than Ever
            </motion.p>
            <motion.div 
              className="relative max-w-2xl mx-auto"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <input
                type="text"
                placeholder="Search or ask AI..."
                className="w-full px-6 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 focus:outline-none focus:border-pink-500 transition-colors"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-pink-500 h-6 w-6" />
            </motion.div>
          </div>
        </motion.div>

        {/* Brands */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 overflow-hidden">
          <div className="brand-container relative">
            <div className="flex space-x-20 animate-marquee whitespace-nowrap">
              {[...brands, ...brands].map((brand, index) => (
                <motion.span 
                  key={index}
                  className="text-2xl font-bold font-['Poppins'] text-gray-500 hover:text-pink-500 transition-colors cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                >
                  {brand}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Grid */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-r ${product.bgColor} p-6 h-[400px] group cursor-pointer`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                onClick={() => {
                  if (product.name === 'Edge Runner') {
                    navigate('/product/edge-runner');
                  } else if (product.name === 'Nike Air Man Max') {
                    navigate('/product/nike-air-max');
                  } else if (product.name === 'The Future Collection') {
                    navigate('/future-collection');
                  }
                }}
              >
                <div className="relative h-full flex flex-col justify-between z-10">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                    <p className="text-white/80">{product.description}</p>
                  </div>
                  <button className="flex items-center space-x-2 text-white group-hover:text-white/80 transition-colors">
                    <span>Shop Now</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover mix-blend-overlay group-hover:scale-110 transition-transform duration-700"
                />
                {product.isNew && (
                  <div className="absolute top-4 right-4 bg-white text-black px-3 py-1 rounded-full text-sm font-semibold">
                    NEW
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Selling Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-between items-end mb-8"
          >
            <div>
              <h2 className="text-3xl font-bold font-['Poppins'] text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
                Best Selling
              </h2>
              <p className="text-gray-400 font-['Poppins']">Grab the best of the best</p>
            </div>
            <div className="flex space-x-2">
              <button className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {bestSelling.map((item, index) => (
              <motion.div
                key={item.id}
                className="relative rounded-xl overflow-hidden group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-sm font-['Poppins'] font-semibold">{item.name}</h3>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Quality Section */}
      <section className="py-16 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-violet-500 opacity-90" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center mix-blend-overlay" />
            <div className="relative z-10 p-16">
              <motion.h2 
                className="text-8xl font-bold font-['Poppins'] mb-8 tracking-tight"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                PREMIUM
                <br />
                QUALITY
              </motion.h2>
              <motion.p 
                className="text-xl max-w-md font-['Poppins'] mb-8 text-white/90"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Made with premium, eco-friendly fabrics that provide maximum comfort and style for every occasion.
              </motion.p>
              <motion.button 
                className="bg-white text-black px-8 py-3 rounded-full font-['Poppins'] font-semibold hover:bg-opacity-90 transition-colors flex items-center space-x-2 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <span>Explore All Products</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-between items-center mb-12"
          >
            <div>
              <h2 className="text-3xl font-bold font-['Poppins'] text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
                Our Customers
              </h2>
              <p className="text-gray-400 font-['Poppins']">Satisfaction Guaranteed</p>
            </div>
            <div className="flex space-x-2">
              <button 
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                onClick={() => setActiveIndex(Math.min(reviews.length - 1, activeIndex + 1))}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 backdrop-blur-lg border border-white/5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={review.image} 
                    alt={review.name} 
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-pink-500"
                  />
                  <div className="ml-4">
                    <h3 className="font-['Poppins'] font-semibold text-lg">{review.name}</h3>
                    <div className="flex space-x-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="font-['Poppins'] text-gray-300 text-lg leading-relaxed">
                  {review.comment}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;