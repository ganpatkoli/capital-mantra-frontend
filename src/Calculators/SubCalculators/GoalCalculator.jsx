"use client";

import React, { useState, useMemo } from "react";
import { DoughnutChart, InputGroup } from "../CalculatorUtils";
import { formatRupee } from "../../UI/Utility";
const GoalCalculator = () => {
    const [futureValue, setFutureValue] = useState('');
    const [rate, setRate] = useState('');
    const [years, setYears] = useState('');

    const FV = Number(futureValue);
    const R = Number(rate);
    const Y = Number(years);

    const { totalInvestment, totalEarnings, requiredSIP } = useMemo(() => {
        if (FV <= 0 || R <= 0 || Y <= 0) {
            return { totalInvestment: 0, totalEarnings: 0, requiredSIP: 0 };
        }

        const r = R / 100 / 12; // Monthly rate
        const n = Y * 12; // Total months

        const requiredSIP = FV * (r / (Math.pow((1 + r), n) - 1)) / (1 + r);
        const totalInvestment = requiredSIP * Y * 12;
        const totalEarnings = FV - totalInvestment;

        return { totalInvestment, totalEarnings, requiredSIP };
    }, [FV, R, Y]);

    return (
        <div className="bg-white p-6 rounded-xl border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-xl">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6"></h3>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    <InputGroup
                        label="Target Corpus / Goal Amount"
                        value={futureValue}
                        setter={setFutureValue}
                        min={10000}
                        max={10000000}
                        unit="₹"
                        placeholder="5000000"
                        accentColor="text-purple-600 dark:text-purple-400"
                    />
                    <InputGroup
                        label="Expected Annual Return"
                        value={rate}
                        setter={setRate}
                        min={1}
                        max={30}
                        unit="%"
                        placeholder="10"
                        accentColor="text-purple-600 dark:text-purple-400"
                    />
                    <InputGroup
                        label="Time to Goal"
                        value={years}
                        setter={setYears}
                        min={1}
                        max={50}
                        unit="Yrs"
                        placeholder="15"
                        accentColor="text-purple-600 dark:text-purple-400"
                    />
                </div>

                <div className="lg:col-span-1 flex flex-col items-center justify-start pt-4">
                    <DoughnutChart
                        invested={totalInvestment}
                        returns={totalEarnings > 0 ? totalEarnings : 0}
                        investedColor="#A855F7" // Purple
                        returnsColor="#10B981" // Emerald
                    />
                </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="text-xl font-bold text-purple-700 dark:text-purple-300">
                            {formatRupee(requiredSIP)}
                        </p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Monthly SIP Required</p>
                    </div>

                    <div className="text-right">
                        <p className="text-lg font-semibold text-slate-900 dark:text-slate-50">
                            {formatRupee(totalInvestment)}
                        </p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Total Investment Required</p>
                    </div>

                    <div>
                        <p className="text-lg font-semibold text-purple-600 dark:text-purple-400">
                            {formatRupee(totalEarnings > 0 ? totalEarnings : 0)}
                        </p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Total Potential Earnings</p>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default GoalCalculator