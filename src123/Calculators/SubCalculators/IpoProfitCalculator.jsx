"use client";

import React, { useState, useMemo } from "react";
import { DoughnutChart, InputGroup } from "../CalculatorUtils";
import { formatRupee } from "../../UI/Utility";

const IpoProfitCalculator = () => {
    const [allotmentLots, setAllotmentLots] = useState('');
    const [lotSize, setLotSize] = useState('');
    const [issuePrice, setIssuePrice] = useState('');
    const [listingPrice, setListingPrice] = useState('');

    const L = Number(allotmentLots);
    const S = Number(lotSize);
    const I = Number(issuePrice);
    const T = Number(listingPrice);

    const { totalInvestment, profitAmount, gainPercentage, profitColor } = useMemo(() => {
        if (L <= 0 || S <= 0 || I <= 0 || T <= 0) {
            return { totalInvestment: 0, profitAmount: 0, gainPercentage: 0, profitColor: 'text-slate-600 dark:text-slate-300' };
        }
        const totalShares = L * S;
        const listingGainPerShare = T - I;
        const profitAmount = totalShares * listingGainPerShare;
        const totalInvestment = L * S * I;
        const gainPercentage = (totalInvestment > 0) ? (profitAmount / totalInvestment) * 100 : 0;

        const color = profitAmount > 0 ? 'text-emerald-600 dark:text-emerald-400' : profitAmount < 0 ? 'text-red-600 dark:text-red-400' : 'text-slate-600 dark:text-slate-300';

        return { totalInvestment, profitAmount, gainPercentage, profitColor: color };
    }, [L, S, I, T]);

    return (
        <div className="bg-white p-6 rounded-xl border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-xl">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6">IPO Profit Estimator (IPO लाभ अनुमानक)</h3>

            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 col-span-2 md:col-span-1">
                    <InputGroup label="Lots Allotted" value={allotmentLots} setter={setAllotmentLots} min={0} max={10} placeholder="1" unit="" accentColor="text-fuchsia-600 dark:text-fuchsia-400" />
                    <InputGroup label="Lot Size (Shares)" value={lotSize} setter={setLotSize} min={0} max={100} placeholder="14" unit="" accentColor="text-fuchsia-600 dark:text-fuchsia-400" />
                    <InputGroup label="Issue Price (₹)" value={issuePrice} setter={setIssuePrice} min={0} max={5000} placeholder="1062" unit="₹" accentColor="text-fuchsia-600 dark:text-fuchsia-400" />
                    <InputGroup label="Listing Price (₹)" value={listingPrice} setter={setListingPrice} min={0} max={6000} placeholder="1300" unit="₹" accentColor="text-fuchsia-600 dark:text-fuchsia-400" />
                </div>

                <div className="col-span-2 md:col-span-1 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
                    <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-600 dark:text-slate-400">Total Investment:</span>
                            <span className="font-semibold text-slate-900 dark:text-slate-50">{formatRupee(totalInvestment)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-600 dark:text-slate-400">Estimated Gain/Loss (%):</span>
                            <span className={`font-semibold ${profitColor}`}>{gainPercentage.toFixed(2)} %</span>
                        </div>
                    </div>

                    <div className="mt-6">
                        <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">Total Estimated Profit/Loss:</p>
                        <p className={`text-3xl font-bold mt-1 ${profitColor}`}>
                            {formatRupee(profitAmount)}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IpoProfitCalculator