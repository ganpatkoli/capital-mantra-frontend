"use client";
import React, { useState, useMemo } from "react";
import { DoughnutChart, InputGroup } from "../CalculatorUtils";
import { formatRupee } from "../../UI/Utility";

const BrokerageCalculator = () => {
    // Input States
    const [buyPrice, setBuyPrice] = useState('1000');
    const [sellPrice, setSellPrice] = useState('1050');
    const [quantity, setQuantity] = useState('100');
    const [tradeType, setTradeType] = useState('delivery'); // delivery, intraday, options, futures

    const B = Number(buyPrice) || 0;
    const S = Number(sellPrice) || 0;
    const Q = Number(quantity) || 0;

    const accent = "text-indigo-600 dark:text-indigo-400";

    const results = useMemo(() => {
        const buyValue = B * Q;
        const sellValue = S * Q;
        const turnover = buyValue + sellValue;
        const grossPL = (S - B) * Q;

        let brokerage = 0;
        let stt = 0;
        let stampDuty = 0;
        let exchangeCharges = 0;

        // --- Logic for different Trade Types ---
        switch (tradeType) {
            case 'delivery':
                // 0.05% or ₹20 per side
                brokerage = Math.min(20, buyValue * 0.0005) + Math.min(20, sellValue * 0.0005);
                stt = turnover * 0.001; // 0.1% on both
                stampDuty = buyValue * 0.00015; // 0.015% on buy
                exchangeCharges = turnover * 0.0000345; // NSE Equity
                break;

            case 'intraday':
                // 0.03% or ₹20 per side
                brokerage = Math.min(20, buyValue * 0.0003) + Math.min(20, sellValue * 0.0003);
                stt = sellValue * 0.00025; // 0.025% on sell
                stampDuty = buyValue * 0.00003; // 0.003% on buy
                exchangeCharges = turnover * 0.0000345;
                break;

            case 'options':
                // Flat ₹20 per order
                brokerage = 40; 
                stt = sellValue * 0.000625; // 0.0625% on sell side (on premium)
                stampDuty = buyValue * 0.00003; 
                exchangeCharges = turnover * 0.00053; // NSE Options
                break;

            case 'futures':
                brokerage = Math.min(20, buyValue * 0.0003) + Math.min(20, sellValue * 0.0003);
                stt = sellValue * 0.000125; 
                stampDuty = buyValue * 0.00002;
                exchangeCharges = turnover * 0.00002;
                break;
                
            default: break;
        }

        const sebiFees = turnover * 0.000001; // ₹10 per crore
        const gst = (brokerage + exchangeCharges + sebiFees) * 0.18;
        const totalCharges = brokerage + stt + stampDuty + exchangeCharges + sebiFees + gst;
        const netPL = grossPL - totalCharges;

        return {
            turnover, grossPL, brokerage, stt, stampDuty, exchangeCharges, sebiFees, gst, totalCharges, netPL,
            isProfit: netPL >= 0
        };
    }, [B, S, Q, tradeType]);

    return (
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl">
            {/* Header & Mode Switcher */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                <h2 className="text-2xl font-bold">Universal Brokerage Calc</h2>
                <div className="flex flex-wrap gap-2 bg-slate-100 dark:bg-slate-800 p-1.5 rounded-xl">
                    {['delivery', 'intraday', 'options', 'futures'].map((type) => (
                        <button
                            key={type}
                            onClick={() => setTradeType(type)}
                            className={`px-4 py-1.5 rounded-lg text-xs font-bold uppercase transition-all ${
                                tradeType === type ? 'bg-white dark:bg-slate-700 shadow-sm text-indigo-600' : 'text-slate-500'
                            }`}
                        >
                            {type}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Inputs */}
                <div className="lg:col-span-2 space-y-6">
                    <InputGroup label="Buy Price" value={buyPrice} setter={setBuyPrice} unit="₹" accentColor={accent} />
                    <InputGroup label="Sell Price" value={sellPrice} setter={setSellPrice} unit="₹" accentColor={accent} />
                    <InputGroup label="Quantity" value={quantity} setter={setQuantity} unit="Qty" accentColor={accent} />

                    <div className="grid grid-cols-2 gap-4 pt-4">
                        <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                            <p className="text-xs text-slate-500 uppercase font-bold">Turnover</p>
                            <p className="text-lg font-semibold">{formatRupee(results.turnover)}</p>
                        </div>
                        <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                            <p className="text-xs text-slate-500 uppercase font-bold">Gross P&L</p>
                            <p className={`text-lg font-semibold ${results.grossPL >= 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
                                {formatRupee(results.grossPL)}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Visuals & Breakdown */}
                <div className="space-y-6">
                    <div className="flex flex-col items-center p-4 bg-indigo-50/30 dark:bg-indigo-900/10 rounded-2xl">
                        <DoughnutChart 
                            invested={results.totalCharges} 
                            returns={results.isProfit ? results.netPL : 0} 
                            investedColor="#f43f5e" 
                            returnsColor="#10b981" 
                        />
                        <div className="text-center mt-4">
                            <p className="text-sm text-slate-500">Net Profit/Loss</p>
                            <p className={`text-2xl font-black ${results.isProfit ? 'text-emerald-600' : 'text-rose-600'}`}>
                                {formatRupee(results.netPL)}
                            </p>
                        </div>
                    </div>

                    <div className="space-y-3 text-sm border-t border-slate-100 dark:border-slate-800 pt-4">
                        <div className="flex justify-between font-bold text-slate-700 dark:text-slate-200">
                            <span>Total Charges</span>
                            <span className="text-rose-500">{formatRupee(results.totalCharges)}</span>
                        </div>
                        <div className="flex justify-between text-slate-500">
                            <span>Brokerage</span>
                            <span>{formatRupee(results.brokerage)}</span>
                        </div>
                        <div className="flex justify-between text-slate-500">
                            <span>STT / CTT</span>
                            <span>{formatRupee(results.stt)}</span>
                        </div>
                        <div className="flex justify-between text-slate-500">
                            <span>GST (18%)</span>
                            <span>{formatRupee(results.gst)}</span>
                        </div>
                        <div className="flex justify-between text-slate-500">
                            <span>Exchange & SEBI</span>
                            <span>{formatRupee(results.exchangeCharges + results.sebiFees)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrokerageCalculator;