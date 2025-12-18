import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function ContactPage() {
  return (
    <div className="min-h-screen bg-brandDark font-sans selection:bg-brandRed selection:text-white">
      <Navbar />
      
      <div className="pt-24 md:pt-32"></div>

      <main className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
        <div className="flex flex-col items-center mb-16 text-center">
            <span className="text-brandRed font-bold tracking-[0.3em] uppercase mb-4 text-sm">Contactez EB GARAGE</span>
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase leading-none">
                On reste à votre <span className="text-brandRed">écoute</span>
            </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Colonne des Informations */}
          <div className="lg:col-span-1 space-y-12">
            <section>
                <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-6 border-l-4 border-brandRed pl-4">Nos Coordonnées</h2>
                <div className="space-y-6">
                    <a href="tel:0558004013" className="group flex items-center space-x-4">
                        <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center group-hover:bg-brandRed transition-colors">
                            <FaPhoneAlt className="text-brandRed group-hover:text-white transition-colors" />
                        </div>
                        <div>
                            <p className="text-xs text-zinc-500 font-bold uppercase">Appelez-nous</p>
                            <p className="text-white font-medium">0558 00 40 13</p>
                        </div>
                    </a>

                    <a href="mailto:contact@ebgarage.dz" className="group flex items-center space-x-4">
                        <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center group-hover:bg-brandRed transition-colors">
                            <FaEnvelope className="text-brandRed group-hover:text-white transition-colors" />
                        </div>
                        <div>
                            <p className="text-xs text-zinc-500 font-bold uppercase">Email Direct</p>
                            <p className="text-white font-medium">contact@ebgarage.dz</p>
                        </div>
                    </a>

                    <div className="group flex items-start space-x-4">
                        <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center shrink-0">
                            <FaMapMarkerAlt className="text-brandRed" />
                        </div>
                        <div>
                            <p className="text-xs text-zinc-500 font-bold uppercase">Localisation</p>
                            <p className="text-white font-medium leading-relaxed">
                                Cité Ben Mokadem, Sidi Abdelkader,<br />
                                Blida, Algérie
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-6 border-l-4 border-brandRed pl-4">Horaires</h2>
                <div className="bg-zinc-900/30 p-6 rounded-2xl border border-zinc-800">
                    <div className="flex justify-between mb-2 text-zinc-300">
                        <span>Samedi - Jeudi</span>
                        <span className="text-white font-bold">09:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between text-zinc-500">
                        <span>Vendredi</span>
                        <span className="font-bold text-brandRed">Fermé</span>
                    </div>
                </div>
            </section>
          </div>
          
          {/* Colonne du Formulaire */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>

        {/* Full Width Map Section */}
        <div className="mt-20 h-[450px] w-full rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
            <iframe 
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3206.675307122561!2d2.83593167426408!3d36.51369918379987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128f0ba6ff767039%3A0x39e8d490cd6184b2!2sEB%20Garage!5e0!3m2!1sen!2sdz!4v1766070370890!5m2!1sen!2sdz" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default ContactPage;


