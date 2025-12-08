"use client";

import React, { useState, useMemo } from "react";
import { DoughnutChart, InputGroup } from "../CalculatorUtils";
import { formatRupee } from "../../UI/Utility"; 
const EMICalculator = () => {
    const [loanAmount, setLoanAmount] = useState('');
    const [rate, setRate] = useState('');
    const [years, setYears] = useState('');

    const L = Number(loanAmount);
    const R = Number(rate);
    const Y = Number(years);

    const { totalInterest, totalPayment, emi } = useMemo(() => {
        if (L <= 0 || R <= 0 || Y <= 0) {
            return { totalInterest: 0, totalPayment: 0, emi: 0 };
        }

        const r = R / 100 / 12; // Monthly rate
        const n = Y * 12; // Total months

        // EMI Formula: P * r * (1 + r)^n / ((1 + r)^n - 1)
        const emi = L * r * (Math.pow((1 + r), n)) / (Math.pow((1 + r), n) - 1);
        const totalPayment = emi * n;
        const totalInterest = totalPayment - L;

        return { totalInterest, totalPayment, emi };
    }, [L, R, Y]);

    return (
        <div className="bg-white p-6 rounded-xl border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-xl">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6">EMI Calculator (मासिक किश्त गणना)</h3>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    <InputGroup label="Loan Amount" value={loanAmount} setter={setLoanAmount} min={10000} max={5000000} unit="₹" placeholder="1000000" accentColor="text-orange-600 dark:text-orange-400" />
                    <InputGroup label="Annual Interest Rate" value={rate} setter={setRate} min={1} max={30} unit="%" placeholder="8.5" step={0.1} accentColor="text-orange-600 dark:text-orange-400" />
                    <InputGroup label="Loan Tenure" value={years} setter={setYears} min={1} max={30} unit="Yrs" placeholder="20" accentColor="text-orange-600 dark:text-orange-400" />
                </div>

                <div className="lg:col-span-1 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
                    <div className="space-y-3">
                        <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">Monthly EMI:</p>
                        <p className="text-3xl font-bold text-orange-700 dark:text-orange-400">
                            {formatRupee(emi)}
                        </p>
                    </div>

                    <div className="mt-6 space-y-2 text-sm">
                        <div className="flex justify-between">
                            <span className="text-slate-600 dark:text-slate-400">Total Principal:</span>
                            <span className="font-semibold text-slate-900 dark:text-slate-50">{formatRupee(L)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-slate-600 dark:text-slate-400">Total Interest:</span>
                            <span className="font-semibold text-red-600 dark:text-red-400">{formatRupee(totalInterest)}</span>
                        </div>
                        <div className="flex justify-between font-bold">
                            <span className="text-slate-900 dark:text-slate-50">Total Payment:</span>
                            <span className="text-orange-700 dark:text-orange-400">{formatRupee(totalPayment)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default EMICalculator