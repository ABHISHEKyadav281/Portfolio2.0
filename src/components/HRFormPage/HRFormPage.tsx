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
        className="p-4 lg:p-8 md:p-6 sm:p-4 rounded-2xl w-full max-w-2xl shadow-xl"
        style={{
          background: "rgba(139, 69, 19, 0.15)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(244, 164, 96, 0.3)"
        }}
      >
        <h2 
          className="text-lg lg:text-3xl md:text-2xl sm:text-xl font-bold text-center mb-8"
          style={{ color: "#FFE4C4" }}
        >
          Collaboration Form
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label 
              className="block font-semibold mb-1"
              style={{ color: "#F5DEB3" }}
            >
              Company Name
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg focus:outline-none"
              placeholder="Company Name"
              required
              style={{
                background: "rgba(205, 133, 63, 0.2)",
                color: "#FFE4C4",
                border: "1px solid rgba(244, 164, 96, 0.3)"
              }}
            />
          </div>

          <div>
            <label 
              className="block font-semibold mb-1"
              style={{ color: "#F5DEB3" }}
            >
              Official Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg focus:outline-none"
              placeholder="Official Email"
              required
              style={{
                background: "rgba(205, 133, 63, 0.2)",
                color: "#FFE4C4",
                border: "1px solid rgba(244, 164, 96, 0.3)"
              }}
            />
          </div>

          <div>
            <label 
              className="block font-semibold mb-1"
              style={{ color: "#F5DEB3" }}
            >
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg focus:outline-none"
              placeholder="Phone Number"
              style={{
                background: "rgba(205, 133, 63, 0.2)",
                color: "#FFE4C4",
                border: "1px solid rgba(244, 164, 96, 0.3)"
              }}
            />
          </div>

          <div>
            <label 
              className="block font-semibold mb-1"
              style={{ color: "#F5DEB3" }}
            >
              Position Offered
            </label>
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg focus:outline-none"
              placeholder="Position Offered"
              required
              style={{
                background: "rgba(205, 133, 63, 0.2)",
                color: "#FFE4C4",
                border: "1px solid rgba(244, 164, 96, 0.3)"
              }}
            />
          </div>
        </div>

        <div className="mt-6">
          <label 
            className="block font-semibold mb-1"
            style={{ color: "#F5DEB3" }}
          >
            Additional Notes
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-lg focus:outline-none"
            placeholder="Any message or instructions"
            rows={4}
            style={{
              background: "rgba(205, 133, 63, 0.2)",
              color: "#FFE4C4",
              border: "1px solid rgba(244, 164, 96, 0.3)"
            }}
          />
        </div>

        <button
          type="submit"
          className="w-full mt-8 py-3 font-bold rounded-lg transition-all duration-300"
          style={{
            background: "linear-gradient(135deg, #D2691E 0%, #CD853F 50%, #F4A460 100%)",
            color: "#FFF5EE"
          }}
        >
          Send Offer Details
        </button>
      </form>
    </div>
  );
};

export default HRFormPage;