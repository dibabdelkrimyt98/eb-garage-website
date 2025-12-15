// src/components/ServicesPresentation.jsx
import React from 'react';
import { FaCar, FaCaretRight, FaScroll, FaShieldAlt } from 'react-icons/fa';

// Define service data with full descriptions and icons
const detailedServices = [
    {
        title: "Window Tinting",
        subtitle: "UV Protection & Aesthetic Enhancement",
        description: "We offer a range of high-performance ceramic and carbon window films that block 99% of harmful UV rays and significantly reduce heat intrusion. Choose from multiple shades (teinte) for ultimate privacy and a sleek, customized look. Includes a lifetime warranty against peeling or bubbling.",
        features: ["Ceramic & Carbon Films", "Lifetime Warranty", "Heat & Glare Reduction", "Privacy Options"],
        icon: FaCar
    },
    {
        title: "Paint Protection Film (PPF)",
        subtitle: "Self-Healing, Invisible Armor",
        description: "PPF is the ultimate defense against road hazards. Our premium, self-healing film is optically clear, protecting your vehicle's paint from rock chips, bug splatters, road debris, and minor abrasions. We offer full-front kits, full body wraps, and custom coverage options.",
        features: ["Self-Healing Properties", "Invisible Finish", "Rock Chip Resistance", "Full or Partial Coverage"],
        icon: FaShieldAlt
    },
    {
        title: "Vehicle Wrapping",
        subtitle: "Complete Color Transformation",
        description: "Whether you want a temporary advertising wrap or a complete color change for a unique look, our vinyl wrapping services are unmatched. We use high-quality vinyl for a flawless finish that also protects the underlying OEM paint. Perfect for custom aesthetics or corporate branding.",
        features: ["Full Color Change", "Custom Graphics & Decals", "Matte, Satin, & Gloss Finishes", "OEM Paint Protection"],
        icon: FaScroll
    }
];

const ServicesPresentation = () => {
    return (
        <div className="py-16 md:py-24 bg-brandDark">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                
                <h2 className="text-4xl md:text-5xl font-extrabold text-white uppercase text-center mb-16">
                    Our Premium Service Lineup
                </h2>

                <div className="space-y-16">
                    {detailedServices.map((service, index) => (
                        <div 
                            key={service.title} 
                            // Alternating layout for visual interest
                            className={`flex flex-col md:flex-row gap-10 md:gap-16 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Icon & Description Block */}
                            <div className="md:w-1/2">
                                <service.icon className="text-brandRed text-5xl mb-4" />
                                <h3 className="text-4xl font-bold text-white mb-2 uppercase">{service.title}</h3>
                                <p className="text-xl font-semibold text-brandLightGray mb-6">{service.subtitle}</p>
                                <p className="text-brandLightGray mb-8 leading-relaxed">
                                    {service.description}
                                </p>
                                
                                {/* Feature List */}
                                <ul className="space-y-2">
                                    {service.features.map((feature) => (
                                        <li key={feature} className="flex items-center text-white">
                                            <FaCaretRight className="text-brandRed mr-2" />
                                            <span className='text-sm'>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Image Placeholder/Block */}
                            <div className="md:w-1/2 w-full h-80 bg-brandGray rounded-xl shadow-lg flex items-center justify-center relative overflow-hidden">
                                {/* NOTE: In a real app, replace this with dynamic imported images */}
                                <div className='text-brandLightGray text-lg font-bold'>
                                    [{service.title} Image Placeholder]
                                </div>
                                <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url(/assets/${service.title.toLowerCase().replace(/ /g, '-')}.png)` }}></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Closing CTA */}
                <div className="text-center mt-20">
                    <p className="text-xl text-brandLightGray mb-6">
                        Ready to experience the EB GARAGE difference?
                    </p>
                    <a href="/contact">
                        <button className="bg-brandRed hover:bg-red-700 text-white text-lg uppercase font-bold px-10 py-4 rounded shadow-2xl transition-all duration-300">
                            Get Your Free Consultation
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ServicesPresentation;