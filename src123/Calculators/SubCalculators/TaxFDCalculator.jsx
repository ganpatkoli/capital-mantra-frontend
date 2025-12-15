"use client";

import React, { useState, useMemo } from "react";
import { DoughnutChart, InputGroup } from "../CalculatorUtils";
import { formatRupee } from "../../UI/Utility";
const TaxFDCalculator = () => {
    const [initialInvestment, setInitialInvestment] = useState('');
    const [rate, setRate] = useState('');
    const [tenure] = useState(5); // Fixed tenure for Tax Saving FD

    const P = Number(initialInvestment);
    const R = Number(rate);

    const { totalInterest, maturityValue } = useMemo(() => {
        if (P <= 0 || R <= 0) {
            return { totalInterest: 0, maturityValue: 0 };
        }

        // Compound quarterly (4 times a year) for typical FD
        const r = R / 100 / 4;
        const n = tenure * 4;

        // Formula for Future Value (Compound Interest): P * (1 + r)^n
        const maturityValue = P * Math.pow((1 + r), n);
        const totalInterest = maturityValue - P;

        return { totalInterest, maturityValue };
    }, [P, R, tenure]);

    return (
        <div className="bg-white p-6 rounded-xl border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-xl">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6">Tax Saving FD Calculator (टैक्स सेविंग FD)</h3>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    <InputGroup label="Initial Investment" value={initialInvestment} setter={setInitialInvestment} min={1000} max={150000} unit="₹" placeholder="150000" accentColor="text-yellow-600 dark:text-yellow-400" />
                    <InputGroup label="Annual Interest Rate" value={rate} setter={setRate} min={1} max={15} unit="%" step={0.1} placeholder="7.5" accentColor="text-yellow-600 dark:text-yellow-400" />
                    <InputGroup label="Tenure (Fixed)" value={tenure} setter={() => { }} min={5} max={5} unit="Yrs" placeholder="5" accentColor="text-yellow-600 dark:text-yellow-400" />
                </div>

                <div className="lg:col-span-1 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-center">
                    <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">Total Maturity Value:</p>
                    <p className="text-3xl font-bold mt-1 text-yellow-700 dark:text-yellow-300">
                        {formatRupee(maturityValue)}
                    </p>
                    <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
                        Total Interest Earned: {formatRupee(totalInterest)}
                    </p>
                    <p className="text-xs text-slate-500 mt-2">
                        Tax deduction under Section 80C applies only to investment up to ₹1.5 Lakh.
                    </p>
                </div>
            </div>
        </div>
    );
};


export default TaxFDCalculator