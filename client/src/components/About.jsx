import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Award, Truck, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <section id="about" className="py-32 bg-secondary relative overflow-hidden text-center">

            <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <span className="text-primary font-sans font-bold tracking-[0.2em] uppercase text-xs block mb-6">Our Story</span>
                    <h2 className="text-5xl md:text-6xl font-serif text-white mb-6">
                        A Passion for Excellence
                    </h2>
                    <div className="w-16 h-0.5 bg-primary mx-auto mb-10"></div>

                    <p className="text-gray-400 text-lg leading-relaxed mb-8 font-light">
                        Founded in the heart of the city, <span className="text-primary">Savoria</span> brings the soul of Italian gastronomy to discerning palates. Our chef, trained in the kitchens of Milan and Rome, crafts each dish with reverence for tradition and a modern sensibility.
                    </p>
                    <p className="text-gray-400 text-lg leading-relaxed font-light">
                        Every ingredient is sourced with care—from the finest Parmigiano-Reggiano aged 36 months to hand-picked truffles from Alba. We believe in the beauty of simplicity, allowing exceptional ingredients to speak for themselves.
                    </p>
                </motion.div>

                {/* Separator Line */}
                <div className="w-full h-px bg-white/10 mb-20"></div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p className="text-5xl font-serif text-primary mb-2">15+</p>
                        <p className="text-gray-500 text-xs tracking-[0.2em] uppercase">Years of Excellence</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <p className="text-5xl font-serif text-primary mb-2">100%</p>
                        <p className="text-gray-500 text-xs tracking-[0.2em] uppercase">Italian Ingredients</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <p className="text-5xl font-serif text-primary mb-2">1</p>
                        <p className="text-gray-500 text-xs tracking-[0.2em] uppercase">Michelin Star</p>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default About;
