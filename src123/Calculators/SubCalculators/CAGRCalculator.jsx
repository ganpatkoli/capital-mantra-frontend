"use client";

import React, { useState, useMemo } from "react";
import { DoughnutChart, InputGroup } from "../CalculatorUtils";
import { formatRupee } from "../../UI/Utility";
const CAGRCalculator = () => {
    const [startValue, setStartValue] = useState('');
    const [endValue, setEndValue] = useState('');
    const [years, setYears] = useState('');

    const S = Number(startValue);
    const E = Number(endValue);
    const Y = Number(years);

    const cagr = useMemo(() => {
        if (S <= 0 || E <= 0 || Y <= 0) return 0;

        // CAGR Formula: ((End Value / Start Value) ^ (1 / Years) - 1) * 100
        const result = (Math.pow((E / S), (1 / Y)) - 1) * 100;
        return result;
    }, [S, E, Y]);

    return (
        <div className="bg-white p-6 rounded-xl border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-xl">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6">CAGR Calculator (चक्रवृद्धि वार्षिक वृद्धि दर)</h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <InputGroup label="Starting Investment Value" value={startValue} setter={setStartValue} min={1} max={1000000} unit="₹" placeholder="100000" accentColor="text-teal-600 dark:text-teal-400" />
                    <InputGroup label="Ending Investment Value" value={endValue} setter={setEndValue} min={1} max={2000000} unit="₹" placeholder="180000" accentColor="text-teal-600 dark:text-teal-400" />
                    <InputGroup label="Time Period" value={years} setter={setYears} min={1} max={50} unit="Yrs" placeholder="5" accentColor="text-teal-600 dark:text-teal-400" />
                </div>

                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-center text-center">
                    <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">Calculated CAGR:</p>
                    <p className="text-4xl font-bold mt-1 text-teal-700 dark:text-teal-300">
                        {cagr.toFixed(2)} %
                    </p>
                    <p className="mt-4 text-xs text-slate-500">
                        Average Annual Growth Rate
                    </p>
                </div>
            </div>
        </div>
    );
};


export default CAGRCalculator