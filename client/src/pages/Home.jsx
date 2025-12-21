import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero';
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

            <About />

            {/* Popular Dishes Section (Replacing old Features Section) */}
            <section id="services" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-header font-light text-secondary mb-4 uppercase">Popular Dishes</h2>
                        <p className="text-gray-400 text-sm max-w-2xl mx-auto">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, iusto dolorem! Voluptatibus ipsum nam mollitia architecto. Soluta pariatur eius et recusandae veritatis. Quasi, et molestias!
                        </p>
                    </div>

                    {loading ? (
                        <div className="flex justify-center p-12">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary"></div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                            {featuredDishes.length > 0 ? featuredDishes.map((dish) => (
                                <div key={dish._id} className="group relative rounded-2xl overflow-hidden aspect-square shadow-lg cursor-pointer">
                                    <img
                                        src={dish.image}
                                        alt={dish.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                        <span className="bg-black/50 text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full w-fit mb-2 backdrop-blur-sm self-start">
                                            {dish.category}
                                        </span>
                                        <h3 className="text-white font-header font-bold text-xl uppercase leading-tight">{dish.name}</h3>
                                        <p className="text-gray-300 text-xs mt-1 line-clamp-1">{dish.description}</p>
                                    </div>
                                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
                                        {dish.category || 'Dinner'}
                                    </div>
                                </div>
                            )) : (
                                <div className="col-span-4 text-center text-gray-500">
                                    Our chefs are preparing special dishes...
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </section>

            <Team />

            <ReservationSection />

            {/* Retaining Footer at the bottom of App.jsx structure usually, but here checking if it's inside layout */}
        </div >
    );
};

export default Home;
