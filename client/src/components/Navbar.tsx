/**
 * HTM Tutors — Navbar Component
 * Design: "Structured Clarity" — Swiss Typographic Style
 * Deep navy background, white text, cobalt CTA
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/tutors", label: "Tutors" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "oklch(0.12 0.05 255 / 0.98)" : "oklch(0.12 0.05 255)",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 2px 20px oklch(0 0 0 / 0.3)" : "none",
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 group">
              <span
                className="font-black text-lg tracking-tight"
                style={{ fontFamily: "Montserrat, sans-serif", color: "oklch(0.68 0.15 35)" }}
              >
                HTM Tutors
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location === link.href;
              return (
                <Link key={link.href} href={link.href}>
                  <span
                    className="px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      color: isActive ? "oklch(0.68 0.15 35)" : "oklch(0.85 0.01 255)",
                      backgroundColor: isActive ? "oklch(0.68 0.15 35 / 0.12)" : "transparent",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                  (e.target as HTMLElement).style.color = "white";
                  (e.target as HTMLElement).style.backgroundColor = "oklch(0.68 0.15 35 / 0.08)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                  (e.target as HTMLElement).style.color = "oklch(0.85 0.01 255)";
                  (e.target as HTMLElement).style.backgroundColor = "transparent";
                      }
                    }}
                  >
                    {link.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/contact">
              <span
                className="text-sm px-4 py-2 rounded-md font-semibold border-2 transition-all duration-200 inline-flex items-center"
                style={{
                  borderColor: "oklch(0.68 0.15 35 / 0.6)",
                  color: "oklch(0.75 0.12 35)",
                  background: "transparent",
                  fontFamily: "Montserrat, sans-serif",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.backgroundColor = "oklch(0.68 0.15 35 / 0.15)";
                  el.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.backgroundColor = "transparent";
                  el.style.color = "oklch(0.75 0.12 35)";
                }}
              >
                Contact Us
              </span>
            </Link>
            <Link href="/contact">
              <span className="btn-primary text-sm px-4 py-2">Book a Session</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t"
          style={{
            backgroundColor: "oklch(0.12 0.05 255)",
            borderColor: "oklch(0.25 0.06 255)",
          }}
        >
          <div className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = location === link.href;
              return (
                <Link key={link.href} href={link.href}>
                  <span
                    className="block px-4 py-3 rounded-md text-sm font-medium transition-colors"
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      color: isActive ? "oklch(0.72 0.18 264)" : "oklch(0.85 0.01 255)",
                      backgroundColor: isActive ? "oklch(0.52 0.22 264 / 0.12)" : "transparent",
                    }}
                  >
                    {link.label}
                  </span>
                </Link>
              );
            })}
            <div className="mt-4 flex flex-col gap-2">
              <Link href="/contact">
                <span className="btn-primary w-full text-center block">Book a Session</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
