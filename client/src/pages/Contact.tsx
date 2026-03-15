/**
 * HTM Tutors — Contact Page
 * Design: "Structured Clarity" — Swiss Typographic Style
 */
import { useState } from "react";
import { motion, type Transition } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MATH_ABSTRACT = "https://d2xsxph8kpxj0f.cloudfront.net/310519663439036136/diD4MzSp8iBWmaoJbmEFjk/math-abstract-dJ2J5yqoKo7cdPS8iF9RQv.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" } as Transition,
  }),
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "info@htmtutors.ca",
    href: "mailto:info@htmtutors.ca",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(416) 000-0000",
    href: "tel:+14160000000",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Toronto, Ontario, Canada",
    href: null,
  },
  {
    icon: Clock,
    label: "Availability",
    value: "Mon–Sat: 9am – 9pm",
    href: null,
  },
];

const subjects = [
  "High School Math",
  "University Calculus",
  "Linear Algebra",
  "Statistics",
  "Data Management",
  "Corporate Finance",
  "Business Statistics",
  "Quantitative Methods",
  "Advanced Functions",
  "Other",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Enter a valid email";
    if (!formData.subject) newErrors.subject = "Please select a subject";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    }
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-lg border text-sm outline-none transition-all duration-200 ${
      errors[field] ? "border-red-400 bg-red-50" : "border-[oklch(0.90_0.006_255)] bg-white"
    } focus:border-[oklch(0.52_0.22_264)] focus:ring-2 focus:ring-[oklch(0.52_0.22_264_/_0.12)]`;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Page Header */}
      <section
        className="relative pt-32 pb-16 overflow-hidden"
        style={{ backgroundColor: "oklch(0.18 0.06 255)" }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `url(${MATH_ABSTRACT})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="container relative z-10">
          <motion.span
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="section-label block mb-3"
            style={{ color: "oklch(0.75 0.12 35)" }}
          >
            Get in Touch
          </motion.span>
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
            className="text-4xl md:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUp}
            className="text-base max-w-2xl"
            style={{ color: "oklch(0.72 0.02 255)" }}
          >
            Ready to improve your math skills? Reach out and we'll get back to you within 24 hours.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16" style={{ backgroundColor: "oklch(0.99 0.002 90)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left: Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="lg:col-span-1"
            >
              <h2
                className="text-xl font-black mb-6"
                style={{ fontFamily: "Montserrat, sans-serif", color: "oklch(0.15 0.05 255)" }}
              >
                Contact Information
              </h2>

              <div className="flex flex-col gap-5 mb-8">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "oklch(0.52 0.22 264 / 0.1)" }}
                    >
                      <info.icon size={18} style={{ color: "oklch(0.68 0.15 35)" }} />
                    </div>
                    <div>
                      <div
                        className="text-xs font-semibold uppercase tracking-wide mb-1"
                        style={{ fontFamily: "Montserrat, sans-serif", color: "oklch(0.52 0.03 255)" }}
                      >
                        {info.label}
                      </div>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-sm font-medium hover:underline"
                          style={{ color: "oklch(0.68 0.15 35)" }}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-sm" style={{ color: "oklch(0.25 0.04 255)" }}>
                          {info.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Why contact us */}
              <div
                className="rounded-xl p-5 border"
                style={{ backgroundColor: "oklch(0.97 0.004 255)", borderColor: "oklch(0.90 0.006 255)" }}
              >
                <h3
                  className="font-bold text-sm mb-3"
                  style={{ fontFamily: "Montserrat, sans-serif", color: "oklch(0.15 0.05 255)" }}
                >
                  What to Expect
                </h3>
                <div className="flex flex-col gap-2">
                  {[
                    "Response within 24 hours",
                    "Free initial consultation",
                    "Flexible scheduling options",
                    "Personalized tutor matching",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs" style={{ color: "oklch(0.40 0.03 255)" }}>
                      <CheckCircle2 size={14} style={{ color: "oklch(0.68 0.15 35)" }} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
              className="lg:col-span-2"
            >
              <div
                className="rounded-2xl p-8 border shadow-sm"
                style={{ backgroundColor: "white", borderColor: "oklch(0.90 0.006 255)" }}
              >
                {submitted ? (
                  <div className="text-center py-10">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                      style={{ backgroundColor: "oklch(0.52 0.22 264 / 0.1)" }}
                    >
                      <CheckCircle2 size={32} style={{ color: "oklch(0.68 0.15 35)" }} />
                    </div>
                    <h3
                      className="text-xl font-black mb-3"
                      style={{ fontFamily: "Montserrat, sans-serif", color: "oklch(0.15 0.05 255)" }}
                    >
                      Message Sent!
                    </h3>
                    <p className="text-sm" style={{ color: "oklch(0.45 0.03 255)" }}>
                      Thank you for reaching out. We'll get back to you within 24 hours to discuss how we can help you succeed.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", subject: "", message: "" }); }}
                      className="mt-6 btn-outline-navy text-sm"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2
                      className="text-xl font-black mb-6"
                      style={{ fontFamily: "Montserrat, sans-serif", color: "oklch(0.15 0.05 255)" }}
                    >
                      Book a Session or Ask a Question
                    </h2>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label
                            className="block text-xs font-semibold mb-1.5 uppercase tracking-wide"
                            style={{ fontFamily: "Montserrat, sans-serif", color: "oklch(0.35 0.04 255)" }}
                          >
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                            className={inputClass("name")}
                            style={{ fontFamily: "Open Sans, sans-serif", color: "oklch(0.15 0.05 255)" }}
                          />
                          {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                        </div>
                        <div>
                          <label
                            className="block text-xs font-semibold mb-1.5 uppercase tracking-wide"
                            style={{ fontFamily: "Montserrat, sans-serif", color: "oklch(0.35 0.04 255)" }}
                          >
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                            className={inputClass("email")}
                            style={{ fontFamily: "Open Sans, sans-serif", color: "oklch(0.15 0.05 255)" }}
                          />
                          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                        </div>
                      </div>

                      <div>
                        <label
                          className="block text-xs font-semibold mb-1.5 uppercase tracking-wide"
                          style={{ fontFamily: "Montserrat, sans-serif", color: "oklch(0.35 0.04 255)" }}
                        >
                          Course / Subject *
                        </label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className={inputClass("subject")}
                          style={{ fontFamily: "Open Sans, sans-serif", color: formData.subject ? "oklch(0.15 0.05 255)" : "oklch(0.60 0.02 255)" }}
                        >
                          <option value="">Select a subject...</option>
                          {subjects.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                        {errors.subject && <p className="text-xs text-red-500 mt-1">{errors.subject}</p>}
                      </div>

                      <div>
                        <label
                          className="block text-xs font-semibold mb-1.5 uppercase tracking-wide"
                          style={{ fontFamily: "Montserrat, sans-serif", color: "oklch(0.35 0.04 255)" }}
                        >
                          Message *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your course, what you're struggling with, and when you'd like to start..."
                          rows={5}
                          className={inputClass("message")}
                          style={{ fontFamily: "Open Sans, sans-serif", color: "oklch(0.15 0.05 255)", resize: "vertical" }}
                        />
                        {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                      </div>

                      <button type="submit" className="btn-primary flex items-center gap-2 w-fit text-base px-8 py-3.5">
                        <Send size={17} />
                        Send Message
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
