"use client";

import React, { useState, useMemo, useRef } from "react";
import Head from 'next/head';
import {
  Zap, ShieldCheck, TrendingUp, Search, Target, Award, BookOpen,
  ChevronRight, Scale, Layers, Info, CheckCircle2, AlertCircle,
  ArrowUpRight, Sparkles, Receipt, IndianRupee, Activity,
  ThumbsUp, ThumbsDown, Globe, Briefcase, Landmark, Lightbulb, GraduationCap,
  LineChart, PieChart, BarChart3, ChevronDown
} from 'lucide-react';
import { data } from "./calculatorData"

// --- Sub-Calculator Imports ---
import SIPCalculator from "../../Calculators/SubCalculators/SIPCalculator";
import LumpsumCalculator from "../../Calculators/SubCalculators/LumpsumCalculator";
import IpoProfitCalculator from "../../Calculators/SubCalculators/IpoProfitCalculator";
import GoalCalculator from "../../Calculators/SubCalculators/GoalCalculator";
import RetirementCalculator from "../../Calculators/SubCalculators/RetirementCalculator";
import EMICalculator from "../../Calculators/SubCalculators/EMICalculator";
import EPFCalculator from "../../Calculators/SubCalculators/EPFCalculator";
import FDCalculator from "../../Calculators/SubCalculators/FDCalculator";
import TaxFDCalculator from "../../Calculators/SubCalculators/TaxFDCalculator";
import ReverseSIPCalculator from "../../Calculators/SubCalculators/ReverseSIPCalculator";
import CAGRCalculator from "../../Calculators/SubCalculators/CAGRCalculator";
import GoldInvestmentCalculator from "../../Calculators/SubCalculators/GoldInvestmentCalculator";
import GsecBondCalculator from "../../Calculators/SubCalculators/GsecBondCalculator";
import PPFCalculator from "../../Calculators/SubCalculators/PPFCalculator";
import BrokerageCalculator from "../../Calculators/SubCalculators/BrokerageCalculator";

const contentData = data

const CalculatorSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCalculator, setActiveCalculator] = useState("sip");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const guideRef = useRef(null);

  const CALCULATOR_OPTIONS = useMemo(() => [
    { id: 'sip', label: 'SIP Calculator', icon: LineChart, category: 'Investment', component: SIPCalculator },
    { id: 'brokerage', label: 'Brokerage & Tax', icon: Receipt, category: 'Trading', component: BrokerageCalculator },
    // { id: 'lumpsum', label: 'Lumpsum Pro', icon: IndianRupee, category: 'Investment', component: LumpsumCalculator },
    { id: 'goal', label: 'Goal Planner', icon: Target, category: 'Planning', component: GoalCalculator },
    { id: 'retirement', label: 'Retirement', icon: TrendingUp, category: 'Planning', component: RetirementCalculator },
    { id: 'emi', label: 'Loan EMI', icon: Activity, category: 'Banking', component: EMICalculator },
    { id: 'ppf', label: 'PPF Safe', icon: ShieldCheck, category: 'Tax Saving', component: PPFCalculator },
    { id: 'fd', label: 'FD Interest', icon: Layers, category: 'Banking', component: FDCalculator },
    { id: 'gold', label: 'Gold Value', icon: Award, category: 'Investment', component: GoldInvestmentCalculator },
    { id: 'ipo', label: 'IPO Gain', icon: ArrowUpRight, category: 'Investment', component: IpoProfitCalculator },
    { id: 'cagr', label: 'CAGR Tool', icon: BarChart3, category: 'Investment', component: CAGRCalculator },
    { id: 'epf', label: 'EPF Tracker', icon: Briefcase, category: 'Retirement', component: EPFCalculator },
    { id: 'taxfd', label: 'Tax FD', icon: Landmark, category: 'Tax Saving', component: TaxFDCalculator },
    { id: 'swp', label: 'SWP Pension', icon: PieChart, category: 'Retirement', component: ReverseSIPCalculator },
    { id: 'gsec', label: 'G-Sec Bonds', icon: Globe, category: 'Investment', component: GsecBondCalculator },
  ], []);

  const filteredOptions = CALCULATOR_OPTIONS.filter(opt =>
    opt.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const current = contentData[activeCalculator] || contentData.sip;
  const ActiveComponent = CALCULATOR_OPTIONS.find(opt => opt.id === activeCalculator)?.component;
  const ActiveIcon = CALCULATOR_OPTIONS.find(opt => opt.id === activeCalculator)?.icon || LineChart;

  const jsonLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": current.title,
    "description": current.what,
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "All",
    "offers": { "@type": "Offer", "price": "0" }
  }), [current]);

  return (
    <div className="bg-[#f8fafc] mt-15 dark:bg-[#020617] min-h-screen transition-all duration-500 text-slate-900 dark:text-slate-100 pb-16">
      <Head>
        <title>{current.title} - Free Financial Tool 2025</title>
        <meta name="description" content={current.what.substring(0, 160)} />
      </Head>

      <main className="max-w-[1440px] mx-auto px-4 py-8 grid lg:grid-cols-12 gap-8 relative">
        
        {/* --- SIDEBAR & MOBILE DROPDOWN --- */}
        <aside className="lg:col-span-3 z-[50]">
          <div className="sticky top-24 space-y-6">
            
            {/* Mobile Dropdown Trigger */}
            <div className="lg:hidden relative">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full bg-white dark:bg-slate-900 border-2 border-emerald-500 rounded-2xl p-4 flex items-center justify-between shadow-lg relative z-[60]"
              >
                <div className="flex items-center gap-3">
                  <ActiveIcon className="w-6 h-6 text-emerald-500" />
                  <div className="text-left">
                    <p className="text-[10px] font-black uppercase text-slate-400 leading-none mb-1">Current Tool</p>
                    <p className="text-sm font-bold text-emerald-600">{current.title.split('-')[0]}</p>
                  </div>
                </div>
                <ChevronDown className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Mobile Dropdown Menu - Added z-[1000] and absolute top for visibility */}
              {isDropdownOpen && (
                <>
                  {/* Overlay to close when clicking outside */}
                  <div className="fixed inset-0 z-[70]" onClick={() => setIsDropdownOpen(false)}></div>
                  
                  <div className="absolute z-[1000] top-full left-0 right-0 mt-3 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-2xl shadow-2xl max-h-[50vh] overflow-y-auto p-2 space-y-1 ring-4 ring-black/5 animate-in fade-in slide-in-from-top-2">
                    {CALCULATOR_OPTIONS.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => {
                          setActiveCalculator(tab.id);
                          setIsDropdownOpen(false);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className={`flex items-center gap-3 p-4 rounded-xl w-full text-left transition-all ${
                          activeCalculator === tab.id 
                            ? "bg-emerald-500 text-white shadow-md" 
                            : "hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300"
                        }`}
                      >
                        <tab.icon size={20} className={activeCalculator === tab.id ? "text-white" : "text-emerald-500"} />
                        <span className="text-[13px] font-black uppercase tracking-tight">{tab.label}</span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Desktop Sidebar */}
            <div className="hidden lg:block space-y-6">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={18} />
                <input
                  type="text" placeholder="Search toolkit..."
                  className="w-full bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-2xl py-4 pl-12 pr-4 text-xs font-black focus:border-blue-500 outline-none shadow-sm transition-all"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <nav className="space-y-2 max-h-[75vh] overflow-y-auto no-scrollbar pb-10">
                {filteredOptions.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveCalculator(tab.id)}
                    className={`flex items-center gap-4 px-5 py-4 rounded-xl font-black text-[11px] uppercase tracking-widest transition-all w-full border-2 ${
                      activeCalculator === tab.id ? "bg-emerald-500 text-white border-emerald-500 shadow-xl translate-x-1" : "bg-white dark:bg-slate-900 border-transparent hover:border-slate-100 dark:hover:border-slate-800"
                    }`}
                  >
                    <tab.icon className="w-5 h-5 shrink-0" />
                    <div className="text-left">
                      <p className="leading-none mb-1 text-[12px] font-semibold">{tab.label}</p>
                      <span className="text-[10px] opacity-60 font-semibold uppercase">{tab.category}</span>
                    </div>
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </aside>

        {/* --- MAIN CONTENT --- */}
        <div className="lg:col-span-9 space-y-5 relative z-[10]">
          <header className="bg-slate-900 rounded-xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="space-y-2">
                <span className="text-emerald-500 text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-2 mb-2">
                  <Globe size={14} /> Intelligence Engine
                </span>
                <h1 className="text-3xl md:text-3xl font-black uppercase leading-none">
                  {current.title}
                </h1>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-5 rounded-3xl border border-white/10 flex items-center gap-3">
                <Landmark size={20} className="text-emerald-400" />
                <p className="text-emerald-400 font-black text-sm uppercase tracking-tighter">FY 2025 Ready</p>
              </div>
            </div>
          </header>

          <section className="relative z-[20]">
            {ActiveComponent ? <ActiveComponent /> : <div className="p-20 text-center font-black opacity-20 uppercase tracking-widest text-slate-400">Loading Module...</div>}
          </section>

          {/* Technical Specs & Formula */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden">
              <div className="bg-slate-50 dark:bg-slate-800/50 px-8 py-6 border-b dark:border-slate-800 flex justify-between items-center">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-500 flex items-center gap-2">
                  <Scale size={16} /> Technical Specs
                </h3>
              </div>
              <div className="divide-y dark:divide-slate-800">
                {current.specs?.map((spec, idx) => (
                  <div key={idx} className="flex justify-between items-center px-8 py-5 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/10 transition-colors">
                    <span className="text-[11px] font-black uppercase text-slate-400">{spec.feature}</span>
                    <span className="text-xs font-black uppercase">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-950 rounded-xl p-8 text-white border border-slate-800 shadow-2xl flex flex-col justify-between">
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-widest text-emerald-500 mb-8 flex items-center gap-2">
                  <Zap size={14} className="fill-current" /> Computational Model
                </h3>
                <div className="bg-white/5 p-6 rounded-xl border border-white/10 text-center mb-8">
                  <code className="text-lg font-mono font-bold text-emerald-400 tracking-tighter block leading-relaxed">{current.formula}</code>
                </div>
              </div>
              <div className="space-y-3">
                {current.variables?.map((v, i) => (
                  <div key={i} className="flex justify-between text-[10px] font-bold border-b border-white/5 pb-2">
                    <span className="text-emerald-500">{v.k}</span>
                    <span className="text-slate-400 uppercase tracking-tight">{v.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Educational Insights */}
          <section ref={guideRef} className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm space-y-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-2xl font-black uppercase italic tracking-tight text-blue-600 flex items-center gap-3">
                  <Info size={24} /> What is this?
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg font-medium border-l-4 border-blue-500 pl-6 italic">
                  {current.what}
                </p>
              </div>
              <div className="space-y-6">
                <h2 className="text-2xl font-black uppercase italic tracking-tight text-emerald-600 flex items-center gap-3">
                  <Target size={24} /> Why use this?
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg font-medium">
                  {current.why}
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="max-w-7xl mx-auto px-4 py-12 border-t dark:border-slate-800 text-center text-slate-400 font-bold uppercase tracking-[0.4em] text-[10px]">
        Wealth Intelligence Terminal &copy; 2025
      </footer>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        ::selection { background: #10b981; color: white; }
      `}</style>
    </div>
  );
};

export default CalculatorSection;