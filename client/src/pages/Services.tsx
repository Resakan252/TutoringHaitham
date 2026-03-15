/**
 * HTM Tutors — Services Page
 * Design: "Structured Clarity" — Swiss Typographic Style
 */
import { Link } from "wouter";
import { motion, type Transition } from "framer-motion";
import {
  BookOpen,
  Calculator,
  TrendingUp,
  Monitor,
  Users,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
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

const services = [
  {
    id: "highschool",
    icon: BookOpen,
    title: "High School Math Tutoring",
    tagline: "Building strong foundations for academic success",
    desc: "Our high school tutoring program focuses on building a strong conceptual understanding and developing problem-solving skills that will serve students throughout their academic careers.",
    topics: [
      "Functions",
      "Advanced Functions",
      "Calculus & Vectors",
      "Data Management",
      "Grade 9–12 Mathematics",
    ],
    highlights: [
      "Curriculum-aligned sessions for Ontario high school courses",
      "Focus on conceptual understanding, not just memorization",
      "Exam preparation and test-taking strategies",
      "Homework help and assignment support",
    ],
    color: "oklch(0.68 0.15 35)",
  },
  {
    id: "university",
    icon: Calculator,
    title: "University Math & Statistics Tutoring",
    tagline: "Breaking down complex concepts into clear, understandable steps",
    desc: "University-level mathematics can be challenging. Our experienced tutors help students navigate complex material by breaking it down into manageable, clearly explained steps.",
    topics: [
      "Calculus I & II",
      "Linear Algebra",
      "Statistics & Probability",
      "Quantitative Methods",
      "Differential Equations",
    ],
    highlights: [
      "Support for first and second-year university courses",
      "Step-by-step problem solving methodology",
      "Midterm and final exam preparation",
      "Concept clarification and review sessions",
    ],
    color: "oklch(0.68 0.15 35)",
  },
  {
    id: "finance",
    icon: TrendingUp,
    title: "Finance & Accounting Tutoring",
    tagline: "Quantitative support for business students",
    desc: "Business students often face challenging quantitative courses. Our finance and accounting tutoring helps students understand the mathematical foundations of their business programs.",
    topics: [
      "Corporate Finance",
      "Business Statistics",
      "Quantitative Finance",
      "Financial Accounting",
      "Managerial Accounting",
    ],
    highlights: [
      "Tailored for business school students",
      "Real-world application of financial concepts",
      "Support for case studies and assignments",
      "CFA and professional exam preparation",
    ],
    color: "oklch(0.68 0.15 35)",
  },
  {
    id: "online",
    icon: Monitor,
    title: "Online Tutoring",
    tagline: "Flexible, interactive learning from anywhere",
    desc: "Our online tutoring sessions are designed to be just as effective as in-person sessions. Using interactive tools, we ensure students can see, understand, and practice concepts in real time.",
    topics: [
      "All subjects available online",
      "Interactive whiteboard sessions",
      "Screen sharing for problem solving",
      "Recorded sessions available",
      "Flexible scheduling",
    ],
    highlights: [
      "Learn from anywhere — home, library, or campus",
      "Interactive digital whiteboard for live problem solving",
      "Flexible scheduling to fit your timetable",
      "Same quality as in-person sessions",
    ],
    color: "oklch(0.68 0.15 35)",
  },
  {
    id: "inperson",
    icon: Users,
    title: "In-Person Tutoring",
    tagline: "Focused, face-to-face learning environment",
    desc: "For students who prefer direct, face-to-face interaction, our in-person tutoring sessions provide a focused environment with hands-on, personalized support.",
    topics: [
      "All subjects available in-person",
      "Toronto and GTA locations",
      "Flexible meeting locations",
      "One-on-one sessions",
      "Small group sessions available",
    ],
    highlights: [
      "Direct, hands-on support from your tutor",
      "Focused learning environment without distractions",
      "Immediate feedback and clarification",
      "Available in Toronto and the GTA",
    ],
    color: "oklch(0.68 0.15 35)",
  },
];

export default function Services() {
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
            What We Offer
          </motion.span>
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
            className="text-4xl md:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Our Tutoring Services
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUp}
            className="text-base max-w-2xl"
            style={{ color: "oklch(0.72 0.02 255)" }}
          >
            HTM Tutors provides personalized tutoring for students at the high school and university level, specializing in mathematics and quantitative subjects.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16" style={{ backgroundColor: "oklch(0.99 0.002 90)" }}>
        <div className="container">
          <div className="flex flex-col gap-12">
            {services.map((svc, i) => (
              <motion.div
                key={svc.id}
                id={svc.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0}
                variants={fadeUp}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start rounded-2xl p-8 border ${
                  i % 2 === 0 ? "" : ""
                }`}
                style={{
                  backgroundColor: "white",
                  borderColor: "oklch(0.90 0.006 255)",
                  boxShadow: "0 2px 20px oklch(0.18 0.06 255 / 0.06)",
                }}
              >
                {/* Left: Info */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${svc.color.replace(")", " / 0.1)")}` }}
                    >
                      <svc.icon size={24} style={{ color: svc.color }} />
                    </div>
                    <div>
                      <h2
                        className="font-black text-xl"
                        style={{ fontFamily: "Montserrat, sans-serif", color: "oklch(0.15 0.05 255)" }}
                      >
                        {svc.title}
                      </h2>
                      <p className="text-xs font-medium" style={{ color: svc.color, fontFamily: "Montserrat, sans-serif" }}>
                        {svc.tagline}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: "oklch(0.40 0.03 255)" }}>
                    {svc.desc}
                  </p>
                  <ul className="flex flex-col gap-2 mb-6">
                    {svc.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm" style={{ color: "oklch(0.35 0.04 255)" }}>
                        <CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: svc.color }} />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <span
                      className="inline-flex items-center gap-2 text-sm font-semibold"
                      style={{ color: svc.color, fontFamily: "Montserrat, sans-serif" }}
                    >
                      Book a Session <ArrowRight size={15} />
                    </span>
                  </Link>
                </div>

                {/* Right: Topics */}
                <div
                  className="rounded-xl p-6"
                  style={{ backgroundColor: "oklch(0.97 0.004 255)" }}
                >
                  <h3
                    className="font-bold text-sm mb-4 uppercase tracking-wide"
                    style={{ fontFamily: "Montserrat, sans-serif", color: "oklch(0.35 0.05 255)" }}
                  >
                    Topics Covered
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {svc.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-center gap-3 text-sm py-2 border-b last:border-0"
                        style={{ borderColor: "oklch(0.90 0.006 255)", color: "oklch(0.25 0.04 255)" }}
                      >
                        <div
                          className="w-2 h-2 rounded-full shrink-0"
                          style={{ backgroundColor: svc.color }}
                        />
                        {topic}
                      </li>
                    ))}
                  </ul>
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
            Ready to Get Started?
          </h2>
          <p className="text-base mb-8" style={{ color: "oklch(0.72 0.02 255)" }}>
            Contact us today to find the right tutoring service for your needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <span className="btn-primary text-base px-8 py-4 flex items-center gap-2">
                Book a Session <ArrowRight size={18} />
              </span>
            </Link>
            <Link href="/contact">
              <span className="btn-outline text-base px-8 py-4">Contact Us</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
