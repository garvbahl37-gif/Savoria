import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: "Ciao! I'm your Savoria Concierge. Looking for a recommendation? Try telling me what you're in the mood for (e.g., 'something spicy', 'sweet dessert', 'cocktails').", sender: 'bot' }
    ]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        // Add User Message
        const userMsg = { id: Date.now(), text: input, sender: 'user' };
        setMessages(prev => [...prev, userMsg]);
        setInput('');

        // Mock AI Response Logic
        setTimeout(() => {
            let botText = "I have the perfect suggestion for that.";
            const lowerInput = userMsg.text.toLowerCase();

            if (lowerInput.includes('spic')) {
                botText = "Ooh, spicy! I highly recommend our **Spaghetti Arrabbiata**. It has just the right amount of kick from fresh chilies.";
            } else if (lowerInput.includes('sweet') || lowerInput.includes('dessert')) {
                botText = "For a sweet tooth, nothing beats our **Berry Tart** or the classic **Tiramisu**. Both are divine!";
            } else if (lowerInput.includes('drink') || lowerInput.includes('wine') || lowerInput.includes('cocktail')) {
                botText = "Thirsty? The **Mojito Royale** is a crowd favorite, or ask about our vintage wine list.";
            } else if (lowerInput.includes('meat') || lowerInput.includes('beef') || lowerInput.includes('burger')) {
                botText = "You must try the **Wagyu Burger**. It's our signature dish for a reason—melt in your mouth goodness.";
            } else {
                botText = "That sounds lovely. Why not start with our **Lobster Bisque** while you decide? It's rich, creamy, and unforgettable.";
            }

            setMessages(prev => [...prev, { id: Date.now() + 1, text: botText, sender: 'bot' }]);
        }, 1000);
    };

    return (
        <>
            {/* Floating Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(true)}
                className={`fixed bottom-6 right-6 z-[90] w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all ${isOpen ? 'scale-0 opacity-0 pointer-events-none' : 'bg-primary text-white'}`}
            >
                <MessageSquare />
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        className="fixed bottom-6 right-6 z-[100] w-[90vw] md:w-96 bg-white dark:bg-secondary border border-gray-100 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[600px]"
                    >
                        {/* Header */}
                        <div className="bg-primary p-4 flex justify-between items-center text-white">
                            <div className="flex items-center gap-2">
                                <Sparkles size={18} />
                                <h3 className="font-header font-bold tracking-wide">Concierge</h3>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-full transition-colors">
                                <X size={18} />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-black/20 h-80">
                            {messages.map(msg => (
                                <div
                                    key={msg.id}
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${msg.sender === 'user'
                                                ? 'bg-secondary text-white rounded-br-none dark:bg-primary'
                                                : 'bg-white text-gray-700 rounded-bl-none shadow-sm dark:bg-white/10 dark:text-gray-200'
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSend} className="p-3 bg-white dark:bg-secondary border-t border-gray-100 dark:border-white/10 flex gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask for a recommendation..."
                                className="flex-1 px-4 py-2 bg-gray-100 dark:bg-white/5 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary dark:text-white dark:placeholder-white/30"
                            />
                            <button
                                type="submit"
                                className="w-9 h-9 bg-primary text-white rounded-full flex items-center justify-center hover:bg-opacity-90 transition-all shadow-md"
                            >
                                <Send size={16} />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Chatbot;
