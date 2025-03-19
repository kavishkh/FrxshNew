import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { Heart, ShoppingBag, Star, ChevronDown } from 'lucide-react';

const products = {
  'edge-runner': {
    name: 'Edge Runner Hoodie',
    price: 89.99,
    rating: 4.8,
    reviews: 128,
    description: 'The Edge Runner Hoodie combines style with comfort. Made from premium cotton blend with a modern cut.',
    images: [
      'https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Yellow', 'Gray']
  },
  'nike-air-max': {
    name: 'Nike Air Man Max',
    price: 129.99,
    rating: 4.9,
    reviews: 256,
    description: 'The iconic Nike Air Max returns with enhanced comfort and modern styling. Perfect for both athletics and casual wear.',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    sizes: ['US 7', 'US 8', 'US 9', 'US 10', 'US 11'],
    colors: ['White/Red', 'Black/Gold', 'Blue/White']
  }
};

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const product = products[id as keyof typeof products];

  if (!product) return <div>Product not found</div>;

  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            {product.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative aspect-square rounded-2xl overflow-hidden"
              >
                <img
                  src={image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-4xl font-bold font-['Poppins'] mb-2">{product.name}</h1>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-500 fill-current' : 'text-gray-400'}`}
                    />
                  ))}
                </div>
                <span className="text-gray-400">({product.reviews} reviews)</span>
              </div>
            </div>

            <p className="text-2xl font-['Poppins'] text-pink-500">${product.price}</p>

            <p className="text-gray-300 font-['Poppins']">{product.description}</p>

            {/* Size Selection */}
            <div>
              <label className="block text-sm font-medium mb-2">Size</label>
              <div className="grid grid-cols-4 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 rounded-lg font-['Poppins'] transition-colors ${
                      selectedSize === size
                        ? 'bg-pink-500 text-white'
                        : 'bg-gray-900 hover:bg-gray-800'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <label className="block text-sm font-medium mb-2">Color</label>
              <div className="grid grid-cols-3 gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`py-3 rounded-lg font-['Poppins'] transition-colors ${
                      selectedColor === color
                        ? 'bg-pink-500 text-white'
                        : 'bg-gray-900 hover:bg-gray-800'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex space-x-4 pt-6">
              <button className="flex-1 bg-pink-500 text-white px-8 py-4 rounded-full font-['Poppins'] hover:bg-pink-600 transition-colors flex items-center justify-center space-x-2">
                <ShoppingBag className="w-5 h-5" />
                <span>Add to Cart</span>
              </button>
              <button className="p-4 bg-gray-900 rounded-full hover:bg-gray-800 transition-colors">
                <Heart className="w-5 h-5" />
              </button>
            </div>

            {/* Additional Info */}
            <div className="border-t border-gray-800 pt-6 mt-6">
              <button className="w-full flex items-center justify-between py-4 text-left">
                <span className="font-['Poppins'] font-medium">Shipping Information</span>
                <ChevronDown className="w-5 h-5" />
              </button>
              <button className="w-full flex items-center justify-between py-4 text-left">
                <span className="font-['Poppins'] font-medium">Return Policy</span>
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;