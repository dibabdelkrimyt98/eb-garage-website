import React from 'react';
import { FaCar, FaScroll, FaShieldAlt } from 'react-icons/fa';
import ppfCar from '../assets/ppf-car.jpg';
import tintCar from '../assets/tint-car.jpg';
import wrapCar from '../assets/wrap-car.jpg';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ServiceCard from '../components/ServiceCard';

const servicesData = [
  {
    title: "Window Tinting",
    description: "Premium ceramic films for heat rejection, UV protection, and privacy. Aesthetic enhancement with superior performance.",
    // 2. USE THE IMPORTED VARIABLE
    image: tintCar, 
    icon: FaCar
  },
  {
    title: "Paint Protection Film (PPF)",
    description: "Invisible armor for your paint. Defend against rock chips, scratches, and road debris with self-healing technology.",
    // 2. USE THE IMPORTED VARIABLE
    image: ppfCar, 
    icon: FaShieldAlt
  },
  {
    title: "Custom Wrapping",
    description: "Complete color changes, custom graphics, and commercial branding. Transform the look of your vehicle completely.",
    // 2. USE THE IMPORTED VARIABLE
    image: wrapCar, 
    icon: FaScroll
  }
];
function HomePage() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section 
        className="relative h-screen min-h-[700px] flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url(${heroCar})" }} 
      >
        <div className="absolute inset-0 bg-gradient-to-r from-brandDark/90 via-brandDark/60 to-transparent"></div>

        <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto w-full">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 uppercase">
              Ultimate Protection.<br />
              Unmatched Style.
            </h1>
            <p className="text-xl text-brandLightGray mb-10 leading-relaxed max-w-xl">
              Premier Automotive Window Tinting, Paint Protection Film (PPF), and Custom Wrapping services.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-brandRed hover:bg-red-700 text-white text-sm uppercase font-bold px-8 py-4 rounded shadow-md transition-all">
                Book Your Service
              </button>
              <button className="border-2 border-white/30 hover:border-white hover:bg-white/10 text-white text-sm uppercase font-bold px-8 py-4 rounded transition-all">
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-24 px-6 md:px-12 bg-brandDark relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 relative">
             <h2 className="text-4xl font-bold text-white uppercase inline-block relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-brandRed">
              Our Expertise
            </h2>
          </div>
         
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- CRAFTSMANSHIP SECTION --- */}
      <section className="flex flex-col md:flex-row bg-brandGray">
        <div className="md:w-1/2 h-[400px] md:h-auto relative min-h-[500px]">
          <img 
            src="/assets/workshop.png" 
            alt="EB Garage Workshop" 
            className="w-full h-full object-cover absolute inset-0"
          />
        </div>

        <div className="md:w-1/2 p-12 md:p-24 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white uppercase leading-tight mb-8">
            Meticulous<br/>Craftsmanship.
          </h2>
          <p className="text-brandLightGray leading-relaxed text-lg mb-8">
            At EB GARAGE, we don't just apply films; we perfect them. Our clinical workshop environment ensures contaminant-free installation, delivered by certified professionals passionate about automotive perfection.
          </p>
          <a href="#workshop" className="text-brandRed uppercase font-bold tracking-wider hover:underline w-fit">
            Learn about our process
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default HomePage;