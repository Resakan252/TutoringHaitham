/**
 * HTM Tutors — Services Page (Revised)
 * Focus: High school & university tutoring, specialized in quantitative subjects
 */
import { Link } from "wouter";
import { motion, type Transition } from "framer-motion";
import {
  BookOpen,
  Calculator,
  BarChart3,
  Monitor,
  Award,
  Clock,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    title: "High School Mathematics (Grades 9-12)",
    tagline: "Building strong foundations for university success",
    desc: "Comprehensive tutoring for Ontario high school mathematics. Whether you're aiming for 80%+ or preparing for university, I focus on deep conceptual understanding and exam readiness.",
    topics: [
      "Functions & Advanced Functions",
      "Calculus & Vectors",
      "Data Management & Statistics",
      "Grade 9-10 Mathematics",
      "Provincial exam prep",
    ],
    highlights: [
      "Curriculum-aligned with Ontario standards",
      "Focus on conceptual understanding, not memorization",
      "Exam preparation with real past papers",
      "Strategic problem-solving approaches",
    ],
  },
  {
    id: "university",
    icon: Calculator,
    title: "University Quantitative Courses",
    tagline: "Proven track record: 80%+ in challenging courses",
    desc: "University-level mathematics and statistics require a different approach. Drawing on my experience as a former TA, I break down complex concepts and help you master challenging material.",
    topics: [
      "Calculus I, II, III",
      "Linear Algebra",
      "Statistics & Probability",
      "Differential Equations",
      "Quantitative Methods",
    ],
    highlights: [
      "First and second-year university support",
      "Step-by-step problem solving methodology",
      "Midterm and final exam preparation",
      "Concept clarification and review sessions",
    ],
  },
  {
    id: "finance",
    icon: BarChart3,
    title: "Business & Finance Mathematics",
    tagline: "Quantitative support for commerce and MBA students",
    desc: "Business students face challenging quantitative courses. I help you understand the mathematical foundations and apply them to real-world scenarios.",
    topics: [
      "Corporate Finance",
      "Business Statistics",
      "Quantitative Finance",
      "Financial Analysis",
      "Managerial Accounting",
    ],
    highlights: [
      "Tailored for business school students",
      "Real-world application of concepts",
      "Support for case studies and projects",
      "Professional exam preparation",
    ],
  },
  {
    id: "exam",
    icon: Award,
    title: "Exam Preparation & Test Strategy",
    tagline: "Strategic approach to maximize performance",
    desc: "Exams are about more than just knowing the material. I help you develop test-taking strategies, manage time effectively, and perform under pressure.",
    topics: [
      "Provincial high school exams",
      "University midterms & finals",
      "Standardized test prep",
      "Time management strategies",
      "Problem-solving under pressure",
    ],
    highlights: [
      "Practice with real exam questions",
      "Strategic time allocation techniques",
      "Stress management and confidence building",
      "Post-exam review and improvement planning",
    ],
  },
  {
    id: "online",
    icon: Monitor,
    title: "Online Tutoring",
    tagline: "Flexible, interactive learning from anywhere",
    desc: "Online sessions are just as effective as in-person. Using interactive tools and screen sharing, we work through problems together in real time.",
    topics: [
      "All subjects available online",
      "Flexible scheduling",
      "Interactive problem solving",
      "Screen sharing & whiteboard",
    ],
    highlights: [
      "Convenient scheduling around your life",
      "Interactive tools for visual learning",
      "Session recordings available",
      "Personalized practice materials",
    ],
  },
  {
    id: "inperson",
    icon: Clock,
    title: "In-Person Tutoring (Toronto)",
    tagline: "Face-to-face sessions with focused, personalized support",
    desc: "In-person tutoring provides a dedicated learning environment. We work through problems together, with immediate feedback and personalized guidance.",
    topics: [
      "All subjects available in-person",
      "Flexible locations in Toronto",
      "One-on-one focused sessions",
      "Customized pace and approach",
    ],
    highlights: [
      "Dedicated learning environment",
      "Immediate feedback and clarification",
      "Personalized problem sets",
      "Flexible session length and frequency",
    ],
  },
];

const process = [
  {
    num: "01",
    title: "Initial Consultation",
    desc: "We discuss your goals, current challenges, and learning style. I assess your strengths and gaps to create a personalized plan.",
  },
  {
    num: "02",
    title: "Customized Sessions",
    desc: "Each session is tailored to your needs. We focus on problem areas, build conceptual understanding, and practice exam-style questions.",
  },
  {
    num: "03",
    title: "Ongoing Progress",
    desc: "Regular check-ins on grades and confidence. I adjust the approach as needed to ensure continuous improvement.",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* ─── PAGE HEADER ─────────────────────────────────────────── */}
      <section className="py-20 pt-32" style={{ backgroundColor: "oklch(0.99 0.002 90)" }}>
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="section-label block mb-4" style={{ color: "oklch(0.75 0.12 35)" }}>
              Specialized Services
            </span>
            <h1
              className="text-5xl md:text-6xl font-black mb-6"
              style={{ fontFamily: "Montserrat, sans-serif", color: "oklch(0.15 0.05 255)" }}
            >
              Tutoring Services
            </h1>
            <motion.p
              initial="hidden"
              animate="visible"
              custom={1}
              variants={fadeUp}
              className="text-lg leading-relaxed"
              style={{ color: "oklch(0.45 0.03 255)" }}
            >
              Personalized tutoring for high school and university students. Whether you need help with a specific course or comprehensive exam preparation, I customize each service to your goals.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── SERVICES GRID ────────────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.18 0.06 255)" }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <motion.div
                  key={svc.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  variants={fadeUp}
                  className="p-8 rounded-lg"
                  style={{
                    backgroundColor: "oklch(0.21 0.006 285.885)",
                    borderLeft: "4px solid oklch(0.75 0.12 35)",
                  }}
                >
                  <Icon
                    size={32}
                    style={{ color: "oklch(0.75 0.12 35)", marginBottom: "1rem" }}
                  />
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ fontFamily: "Montserrat, sans-serif", color: "oklch(0.85 0.005 65)" }}
                  >
                    {svc.title}
                  </h3>
                  <p
                    className="text-sm font-medium mb-3"
                    style={{ color: "oklch(0.75 0.12 35)" }}
                  >
                    {svc.tagline}
                  </p>
                  <p style={{ color: "oklch(0.72 0.02 255)" }} className="text-sm leading-relaxed mb-4">
                    {svc.desc}
                  </p>

                  <div className="mb-4">
                    <p style={{ color: "oklch(0.65 0.02 255)" }} className="text-xs font-bold mb-2">
                      TOPICS COVERED:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {svc.topics.map((topic) => (
                        <span
                          key={topic}
                          className="text-xs px-2 py-1 rounded"
                          style={{
                            backgroundColor: "oklch(0.75 0.12 35 / 0.15)",
                            color: "oklch(0.75 0.12 35)",
                          }}
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p style={{ color: "oklch(0.65 0.02 255)" }} className="text-xs font-bold mb-2">
                      HIGHLIGHTS:
                    </p>
                    <ul className="space-y-1">
                      {svc.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2 text-xs" style={{ color: "oklch(0.72 0.02 255)" }}>
                          <CheckCircle2 size={14} style={{ color: "oklch(0.75 0.12 35)", marginTop: "2px", flexShrink: 0 }} />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─────────────────────────────────────────── */}
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
              My Process
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
              How Tutoring Works
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {process.map((step, i) => (
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
                  className="text-lg font-bold mb-2"
                  style={{ fontFamily: "Montserrat, sans-serif", color: "oklch(0.15 0.05 255)" }}
                >
                  {step.title}
                </h3>
                <p style={{ color: "oklch(0.45 0.03 255)" }} className="text-sm leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRICING NOTE ─────────────────────────────────────────── */}
      <section className="py-16" style={{ backgroundColor: "oklch(0.18 0.06 255)" }}>
        <div className="container text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "Montserrat, sans-serif", color: "oklch(0.85 0.005 65)" }}
          >
            Flexible Pricing & Scheduling
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
            className="text-base max-w-2xl mx-auto"
            style={{ color: "oklch(0.72 0.02 255)" }}
          >
            Pricing varies based on the type of service, frequency, and duration. Contact me to discuss your specific needs and get a customized quote. I offer flexible scheduling to fit your academic calendar and commitments.
          </motion.p>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: "oklch(0.99 0.002 90)" }}>
        <div className="container text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-3xl md:text-4xl font-black mb-6"
            style={{ fontFamily: "Montserrat, sans-serif", color: "oklch(0.15 0.05 255)" }}
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
            className="text-lg mb-8 max-w-xl mx-auto"
            style={{ color: "oklch(0.45 0.03 255)" }}
          >
            Book a consultation to discuss your goals and find the right tutoring service for you.
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
                Get in Touch
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
