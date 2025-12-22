import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../config';
import { BadgeCheck, ArrowLeft, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Menu = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('All');
    const [categories, setCategories] = useState(['All']);

    useEffect(() => {
        fetchMenuItems();
    }, []);

    const fetchMenuItems = async () => {
        try {
            await new Promise(resolve => setTimeout(resolve, 800)); // Min load time for smooth UX
            const response = await axios.get(`${API_URL}/api/menu`);
            setMenuItems(response.data);

            // Extract unique categories
            const uniqueCats = ['All', ...new Set(response.data.map(item => item.category))];
            setCategories(uniqueCats);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching menu:', error);
            setLoading(false);
        }
    };

    const filteredItems = filter === 'All'
        ? menuItems
        : menuItems.filter(item => item.category === filter);

    return (
        <div className="bg-gray-50 min-h-screen pt-24">


            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm">Culinary Excellence</span>
                    <h2 className="text-5xl font-serif font-bold text-secondary mt-2 mb-6">Seasonal Creations</h2>
                    <p className="max-w-2xl mx-auto text-gray-600">Explore our diverse menu featuring locally sourced ingredients and innovative flavor combinations.</p>
                </div>

                {/* Categories */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-8 py-3 rounded-full text-sm font-bold tracking-wide transition-all transform hover:scale-105 ${filter === cat
                                ? 'bg-primary text-white shadow-lg shadow-orange-500/30'
                                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Items Grid */}
                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-12">
                        {[1, 2, 3, 4].map((n) => (
                            <div key={n} className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex gap-6 animate-pulse">
                                <div className="w-32 h-32 bg-gray-200 rounded-2xl flex-shrink-0"></div>
                                <div className="flex-1 space-y-4 py-2">
                                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                                    <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-10 gap-y-12">
                        {filteredItems.map((item) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                key={item._id}
                                className="group bg-white rounded-3xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-orange-100 flex flex-col sm:flex-row gap-6"
                            >
                                <div className="w-full sm:w-40 h-40 flex-shrink-0 overflow-hidden rounded-2xl relative">
                                    <img
                                        src={item.image || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c"}
                                        alt={item.name}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>

                                <div className="flex-1 flex flex-col justify-center">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors">{item.name}</h3>
                                        <span className="text-lg font-black text-primary">${item.price}</span>
                                    </div>
                                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">{item.description}</p>
                                    <div className="flex items-center gap-2">
                                        <BadgeCheck className="h-4 w-4 text-green-500" />
                                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Chef's Choice</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}

                {!loading && filteredItems.length === 0 && (
                    <div className="text-center py-20 text-gray-400">
                        <p>No items found in this category.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Menu;
