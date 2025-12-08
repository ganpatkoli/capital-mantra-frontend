"use client";
import React, { useState, useMemo } from "react";

import { DoughnutChart, InputGroup } from "../CalculatorUtils";
import { formatRupee } from "../../UI/Utility";

const LumpsumCalculator = () => {
    const [lumpsum, setLumpsum] = useState('');
    const [rate, setRate] = useState('');
    const [years, setYears] = useState('');

    const P = Number(lumpsum);
    const R = Number(rate);
    const Y = Number(years);

    const { totalInvested, totalEarnings, calculatedFV } = useMemo(() => {
        if (P <= 0 || R <= 0 || Y <= 0) {
            return { totalInvested: 0, totalEarnings: 0, calculatedFV: 0 };
        }

        const r = R / 100;
        const n = Y;

        const calculatedFV = P * Math.pow((1 + r), n);
        const totalInvested = P;
        const totalEarnings = calculatedFV - P;

        return { totalInvested, totalEarnings, calculatedFV };
    }, [P, R, Y]);

    return (
        <div className="bg-white p-6 rounded-xl border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-xl">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6">Lumpsum Calculator (एकमुश्त निवेश)</h3>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    <InputGroup
                        label="Initial Investment"
                        value={lumpsum}
                        setter={setLumpsum}
                        min={1000}
                        max={1000000}
                        unit="₹"
                        placeholder="100000"
                        accentColor="text-cyan-600 dark:text-cyan-400"
                    />
                    <InputGroup
                        label="Expected Annual Return"
                        value={rate}
                        setter={setRate}
                        min={1}
                        max={30}
                        unit="%"
                        placeholder="15"
                        accentColor="text-cyan-600 dark:text-cyan-400"
                    />
                    <InputGroup
                        label="Time Period"
                        value={years}
                        setter={setYears}
                        min={1}
                        max={50}
                        unit="Yrs"
                        placeholder="5"
                        accentColor="text-cyan-600 dark:text-cyan-400"
                    />
                </div>

                <div className="lg:col-span-1 flex flex-col items-center justify-start pt-4">
                    <DoughnutChart
                        invested={totalInvested}
                        returns={totalEarnings > 0 ? totalEarnings : 0}
                        investedColor="#06B6D4" // Cyan
                        returnsColor="#10B981" // Emerald
                    />
                </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="text-xl font-bold text-cyan-700 dark:text-cyan-300">
                            {formatRupee(calculatedFV)}
                        </p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Total Future Value</p>
                    </div>

                    <div className="text-right">
                        <p className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                            {formatRupee(totalInvested)}
                        </p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Total Invested</p>
                    </div>

                    <div>
                        <p className="text-lg font-semibold text-emerald-600 dark:text-emerald-400">
                            {formatRupee(totalEarnings > 0 ? totalEarnings : 0)}
                        </p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Total Earnings</p>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default LumpsumCalculator