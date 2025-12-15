// components/Calculators/CalculatorSection.jsx
"use client";

import React, { useState, useMemo } from "react";

// Import all sub-calculators
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
        { id: 'ipo', label: 'IPO Profit Estimator', component: IpoProfitCalculator, icon: ' IPO' },
        { id: 'gold', label: 'Gold Future Value', component: GoldInvestmentCalculator, icon: '🥇' },
        { id: 'gsec', label: 'G-Sec Bond Planner', component: GsecBondCalculator, icon: '🏛️' },
    ], []);
    
    // Default to the first calculator
    const [activeCalculator, setActiveCalculator] = useState(CALCULATOR_OPTIONS[0].id);

    const ActiveComponent = CALCULATOR_OPTIONS.find(opt => opt.id === activeCalculator)?.component || SIPCalculator;


    return (
        <section
            id="calculators"
            className="border-b border-slate-200/70 bg-slate-50 py-12 sm:py-16 dark:border-slate-800/70 dark:bg-slate-950"
        >
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    
                    {/* LEFT COLUMN: Titles (List Format) */}
                    <div className="lg:col-span-1 border-r border-slate-200 dark:border-slate-800 lg:pr-6">
                        <h2 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 mb-4">
                            Popular Calculators
                        </h2>
                        
                        <nav className="space-y-1">
                            {CALCULATOR_OPTIONS.map((opt) => (
                                <button
                                    key={opt.id}
                                    onClick={() => setActiveCalculator(opt.id)}
                                    className={`w-full text-left rounded-lg px-4 py-3 text-sm transition duration-150 flex items-center ${
                                        activeCalculator === opt.id
                                            ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 font-semibold"
                                            : "text-slate-700 hover:bg-slate-200/50 dark:text-slate-300 dark:hover:bg-slate-800"
                                    }`}
                                >
                                    <span className="mr-3 text-lg">
                                        {opt.icon}
                                    </span>
                                    {opt.label}
                                </button>
                            ))}
                        </nav>
                        
                        <p className="mt-8 text-xs text-slate-500">
                            उपलब्ध कैलकुलेटर में से चुनें और अपनी निवेश योजना बनाएं।
                        </p>
                    </div>

                    {/* RIGHT COLUMN: Active Calculator */}
                    <div className="lg:col-span-3">
                        <ActiveComponent />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CalculatorSection;