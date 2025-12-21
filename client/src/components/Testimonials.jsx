import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
    {
        id: 1,
        name: "Eleanor P.",
        role: "Food Critic",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5,
        text: "An absolute triumph of culinary art. The Truffle Risotto transported me back to Florence. The attention to detail in every dish is simply unmatched in this city."
    },
    {
        id: 2,
        name: "Marcus Chen",
        role: "Verified Guest",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5,
        text: "The atmosphere is breathtaking, but the service steals the show. I celebrated my anniversary here and the staff made us feel like royalty. Highly recommended."
    },
    {
        id: 3,
        name: "Sofia Rodriguez",
        role: "Sommelier",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5,
        text: "Their wine pairing suggestions were impeccable. The sommelier guided us perfectly through the extensive list. A truly world-class dining experience."
    },
    {
        id: 4,
        name: "James & Sarah",
        role: "Anniversary Couple",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5,
        text: "We chose GourmetHash for our 10th anniversary and it was magical. The private booth, the personalized dessert, and the ambiance created an unforgettable evening."
    },
    {
        id: 5,
        name: "David K.",
        role: "Business Traveler",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5,
        text: "The perfect spot for a business dinner. Impressive menu, discreet service, and a quiet enough atmosphere to talk shop while enjoying a phenomenal steak."
    },
    {
        id: 6,
        name: "Emily Zhang",
        role: "Local Foodie",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
        rating: 5,
        text: "I've tried every fine dining spot in the city, and this is consistently the winner. The seasonal menu keeps things fresh and exciting every time I visit."
    }
];

const Testimonials = () => {
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((curr) => (curr + 1) % reviews.length);
    const prev = () => setCurrent((curr) => (curr === 0 ? reviews.length - 1 : curr - 1));

    useEffect(() => {
        const timer = setInterval(next, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-24 bg-zinc-900 text-white relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm">Guest Book</span>
                    <h2 className="text-4xl font-serif font-bold mt-2">Words of Appreciation</h2>
                </div>

                <div className="relative">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col items-center text-center max-w-4xl mx-auto"
                        >
                            <Quote className="w-16 h-16 text-primary/30 mb-8" />

                            <p className="text-2xl md:text-4xl font-serif font-light leading-relaxed mb-10 text-gray-200 italic">
                                "{reviews[current].text}"
                            </p>

                            <div className="flex items-center gap-1 mb-6">
                                {[...Array(reviews[current].rating)].map((_, i) => (
                                    <Star key={i} className="w-6 h-6 text-amber-400 fill-current" />
                                ))}
                            </div>

                            <div className="flex items-center gap-4">
                                <img
                                    src={reviews[current].image}
                                    alt={reviews[current].name}
                                    className="w-16 h-16 rounded-full border-2 border-primary object-cover"
                                />
                                <div className="text-left">
                                    <h4 className="font-bold text-lg">{reviews[current].name}</h4>
                                    <span className="text-primary text-sm uppercase tracking-wider">{reviews[current].role}</span>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Controls */}
                    <button onClick={prev} className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white">
                        <ChevronLeft className="w-8 h-8" />
                    </button>
                    <button onClick={next} className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white">
                        <ChevronRight className="w-8 h-8" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
