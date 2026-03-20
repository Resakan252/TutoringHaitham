/**
 * HTM Tutors — Home Page (Revised)
 * Design: Professional, specialized positioning for high school & university tutoring
 * Focus: 10+ years experience, former TA, Toronto market, quantitative subjects
 */
import { Link } from "wouter";
import { motion, type Transition } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  BookOpen,
  Calculator,
  BarChart3,
  Monitor,
  Award,
  Clock,
  ChevronRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663439036136/diD4MzSp8iBWmaoJbmEFjk/hero-bg-M36w3jpRoo7i7XvHnEKaAB.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" } as Transition,
  }),
};

const credentials = [
  { number: "10+", label: "Years Teaching Experience" },
  { number: "Former TA", label: "University Level" },
  { number: "100+", label: "Students Improved Grades" },
  { number: "Toronto-Based", label: "Local Expert" },
];

const services = [
  {
    icon: BookOpen,
    title: "High School Mathematics",
    desc: "Grade 9-12: Functions, Advanced Functions, Calculus & Vectors, Data Management. Specialized in exam prep for provincial assessments.",
  },
  {
    icon: Calculator,
    title: "University Quantitative Courses",
    desc: "Calculus I-III, Linear Algebra, Statistics, Differential Equations. Proven track record helping students achieve 80%+ in challenging courses.",
  },
  {
    icon: BarChart3,
    title: "Business & Finance Math",
    desc: "Corporate Finance, Business Statistics, Quantitative Methods, Financial Analysis. Tailored for commerce and MBA students.",
  },
  {
    icon: Monitor,
    title: "Online Tutoring",
    desc: "Flexible scheduling with interactive problem-solving. Perfect for busy students balancing coursework and other commitments.",
  },
  {
    icon: Award,
    title: "Exam Preparation",
    desc: "Targeted prep for midterms, finals, and standardized tests. Strategic approach to maximize performance under pressure.",
  },
  {
    icon: Clock,
    title: "Flexible Sessions",
    desc: "In-person in Toronto or online. Customize frequency, duration, and focus areas to match your learning pace.",
  },
];

const approach = [
  {
    num: "01",
    title: "Assessment",
    desc: "We identify knowledge gaps and learning style to create a personalized strategy.",
  },
  {
    num: "02",
    title: "Targeted Teaching",
    desc: "Focused sessions on problem areas with real exam-style questions and practice.",
  },
  {
    num: "03",
    title: "Measurable Progress",
    desc: "Regular check-ins on grades, confidence, and understanding. Adjust approach as needed.",
  },
];

const testimonials = [
  {
    name: "Alex P.",
    context: "University Calculus II",
    text: "I went from 58% to 82% in one semester. Haitham's teaching method made complex concepts actually click. His experience as a TA really shows.",
    rating: 5,
  },
  {
    name: "Jordan M.",
    context: "Grade 12 Advanced Functions",
    text: "My son was struggling before university. After tutoring with Haitham, he's now confident in math and got into his top choice program.",
    rating: 5,
  },
  {
    name: "Casey L.",
    context: "Business Statistics",
    text: "Finally someone who explains WHY we're doing these calculations, not just HOW. Made all the difference in my understanding.",
    rating: 5,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={HERO_BG}
            alt="Student studying mathematics"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(105deg, oklch(0.10 0.05 255 / 0.92) 45%, oklch(0.10 0.05 255 / 0.65) 100%)",
            }}
          />
        </div>

        <div className="container relative z-10 py-20">
          <div className="max-w-2xl">
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0}
              variants={fadeUp}
            >
              <span className="section-label mb-4 block" style={{ color: "oklch(0.75 0.12 35)" }}>
                Expert Mathematics Tutoring — Toronto
              </span>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              custom={1}
              variants={fadeUp}
              className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              High School & University{" "}
              <span style={{ color: "oklch(0.75 0.12 35)" }}>Math Tutoring</span>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              custom={2}
              variants={fadeUp}
              className="text-lg md:text-xl leading-relaxed mb-8"
              style={{ color: "oklch(0.82 0.01 255)", fontFamily: "Open Sans, sans-serif" }}
            >
              10+ years of teaching experience. Former university TA. Specializing in calculus, linear algebra, statistics, and quantitative business courses. Proven track record helping students achieve 80%+ in challenging courses.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              custom={3}
              variants={fadeUp}
              className="flex flex-wrap gap-4"
            >
              <Link href="/contact">
                <span className="btn-primary text-base px-8 py-4 flex items-center gap-2">
                  Book a Session <ArrowRight size={18} />
                </span>
              </Link>
              <Link href="/about">
                <span className="btn-outline text-base px-8 py-4">Learn About My Approach</span>
              </Link>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              custom={4}
              variants={fadeUp}
              className="mt-10 flex flex-wrap gap-5"
            >
              {["Personalized Strategy", "Exam-Focused Prep", "Online & In-Person"].map((tag) => (
                <div key={tag} className="flex items-center gap-2 text-sm" style={{ color: "oklch(0.78 0.01 255)" }}>
                  <CheckCircle2 size={16} style={{ color: "oklch(0.75 0.12 35)" }} />
                  {tag}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
          <div className="w-px h-10 bg-white/40 animate-pulse" />
        </div>
      </section>

      {/* ─── CREDENTIALS ─────────────────────────────────────────── */}
      <section style={{ backgroundColor: "oklch(0.18 0.06 255)" }} className="py-14">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {credentials.map((cred, i) => (
              <motion.div
                key={cred.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="text-center"
              >
                <div
                  className="text-4xl md:text-5xl font-black mb-1"
                  style={{ fontFamily: "Montserrat, sans-serif", color: "oklch(0.75 0.12 35)" }}
                >
                  {cred.number}
                </div>
                <div className="text-sm font-medium" style={{ color: "oklch(0.72 0.02 255)" }}>
                  {cred.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─────────────────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.99 0.002 90)" }}>
        <div className="container">
          <div className="text-center mb-14">
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="section-label block mb-3"
            >
              Specialized Services
            </motion.span>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
              className="text-3xl md:text-4xl font-black"
              style={{ fontFamily: "Montserrat, sans-serif", color: "oklch(0.15 0.05 255)" }}
            >
              What I Offer
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              variants={fadeUp}
              className="mt-4 text-base max-w-2xl mx-auto"
              style={{ color: "oklch(0.45 0.03 255)" }}
            >
              Tailored tutoring for high school and university students. Whether you're aiming for 80%+ in your courses or preparing for critical exams, I customize each session to your goals.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <motion.div
                  key={svc.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  variants={fadeUp}
                  className="p-6 rounded-lg border"
                  style={{
                    backgroundColor: "oklch(1 0 0)",
                    borderColor: "oklch(0.92 0.004 286.32)",
                  }}
                >
                  <Icon
                    size={28}
                    style={{ color: "oklch(0.75 0.12 35)", marginBottom: "1rem" }}
                  />
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ fontFamily: "Montserrat, sans-serif", color: "oklch(0.15 0.05 255)" }}
                  >
                    {svc.title}
                  </h3>
                  <p style={{ color: "oklch(0.45 0.03 255)" }} className="text-sm leading-relaxed">
                    {svc.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── MY APPROACH ──────────────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.18 0.06 255)" }}>
        <div className="container">
          <div className="text-center mb-14">
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="section-label block mb-3"
              style={{ color: "oklch(0.75 0.12 35)" }}
            >
              How It Works
            </motion.span>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
              className="text-3xl md:text-4xl font-black"
              style={{ fontFamily: "Montserrat, sans-serif", color: "oklch(0.85 0.005 65)" }}
            >
              My Teaching Approach
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {approach.map((step, i) => (
              <motion.div
                key={step.num}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
              >
                <div
                  className="text-5xl font-black mb-4"
                  style={{ fontFamily: "Montserrat, sans-serif", color: "oklch(0.75 0.12 35)" }}
                >
                  {step.num}
                </div>
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ fontFamily: "Montserrat, sans-serif", color: "oklch(0.85 0.005 65)" }}
                >
                  {step.title}
                </h3>
                <p style={{ color: "oklch(0.72 0.02 255)" }} className="text-sm leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─────────────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.99 0.002 90)" }}>
        <div className="container">
          <div className="text-center mb-14">
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="section-label block mb-3"
            >
              Student Results
            </motion.span>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
              className="text-3xl md:text-4xl font-black"
              style={{ fontFamily: "Montserrat, sans-serif", color: "oklch(0.15 0.05 255)" }}
            >
              What Students Say
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testi, i) => (
              <motion.div
                key={testi.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="p-6 rounded-lg"
                style={{
                  backgroundColor: "oklch(1 0 0)",
                  borderLeft: "4px solid oklch(0.75 0.12 35)",
                }}
              >
                <div className="flex gap-1 mb-3">
                  {Array(testi.rating)
                    .fill(0)
                    .map((_, j) => (
                      <span key={j} style={{ color: "oklch(0.75 0.12 35)" }}>
                        ★
                      </span>
                    ))}
                </div>
                <p style={{ color: "oklch(0.35 0.03 255)" }} className="text-sm mb-4 leading-relaxed">
                  "{testi.text}"
                </p>
                <div>
                  <p
                    className="font-bold text-sm"
                    style={{ fontFamily: "Montserrat, sans-serif", color: "oklch(0.15 0.05 255)" }}
                  >
                    {testi.name}
                  </p>
                  <p style={{ color: "oklch(0.55 0.02 255)" }} className="text-xs">
                    {testi.context}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.18 0.06 255)" }}>
        <div className="container text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-3xl md:text-4xl font-black mb-6"
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
            Let's discuss your goals and create a personalized tutoring plan. Book a session or get in touch today.
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link href="/contact">
              <span className="btn-primary text-base px-8 py-4 flex items-center gap-2">
                Book a Session <ArrowRight size={18} />
              </span>
            </Link>
            <Link href="/contact">
              <span className="btn-outline text-base px-8 py-4" style={{ color: "oklch(0.85 0.005 65)" }}>
                Contact Me
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
