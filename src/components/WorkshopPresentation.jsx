// src/components/WorkshopPresentation.jsx
import React from 'react';
import { FaAward, FaLightbulb, FaShieldAlt, FaTools, FaUserCheck } from 'react-icons/fa';
// Define data for workshop features
const workshopFeatures = [
    {
        title: "State-of-the-Art Facility",
        description: "Our workshop is equipped with the latest technology and tools, designed for precision and efficiency in every service we perform.",
        icon: FaTools
    },
    {
        title: "Climate-Controlled Environment",
        description: "Dust-free and temperature-regulated bays ensure optimal conditions for film adhesion, preventing imperfections and ensuring a flawless finish.",
        icon: FaLightbulb // Represents controlled environment/lighting
    },
    {
        title: "Certified & Experienced Technicians",
        description: "Our team consists of highly trained and certified professionals, passionate about automotive perfection and dedicated to meticulous craftsmanship.",
        icon: FaUserCheck
    },
    {
        title: "Premium Product Handling",
        description: "Every roll of film and vinyl is stored and handled with utmost care in a pristine environment to maintain product integrity and performance.",
        icon: FaShieldAlt // Represents protection/care
    },
    {
        title: "Quality Assurance",
        description: "Rigorous multi-point inspections are conducted after every service to ensure that our high standards for quality and customer satisfaction are consistently met.",
        icon: FaAward
    }
];

const WorkshopPresentation = () => {
    return (
        <div className="py-16 md:py-24 bg-brandDark">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                
                <h2 className="text-4xl md:text-5xl font-extrabold text-white uppercase text-center mb-16">
                    Our Cutting-Edge Workshop
                </h2>

                {/* Main Workshop Overview */}
                <div className="mb-20 text-center max-w-4xl mx-auto">
                    <p className="text-xl text-brandLightGray leading-relaxed mb-6">
                        At EB GARAGE, our commitment to excellence begins with our environment. Our facility is meticulously designed to provide the ideal conditions for superior automotive care. We combine advanced technology with a pristine setting to ensure every detail is perfected.
                    </p>
                    {/* Placeholder for a main workshop photo */}
                    <div className="w-full h-96 bg-brandGray rounded-xl shadow-lg flex items-center justify-center relative overflow-hidden mt-10">
                        <div className='text-brandLightGray text-lg font-bold'>
                            [Main Workshop Interior Photo Placeholder]
                        </div>
                        {/* Optional: Use a specific background image here if you have one, e.g., `/assets/main-workshop.png` */}
                        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url(${workshop})"}}></div>
                    </div>
                </div>


                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {workshopFeatures.map((feature, index) => (
                        <div key={index} className="bg-brandGray rounded-xl p-8 shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
                            <feature.icon className="text-brandRed text-5xl mx-auto mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-4 uppercase">{feature.title}</h3>
                            <p className="text-brandLightGray leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>

                {/* Call to Action for Booking/Visiting */}
                <div className="text-center mt-20">
                    <p className="text-xl text-brandLightGray mb-6">
                        Experience the precision and care of EB GARAGE for yourself.
                    </p>
                    <a href="/contact">
                        <button className="bg-brandRed hover:bg-red-700 text-white text-lg uppercase font-bold px-10 py-4 rounded shadow-2xl transition-all duration-300">
                            Book Your Service
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default WorkshopPresentation;