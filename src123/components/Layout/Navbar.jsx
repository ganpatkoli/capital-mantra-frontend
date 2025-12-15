// components/Layout/Navbar.jsx
"use client";

import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { NAV_LINKS } from '../../data/Data';

const Navbar = ({ goHome }) => {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-950/80">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
                {/* Logo (Home button) */}
                <a href="#hero" onClick={goHome} className="flex items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 ring-1 ring-emerald-400/40">
                        <span className="text-lg font-black tracking-tight text-emerald-600 dark:text-emerald-400">
                            ₹
                        </span>
                    </div>
                    <div className="flex flex-col leading-tight">
                        <span className="text-sm font-semibold tracking-wide text-slate-900 dark:text-slate-100">
                            FinIPO Hub
                        </span>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400">
                            Blogs • IPOs • Insights
                        </span>
                    </div>
                </a>

                {/* Desktop Nav */}
                <div className="hidden items-center gap-8 md:flex">
                    <div className="flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="relative transition hover:text-emerald-600 dark:hover:text-emerald-400"
                            >
                                {link.label}
                                <span className="absolute inset-x-0 -bottom-1 h-px scale-x-0 bg-gradient-to-r from-emerald-400 to-cyan-400 transition-transform duration-200 group-hover:scale-x-100" />
                            </a>
                        ))}
                    </div>
                    <ThemeToggle />
                    <a
                        href="#newsletter"
                        className="rounded-full bg-emerald-500 px-4 py-1.5 text-sm font-semibold text-emerald-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
                    >
                        Get IPO Alerts
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-2 md:hidden">
                    <ThemeToggle />
                    <button
                        onClick={() => setOpen((p) => !p)}
                        className="inline-flex items-center justify-center rounded-lg border border-slate-300 p-2 text-slate-800 dark:border-slate-700 dark:text-slate-200"
                        aria-label="Toggle navigation"
                    >
                        <span className="sr-only">Toggle navigation</span>
                        <div className="relative h-4 w-5">
                            <span
                            className={`absolute inset-x-0 top-0 h-0.5 origin-center rounded-full bg-slate-800 dark:bg-slate-200 transition-transform duration-200 ${
                                open ? "translate-y-1.5 rotate-45" : ""
                            }`}
                            />
                            <span
                            className={`absolute inset-x-0 top-1.5 h-0.5 rounded-full bg-slate-800 dark:bg-slate-200 transition-opacity duration-200 ${
                                open ? "opacity-0" : "opacity-100"
                            }`}
                            />
                            <span
                            className={`absolute inset-x-0 top-3 h-0.5 origin-center rounded-full bg-slate-800 dark:bg-slate-200 transition-transform duration-200 ${
                                open ? "-translate-y-1.5 -rotate-45" : ""
                            }`}
                            />
                        </div>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {open && (
                <div className="border-t border-slate-200/70 bg-white/95 backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-950/95 md:hidden">
                    <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-3">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="rounded-lg px-2 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800/70"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="#newsletter"
                            onClick={() => setOpen(false)}
                            className="mt-1 rounded-full bg-emerald-500 px-4 py-2 text-center text-sm font-semibold text-emerald-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
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