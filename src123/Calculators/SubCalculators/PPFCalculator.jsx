"use client";

import React, { useState, useMemo } from "react";
import { DoughnutChart, InputGroup } from "../CalculatorUtils";
import { formatRupee } from "../../UI/Utility";

const PPFCalculator = () => {
    const [annualDeposit, setAnnualDeposit] = useState('');
    const [rate, setRate] = useState(7.1); // Fixed rate for PPF (often 7.1%)
    const [years, setYears] = useState(15); // Fixed maturity for PPF

    const P = Number(annualDeposit);
    const R = Number(rate);
    const Y = Number(years);

    const { totalInvested, totalInterest, maturityValue } = useMemo(() => {
        if (P <= 0 || R <= 0 || Y <= 0) {
            return { totalInvested: 0, totalInterest: 0, maturityValue: 0 };
        }

        // Check for max deposit limit
        const annualInvestment = Math.min(P, 150000);

        const r = R / 100;
        const n = Y;

        // PPF Maturity Formula (similar to FV of annuity due, compounded annually)
        const maturityValue = annualInvestment * ((Math.pow((1 + r), n) - 1) / r) * (1 + r);
        const totalInvested = annualInvestment * Y;
        const totalInterest = maturityValue - totalInvested;

        return { totalInvested, totalInterest, maturityValue };
    }, [P, R, Y]);

    return (
        <div className="bg-white p-6 rounded-xl border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-xl">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6">PPF Calculator (पीपीएफ योजना)</h3>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    <InputGroup label="Annual Deposit" value={annualDeposit} setter={setAnnualDeposit} min={500} max={150000} unit="₹" placeholder="150000" accentColor="text-pink-600 dark:text-pink-400" />
                    <InputGroup label="Interest Rate (Fixed)" value={rate} setter={setRate} min={5} max={8} unit="%" step={0.1} placeholder="7.1" accentColor="text-pink-600 dark:text-pink-400" />
                    <InputGroup label="Time Period (Fixed)" value={years} setter={setYears} min={15} max={15} unit="Yrs" placeholder="15" accentColor="text-pink-600 dark:text-pink-400" />
                </div>

                <div className="lg:col-span-1 flex flex-col items-center justify-start pt-4">
                    <DoughnutChart
                        invested={totalInvested}
                        returns={totalInterest > 0 ? totalInterest : 0}
                        investedColor="#EC4899" // Pink
                        returnsColor="#10B981" // Emerald
                    />
                </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="text-xl font-bold text-pink-700 dark:text-pink-300">
                            {formatRupee(maturityValue)}
                        </p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Maturity Value (15 Yrs)</p>
                    </div>
                    <div className="text-right">
                        <p className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                            {formatRupee(totalInvested)}
                        </p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Total Deposited</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PPFCalculator