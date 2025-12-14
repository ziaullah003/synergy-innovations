import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { backend_url } from "../url";

const ApplyForm = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // ✅ Check if event is paid (from route state)
  const paid = location.state?.paid || false;
  const activityName = location.state?.title || "the activity";
  const courseId = location.pathname.split("/").pop();

  // ✅ Form fields state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "",
    city: "",
    fieldOfStudy: "",
    classSemester: "",
    knowSSC: "",
    receiptFile: null,
  });

  const [submitted, setSubmitted] = useState(false);

  // ✅ Handle field changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  // ✅ Handle submit
 // Install axios if not installed: npm i axios

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const formDataToSend = new FormData();

    // Append all form values
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });

    // Append courseId
    formDataToSend.append("courseId", courseId);

    await axios.post(
      `${backend_url}api/application/apply`,
      formDataToSend,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    setSubmitted(true);

    setTimeout(() => {
      navigate("/synergy-club/activities");
    }, 2000);
  } catch (err) {
    console.error(err);
    alert("Submission failed");
  }
};

  return (
    <div className="min-h-screen bg-white flex justify-center items-center px-4 py-10">
      <div className="w-full max-w-3xl bg-white border rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl md:text-3xl font-bold cl-primary text-center mb-6">
          Apply for {activityName}
        </h2>

        {submitted ? (
          <div className="text-center text-green-600 font-semibold text-lg">
            🎉 Your application has been submitted successfully!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
                placeholder="Enter your email"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                WhatsApp / Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
                placeholder="Enter your WhatsApp or phone number"
              />
            </div>

            {/* Institution */}
            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                University / School / College
              </label>
              <input
                type="text"
                name="institution"
                value={formData.institution}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
                placeholder="Enter your institution name"
              />
            </div>

            {/* City */}
            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                City
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
                placeholder="Enter your city"
              />
            </div>

            {/* Field of Study */}
            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Field of Study
              </label>
              <input
                type="text"
                name="fieldOfStudy"
                value={formData.fieldOfStudy}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
                placeholder="e.g. Computer Science, Business, Engineering"
              />
            </div>

            {/* Class / Semester */}
            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Class / Semester
              </label>
              <input
                type="text"
                name="classSemester"
                value={formData.classSemester}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
                placeholder="e.g. 2nd Year, 4th Semester"
              />
            </div>

            {/* SSC Awareness */}
            <div>
              <label className="block font-semibold text-gray-700 mb-1">
                Do you know about SSC (Synergy Student Club)?
              </label>
              <input 
              type="text"
                name="knowSSC"
                value={formData.knowSSC}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
              />
            </div>

            {/* Receipt Upload (only if paid) */}
            {paid && (
              <div>
                <label className="block font-semibold text-gray-700 mb-1">
                  Upload Payment Receipt
                </label>
                <input
                  type="file"
                  name="receiptFile"
                  accept="image/*,application/pdf"
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Upload image or PDF proof of payment.
                </p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-lg font-semibold hover:opacity-90 transition-all"
            >
              Submit Application
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ApplyForm;
