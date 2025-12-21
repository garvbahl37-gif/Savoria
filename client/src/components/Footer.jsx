import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-secondary text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">GourmetHash</h3>
                        <p className="text-gray-400">Experience the finest dining in the heart of the city.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact</h3>
                        <p className="text-gray-400">123 Culinary Ave, Foodie City</p>
                        <p className="text-gray-400">+1 234 567 8900</p>
                        <p className="text-gray-400">info@gourmethash.com</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-primary transition-colors"><Facebook /></a>
                            <a href="#" className="hover:text-primary transition-colors"><Instagram /></a>
                            <a href="#" className="hover:text-primary transition-colors"><Twitter /></a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-500">
                    &copy; {new Date().getFullYear()} GourmetHash. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
