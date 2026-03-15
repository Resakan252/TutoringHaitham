/**
 * HTM Tutors — Tutors Page
 * Design: "Structured Clarity" — Swiss Typographic Style
 */
import { Link } from "wouter";
import { motion, type Transition } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Users,
  Award,
  CheckCircle2,
  ArrowRight,
  Star,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ABOUT_TUTOR = "https://d2xsxph8kpxj0f.cloudfront.net/310519663439036136/diD4MzSp8iBWmaoJbmEFjk/about-tutor-4ZWqCS2WtybJ7UaaFiPdJD.webp";
const MATH_ABSTRACT = "https://d2xsxph8kpxj0f.cloudfront.net/310519663439036136/diD4MzSp8iBWmaoJbmEFjk/math-abstract-dJ2J5yqoKo7cdPS8iF9RQv.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" } as Transition,
  }),
};

const qualifications = [
  {
    icon: GraduationCap,
    title: "Academic Backgrounds",
    desc: "Strong academic credentials in mathematics, statistics, and quantitative disciplines from recognized universities.",
  },
  {
    icon: BookOpen,
    title: "Teaching Experience",
    desc: "Many tutors have served as university teaching assistants, providing them with structured pedagogical experience.",
  },
  {
    icon: Users,
    title: "Student-Centered Approach",
    desc: "Every tutor is trained to adapt their teaching style to the individual student's learning pace and preferences.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    desc: "Our tutors have consistently helped students achieve measurable grade improvements across all levels.",
  },
];

const subjects = [
  "Calculus I & II",
  "Linear Algebra",
  "Statistics & Probability",
  "Advanced Functions",
  "Data Management",
  "Corporate Finance",
  "Business Statistics",
  "Quantitative Methods",
  "Differential Equations",
  "Financial Mathematics",
];

export default function Tutors() {
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
            Meet the Team
          </motion.span>
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
            className="text-4xl md:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Experienced Tutors Focused on Your Success
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUp}
            className="text-base max-w-2xl"
            style={{ color: "oklch(0.72 0.02 255)" }}
          >
            HTM Tutors is a collective of experienced tutors with strong academic backgrounds in mathematics and quantitative subjects.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16" style={{ backgroundColor: "oklch(0.99 0.002 90)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            {/* Left: Image */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="relative"
            >
              <div
                className="absolute -top-4 -right-4 w-full h-full rounded-2xl"
                style={{
                  backgroundColor: "oklch(0.52 0.22 264 / 0.08)",
                  border: "2px solid oklch(0.52 0.22 264 / 0.15)",
                }}
              />
              <img
                src={ABOUT_TUTOR}
                alt="HTM Tutors — experienced math tutor"
                className="relative z-10 rounded-2xl w-full object-cover shadow-xl"
                style={{ maxHeight: "520px" }}
              />
              {/* Floating badge */}
              <div
                className="absolute bottom-6 left-6 z-20 rounded-xl px-5 py-3 shadow-lg"
                style={{ backgroundColor: "oklch(0.18 0.06 255)" }}
              >
                <div className="flex items-center gap-2">
                  <div className="flex star-rating">
                    {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <span className="text-white text-sm font-semibold" style={{ fontFamily: "Montserrat, sans-serif" }}>
                    4.9/5 Rating
                  </span>
                </div>
                <p className="text-xs mt-1" style={{ color: "oklch(0.65 0.02 255)" }}>
                  Based on 100+ Google Reviews
                </p>
              </div>
            </motion.div>

            {/* Right: Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
            >
              <span className="section-label block mb-3">Our Team</span>
              <h2
                className="text-3xl font-black mb-5"
                style={{ fontFamily: "Montserrat, sans-serif", color: "oklch(0.15 0.05 255)" }}
              >
                Academic Expertise You Can Trust
              </h2>
              <p className="text-base leading-relaxed mb-5" style={{ color: "oklch(0.40 0.03 255)" }}>
                HTM Tutors is a collective of experienced tutors with strong academic backgrounds in mathematics and quantitative subjects. Many tutors have experience as university teaching assistants, academic tutors, and educators in math-focused disciplines.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: "oklch(0.40 0.03 255)" }}>
                The goal of the team is to help students understand concepts clearly, develop problem-solving skills, and build confidence in challenging subjects.
              </p>

              <div className="flex flex-col gap-3 mb-8">
                {[
                  "University teaching assistant experience",
                  "Academic tutors with proven results",
                  "Educators in math-focused disciplines",
                  "Personalized teaching approach for every student",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm" style={{ color: "oklch(0.35 0.04 255)" }}>
                    <CheckCircle2 size={17} className="mt-0.5 shrink-0" style={{ color: "oklch(0.68 0.15 35)" }} />
                    {item}
                  </div>
                ))}
              </div>

              <Link href="/contact">
                <span className="btn-primary flex items-center gap-2 w-fit">
                  Book a Session <ArrowRight size={17} />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Qualifications Grid */}
      <section className="py-16" style={{ backgroundColor: "oklch(0.96 0.005 255)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label block mb-3">Why Choose Us</span>
            <h2
              className="text-3xl font-black"
              style={{ fontFamily: "Montserrat, sans-serif", color: "oklch(0.15 0.05 255)" }}
            >
              What Sets Our Tutors Apart
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualifications.map((q, i) => (
              <motion.div
                key={q.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.2}
                variants={fadeUp}
                className="bg-white rounded-xl p-6 border card-hover"
                style={{ borderColor: "oklch(0.90 0.006 255)" }}
              >
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: "oklch(0.52 0.22 264 / 0.1)" }}
                >
                  <q.icon size={22} style={{ color: "oklch(0.68 0.15 35)" }} />
                </div>
                <h3
                  className="font-bold text-sm mb-2"
                  style={{ fontFamily: "Montserrat, sans-serif", color: "oklch(0.15 0.05 255)" }}
                >
                  {q.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "oklch(0.45 0.03 255)" }}>
                  {q.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="py-16" style={{ backgroundColor: "oklch(0.99 0.002 90)" }}>
        <div className="container">
          <div className="text-center mb-10">
            <span className="section-label block mb-3">Expertise</span>
            <h2
              className="text-3xl font-black"
              style={{ fontFamily: "Montserrat, sans-serif", color: "oklch(0.15 0.05 255)" }}
            >
              Subjects We Cover
            </h2>
          </div>
          <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
            {subjects.map((s) => (
              <span
                key={s}
                className="px-4 py-2 rounded-full text-sm font-medium border"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  backgroundColor: "oklch(0.52 0.22 264 / 0.06)",
                  borderColor: "oklch(0.52 0.22 264 / 0.2)",
                  color: "oklch(0.68 0.15 35)",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: "oklch(0.18 0.06 255)" }}>
        <div className="container text-center">
          <h2
            className="text-3xl md:text-4xl font-black text-white mb-4"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Ready to Work with Our Tutors?
          </h2>
          <p className="text-base mb-8" style={{ color: "oklch(0.72 0.02 255)" }}>
            Book a session today and get matched with the right tutor for your needs.
          </p>
          <Link href="/contact">
            <span className="btn-primary text-base px-8 py-4 flex items-center gap-2 w-fit mx-auto">
              Book a Session <ArrowRight size={18} />
            </span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
