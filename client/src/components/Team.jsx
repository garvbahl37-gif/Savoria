import React from 'react';
import { motion } from 'framer-motion';

const Team = () => {
    return (
        <section id="team" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32 text-center">
                    {[
                        { num: "14", label: "Restaurants" },
                        { num: "08", label: "Years Of Experience" },
                        { num: "20", label: "Chef In Kitchen" },
                        { num: "200", label: "Food Dishes" }
                    ].map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <h3 className="text-5xl font-header font-light text-secondary mb-2">{stat.num}</h3>
                            <p className="text-gray-500 font-body text-sm uppercase tracking-wide">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Team Section */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-6xl font-header font-light text-secondary mb-4"
                    >
                        OUR TEAM
                    </motion.h2>
                    <p className="text-gray-400 text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae fugit dicta, ipsum impedit quam laboriosam quas doloremque quia perferendis laborum.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
                    {[
                        { name: "JOHNATHAN TYLER", role: "Founder & Head Chef", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" },
                        { name: "WADE WARREN", role: "Sous Chef", img: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" },
                        { name: "JHON DOE", role: "Fast Food Chef", img: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" },
                        { name: "ALEX COAL", role: "Senior Chef", img: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" }
                    ].map((member, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.2 }}
                            className="flex flex-col items-center"
                        >
                            <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-gray-100 shadow-xl group">
                                <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                            </div>
                            <h3 className="text-xl font-header font-bold text-secondary uppercase tracking-warner">{member.name}</h3>
                            <p className="text-gray-500 text-xs uppercase tracking-wider mt-1">{member.role}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
