"use client";

import React, { useState, useMemo } from "react";

// Import sub-calculators
import SIPCalculator from "./SubCalculators/SIPCalculator";
import LumpsumCalculator from "./SubCalculators/LumpsumCalculator";
import IpoProfitCalculator from "./SubCalculators/IpoProfitCalculator";
import GoalCalculator from "./SubCalculators/GoalCalculator";
import RetirementCalculator from "./SubCalculators/RetirementCalculator";
import EMICalculator from "./SubCalculators/EMICalculator";
import EPFCalculator from "./SubCalculators/EPFCalculator";
import FDCalculator from "./SubCalculators/FDCalculator";
import TaxFDCalculator from "./SubCalculators/TaxFDCalculator";
import ReverseSIPCalculator from "./SubCalculators/ReverseSIPCalculator";
import CAGRCalculator from "./SubCalculators/CAGRCalculator";
import GoldInvestmentCalculator from "./SubCalculators/GoldInvestmentCalculator";
import GsecBondCalculator from "./SubCalculators/GsecBondCalculator";
import PPFCalculator from "./SubCalculators/PPFCalculator";

const CalculatorSection = () => {
    const CALCULATOR_OPTIONS = useMemo(() => [
        { id: 'sip', label: 'SIP Calculator', component: SIPCalculator, icon: '📈' },
        { id: 'lumpsum', label: 'Lumpsum Calculator', component: LumpsumCalculator, icon: '💰' },
        { id: 'goal', label: 'Goal SIP Planner', component: GoalCalculator, icon: '🎯' },
        { id: 'retirement', label: 'Retirement Planner', component: RetirementCalculator, icon: '🏖️' },
        { id: 'emi', label: 'EMI Calculator', component: EMICalculator, icon: '💳' },
        { id: 'cagr', label: 'CAGR Calculator', component: CAGRCalculator, icon: '📊' },
        { id: 'ppf', label: 'PPF Calculator', component: PPFCalculator, icon: '🔒' },
        { id: 'epf', label: 'EPF Calculator', component: EPFCalculator, icon: '💼' },
        { id: 'fd', label: 'FD Calculator', component: FDCalculator, icon: '🗓️' },
        { id: 'taxfd', label: 'Tax Saving FD', component: TaxFDCalculator, icon: '🏦' },
        { id: 'swp', label: 'Reverse SIP / SWP', component: ReverseSIPCalculator, icon: '💸' },
        { id: 'ipo', label: 'IPO Profit Estimator', component: IpoProfitCalculator, icon: '📈' },
        { id: 'gold', label: 'Gold Future Value', component: GoldInvestmentCalculator, icon: '🥇' },
        { id: 'gsec', label: 'G-Sec Bond Planner', component: GsecBondCalculator, icon: '🏛️' },
    ], []);
    
    const [activeCalculator, setActiveCalculator] = useState(CALCULATOR_OPTIONS[0].id);

    const ActiveComponent = CALCULATOR_OPTIONS.find(opt => opt.id === activeCalculator)?.component || SIPCalculator;

    return (
        <section
            id="calculators"
            className="border-b border-slate-200/70 bg-slate-50 py-8 sm:py-12 dark:border-slate-800/70 dark:bg-slate-950"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                
                {/* ---------- LAYOUT WRAPPER ---------- */}
                <div className="flex flex-col md:flex-row gap-8">
                    
                    {/* LEFT SIDEBAR: Navigation Area */}
                    <aside className="w-full md:w-1/4 lg:w-1/5">
                        <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-50 mb-6 text-center md:text-left">
                            Calculators
                        </h2>

                        {/* MOBILE VIEW: Dropdown Selector */}
                        <div className="sm:hidden mb-6">
                            <select
                                value={activeCalculator}
                                onChange={(e) => setActiveCalculator(e.target.value)}
                                className="w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-900 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 font-medium"
                            >
                                {CALCULATOR_OPTIONS.map((opt) => (
                                    <option key={opt.id} value={opt.id}>
                                        {opt.icon} {opt.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* DESKTOP VIEW: Sidebar List */}
                        <div className="hidden sm:flex flex-col gap-2">
                            {CALCULATOR_OPTIONS.map((opt) => (
                                <button
                                    key={opt.id}
                                    onClick={() => setActiveCalculator(opt.id)}
                                    className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 border text-left ${
                                        activeCalculator === opt.id
                                            ? "bg-emerald-600 text-white border-emerald-600 shadow-md translate-x-1"
                                            : "bg-white text-slate-600 border-slate-200 hover:border-emerald-500 hover:bg-slate-50 dark:bg-slate-900 dark:text-slate-400 dark:border-slate-800 dark:hover:bg-slate-800/50"
                                    }`}
                                >
                                    <span className="text-lg">{opt.icon}</span>
                                    <span className="truncate">{opt.label}</span>
                                </button>
                            ))}
                        </div>
                    </aside>

                    {/* RIGHT SIDE: Active Calculator Display Area */}
                    <main className="w-full md:w-3/4 lg:w-4/5">
                        <div className="bg-white dark:bg-slate-900 rounded-3xl p-2 md:p-6 shadow-xl border border-slate-200 dark:border-slate-800 min-h-[500px] transition-all duration-300">
                            <ActiveComponent />
                        </div>
                    </main>

                </div>
            </div>
        </section>
    );
};

export default CalculatorSection;