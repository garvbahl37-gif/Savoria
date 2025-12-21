import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Award, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <section id="about" className="py-24 bg-cream relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-6xl font-header font-light text-secondary mb-6"
                        >
                            ABOUT US
                        </motion.h2>
                        <p className="text-gray-600 font-bold mb-4 tracking-wide uppercase text-sm">
                            The only thing we're serious about is food.
                        </p>
                        <p className="text-gray-500 leading-relaxed mb-8">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident possimus optio adipisci dolores impedit illum iusto perferendis, laudantium quod accusamus consequuntur consectetur, tempore nulla error iure reiciendis dolorem assumenda. Necessitatibus fugit asperiores totam rem esse exercitationem iusto ipsum qui dolore ex, accusantium repellat mollitia repellendus.
                        </p>
                        <Link to="/menu" className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-secondary font-header font-bold uppercase hover:bg-secondary hover:text-white transition-all group">
                            Explore Menu
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                    </div>

                    {/* Image with Organic Blob Shape */}
                    <div className="relative flex justify-center">
                        <div className="absolute inset-0 bg-gradient-to-tr from-orange-100 to-transparent rounded-[40%_60%_70%_30%/40%_50%_60%_50%] blur-3xl opacity-60"></div>
                        <motion.img
                            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 0.8 }}
                            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                            alt="Salad Bowl"
                            className="w-full max-w-md rounded-[30%_70%_70%_30%/30%_30%_70%_70%] shadow-2xl object-cover aspect-square relative z-10 border-4 border-white"
                        />
                    </div>
                </div>

                {/* Features Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24 text-center">
                    {[
                        { icon: Utensils, title: "QUALITY FOOD", color: "bg-orange-500", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis repellendus officia qui repellat." },
                        { icon: Award, title: "SUPER TASTE", color: "bg-purple-600", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptates quaerat pariatur." },
                        { icon: Truck, title: "FAST DELIVERY", color: "bg-green-500", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis repellendus officia qui repellat." }
                    ].map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.2 }}
                            className="flex flex-col items-center"
                        >
                            <div className={`w-20 h-20 rounded-full ${feature.color} flex items-center justify-center text-white mb-6 shadow-lg`}>
                                <feature.icon size={32} />
                            </div>
                            <h3 className="text-2xl font-header font-bold text-secondary mb-3">{feature.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{feature.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
