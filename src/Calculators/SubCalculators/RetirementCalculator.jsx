"use client";

import React, { useState, useMemo } from "react";
import { InputGroup } from "../CalculatorUtils";
import { formatRupee } from "../../UI/Utility";

const RetirementCalculator = () => {
  // ---------------- INPUT STATES ----------------
  const [currentAge, setCurrentAge] = useState(27);
  const [retirementAge, setRetirementAge] = useState(60);
  const [lifeExpectancy, setLifeExpectancy] = useState(80);

  const [monthlyExpense, setMonthlyExpense] = useState(15000);
  const [existingSavings, setExistingSavings] = useState(0);

  const [inflationRate, setInflationRate] = useState(6);
  const [preRetReturn, setPreRetReturn] = useState(15);
  const [postRetReturn, setPostRetReturn] = useState(8);

  // ---------------- CALCULATION ----------------
  const {
    yearsToRetire,
    yearsInRetirement,
    annualExpenseAtRetirement,
    requiredCorpus,
    monthlySavingRequired,
  } = useMemo(() => {
    const CA = Number(currentAge);
    const RA = Number(retirementAge);
    const LE = Number(lifeExpectancy);
    const ME = Number(monthlyExpense);
    const ES = Number(existingSavings);

    const i = inflationRate / 100;
    const rPre = preRetReturn / 100;
    const rPost = postRetReturn / 100;

    const yrsToRetire = RA - CA;
    const yrsInRetirement = LE - RA;

    if (
      yrsToRetire <= 0 ||
      yrsInRetirement <= 0 ||
      ME <= 0 ||
      rPost <= 0 ||
      rPre <= 0
    ) {
      return {
        yearsToRetire: 0,
        yearsInRetirement: 0,
        annualExpenseAtRetirement: 0,
        requiredCorpus: 0,
        monthlySavingRequired: 0,
      };
    }

    // 1️⃣ Inflation-adjusted monthly expense at retirement
    const futureMonthlyExpense =
      ME * Math.pow(1 + i, yrsToRetire);

    // 2️⃣ Annual income required immediately after retirement
    const annualExpense = futureMonthlyExpense * 12;

    // 3️⃣ REQUIRED RETIREMENT CORPUS (Angel One NOMINAL MODEL)
    // NOTE: Inflation NOT subtracted in denominator
    const corpus =
      annualExpense *
      (1 - Math.pow(1 / (1 + rPost), yrsInRetirement)) /
      rPost;

    // 4️⃣ Existing savings grown till retirement
    const existingAtRetirement =
      ES * Math.pow(1 + rPre, yrsToRetire);

    const netCorpusNeeded = Math.max(
      0,
      corpus - existingAtRetirement
    );

    // 5️⃣ Monthly savings required (ORDINARY annuity – end of month)
    const monthlyRate = rPre / 12;
    const months = yrsToRetire * 12;

    const monthlySaving =
      netCorpusNeeded *
      (monthlyRate /
        (Math.pow(1 + monthlyRate, months) - 1));

    return {
      yearsToRetire: yrsToRetire,
      yearsInRetirement: yrsInRetirement,
      annualExpenseAtRetirement: Math.round(annualExpense),
      requiredCorpus: Math.round(corpus),
      monthlySavingRequired: Math.round(monthlySaving),
    };
  }, [
    currentAge,
    retirementAge,
    lifeExpectancy,
    monthlyExpense,
    existingSavings,
    inflationRate,
    preRetReturn,
    postRetReturn,
  ]);

  // ---------------- UI ----------------
  return (
    <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xl space-y-10">
      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
        Retirement Planning Calculator
      </h3>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* ================= INPUTS ================= */}
        <div className="space-y-6">
          <InputGroup
            label="Current Age"
            value={currentAge}
            setter={setCurrentAge}
            min={18}
            max={70}
            unit="Yrs"
            accentColor="text-indigo-600 dark:text-indigo-400"
          />

          <InputGroup
            label="Retirement Age"
            value={retirementAge}
            setter={setRetirementAge}
            min={40}
            max={80}
            unit="Yrs"
            accentColor="text-indigo-600 dark:text-indigo-400"
          />

          <InputGroup
            label="Life Expectancy"
            value={lifeExpectancy}
            setter={setLifeExpectancy}
            min={60}
            max={100}
            unit="Yrs"
            accentColor="text-indigo-600 dark:text-indigo-400"
          />

          <InputGroup
            label="Current Monthly Expense"
            value={monthlyExpense}
            setter={setMonthlyExpense}
            min={5000}
            max={300000}
            step={1000}
            unit="₹"
            accentColor="text-indigo-600 dark:text-indigo-400"
          />

          <InputGroup
            label="Existing Retirement Savings"
            value={existingSavings}
            setter={setExistingSavings}
            min={0}
            max={50000000}
            step={50000}
            unit="₹"
            accentColor="text-indigo-600 dark:text-indigo-400"
          />

          <InputGroup
            label="Expected Inflation Rate"
            value={inflationRate}
            setter={setInflationRate}
            min={3}
            max={15}
            step={0.5}
            unit="%"
            accentColor="text-indigo-600 dark:text-indigo-400"
          />

          <InputGroup
            label="Return (Before Retirement)"
            value={preRetReturn}
            setter={setPreRetReturn}
            min={5}
            max={20}
            step={0.5}
            unit="%"
            accentColor="text-indigo-600 dark:text-indigo-400"
          />

          <InputGroup
            label="Return (After Retirement)"
            value={postRetReturn}
            setter={setPostRetReturn}
            min={3}
            max={12}
            step={0.5}
            unit="%"
            accentColor="text-indigo-600 dark:text-indigo-400"
          />
        </div>

        {/* ================= RESULTS ================= */}
        <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 space-y-6">
          <div className="flex justify-between text-sm">
            <span className="text-slate-600 dark:text-slate-400">
              Years until Retirement
            </span>
            <span className="font-semibold">
              {yearsToRetire}
            </span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-slate-600 dark:text-slate-400">
              Years in Retirement
            </span>
            <span className="font-semibold">
              {yearsInRetirement}
            </span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-slate-600 dark:text-slate-400">
              Annual Income Required After Retirement
            </span>
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
              {formatRupee(annualExpenseAtRetirement)}
            </span>
          </div>

          <div className="border-t border-slate-200 dark:border-slate-800 pt-4">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Required Retirement Corpus
            </p>
            <p className="text-3xl font-bold text-indigo-700 dark:text-indigo-300">
              {formatRupee(requiredCorpus)}
            </p>
          </div>

          <div className="border-t border-slate-200 dark:border-slate-800 pt-4">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Monthly Savings Required
            </p>
            <p className="text-3xl font-bold text-indigo-700 dark:text-indigo-300">
              {formatRupee(monthlySavingRequired)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetirementCalculator;
