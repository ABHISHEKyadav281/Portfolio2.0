import { useState, useRef } from "react";
import emailjs from "emailjs-com";

const HRFormPage = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    phone: "",
    position: "",
    message: "",
    year: "2025",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    const SERVICE_ID = "service_bno02sk";
    const TEMPLATE_ID = "template_98zsaos";
    const PUBLIC_KEY = "dmrkJpW6805h4UW0E";

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(
        () => {
          alert("✅ Offer details sent successfully!");
          setFormData({
            companyName: "",
            email: "",
            phone: "",
            position: "",
            message: "",
            year: "2025",
          });
        },
        (error:any) => {
          console.error("EmailJS Error:", error);
          alert("❌ Failed to send the form. Try again later!");
        }
      );
  };

  return (
    <div className="h-full flex items-center justify-center p-2 lg:p-6 md:p-4 sm:p-2">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-lg p-4 lg:p-8 md:p-6 sm:p-4 rounded-2xl w-full max-w-2xl shadow-xl border border-white/20"
      >
        <h2 className="text-lg lg:text-3xl md:text-2xl sm:text-xl font-bold text-white text-center mb-8">
          Collaboration Form
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-white font-semibold mb-1">
              Company Name
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Company Name"
              required
            />
          </div>

          <div>
            <label className="block text-white font-semibold mb-1">
              Official Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Official Email"
              required
            />
          </div>

          <div>
            <label className="block text-white font-semibold mb-1">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Phone Number"
            />
          </div>

          <div>
            <label className="block text-white font-semibold mb-1">
              Position Offered
            </label>
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Position Offered"
              required
            />
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-white font-semibold mb-1">
            Additional Notes
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
            placeholder="Any message or instructions"
            rows={4}
          />
        </div>

        <button
          type="submit"
          className="w-full mt-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-all duration-300"
        >
          Send Offer Details
        </button>
      </form>
    </div>
  );
};

export default HRFormPage;
