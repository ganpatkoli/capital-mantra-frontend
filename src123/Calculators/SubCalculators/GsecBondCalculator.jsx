"use client";

import React, { useState, useMemo } from "react";
import { DoughnutChart, InputGroup } from "../CalculatorUtils";
import { formatRupee } from "../../UI/Utility";
const GsecBondCalculator = () => {
    const [faceValue, setFaceValue] = useState(1000); // Standard Face Value
    const [couponRate, setCouponRate] = useState('');
    const [maturityYears, setMaturityYears] = useState('');
    const [purchasePrice, setPurchasePrice] = useState(1000); // Assume at par initially
    const [taxBracket, setTaxBracket] = useState(30); // Default high tax bracket

    const FV = Number(faceValue);
    const CR = Number(couponRate) / 100;
    const Y = Number(maturityYears);
    const PP = Number(purchasePrice);
    const TR = Number(taxBracket) / 100;

    const { totalCoupon, taxOnCoupon, capitalGain, netMaturityValue } = useMemo(() => {
        if (FV <= 0 || CR <= 0 || Y <= 0 || PP <= 0 || TR < 0) {
            return { totalCoupon: 0, taxOnCoupon: 0, capitalGain: 0, netMaturityValue: 0 };
        }

        // 1. Total Coupon/Interest Income (taxable as ordinary income)
        const annualCoupon = FV * CR;
        const totalCoupon = annualCoupon * Y;

        // 2. Tax on Coupon Income
        const taxOnCoupon = totalCoupon * TR;

        // 3. Capital Gain (The difference between face value received at maturity and purchase price)
        const actualCapitalGain = FV - PP;

        // 4. Net Maturity Value = Face Value + (Total Coupon Income - Tax on Coupon) + Capital Gain (Tax ignored for CG for simplification)
        const netCouponIncome = totalCoupon - taxOnCoupon;
        const netMaturityValue = FV + netCouponIncome + actualCapitalGain;

        return { totalCoupon, taxOnCoupon, capitalGain: actualCapitalGain, netMaturityValue };
    }, [FV, CR, Y, PP, TR]);


    return (
        <div className="bg-white p-6 rounded-xl border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-xl" >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6" > G - Sec Bond Planner(सरकारी बॉन्ड) </h3>

            < div className="grid grid-cols-1 lg:grid-cols-2 gap-8" >
                <div className="space-y-6" >
                    <InputGroup label="Bond Face Value (Per Bond)" value={faceValue} setter={setFaceValue} min={100} max={5000} unit="₹" placeholder="1000" accentColor="text-blue-600 dark:text-blue-400" step={100} />
                    <InputGroup label="Annual Coupon Rate" value={couponRate} setter={setCouponRate} min={1} max={15} unit="%" step={0.1} placeholder="7.0" accentColor="text-blue-600 dark:text-blue-400" />
                    <InputGroup label="Maturity Period" value={maturityYears} setter={setMaturityYears} min={1} max={20} unit="Yrs" placeholder="10" accentColor="text-blue-600 dark:text-blue-400" />
                    <InputGroup label="Purchase Price (Current Price)" value={purchasePrice} setter={setPurchasePrice} min={100} max={5000} unit="₹" placeholder="980" accentColor="text-blue-600 dark:text-blue-400" step={1} />
                    <InputGroup label="Tax Bracket on Interest" value={taxBracket} setter={setTaxBracket} min={0} max={40} unit="%" placeholder="30" accentColor="text-red-600 dark:text-red-400" step={1} />
                </div>

                < div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between" >
                    <div className="space-y-3 text-sm" >
                        <div className="flex justify-between" >
                            <span className="text-slate-600 dark:text-slate-400" > Total Coupon Interest(Gross): </span>
                            < span className="font-semibold text-slate-900 dark:text-slate-50" > {formatRupee(totalCoupon)} </span>
                        </div>
                        < div className="flex justify-between" >
                            <span className="text-slate-600 dark:text-slate-400" > Total Tax on Coupon Income: </span>
                            < span className="font-semibold text-red-600 dark:text-red-400" > {formatRupee(taxOnCoupon)} </span>
                        </div>
                        < div className="flex justify-between" >
                            <span className="text-slate-600 dark:text-slate-400" > Capital Gain / Loss: </span>
                            < span className={`font-semibold ${capitalGain >= 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}`
                            }> {formatRupee(capitalGain)} </span>
                        </div>
                    </div>

                    < div className="mt-6" >
                        <p className="text-sm font-semibold text-slate-600 dark:text-slate-400" > Estimated Net Maturity Value: </p>
                        < p className="text-3xl font-bold mt-1 text-blue-700 dark:text-blue-300" >
                            {formatRupee(netMaturityValue)}
                        </p>
                        < p className="mt-2 text-xs text-slate-500" >
                            Coupon income is taxed annually.Capital gains calculation is simplified.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default GsecBondCalculator