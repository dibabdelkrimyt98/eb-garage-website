import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { FaPalette, FaPlusCircle, FaShieldAlt, FaWindowMaximize } from 'react-icons/fa';
import { CAR_DATA } from '../data/cars';
import { db } from '../firebase';

const TOTAL_STEPS = 3;

const AVAILABLE_SERVICES = [
    { id: 'teintage', label: 'Teintage de Vitres', icon: <FaWindowMaximize /> },
    { id: 'ppf', label: 'Protection Peinture (PPF)', icon: <FaShieldAlt /> },
    { id: 'wrapping', label: 'Wrapping / Covering', icon: <FaPalette /> },
    { id: 'autre', label: 'Nettoyage / Autre', icon: <FaPlusCircle /> },
];

const QuoteForm = () => {
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionSuccess, setSubmissionSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const [formData, setFormData] = useState({
        make: '',
        model: '',
        year: '',
        selectedServices: [], 
        name: '',
        email: '',
        phone: '',
        notes: ''
    });

    const [availableModels, setAvailableModels] = useState([]);

    useEffect(() => {
        if (formData.make && CAR_DATA[formData.make]) {
            setAvailableModels(CAR_DATA[formData.make]);
        } else {
            setAvailableModels([]);
        }
    }, [formData.make]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const toggleService = (serviceLabel) => {
        setFormData(prev => {
            const isSelected = prev.selectedServices.includes(serviceLabel);
            return isSelected 
                ? { ...prev, selectedServices: prev.selectedServices.filter(s => s !== serviceLabel) }
                : { ...prev, selectedServices: [...prev.selectedServices, serviceLabel] };
        });
    };

    const nextStep = () => {
        if (step === 1) {
            if (!formData.make || !formData.model || !formData.year) {
                alert("Veuillez remplir les informations du véhicule.");
                return;
            }
            if (formData.year.toString().length !== 4) {
                alert("L'année doit comporter exactement 4 chiffres.");
                return;
            }
        }
        
        if (step === 2 && formData.selectedServices.length === 0) {
            alert("Veuillez sélectionner au moins un service.");
            return;
        }

        setStep(prev => Math.min(prev + 1, TOTAL_STEPS));
    };

    const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

    const handleSubmit = async (e) => {
        // Stop the form from refreshing the page
        if (e) e.preventDefault();
        
        // This validation ONLY runs when the final "Confirmer" button is clicked
        if (!formData.name || !formData.email) {
            alert("Le nom et l'email sont obligatoires pour soumettre le devis.");
            return;
        }

        setIsSubmitting(true);
        try {
            await addDoc(collection(db, "quotes"), {
                ...formData,
                createdAt: serverTimestamp(),
                status: "nouveau"
            });

            const templateParams = {
                to_name: "Admin EB Garage",
                from_name: formData.name,
                from_email: formData.email,
                phone: formData.phone || "Non renseigné",
                vehicle_info: `${formData.make} ${formData.model} (${formData.year})`,
                service_type: formData.selectedServices.join(", "),
                message: formData.notes
            };

            await emailjs.send('service_tm4clgk', 'template_okc7zya', templateParams, 'HWo31ByS0ctsGNZvt');
            setSubmissionSuccess(true);
        } catch (error) {
            setErrorMessage("Erreur lors de l'envoi.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-white mb-6 uppercase border-l-4 border-brandRed pl-4">Véhicule</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <select name="make" value={formData.make} onChange={handleChange} className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-white focus:border-brandRed outline-none">
                                <option value="">Choisir la marque</option>
                                {Object.keys(CAR_DATA).map(brand => <option key={brand} value={brand}>{brand}</option>)}
                            </select>
                            <select name="model" value={formData.model} onChange={handleChange} disabled={!formData.make} className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-white focus:border-brandRed outline-none disabled:opacity-30">
                                <option value="">Choisir le modèle</option>
                                {availableModels.map(model => <option key={model} value={model}>{model}</option>)}
                            </select>
                        </div>
                        <input type="number" name="year" value={formData.year} onChange={handleChange} placeholder="Année (ex: 2024)" className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-white focus:border-brandRed outline-none" />
                    </div>
                );
            case 2:
                return (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-white mb-2 uppercase border-l-4 border-brandRed pl-4">Services</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {AVAILABLE_SERVICES.map((service) => (
                                <div 
                                    key={service.id}
                                    onClick={() => toggleService(service.label)}
                                    className={`cursor-pointer p-6 rounded-xl border-2 transition-all flex items-center space-x-4 ${
                                        formData.selectedServices.includes(service.label)
                                        ? 'border-brandRed bg-brandRed/10 text-white'
                                        : 'border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:border-zinc-600'
                                    }`}
                                >
                                    <span className="text-2xl">{service.icon}</span>
                                    <span className="font-bold uppercase text-xs tracking-widest">{service.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-white mb-6 uppercase border-l-4 border-brandRed pl-4">Coordonnées</h2>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nom Complet" className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-white focus:border-brandRed outline-none" />
                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-white focus:border-brandRed outline-none" />
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Téléphone" className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-white focus:border-brandRed outline-none" />
                        <textarea name="notes" rows="3" value={formData.notes} onChange={handleChange} placeholder="Message..." className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-white focus:border-brandRed outline-none resize-none"></textarea>
                    </div>
                );
            default: return null;
        }
    };

    if (submissionSuccess) {
        // Trigger confetti when this screen loads
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#ff0000', '#ffffff', '#222222'] // Matching your brand colors
        });
    
        return (
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16 px-6 bg-zinc-900/80 backdrop-blur-xl rounded-3xl border border-zinc-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)] max-w-2xl mx-auto"
            >
                {/* Animated Checkmark Icon */}
                <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
                    className="w-24 h-24 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-500/20"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                </motion.div>
    
                <h2 className="text-4xl font-black text-white uppercase mb-4 tracking-tighter">
                    Demande <span className="text-brandRed">Confirmée</span> !
                </h2>
                
                <p className="text-zinc-400 mb-10 text-lg">
                    Merci <span className="text-white font-bold">{formData.name}</span>. Nous avons bien reçu votre demande pour votre <span className="text-white">{formData.make} {formData.model}</span>.
                </p>
    
                {/* Interactive Progress Timeline */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 text-left">
                    {[
                        { title: "Réception", desc: "Devis enregistré", status: "done" },
                        { title: "Analyse", desc: "Vérification équipe", status: "active" },
                        { title: "Contact", desc: "Appel sous 24h", status: "pending" }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-zinc-800/50 p-4 rounded-xl border border-zinc-700/50">
                            <div className={`text-xs font-bold uppercase mb-1 ${item.status === 'done' ? 'text-green-500' : item.status === 'active' ? 'text-brandRed' : 'text-zinc-500'}`}>
                                {item.status === 'done' ? '✓ ' : '• '}{item.title}
                            </div>
                            <div className="text-white text-sm font-medium">{item.desc}</div>
                        </div>
                    ))}
                </div>
    
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button 
                        onClick={() => window.location.reload()} 
                        className="bg-brandRed hover:bg-red-700 text-white px-10 py-4 rounded-xl font-black uppercase text-xs tracking-[0.2em] transition-all transform hover:scale-105 shadow-lg shadow-red-900/20"
                    >
                        Nouveau Devis
                    </button>
                    <a 
                        href="/" 
                        className="bg-zinc-800 hover:bg-zinc-700 text-white px-10 py-4 rounded-xl font-black uppercase text-xs tracking-[0.2em] transition-all border border-zinc-700"
                    >
                        Retour Site
                    </a>
                </div>
            </motion.div>
        );
    }

    return (
        <div className="bg-zinc-900/30 backdrop-blur-md p-8 md:p-12 rounded-2xl border border-zinc-800/50">
            <div className="flex mb-12 space-x-2">
                {[1, 2, 3].map(i => (
                    <div key={i} className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${step >= i ? 'bg-brandRed' : 'bg-zinc-800'}`} />
                ))}
            </div>

            {/* No onSubmit here to prevent automatic triggers */}
            <form className="min-h-[350px] flex flex-col justify-between" onKeyDown={(e) => { if (e.key === 'Enter') e.preventDefault(); }}>
                <div>{renderStep()}</div>

                <div className="flex justify-between items-center mt-12 pt-8 border-t border-zinc-800/50">
                    {step > 1 ? (
                        <button type="button" onClick={prevStep} className="text-zinc-500 hover:text-white font-bold uppercase text-xs tracking-widest">Retour</button>
                    ) : <div />}
                    
                    {step < TOTAL_STEPS ? (
                        <button 
                            type="button" // STRICTLY A BUTTON
                            onClick={nextStep} 
                            className="bg-white text-black px-10 py-4 rounded-xl font-black uppercase text-xs tracking-[0.2em] hover:bg-brandRed hover:text-white transition-all"
                        >
                            Suivant
                        </button>
                    ) : (
                        <button 
                            type="button" // CHANGE TO BUTTON + MANUAL CALL
                            onClick={handleSubmit}
                            disabled={isSubmitting} 
                            className="bg-brandRed text-white px-10 py-4 rounded-xl font-black uppercase text-xs tracking-[0.2em] hover:bg-red-700 transition-all disabled:opacity-50"
                        >
                            {isSubmitting ? 'Envoi...' : 'Confirmer le Devis'}
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default QuoteForm;