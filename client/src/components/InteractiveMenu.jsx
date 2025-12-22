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
            className="relative w-80 h-[450px] flex-shrink-0 rounded-3xl bg-white/5 backdrop-blur-md shadow-2xl cursor-none overflow-hidden group border border-white/10 hover:border-primary/30 transition-all duration-300"
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
            <div className="absolute bottom-0 left-0 w-full h-[45%] bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 flex flex-col justify-end z-10 space-y-2">
                <div style={{ transform: "translateZ(30px)" }}>
                    <span className="text-primary text-xs font-bold uppercase tracking-[0.25em]">{item.category}</span>
                    <h3 className="text-2xl font-serif text-white mt-1 leading-tight">{item.title}</h3>
                </div>

                <div className="flex justify-between items-center pt-2 border-t border-white/10">
                    <span className="text-white/90 font-serif text-xl italic">${item.price}</span>
                    <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:text-black hover:border-primary transition-all duration-300">
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
        { id: 1, title: 'Truffle Tagliatelle', price: '28', category: 'Primi', image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80' },
        { id: 2, title: 'Osso Buco alla Milanese', price: '38', category: 'Secondi', image: 'https://loremflickr.com/600/800/ossobuco?lock=10' },
        { id: 3, title: 'Tiramisù Classico', price: '14', category: 'Dolci', image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80' },
        { id: 4, title: 'Risotto ai Funghi', price: '26', category: 'Primi', image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80' },
        { id: 5, title: 'Negroni Sbagliato', price: '16', category: 'Aperitivo', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80' },
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

            {/* Ambient Background Glow - Enhanced */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none opacity-50"></div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

            {/* Background Title - More Subtle */}
            <div className="absolute -top-10 left-0 w-full text-center overflow-hidden pointer-events-none opacity-[0.04]">
                <h2 className="text-[18rem] md:text-[25rem] font-header font-bold text-transparent text-stroke-2 text-stroke-white leading-none whitespace-nowrap tracking-tighter">FLAVOR</h2>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6 border-b border-white/5 pb-8">
                    <div>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-primary font-header font-bold text-sm tracking-[0.4em] uppercase block mb-4"
                        >
                            Exquisite Selections
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-header font-medium text-white"
                        >
                            The <span className="text-primary italic font-serif">Chef's Table</span>
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="hidden md:flex flex-col gap-2 max-w-sm text-right"
                    >
                        <p className="text-white/60 text-sm leading-relaxed font-light">Swipe to discover our most prized creations, each crafted with passion and precision to ignite your senses.</p>
                        <div className="h-[2px] w-12 bg-primary self-end mt-2"></div>
                    </motion.div>
                </div>

                {/* Horizontal Scroll Container */}
                <div className="flex gap-8 overflow-x-auto pb-16 pt-8 px-4 snap-x hide-scrollbar mask-gradient">
                    {dishes.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            <TiltCard item={item} />
                        </motion.div>
                    ))}
                    {/* Spacer for right padding */}
                    <div className="w-8 shrink-0"></div>
                </div>
            </div>
        </section>
    );
};

export default InteractiveMenu;
