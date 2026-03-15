/**
 * HTM Tutors — Home Page
 * Design: "Structured Clarity" — Swiss Typographic Style
 * Sections: Hero, Trust Indicators, Services Preview, How It Works, Testimonials, CTA
 */
import { Link } from "wouter";
import { motion, type Transition } from "framer-motion";
import {
  ArrowRight,
  Star,
  CheckCircle2,
  BookOpen,
  Calculator,
  TrendingUp,
  Monitor,
  Users,
  Award,
  Clock,
  ChevronRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663439036136/diD4MzSp8iBWmaoJbmEFjk/hero-bg-M36w3jpRoo7i7XvHnEKaAB.webp";
const MATH_ABSTRACT = "https://d2xsxph8kpxj0f.cloudfront.net/310519663439036136/diD4MzSp8iBWmaoJbmEFjk/math-abstract-dJ2J5yqoKo7cdPS8iF9RQv.webp";
const TUTORING_SESSION = "https://d2xsxph8kpxj0f.cloudfront.net/310519663439036136/diD4MzSp8iBWmaoJbmEFjk/tutoring-session-b3WT3pNcQWBimYLQPwqRwp.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" } as Transition,
  }),
};

const trustStats = [
  { number: "10+", label: "Years of Experience", icon: Clock },
  { number: "500+", label: "Students Helped", icon: Users },
  { number: "95%", label: "Grade Improvement Rate", icon: TrendingUp },
  { number: "4.9★", label: "Average Google Rating", icon: Award },
];

const services = [
  {
    icon: BookOpen,
    title: "High School Math Tutoring",
    desc: "Functions, Advanced Functions, Calculus & Vectors, Data Management — building strong foundations.",
    color: "oklch(0.68 0.15 35)",
  },
  {
    icon: Calculator,
    title: "University Math & Statistics",
    desc: "Calculus, Linear Algebra, Statistics, Quantitative Methods — breaking down complex concepts.",
    color: "oklch(0.68 0.15 35)",
  },
  {
    icon: TrendingUp,
    title: "Finance & Accounting",
    desc: "Corporate Finance, Business Statistics, Quantitative Finance — for business students.",
    color: "oklch(0.68 0.15 35)",
  },
  {
    icon: Monitor,
    title: "Online Tutoring",
    desc: "Flexible online sessions with interactive problem solving and scheduling that fits your life.",
    color: "oklch(0.68 0.15 35)",
  },
  {
    icon: Users,
    title: "In-Person Tutoring",
    desc: "Face-to-face sessions in a focused environment with personalized, hands-on support.",
    color: "oklch(0.68 0.15 35)",
  },
];

const steps = [
  {
    num: "01",
    title: "Contact Us",
    desc: "Tell us the course or topic you need help with. We'll understand your goals and challenges.",
  },
  {
    num: "02",
    title: "Get Matched",
    desc: "We match you with an experienced tutor who specializes in your subject area.",
  },
  {
    num: "03",
    title: "Improve Your Results",
    desc: "Build confidence, develop problem-solving skills, and see real improvements in your grades.",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    course: "University Calculus",
    rating: 5,
    text: "Haitham is an excellent tutor. I achieved 85% or higher in my university courses thanks to his help. He explains concepts clearly and patiently.",
  },
  {
    name: "James T.",
    course: "Statistics",
    rating: 5,
    text: "Extremely patient and clear in explaining statistics concepts. I went from failing to getting an A. Highly recommend HTM Tutors to anyone struggling.",
  },
  {
    name: "Priya K.",
    course: "Advanced Functions",
    rating: 5,
    text: "My daughter's confidence in math has improved tremendously. The personalized approach made all the difference. We are very grateful.",
  },
  {
    name: "Michael R.",
    course: "Linear Algebra",
    rating: 5,
    text: "Best tutoring experience I've had. The tutor broke down every concept step by step. I finally feel confident going into my exams.",
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
                Expert Math Tutoring in Toronto
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
              Master Math with{" "}
              <span style={{ color: "oklch(0.75 0.12 35)" }}>Confidence</span>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              custom={2}
              variants={fadeUp}
              className="text-lg md:text-xl leading-relaxed mb-8"
              style={{ color: "oklch(0.82 0.01 255)", fontFamily: "Open Sans, sans-serif" }}
            >
              Over 10 years helping high school and university students improve their grades and confidence in mathematics, statistics, and finance.
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
              <Link href="/contact">
                <span className="btn-outline text-base px-8 py-4">Contact Us</span>
              </Link>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              custom={4}
              variants={fadeUp}
              className="mt-10 flex flex-wrap gap-5"
            >
              {["Personalized Approach", "University & High School", "Online & In-Person"].map((tag) => (
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

      {/* ─── TRUST INDICATORS ─────────────────────────────────────── */}
      <section style={{ backgroundColor: "oklch(0.18 0.06 255)" }} className="py-14">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustStats.map((stat, i) => (
              <motion.div
                key={stat.label}
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
                  {stat.number}
                </div>
                <div className="text-sm font-medium" style={{ color: "oklch(0.72 0.02 255)" }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES PREVIEW ─────────────────────────────────────── */}
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
              What We Offer
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
              Tutoring Services
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              variants={fadeUp}
              className="mt-4 text-base max-w-xl mx-auto"
              style={{ color: "oklch(0.45 0.03 255)" }}
            >
              Personalized tutoring for students at the high school and university level, specializing in mathematics and quantitative subjects.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.5}
                variants={fadeUp}
              >
                <Link href="/services">
                  <div
                    className="card-hover rounded-xl p-6 h-full border bg-white group"
                    style={{ borderColor: "oklch(0.90 0.006 255)" }}
                  >
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${svc.color.replace(")", " / 0.1)")}` }}
                    >
                      <svc.icon size={22} style={{ color: svc.color }} />
                    </div>
                    <h3
                      className="font-bold text-base mb-2"
                      style={{ fontFamily: "Montserrat, sans-serif", color: "oklch(0.15 0.05 255)" }}
                    >
                      {svc.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "oklch(0.45 0.03 255)" }}>
                      {svc.desc}
                    </p>
                    <div
                      className="mt-4 flex items-center gap-1 text-xs font-semibold"
                      style={{ color: svc.color, fontFamily: "Montserrat, sans-serif" }}
                    >
                      Learn more <ChevronRight size={14} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            variants={fadeUp}
            className="text-center mt-10"
          >
            <Link href="/services">
              <span className="btn-outline-navy">View All Services</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─────────────────────────────────────────── */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ backgroundColor: "oklch(0.18 0.06 255)" }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${MATH_ABSTRACT})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container relative z-10">
          <div className="text-center mb-14">
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="section-label block mb-3"
              style={{ color: "oklch(0.75 0.12 35)" }}
            >
              Simple Process
            </motion.span>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
              className="text-3xl md:text-4xl font-black text-white"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              How It Works
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="relative text-center"
              >
                {i < steps.length - 1 && (
                  <div
                    className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px"
                    style={{ backgroundColor: "oklch(0.52 0.22 264 / 0.3)" }}
                  />
                )}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 font-black text-xl"
                  style={{
                    backgroundColor: "oklch(0.52 0.22 264 / 0.15)",
                    border: "2px solid oklch(0.52 0.22 264 / 0.4)",
                    color: "oklch(0.75 0.12 35)",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  {step.num}
                </div>
                <h3
                  className="font-bold text-lg text-white mb-3"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "oklch(0.68 0.02 255)" }}>
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TUTORING SESSION IMAGE BREAK ─────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.99 0.002 90)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <span className="section-label block mb-3">Personalized Learning</span>
              <h2
                className="text-3xl md:text-4xl font-black mb-5"
                style={{ fontFamily: "Montserrat, sans-serif", color: "oklch(0.15 0.05 255)" }}
              >
                One-on-One Tutoring That Gets Results
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: "oklch(0.45 0.03 255)" }}>
                Every student learns differently. Our tutors take the time to understand your specific challenges, adapt their teaching style, and focus on building a deep conceptual understanding — not just memorizing formulas.
              </p>
              <ul className="flex flex-col gap-3 mb-8">
                {[
                  "Tailored sessions for your specific course and level",
                  "Focus on conceptual understanding and problem-solving",
                  "Regular progress tracking and feedback",
                  "Flexible scheduling — online or in-person",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "oklch(0.35 0.04 255)" }}>
                    <CheckCircle2 size={17} className="mt-0.5 shrink-0" style={{ color: "oklch(0.68 0.15 35)" }} />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact">
                <span className="btn-primary">Book Your First Session</span>
              </Link>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
              className="relative"
            >
              <div
                className="absolute -top-4 -left-4 w-full h-full rounded-2xl"
                style={{ backgroundColor: "oklch(0.52 0.22 264 / 0.08)", border: "2px solid oklch(0.52 0.22 264 / 0.15)" }}
              />
              <img
                src={TUTORING_SESSION}
                alt="One-on-one tutoring session"
                className="relative z-10 rounded-2xl w-full object-cover shadow-xl"
                style={{ maxHeight: "420px" }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─────────────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.96 0.005 255)" }}>
        <div className="container">
          <div className="text-center mb-14">
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="section-label block mb-3"
            >
              Student Reviews
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
              What Our Students Say
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.3}
                variants={fadeUp}
                className="bg-white rounded-xl p-6 shadow-sm border card-hover"
                style={{ borderColor: "oklch(0.90 0.006 255)" }}
              >
                <div className="flex items-center gap-1 mb-4 star-rating">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-5 italic" style={{ color: "oklch(0.35 0.03 255)" }}>
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm text-white"
                    style={{ backgroundColor: "oklch(0.68 0.15 35)", fontFamily: "Montserrat, sans-serif" }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-sm" style={{ fontFamily: "Montserrat, sans-serif", color: "oklch(0.15 0.05 255)" }}>
                      {t.name}
                    </div>
                    <div className="text-xs" style={{ color: "oklch(0.52 0.03 255)" }}>
                      {t.course}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={fadeUp}
            className="text-center mt-10"
          >
            <Link href="/testimonials">
              <span className="btn-outline-navy">Read More Reviews</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ─── CTA SECTION ──────────────────────────────────────────── */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ backgroundColor: "oklch(0.18 0.06 255)" }}
      >
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `url(${MATH_ABSTRACT})`, backgroundSize: "cover" }} />
        <div className="container relative z-10 text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-3xl md:text-5xl font-black text-white mb-5"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Start Improving Your Math Skills Today
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
            Join hundreds of students who have improved their grades and confidence with HTM Tutors.
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={fadeUp}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link href="/contact">
              <span className="btn-primary text-base px-8 py-4 flex items-center gap-2">
                Book a Session <ArrowRight size={18} />
              </span>
            </Link>
            <Link href="/contact">
              <span className="btn-outline text-base px-8 py-4">Contact Us</span>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
