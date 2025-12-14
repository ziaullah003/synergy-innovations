import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, Code, Zap, CheckCircle } from 'lucide-react';
import { backend_url } from '../url';
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const services = [
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'Cloud Solutions',
    'AI/ML Development',
    'DevOps & Infrastructure',
    'Custom Software',
    'business Development'

  ];



  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  // Validate required fields
  if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
    alert("Please fill in all required fields: Name, Email, and Message.");
    return;
  }

  try {
    const response = await fetch(`${backend_url}api/contactSS/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.message || "Failed to submit the form. Please try again.");
      return;
    }

    // Success alert
    alert("Thank you! Your message has been sent successfully. We'll get back to you soon.");

    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      budget: '',
      message: ''
    });

  } catch (err) {
    console.error("SUBMIT ERROR:", err);
    alert("Failed to submit the form. Please try again later.");
  }
};


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white backdrop-blur-lg rounded-2xl p-8 text-center animate-pulse border border-blue-200 shadow-2xl">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4 animate-bounce" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h2>
          <p className="text-gray-600">We'll get back to you within 24 hours.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-4 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Code className="w-10 h-10 cl-primary" />
            <Zap className="w-8 h-8 cl-primary animate-pulse" />
          </div>
          <h1 className="text-2xl md:text-5xl font-bold cl-primary mb-4 leading-tight">
            Let's Build Something
          </h1>
          <h2 className="text-2xl md:text-5xl font-bold cl-primary mb-8 leading-tight">
            Amazing Together
          </h2>
          <p className="text-xl font-semibold text-black max-w-2xl mx-auto leading-relaxed">
            Ready to transform your ideas into cutting-edge software solutions? 
            Let's discuss your next project.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:border-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              <h3 className="text-2xl font-bold cl-primary mb-6">Get In Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-primary rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-black font-semibold text-sm">Email</p>
                    <p className="cl-primary font-semibold">hello@softwarehouse.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-primary rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-black font-semibold text-sm">Phone</p>
                    <p className="cl-primary font-semibold">+92 (327) 5939938</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-primary rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-black font-semibold text-sm">Office</p>
                    <p className="cl-primary font-semibold">Peshawar Kpk Pakistan</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-300/50 shadow-lg">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-black mb-1">500+</div>
                  <div className="cl-primary text-sm font-medium">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-black mb-1">98%</div>
                  <div className="cl-primary text-sm font-medium">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-black mb-1">24/7</div>
                  <div className="cl-primary text-sm font-medium">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-black mb-1">5+</div>
                  <div className="cl-primary text-sm font-medium">Years Experience</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-8 border border-white/50 hover:border-blue-300 transition-all duration-500 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Tell Us About Your Project</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label className="text-gray-700 font-medium text-sm">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>
                
                <div className="space-y-2">
                  <label className="text-gray-700 font-medium text-sm">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label className="text-gray-700 font-medium text-sm">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    placeholder="Your company name"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-gray-700 font-medium text-sm">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label className="text-gray-700 font-medium text-sm">Service Needed</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                  >
                    <option value="">Select a service</option>
                    {services.map(service => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-gray-700 font-medium text-sm">Budget Range</label>
                   <input
                    type="tel"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    placeholder="Your Budget (e.g. 1000 USD)"
                  />
                </div>
              </div>

              <div className="mb-6 space-y-2">
                <label className="text-gray-700 font-medium text-sm">Project Details *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                  placeholder="Tell us about your project, requirements, timeline, and any specific features you need..."
                />
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-primary  text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-700 hover:to-cyan-700 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 flex items-center justify-center gap-2 group"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;