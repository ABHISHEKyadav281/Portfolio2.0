import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const HRFormPage = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (formData.phone && !/^[\d\s\+\-\(\)]+$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.subject) {
      newErrors.subject = "Please select a subject";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    if (!formRef.current) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    const SERVICE_ID = "service_qb11e5m";
    const TEMPLATE_ID = "template_5k6g8pk";
    const PUBLIC_KEY = "AhOhN-y9Ea7OC20ab";

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      
      setSubmitStatus('success');
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus('error');
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="h-full flex items-center justify-center p-2 lg:p-6 md:p-4 sm:p-2">
      <motion.form
        ref={formRef}
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-6 lg:p-8 md:p-6 sm:p-4 rounded-2xl w-full max-w-2xl shadow-xl"
        style={{
          background: "rgba(139, 69, 19, 0.15)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(244, 164, 96, 0.3)"
        }}
      >
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl lg:text-3xl md:text-2xl sm:text-xl font-bold text-center mb-6"
          style={{ color: "#FFE4C4" }}
        >
          Send a Message
        </motion.h2>

        <div className="space-y-4">
          {/* Row 1: Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name Field */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <label 
                className="block font-semibold mb-2 text-sm lg:text-base"
                style={{ color: "#F5DEB3" }}
              >
                Your Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 text-sm lg:text-base transition-all ${
                  errors.name ? 'ring-2 ring-red-500' : ''
                }`}
                placeholder="John Doe"
                style={{
                  background: "rgba(205, 133, 63, 0.2)",
                  color: "#FFE4C4",
                  border: errors.name ? "1px solid #ff4444" : "1px solid rgba(244, 164, 96, 0.3)"
                }}
              />
              {errors.name && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-xs mt-1"
                >
                  {errors.name}
                </motion.p>
              )}
            </motion.div>

            {/* Email Field */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <label 
                className="block font-semibold mb-2 text-sm lg:text-base"
                style={{ color: "#F5DEB3" }}
              >
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 text-sm lg:text-base transition-all ${
                  errors.email ? 'ring-2 ring-red-500' : ''
                }`}
                placeholder="john@example.com"
                style={{
                  background: "rgba(205, 133, 63, 0.2)",
                  color: "#FFE4C4",
                  border: errors.email ? "1px solid #ff4444" : "1px solid rgba(244, 164, 96, 0.3)"
                }}
              />
              {errors.email && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-xs mt-1"
                >
                  {errors.email}
                </motion.p>
              )}
            </motion.div>
          </div>

          {/* Row 2: Phone and Subject */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Phone Field */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <label 
                className="block font-semibold mb-2 text-sm lg:text-base"
                style={{ color: "#F5DEB3" }}
              >
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 text-sm lg:text-base transition-all ${
                  errors.phone ? 'ring-2 ring-red-500' : ''
                }`}
                placeholder="+1 (555) 000-0000"
                style={{
                  background: "rgba(205, 133, 63, 0.2)",
                  color: "#FFE4C4",
                  border: errors.phone ? "1px solid #ff4444" : "1px solid rgba(244, 164, 96, 0.3)"
                }}
              />
              {errors.phone && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-xs mt-1"
                >
                  {errors.phone}
                </motion.p>
              )}
            </motion.div>

            {/* Subject Field */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <label 
                className="block font-semibold mb-2 text-sm lg:text-base"
                style={{ color: "#F5DEB3" }}
              >
                What's this about? *
              </label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 text-sm lg:text-base transition-all ${
                  errors.subject ? 'ring-2 ring-red-500' : ''
                }`}
                style={{
                  background: "rgba(205, 133, 63, 0.2)",
                  color: "#FFE4C4",
                  border: errors.subject ? "1px solid #ff4444" : "1px solid rgba(244, 164, 96, 0.3)"
                }}
              >
                <option value="" style={{ background: "#2C1810" }}>Select an option</option>
                <option value="Freelance Project" style={{ background: "#2C1810" }}>Freelance Project</option>
                <option value="Job Opportunity" style={{ background: "#2C1810" }}>Job Opportunity</option>
                <option value="Collaboration" style={{ background: "#2C1810" }}>Collaboration</option>
                <option value="Other" style={{ background: "#2C1810" }}>Other</option>
              </select>
              {errors.subject && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-xs mt-1"
                >
                  {errors.subject}
                </motion.p>
              )}
            </motion.div>
          </div>

          {/* Message Field - Full Width */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
          >
            <label 
              className="block font-semibold mb-2 text-sm lg:text-base"
              style={{ color: "#F5DEB3" }}
            >
              Message *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 text-sm lg:text-base transition-all resize-none ${
                errors.message ? 'ring-2 ring-red-500' : ''
              }`}
              placeholder="Tell me about your project, opportunity, or inquiry..."
              rows={4}
              style={{
                background: "rgba(205, 133, 63, 0.2)",
                color: "#FFE4C4",
                border: errors.message ? "1px solid #ff4444" : "1px solid rgba(244, 164, 96, 0.3)"
              }}
            />
            {errors.message && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-xs mt-1"
              >
                {errors.message}
              </motion.p>
            )}
          </motion.div>
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
          whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          className={`w-full mt-6 py-3 font-bold rounded-lg transition-all duration-300 text-base lg:text-lg ${
            isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
          }`}
          style={{
            background: "linear-gradient(135deg, #D2691E 0%, #CD853F 50%, #F4A460 100%)",
            color: "#FFF5EE",
            boxShadow: "0 4px 15px rgba(210, 105, 30, 0.3)"
          }}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          ) : (
            'Send Message'
          )}
        </motion.button>

        {/* Success/Error Messages */}
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-4 rounded-lg text-center"
            style={{
              background: "rgba(34, 197, 94, 0.2)",
              border: "1px solid rgba(34, 197, 94, 0.3)",
              color: "#86efac"
            }}
          >
            ✅ Message sent successfully! I'll get back to you soon.
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-4 rounded-lg text-center"
            style={{
              background: "rgba(239, 68, 68, 0.2)",
              border: "1px solid rgba(239, 68, 68, 0.3)",
              color: "#fca5a5"
            }}
          >
            ❌ Failed to send the message. Please try again or email me directly.
          </motion.div>
        )}
      </motion.form>
    </div>
  );
};

export default HRFormPage;