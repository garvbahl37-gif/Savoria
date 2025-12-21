import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-[110vh] bg-cream pt-32 overflow-hidden flex flex-col justify-center">
            {/* Background Texture - organic shape */}
            <div className="absolute top-0 right-0 w-[60vw] h-[80vh] bg-[#f9dec9] opacity-30 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/4 -z-0"></div>
            <div className="absolute bottom-0 left-0 w-[40vw] h-[60vh] bg-[#d8e2dc] opacity-30 blur-[80px] rounded-full -translate-x-1/3 translate-y-1/4 -z-0"></div>

            <div className="max-w-7xl mx-auto px-6 h-full relative z-10 w-full">

                <div className="grid grid-cols-12 gap-x-8 gap-y-16 items-center">

                    {/* Top Row: "Delicious" + Overlapped Pancake */}
                    <div className="col-span-12 lg:col-span-7 relative">
                        <motion.h1
                            initial={{ x: -80, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: 'easeOut' }}
                            className="text-[5rem] sm:text-[7rem] md:text-[9rem] font-header font-bold leading-[0.85] text-secondary tracking-tighter relative z-10"
                        >
                            DELI<br />CIOUS
                        </motion.h1>

                        {/* Image overlapped under text */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 1 }}
                            className="absolute top-1/2 right-0 lg:-right-20 transform -translate-y-1/2 w-64 md:w-80 aspect-[3/4] z-0"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                                alt="Pancakes"
                                className="w-full h-full object-cover rounded-full lg:rounded-t-full lg:rounded-b-none border-4 border-white shadow-2xl skew-x-2 grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                            />
                        </motion.div>
                    </div>

                    {/* Top Right: Intro Text */}
                    <div className="col-span-12 lg:col-span-5 flex flex-col justify-center lg:pl-12 pt-10 lg:pt-0">
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            <div className="bg-primary text-white w-12 h-12 flex items-center justify-center rounded-full mb-6 font-header font-bold text-xl">
                                #1
                            </div>
                            <p className="font-header text-xl md:text-2xl text-secondary leading-normal mb-8 uppercase tracking-wide">
                                Where every flavor tells a story of <span className="text-primary italic normal-case">passion</span> and tradition.
                            </p>
                            <p className="font-body text-gray-500 text-sm leading-relaxed max-w-xs">
                                Experience a culinary journey that honors the roots of Italian cooking while embracing modern creativity.
                            </p>
                        </motion.div>
                    </div>

                    {/* Bottom Row: "Food" Centerpiece + "Dishes" */}
                    <div className="col-span-12 flex flex-col md:flex-row items-center justify-between mt-12 md:mt-0 relative">

                        {/* Circle Badge - Absolute Center */}
                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
                            className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-32 h-32 bg-accent rounded-full items-center justify-center text-secondary font-header font-bold text-lg text-center leading-tight shadow-xl border-4 border-white"
                        >
                            TASTE<br />THE<br />BEST
                        </motion.div>

                        <motion.h2
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-[4rem] md:text-[8rem] font-header font-bold text-transparent text-stroke-secondary opacity-20 md:opacity-100"
                        >
                            FOOD
                        </motion.h2>

                        {/* Right Image Overlap */}
                        <div className="relative">
                            <motion.h2
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                                className="text-[5rem] md:text-[9rem] font-header font-bold text-secondary leading-none z-10 relative"
                            >
                                DISHES
                            </motion.h2>

                            <motion.div
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.7, duration: 0.8 }}
                                className="absolute -bottom-12 right-1/2 translate-x-1/2 w-48 h-48 md:w-64 md:h-64 z-20"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                                    alt="Burger"
                                    className="w-full h-full object-cover rounded-full shadow-2xl border-4 border-white rotate-12 hover:rotate-0 transition-all duration-500"
                                />
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
