// components/Navbar.jsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/destinations", label: "Destinations" },
  { href: "/experiences", label: "Experiences" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[70px] flex items-center justify-between px-10 transition-all duration-500
          ${scrolled
            ? "bg-[#0F0D0B]/75 border-b border-[#C9A84C]/10 backdrop-blur-md"
            : "bg-[#0F0D0B]/92 border-b border-[#C9A84C]/20 backdrop-blur-sm"
          }`}
      >
        {/* Logo */}
        <Link href="/" className="font-serif text-[30px] text-[#F5F0E8] tracking-wide shrink-0">
          Wander<em className="text-[#C9A84C] italic">lux</em>
        </Link>

        {/* Center Links */}
        <ul className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-10 list-none">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-[11px] tracking-[0.12em] uppercase transition-colors duration-200 relative group
                  ${pathname === href ? "text-[#C9A84C]" : "text-[#6B6860] hover:text-[#E8DFD0]"}`}
              >
                {label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-[#C9A84C] transition-all duration-300
                    ${pathname === href ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-5">
          {/* Search icon */}
          <button className="text-[#6B6860] hover:text-[#E8DFD0] transition-colors" aria-label="Search">
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.35-4.35" strokeLinecap="square" />
            </svg>
          </button>

          {/* CTA */}
          <Link href="/plan">
            <button className="border border-[#C9A84C]/50 text-[#C9A84C] px-5 py-2 text-[11px] font-medium tracking-[0.12em] uppercase transition-all duration-300 hover:bg-[#C9A84C] hover:text-[#0F0D0B] hover:border-[#C9A84C]">
              Plan Trip
            </button>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-px bg-[#E8DFD0] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
          <span className={`block w-6 h-px bg-[#E8DFD0] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-[#E8DFD0] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#0F0D0B] flex flex-col justify-center px-10 transition-all duration-500 md:hidden
          ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <ul className="flex flex-col gap-8 list-none">
          {navLinks.map(({ href, label }, i) => (
            <li key={href} style={{ transitionDelay: menuOpen ? `${i * 60}ms` : "0ms" }}
              className={`transition-all duration-500 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <Link
                href={href}
                onClick={() => setMenuOpen(false)}
                className="font-serif text-4xl font-normal text-[#F5F0E8] hover:text-[#C9A84C] transition-colors italic"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-12">
          <Link href="/plan" onClick={() => setMenuOpen(false)}>
            <button className="border border-[#C9A84C]/50 text-[#C9A84C] px-8 py-3 text-[11px] tracking-[0.15em] uppercase hover:bg-[#C9A84C] hover:text-[#0F0D0B] transition-all">
              Plan My Trip
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;