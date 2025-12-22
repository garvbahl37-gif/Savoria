import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { Menu, X, UtensilsCrossed, Sun, Moon } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';
    const { theme, toggleTheme } = useTheme();

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Menu', href: '/menu' },
        { name: 'Reservations', href: '#reservation' },
        { name: 'Contact', href: '#contact' }
    ];

    const scrollToSection = (id) => {
        if (id.startsWith('/')) {
            // It's a route
            return;
        }
        if (!isHome) {
            window.location.href = '/' + id;
        } else {
            const element = document.getElementById(id.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
        setIsOpen(false);
    };

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 right-0 h-0.5 bg-primary origin-left z-[60]"
                style={{ scaleX }}
            />

            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${scrolled
                    ? 'bg-secondary/95 backdrop-blur-md py-4 shadow-lg border-b border-white/5'
                    : 'bg-transparent py-6'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

                    {/* Logo */}
                    <Link to="/" className="group">
                        <span className="font-serif text-2xl md:text-3xl text-primary tracking-wide group-hover:text-white transition-colors">
                            Savoria
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-12">
                        {navLinks.map((item) => (
                            item.href.startsWith('/') ?
                                <Link key={item.name} to={item.href} className="text-xs font-sans font-bold tracking-[0.2em] text-accent/80 hover:text-primary uppercase transition-colors">
                                    {item.name}
                                </Link>
                                :
                                <button
                                    key={item.name}
                                    onClick={() => scrollToSection(item.href)}
                                    className="text-xs font-sans font-bold tracking-[0.2em] text-accent/80 hover:text-primary uppercase transition-colors"
                                >
                                    {item.name}
                                </button>
                        ))}



                        <Link
                            to="/#reservation"
                            onClick={() => scrollToSection('#reservation')}
                            className="px-6 py-2 border border-primary text-primary text-xs font-bold tracking-widest uppercase hover:bg-primary hover:text-secondary transition-all"
                        >
                            Reserve
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-primary hover:text-accent transition-colors"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="fixed inset-0 top-[70px] z-40 bg-secondary/95 backdrop-blur-xl border-t border-white/10"
                    >
                        <div className="flex flex-col items-center justify-center h-full space-y-8">
                            {navLinks.map((item) => (
                                item.href.startsWith('/') ?
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-2xl font-serif text-accent hover:text-primary transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                    :
                                    <button
                                        key={item.name}
                                        onClick={() => scrollToSection(item.href)}
                                        className="text-2xl font-serif text-accent hover:text-primary transition-colors"
                                    >
                                        {item.name}
                                    </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </nav>
        </>
    );
};

export default Navbar;
