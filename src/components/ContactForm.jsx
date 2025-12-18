import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';

const ContactForm = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        subject: '',
        message: ''
    });

    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Remplacez ces IDs par vos propres IDs EmailJS
        const SERVICE_ID = "service_tm4clgk";
        const TEMPLATE_ID = "template_bu3lggo";
        const PUBLIC_KEY = "HWo31ByS0ctsGNZvt";

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then(() => {
                setStatus({ 
                    type: 'success', 
                    message: 'Message envoyé avec succès ! Nous vous répondrons sous 24h.' 
                });
                setFormData({ user_name: '', user_email: '', subject: '', message: '' });
            })
            .catch((error) => {
                setStatus({ 
                    type: 'error', 
                    message: 'Erreur lors de l\'envoi. Veuillez réessayer.' 
                });
                console.error('EmailJS Error:', error);
            })
            .finally(() => {
                setIsSubmitting(false);
                setTimeout(() => setStatus({ type: '', message: '' }), 5000);
            });
    };

    return (
        <div className="bg-zinc-900/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-zinc-800 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-2 uppercase tracking-tight">Envoyez un message</h3>
            <p className="text-zinc-400 mb-8">Une question ? Un projet spécifique ? Écrivez-nous.</p>
            
            {status.message && (
                <div className={`mb-6 p-4 rounded-lg border ${
                    status.type === 'success' 
                    ? 'bg-green-500/10 border-green-500 text-green-400' 
                    : 'bg-red-500/10 border-red-500 text-red-400'
                }`}>
                    {status.message}
                </div>
            )}

            <form ref={form} onSubmit={sendEmail} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <label className="block text-xs font-bold text-zinc-500 uppercase mb-2 ml-1">Nom Complet</label>
                        <input 
                            type="text" name="user_name" required
                            value={formData.user_name} onChange={handleChange}
                            className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl p-4 focus:border-brandRed outline-none text-white transition-all"
                            placeholder="Nom Complet"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-zinc-500 uppercase mb-2 ml-1">Email</label>
                        <input 
                            type="email" name="user_email" required
                            value={formData.user_email} onChange={handleChange}
                            className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl p-4 focus:border-brandRed outline-none text-white transition-all"
                            placeholder="Email"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-xs font-bold text-zinc-500 uppercase mb-2 ml-1">Sujet</label>
                    <input 
                        type="text" name="subject" required
                        value={formData.subject} onChange={handleChange}
                        className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl p-4 focus:border-brandRed outline-none text-white transition-all"
                        placeholder="Sujet"
                    />
                </div>
                
                <div>
                    <label className="block text-xs font-bold text-zinc-500 uppercase mb-2 ml-1">Message</label>
                    <textarea 
                        name="message" rows="4" required
                        value={formData.message} onChange={handleChange}
                        className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl p-4 focus:border-brandRed outline-none text-white transition-all resize-none"
                        placeholder="Comment pouvons-nous vous aider ?"
                    ></textarea>
                </div>

                <button 
                    type="submit" disabled={isSubmitting}
                    className="w-full bg-brandRed hover:bg-red-700 text-white font-black py-4 rounded-xl uppercase tracking-widest transition-all shadow-lg shadow-brandRed/20 disabled:opacity-50"
                >
                    {isSubmitting ? 'Chargement...' : 'Envoyer le message'}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;