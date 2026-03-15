/**
 * HTM Tutors — About Page
 * Design: "Structured Clarity" — Swiss Typographic Style
 */
import { Link } from "wouter";
import { motion, type Transition } from "framer-motion";
import {
  Target,
  Heart,
  Lightbulb,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Clock,
  Users,
  Award,
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

const values = [
  {
    icon: Lightbulb,
    title: "Clear Explanations",
    desc: "We break down complex mathematical concepts into simple, understandable steps that students can follow and apply independently.",
  },
  {
    icon: Target,
    title: "Conceptual Understanding",
    desc: "We focus on building a deep understanding of underlying concepts, not just memorizing formulas or procedures.",
  },
  {
    icon: Heart,
    title: "Student Confidence",
    desc: "We believe that confidence is as important as knowledge. We work to help students believe in their own mathematical abilities.",
  },
  {
    icon: TrendingUp,
    title: "Measurable Results",
    desc: "Our approach consistently leads to real, measurable improvements in grades and academic performance.",
  },
];

const milestones = [
  { year: "2014", event: "HTM Tutors founded by Haitham Fouda" },
  { year: "2016", event: "Expanded to university-level mathematics and statistics" },
  { year: "2018", event: "Launched online tutoring services" },
  { year: "2020", event: "Reached 200+ students helped" },
  { year: "2022", event: "Expanded to finance and accounting tutoring" },
  { year: "2024", event: "Over 500 students helped across all programs" },
];

export default function About() {
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
            Our Story
          </motion.span>
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
            className="text-4xl md:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            About HTM Tutors
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUp}
            className="text-base max-w-2xl"
            style={{ color: "oklch(0.72 0.02 255)" }}
          >
            A decade of helping students build confidence and achieve academic success in mathematics.
          </motion.p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16" style={{ backgroundColor: "oklch(0.99 0.002 90)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Image */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="relative"
            >
              <div
                className="absolute -top-4 -left-4 w-full h-full rounded-2xl"
                style={{
                  backgroundColor: "oklch(0.52 0.22 264 / 0.08)",
                  border: "2px solid oklch(0.52 0.22 264 / 0.15)",
                }}
              />
              <img
                src={ABOUT_TUTOR}
                alt="Haitham Fouda — Founder of HTM Tutors"
                className="relative z-10 rounded-2xl w-full object-cover shadow-xl"
                style={{ maxHeight: "500px" }}
              />
              {/* Founder badge */}
              <div
                className="absolute bottom-6 right-6 z-20 rounded-xl px-5 py-3 shadow-lg"
                style={{ backgroundColor: "oklch(0.18 0.06 255)" }}
              >
                <div
                  className="text-white font-bold text-sm"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Haitham Fouda
                </div>
                <div className="text-xs" style={{ color: "oklch(0.65 0.02 255)" }}>
                  Founder & Lead Tutor
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
            >
              <span className="section-label block mb-3">The Founder</span>
              <h2
                className="text-3xl font-black mb-5"
                style={{ fontFamily: "Montserrat, sans-serif", color: "oklch(0.15 0.05 255)" }}
              >
                Built on a Passion for Teaching Mathematics
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "oklch(0.40 0.03 255)" }}>
                HTM Tutors was founded by <strong>Haitham Fouda</strong>, a statistics major and former university teaching assistant with over 10 years of experience helping students succeed in mathematics and quantitative courses.
              </p>
              <p className="text-base leading-relaxed mb-6" style={{ color: "oklch(0.40 0.03 255)" }}>
                Through years of tutoring, the focus has always been on clear explanations, building strong conceptual understanding, and helping students gain confidence in their abilities. HTM Tutors works with both high school and university students looking to improve their performance in math-related subjects.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { icon: Clock, num: "10+", label: "Years Experience" },
                  { icon: Users, num: "500+", label: "Students Helped" },
                  { icon: Award, num: "4.9★", label: "Google Rating" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl p-4 text-center border"
                    style={{ backgroundColor: "oklch(0.97 0.004 255)", borderColor: "oklch(0.90 0.006 255)" }}
                  >
                    <div
                      className="text-2xl font-black mb-1"
                      style={{ fontFamily: "Montserrat, sans-serif", color: "oklch(0.68 0.15 35)" }}
                    >
                      {stat.num}
                    </div>
                    <div className="text-xs" style={{ color: "oklch(0.45 0.03 255)" }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/contact">
                <span className="btn-primary flex items-center gap-2 w-fit">
                  Work with Us <ArrowRight size={17} />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16" style={{ backgroundColor: "oklch(0.96 0.005 255)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label block mb-3">Our Philosophy</span>
            <h2
              className="text-3xl font-black"
              style={{ fontFamily: "Montserrat, sans-serif", color: "oklch(0.15 0.05 255)" }}
            >
              What We Stand For
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
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
                  <v.icon size={22} style={{ color: "oklch(0.68 0.15 35)" }} />
                </div>
                <h3
                  className="font-bold text-sm mb-2"
                  style={{ fontFamily: "Montserrat, sans-serif", color: "oklch(0.15 0.05 255)" }}
                >
                  {v.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "oklch(0.45 0.03 255)" }}>
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16" style={{ backgroundColor: "oklch(0.99 0.002 90)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label block mb-3">Our Journey</span>
            <h2
              className="text-3xl font-black"
              style={{ fontFamily: "Montserrat, sans-serif", color: "oklch(0.15 0.05 255)" }}
            >
              A Decade of Growth
            </h2>
          </div>
          <div className="max-w-2xl mx-auto">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.15}
                variants={fadeUp}
                className="flex gap-6 mb-6 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm text-white shrink-0"
                    style={{ backgroundColor: "oklch(0.68 0.15 35)", fontFamily: "Montserrat, sans-serif" }}
                  >
                    {m.year.slice(2)}
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="w-px flex-1 mt-2" style={{ backgroundColor: "oklch(0.52 0.22 264 / 0.2)" }} />
                  )}
                </div>
                <div className="pb-6">
                  <div
                    className="font-bold text-sm mb-1"
                    style={{ fontFamily: "Montserrat, sans-serif", color: "oklch(0.68 0.15 35)" }}
                  >
                    {m.year}
                  </div>
                  <div className="text-sm" style={{ color: "oklch(0.35 0.04 255)" }}>
                    {m.event}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16" style={{ backgroundColor: "oklch(0.18 0.06 255)" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-label block mb-3" style={{ color: "oklch(0.75 0.12 35)" }}>
              Our Mission
            </span>
            <h2
              className="text-3xl md:text-4xl font-black text-white mb-6"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Helping Every Student Reach Their Potential
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "oklch(0.72 0.02 255)" }}>
              Our mission is simple: to help every student understand mathematics clearly, develop strong problem-solving skills, and build the confidence they need to succeed academically and beyond.
            </p>
            <div className="flex flex-col gap-3 text-left max-w-md mx-auto mb-10">
              {[
                "Personalized tutoring for every student",
                "Focus on understanding, not just grades",
                "Building long-term academic confidence",
                "Accessible for high school and university students",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm" style={{ color: "oklch(0.78 0.01 255)" }}>
                  <CheckCircle2 size={16} style={{ color: "oklch(0.75 0.12 35)" }} />
                  {item}
                </div>
              ))}
            </div>
            <Link href="/contact">
              <span className="btn-primary text-base px-8 py-4 flex items-center gap-2 w-fit mx-auto">
                Start Your Journey <ArrowRight size={18} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
