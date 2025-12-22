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
            {/* Background Composition */}
            <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10 w-full">

                {/* Left: Content & Image (Span 6) */}
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="hidden lg:block lg:col-span-6 relative"
                >
                    <div className="relative z-10 mb-12">
                        <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Table Service</span>
                        <h2 className="text-6xl font-header font-bold text-secondary leading-[1.1]">
                            Book Your <br />
                            <span className="text-primary italic font-serif">Moment</span>
                        </h2>
                        <p className="text-gray-500 mt-6 max-w-md text-lg leading-relaxed">
                            Whether it's a romantic dinner or a family gathering, we ensure every detail is perfect. Experience the art of hospitality.
                        </p>
                    </div>

                    {/* Image Composition */}
                    <div className="relative pl-8 pb-8">
                        <div className="absolute top-0 left-0 w-full h-full border-l-2 border-b-2 border-primary/20 -z-10 rounded-bl-[80px]"></div>
                        <img
                            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                            alt="Dining Interior"
                            className="w-full max-w-lg rounded-bl-[80px] rounded-tr-[20px] shadow-2xl object-cover h-[450px]"
                        />
                    </div>
                </motion.div>

                {/* Right: Form (Span 6) */}
                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="lg:col-span-6 w-full"
                >
                    <div className="bg-white/80 backdrop-blur-xl border border-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">

                        <div className="mb-8">
                            <h3 className="text-3xl font-header font-bold text-secondary">Secure Your Table</h3>
                            <p className="text-gray-400 text-sm mt-2">Reservations are recommended 2 days in advance.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-secondary text-xs font-bold uppercase tracking-wider">Name</label>
                                    <input
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        type="text"
                                        required
                                        placeholder="John Doe"
                                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-secondary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium placeholder-gray-300"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-secondary text-xs font-bold uppercase tracking-wider">Phone</label>
                                    <input
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        type="tel"
                                        required
                                        placeholder="+1 234..."
                                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-secondary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium placeholder-gray-300"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-secondary text-xs font-bold uppercase tracking-wider">Email</label>
                                <input
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    type="email"
                                    required
                                    placeholder="john@example.com"
                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-secondary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium placeholder-gray-300"
                                />
                            </div>

                            <div className="grid grid-cols-3 gap-4">
                                <div className="space-y-2 col-span-1">
                                    <label className="text-secondary text-xs font-bold uppercase tracking-wider">Guests</label>
                                    <select
                                        name="guests"
                                        value={formData.guests}
                                        onChange={handleChange}
                                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-secondary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium h-[50px]"
                                    >
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5+</option>
                                    </select>
                                </div>
                                <div className="space-y-2 col-span-2">
                                    <label className="text-secondary text-xs font-bold uppercase tracking-wider">When?</label>
                                    <div className="flex gap-2">
                                        <input
                                            name="date"
                                            value={formData.date}
                                            onChange={handleChange}
                                            type="date"
                                            required
                                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-secondary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium text-sm"
                                        />
                                        <input
                                            name="time"
                                            value={formData.time}
                                            onChange={handleChange}
                                            type="time"
                                            required
                                            className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-secondary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-medium text-sm"
                                        />
                                    </div>
                                </div>
                            </div>

                            <button disabled={loading} className="w-full bg-secondary text-white font-header font-bold uppercase tracking-widest py-4 rounded-xl hover:bg-primary hover:text-white transition-all mt-4 shadow-xl hover:shadow-2xl hover:-translate-y-1 group flex items-center justify-center gap-3 disabled:opacity-50">
                                {loading ? 'Processing...' : 'Confirm Table'}
                                {!loading && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
                            </button>

                            {status.message && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex items-center gap-3 text-xs font-bold uppercase tracking-wider mt-4 ${status.type === 'success' ? 'text-green-700 bg-green-50 p-4 rounded-xl border border-green-100' : 'text-red-700 bg-red-50 p-4 rounded-xl border border-red-100'}`}
                                >
                                    {status.type === 'success' ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
                                    {status.message}
                                </motion.div>
                            )}
                        </form>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default ReservationSection;
