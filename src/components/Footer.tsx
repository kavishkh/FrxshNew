import { Link } from 'react-router-dom';
import { ShoppingBag, Instagram, Twitter, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zinc-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <ShoppingBag className="h-8 w-8 text-white" />
              <span className="text-xl font-bold font-['Poppins']">FRXSH</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Elevate your style with our premium collection of fashion-forward designs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-['Poppins']">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/new-collection" className="text-gray-400 hover:text-white transition-colors">
                  New Collection
                </Link>
              </li>
              <li>
                <Link to="/best-selling" className="text-gray-400 hover:text-white transition-colors">
                  Best Selling
                </Link>
              </li>
              <li>
                <Link to="/premium-quality" className="text-gray-400 hover:text-white transition-colors">
                  Premium Quality
                </Link>
              </li>
              <li>
                <Link to="/future-collection" className="text-gray-400 hover:text-white transition-colors">
                  Future Collection
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-['Poppins']">Customer Service</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Returns & Exchange
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Size Guide
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-['Poppins']">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-400">
                <MapPin className="h-5 w-5" />
                <span>123 Fashion Street, NY 10001</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone className="h-5 w-5" />
                <span>+1 234 567 8900</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail className="h-5 w-5" />
                <span>contact@frxsh.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 FRXSH. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;