import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import InteractiveMenu from '../components/InteractiveMenu';
import { BadgeCheck, ChefHat, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import FoodGallery from '../components/FoodGallery';
import Testimonials from '../components/Testimonials'; // Kept if needed, or remove if not in design.
import Newsletter from '../components/Newsletter';
import About from '../components/About';
import Team from '../components/Team';
import ReservationSection from '../components/ReservationSection';
import axios from 'axios';

const Home = () => {
    const [featuredDishes, setFeaturedDishes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFeatures = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/menu');
                // Get 6 random dishes for grid
                const shuffled = res.data.sort(() => 0.5 - Math.random());
                setFeaturedDishes(shuffled.slice(0, 6)); // Foody design has 6 or 8
            } catch (err) {
                console.error("Error fetching featured dishes:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchFeatures();
    }, []);

    return (
        <div className="flex flex-col min-h-screen bg-cream">
            <Hero />

            {/* New Interactive Chef's Table Section */}
            <InteractiveMenu />

            <About />

            {/* Popular Dishes Section - Creative Showcase */}
            <section id="popular" className="py-32 bg-white relative overflow-hidden">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 left-0 w-full h-[500px] bg-cream/50 skew-y-3 transform origin-top-left -z-0"></div>
                <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[80px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-20">
                        <div>
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="text-primary font-bold tracking-[0.2em] uppercase text-sm block mb-3"
                            >
                                Fresh From Kitchen
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="text-6xl md:text-7xl font-header font-medium text-secondary"
                            >
                                Crowd <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-secondary/60 italic font-serif">Favorites</span>
                            </motion.h2>
                        </div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="hidden md:block max-w-xs text-right text-gray-500 text-sm leading-relaxed"
                        >
                            <p>Hand-picked daily specials that define our culinary identity. Tasted and loved by thousands.</p>
                        </motion.div>
                    </div>

                    {loading ? (
                        <div className="flex justify-center p-20">
                            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-secondary"></div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {featuredDishes.length > 0 ? featuredDishes.map((dish, idx) => (
                                <motion.div
                                    key={dish._id}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                                    viewport={{ once: true }}
                                    className="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
                                >
                                    <img
                                        src={dish.image}
                                        alt={dish.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
                                    />

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                                    {/* Floating Category Badge */}
                                    <div className="absolute top-6 left-6">
                                        <span className="bg-white/20 backdrop-blur-md text-white border border-white/20 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
                                            {dish.category}
                                        </span>
                                    </div>

                                    {/* Price Tag */}
                                    <div className="absolute top-6 right-6 bg-primary text-white w-14 h-14 rounded-full flex items-center justify-center font-bold shadow-lg transform group-hover:scale-110 transition-transform">
                                        ${dish.price || '24'}
                                    </div>

                                    {/* Content - Slide Up on Hover */}
                                    <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <h3 className="text-3xl font-header font-bold text-white mb-2 leading-tight">{dish.name}</h3>
                                        <p className="text-white/80 text-sm line-clamp-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                            {dish.description || 'A delightful culinary masterpiece featuring premium ingredients and authentic flavors.'}
                                        </p>

                                        <div className="flex items-center justify-between">
                                            <div className="flex text-amber-400 gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                                                {[1, 2, 3, 4, 5].map(i => <ChefHat key={i} size={16} fill="currentColor" />)}
                                            </div>
                                            <button className="w-12 h-12 rounded-full bg-white text-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-colors shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                                                ➜
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            )) : (
                                <div className="col-span-3 text-center py-20">
                                    <p className="text-gray-400">Our chefs are curating the menu...</p>
                                </div>
                            )}
                        </div>
                    )}

                    {/* View All Button */}
                    <div className="text-center mt-20">
                        <Link to="/menu" className="inline-flex items-center gap-3 px-10 py-4 bg-secondary text-white font-header font-bold uppercase tracking-widest rounded-full hover:bg-primary transition-colors shadow-xl hover:-translate-y-1">
                            View Full Menu
                        </Link>
                    </div>
                </div>
            </section>

            <Team />

            <ReservationSection />

            {/* Retaining Footer at the bottom of App.jsx structure usually, but here checking if it's inside layout */}
        </div >
    );
};

export default Home;
