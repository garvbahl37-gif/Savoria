import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Instagram, Facebook, Twitter, Star, Clock } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-[100vh] bg-cream pt-20 overflow-hidden flex flex-col justify-between">
            {/* Background Texture - organic shapes */}
            <div className="absolute top-0 right-0 w-[60vw] h-[80vh] bg-[#f9dec9] opacity-20 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/4 -z-0 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[40vw] h-[60vh] bg-[#d8e2dc] opacity-20 blur-[80px] rounded-full -translate-x-1/3 translate-y-1/4 -z-0 pointer-events-none"></div>

            {/* Main Content Area */}
            <div className="flex-grow flex items-center relative z-10 w-full">
                <div className="max-w-7xl mx-auto px-6 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-x-12 items-center">

                        {/* Left Side: Massive Typography */}
                        <div className="lg:col-span-6 relative z-10">
                            <motion.div
                                initial={{ x: -100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1, ease: 'easeOut' }}
                                className="relative"
                            >
                                <h1 className="text-[5rem] sm:text-[7rem] md:text-[8rem] lg:text-[8rem] font-header font-bold leading-[0.8] text-secondary tracking-tighter">
                                    DELI<br />
                                    <span className="text-secondary/90">CIOUS</span>
                                </h1>
                                {/* Badge - Moved slightly relative to text to avoid blocking it */}
                                <div className="absolute top-0 left-[280px] -translate-y-1/2 w-24 h-24 bg-accent rounded-full flex items-center justify-center text-secondary font-bold font-header text-xs text-center shadow-lg rotate-12 z-20 hidden md:flex border-4 border-white">
                                    SINCE<br />1998
                                </div>
                            </motion.div>
                        </div>

                        {/* Middle/Right: Image Composition & Text */}
                        <div className="lg:col-span-6 flex flex-col items-center lg:items-start relative">

                            {/* Floating Image - Re-positioned to be less conflicting */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3, duration: 1 }}
                                className="relative w-64 md:w-80 aspect-square z-0 mb-8 lg:absolute lg:-left-20 lg:top-1/2 lg:-translate-y-1/2"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                                    alt="Pancakes"
                                    className="w-full h-full object-cover rounded-full border-8 border-white shadow-2xl skew-y-3"
                                />
                                {/* Floating Ingredient 1 */}
                                <motion.div
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute -top-4 -right-4 bg-white p-3 rounded-2xl shadow-xl flex items-center gap-2 z-20"
                                >
                                    <Star className="text-amber-400 fill-current w-5 h-5" />
                                    <span className="font-bold text-secondary text-sm">Top Rated</span>
                                </motion.div>
                            </motion.div>

                            {/* Text Content - Pushed Right */}
                            <motion.div
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                                className="relative z-10 lg:pl-64"
                            >
                                <div className="flex items-center gap-4 mb-6 justify-center lg:justify-start">
                                    <div className="h-[2px] w-12 bg-primary"></div>
                                    <span className="text-primary font-bold tracking-widest uppercase text-sm">Culinary Excellence</span>
                                </div>

                                <p className="font-header text-3xl md:text-4xl text-secondary leading-tight mb-8 text-center lg:text-left">
                                    Where every flavor tells a story of <span className="text-primary italic font-serif">passion</span> and tradition.
                                </p>

                                <p className="font-body text-gray-500 text-lg leading-relaxed max-w-sm mb-10 text-center lg:text-left mx-auto lg:mx-0">
                                    Experience a culinary journey that honors the roots of Italian cooking while embracing modern creativity. Fresh local ingredients, crafted daily.
                                </p>

                                <div className="flex gap-6 justify-center lg:justify-start">
                                    <button className="px-8 py-4 bg-secondary text-white font-header font-bold uppercase tracking-wider rounded-full hover:bg-primary transition-colors shadow-lg">
                                        Book a Table
                                    </button>
                                    <button className="flex items-center gap-3 px-6 py-4 border-2 border-secondary/10 rounded-full font-header font-bold text-secondary hover:bg-secondary/5 transition-colors">
                                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                            <span className="text-xs">▶</span>
                                        </div>
                                        Watch Video
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Strip / Footer of Hero */}
            <div className="relative z-10 w-full border-t border-secondary/5 bg-white/40 backdrop-blur-sm mt-12 py-6">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

                    {/* Socials */}
                    <div className="flex gap-6 text-secondary/60">
                        <a href="#" className="hover:text-primary transition-colors"><Instagram size={20} /></a>
                        <a href="#" className="hover:text-primary transition-colors"><Facebook size={20} /></a>
                        <a href="#" className="hover:text-primary transition-colors"><Twitter size={20} /></a>
                    </div>

                    {/* Stats */}
                    <div className="flex gap-12 text-center md:text-left">
                        <div>
                            <p className="font-bold text-2xl text-secondary">25+</p>
                            <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Years of Exp.</p>
                        </div>
                        <div>
                            <p className="font-bold text-2xl text-secondary">150+</p>
                            <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Dish Varieties</p>
                        </div>
                        <div className="hidden sm:block">
                            <p className="font-bold text-2xl text-secondary flex items-center gap-1">4.9 <Star size={14} className="fill-secondary" /></p>
                            <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Customer Rating</p>
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, y: [0, 5, 0] }}
                        transition={{ delay: 1, duration: 2, repeat: Infinity }}
                        className="hidden lg:flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-secondary cursor-pointer"
                        onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                    >
                        Scroll Down
                        <div className="w-8 h-8 rounded-full border border-secondary/20 flex items-center justify-center">
                            <ArrowDown size={14} />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
