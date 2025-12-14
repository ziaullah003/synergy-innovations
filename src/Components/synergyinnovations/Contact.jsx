import React, { useState } from "react";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Code,
  Zap,
  CheckCircle,
  Clock,
  Globe,
  MessageSquare
} from "lucide-react";
import axios from "axios";
import { backend_url } from "../url";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  /* -------------------- Validation -------------------- */
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* -------------------- Submit -------------------- */
  const handleSubmit = async () => {
    if (!validateForm()) return;

    try {
      await axios.post(`${backend_url}api/contact/submit`, formData);

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          subject: "",
          message: ""
        });
      }, 3000);
    } catch (error) {
      console.error("Contact submit error:", error);
    }
  };

  /* -------------------- Change Handler -------------------- */
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Phone: allow digits only (prevents scientific notation)
    if (name === "phone") {
      const digitsOnly = value.replace(/\D/g, "");
      setFormData((prev) => ({ ...prev, phone: digitsOnly }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  /* -------------------- Success Screen -------------------- */
  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-purple-50 to-cyan-50">
        <div className="bg-white rounded-2xl p-8 text-center shadow-2xl">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4 animate-bounce" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Message Sent Successfully!
          </h2>
          <p className="text-gray-600">
            Thank you for contacting Synergy Innovations.
          </p>
        </div>
      </div>
    );
  }

  /* -------------------- Main UI -------------------- */
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-cyan-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center gap-3 mb-6">
            <div className="p-2 bg-primary rounded-xl">
              <Code className="w-8 h-8 text-white" />
            </div>
            <Zap className="w-10 h-10 text-primary animate-pulse" />
            <div className="p-2 bg-primary rounded-xl">
              <Globe className="w-8 h-8 text-white" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold bg-primary bg-clip-text text-transparent mb-4">
            Contact Synergy Innovations
          </h1>
          <p className="text-lg text-black max-w-3xl mx-auto">
            Have a question or want to work with us? Send us a message and we’ll
            respond shortly.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-200">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-primary" />
                Get In Touch
              </h3>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <Mail className="w-5 h-5 text-primary" />
                  <p className="font-semibold">hello@synergyinnovations.com</p>
                </div>

                <div className="flex gap-4">
                  <Phone className="w-5 h-5 text-primary" />
                  <p className="font-semibold">0340 000 0000</p>
                </div>

                <div className="flex gap-4">
                  <MapPin className="w-5 h-5 text-primary" />
                  <p className="font-semibold">
                    Innovation Plaza, Silicon Valley
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name *"
                  className="input"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email *"
                  className="input"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company (optional)"
                  className="input"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone (whatsapp)"
                  maxLength={15}
                  className="input"
                />
              </div>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject *"
                className="input mb-4"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Your message *"
                className="input mb-6"
              />

              <button
                onClick={handleSubmit}
                className="w-full bg-primary text-white py-4 rounded-lg flex justify-center gap-2 items-center"
              >
                Send Message <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tailwind helper */}
      <style>{`
        .input {
          width: 100%;
          padding: 12px;
          border-radius: 8px;
          border: 1px solid #d1d5db;
          background: #f9fafb;
        }
      `}</style>
    </div>
  );
};

export default ContactForm;
