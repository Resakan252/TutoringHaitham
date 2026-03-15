/**
 * HTM Tutors — Footer Component
 * Design: "Structured Clarity" — Swiss Typographic Style
 * Deep navy background, organized columns, cobalt accents
 */
import { Link } from "wouter";
import { Mail, Phone, MapPin, BookOpen } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "oklch(0.24 0.01 0)", color: "oklch(0.85 0.01 255)" }}>
      {/* Main Footer */}
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <span
                className="text-white font-black text-xl"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                HTM Tutors
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "oklch(0.65 0.02 255)" }}>
              Over 10 years helping high school and university students improve their grades and confidence in mathematics, statistics, and finance.
            </p>
            <div className="flex flex-col gap-2 text-sm" style={{ color: "oklch(0.65 0.02 255)" }}>
              <a href="mailto:info@htmtutors.ca" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={14} />
                info@htmtutors.ca
              </a>
              <a href="tel:+1-416-000-0000" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone size={14} />
                (416) 000-0000
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={14} />
                Toronto, Ontario, Canada
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 tracking-wide uppercase" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Services
            </h4>
            <ul className="flex flex-col gap-2 text-sm" style={{ color: "oklch(0.65 0.02 255)" }}>
              {[
                "High School Math Tutoring",
                "University Math & Statistics",
                "Finance & Accounting",
                "Online Tutoring",
                "In-Person Tutoring",
              ].map((s) => (
                <li key={s}>
                  <Link href="/services">
                    <span className="hover:text-white transition-colors">{s}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 tracking-wide uppercase" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2 text-sm" style={{ color: "oklch(0.65 0.02 255)" }}>
              {[
                { href: "/", label: "Home" },
                { href: "/tutors", label: "Our Tutors" },
                { href: "/testimonials", label: "Testimonials" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>
                    <span className="hover:text-white transition-colors">{l.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Subjects */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 tracking-wide uppercase" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Subjects
            </h4>
            <ul className="flex flex-col gap-2 text-sm" style={{ color: "oklch(0.65 0.02 255)" }}>
              {[
                "Calculus & Vectors",
                "Linear Algebra",
                "Statistics",
                "Data Management",
                "Corporate Finance",
                "Quantitative Methods",
              ].map((s) => (
                <li key={s} className="flex items-center gap-2">
                  <BookOpen size={12} style={{ color: "oklch(0.52 0.22 264)" }} />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: "1px solid oklch(0.35 0.01 0)" }}>
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs" style={{ color: "oklch(0.50 0.02 255)" }}>
          <span>© {new Date().getFullYear()} HTM Tutors. All rights reserved.</span>
          <span>Math Tutor Toronto · Statistics Tutor GTA · University Math Tutoring</span>
        </div>
      </div>
    </footer>
  );
}
