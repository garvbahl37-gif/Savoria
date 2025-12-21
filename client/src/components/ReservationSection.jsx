import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import axios from 'axios';

const ReservationSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        date: '',
        time: '',
        guests: '2'
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        try {
            await axios.post('http://localhost:5000/api/reservations', formData);
            setStatus({ type: 'success', message: 'Reservation confirmed! We look forward to seeing you.' });
            setFormData({ name: '', phone: '', email: '', date: '', time: '', guests: '2' });
        } catch (error) {
            console.error(error);
            setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="reservation" className="py-24 bg-cream relative overflow-hidden flex items-center justify-center min-h-[80vh]">

            {/* Background Texture/Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
            <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>

            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center relative z-10 w-full">

                {/* Left: Content & Image */}
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="hidden md:block relative"
                >
                    <div className="relative z-10">
                        <h2 className="text-6xl font-header font-bold text-secondary mb-6 leading-tight">
                            Book Your <br /> <span className="text-primary">Experience</span>
                        </h2>
                        <p className="text-gray-600 mb-8 max-w-sm leading-relaxed">
                            Reserve a spot for an unforgettable evening of culinary excellence. We recommend booking at least 2 days in advance.
                        </p>
                    </div>

                    {/* Decorative Image Composition */}
                    <div className="relative mt-8">
                        <img
                            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                            alt="Interior"
                            className="w-full max-w-md rounded-tr-[100px] rounded-bl-[100px] shadow-2xl object-cover h-[400px] relative z-10"
                        />
                        <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-primary rounded-tr-[100px] rounded-bl-[100px] z-0"></div>
                    </div>
                </motion.div>

                {/* Right: Dark Glass Form */}
                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="bg-secondary/95 backdrop-blur-xl p-10 md:p-12 rounded-3xl shadow-2xl max-w-md mx-auto w-full relative overflow-hidden"
                >
                    {/* Decorative Circle inside form */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/30 rounded-full blur-2xl"></div>

                    <div className="text-left mb-8 relative z-10">
                        <span className="text-accent font-header text-sm tracking-widest uppercase mb-2 block">Reservation</span>
                        <h3 className="text-3xl font-header font-medium text-white">Secure Your Table</h3>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="group">
                                <label className="text-white/60 text-[10px] uppercase tracking-wider mb-1 block">Name</label>
                                <input
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    type="text"
                                    required
                                    placeholder="John Doe"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-primary focus:bg-white/10 transition-all font-body text-sm"
                                />
                            </div>
                            <div className="group">
                                <label className="text-white/60 text-[10px] uppercase tracking-wider mb-1 block">Phone</label>
                                <input
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    type="tel"
                                    required
                                    placeholder="+1 234..."
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-primary focus:bg-white/10 transition-all font-body text-sm"
                                />
                            </div>
                        </div>

                        <div className="group">
                            <label className="text-white/60 text-[10px] uppercase tracking-wider mb-1 block">Email</label>
                            <input
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                type="email"
                                required
                                placeholder="john@example.com"
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-primary focus:bg-white/10 transition-all font-body text-sm"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="group">
                                <label className="text-white/60 text-[10px] uppercase tracking-wider mb-1 block">Date</label>
                                <input
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    type="date"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-all font-body text-sm invert-calendar-icon"
                                />
                            </div>
                            <div className="group">
                                <label className="text-white/60 text-[10px] uppercase tracking-wider mb-1 block">Time</label>
                                <input
                                    name="time"
                                    value={formData.time}
                                    onChange={handleChange}
                                    type="time"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-all font-body text-sm invert-time-icon"
                                />
                            </div>
                        </div>

                        <div className="group">
                            <label className="text-white/60 text-[10px] uppercase tracking-wider mb-1 block">Guests</label>
                            <select
                                name="guests"
                                value={formData.guests}
                                onChange={handleChange}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:bg-white/10 transition-all font-body text-sm"
                            >
                                <option className="text-secondary" value="2">2 People</option>
                                <option className="text-secondary" value="3">3 People</option>
                                <option className="text-secondary" value="4">4 People</option>
                                <option className="text-secondary" value="5">5+ People</option>
                            </select>
                        </div>

                        <button disabled={loading} className="w-full bg-primary text-white font-header font-bold uppercase tracking-wider py-4 rounded-lg hover:bg-white hover:text-secondary transition-all mt-4 shadow-lg group flex items-center justify-center gap-2 disabled:opacity-50">
                            {loading ? 'Processing...' : 'Confirm Booking'}
                            {!loading && <ArrowRight size={16} />}
                        </button>

                        {status.message && (
                            <div className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider mt-4 ${status.type === 'success' ? 'text-white bg-green-500/20 p-2 rounded' : 'text-white bg-red-500/20 p-2 rounded'}`}>
                                {status.type === 'success' ? <CheckCircle size={14} className="text-green-400" /> : <AlertCircle size={14} className="text-red-400" />}
                                {status.message}
                            </div>
                        )}
                    </form>
                </motion.div>

            </div>
        </section>
    );
};

export default ReservationSection;
