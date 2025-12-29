"use client";
import React, { useState, useMemo } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export default function PersonalLoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(12.5);
  const [loanTenure, setLoanTenure] = useState(3); 

  const stats = useMemo(() => {
    const P = loanAmount;
    const r = interestRate / 12 / 100;
    const n = loanTenure * 12;

    const emi = Math.round((P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
    const totalAmount = emi * n;
    const totalInterest = totalAmount - P;

    return { emi, totalInterest, totalAmount };
  }, [loanAmount, interestRate, loanTenure]);

  const chartData = [
    { name: "Principal", value: loanAmount },
    { name: "Interest", value: stats.totalInterest },
  ];
  const COLORS = ["#f8fafc", "#5367ff"]; // Light background and Blue for Interest

  return (
    <div className="max-w-6xl mx-auto p-10 bg-white border border-gray-100 rounded-[32px] shadow-sm flex flex-col lg:flex-row gap-12 font-sans mt-10">
      <div className="flex-1 space-y-10">
        <h2 className="text-xl font-black text-slate-800 border-l-4 border-indigo-600 pl-4 uppercase tracking-tighter">Personal Loan Calculator</h2>
        
        <div className="space-y-8">
          {/* Amount Slider */}
          <div className="space-y-4">
            <div className="flex justify-between items-center text-sm font-bold text-slate-500 uppercase">
              <span>Loan amount</span>
              <div className="bg-indigo-50 px-4 py-1.5 rounded-lg text-indigo-600 font-black italic border border-indigo-100">₹ {loanAmount.toLocaleString()}</div>
            </div>
            <input type="range" min="10000" max="2500000" step="10000" value={loanAmount} onChange={(e) => setLoanAmount(Number(e.target.value))} className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none accent-indigo-600" />
          </div>

          {/* Interest Slider */}
          <div className="space-y-4">
            <div className="flex justify-between items-center text-sm font-bold text-slate-500 uppercase">
              <span>Interest rate (p.a)</span>
              <div className="bg-indigo-50 px-4 py-1.5 rounded-lg text-indigo-600 font-black border border-indigo-100">{interestRate}%</div>
            </div>
            <input type="range" min="10" max="25" step="0.1" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none accent-indigo-600" />
          </div>

          {/* Tenure Slider */}
          <div className="space-y-4">
            <div className="flex justify-between items-center text-sm font-bold text-slate-500 uppercase">
              <span>Loan tenure (Years)</span>
              <div className="bg-indigo-50 px-4 py-1.5 rounded-lg text-indigo-600 font-black border border-indigo-100">{loanTenure} Yr</div>
            </div>
            <input type="range" min="1" max="5" step="1" value={loanTenure} onChange={(e) => setLoanTenure(Number(e.target.value))} className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none accent-indigo-600" />
          </div>
        </div>

        <div className="pt-8 border-t border-slate-50 space-y-4">
          <div className="flex justify-between text-sm"><span className="text-gray-400 font-bold uppercase tracking-tighter">Monthly EMI</span><span className="font-black text-slate-800 text-lg italic">₹{stats.emi.toLocaleString()}</span></div>
          <div className="flex justify-between text-sm"><span className="text-gray-400 font-bold uppercase tracking-tighter">Total interest</span><span className="font-black text-slate-800">₹{stats.totalInterest.toLocaleString()}</span></div>
          <div className="flex justify-between text-lg font-black pt-2 border-t border-dashed"><span className="text-slate-900">Total amount</span><span className="text-indigo-600">₹{stats.totalAmount.toLocaleString()}</span></div>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center bg-slate-50/30 rounded-3xl p-8">
        <div className="w-72 h-72">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart><Pie data={chartData} innerRadius={85} outerRadius={115} dataKey="value" startAngle={90} endAngle={450}>{chartData.map((_, i) => <Cell key={i} fill={COLORS[i]} stroke="none" />)}</Pie></PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex gap-8 mt-8">
          <div className="flex items-center gap-2 text-[10px] font-black uppercase text-gray-400"><div className="w-3 h-1.5 bg-slate-100 rounded-full"></div>Principal</div>
          <div className="flex items-center gap-2 text-[10px] font-black uppercase text-gray-400"><div className="w-3 h-1.5 bg-indigo-600 rounded-full"></div>Interest</div>
        </div>
      </div>
    </div>
  );
}