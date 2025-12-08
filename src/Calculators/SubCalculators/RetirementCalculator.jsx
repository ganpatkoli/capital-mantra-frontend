"use client";

import React, { useState, useMemo } from "react";
import { DoughnutChart, InputGroup } from "../CalculatorUtils";
import { formatRupee } from "../../UI/Utility";

const RetirementCalculator = () => {
    const [currentAge, setCurrentAge] = useState('');
    const [retirementAge, setRetirementAge] = useState('');
    const [currentMonthlyExpense, setCurrentMonthlyExpense] = useState('');
    const [inflationRate, setInflationRate] = useState('');
    const [withdrawalRate] = useState(4);

    const CA = Number(currentAge);
    const RA = Number(retirementAge);
    const CME = Number(currentMonthlyExpense);
    const IR = Number(inflationRate);

    const { requiredCorpus, estimatedFutureMonthlyExpense, yearsUntilRetirement } = useMemo(() => {
        const years = RA - CA;
        if (years <= 0 || CME <= 0 || IR <= 0 || RA <= CA) {
            return { requiredCorpus: 0, estimatedFutureMonthlyExpense: 0, yearsUntilRetirement: 0 };
        }

        const expense = CME;
        const i = IR / 100;
        const w = withdrawalRate / 100;

        const futureMonthlyExpense = expense * Math.pow((1 + i), years);
        const futureAnnualExpense = futureMonthlyExpense * 12;
        const requiredCorpus = futureAnnualExpense / w;

        return { requiredCorpus, estimatedFutureMonthlyExpense: futureMonthlyExpense, yearsUntilRetirement: years };
    }, [CA, RA, CME, IR, withdrawalRate]);

    return (
        <div className="bg-white p-6 rounded-xl border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-xl">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6">Retirement Corpus Calculator (रिटायरमेंट योजना)</h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <InputGroup label="Current Age" value={currentAge} setter={setCurrentAge} min={18} max={90} placeholder="30" unit="Yrs" accentColor="text-indigo-600 dark:text-indigo-400" />
                    <InputGroup label="Retirement Age" value={retirementAge} setter={setRetirementAge} min={20} max={100} placeholder="60" unit="Yrs" accentColor="text-indigo-600 dark:text-indigo-400" />
                    <InputGroup label="Current Monthly Expense" value={currentMonthlyExpense} setter={setCurrentMonthlyExpense} min={1000} max={200000} unit="₹" placeholder="50000" accentColor="text-indigo-600 dark:text-indigo-400" />
                    <InputGroup label="Expected Inflation Rate" value={inflationRate} setter={setInflationRate} min={0} max={20} unit="%" placeholder="6" accentColor="text-indigo-600 dark:text-indigo-400" />
                </div>

                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
                    <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-600 dark:text-slate-400">Years until Retirement:</span>
                            <span className="font-semibold text-slate-900 dark:text-slate-50">{yearsUntilRetirement} Years</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-600 dark:text-slate-400">Estimated Monthly Expense at Retirement:</span>
                            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                                {formatRupee(estimatedFutureMonthlyExpense)}
                            </span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-600 dark:text-slate-400">Safe Withdrawal Rate:</span>
                            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                                {withdrawalRate} %
                            </span>
                        </div>
                    </div>

                    <div className="mt-6">
                        <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">Required Retirement Corpus:</p>
                        <p className="text-3xl font-bold mt-1 text-indigo-700 dark:text-indigo-300">
                            {formatRupee(requiredCorpus)}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default RetirementCalculator