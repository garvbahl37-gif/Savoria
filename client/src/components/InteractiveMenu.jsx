import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const TiltCard = ({ item }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e) => {
        const rect = e.target.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className="relative w-80 h-[450px] flex-shrink-0 rounded-3xl bg-white shadow-xl cursor-none overflow-hidden group border border-secondary/5"
        >
            {/* Image Layer - Pops out in 3D */}
            <motion.div
                style={{ transform: "translateZ(50px)" }}
                className="absolute top-0 left-0 w-full h-[60%]"
            >
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-t-3xl group-hover:scale-110 transition-transform duration-500"
                />
            </motion.div>

            {/* Content Layer */}
            <div className="absolute bottom-0 left-0 w-full h-[40%] bg-white p-6 flex flex-col justify-between z-10">
                <div style={{ transform: "translateZ(30px)" }}>
                    <span className="text-secondary text-xs font-header font-bold uppercase tracking-widest">{item.category}</span>
                    <h3 className="text-2xl font-header font-bold text-secondary mt-1">{item.title}</h3>
                </div>

                <div className="flex justify-between items-center mt-4">
                    <span className="text-primary font-bold text-xl">${item.price}</span>
                    <button className="w-10 h-10 rounded-full border border-secondary flex items-center justify-center hover:bg-secondary hover:text-white transition-colors">
                        ➜
                    </button>
                </div>
            </div>

            {/* Floating Ingredients (Mock explanation) */}
            <motion.div
                style={{ transform: "translateZ(80px)" }}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-secondary opacity-0 group-hover:opacity-100 transition-opacity"
            >
                Chef's Choice
            </motion.div>
        </motion.div>
    );
};

const InteractiveMenu = () => {
    const dishes = [
        { id: 1, title: 'Truffle Pasta', price: '28', category: 'Main', image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80' },
        { id: 2, title: 'Wagyu Burger', price: '32', category: 'Signature', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80' },
        { id: 3, title: 'Berry Tart', price: '16', category: 'Dessert', image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80' },
        { id: 4, title: 'Lobster Bisque', price: '24', category: 'Starter', image: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80' },
        { id: 5, title: 'Mojito Royale', price: '14', category: 'Drink', image: 'https://images.unsplash.com/photo-1514362545857-3bc16549766b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80' },
    ];

    return (
        <section className="py-32 bg-secondary overflow-hidden relative">
            <style jsx>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>

            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none opacity-40"></div>

            {/* Background Title */}
            <div className="absolute -top-20 left-0 w-full text-center overflow-hidden pointer-events-none opacity-[0.03]">
                <h2 className="text-[20rem] font-header font-bold text-white leading-none whitespace-nowrap tracking-tighter">FLAVOR</h2>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
                    <div>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-primary font-header font-bold text-sm tracking-[0.3em] uppercase block mb-3"
                        >
                            Exclusive
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-6xl font-header font-medium text-white"
                        >
                            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Chef's Table</span>
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="hidden md:flex items-center gap-4 text-white/40 text-sm max-w-xs text-right"
                    >
                        <p>Swipe to discover our most prized creations, crafted with passion and precision.</p>
                        <div className="w-12 h-1 bg-white/10 rounded-full"></div>
                    </motion.div>
                </div>

                {/* Horizontal Scroll Container */}
                <div className="flex gap-8 overflow-x-auto pb-12 pt-8 px-4 snap-x hide-scrollbar mask-gradient">
                    {dishes.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                        >
                            <TiltCard item={item} />
                        </motion.div>
                    ))}
                    {/* Spacer for right padding */}
                    <div className="w-4 shrink-0"></div>
                </div>
            </div>
        </section>
    );
};

export default InteractiveMenu;
