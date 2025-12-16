import React, { useState } from 'react';

const ContactForm = () => {
    // État pour gérer les données du formulaire
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: '',
        message: ''
    });

    // État pour l'interactivité (chargement et succès)
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    
    // Fonction pour gérer les changements dans les champs
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Fonction pour gérer la soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true); // Active l'état de chargement
        
        // Simulation d'un appel API (ex: envoi vers un backend)
        setTimeout(() => {
            console.log('Formulaire Soumis :', formData);

            // Afficher le message de succès dans l'interface
            setSuccessMessage('Merci pour votre demande ! Nous vous contacterons très bientôt.');
            
            // Réinitialiser le formulaire
            setFormData({ name: '', email: '', service: '', message: '' });
            setIsSubmitting(false); // Désactive l'état de chargement

            // Effacer le message de succès après 5 secondes
            setTimeout(() => setSuccessMessage(''), 5000);
        }, 1500); // Délai de 1.5 secondes pour l'effet "interactif"
    };

    return (
        <div className="bg-brandGray p-8 md:p-12 rounded-xl shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-8 uppercase">Demander un Devis</h3>
            
            {/* Message de succès interactif */}
            {successMessage && (
                <div className="mb-6 p-4 bg-green-800/50 border border-green-500 text-green-100 rounded animate-pulse">
                    {successMessage}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Champ Nom Complet */}
                <div>
                    <label htmlFor="name" className="block text-sm text-brandLightGray mb-2 font-medium">
                        Nom Complet <span className="text-brandRed">*</span>
                    </label>
                    <input 
                        type="text" 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-brandDark border border-zinc-800 rounded p-4 focus:border-brandRed focus:ring-1 focus:ring-brandRed outline-none text-white transition-colors placeholder-zinc-500"
                        placeholder="Jean Dupont"
                    />
                </div>

                {/* Champ Email */}
                <div>
                    <label htmlFor="email" className="block text-sm text-brandLightGray mb-2 font-medium">
                        Adresse Email <span className="text-brandRed">*</span>
                    </label>
                    <input 
                        type="email" 
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-brandDark border border-zinc-800 rounded p-4 focus:border-brandRed focus:ring-1 focus:ring-brandRed outline-none text-white transition-colors placeholder-zinc-500"
                        placeholder="jean.dupont@exemple.com"
                    />
                </div>

                {/* Menu Déroulant Service */}
                <div>
                    <label htmlFor="service" className="block text-sm text-brandLightGray mb-2 font-medium">
                        Service Souhaité
                    </label>
                    <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-brandDark border border-zinc-800 rounded p-4 focus:border-brandRed focus:ring-1 focus:ring-brandRed outline-none text-white transition-colors appearance-none cursor-pointer"
                    >
                        <option value="">-- Sélectionnez un service --</option>
                        <option value="window_tinting">Teintage de Vitres</option>
                        <option value="ppf_install">Installation PPF (Protection Peinture)</option>
                        <option value="wrapping">Wrapping de Véhicule</option>
                        <option value="multiple">Services Multiples</option>
                        <option value="general_inquiry">Question Générale</option>
                    </select>
                </div>
                
                {/* Zone de Texte Message */}
                <div>
                    <label htmlFor="message" className="block text-sm text-brandLightGray mb-2 font-medium">
                        Votre Message / Détails du Véhicule
                    </label>
                    <textarea 
                        id="message"
                        name="message"
                        rows="5" 
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-brandDark border border-zinc-800 rounded p-4 focus:border-brandRed focus:ring-1 focus:ring-brandRed outline-none text-white transition-colors placeholder-zinc-500"
                        placeholder="Parlez-nous de votre voiture (Marque, Modèle, Année) et des détails du travail souhaité."
                    ></textarea>
                </div>

                {/* Bouton de Soumission Interactif */}
                <button 
                    type="submit" 
                    disabled={isSubmitting} // Désactive le bouton pendant l'envoi
                    className={`w-full font-bold py-4 rounded uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl ${
                        isSubmitting 
                        ? 'bg-zinc-600 text-zinc-300 cursor-not-allowed' 
                        : 'bg-brandRed hover:bg-red-700 text-white'
                    }`}
                >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer la Demande'}
                </button>
            </form>
        </div>
    );
};

export default ContactForm;