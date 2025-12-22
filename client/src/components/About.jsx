import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Award, Truck, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <section id="about" className="py-24 bg-cream relative overflow-hidden">
            {/* Background Texture - Organic Pattern */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

                    {/* Left: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative mb-6">
                            <h2 className="text-7xl md:text-8xl font-header font-bold text-gray-200 absolute -top-12 -left-6 -z-10 select-none opacity-50">
                                HISTORY
                            </h2>
                            <span className="text-primary font-bold tracking-widest uppercase text-sm block mb-2">Our Story</span>
                            <h2 className="text-5xl md:text-6xl font-header font-light text-secondary leading-tight">
                                Crafted with <span className="text-primary italic font-serif">Love</span>
                            </h2>
                        </div>

                        <p className="text-xl text-secondary/80 font-md mb-6 leading-relaxed">
                            "The only thing we're serious about is food."
                        </p>

                        <p className="text-gray-500 leading-relaxed mb-8 max-w-md">
                            From humble beginnings in a small kitchen to a culinary destination, Savoria has always been about one thing: **authentic flavors**. We believe in sustainable sourcing, hand-picked ingredients, and recipes passed down through generations.
                        </p>

                        <div className="flex items-center gap-6">
                            <Link to="/menu" className="relative px-8 py-3 bg-secondary text-white font-header font-bold uppercase tracking-wider rounded-lg overflow-hidden group">
                                <span className="relative z-10 group-hover:text-secondary transition-colors">Explore Menu</span>
                                <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                            </Link>

                            <div className="flex items-center gap-2 text-secondary font-bold font-header">
                                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                    <Heart size={18} fill="currentColor" />
                                </div>
                                <span>Est. 1998</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Composition Image */}
                    <div className="relative flex justify-center">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                alt="Signature Bowl"
                                className="w-full max-w-md rounded-[40px] shadow-2xl relative z-10"
                            />
                            {/* Decorative Frame */}
                            <div className="absolute inset-0 border-2 border-primary rounded-[40px] translate-x-4 translate-y-4 -z-10"></div>

                            {/* Floating Badge */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                className="absolute -bottom-8 -left-8 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 z-20"
                            >
                                <div className="bg-green-100 p-2 rounded-full text-green-600">
                                    <Utensils size={20} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 uppercase font-bold">Chef's Choice</p>
                                    <p className="text-secondary font-header font-bold text-lg">Top Rated</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Features Row - Glassmorphism Cards */}
                {/* Features Row Removed as per request */}
            </div>
        </section>
    );
};

export default About;
