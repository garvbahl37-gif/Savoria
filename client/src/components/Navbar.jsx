import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, UtensilsCrossed } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Text color logic
    const isDarkText = scrolled || !isHome;

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About Us', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Team', href: '#team' },
        { name: 'Reservation', href: '#reservation' }
    ];

    const [activeSection, setActiveSection] = useState('');

    const scrollToSection = (id) => {
        if (!isHome) {
            // If not home, we need to navigate to home first 
            // We can just use standard anchor behavior with React Router HashLink or simple window.location
            // But for now, let's just go to root if it is home.
            window.location.href = '/' + id;
        } else {
            const element = document.getElementById(id.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
        setIsOpen(false);
    };

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsAuthenticated(!!token);
    }, []);

    return (
        <>
            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[60]"
                style={{ scaleX }}
            />

            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-white/90 backdrop-blur-xl shadow-sm py-3'
                    : 'bg-transparent py-5'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-12 items-center">

                    {/* Left: Logo (Span 3) */}
                    <div className="col-span-6 md:col-span-3 flex items-center justify-start">
                        <Link to="/" className="flex items-center space-x-2 group">
                            <span className={`font-header font-bold text-3xl tracking-wide uppercase transition-colors ${isDarkText ? 'text-secondary' : 'text-secondary'}`}>
                                SAVORIA
                            </span>
                        </Link>
                    </div>

                    {/* Center: Navigation (Span 8) - Hidden on mobile */}
                    <div className="hidden md:flex col-span-9 items-center justify-end space-x-8">
                        {navLinks.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => scrollToSection(item.href)}
                                className="text-sm font-header font-bold tracking-wider uppercase text-gray-500 hover:text-black transition-colors"
                            >
                                {item.name}
                            </button>
                        ))}
                        <Link
                            to="/menu"
                            className="ml-4 px-6 py-2 border-2 border-secondary rounded-full font-header font-bold text-sm uppercase hover:bg-secondary hover:text-white transition-all"
                        >
                            Our Menu
                        </Link>

                        {isAuthenticated ? (
                            <Link
                                to="/admin/dashboard"
                                className="ml-2 text-sm font-header font-bold tracking-wider uppercase text-primary hover:text-secondary transition-colors"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <Link
                                to="/admin/login"
                                className="ml-2 text-sm font-header font-bold tracking-wider uppercase text-gray-500 hover:text-primary transition-colors"
                            >
                                Sign In
                            </Link>
                        )}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="col-span-6 md:hidden flex justify-end">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-secondary"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
                >
                    <div className="flex flex-col space-y-6 items-center">
                        {navLinks.map((item) => (
                            <button
                                key={item.name}
                                onClick={() => scrollToSection(item.href)}
                                className="text-2xl font-header font-bold text-secondary uppercase"
                            >
                                {item.name}
                            </button>
                        ))}
                        <Link
                            to="/menu"
                            className="mt-4 px-8 py-3 border-2 border-secondary rounded-full font-header font-bold text-xl uppercase hover:bg-secondary hover:text-white transition-all"
                            onClick={() => setIsOpen(false)}
                        >
                            Our Menu
                        </Link>
                        {isAuthenticated ? (
                            <Link
                                to="/admin/dashboard"
                                className="text-xl font-header font-bold text-primary uppercase"
                                onClick={() => setIsOpen(false)}
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <Link
                                to="/admin/login"
                                className="text-xl font-header font-bold text-gray-500 uppercase"
                                onClick={() => setIsOpen(false)}
                            >
                                Sign In
                            </Link>
                        )}
                    </div>
                </motion.div>
            )}
        </>
    );
};

export default Navbar;
