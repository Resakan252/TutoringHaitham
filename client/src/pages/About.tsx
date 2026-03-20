/**
 * HTM Tutors — About Page (Revised)
 * Focus: 10+ years experience, former TA, professional credentials, teaching philosophy
 */
import { Link } from "wouter";
import { motion, type Transition } from "framer-motion";
import {
  BookOpen,
  Award,
  Users,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ABOUT_TUTOR = "https://d2xsxph8kpxj0f.cloudfront.net/310519663439036136/diD4MzSp8iBWmaoJbmEFjk/about-tutor-4ZWqCS2WtybJ7UaaFiPdJD.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" } as Transition,
  }),
};

const philosophy = [
  {
    title: "Personalized Assessment",
    desc: "Every student learns differently. I start by understanding your strengths, gaps, and learning style to create a tailored approach.",
  },
  {
    title: "Conceptual Understanding",
    desc: "I focus on WHY concepts work, not just HOW to solve problems. This builds lasting confidence and exam readiness.",
  },
  {
    title: "Exam-Focused Preparation",
    desc: "Strategic practice with real exam questions. We work on time management, problem-solving strategies, and handling exam pressure.",
  },
  {
    title: "Flexible & Accessible",
    desc: "Online or in-person in Toronto. Flexible scheduling around your coursework and other commitments.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* ─── PAGE HEADER ──────────────────────────────────────────── */}
      <section
        className="relative pt-32 pb-16 overflow-hidden"
        style={{ backgroundColor: "oklch(0.18 0.06 255)" }}
      >
        <div className="container relative z-10">
          <motion.span
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="section-label block mb-3"
            style={{ color: "oklch(0.75 0.12 35)" }}
          >
            About HTM Tutors
          </motion.span>
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
            className="text-4xl md:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Professional Math Tutoring for High School & University
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUp}
            className="text-base max-w-2xl"
            style={{ color: "oklch(0.72 0.02 255)" }}
          >
            10+ years of teaching experience. Former university TA. Specialized in calculus, linear algebra, statistics, and quantitative business courses.
          </motion.p>
        </div>
      </section>

      {/* ─── FOUNDER SECTION ──────────────────────────────────────── */}
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
                  backgroundColor: "oklch(0.75 0.12 35 / 0.08)",
                  border: "2px solid oklch(0.75 0.12 35 / 0.15)",
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
                10+ Years of Teaching Excellence
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "oklch(0.40 0.03 255)" }}>
                HTM Tutors was founded by <strong>Haitham Fouda</strong>, a statistics major and <strong>former university teaching assistant</strong> with over a decade of experience helping students master mathematics and quantitative subjects.
              </p>
              <p className="text-base leading-relaxed mb-6" style={{ color: "oklch(0.40 0.03 255)" }}>
                My background as a TA gave me deep insight into how university-level concepts are taught and what students struggle with most. I've spent 10+ years refining my approach to break down complex ideas, build conceptual understanding, and help students achieve 80%+ in challenging courses.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { icon: Award, num: "10+", label: "Years Experience" },
                  { icon: Users, num: "100+", label: "Students Improved" },
                  { icon: BookOpen, num: "Former TA", label: "University Level" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl p-4 text-center border"
                    style={{ backgroundColor: "oklch(0.97 0.004 255)", borderColor: "oklch(0.90 0.006 255)" }}
                  >
                    <div
                      className="text-2xl font-black mb-1"
                      style={{ fontFamily: "Montserrat, sans-serif", color: "oklch(0.75 0.12 35)" }}
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
                  Book a Session <ArrowRight size={17} />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── TEACHING PHILOSOPHY ──────────────────────────────────── */}
      <section className="py-16" style={{ backgroundColor: "oklch(0.18 0.06 255)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="section-label block mb-3"
              style={{ color: "oklch(0.75 0.12 35)" }}
            >
              My Approach
            </motion.span>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
              className="text-3xl font-black"
              style={{ fontFamily: "Montserrat, sans-serif", color: "oklch(0.85 0.005 65)" }}
            >
              Teaching Philosophy
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              variants={fadeUp}
              className="mt-4 text-base max-w-2xl mx-auto"
              style={{ color: "oklch(0.72 0.02 255)" }}
            >
              I believe that every student can succeed in math. It's about finding the right approach, breaking down complex ideas, and building confidence step by step.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {philosophy.map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="p-6 rounded-lg"
                style={{
                  backgroundColor: "oklch(0.21 0.006 285.885)",
                  borderLeft: "4px solid oklch(0.75 0.12 35)",
                }}
              >
                <h3
                  className="text-lg font-bold mb-3"
                  style={{ fontFamily: "Montserrat, sans-serif", color: "oklch(0.85 0.005 65)" }}
                >
                  {item.title}
                </h3>
                <p style={{ color: "oklch(0.72 0.02 255)" }} className="text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EXPERTISE AREAS ──────────────────────────────────────── */}
      <section className="py-16" style={{ backgroundColor: "oklch(0.99 0.002 90)" }}>
        <div className="container">
          <div className="text-center mb-12">
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="section-label block mb-3"
            >
              Specializations
            </motion.span>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
              className="text-3xl font-black"
              style={{ fontFamily: "Montserrat, sans-serif", color: "oklch(0.15 0.05 255)" }}
            >
              Areas of Expertise
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={fadeUp}
              className="p-6 rounded-lg"
              style={{ backgroundColor: "oklch(0.97 0.004 255)", borderLeft: "4px solid oklch(0.75 0.12 35)" }}
            >
              <h3
                className="text-lg font-bold mb-3"
                style={{ fontFamily: "Montserrat, sans-serif", color: "oklch(0.15 0.05 255)" }}
              >
                High School (Grades 9-12)
              </h3>
              <ul className="space-y-2 text-sm" style={{ color: "oklch(0.45 0.03 255)" }}>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} style={{ color: "oklch(0.75 0.12 35)", marginTop: "2px", flexShrink: 0 }} />
                  <span>Functions & Advanced Functions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} style={{ color: "oklch(0.75 0.12 35)", marginTop: "2px", flexShrink: 0 }} />
                  <span>Calculus & Vectors</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} style={{ color: "oklch(0.75 0.12 35)", marginTop: "2px", flexShrink: 0 }} />
                  <span>Data Management & Statistics</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} style={{ color: "oklch(0.75 0.12 35)", marginTop: "2px", flexShrink: 0 }} />
                  <span>Provincial exam prep</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
              className="p-6 rounded-lg"
              style={{ backgroundColor: "oklch(0.97 0.004 255)", borderLeft: "4px solid oklch(0.75 0.12 35)" }}
            >
              <h3
                className="text-lg font-bold mb-3"
                style={{ fontFamily: "Montserrat, sans-serif", color: "oklch(0.15 0.05 255)" }}
              >
                University Level
              </h3>
              <ul className="space-y-2 text-sm" style={{ color: "oklch(0.45 0.03 255)" }}>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} style={{ color: "oklch(0.75 0.12 35)", marginTop: "2px", flexShrink: 0 }} />
                  <span>Calculus I, II, III</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} style={{ color: "oklch(0.75 0.12 35)", marginTop: "2px", flexShrink: 0 }} />
                  <span>Linear Algebra</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} style={{ color: "oklch(0.75 0.12 35)", marginTop: "2px", flexShrink: 0 }} />
                  <span>Statistics & Probability</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} style={{ color: "oklch(0.75 0.12 35)", marginTop: "2px", flexShrink: 0 }} />
                  <span>Business & Finance Math</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────── */}
      <section className="py-16" style={{ backgroundColor: "oklch(0.18 0.06 255)" }}>
        <div className="container text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-3xl font-black mb-6"
            style={{ fontFamily: "Montserrat, sans-serif", color: "oklch(0.85 0.005 65)" }}
          >
            Ready to Improve Your Grades?
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
            className="text-lg mb-8 max-w-xl mx-auto"
            style={{ color: "oklch(0.72 0.02 255)" }}
          >
            Let's discuss your goals and create a personalized tutoring plan tailored to your needs.
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={fadeUp}
          >
            <Link href="/contact">
              <span className="btn-primary flex items-center gap-2 w-fit mx-auto">
                Book a Session <ArrowRight size={17} />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
