import React, { useState } from "react";
import { backend_url } from "../url";
const AmbassadorForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    fatherName: "",
    gender: "",
    whatsapp: "",
    university: "",
    semester: "",
    department: "",
    linkedin: "",
    experience: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  // Clear previous errors
  setError("");

  // Validate required fields
  if (!formData.name || !formData.email || !formData.whatsapp) {
    alert("Please fill in all required fields: Name, Email, and WhatsApp.");
    return;
  }

  try {
    const response = await fetch(`${backend_url}api/ambassador/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.message || "Failed to submit form. Please try again.");
      return;
    }

    // Success alert
    alert(
      "Thank you! Your form has been submitted successfully. You will be contacted soon."
    );

    // Reset form
    setFormData({
      name: "",
      email: "",
      fatherName: "",
      gender: "",
      whatsapp: "",
      university: "",
      semester: "",
      department: "",
      linkedin: "",
      experience: "",
    });
  } catch (err) {
    console.error("SUBMIT ERROR:", err);
    alert("Failed to submit form. Please try again later.");
  }
};



  return (
    <div className="max-w-2xl mx-auto p-6 bg-white  rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Become an Ambassador</h2>

      {error && <p className="text-red-600 mb-4">{error}</p>}
      {success && <p className="text-green-600 mb-4">{success}</p>}

      <form onSubmit={handleSubmit} className="space-y-4 cl-primary">
        {/* Name */}
        <div>
          <label className="block mb-1 font-medium">Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 font-medium">Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
            required
          />
        </div>

        {/* Father Name */}
        <div>
          <label className="block mb-1 font-medium">Father Name</label>
          <input
            type="text"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        {/* Gender */}
        <div>
          <label className="block mb-1 font-medium">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* WhatsApp */}
        <div>
          <label className="block mb-1 font-medium">WhatsApp Number *</label>
          <input
            type="text"
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
            required
          />
        </div>

        {/* University/College */}
        <div>
          <label className="block mb-1 font-medium">University/College</label>
          <input
            type="text"
            name="university"
            value={formData.university}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        {/* Semester/Class */}
        <div>
          <label className="block mb-1 font-medium">Semester/Class</label>
          <input
            type="text"
            name="semester"
            value={formData.semester}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        {/* Department */}
        <div>
          <label className="block mb-1 font-medium">Department</label>
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        {/* LinkedIn/Social */}
        <div>
          <label className="block mb-1 font-medium">LinkedIn or Social Media (optional)</label>
          <input
            type="text"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        {/* Volunteer Experience */}
        <div>
          <label className="block mb-1 font-medium">Any Volunteer Experience</label>
          <textarea
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
            rows="4"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-primary hover:cursor-pointer text-white px-6 py-2 rounded-lg transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AmbassadorForm;
