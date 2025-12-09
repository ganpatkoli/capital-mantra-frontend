// components/Layout/Footer.jsx
import React, { useMemo } from 'react';
import AnimatedSection from '../Modules/AnimationWeb';

const Footer = () => {
    const links = useMemo(() => [
        {
            title: "IPO Information",
            items: [
                { label: "Upcoming IPOs", href: "#ipos" },
                { label: "Ongoing IPOs", href: "#ipos" },
                { label: "Recent Listings", href: "#ipos" },
                { label: "GMP Tracking", href: "#ipos" },
            ],
        },
        {
            title: "Financial Education",
            items: [
                { label: "Investing 101", href: "#blogs" },
                { label: "Mutual Funds", href: "#blogs" },
                { label: "Taxes & Regulations", href: "#blogs" },
                { label: "Market News", href: "#blogs" },
            ],
        },
        {
            title: "Tools & Calculators",
            items: [
                { label: "SIP Calculator", href: "#calculators" },
                { label: "EMI Calculator", href: "#calculators" },
                { label: "Retirement Planner", href: "#calculators" },
                { label: "Contact Us", href: "#about" },
            ],
        },
    ], []);
    return (

        <>

            <AnimatedSection animationClass="translate-y-10" rootMargin='-50px 0px'>
                <div className="border-t border-slate-200/70 py-10 dark:border-slate-800/70 bg-white dark:bg-slate-900">
                    <div className="mx-auto max-w-6xl px-4 sm:px-6">
                        {/* Updated grid layout since one column (Newsletter) is removed */}
                        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                            {links.map((section, index) => (
                                <div key={index}>
                                    <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-50 mb-3 uppercase tracking-wider">
                                        {section.title}
                                    </h4>
                                    <ul className="space-y-2 text-sm">
                                        {section.items.map((item, itemIndex) => (
                                            <li key={itemIndex}>
                                                <a href={item.href} className="text-slate-600 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400 transition">
                                                    {item.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                            {/* Final CTA in Footer */}
                            <div className="col-span-2 md:col-span-1">
                                <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-50 mb-3 uppercase tracking-wider">
                                    Start Your Capital Mantra Journey
                                </h4>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                                    Explore our comprehensive IPO data and expert blogs.
                                </p>
                                <a
                                    href="#ipos"
                                    className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-emerald-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400">
                                    View IPO Dashboard
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            <footer className="bg-slate-100 py-6 text-[11px] text-slate-600 dark:bg-slate-950 dark:text-slate-500">
                <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                    <p>
                        © {new Date().getFullYear()} FinIPO Hub. For education only — not
                        investment advice.
                    </p>
                    <div className="flex flex-wrap items-center gap-3">
                        <a href="#" className="hover:text-slate-800 dark:hover:text-slate-300">
                            Disclaimer
                        </a>
                        <span className="hidden text-slate-400 sm:inline dark:text-slate-600">•</span>
                        <a href="#" className="hover:text-slate-800 dark:hover:text-slate-300">
                            Privacy Policy
                        </a>
                        <span className="hidden text-slate-400 sm:inline dark:text-slate-600">•</span>
                        <span className="text-slate-500">
                            Built with <span className="text-emerald-500 dark:text-emerald-400">React</span> &
                            <span className="text-emerald-500 dark:text-emerald-400"> Tailwind CSS</span>
                        </span>
                    </div>
                </div>
            </footer>

        </>

    );
};

export default Footer;