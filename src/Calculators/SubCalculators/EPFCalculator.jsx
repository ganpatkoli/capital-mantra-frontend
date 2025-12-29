"use client";

import React, { useState, useMemo } from "react";
import { DoughnutChart, InputGroup } from "../CalculatorUtils";
import { formatRupee } from "../../UI/Utility";
const EPFCalculator = () => {
    const [salary, setSalary] = useState('');
    const [employeeContribution, setEmployeeContribution] = useState(12);
    const [employerContribution, setEmployerContribution] = useState(12);
    const [rate, setRate] = useState(8.1); // EPF rate
    const [years, setYears] = useState('');

    const S = Number(salary);
    const R = Number(rate);
    const Y = Number(years);
    const EC = Number(employeeContribution) / 100;
    const TC = Number(employerContribution) / 100;

    const { totalInvested, totalInterest, maturityValue } = useMemo(() => {
        if (S <= 0 || R <= 0 || Y <= 0) {
            return { totalInvested: 0, totalInterest: 0, maturityValue: 0 };
        }

        // Monthly contribution (Employee + Employer) on Basic Salary
        const monthlyContribution = S * (EC + TC);
        const r_monthly = R / 100 / 12; // Monthly rate
        const n_months = Y * 12; // Total months

        // Future Value of Annuity Due (Monthly compounding/contribution)
        const maturityValue = monthlyContribution * (((Math.pow((1 + r_monthly), n_months) - 1) / r_monthly) * (1 + r_monthly));

        const totalInvested = monthlyContribution * n_months;
        const totalInterest = maturityValue - totalInvested;

        return { totalInvested, totalInterest, maturityValue };
    }, [S, R, Y, EC, TC]);

    return (
        <div className="bg-white p-6 rounded-xl border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-xl">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6"></h3>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    <InputGroup label="Current Basic Monthly Salary" value={salary} setter={setSalary} min={10000} max={100000} unit="₹" placeholder="50000" accentColor="text-indigo-600 dark:text-indigo-400" />
                    <InputGroup label="Employee Contribution" value={employeeContribution} setter={setEmployeeContribution} min={1} max={12} unit="%" placeholder="12" accentColor="text-indigo-600 dark:text-indigo-400" />
                    <InputGroup label="Employer Contribution" value={employerContribution} setter={setEmployerContribution} min={1} max={12} unit="%" placeholder="12" accentColor="text-indigo-600 dark:text-indigo-400" />
                    <InputGroup label="Years Remaining for Service" value={years} setter={setYears} min={1} max={40} unit="Yrs" placeholder="20" accentColor="text-indigo-600 dark:text-indigo-400" />
                </div>

                <div className="lg:col-span-1 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
                    <div className="space-y-3">
                        <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">Total Contribution (Monthly):</p>
                        <p className="text-2xl font-bold text-indigo-700 dark:text-indigo-400">
                            {formatRupee(S * (EC + TC))}
                        </p>
                    </div>

                    <div className="mt-6 space-y-2 text-sm">
                        <div className="flex justify-between">
                            <span className="text-slate-600 dark:text-slate-400">Total Invested:</span>
                            <span className="font-semibold text-slate-900 dark:text-slate-50">{formatRupee(totalInvested)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-slate-600 dark:text-slate-400">Total Interest:</span>
                            <span className="font-semibold text-emerald-600 dark:text-emerald-400">{formatRupee(totalInterest)}</span>
                        </div>
                        <div className="flex justify-between font-bold">
                            <p className="text-slate-900 dark:text-slate-50">Maturity Value:</p>
                            <p className="text-indigo-700 dark:text-indigo-300 text-lg">{formatRupee(maturityValue)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default EPFCalculator