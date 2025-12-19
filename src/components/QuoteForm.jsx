import emailjs from '@emailjs/browser';
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from 'react';
import { FaPalette, FaPlusCircle, FaShieldAlt, FaWindowMaximize } from 'react-icons/fa';
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const toggleService = (serviceLabel) => {
        setFormData(prev => {
            const isSelected = prev.selectedServices.includes(serviceLabel);
            if (isSelected) {
                return {
                    ...prev,
                    selectedServices: prev.selectedServices.filter(s => s !== serviceLabel)
                };
            } else {
                return {
                    ...prev,
                    selectedServices: [...prev.selectedServices, serviceLabel]
                };
            }
        });
    };

    const nextStep = () => {
        if (step === 1 && (!formData.make || !formData.model || !formData.year)) {
            alert("Veuillez remplir les informations du véhicule.");
            return;
        }
        if (step === 2 && formData.selectedServices.length === 0) {
            alert("Veuillez sélectionner au moins un service.");
            return;
        }
        setStep(prev => Math.min(prev + 1, TOTAL_STEPS));
    };

    const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Final validation for Step 3
        if (!formData.name || !formData.email) {
            alert("Le nom et l'email sont obligatoires.");
            return;
        }

        setIsSubmitting(true);
        setErrorMessage('');
        
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

            await emailjs.send(
                'service_tm4clgk', 
                'template_okc7zya', 
                templateParams,
                'HWo31ByS0ctsGNZvt'
            );

            setSubmissionSuccess(true);
        } catch (error) {
            console.error(error);
            setErrorMessage("Erreur lors de l'envoi. Veuillez réessayer.");
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
                            <input type="text" name="make" value={formData.make} onChange={handleChange} placeholder="Marque" className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-white focus:border-brandRed outline-none" />
                            <input type="text" name="model" value={formData.model} onChange={handleChange} placeholder="Modèle" className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-white focus:border-brandRed outline-none" />
                        </div>
                        <input type="number" name="year" value={formData.year} onChange={handleChange} placeholder="Année" className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-white focus:border-brandRed outline-none" />
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
                                        ? 'border-brandRed bg-brandRed/10 text-white shadow-[0_0_15px_rgba(220,38,38,0.2)]'
                                        : 'border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:border-zinc-600'
                                    }`}
                                >
                                    <span className="text-2xl">{service.icon}</span>
                                    <span className="font-bold uppercase text-sm">{service.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-white mb-6 uppercase border-l-4 border-brandRed pl-4">Vos Coordonnées</h2>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nom Complet" className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-white focus:border-brandRed outline-none" />
                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-white focus:border-brandRed outline-none" />
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Téléphone" className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-white focus:border-brandRed outline-none" />
                        <textarea name="notes" rows="3" value={formData.notes} onChange={handleChange} placeholder="Message / Précisions..." className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-white focus:border-brandRed outline-none resize-none"></textarea>
                    </div>
                );
            default: return null;
        }
    };

    if (submissionSuccess) {
        return (
            <div className="text-center py-20 bg-zinc-900/50 rounded-2xl border border-zinc-800">
                <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">✓</div>
                <h2 className="text-3xl font-black text-white uppercase mb-4">Envoyé !</h2>
                <button onClick={() => window.location.reload()} className="bg-brandRed text-white px-8 py-3 rounded-lg font-bold uppercase hover:bg-red-700 transition-all">Nouveau Devis</button>
            </div>
        );
    }

    return (
        <div className="bg-zinc-900/30 backdrop-blur-md p-8 rounded-2xl border border-zinc-800/50 shadow-2xl">
            {/* PROGRESS BAR */}
            <div className="flex mb-12 space-x-2">
                {[1, 2, 3].map(i => (
                    <div key={i} className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${step >= i ? 'bg-brandRed' : 'bg-zinc-800'}`} />
                ))}
            </div>

            <form onSubmit={handleSubmit} className="min-h-[350px] flex flex-col justify-between">
                <div>
                    {renderStep()}
                </div>

                <div className="flex justify-between items-center mt-12 pt-8 border-t border-zinc-800/50">
                    {step > 1 ? (
                        <button type="button" onClick={prevStep} className="text-zinc-500 hover:text-white font-bold uppercase text-xs transition-colors">Retour</button>
                    ) : <div />}
                    
                    {step < TOTAL_STEPS ? (
                        <button 
                            type="button" 
                            onClick={nextStep} 
                            className="bg-white text-black px-10 py-4 rounded-xl font-black uppercase text-xs hover:bg-brandRed hover:text-white transition-all"
                        >
                            Suivant
                        </button>
                    ) : (
                        <button 
                            type="submit" 
                            disabled={isSubmitting} 
                            className="bg-brandRed text-white px-10 py-4 rounded-xl font-black uppercase text-xs hover:bg-red-700 transition-all disabled:opacity-50"
                        >
                            {isSubmitting ? 'Envoi en cours...' : 'Soumettre le Devis'}
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default QuoteForm;