// components/Layout/Footer.jsx
import React from 'react';

const Footer = () => {
    return (
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
    );
};

export default Footer;