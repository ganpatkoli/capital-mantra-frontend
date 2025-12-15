import React from 'react'
import AnimatedSection from './AnimationWeb';

const CalculatorSection = () => {
    const CALCULATOR_LIST = [
        {
            title: "SIP Return Calculator",
            icon: "📊",
            description: "Calculate how much your investment will grow over time through a Systematic Investment Plan (SIP). Understand the power of compound interest."
        },
        {
            title: "Lump Sum Investment Calculator",
            icon: "📈",
            description: "Estimate future returns and maturity value on a one-time (Lump Sum) investment. Set your financial goals."
        },
        {
            title: "Retirement Corpus Planner",
            icon: "👴",
            description: "Find out how much capital (corpus) you will need for retirement and how much you should start saving today."
        },
        {
            title: "Loan EMI Calculator",
            icon: "🏠",
            description: "Accurately calculate the monthly installment (EMI) for your Home, Car, or Personal Loan. Simplify your budget."
        },
    ];

    return (
        <AnimatedSection animationClass="translate-y-10" rootMargin='-150px 0px'>
            <section
                id="calculators"
                className="py-12 sm:py-16 bg-white dark:bg-slate-900 border-b border-slate-200/70 dark:border-slate-800/70"
            >
                <div className="mx-auto max-w-6xl px-4 sm:px-6">
                    <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
                        <span className="inline-flex items-center gap-2 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-fuchsia-600 dark:text-fuchsia-300">
                            Capital Mantra Tools
                        </span>
                        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50">
                            Free Financial Calculators: Optimize SIP, EMI, and Retirement Planning.
                        </h2>
                        <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300">
                            Accurately plan your financial goals using Capital Mantra's investment and finance calculators. Strengthen your capital with tools for SIP Returns, EMI, and Retirement planning.
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {CALCULATOR_LIST.map((calc, index) => (
                            <div
                                key={index}
                                className="rounded-xl p-6 border border-slate-200 bg-slate-50/70 shadow-lg dark:border-slate-800 dark:bg-slate-950/70 transform transition duration-300 hover:shadow-fuchsia-500/20 hover:scale-[1.02]"
                            >
                                <div className="text-4xl mb-3">{calc.icon}</div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 mb-2">
                                    {calc.title}
                                </h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">
                                    {calc.description}
                                </p>
                                <a href="#" className="mt-3 inline-flex items-center text-sm font-medium text-fuchsia-600 hover:text-fuchsia-700 dark:text-fuchsia-400 transition">
                                    Use Calculator →
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </AnimatedSection>
    );
};


export default CalculatorSection