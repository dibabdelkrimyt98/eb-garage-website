// src/components/QuoteForm.jsx
import React, { useState } from 'react';
// --- IMPORTS NÉCESSAIRES POUR LE BACKEND ---
import emailjs from '@emailjs/browser';
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from '../firebase'; // Assurez-vous que votre fichier firebase.js est bien configuré

// Étapes de base du formulaire
const TOTAL_STEPS = 3;

const QuoteForm = () => {
    // État pour gérer l'étape actuelle (1, 2, 3)
    const [step, setStep] = useState(1);
    
    // État pour stocker toutes les données du devis
    const [formData, setFormData] = useState({
        // Étape 1: Véhicule
        make: '', // Marque
        model: '', // Modèle
        year: '', // Année
        // Étape 2: Service
        serviceType: '', // Type de service principal
        serviceDetails: [], // Détails spécifiques (ex: teinte 5%, PPF avant)
        // Étape 3: Contact
        name: '', // Nom complet
        email: '', // Email
        phone: '', // Téléphone (facultatif)
        notes: '' // Notes supplémentaires
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionSuccess, setSubmissionSuccess] = useState(false);
    // Nouvel état pour gérer les erreurs d'envoi
    const [errorMessage, setErrorMessage] = useState('');

    // Mettre à jour les données du formulaire
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Mettre à jour les détails de service (ex: cases à cocher ou radio)
    const handleServiceChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setFormData(prev => ({
                ...prev,
                serviceDetails: [...prev.serviceDetails, value]
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                serviceDetails: prev.serviceDetails.filter(detail => detail !== value)
            }));
        }
    };

    // Fonctions de navigation entre les étapes
    const nextStep = () => {
        // Validation simple avant de passer à l'étape suivante
        if (step === 1 && (!formData.make || !formData.model || !formData.year)) {
            alert("Veuillez remplir les informations du véhicule.");
            return;
        }
        if (step === 2 && !formData.serviceType) {
            alert("Veuillez sélectionner un type de service.");
            return;
        }
        
        setStep(prev => Math.min(prev + 1, TOTAL_STEPS));
    };

    const prevStep = () => {
        setStep(prev => Math.max(prev - 1, 1));
    };

    // --- GÉRER LA SOUMISSION FINALE (LOGIQUE AJOUTÉE) ---
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage(''); // Réinitialiser les erreurs
        
        try {
            // 1. Enregistrer dans Firebase Firestore
            await addDoc(collection(db, "quotes"), {
                ...formData,
                createdAt: serverTimestamp(),
                status: "nouveau" // Pour le tri dans votre admin
            });

            // 2. Préparer les paramètres pour l'email
            const templateParams = {
                to_name: "Admin Garage", // Le nom qui apparaîtra dans l'email
                from_name: formData.name,
                from_email: formData.email,
                phone: formData.phone || "Non renseigné",
                vehicle_info: `${formData.make} ${formData.model} (${formData.year})`,
                service_type: formData.serviceType,
                service_details: formData.serviceDetails.join(", "), // Convertir le tableau en texte lisible
                message: formData.notes
            };

            // 3. Envoyer la notification via EmailJS
            await emailjs.send(
                'service_tm4clgk',   // <-- REMPLACEZ CECI (Service ID EmailJS)
                'template_okc7zya',  // <-- REMPLACEZ CECI (Template ID EmailJS)
                templateParams,
                'HWo31ByS0ctsGNZvt'    // <-- REMPLACEZ CECI (Public Key EmailJS)
            );

            // 4. Succès
            setSubmissionSuccess(true);

        } catch (error) {
            console.error("Erreur d'envoi:", error);
            setErrorMessage("Une erreur est survenue lors de l'envoi. Veuillez vérifier votre connexion ou nous appeler directement.");
        } finally {
            setIsSubmitting(false);
        }
    };

    // Affichage des étapes individuelles (INCHANGÉ)
    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-white mb-6">Étape 1: Détails du Véhicule</h2>
                        
                        <div>
                            <label htmlFor="make" className="block text-sm text-brandLightGray mb-2 font-medium">Marque <span className="text-brandRed">*</span></label>
                            <input type="text" id="make" name="make" value={formData.make} onChange={handleChange} required className="w-full bg-brandDark border border-zinc-800 rounded p-4 text-white placeholder-zinc-500" placeholder="Ex: Porsche" />
                        </div>
                        <div>
                            <label htmlFor="model" className="block text-sm text-brandLightGray mb-2 font-medium">Modèle <span className="text-brandRed">*</span></label>
                            <input type="text" id="model" name="model" value={formData.model} onChange={handleChange} required className="w-full bg-brandDark border border-zinc-800 rounded p-4 text-white placeholder-zinc-500" placeholder="Ex: 911 GT3" />
                        </div>
                        <div>
                            <label htmlFor="year" className="block text-sm text-brandLightGray mb-2 font-medium">Année <span className="text-brandRed">*</span></label>
                            <input type="number" id="year" name="year" value={formData.year} onChange={handleChange} required className="w-full bg-brandDark border border-zinc-800 rounded p-4 text-white placeholder-zinc-500" placeholder="Ex: 2024" />
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-white mb-6">Étape 2: Service Souhaité</h2>
                        
                        {/* Type de Service Principal */}
                        <div className="mb-8">
                            <label className="block text-sm text-brandLightGray mb-2 font-medium">Type de Service Principal <span className="text-brandRed">*</span></label>
                            <select name="serviceType" value={formData.serviceType} onChange={handleChange} required className="w-full bg-brandDark border border-zinc-800 rounded p-4 text-white appearance-none cursor-pointer">
                                <option value="">-- Choisir un Service --</option>
                                <option value="teintage">Teintage de Vitres</option>
                                <option value="ppf">Film de Protection Peinture (PPF)</option>
                                <option value="wrapping">Wrapping/Covering</option>
                                <option value="autre">Autre / Multiple</option>
                            </select>
                        </div>

                        {/* Options Détaillées Basées sur le Service */}
                        {formData.serviceType === 'ppf' && (
                            <div className="p-4 border border-zinc-700 rounded">
                                <h3 className="text-xl text-white mb-3">Couverture PPF :</h3>
                                <div className="space-y-2 text-brandLightGray">
                                    <label className="flex items-center space-x-2">
                                        <input type="checkbox" name="serviceDetails" value="ppf_avant" checked={formData.serviceDetails.includes("ppf_avant")} onChange={handleServiceChange} className="form-checkbox text-brandRed bg-brandDark border-zinc-600 rounded" />
                                        <span>Kit Avant Complet (Capot, Pare-chocs, Ailes)</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input type="checkbox" name="serviceDetails" value="ppf_complet" checked={formData.serviceDetails.includes("ppf_complet")} onChange={handleServiceChange} className="form-checkbox text-brandRed bg-brandDark border-zinc-600 rounded" />
                                        <span>Véhicule Complet (Full Body)</span>
                                    </label>
                                </div>
                            </div>
                        )}
                        {/* Vous pouvez ajouter d'autres conditions ici pour 'teintage' etc. */}
                    </div>
                );
            case 3:
                return (
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-white mb-6">Étape 3: Vos Coordonnées</h2>
                        
                        <div>
                            <label htmlFor="name" className="block text-sm text-brandLightGray mb-2 font-medium">Nom Complet <span className="text-brandRed">*</span></label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-brandDark border border-zinc-800 rounded p-4 text-white placeholder-zinc-500" placeholder="Votre Nom" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm text-brandLightGray mb-2 font-medium">Email <span className="text-brandRed">*</span></label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-brandDark border border-zinc-800 rounded p-4 text-white placeholder-zinc-500" placeholder="votre.email@exemple.com" />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm text-brandLightGray mb-2 font-medium">Téléphone</label>
                            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-brandDark border border-zinc-800 rounded p-4 text-white placeholder-zinc-500" placeholder="06..." />
                        </div>
                        <div>
                            <label htmlFor="notes" className="block text-sm text-brandLightGray mb-2 font-medium">Notes Supplémentaires (Kilométrage, État, etc.)</label>
                            <textarea id="notes" name="notes" rows="4" value={formData.notes} onChange={handleChange} className="w-full bg-brandDark border border-zinc-800 rounded p-4 text-white placeholder-zinc-500" placeholder="Toute information pertinente pour votre devis..."></textarea>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    // Écran de Succès
    if (submissionSuccess) {
        return (
            <div className="text-center p-12 bg-green-900/40 border border-green-600 rounded-xl">
                <h2 className="text-4xl text-white font-bold mb-4">Demande Envoyée avec Succès !</h2>
                <p className="text-xl text-brandLightGray">
                    Merci pour votre demande. Notre administration l'a bien reçue et traitera votre devis dans les 24-48 heures.
                </p>
                <a href="/" className="mt-8 inline-block bg-brandRed hover:bg-red-700 text-white font-bold px-6 py-3 rounded uppercase transition-colors">
                    Retourner à l'Accueil
                </a>
            </div>
        );
    }

    return (
        <div className="bg-brandGray p-6 md:p-10 rounded-xl shadow-2xl">
            {/* Indicateur de Progression */}
            <div className="flex justify-between items-center mb-10 text-brandLightGray">
                {[1, 2, 3].map(i => (
                    <div key={i} className="flex flex-col items-center w-1/3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold mb-1 transition-all duration-300 ${
                            step >= i 
                            ? 'bg-brandRed text-white' 
                            : 'bg-zinc-700 text-zinc-400'
                        }`}>
                            {i}
                        </div>
                        <span className={`text-sm ${step === i ? 'text-white' : ''}`}>
                            {i === 1 ? 'Véhicule' : i === 2 ? 'Service' : 'Contact'}
                        </span>
                    </div>
                ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
                {renderStep()}

                {/* Affichage des Erreurs (Nouveau) */}
                {errorMessage && (
                    <div className="p-4 bg-red-900/50 text-red-200 border border-red-500 rounded">
                        {errorMessage}
                    </div>
                )}

                {/* Boutons de Navigation */}
                <div className="flex justify-between pt-6 border-t border-zinc-700">
                    {step > 1 && (
                        <button 
                            type="button" 
                            onClick={prevStep} 
                            disabled={isSubmitting}
                            className="text-brandLightGray hover:text-white font-semibold py-3 px-6 rounded transition-colors border border-zinc-700 hover:border-white disabled:opacity-50"
                        >
                            ← Précédent
                        </button>
                    )}
                    
                    {step < TOTAL_STEPS && (
                        <button 
                            type="button" 
                            onClick={nextStep} 
                            className={`font-bold py-3 px-6 rounded uppercase transition-colors ${step === 1 ? 'ml-auto' : ''} ${
                                formData.make && formData.model && formData.year 
                                ? 'bg-brandRed hover:bg-red-700 text-white' 
                                : 'bg-zinc-600 text-zinc-300 cursor-not-allowed'
                            }`}
                        >
                            Suivant →
                        </button>
                    )}

                    {step === TOTAL_STEPS && (
                        <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className={`font-bold py-3 px-6 rounded uppercase tracking-wider transition-all duration-300 shadow-lg ${
                                isSubmitting 
                                ? 'bg-zinc-600 text-zinc-300 cursor-not-allowed' 
                                : 'bg-brandRed hover:bg-red-700 text-white'
                            }`}
                        >
                            {isSubmitting ? 'Envoi du Devis...' : 'Soumettre le Devis'}
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default QuoteForm;