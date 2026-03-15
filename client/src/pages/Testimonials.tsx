/**
 * HTM Tutors — Testimonials Page
 * Design: "Structured Clarity" — Swiss Typographic Style
 */
import { Link } from "wouter";
import { motion, type Transition } from "framer-motion";
import { Star, Quote, ArrowRight } from "lucide-react";
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

const testimonials = [
  {
    name: "Sarah M.",
    course: "University Calculus",
    rating: 5,
    text: "Haitham is an excellent tutor. I achieved 85% or higher in my university courses thanks to his help. He explains concepts clearly and patiently. I would not have passed without his guidance.",
  },
  {
    name: "James T.",
    course: "Statistics",
    rating: 5,
    text: "Extremely patient and clear in explaining statistics concepts. I went from failing to getting an A. Highly recommend HTM Tutors to anyone struggling with quantitative courses.",
  },
  {
    name: "Priya K.",
    course: "Advanced Functions",
    rating: 5,
    text: "My daughter's confidence in math has improved tremendously. The personalized approach made all the difference. We are very grateful for the support provided by HTM Tutors.",
  },
  {
    name: "Michael R.",
    course: "Linear Algebra",
    rating: 5,
    text: "Best tutoring experience I've had. The tutor broke down every concept step by step. I finally feel confident going into my exams. The sessions were always well-structured and productive.",
  },
  {
    name: "Emily C.",
    course: "Corporate Finance",
    rating: 5,
    text: "I was really struggling with my finance course and HTM Tutors helped me understand the quantitative side of things. My grade improved significantly and I feel much more confident.",
  },
  {
    name: "David L.",
    course: "Data Management",
    rating: 5,
    text: "Great tutor who really knows the Ontario curriculum. My son improved from a 60% to an 82% in data management. Very happy with the results and would definitely recommend.",
  },
  {
    name: "Aisha N.",
    course: "Calculus & Vectors",
    rating: 5,
    text: "The tutoring sessions were incredibly helpful. The explanations were clear, and the practice problems were exactly what I needed. I passed my final exam with a much better grade than expected.",
  },
  {
    name: "Ryan P.",
    course: "Quantitative Methods",
    rating: 5,
    text: "I was lost in my quantitative methods course until I started sessions with HTM Tutors. The tutor made complex topics approachable and helped me develop a systematic approach to problems.",
  },
];

const stats = [
  { number: "4.9", label: "Average Rating", sub: "out of 5 stars" },
  { number: "100+", label: "Google Reviews", sub: "from satisfied students" },
  { number: "95%", label: "Grade Improvement", sub: "reported by students" },
  { number: "500+", label: "Students Helped", sub: "over 10 years" },
];

export default function Testimonials() {
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
            Student Reviews
          </motion.span>
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
            className="text-4xl md:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            What Our Students Say
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUp}
            className="text-base max-w-2xl"
            style={{ color: "oklch(0.72 0.02 255)" }}
          >
            Real reviews from students and parents who have experienced the HTM Tutors difference.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section style={{ backgroundColor: "oklch(0.96 0.005 255)" }} className="py-12">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.2}
                variants={fadeUp}
                className="text-center"
              >
                <div
                  className="text-4xl font-black mb-1"
                  style={{ fontFamily: "Montserrat, sans-serif", color: "oklch(0.68 0.15 35)" }}
                >
                  {s.number}
                </div>
                <div className="font-semibold text-sm" style={{ color: "oklch(0.15 0.05 255)", fontFamily: "Montserrat, sans-serif" }}>
                  {s.label}
                </div>
                <div className="text-xs" style={{ color: "oklch(0.52 0.03 255)" }}>
                  {s.sub}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16" style={{ backgroundColor: "oklch(0.99 0.002 90)" }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.15}
                variants={fadeUp}
                className="bg-white rounded-xl p-6 border card-hover flex flex-col"
                style={{ borderColor: "oklch(0.90 0.006 255)", boxShadow: "0 2px 12px oklch(0.18 0.06 255 / 0.05)" }}
              >
                {/* Quote icon */}
                <div className="mb-4">
                  <Quote size={28} style={{ color: "oklch(0.52 0.22 264 / 0.25)" }} />
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-4 star-rating">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={15} fill="currentColor" />
                  ))}
                </div>

                {/* Text */}
                <p
                  className="text-sm leading-relaxed flex-1 mb-5"
                  style={{ color: "oklch(0.35 0.03 255)" }}
                >
                  "{t.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: "oklch(0.92 0.004 255)" }}>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white shrink-0"
                    style={{ backgroundColor: "oklch(0.68 0.15 35)", fontFamily: "Montserrat, sans-serif" }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <div
                      className="font-semibold text-sm"
                      style={{ fontFamily: "Montserrat, sans-serif", color: "oklch(0.15 0.05 255)" }}
                    >
                      {t.name}
                    </div>
                    <div className="text-xs" style={{ color: "oklch(0.52 0.03 255)" }}>
                      {t.course}
                    </div>
                  </div>
                  {/* Google icon */}
                  <div className="ml-auto">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
                      style={{ backgroundColor: "#4285F4" }}
                    >
                      G
                    </div>
                  </div>
                </div>
              </motion.div>
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
            Join Our Successful Students
          </h2>
          <p className="text-base mb-8" style={{ color: "oklch(0.72 0.02 255)" }}>
            Start your journey to better grades and greater confidence today.
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
