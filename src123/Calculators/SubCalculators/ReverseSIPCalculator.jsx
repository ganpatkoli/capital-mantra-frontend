"use client";

import React, { useState, useMemo } from "react";
import { DoughnutChart, InputGroup } from "../CalculatorUtils";
import { formatRupee } from "../../UI/Utility";
const ReverseSIPCalculator = () => {
    const [corpus, setCorpus] = useState('');
    const [rate, setRate] = useState('');
    const [monthlyWithdrawal, setMonthlyWithdrawal] = useState('');

    const C = Number(corpus);
    const R = Number(rate);
    const W = Number(monthlyWithdrawal);

    const years = useMemo(() => {
        if (C <= 0 || R <= 0 || W <= 0) return 0;

        const r = R / 100 / 12; // Monthly rate

        // n = log( 1 - (C * r / W) ) / log( 1 / (1 + r) )

        const term1 = C * r;
        const term2 = 1 - (term1 / W);

        if (term2 <= 0) return 999; // Essentially infinite or very long

        const n_months = Math.log(term2) / Math.log(1 / (1 + r));
        const n_years = n_months / 12;

        return n_years;
    }, [C, R, W]);

    const formatYear = (value) => {
        if (value === 0) return '0 Years';
        if (value > 900) return 'Infinite/99+ Years';
        return `${value.toFixed(1)} Years`;
    };

    return (
        <div className="bg-white p-6 rounded-xl border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-xl">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6">Reverse SIP / SWP Planner (मासिक निकासी योजना)</h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <InputGroup label="Current Corpus" value={corpus} setter={setCorpus} min={100000} max={50000000} unit="₹" placeholder="10000000" accentColor="text-red-600 dark:text-red-400" />
                    <InputGroup label="Expected Annual Return" value={rate} setter={setRate} min={1} max={30} unit="%" placeholder="10" accentColor="text-red-600 dark:text-red-400" />
                    <InputGroup label="Monthly Withdrawal Amount" value={monthlyWithdrawal} setter={setMonthlyWithdrawal} min={1000} max={100000} unit="₹" placeholder="50000" accentColor="text-red-600 dark:text-red-400" />
                </div>

                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-center text-center">
                    <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">Corpus will last for:</p>
                    <p className="text-4xl font-bold mt-1 text-red-700 dark:text-red-300">
                        {formatYear(years)}
                    </p>
                    <p className="mt-4 text-xs text-slate-500">
                        This assumes consistent withdrawal without inflation adjustment.
                    </p>
                </div>
            </div>
        </div>
    );
};


export default ReverseSIPCalculator