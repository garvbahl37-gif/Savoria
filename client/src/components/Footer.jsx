import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" className="bg-secondary text-white py-20 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 text-center">

                {/* Brand */}
                <div className="mb-16">
                    <h2 className="font-serif text-4xl text-primary mb-2">Savoria</h2>
                    <p className="font-sans text-xs tracking-[0.3em] uppercase text-gray-500">Fine Italian Cuisine</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 font-light">
                    {/* Address */}
                    <div>
                        <h3 className="text-primary font-sans font-bold text-xs tracking-[0.2em] uppercase mb-6">Address</h3>
                        <p className="text-gray-400 leading-loose">
                            123 Via Roma<br />
                            Downtown District<br />
                            City, State 10001
                        </p>
                    </div>

                    {/* Hours */}
                    <div>
                        <h3 className="text-primary font-sans font-bold text-xs tracking-[0.2em] uppercase mb-6">Hours</h3>
                        <p className="text-gray-400 leading-loose">
                            Tuesday - Thursday: 6PM - 10PM<br />
                            Friday - Saturday: 6PM - 11PM<br />
                            Sunday: 5PM - 9PM
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-primary font-sans font-bold text-xs tracking-[0.2em] uppercase mb-6">Contact</h3>
                        <p className="text-gray-400 leading-loose">
                            +1 (555) 234-5678<br />
                            reservations@ladolcevita.com
                        </p>
                    </div>
                </div>

                {/* Socials */}
                <div className="flex justify-center space-x-8 mb-16">
                    <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all">
                        <Instagram size={18} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all">
                        <Facebook size={18} />
                    </a>
                </div>

                <div className="text-gray-600 text-xs tracking-widest uppercase">
                    &copy; {new Date().getFullYear()} Savoria. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
