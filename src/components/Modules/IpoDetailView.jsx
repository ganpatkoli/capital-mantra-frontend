// components/Modules/IpoDetailView.jsx
"use client";
import React from 'react';
import BackButton from '../../UI/BackButton';

const IpoDetailView = ({ ipo, goBack }) => {
    const getGmpColor = (gmp) => {
        if (gmp && gmp.includes('+')) return 'text-emerald-600 dark:text-emerald-400';
        if (gmp && gmp.includes('-')) return 'text-red-600 dark:text-red-400';
        return 'text-slate-600 dark:text-slate-300';
    };

    return (
        <section className="py-12 sm:py-16 bg-slate-50 dark:bg-slate-950">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <BackButton onClick={goBack} />
                
                <header className="mt-4 border-b pb-4 border-slate-200 dark:border-slate-800">
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
                        {ipo.company} <span className="text-slate-500 dark:text-slate-400 text-xl">({ipo.symbol})</span>
                    </h1>
                    <div className="mt-2 flex items-center gap-4 text-sm font-medium text-slate-600 dark:text-slate-400">
                        <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${ipo.ipoType === 'Mainboard' ? 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400' : 'bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400'}`}>
                            {ipo.ipoType} IPO
                        </span>
                        <span className="text-sm font-bold">|</span>
                        <span className="text-sm">Status: 
                            <span className={`ml-1 font-semibold ${ipo.status === 'Ongoing' ? 'text-emerald-600 dark:text-emerald-400' : 'text-orange-600 dark:text-orange-400'}`}>
                                {ipo.status}
                            </span>
                        </span>
                    </div>
                </header>

                <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Key Metrics Card */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
                            <div className="text-center">
                                <p className="text-xs text-slate-500 dark:text-slate-400">Price Band</p>
                                <p className="text-lg font-bold text-slate-900 dark:text-slate-50 mt-1">{ipo.priceBand}</p>
                            </div>
                            <div className="text-center">
                                <p className="text-xs text-slate-500 dark:text-slate-400">Lot Size</p>
                                <p className="text-lg font-bold text-slate-900 dark:text-slate-50 mt-1">{ipo.lotSize}</p>
                            </div>
                            <div className="text-center">
                                <p className="text-xs text-slate-500 dark:text-slate-400">GMP</p>
                                <p className={`text-lg font-bold mt-1 ${getGmpColor(ipo.gmp)}`}>{ipo.gmp}</p>
                            </div>
                            <div className="text-center">
                                <p className="text-xs text-slate-500 dark:text-slate-400">Issue Size</p>
                                <p className="text-lg font-bold text-slate-900 dark:text-slate-50 mt-1">{ipo.issueSize}</p>
                            </div>
                        </div>

                        {/* Financial Summary */}
                        <div className="bg-white p-6 rounded-xl border border-slate-200 dark:bg-slate-900 dark:border-slate-800">
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-4">Financial Overview (FY24)</h3>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                {ipo.financialSummary.map((item, index) => (
                                    <div key={index} className="flex justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
                                        <span className="text-slate-600 dark:text-slate-400">{item.label}</span>
                                        <span className="font-medium text-slate-900 dark:text-slate-50">{item.value}</span>
                                    </div>
                                ))}
                                <div className="flex justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
                                    <span className="text-slate-600 dark:text-slate-400">P/E Ratio (Upper Band)</span>
                                    <span className="font-medium text-slate-900 dark:text-slate-50">{ipo.peRatio}</span>
                                </div>
                                <div className="flex justify-between border-b border-slate-100 pb-2 dark:border-slate-800">
                                    <span className="text-slate-600 dark:text-slate-400">Registrar</span>
                                    <span className="font-medium text-slate-900 dark:text-slate-50">{ipo.registrar}</span>
                                </div>
                            </div>
                            <p className="mt-4 text-xs text-slate-500">
                                This analysis is based on pro-forma financials and the upper band of the IPO price.
                            </p>
                        </div>
                    </div>

                    {/* Timeline Card */}
                    <div className="bg-white p-6 rounded-xl border border-slate-200 dark:bg-slate-900 dark:border-slate-800">
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-4">Important Dates</h3>
                        <ol className="relative border-l border-slate-200 dark:border-slate-700">              
                            {ipo.keyDates.map((event, index) => (
                                <li key={index} className="mb-6 ml-4">
                                    <div className={`absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 ring-4 ${
                                        (event.label.includes('Listing') || event.label.includes('Allotment')) 
                                        ? 'bg-emerald-500 ring-emerald-100 dark:ring-emerald-900' 
                                        : 'bg-cyan-500 ring-cyan-100 dark:ring-cyan-900'
                                    }`} />
                                    <time className="mb-1 text-xs font-normal leading-none text-slate-500 dark:text-slate-400">{event.date}</time>
                                    <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-50">{event.label}</h4>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>

                <div className="mt-12 p-6 rounded-xl border border-red-200 bg-red-50 dark:border-red-900 dark:bg-red-950/50">
                    <p className="text-sm font-medium text-red-700 dark:text-red-300">
                        Disclaimer: Investment in IPOs carries market risk. GMP data is unofficial. Please consult with a SEBI-registered financial advisor before making any investment decisions.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default IpoDetailView;