"use client";

import React, { useState, useMemo, useEffect } from "react";
import { DoughnutChart, InputGroup } from "../CalculatorUtils";
import { formatRupee } from "../../UI/Utility";

const InvestmentCalculator = () => {
    const [mode, setMode] = useState("sip");

    const [monthlyInvestment, setMonthlyInvestment] = useState("100");
    const [lumpsumAmount, setLumpsumAmount] = useState("10000");
    const [rate, setRate] = useState("12");
    const [years, setYears] = useState("10");

    // 🔥 RESET ON MODE CHANGE
    useEffect(() => {
        if (mode === "sip") {
            setMonthlyInvestment("100");
        } else {
            setLumpsumAmount("10000");
        }
        setRate("12");
        setYears("10");
    }, [mode]);

    const R = Number(rate);
    const Y = Number(years);

    const { totalInvested, totalEarnings, calculatedFV } = useMemo(() => {
        if (R <= 0 || Y <= 0) {
            return { totalInvested: 0, totalEarnings: 0, calculatedFV: 0 };
        }

        const annualRate = R / 100;

        if (mode === "sip") {
            const P = Number(monthlyInvestment);
            if (P <= 0) return { totalInvested: 0, totalEarnings: 0, calculatedFV: 0 };

            const monthlyRate = Math.pow(1 + annualRate, 1 / 12) - 1;
            const months = Y * 12;

            let balance = 0;
            for (let i = 0; i < months; i++) {
                balance += P;
                balance *= 1 + monthlyRate;
            }

            const invested = P * months;
            const fv = Math.floor(balance);

            return {
                totalInvested: invested,
                totalEarnings: fv - invested,
                calculatedFV: fv,
            };
        }

        const L = Number(lumpsumAmount);
        if (L <= 0) return { totalInvested: 0, totalEarnings: 0, calculatedFV: 0 };

        const fv = Math.floor(L * Math.pow(1 + annualRate, Y));

        return {
            totalInvested: L,
            totalEarnings: fv - L,
            calculatedFV: fv,
        };
    }, [mode, monthlyInvestment, lumpsumAmount, R, Y]);

    return (
        <div className="rounded-xl border shadow-2xl p-8 bg-white text-slate-900 border-slate-200 dark:bg-slate-900 dark:text-white dark:border-slate-800">
            {/* HEADER */}
            <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-bold">
                </h3>

                <div className="flex rounded-lg overflow-hidden border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800">
                    <button
                        onClick={() => setMode("sip")}
                        className={`px-4 py-2 text-sm font-semibold ${mode === "sip"
                            ? "bg-emerald-500 text-black"
                            : "text-slate-600 dark:text-slate-300"
                            }`}
                    >
                        SIP
                    </button>
                    <button
                        onClick={() => setMode("lumpsum")}
                        className={`px-4 py-2 text-sm font-semibold ${mode === "lumpsum"
                            ? "bg-emerald-500 text-black"
                            : "text-slate-600 dark:text-slate-300"
                            }`}
                    >
                        Lumpsum
                    </button>
                </div>
            </div>

            {/* BODY */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-8">
                    {mode === "sip" ? (
                        <InputGroup
                            label="Monthly Investment"
                            value={monthlyInvestment}
                            setter={setMonthlyInvestment}
                            min={100}
                            max={1000000}
                            step={100}
                            unit="₹"
                            accentColor="text-emerald-500"
                        />
                    ) : (
                        <InputGroup
                            label="Lumpsum Investment"
                            value={lumpsumAmount}
                            setter={setLumpsumAmount}
                            min={1000}
                            max={10000000}
                            step={1000}
                            unit="₹"
                            accentColor="text-emerald-500"
                        />
                    )}

                    <InputGroup
                        label="Expected Annual Return"
                        value={rate}
                        setter={setRate}
                        min={1}
                        max={30}
                        step={0.1}
                        unit="%"
                        accentColor="text-emerald-500"
                    />

                    <InputGroup
                        label="Time Period"
                        value={years}
                        setter={setYears}
                        min={1}
                        max={50}
                        unit="Yrs"
                        accentColor="text-emerald-500"
                    />
                </div>

                <div className="lg:col-span-1 flex justify-center">
                    <DoughnutChart
                        invested={totalInvested}
                        returns={totalEarnings}
                        investedColor="#10b981"
                        returnsColor="#3b82f6"
                    />
                </div>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                    <p className="text-sm text-slate-500 dark:text-slate-400">Total Invested</p>
                    <p className="text-2xl font-semibold">{formatRupee(totalInvested)}</p>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                    <p className="text-sm text-slate-500 dark:text-slate-400">Est. Returns</p>
                    <p className="text-2xl font-semibold text-blue-600 dark:text-blue-400">
                        {formatRupee(totalEarnings)}
                    </p>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl md:text-right">
                    <p className="text-sm text-slate-500 dark:text-slate-400">Total Value</p>
                    <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">
                        {formatRupee(calculatedFV)}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default InvestmentCalculator;
