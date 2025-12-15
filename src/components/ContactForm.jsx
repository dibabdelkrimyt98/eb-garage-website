import React, { useState } from 'react';

const ContactForm = () => {
    // State to manage form data (optional, but good practice for React forms)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: '',
        message: ''
    });
    
    // Function to handle changes in input fields
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // --- TODO: Add actual form submission logic here ---
        // e.g., Axios post request to an API endpoint
        console.log('Form Submitted:', formData);

        alert('Thank you for your inquiry! We will be in touch shortly.');
        
        // Reset form after submission
        setFormData({ name: '', email: '', service: '', message: '' });
    };

    return (
        <div className="bg-brandGray p-8 md:p-12 rounded-xl shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-8 uppercase">Request a Quote</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Full Name Input */}
                <div>
                    <label htmlFor="name" className="block text-sm text-brandLightGray mb-2 font-medium">
                        Full Name <span className="text-brandRed">*</span>
                    </label>
                    <input 
                        type="text" 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-brandDark border border-zinc-800 rounded p-4 focus:border-brandRed focus:ring-1 focus:ring-brandRed outline-none text-white transition-colors placeholder-zinc-500"
                        placeholder="John Doe"
                    />
                </div>

                {/* Email Input */}
                <div>
                    <label htmlFor="email" className="block text-sm text-brandLightGray mb-2 font-medium">
                        Email Address <span className="text-brandRed">*</span>
                    </label>
                    <input 
                        type="email" 
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-brandDark border border-zinc-800 rounded p-4 focus:border-brandRed focus:ring-1 focus:ring-brandRed outline-none text-white transition-colors placeholder-zinc-500"
                        placeholder="john.doe@example.com"
                    />
                </div>

                {/* Service Dropdown */}
                <div>
                    <label htmlFor="service" className="block text-sm text-brandLightGray mb-2 font-medium">
                        Interested Service
                    </label>
                    <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-brandDark border border-zinc-800 rounded p-4 focus:border-brandRed focus:ring-1 focus:ring-brandRed outline-none text-white transition-colors appearance-none cursor-pointer"
                    >
                        <option value="">-- Select a Service --</option>
                        <option value="window_tinting">Automotive Window Tinting</option>
                        <option value="ppf_install">PPF (Paint Protection Film) Install</option>
                        <option value="wrapping">Vehicle Wrapping</option>
                        <option value="multiple">Multiple Services</option>
                        <option value="general_inquiry">General Inquiry</option>
                    </select>
                </div>
                
                {/* Message Textarea */}
                <div>
                    <label htmlFor="message" className="block text-sm text-brandLightGray mb-2 font-medium">
                        Your Message / Vehicle Details
                    </label>
                    <textarea 
                        id="message"
                        name="message"
                        rows="5" 
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-brandDark border border-zinc-800 rounded p-4 focus:border-brandRed focus:ring-1 focus:ring-brandRed outline-none text-white transition-colors placeholder-zinc-500"
                        placeholder="Tell us about your car (Make, Model, Year) and the details of the work you need done."
                    ></textarea>
                </div>

                {/* Submit Button */}
                <button 
                    type="submit" 
                    className="w-full bg-brandRed hover:bg-red-700 text-white font-bold py-4 rounded uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                    Send Request
                </button>
            </form>
        </div>
    );
};

export default ContactForm;