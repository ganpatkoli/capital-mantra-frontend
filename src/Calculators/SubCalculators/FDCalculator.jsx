"use client";

import React, { useState, useMemo } from "react";
import { DoughnutChart, InputGroup } from "../CalculatorUtils";
import { formatRupee } from "../../UI/Utility";

const FDCalculator = () => {
    const [initialInvestment, setInitialInvestment] = useState('');
    const [rate, setRate] = useState('');
    const [years, setYears] = useState('');

    const P = Number(initialInvestment);
    const R = Number(rate);
    const Y = Number(years);

    const { totalInterest, maturityValue } = useMemo(() => {
        if (P <= 0 || R <= 0 || Y <= 0) {
            return { totalInterest: 0, maturityValue: 0 };
        }

        // Compound quarterly (4 times a year)
        const r = R / 100 / 4;
        const n = Y * 4;

        // Formula for Future Value (Compound Interest): P * (1 + r)^n
        const maturityValue = P * Math.pow((1 + r), n);
        const totalInterest = maturityValue - P;

        return { totalInterest, maturityValue };
    }, [P, R, Y]);

    return (
        <div className="bg-white p-6 rounded-xl border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-xl">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6">FD Calculator (साधारण फिक्स्ड डिपॉजिट)</h3>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    <InputGroup label="Initial Investment (Principal)" value={initialInvestment} setter={setInitialInvestment} min={1000} max={1000000} unit="₹" placeholder="500000" accentColor="text-yellow-600 dark:text-yellow-400" />
                    <InputGroup label="Annual Interest Rate" value={rate} setter={setRate} min={1} max={15} unit="%" step={0.1} placeholder="7.5" accentColor="text-yellow-600 dark:text-yellow-400" />
                    <InputGroup label="Time Period" value={years} setter={setYears} min={1} max={20} unit="Yrs" placeholder="5" accentColor="text-yellow-600 dark:text-yellow-400" />
                </div>

                <div className="lg:col-span-1 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-center">
                    <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">Maturity Value:</p>
                    <p className="text-3xl font-bold mt-1 text-yellow-700 dark:text-yellow-300">
                        {formatRupee(maturityValue)}
                    </p>
                    <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
                        Total Interest Earned: {formatRupee(totalInterest)}
                    </p>
                    <p className="text-xs text-slate-500 mt-2">
                        Assumes quarterly compounding.
                    </p>
                </div>
            </div>
        </div>
    );
};


export default FDCalculator