"use client";

import React, { useState, useMemo } from "react";
import { DoughnutChart, InputGroup } from "../CalculatorUtils";
import { formatRupee } from "../../UI/Utility";
const GoldInvestmentCalculator = () => {
    const [currentValue, setCurrentValue] = useState('');
    const [rate, setRate] = useState('');
    const [years, setYears] = useState('');

    const P = Number(currentValue);
    const R = Number(rate);
    const Y = Number(years);

    const { futureValue, totalGain } = useMemo(() => {
        if (P <= 0 || R <= 0 || Y <= 0) {
            return { futureValue: 0, totalGain: 0 };
        }

        const r = R / 100;
        const n = Y;

        // FV = P * (1 + r)^n (Simple compounding for asset price growth)
        const futureValue = P * Math.pow((1 + r), n);
        const totalGain = futureValue - P;

        return { futureValue, totalGain };
    }, [P, R, Y]);

    return (
        <div className="bg-white p-6 rounded-xl border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-xl">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6">Gold Futures Value (सोने का भविष्य मूल्य)</h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <InputGroup label="Current Investment Value" value={currentValue} setter={setCurrentValue} min={1000} max={10000000} unit="₹" placeholder="500000" accentColor="text-amber-600 dark:text-amber-400" step={1000} />
                    <InputGroup label="Expected Annual Growth (CAGR)" value={rate} setter={setRate} min={1} max={20} unit="%" step={0.1} placeholder="8.5" accentColor="text-amber-600 dark:text-amber-400" />
                    <InputGroup label="Time Horizon" value={years} setter={setYears} min={1} max={30} unit="Yrs" placeholder="10" accentColor="text-amber-600 dark:text-amber-400" />
                </div>

                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
                    <div className="flex justify-center mb-6">
                        <DoughnutChart
                            invested={P}
                            returns={totalGain > 0 ? totalGain : 0}
                            investedColor="#F59E0B" // Amber-600
                            returnsColor="#10B981" // Emerald-600
                        />
                    </div>
                    <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-600 dark:text-slate-400">Total Initial Investment:</span>
                            <span className="font-semibold text-slate-900 dark:text-slate-50">{formatRupee(P)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-600 dark:text-slate-400">Total Estimated Gain:</span>
                            <span className="font-semibold text-emerald-600 dark:text-emerald-400">{formatRupee(totalGain)}</span>
                        </div>
                    </div>

                    <div className="mt-6">
                        <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">Estimated Future Value:</p>
                        <p className="text-3xl font-bold mt-1 text-amber-700 dark:text-amber-300">
                            {formatRupee(futureValue)}
                        </p>
                        <p className="mt-2 text-xs text-slate-500">
                            This calculation assumes the price of gold appreciates uniformly over the time period.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default GoldInvestmentCalculator