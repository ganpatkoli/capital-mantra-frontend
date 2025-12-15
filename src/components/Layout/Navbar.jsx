"use client";

import React, { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { NAV_LINKS } from "../../data/Data";
import Image from "next/image";

const Navbar = ({ goHome }) => {
  // ---------- STABLE HOOK ORDER ----------
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState("#hero");
  const [searchOpen, setSearchOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // fix hydration mismatch
  useEffect(() => setMounted(true), []);

  // ---------- SCROLL LOGIC ----------
  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const current = window.scrollY;

      setScrolled(current > 10);

      if (current > lastScroll && current > 80) {
        setHidden(true); // navbar hides
      } else {
        setHidden(false);
      }

      lastScroll = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ---------- ACTIVE LINK TRACKER ----------
  useEffect(() => {
    const updateActive = () => {
      setActive(window.location.hash || "#hero");
    };

    window.addEventListener("hashchange", updateActive);
    updateActive();

    return () => window.removeEventListener("hashchange", updateActive);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <header className="fixed w-full top-0 z-50 backdrop-blur-xl bg-white/0 dark:bg-slate-900/0 h-16" />
    );
  }

  return (
    <header
      className={`
        fixed w-full top-0 z-50 transition-transform duration-300
        ${hidden ? "-translate-y-full" : "translate-y-0"}
        backdrop-blur-xl
        ${
          scrolled
            ? "bg-white/70 dark:bg-slate-950/70 shadow-lg border-b border-slate-200/20 dark:border-slate-800/20"
            : "bg-transparent border-b border-transparent"
        }
      `}
    >
      {/* ------------------------------------------------ NAVBAR MAIN ------------------------------------------------ */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">

        {/* ---------------------- LOGO ---------------------- */}
        <div
          onClick={goHome}
          className="flex items-center gap-3 group cursor-pointer select-none"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-400/40 group-hover:scale-110 transition-transform">
            <Image
              src="/Favicon.svg"
              alt="logo"
              width={40}
              height={40}
              className="w-[26px]"
            />
          </div>

          <div className="flex flex-col">
            <Image
              src="/logo1.svg"
              alt="FinIPO Hub"
              width={150}
              height={40}
              className="w-[140px] group-hover:opacity-80 transition"
            />
            <span className="text-[11px] text-slate-500 dark:text-slate-400 tracking-wide">
              Blogs • IPOs • Insights
            </span>
          </div>
        </div>

        {/* ---------------------- DESKTOP NAV ---------------------- */}
        <div className="hidden md:flex items-center gap-10">

          {/* SEARCH BUTTON + FIELD */}
          <div className="relative">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-slate-600 dark:text-slate-300 hover:text-emerald-500 transition"
            >
              <span aria-hidden="true">🔍</span>
            </button>

            <input
              type="text"
              placeholder="Search IPOs..."
              className={`
                absolute right-0 top-8 px-3 py-2 w-48 rounded-lg 
                bg-white/90 dark:bg-slate-900/90 shadow-md 
                border border-slate-200 dark:border-slate-700 text-sm
                transition-all duration-300
                ${
                  searchOpen
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 pointer-events-none"
                }
              `}
            />
          </div>

          {/* NAV LINKS */}
          <div className="flex items-center gap-6 text-sm font-medium text-slate-700 dark:text-slate-300">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="relative group transition">
                <span className={`${active === link.href ? "text-emerald-500" : ""}`}>
                  {link.label}
                </span>

                <span
                  className={`
                    absolute left-0 -bottom-1 h-[2px] rounded-full transition-all duration-300
                    ${
                      active === link.href
                        ? "w-full bg-emerald-500"
                        : "w-0 bg-emerald-500 group-hover:w-full"
                    }
                  `}
                />
              </a>
            ))}
          </div>

          {/* THEME BUTTON */}
          <ThemeToggle />

          {/* ALERT BUTTON */}
          <a
            href="#newsletter"
            className="relative rounded-full bg-emerald-500 px-6 py-2 text-sm font-semibold text-white shadow-md hover:bg-emerald-400 transition"
          >
            Get IPO Alerts
            <span className="absolute -right-2 -top-2 h-3 w-3 bg-emerald-400 rounded-full animate-ping" />
            <span className="absolute -right-2 -top-2 h-3 w-3 bg-emerald-600 rounded-full" />
          </a>
        </div>

        {/* ---------------------- MOBILE MENU BUTTON ---------------------- */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />

          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition"
          >
            {open ? "✖" : "☰"}
          </button>
        </div>
      </nav>

      {/* ---------------------- MOBILE MENU ---------------------- */}
      {open && (
        <div className="md:hidden border-t bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl transition-all">
          <div className="flex flex-col px-4 py-3 gap-2">

            {/* MOBILE SEARCH */}
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white/90 dark:bg-slate-900/90 text-sm"
            />

            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-lg text-sm text-slate-800 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800/70 transition"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#newsletter"
              className="mt-2 rounded-full bg-emerald-500 px-5 py-2 text-center text-sm font-semibold text-white hover:bg-emerald-400 transition"
            >
              Get IPO Alerts
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
