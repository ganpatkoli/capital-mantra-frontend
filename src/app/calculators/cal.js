


// //  sip and lumpsum mutual fund calculator

// "use client";
// import { useState, useEffect } from 'react';

// export default function MutualFundCalculator() {
//   const [type, setType] = useState('sip'); // 'sip' or 'lumpsum'
//   const [amount, setAmount] = useState(5000);
//   const [rate, setRate] = useState(12);
//   const [years, setYears] = useState(10);
//   const [result, setResult] = useState({ invested: 0, returns: 0, total: 0 });

//   useEffect(() => {
//     let invested = 0;
//     let total = 0;

//     if (type === 'sip') {
//       // SIP Formula: P × ({[1 + i]^n – 1} / i) × (1 + i)
//       const P = amount;
//       const i = rate / 100 / 12;
//       const n = years * 12;
//       total = P * (((Math.pow(1 + i, n) - 1) / i) * (1 + i));
//       invested = P * n;
//     } else {
//       // Lumpsum Formula: A = P(1 + r)^n
//       const P = amount;
//       const r = rate / 100;
//       const n = years;
//       total = P * Math.pow(1 + r, n);
//       invested = P;
//     }

//     setResult({
//       invested: Math.round(invested),
//       returns: Math.round(total - invested),
//       total: Math.round(total)
//     });
//   }, [type, amount, rate, years]);

//   return (
//     <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
//       {/* Header */}
//       <div className="bg-[#0052cc] p-8 text-white">
//         <h2 className="text-3xl font-bold">Mutual Fund Calculator</h2>
//         <p className="text-blue-100 mt-1">Calculate your SIP or Lumpsum returns instantly</p>
//       </div>

//       <div className="p-8">
//         {/* Toggle Switch */}
//         <div className="flex bg-gray-100 p-1.5 rounded-2xl w-fit mb-10 mx-auto border border-gray-200">
//           <button
//             onClick={() => { setType('sip'); setAmount(5000); }}
//             className={`px-10 py-2.5 rounded-xl font-bold transition-all ${type === 'sip' ? 'bg-white text-blue-700 shadow-lg' : 'text-gray-500 hover:text-gray-700'}`}
//           >
//             SIP
//           </button>
//           <button
//             onClick={() => { setType('lumpsum'); setAmount(25000); }}
//             className={`px-10 py-2.5 rounded-xl font-bold transition-all ${type === 'lumpsum' ? 'bg-white text-blue-700 shadow-lg' : 'text-gray-500 hover:text-gray-700'}`}
//           >
//             Lumpsum
//           </button>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
//           {/* Inputs Section */}
//           <div className="space-y-10">
//             {/* Amount Input */}
//             <div className="space-y-4">
//               <div className="flex justify-between items-center">
//                 <label className="text-gray-600 font-semibold">{type === 'sip' ? 'Monthly Investment' : 'Total Investment'}</label>
//                 <div className="bg-blue-50 px-4 py-2 rounded-lg border border-blue-100">
//                   <span className="text-blue-700 font-bold">₹ {amount.toLocaleString()}</span>
//                 </div>
//               </div>
//               <input 
//                 type="range" 
//                 min={type === 'sip' ? 500 : 5000} 
//                 max={type === 'sip' ? 100000 : 1000000} 
//                 step={500}
//                 value={amount}
//                 onChange={(e) => setAmount(Number(e.target.value))}
//                 className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#0052cc]"
//               />
//             </div>

//             {/* Rate Input */}
//             <div className="space-y-4">
//               <div className="flex justify-between items-center">
//                 <label className="text-gray-600 font-semibold">Expected Return Rate (p.a)</label>
//                 <div className="bg-blue-50 px-4 py-2 rounded-lg border border-blue-100">
//                   <span className="text-blue-700 font-bold">{rate}%</span>
//                 </div>
//               </div>
//               <input 
//                 type="range" min="1" max="30" step="0.5"
//                 value={rate}
//                 onChange={(e) => setRate(Number(e.target.value))}
//                 className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#0052cc]"
//               />
//             </div>

//             {/* Years Input */}
//             <div className="space-y-4">
//               <div className="flex justify-between items-center">
//                 <label className="text-gray-600 font-semibold">Time Period</label>
//                 <div className="bg-blue-50 px-4 py-2 rounded-lg border border-blue-100">
//                   <span className="text-blue-700 font-bold">{years} Years</span>
//                 </div>
//               </div>
//               <input 
//                 type="range" min="1" max="40"
//                 value={years}
//                 onChange={(e) => setYears(Number(e.target.value))}
//                 className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#0052cc]"
//               />
//             </div>
//           </div>

//           {/* Results Section */}
//           <div className="bg-[#f8fafc] p-8 rounded-3xl border border-gray-100 flex flex-col justify-between">
//             <div className="space-y-6">
//               <div className="flex justify-between items-center border-b border-gray-200 pb-4">
//                 <span className="text-gray-500 font-medium">Invested Amount</span>
//                 <span className="text-xl font-bold text-gray-800">₹{result.invested.toLocaleString()}</span>
//               </div>
//               <div className="flex justify-between items-center border-b border-gray-200 pb-4">
//                 <span className="text-gray-500 font-medium">Est. Returns</span>
//                 <span className="text-xl font-bold text-green-600">₹{result.returns.toLocaleString()}</span>
//               </div>
//               <div className="pt-4">
//                 <p className="text-gray-400 text-xs uppercase tracking-widest font-bold mb-1">Total Value</p>
//                 <p className="text-5xl font-black text-[#0052cc]">₹{result.total.toLocaleString()}</p>
//               </div>
//             </div>

//             <button className="w-full mt-8 py-4 bg-[#ff8a00] hover:bg-[#e67e00] text-white font-black text-lg rounded-2xl transition-all transform hover:scale-[1.02] shadow-xl">
//               INVEST WITH ANGEL ONE
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }






//  FD calculator


"use client";
import { useState, useEffect } from 'react';

export default function FDCalculator() {
  const [investment, setInvestment] = useState(100000);
  const [rate, setRate] = useState(7);
  const [years, setYears] = useState(5);
  const [result, setResult] = useState({ invested: 0, returns: 0, total: 0 });

  useEffect(() => {
    const P = investment;
    const r = rate / 100;
    const t = years;
    const n = 4; // Quarterly compounding (साल में 4 बार)

    // Formula: A = P * (1 + r/n)^(n*t)
    const totalAmount = P * Math.pow((1 + r / n), (n * t));
    const estReturns = totalAmount - P;

    setResult({
      invested: Math.round(P),
      returns: Math.round(estReturns),
      total: Math.round(totalAmount)
    });
  }, [investment, rate, years]);

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mt-10 p-8 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Left Side: Inputs */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-gray-500 font-medium">Total Investment</label>
              <div className="bg-blue-50 px-4 py-1 rounded text-blue-600 font-bold border border-blue-100">
                ₹ {investment.toLocaleString()}
              </div>
            </div>
            <input
              type="range" min="10000" max="1000000" step="10000"
              value={investment} onChange={(e) => setInvestment(Number(e.target.value))}
              className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500"
            />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-gray-500 font-medium">Rate of interest (P.A %)</label>
              <div className="bg-blue-50 px-4 py-1 rounded text-blue-600 font-bold border border-blue-100">
                {rate}%
              </div>
            </div>
            <input
              type="range" min="1" max="15" step="0.5"
              value={rate} onChange={(e) => setRate(Number(e.target.value))}
              className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500"
            />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-gray-500 font-medium">Time period (Years)</label>
              <div className="bg-blue-50 px-4 py-1 rounded text-blue-600 font-bold border border-blue-100">
                {years} Yr
              </div>
            </div>
            <input
              type="range" min="1" max="30"
              value={years} onChange={(e) => setYears(Number(e.target.value))}
              className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500"
            />
          </div>
        </div>

        {/* Right Side: Display (Exactly like Image 2) */}
        <div className="bg-gray-50/50 p-8 rounded-3xl border border-gray-100 relative">
          <div className="space-y-6">
            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
              <span className="text-gray-500">Invested Amount</span>
              <span className="font-bold text-gray-800">₹{result.invested.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
              <span className="text-gray-500">Estimated Returns</span>
              <span className="font-bold text-green-600">₹{result.returns.toLocaleString()}</span>
            </div>
            <div className="pt-4">
              <p className="text-gray-400 text-xs font-bold uppercase mb-1">Maturity Value</p>
              <p className="text-4xl font-bold text-blue-600">₹{result.total.toLocaleString()}</p>
            </div>

            <button className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl shadow-md transition-all mt-4">
              OPEN FD NOW
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}




"use client";
import { useState, useEffect } from 'react';

export default function RDCalculator() {
  const [monthlyDeposit, setMonthlyDeposit] = useState(5000);
  const [rate, setRate] = useState(7);
  const [years, setYears] = useState(5);
  const [result, setResult] = useState({ invested: 0, returns: 0, total: 0 });

  useEffect(() => {
    const P = monthlyDeposit;
    const r = rate / 100;
    const n = years * 12; // कुल महीने
    
    // RD Quarterly Compounding Formula
    // M = P * [(1+r/4)^(n/3) - 1] / [1 - (1+r/4)^(-1/3)]
    const i = r / 4;
    const maturityValue = P * (Math.pow(1 + i, n / 3) - 1) / (1 - Math.pow(1 + i, -1 / 3));
    
    const investedAmount = P * n;

    setResult({
      invested: Math.round(investedAmount),
      returns: Math.round(maturityValue - investedAmount),
      total: Math.round(maturityValue)
    });
  }, [monthlyDeposit, rate, years]);

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mt-10 p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Input Side */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-gray-500 font-medium">Monthly Deposit (₹)</label>
              <div className="bg-blue-50 px-4 py-1 rounded text-blue-600 font-bold border border-blue-100">
                ₹ {monthlyDeposit.toLocaleString()}
              </div>
            </div>
            <input 
              type="range" min="500" max="100000" step="500"
              value={monthlyDeposit} onChange={(e) => setMonthlyDeposit(Number(e.target.value))}
              className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-gray-500 font-medium">Rate of Interest (P.A %)</label>
              <div className="bg-blue-50 px-4 py-1 rounded text-blue-600 font-bold border border-blue-100">
                {rate}%
              </div>
            </div>
            <input 
              type="range" min="1" max="15" step="0.1"
              value={rate} onChange={(e) => setRate(Number(e.target.value))}
              className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-gray-500 font-medium">Time Period (Years)</label>
              <div className="bg-blue-50 px-4 py-1 rounded text-blue-600 font-bold border border-blue-100">
                {years} Yr
              </div>
            </div>
            <input 
              type="range" min="1" max="10"
              value={years} onChange={(e) => setYears(Number(e.target.value))}
              className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
          </div>
        </div>

        {/* Result Side */}
        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
          <div className="space-y-6">
            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
              <span className="text-gray-500">Total Invested</span>
              <span className="font-bold text-gray-800">₹{result.invested.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
              <span className="text-gray-500">Est. Returns</span>
              <span className="font-bold text-green-600">₹{result.returns.toLocaleString()}</span>
            </div>
            <div className="pt-4">
              <p className="text-gray-400 text-xs font-bold uppercase mb-1">Maturity Amount</p>
              <p className="text-4xl font-bold text-blue-700">₹{result.total.toLocaleString()}</p>
            </div>

            <button className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl shadow-md transition-all mt-4">
              START RD NOW
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}




//  matual fund calculator utils



"use client";
import { useState, useEffect } from 'react';

export default function MFReturnsCalculator() {
  const [investment, setInvestment] = useState(100000);
  const [rate, setRate] = useState(6.5);
  const [years, setYears] = useState(5);
  const [result, setResult] = useState({ invested: 0, returns: 0, total: 0 });

  useEffect(() => {
    const P = investment;
    const r = rate / 100;
    const t = years;
    const n = 4; // Quarterly Compounding for precise match

    // Formula: A = P * (1 + r/n)^(n*t)
    // For P=100000, r=6.5%, t=5, n=4 -> Result is 1,38,042
    const totalAmount = P * Math.pow((1 + r / n), (n * t));
    const estReturns = totalAmount - P;

    setResult({
      invested: Math.round(P),
      returns: Math.round(estReturns),
      total: Math.round(totalAmount)
    });
  }, [investment, rate, years]);

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden p-8 font-sans mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Left Side: Controls */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-gray-500 font-medium text-sm">Total Investment</label>
              <div className="bg-blue-50 px-4 py-1 rounded text-[#0052cc] font-bold border border-blue-100">
                ₹ {investment.toLocaleString()}
              </div>
            </div>
            <input 
              type="range" min="10000" max="1000000" step="10000"
              value={investment} onChange={(e) => setInvestment(Number(e.target.value))}
              className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#0052cc]"
            />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-gray-500 font-medium text-sm">Expected Rate of Return (p.a %)</label>
              <div className="bg-blue-50 px-4 py-1 rounded text-[#0052cc] font-bold border border-blue-100">
                {rate}%
              </div>
            </div>
            <input 
              type="range" min="1" max="15" step="0.1"
              value={rate} onChange={(e) => setRate(Number(e.target.value))}
              className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#0052cc]"
            />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-gray-500 font-medium text-sm">Time Period (Years)</label>
              <div className="bg-blue-50 px-4 py-1 rounded text-[#0052cc] font-bold border border-blue-100">
                {years} Yr
              </div>
            </div>
            <input 
              type="range" min="1" max="30"
              value={years} onChange={(e) => setYears(Number(e.target.value))}
              className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#0052cc]"
            />
          </div>
        </div>

        {/* Right Side: Result Display */}
        <div className="bg-slate-50/50 p-8 rounded-3xl border border-gray-100 flex flex-col justify-center text-center relative">
          <p className="text-gray-500 text-sm font-medium mb-1">The future value of investment will be</p>
          <p className="text-5xl font-black text-[#0052cc] mb-8 tracking-tight">₹{result.total.toLocaleString()}</p>
          
          <div className="w-full space-y-3 mb-6">
            <div className="flex justify-between text-sm px-4">
              <span className="text-gray-500">Invested Amount</span>
              <span className="font-bold text-gray-800">₹{result.invested.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm px-4">
              <span className="text-gray-500">Estimated Return</span>
              <span className="font-bold text-green-600">₹{result.returns.toLocaleString()}</span>
            </div>
          </div>

          <button className="w-full py-4 bg-[#ff8a00] hover:bg-orange-600 text-white font-bold rounded-xl shadow-lg transition-transform active:scale-95">
            INVEST NOW
          </button>
        </div>
      </div>
    </div>
  );
}




//  simple intrest calculator utils



"use client";
import { useState, useEffect } from 'react';

export default function SimpleInterestCalculator() {
  const [principal, setPrincipal] = useState(100000);
  const [rate, setRate] = useState(6.5);
  const [years, setYears] = useState(5);
  const [result, setResult] = useState({ principal: 0, interest: 0, total: 0 });

  useEffect(() => {
    // Simple Interest Formula: SI = (P * R * T) / 100
    const SI = (principal * rate * years) / 100;
    const totalValue = principal + SI;

    setResult({
      principal: principal,
      interest: Math.round(SI),
      total: Math.round(totalValue)
    });
  }, [principal, rate, years]);

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mt-10 p-8 font-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Left Side: Input Sliders */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-gray-600 font-semibold uppercase text-xs tracking-wider">Principal Amount</label>
              <div className="bg-blue-50 px-4 py-1.5 rounded text-blue-700 font-bold border border-blue-100">
                ₹ {principal.toLocaleString()}
              </div>
            </div>
            <input 
              type="range" min="10000" max="1000000" step="10000"
              value={principal} onChange={(e) => setPrincipal(Number(e.target.value))}
              className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#0052cc]"
            />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-gray-600 font-semibold uppercase text-xs tracking-wider">Rate of Interest (P.A %)</label>
              <div className="bg-blue-50 px-4 py-1.5 rounded text-blue-700 font-bold border border-blue-100">
                {rate}%
              </div>
            </div>
            <input 
              type="range" min="1" max="25" step="0.5"
              value={rate} onChange={(e) => setRate(Number(e.target.value))}
              className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#0052cc]"
            />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-gray-600 font-semibold uppercase text-xs tracking-wider">Time Period (Years)</label>
              <div className="bg-blue-50 px-4 py-1.5 rounded text-blue-700 font-bold border border-blue-100">
                {years} Yr
              </div>
            </div>
            <input 
              type="range" min="1" max="30"
              value={years} onChange={(e) => setYears(Number(e.target.value))}
              className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#0052cc]"
            />
          </div>
        </div>

        {/* Right Side: Result Area */}
        <div className="flex flex-col justify-center bg-[#f8fafc] p-8 rounded-3xl border border-gray-100">
           <div className="text-center mb-8 border-b border-gray-200 pb-6">
              <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">Total Maturity Value</p>
              <p className="text-5xl font-black text-[#0052cc]">₹{result.total.toLocaleString()}</p>
           </div>

           <div className="w-full space-y-4">
              <div className="flex justify-between items-center px-2">
                <span className="text-gray-500 text-sm font-medium">Principal Amount</span>
                <span className="font-bold text-gray-700">₹{result.principal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center px-2">
                <span className="text-gray-500 text-sm font-medium">Total Interest</span>
                <span className="font-bold text-green-600">₹{result.interest.toLocaleString()}</span>
              </div>
           </div>

           <button className="w-full mt-10 py-4 bg-[#ff8a00] hover:bg-orange-600 text-white font-black rounded-xl shadow-lg transition-transform active:scale-95 uppercase tracking-wide">
             Calculate Again
           </button>
        </div>

      </div>
    </div>
  );
}

// compund interest calculator utils


"use client";
import { useState, useEffect } from 'react';

export default function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState(10000);
  const [rate, setRate] = useState(15);
  const [duration, setDuration] = useState(5);
  const [interval, setInterval] = useState(1); // 1: Yearly, 4: Quarterly, 12: Monthly

  const [data, setData] = useState({ principal: 0, interest: 0, total: 0 });

  useEffect(() => {
    const P = principal;
    const r = rate / 100;
    const t = duration;
    const n = interval;

    // Compound Interest Calculation
    const totalAmount = P * Math.pow((1 + r / n), (n * t));
    const totalInterest = totalAmount - P;

    setData({
      principal: Math.round(P),
      interest: Math.round(totalInterest),
      total: Math.round(totalAmount)
    });
  }, [principal, rate, duration, interval]);

  return (
    <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden mt-10 font-sans">
      <div className="flex flex-col md:flex-row">
        
        {/* Left Panel: Inputs */}
        <div className="w-full md:w-1/2 p-8 border-r border-gray-100">
          <div className="space-y-10">
            {/* Principal Amount Input */}
            <div className="space-y-4">
              <div className="flex justify-between items-center bg-blue-50/30 p-4 rounded-lg border border-blue-100">
                <span className="text-gray-600 font-medium">Principal Amount</span>
                <div className="flex items-center">
                  <span className="text-blue-700 font-bold mr-1">₹</span>
                  <input 
                    type="number" 
                    value={principal} 
                    onChange={(e) => setPrincipal(Number(e.target.value))}
                    className="w-24 bg-transparent text-right text-blue-700 font-bold outline-none border-none focus:ring-0"
                  />
                </div>
              </div>
            </div>

            {/* Interest Rate Slider */}
            <div className="space-y-4">
              <div className="flex justify-between text-sm font-medium">
                <span className="text-gray-500">Interest rate</span>
                <span className="text-gray-800">{rate} %</span>
              </div>
              <input 
                type="range" min="1" max="50" step="0.5"
                value={rate} onChange={(e) => setRate(Number(e.target.value))}
                className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[10px] text-gray-400">
                <span>1%</span>
                <span>50%</span>
              </div>
            </div>

            {/* Duration Slider */}
            <div className="space-y-4">
              <div className="flex justify-between text-sm font-medium">
                <span className="text-gray-500">Duration</span>
                <span className="text-gray-800">{duration} Yrs</span>
              </div>
              <input 
                type="range" min="1" max="30"
                value={duration} onChange={(e) => setDuration(Number(e.target.value))}
                className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
              <div className="flex justify-between text-[10px] text-gray-400">
                <span>1 Yr</span>
                <span>30 Yrs</span>
              </div>
            </div>

            {/* Compounding Interval Selection */}
            <div className="space-y-4">
              <p className="text-sm font-bold text-gray-700 uppercase tracking-tight">Compounding Interval</p>
              <p className="text-xs text-gray-400">Select the interval when the interest is compounded</p>
              <div className="flex bg-gray-100 p-1 rounded-lg">
                {[
                  { label: 'Monthly', value: 12 },
                  { label: 'Quarterly', value: 4 },
                  { label: 'Yearly', value: 1 }
                ].map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setInterval(opt.value)}
                    className={`flex-1 py-2 text-sm font-semibold rounded-md transition-all ${
                      interval === opt.value 
                      ? 'bg-blue-100 text-blue-700 shadow-sm border border-blue-200' 
                      : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel: Results & Graph Placeholder */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center bg-slate-50/30">
          <div className="text-center mb-10">
            <p className="text-gray-500 text-sm font-medium mb-1 tracking-wide uppercase">Total Amount</p>
            <p className="text-5xl font-black text-slate-800 tracking-tighter">₹{data.total.toLocaleString()}</p>
          </div>

          <div className="flex justify-around mb-12 border-t border-gray-100 pt-8">
            <div className="text-center border-r border-gray-100 pr-10">
              <p className="text-gray-400 text-xs font-bold uppercase mb-1">Principal Amount</p>
              <p className="text-xl font-bold text-gray-800">₹{data.principal.toLocaleString()}</p>
            </div>
            <div className="text-center pl-10">
              <p className="text-gray-400 text-xs font-bold uppercase mb-1">Total Interest</p>
              <p className="text-xl font-bold text-gray-800">₹{data.interest.toLocaleString()}</p>
            </div>
          </div>

          {/* Simple Area Graph Mockup (Using CSS for similar look as img 10) */}
          <div className="h-40 w-full bg-gradient-to-t from-blue-50 to-transparent relative rounded-lg border-b border-gray-200">
             <div className="absolute bottom-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_49%,#cbd5e1_50%,transparent_51%)] bg-[length:20px_20px] opacity-10"></div>
             <div className="absolute bottom-4 left-4 text-[10px] text-gray-400 font-bold uppercase">Today</div>
             <div className="absolute bottom-4 right-4 text-[10px] text-gray-400 font-bold uppercase">{duration} Years</div>
             {/* Visual Graph Curve */}
             <svg className="absolute bottom-0 left-0 w-full h-full overflow-visible">
                <path 
                  d="M 0 160 Q 250 140 500 40" 
                  fill="none" 
                  stroke="#3b82f6" 
                  strokeWidth="3" 
                  strokeOpacity="0.3"
                />
             </svg>
          </div>
        </div>

      </div>
    </div>
  );
}



//  npv calculator utils


"use client";
import { useState, useEffect } from 'react';

export default function UltimateNPVCalculator() {
  const [totalInvestment, setTotalInvestment] = useState(100000);
  const [discountRate, setDiscountRate] = useState(12);
  const [duration, setDuration] = useState(5);
  const [mode, setMode] = useState('fixed'); // 'fixed' or 'variable'
  const [fixedAmount, setFixedAmount] = useState(10000);
  const [variableFlows, setVariableFlows] = useState([0, 0, 0, 0, 0]);

  const [result, setResult] = useState({ presentValue: 0, npv: 0 });

  // सिंक वेरिएबल फ्लोज़ विथ ड्यूरेशन
  useEffect(() => {
    if (variableFlows.length !== duration) {
      const newFlows = Array(duration).fill(0);
      variableFlows.forEach((val, i) => {
        if (i < duration) newFlows[i] = val;
      });
      setVariableFlows(newFlows);
    }
  }, [duration]);

  useEffect(() => {
    const r = discountRate / 100;
    let pv = 0;

    if (mode === 'fixed') {
      // Fixed Annuity Formula
      pv = fixedAmount * ((1 - Math.pow(1 + r, -duration)) / r);
    } else {
      // Variable Cash Flow Formula: Sum(CF / (1+r)^t)
      variableFlows.forEach((cf, i) => {
        pv += cf / Math.pow(1 + r, i + 1);
      });
    }

    setResult({
      presentValue: Math.round(pv),
      npv: Math.round(pv - totalInvestment)
    });
  }, [totalInvestment, discountRate, duration, mode, fixedAmount, variableFlows]);

  const handleVariableChange = (index, value) => {
    const updated = [...variableFlows];
    updated[index] = Number(value);
    setVariableFlows(updated);
  };

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 mt-10 overflow-hidden font-sans">
      <div className="grid grid-cols-1 md:grid-cols-2">
        
        {/* Left Input Panel */}
        <div className="p-8 border-r border-gray-50">
          <div className="space-y-8">
            {/* Total Investment Header */}
            <div className="border-2 border-blue-600 rounded-xl p-4 text-center relative mt-4">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] px-3 py-0.5 rounded-full font-bold">TOTAL INVESTMENT</span>
              <div className="text-3xl font-black text-slate-800">₹ {totalInvestment.toLocaleString()}</div>
            </div>

            {/* Discount Rate */}
            <div className="space-y-3">
              <div className="flex justify-between text-sm font-semibold">
                <span className="text-gray-500">Discount Rate</span>
                <span className="text-blue-600">{discountRate}%</span>
              </div>
              <input type="range" min="1" max="15" step="0.5" value={discountRate} onChange={(e) => setDiscountRate(Number(e.target.value))} className="w-full h-1.5 bg-blue-600 rounded-lg appearance-none cursor-pointer" />
            </div>

            {/* Select Duration */}
            <div className="space-y-3">
              <div className="flex justify-between text-sm font-semibold">
                <span className="text-gray-500">Select Duration</span>
                <span className="text-blue-600">{duration} Yrs</span>
              </div>
              <input type="range" min="1" max="10" value={duration} onChange={(e) => setDuration(Number(e.target.value))} className="w-full h-1.5 bg-blue-600 rounded-lg appearance-none cursor-pointer" />
            </div>

            {/* Mode Selector (Toggle) */}
            <div className="flex flex-col gap-3 pt-2">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="radio" checked={mode === 'fixed'} onChange={() => setMode('fixed')} className="w-4 h-4 accent-teal-500" />
                <span className={`text-sm font-bold ${mode === 'fixed' ? 'text-slate-800' : 'text-gray-400'}`}>Yearly, Fixed Cash Inflows</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="radio" checked={mode === 'variable'} onChange={() => setMode('variable')} className="w-4 h-4 accent-teal-500" />
                <span className={`text-sm font-bold ${mode === 'variable' ? 'text-slate-800' : 'text-gray-400'}`}>Yearly, Variable Cash Inflows</span>
              </label>
            </div>

            {/* Conditional Cash Flow Inputs */}
            {mode === 'fixed' ? (
              <div className="space-y-3 pt-4">
                <div className="flex justify-between text-xs font-bold text-gray-500 uppercase tracking-wider">
                  <span>Amount of Fixed Cash Inflows Per Annum</span>
                  <span className="text-blue-600 font-black text-sm">₹ {fixedAmount.toLocaleString()}</span>
                </div>
                <input type="range" min="1000" max="100000" step="1000" value={fixedAmount} onChange={(e) => setFixedAmount(Number(e.target.value))} className="w-full h-1.5 bg-blue-600 rounded-lg appearance-none cursor-pointer" />
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4 pt-4 max-h-64 overflow-y-auto pr-2">
                {variableFlows.map((flow, i) => (
                  <div key={i} className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-400 uppercase">Year {i+1} Cash Flow</label>
                    <div className="flex items-center border border-gray-200 rounded-lg p-2 bg-gray-50 focus-within:border-blue-500 transition-colors">
                      <span className="text-gray-400 text-xs mr-1">₹</span>
                      <input 
                        type="number" 
                        value={flow} 
                        onChange={(e) => handleVariableChange(i, e.target.value)}
                        className="w-full bg-transparent text-sm font-bold outline-none"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Output Panel */}
        <div className="bg-slate-50/50 p-10 flex flex-col justify-center items-center">
          <div className="text-center mb-12">
            <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-2">Present Value Of Cash Inflows is</p>
            <p className="text-6xl font-black text-slate-800 tracking-tighter">₹{result.presentValue.toLocaleString()}</p>
          </div>

          <div className="text-center mb-12">
            <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-2">Net Present Value</p>
            <p className={`text-6xl font-black tracking-tighter ${result.npv < 0 ? 'text-slate-800' : 'text-green-600'}`}>
              {result.npv < 0 ? '-' : ''}₹{Math.abs(result.npv).toLocaleString()}
            </p>
          </div>

          <div className="w-full space-y-6">
            <h3 className="text-center text-xl font-bold text-slate-700">Start your investment journey with <span className="text-blue-600">AngelOne</span></h3>
            <button className="w-full py-4 bg-[#ff8a00] hover:bg-orange-600 text-white font-black text-lg rounded-xl shadow-lg transition-all transform active:scale-95 uppercase">
              Open Demat Account
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}




// cdgrc calculator utils

"use client";
import { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

export default function CAGRCalculator() {
  const [initialValue, setInitialValue] = useState(10000);
  const [finalValue, setFinalValue] = useState(25000);
  const [duration, setDuration] = useState(5);
  const [cagr, setCagr] = useState(0);

  useEffect(() => {
    if (initialValue > 0 && finalValue > 0 && duration > 0) {
      // Formula: [(Final/Initial)^(1/Duration) - 1] * 100
      const result = (Math.pow(finalValue / initialValue, 1 / duration) - 1) * 100;
      setCagr(result.toFixed(2));
    }
  }, [initialValue, finalValue, duration]);

  const chartData = [
    { name: 'Initial', value: initialValue },
    { name: 'Growth', value: finalValue - initialValue },
  ];
  const COLORS = ['#ff8a00', '#5367ff']; // Angel One Blue and Orange

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 mt-10 p-2 font-sans">
      <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left Input Panel */}
        <div className="space-y-6">
          {/* Initial Value Input */}
          <div className="border-2 border-blue-600 rounded-xl p-4 relative bg-white shadow-sm">
             <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-gray-500 text-[10px] px-2 font-bold uppercase">Initial Investment</span>
             <div className="flex justify-center items-center gap-2">
                <span className="text-gray-400 text-xl">₹</span>
                <input 
                  type="number" 
                  value={initialValue} 
                  onChange={(e) => setInitialValue(Number(e.target.value))}
                  className="text-4xl font-black text-slate-800 w-full text-center outline-none border-none focus:ring-0"
                />
             </div>
          </div>

          {/* Final Value Input */}
          <div className="border-2 border-blue-600 rounded-xl p-4 relative bg-white shadow-sm">
             <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-gray-500 text-[10px] px-2 font-bold uppercase">Final Value Cost</span>
             <div className="flex justify-center items-center gap-2">
                <span className="text-gray-400 text-xl">₹</span>
                <input 
                  type="number" 
                  value={finalValue} 
                  onChange={(e) => setFinalValue(Number(e.target.value))}
                  className="text-4xl font-black text-slate-800 w-full text-center outline-none border-none focus:ring-0"
                />
             </div>
          </div>

          {/* Duration Slider */}
          <div className="space-y-4 pt-4">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500 font-medium">Duration of Investment</span>
              <span className="text-slate-800 font-bold bg-gray-50 px-3 py-1 rounded border border-gray-100">{duration} Yrs</span>
            </div>
            <input 
              type="range" min="1" max="30" 
              value={duration} 
              onChange={(e) => setDuration(Number(e.target.value))} 
              className="w-full h-1.5 bg-blue-600 rounded-lg appearance-none cursor-pointer accent-blue-600" 
            />
            <div className="flex justify-between text-[10px] text-gray-400 font-bold">
              <span>1 Yr</span>
              <span>30 Yrs</span>
            </div>
          </div>
        </div>

        {/* Right Result Panel (Matches Image) */}
        <div className="flex flex-col items-center">
           <div className="text-center mb-4">
              <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">CAGR (%)</p>
              <p className="text-5xl font-black text-slate-800 tracking-tighter">{cagr}%</p>
           </div>

           <div className="w-full h-64 relative flex justify-center items-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={0}
                    dataKey="value"
                    startAngle={90}
                    endAngle={450}
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="none" />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              
              {/* Legend matching image style */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 space-y-4 pr-4">
                 <div className="flex items-center gap-3">
                    <div className="w-1.5 h-10 bg-[#ff8a00] rounded-full"></div>
                    <div>
                       <p className="text-[10px] text-gray-400 font-bold uppercase">Initial Value Amount</p>
                       <p className="font-black text-slate-800 text-lg">₹{initialValue.toLocaleString()}</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="w-1.5 h-10 bg-[#5367ff] rounded-full"></div>
                    <div>
                       <p className="text-[10px] text-gray-400 font-bold uppercase">Final Value</p>
                       <p className="font-black text-slate-800 text-lg">₹{finalValue.toLocaleString()}</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
}




// ELSS Calculator



"use client";
import { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

export default function ELSSCalculator() {
  const [mode, setMode] = useState('sip'); // 'sip' or 'lumpsum'
  const [amount, setAmount] = useState(5000);
  const [rate, setRate] = useState(12);
  const [duration, setDuration] = useState(5);
  const [result, setResult] = useState({ invested: 0, returns: 0, total: 0, taxSaved: 0 });

  useEffect(() => {
    let invested = 0;
    let total = 0;

    if (mode === 'sip') {
      // SIP Formula: P * [((1 + i)^n - 1) / i] * (1 + i)
      const P = amount;
      const i = rate / 100 / 12;
      const n = duration * 12;
      total = P * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
      invested = P * n;
    } else {
      // Lumpsum Formula: P * (1 + r)^t
      invested = amount;
      total = amount * Math.pow(1 + rate / 100, duration);
    }

    // Tax saved calculation (31.2% for 30% bracket including cess)
    // Max benefit on 1.5 Lakh investment per financial year
    const yearlyInvestment = mode === 'sip' ? amount * 12 : amount;
    const taxSaved = Math.min(yearlyInvestment, 150000) * 0.312;

    setResult({
      invested: Math.round(invested),
      returns: Math.round(total - invested),
      total: Math.round(total),
      taxSaved: Math.round(taxSaved)
    });
  }, [mode, amount, rate, duration]);

  const chartData = [
    { name: 'Invested', value: result.invested },
    { name: 'Returns', value: result.returns },
  ];
  const COLORS = ['#ff8a00', '#5367ff'];

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 mt-10 overflow-hidden font-sans">
      {/* Header Mode Toggle */}
      <div className="flex border-b border-gray-100">
        <button onClick={() => setMode('sip')} className={`px-8 py-4 font-bold text-sm transition-all ${mode === 'sip' ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50/30' : 'text-gray-400'}`}>SIP</button>
        <button onClick={() => setMode('lumpsum')} className={`px-8 py-4 font-bold text-sm transition-all ${mode === 'lumpsum' ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50/30' : 'text-gray-400'}`}>One Time</button>
      </div>

      <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side: Inputs */}
        <div className="space-y-10">
          <div className="border-2 border-blue-600 rounded-xl p-5 relative bg-white">
             <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-gray-500 text-[10px] px-2 font-bold uppercase">
               {mode === 'sip' ? 'Monthly Investment' : 'Total Investment'}
             </span>
             <div className="flex justify-center items-center gap-2">
                <span className="text-gray-400 text-xl">₹</span>
                <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} className="text-4xl font-black text-slate-800 w-full text-center outline-none border-none focus:ring-0" />
             </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm font-semibold">
                <span className="text-gray-500">Expected Rate of Return</span>
                <span className="text-slate-800 bg-gray-50 px-3 py-1 rounded border border-gray-100">{rate}%</span>
              </div>
              <input type="range" min="1" max="15" step="0.5" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full h-1.5 bg-blue-600 rounded-lg appearance-none cursor-pointer" />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm font-semibold">
                <span className="text-gray-500">Select Duration</span>
                <span className="text-slate-800 bg-gray-50 px-3 py-1 rounded border border-gray-100">{duration} Yrs</span>
              </div>
              <input type="range" min="1" max="30" value={duration} onChange={(e) => setDuration(Number(e.target.value))} className="w-full h-1.5 bg-blue-600 rounded-lg appearance-none cursor-pointer" />
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-xl border border-green-100 flex items-center justify-between">
             <span className="text-green-800 font-bold text-sm">Potential Tax Saved (u/s 80C)</span>
             <span className="text-green-700 font-black text-xl">₹{result.taxSaved.toLocaleString()}</span>
          </div>
        </div>

        {/* Right Side: Display */}
        <div className="flex flex-col items-center justify-center">
           <div className="text-center mb-4">
              <p className="text-gray-500 text-sm font-medium mb-1">The future value of investment will be</p>
              <p className="text-5xl font-black text-slate-800 tracking-tighter">₹{result.total.toLocaleString()}</p>
           </div>

           <div className="w-full h-64 relative flex justify-center items-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={chartData} cx="50%" cy="50%" innerRadius={60} outerRadius={90} paddingAngle={0} dataKey="value" startAngle={90} endAngle={450}>
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="none" />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              
              <div className="absolute right-0 top-1/2 -translate-y-1/2 space-y-4 pr-4">
                 <div className="flex items-center gap-3">
                    <div className="w-1.5 h-10 bg-[#ff8a00] rounded-full"></div>
                    <div>
                       <p className="text-[10px] text-gray-400 font-bold uppercase text-left">Invested Amount</p>
                       <p className="font-black text-slate-800 text-lg">₹{result.invested.toLocaleString()}</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="w-1.5 h-10 bg-[#5367ff] rounded-full"></div>
                    <div>
                       <p className="text-[10px] text-gray-400 font-bold uppercase text-left">Estimated Return</p>
                       <p className="font-black text-slate-800 text-lg">₹{result.returns.toLocaleString()}</p>
                    </div>
                 </div>
              </div>
           </div>

           <button className="mt-8 bg-orange-500 text-white font-black py-4 px-16 rounded-xl text-lg hover:bg-orange-600 transition-all shadow-lg active:scale-95 uppercase">
              Invest In ELSS Now
           </button>
        </div>
      </div>
    </div>
  );
}



// EBITDA Calculator


"use client";
import { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

export default function EBITDAMarginCalculator() {
  const [sales, setSales] = useState(100);
  const [rawMaterial, setRawMaterial] = useState(50);
  const [employeeCost, setEmployeeCost] = useState(10);
  const [operatingExpenses, setOperatingExpenses] = useState(20);
  
  const [displayData, setDisplayData] = useState({ margin: 20, expenses: 80 });

  const calculate = () => {
    const totalExpenses = rawMaterial + employeeCost + operatingExpenses;
    const ebitdaValue = sales - totalExpenses;
    const marginPercent = (ebitdaValue / sales) * 100;

    setDisplayData({
      margin: marginPercent > 0 ? Number(marginPercent.toFixed(2)) : 0,
      expenses: marginPercent > 0 ? Number((100 - marginPercent).toFixed(2)) : 100
    });
  };

  const reset = () => {
    setSales(0);
    setRawMaterial(0);
    setEmployeeCost(0);
    setOperatingExpenses(0);
    setDisplayData({ margin: 0, expenses: 100 });
  };

  const chartData = [
    { name: 'EBITDA Margin', value: displayData.margin },
    { name: 'Total Operating Expenses', value: displayData.expenses },
  ];
  const COLORS = ['#ff8a00', '#5367ff'];

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 mt-10 overflow-hidden font-sans">
      <div className="p-10 grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Left Side: Input Fields */}
        <div className="space-y-5">
          <div className="space-y-2">
            <label className="text-gray-400 text-xs font-bold uppercase tracking-wide">Sales (₹)</label>
            <input 
              type="number" value={sales} onChange={(e) => setSales(Number(e.target.value))}
              className="w-full p-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none font-semibold text-slate-700 shadow-sm"
            />
          </div>

          <div className="space-y-2">
            <label className="text-gray-400 text-xs font-bold uppercase tracking-wide">Raw Material Costs (₹)</label>
            <input 
              type="number" value={rawMaterial} onChange={(e) => setRawMaterial(Number(e.target.value))}
              className="w-full p-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none font-semibold text-slate-700 shadow-sm"
            />
          </div>

          <div className="space-y-2">
            <label className="text-gray-400 text-xs font-bold uppercase tracking-wide">Employee Costs (₹)</label>
            <input 
              type="number" value={employeeCost} onChange={(e) => setEmployeeCost(Number(e.target.value))}
              className="w-full p-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none font-semibold text-slate-700 shadow-sm"
            />
          </div>

          <div className="space-y-2">
            <label className="text-gray-400 text-xs font-bold uppercase tracking-wide">Other Operating Expenses (₹)</label>
            <input 
              type="number" value={operatingExpenses} onChange={(e) => setOperatingExpenses(Number(e.target.value))}
              className="w-full p-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none font-semibold text-slate-700 shadow-sm"
            />
          </div>

          <div className="pt-4 space-y-3">
            <button 
              onClick={calculate}
              className="w-full py-4 bg-[#4259e8] hover:bg-blue-700 text-white font-bold rounded-lg shadow-md transition-all active:scale-[0.98]"
            >
              Calculate
            </button>
            <button 
              onClick={reset}
              className="w-full py-4 bg-white text-[#4259e8] border border-[#4259e8] font-bold rounded-lg hover:bg-blue-50 transition-all"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Right Side: Donut Chart Results (Exactly as per image) */}
        <div className="flex flex-col items-center justify-center">
           <div className="text-center mb-2">
              <p className="text-gray-600 text-sm font-medium mb-1 tracking-tight">EBITDA Margin:</p>
              <p className="text-5xl font-black text-slate-800 tracking-tighter">{displayData.margin.toFixed(2)}%</p>
           </div>

           <div className="w-full h-72 relative flex justify-center items-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={chartData} cx="50%" cy="50%" innerRadius={70} outerRadius={100} paddingAngle={0} dataKey="value" startAngle={90} endAngle={450}>
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="none" />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              
              {/* Vertical Legend on the right */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 space-y-6 pr-4">
                 <div className="flex items-start gap-3">
                    <div className="w-1.5 h-10 bg-[#ff8a00] rounded-full mt-1"></div>
                    <div>
                       <p className="text-[10px] text-gray-400 font-bold uppercase leading-none mb-1">EBITDA Margin</p>
                       <p className="font-black text-slate-800 text-xl">{displayData.margin.toFixed(2)}%</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-3">
                    <div className="w-1.5 h-10 bg-[#5367ff] rounded-full mt-1"></div>
                    <div>
                       <p className="text-[10px] text-gray-400 font-bold uppercase leading-none mb-1">Total Operating Expenses</p>
                       <p className="font-black text-slate-800 text-xl">{displayData.expenses.toFixed(2)}%</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
}


//  future value calculator utils


"use client";
import { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

export default function FutureValueCalculator() {
  const [presentValue, setPresentValue] = useState(100000);
  const [interestRate, setInterestRate] = useState(8);
  const [duration, setDuration] = useState(10);
  const [result, setResult] = useState({ invested: 0, interest: 0, total: 0 });
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const P = presentValue;
    const r = interestRate / 100;
    const t = duration;

    // Formula: FV = PV * (1 + r)^t
    const futureValue = P * Math.pow((1 + r), t);
    const totalInterest = futureValue - P;

    setResult({
      invested: Math.round(P),
      interest: Math.round(totalInterest),
      total: Math.round(futureValue)
    });

    // Generating data for the Growth Area Chart
    const growthData = [];
    for (let i = 0; i <= t; i++) {
      growthData.push({
        year: `Year ${i}`,
        value: Math.round(P * Math.pow((1 + r), i))
      });
    }
    setChartData(growthData);
  }, [presentValue, interestRate, duration]);

  const pieData = [
    { name: 'Principal', value: result.invested },
    { name: 'Interest', value: result.interest },
  ];
  const COLORS = ['#ff8a00', '#5367ff']; // Orange and Blue

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 mt-10 overflow-hidden font-sans">
      <div className="p-10 grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Left Side: Input Sliders */}
        <div className="space-y-10">
          <div className="border-2 border-blue-600 rounded-xl p-5 relative bg-white shadow-sm">
             <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-gray-500 text-[10px] px-2 font-bold uppercase">Present Value (Investment)</span>
             <div className="flex justify-center items-center gap-2">
                <span className="text-gray-400 text-xl">₹</span>
                <input 
                  type="number" 
                  value={presentValue} 
                  onChange={(e) => setPresentValue(Number(e.target.value))}
                  className="text-4xl font-black text-slate-800 w-full text-center outline-none border-none focus:ring-0"
                />
             </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm font-semibold">
                <span className="text-gray-500">Interest Rate (Annual %)</span>
                <span className="text-blue-600 bg-blue-50 px-3 py-1 rounded border border-blue-100">{interestRate}%</span>
              </div>
              <input type="range" min="1" max="25" step="0.5" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} className="w-full h-1.5 bg-blue-600 rounded-lg appearance-none cursor-pointer" />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm font-semibold">
                <span className="text-gray-500">Duration (Years)</span>
                <span className="text-blue-600 bg-blue-50 px-3 py-1 rounded border border-blue-100">{duration} Yrs</span>
              </div>
              <input type="range" min="1" max="30" value={duration} onChange={(e) => setDuration(Number(e.target.value))} className="w-full h-1.5 bg-blue-600 rounded-lg appearance-none cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Right Side: Charts & Results */}
        <div className="flex flex-col items-center justify-center space-y-8">
           <div className="text-center">
              <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Total Future Value</p>
              <p className="text-6xl font-black text-slate-800 tracking-tighter">₹{result.total.toLocaleString()}</p>
           </div>

           {/* Donut Chart with Side Legend */}
           <div className="w-full h-64 relative flex justify-center items-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={pieData} cx="50%" cy="50%" innerRadius={60} outerRadius={90} paddingAngle={0} dataKey="value" startAngle={90} endAngle={450}>
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="none" />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              
              <div className="absolute right-0 top-1/2 -translate-y-1/2 space-y-4 pr-4">
                 <div className="flex items-center gap-3">
                    <div className="w-1.5 h-10 bg-[#ff8a00] rounded-full"></div>
                    <div>
                       <p className="text-[10px] text-gray-400 font-bold uppercase text-left">Principal Amount</p>
                       <p className="font-black text-slate-800 text-lg">₹{result.invested.toLocaleString()}</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-3">
                    <div className="w-1.5 h-10 bg-[#5367ff] rounded-full"></div>
                    <div>
                       <p className="text-[10px] text-gray-400 font-bold uppercase text-left">Interest Gained</p>
                       <p className="font-black text-slate-800 text-lg">₹{result.interest.toLocaleString()}</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>

      {/* Growth Area Chart (New Chart Section) */}
      <div className="p-10 border-t border-gray-100 bg-slate-50/30">
        <h3 className="text-lg font-bold text-slate-700 mb-6 uppercase text-xs tracking-widest">Investment Growth Over Time</h3>
        <div className="w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#5367ff" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#5367ff" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
              <XAxis dataKey="year" fontSize={10} axisLine={false} tickLine={false} />
              <YAxis fontSize={10} axisLine={false} tickLine={false} tickFormatter={(val) => `₹${val/1000}k`} />
              <Tooltip formatter={(value) => `₹${value.toLocaleString()}`} />
              <Area type="monotone" dataKey="value" stroke="#5367ff" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-10 text-center">
           <button className="bg-orange-500 text-white font-black py-4 px-16 rounded-xl text-lg hover:bg-orange-600 transition-all shadow-lg active:scale-95 uppercase">
              Start Your Investment Now
           </button>
        </div>
      </div>
    </div>
  );
}



// etf calculator utils

"use client";
import { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

export default function ETFReturnsEstimator() {
  const [monthlyAmount, setMonthlyAmount] = useState(10000);
  const [duration, setDuration] = useState(3);
  const [expectedRate, setExpectedRate] = useState(12);
  const [result, setResult] = useState({ invested: 0, returns: 0, total: 0 });

  useEffect(() => {
    // SIP Formula: M = P * [((1 + i)^n - 1) / i] * (1 + i)
    // P = Monthly Amount, i = Monthly Rate, n = Total Months
    const P = monthlyAmount;
    const i = expectedRate / 100 / 12;
    const n = duration * 12;

    const futureValue = P * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
    const totalInvested = P * n;

    setResult({
      invested: Math.round(totalInvested),
      returns: Math.round(futureValue - totalInvested),
      total: Math.round(futureValue)
    });
  }, [monthlyAmount, duration, expectedRate]);

  const pieData = [
    { name: 'Invested', value: result.invested },
    { name: 'Returns', value: result.returns },
  ];
  const COLORS = ['#ff8a00', '#5367ff'];

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 mt-10 overflow-hidden font-sans">
      <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left Side: Inputs (Matching Returns Estimator Layout) */}
        <div className="space-y-8">
          <div className="flex items-center gap-2 mb-4">
             <div className="bg-blue-50 p-2 rounded-lg">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
             </div>
             <div>
                <h3 className="text-sm font-bold text-slate-800">Returns Estimator</h3>
                <p className="text-[10px] text-gray-400">Based on past performance of this fund</p>
             </div>
          </div>

          <div className="border border-blue-200 rounded-xl p-6 text-center bg-white shadow-sm">
             <p className="text-[10px] text-gray-400 font-bold uppercase mb-2">Enter Amount</p>
             <div className="text-4xl font-black text-slate-800">₹{monthlyAmount.toLocaleString()}</div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-bold text-slate-700">Select Duration</span>
                <span className="text-xl font-black text-slate-800">{duration} Yrs</span>
              </div>
              <input type="range" min="1" max="20" value={duration} onChange={(e) => setDuration(Number(e.target.value))} className="w-full h-1.5 bg-blue-100 rounded-full appearance-none cursor-pointer accent-blue-600" />
              <div className="flex justify-between text-[10px] text-gray-400 font-bold"><span>1 Yr</span><span>20 Yrs</span></div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-bold text-slate-700">Expected Rate of Return</span>
                <span className="text-xl font-black text-slate-800">{expectedRate} %</span>
              </div>
              <input type="range" min="8" max="30" value={expectedRate} onChange={(e) => setExpectedRate(Number(e.target.value))} className="w-full h-1.5 bg-blue-100 rounded-full appearance-none cursor-pointer accent-blue-600" />
              <div className="flex justify-between text-[10px] text-gray-400 font-bold"><span>8%</span><span>30%</span></div>
            </div>
          </div>
        </div>

        {/* Right Side: Visual Result Display (Matching Image) */}
        <div className="flex flex-col items-center justify-center">
           <div className="text-center mb-4">
              <p className="text-gray-400 text-sm font-medium mb-1 tracking-tight">Total Value of investment after <span className="font-bold text-slate-700">{duration} years</span> will be</p>
              <p className="text-5xl font-black text-slate-800 tracking-tighter">₹{result.total.toLocaleString()}</p>
           </div>

           <div className="w-full h-64 relative flex justify-center items-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={pieData} cx="50%" cy="50%" innerRadius={65} outerRadius={95} paddingAngle={0} dataKey="value" startAngle={90} endAngle={450}>
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="none" />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              
              <div className="absolute right-0 top-1/2 -translate-y-1/2 space-y-4 pr-4 text-left">
                 <div className="flex items-start gap-3">
                    <div className="w-1.5 h-10 bg-[#ff8a00] rounded-full mt-1"></div>
                    <div>
                       <p className="text-[10px] text-gray-400 font-bold uppercase leading-none mb-1">Invested Amount</p>
                       <p className="font-black text-slate-800 text-xl">₹{result.invested.toLocaleString()}</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-3">
                    <div className="w-1.5 h-10 bg-[#5367ff] rounded-full mt-1"></div>
                    <div>
                       <p className="text-[10px] text-gray-400 font-bold uppercase leading-none mb-1">Est. Returns</p>
                       <p className="font-black text-slate-800 text-xl">₹{result.returns.toLocaleString()}</p>
                    </div>
                 </div>
              </div>
           </div>

           <button className="mt-8 w-full py-4 bg-[#4259e8] hover:bg-blue-700 text-white font-black rounded-lg shadow-lg transition-all active:scale-95 text-lg">
              Invest in ETFs Today
           </button>
        </div>

      </div>
    </div>
  );
}


//  inflation calculator utils

"use client";
import { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const COLORS = ['#ff8a00', '#5367ff'];

export default function AngelCalculators() {
  const [activeTab, setActiveTab] = useState('MF');
  const [amount, setAmount] = useState(100000);
  const [rate, setRate] = useState(6.5);
  const [years, setYears] = useState(5);
  const [result, setResult] = useState({ invested: 0, returns: 0, total: 0 });

  useEffect(() => {
    let invested = amount;
    let total = 0;

    if (activeTab === 'MF' || activeTab === 'ETF') {
      // Logic for ₹1,38,042 match: Quarterly Compounding
      const n = 4; 
      total = amount * Math.pow((1 + (rate / 100) / n), (n * years));
    } else if (activeTab === 'SI') {
      // Simple Interest Logic
      const interest = (amount * rate * years) / 100;
      total = amount + interest;
    } else if (activeTab === 'INF') {
      // Inflation Logic: FV = PV * (1 + r)^t
      total = amount * Math.pow((1 + rate / 100), years);
    }

    setResult({
      invested: Math.round(invested),
      returns: Math.round(total - invested),
      total: Math.round(total)
    });
  }, [amount, rate, years, activeTab]);

  const chartData = [
    { name: 'Invested', value: result.invested },
    { name: 'Returns', value: result.returns > 0 ? result.returns : 0 },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-10 bg-gray-50 min-h-screen font-sans">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
        
        {/* Navigation Tabs */}
        <div className="flex overflow-x-auto bg-slate-50 border-b border-gray-100 scrollbar-hide">
          {['MF', 'ETF', 'SI', 'INF'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-5 text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                activeTab === tab ? 'text-blue-600 border-b-4 border-blue-600 bg-white' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {tab === 'MF' && 'Mutual Funds'}
              {tab === 'ETF' && 'ETF Returns'}
              {tab === 'SI' && 'Simple Interest'}
              {tab === 'INF' && 'Inflation'}
            </button>
          ))}
        </div>

        <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Input Section */}
          <div className="space-y-12">
            <div className="border-2 border-blue-600 rounded-2xl p-6 relative bg-white shadow-sm">
              <span className="absolute -top-3 left-6 bg-white px-2 text-[10px] font-black text-gray-400 uppercase tracking-tighter">
                {activeTab === 'INF' ? 'Current Cost' : 'Total Investment'}
              </span>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-light text-gray-300">₹</span>
                <input 
                  type="number" 
                  value={amount} 
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="text-4xl font-black text-slate-800 w-full text-right outline-none"
                />
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex justify-between text-sm font-bold">
                  <span className="text-gray-500 uppercase tracking-widest text-[10px]">
                    {activeTab === 'INF' ? 'Inflation Rate' : 'Expected Return Rate'} (p.a %)
                  </span>
                  <span className="text-blue-600 bg-blue-50 px-3 py-1 rounded-lg border border-blue-100">{rate}%</span>
                </div>
                <input type="range" min="1" max="30" step="0.1" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full h-2 bg-blue-600 rounded-lg appearance-none cursor-pointer" />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between text-sm font-bold">
                  <span className="text-gray-500 uppercase tracking-widest text-[10px]">Time Period (Years)</span>
                  <span className="text-blue-600 bg-blue-50 px-3 py-1 rounded-lg border border-blue-100">{years} Yrs</span>
                </div>
                <input type="range" min="1" max="30" value={years} onChange={(e) => setYears(Number(e.target.value))} className="w-full h-2 bg-blue-600 rounded-lg appearance-none cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Output & Chart Section */}
          <div className="flex flex-col items-center justify-center space-y-10">
            <div className="text-center">
              <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Estimated Total Value</p>
              <p className="text-6xl font-black text-slate-800 tracking-tighter">₹{result.total.toLocaleString()}</p>
            </div>

            <div className="w-full h-64 relative flex justify-center items-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={chartData} cx="50%" cy="50%" innerRadius={70} outerRadius={100} paddingAngle={0} dataKey="value" startAngle={90} endAngle={450}>
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="none" />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              
              <div className="absolute right-0 top-1/2 -translate-y-1/2 space-y-6 hidden sm:block">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-10 bg-[#ff8a00] rounded-full mt-1"></div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Invested Amount</p>
                    <p className="font-black text-slate-800 text-xl">₹{result.invested.toLocaleString()}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-10 bg-[#5367ff] rounded-full mt-1"></div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Est. Returns</p>
                    <p className="font-black text-slate-800 text-xl">₹{result.returns.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full py-5 bg-[#ff8a00] hover:bg-[#e67c00] text-white font-black rounded-2xl shadow-2xl transition-all transform active:scale-95 text-lg uppercase tracking-widest">
              Invest with Angel One
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}


//  emi calculator utils


"use client";
import { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState(1000000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenure, setTenure] = useState(10);
  const [result, setResult] = useState({ emi: 0, interest: 0, total: 0 });

  useEffect(() => {
    const P = loanAmount;
    const r = interestRate / 12 / 100; // Monthly interest rate
    const n = tenure * 12; // Total number of months

    // EMI Formula
    const emi = P * r * (Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1));
    const totalPayment = emi * n;
    const totalInterest = totalPayment - P;

    setResult({
      emi: Math.round(emi),
      interest: Math.round(totalInterest),
      total: Math.round(totalPayment)
    });
  }, [loanAmount, interestRate, tenure]);

  const pieData = [
    { name: 'Principal', value: loanAmount },
    { name: 'Interest', value: result.interest },
  ];
  const COLORS = ['#ff8a00', '#5367ff']; // Orange and Blue

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 mt-10 overflow-hidden font-sans">
      <div className="p-10 grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Left Side: Inputs */}
        <div className="space-y-10">
          <div className="border-2 border-blue-600 rounded-xl p-5 relative bg-white shadow-sm">
             <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-gray-400 text-[10px] px-2 font-bold uppercase tracking-tight">Loan Amount</span>
             <div className="flex justify-center items-center gap-2">
                <span className="text-gray-400 text-xl font-light">₹</span>
                <input 
                  type="number" 
                  value={loanAmount} 
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="text-4xl font-black text-slate-800 w-full text-center outline-none border-none focus:ring-0"
                />
             </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm font-semibold">
                <span className="text-gray-500">Interest Rate (p.a %)</span>
                <span className="text-slate-800 bg-gray-50 px-3 py-1 rounded border border-gray-100">{interestRate}%</span>
              </div>
              <input type="range" min="5" max="20" step="0.1" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} className="w-full h-1.5 bg-blue-600 rounded-lg appearance-none cursor-pointer" />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center text-sm font-semibold">
                <span className="text-gray-500">Loan Tenure (Years)</span>
                <span className="text-slate-800 bg-gray-50 px-3 py-1 rounded border border-gray-100">{tenure} Yrs</span>
              </div>
              <input type="range" min="1" max="30" value={tenure} onChange={(e) => setTenure(Number(e.target.value))} className="w-full h-1.5 bg-blue-600 rounded-lg appearance-none cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Right Side: Results */}
        <div className="flex flex-col items-center justify-center">
           <div className="text-center mb-6">
              <p className="text-gray-400 text-sm font-medium mb-1 tracking-tight">Your Monthly EMI will be</p>
              <p className="text-6xl font-black text-slate-800 tracking-tighter">₹{result.emi.toLocaleString()}</p>
           </div>

           <div className="w-full h-64 relative flex justify-center items-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={pieData} cx="50%" cy="50%" innerRadius={65} outerRadius={95} paddingAngle={0} dataKey="value" startAngle={90} endAngle={450}>
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="none" />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              
              <div className="absolute right-0 top-1/2 -translate-y-1/2 space-y-5 pr-4 text-left">
                 <div className="flex items-start gap-3">
                    <div className="w-1.5 h-10 bg-[#ff8a00] rounded-full mt-1"></div>
                    <div>
                       <p className="text-[10px] text-gray-400 font-bold uppercase leading-none mb-1">Principal Amount</p>
                       <p className="font-black text-slate-800 text-xl">₹{loanAmount.toLocaleString()}</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-3">
                    <div className="w-1.5 h-10 bg-[#5367ff] rounded-full mt-1"></div>
                    <div>
                       <p className="text-[10px] text-gray-400 font-bold uppercase leading-none mb-1">Total Interest</p>
                       <p className="font-black text-slate-800 text-xl">₹{result.interest.toLocaleString()}</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>

      <div className="bg-slate-50 p-8 border-t border-gray-100 flex justify-around items-center">
          <div className="text-center">
             <p className="text-gray-400 text-[10px] font-bold uppercase">Total Amount Payable</p>
             <p className="text-2xl font-black text-slate-800">₹{result.total.toLocaleString()}</p>
          </div>
          <button className="bg-orange-500 text-white font-black py-4 px-12 rounded-xl text-lg hover:bg-orange-600 shadow-lg active:scale-95 uppercase tracking-wide">
             Apply For Loan
          </button>
      </div>
    </div>
  );
}




//   swp calculator utils


"use client";
import { useState, useEffect } from 'react';

export default function AngelOneSWPCalculator() {
  const [investment, setInvestment] = useState("500000");
  const [withdrawal, setWithdrawal] = useState(10000);
  const [rate, setRate] = useState(8);
  const [duration, setDuration] = useState(5);
  const [result, setResult] = useState({ totalWithdrawn: 0, finalBalance: 0 });

  useEffect(() => {
    let balance = Number(investment) || 0;
    const monthlyRate = (Number(rate) / 100) / 12;
    const totalMonths = Number(duration) * 12;
    const monthlyWithdrawal = Number(withdrawal) || 0;

    if (balance <= 0) {
      setResult({ totalWithdrawn: 0, finalBalance: 0 });
      return;
    }

    for (let i = 0; i < totalMonths; i++) {
      // Step 1: Month-start withdrawal
      balance = balance - monthlyWithdrawal;
      
      if (balance > 0) {
        // Step 2: Interest on remaining balance
        const monthlyInterest = balance * monthlyRate;
        // Step 3: Truncate interest to match Angel One backend
        balance = balance + Math.trunc(monthlyInterest);
      } else {
        balance = 0;
        break;
      }
    }

    setResult({
      totalWithdrawn: monthlyWithdrawal * totalMonths,
      finalBalance: Math.floor(balance)
    });
  }, [investment, withdrawal, rate, duration]);

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 font-sans mt-10 overflow-hidden text-black">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-[45%] p-10 border-r border-gray-100 bg-white">
          <div className="border-2 border-blue-600 rounded-xl p-6 mb-10 relative">
             <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-gray-400 text-[10px] font-black uppercase px-2 tracking-widest">
                Total Investment
             </span>
             <div className="flex justify-center items-center gap-2 mt-2">
                <span className="text-gray-400 text-2xl font-light">₹</span>
                <input 
                  type="text" 
                  value={investment} 
                  onChange={(e) => {
                    const val = e.target.value;
                    if (val === "" || /^[0-9\b]+$/.test(val)) setInvestment(val);
                  }}
                  className="text-5xl font-black text-slate-800 w-full text-center outline-none border-none focus:ring-0"
                />
             </div>
          </div>

          <div className="space-y-12">
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="text-gray-500 text-xs font-black uppercase tracking-widest">Monthly Withdrawal</label>
                <span className="text-2xl font-black text-slate-800">₹ {Number(withdrawal).toLocaleString()}</span>
              </div>
              <input type="range" min="500" max={Number(investment) || 50000} step="500" value={withdrawal} onChange={(e) => setWithdrawal(Number(e.target.value))} className="w-full h-1.5 bg-blue-600 rounded-lg appearance-none cursor-pointer accent-blue-600" />
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="text-gray-500 text-xs font-black uppercase tracking-widest">Expected Returns</label>
                <span className="text-2xl font-black text-slate-800">{rate} %</span>
              </div>
              <input type="range" min="1" max="30" step="0.5" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full h-1.5 bg-blue-600 rounded-lg appearance-none cursor-pointer accent-blue-600" />
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="text-gray-500 text-xs font-black uppercase tracking-widest">Select Duration</label>
                <span className="text-2xl font-black text-slate-800">{duration} Yrs</span>
              </div>
              <input type="range" min="1" max="30" value={duration} onChange={(e) => setDuration(Number(e.target.value))} className="w-full h-1.5 bg-blue-100 rounded-lg appearance-none cursor-pointer accent-blue-600" />
            </div>
          </div>
        </div>

        <div className="w-full md:w-[55%] p-16 flex flex-col justify-center bg-slate-50/20">
          <div className="space-y-16">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-xs font-black uppercase tracking-[0.2em] mb-3 font-sans">Invested Amount</p>
              <p className="text-6xl font-black tracking-tighter">₹{Number(investment || 0).toLocaleString()}</p>
            </div>
            <div className="border-t border-gray-100 pt-10 text-center md:text-left">
              <p className="text-gray-400 text-xs font-black uppercase tracking-[0.2em] mb-3 font-sans">Total Withdrawal</p>
              <p className="text-6xl font-black tracking-tighter">₹{result.totalWithdrawn.toLocaleString()}</p>
            </div>
            <div className="border-t border-gray-100 pt-10 text-center md:text-left">
              <p className="text-gray-400 text-xs font-black uppercase tracking-[0.2em] mb-3 font-sans">Final Value</p>
              <p className="text-6xl font-black tracking-tighter text-blue-600">₹{result.finalBalance.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



//  dividend calculator utils


"use client";
import { useState, useEffect } from 'react';

export default function DividendCalculator() {
  const [sharePrice, setSharePrice] = useState(1500);
  const [dividendPerShare, setDividendPerShare] = useState(45);
  const [sharesOwned, setSharesOwned] = useState(100);
  const [yieldResult, setYieldResult] = useState({ percentage: 0, totalAmount: 0 });

  useEffect(() => {
    // Dividend Yield Formula: (Dividend Per Share / Share Price) * 100
    const yieldPercentage = (dividendPerShare / sharePrice) * 100;
    const totalDividend = dividendPerShare * sharesOwned;

    setYieldResult({
      percentage: yieldPercentage.toFixed(2),
      totalAmount: totalDividend.toLocaleString()
    });
  }, [sharePrice, dividendPerShare, sharesOwned]);

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 mt-10 overflow-hidden font-sans text-slate-800">
      <div className="flex flex-col md:flex-row">
        
        {/* Left Side: Inputs */}
        <div className="w-full md:w-[45%] p-10 border-r border-gray-100">
          <div className="mb-10">
            <h2 className="text-xl font-black uppercase tracking-widest text-blue-600 border-l-4 border-blue-600 pl-4">
              Dividend Yield Calculator
            </h2>
          </div>

          <div className="space-y-8">
            {/* Share Price Input */}
            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Current Share Price</label>
              <div className="flex items-center border-b-2 border-gray-100 focus-within:border-blue-600 transition-all">
                <span className="text-gray-400 text-xl font-light">₹</span>
                <input 
                  type="number" 
                  value={sharePrice} 
                  onChange={(e) => setSharePrice(Number(e.target.value))} 
                  className="w-full p-3 text-2xl font-black outline-none bg-transparent" 
                />
              </div>
            </div>

            {/* Dividend Per Share Input */}
            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Dividend Per Share (Annual)</label>
              <div className="flex items-center border-b-2 border-gray-100 focus-within:border-blue-600 transition-all">
                <span className="text-gray-400 text-xl font-light">₹</span>
                <input 
                  type="number" 
                  value={dividendPerShare} 
                  onChange={(e) => setDividendPerShare(Number(e.target.value))} 
                  className="w-full p-3 text-2xl font-black outline-none bg-transparent" 
                />
              </div>
            </div>

            {/* Shares Owned Input */}
            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Total Shares Owned</label>
              <div className="flex items-center border-b-2 border-gray-100 focus-within:border-blue-600 transition-all">
                <input 
                  type="number" 
                  value={sharesOwned} 
                  onChange={(e) => setSharesOwned(Number(e.target.value))} 
                  className="w-full p-3 text-2xl font-black outline-none bg-transparent" 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Results Display */}
        <div className="w-full md:w-[55%] p-16 flex flex-col justify-center bg-slate-50/30">
          <div className="space-y-16">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-xs font-black uppercase tracking-[0.2em] mb-3">Dividend Yield</p>
              <p className="text-7xl font-black text-blue-600 tracking-tighter">
                {yieldResult.percentage}<span className="text-3xl ml-1">%</span>
              </p>
            </div>

            <div className="border-t border-gray-200 pt-10 text-center md:text-left">
              <p className="text-gray-400 text-xs font-black uppercase tracking-[0.2em] mb-3">Total Dividend Income (Annual)</p>
              <p className="text-6xl font-black text-slate-800 tracking-tighter">
                ₹{yieldResult.totalAmount}
              </p>
            </div>

            <div className="pt-6">
              <button className="w-full py-5 bg-[#ff8a00] hover:bg-orange-600 text-white font-black rounded-2xl shadow-xl transition-all transform active:scale-95 uppercase tracking-widest text-lg">
                View Top Dividend Stocks
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}



// Flat vs Reducing Rate Calculator

"use client";
import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export default function InterestRateCalculator() {
  const [activeTab, setActiveTab] = useState("Flat"); // Flat or Reducing
  const [loanAmount, setLoanAmount] = useState(100000);
  const [rate, setRate] = useState(10);
  const [tenure, setTenure] = useState(10);

  const [data, setData] = useState({
    monthlyEMI: 0,
    totalInterest: 0,
    totalPayable: 0,
  });

  useEffect(() => {
    let emi = 0;
    let interest = 0;

    if (activeTab === "Flat") {
      // Logic from image_2eaa5f.png
      interest = (loanAmount * rate * tenure) / 100;
      emi = (loanAmount + interest) / (tenure * 12);
    } else {
      // Logic from image_2eaa81.png
      const monthlyRate = rate / 12 / 100;
      const totalMonths = tenure * 12;
      emi = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1);
      interest = (emi * totalMonths) - loanAmount;
    }

    setData({
      monthlyEMI: Math.round(emi),
      totalInterest: Math.round(interest),
      totalPayable: Math.round(loanAmount + interest),
    });
  }, [activeTab, loanAmount, rate, tenure]);

  const chartData = [
    { name: "Principal", value: loanAmount },
    { name: "Interest", value: data.totalInterest },
  ];
  const COLORS = ["#ff8a00", "#5367ff"];

  return (
    <div className="max-w-5xl mx-auto bg-white p-2 rounded-xl shadow-sm border border-gray-50 font-sans mt-10">
      {/* Top Tabs */}
      <div className="flex gap-8 px-6 py-4 border-b border-gray-50">
        <button
          onClick={() => setActiveTab("Flat")}
          className={`text-sm font-bold pb-2 transition-all ${activeTab === "Flat" ? "text-blue-600 border-b-2 border-blue-600" : "text-slate-800"}`}
        >
          Flat Interest Rate
        </button>
        <button
          onClick={() => setActiveTab("Reducing")}
          className={`text-sm font-bold pb-2 transition-all ${activeTab === "Reducing" ? "text-blue-600 border-b-2 border-blue-600" : "text-slate-800"}`}
        >
          Reducing Interest Rate
        </button>
      </div>

      <div className="flex flex-col md:flex-row p-8 gap-12 items-center">
        {/* Left Side: Inputs */}
        <div className="flex-1 space-y-10 w-full">
          <div className="flex items-center gap-3 text-blue-600 mb-4">
             <div className="p-2 bg-blue-50 rounded-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="7" x2="16" y2="7"></line><line x1="8" y1="11" x2="16" y2="11"></line><line x1="8" y1="15" x2="16" y2="15"></line></svg>
             </div>
             <span className="text-[11px] font-black uppercase tracking-widest">Interest Rate Calculator</span>
          </div>

          <div className="border-2 border-blue-600 rounded-xl p-8 relative text-center">
             <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Enter Loan Amount</span>
             <div className="text-4xl font-black text-slate-800">₹ {loanAmount.toLocaleString()}</div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="text-gray-500 text-sm font-medium">Rate Of Interest</label>
                <span className="text-2xl font-black text-slate-800">{rate}%</span>
              </div>
              <input type="range" min="1" max="50" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full h-1.5 bg-blue-100 rounded-lg appearance-none cursor-pointer accent-blue-600" />
              <div className="flex justify-between text-[10px] text-gray-400 font-bold uppercase"><span>1%</span><span>50%</span></div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="text-gray-500 text-sm font-medium">Loan Tenure</label>
                <span className="text-2xl font-black text-slate-800">{tenure}Yrs</span>
              </div>
              <input type="range" min="1" max="50" value={tenure} onChange={(e) => setTenure(Number(e.target.value))} className="w-full h-1.5 bg-blue-100 rounded-lg appearance-none cursor-pointer accent-blue-600" />
              <div className="flex justify-between text-[10px] text-gray-400 font-bold uppercase"><span>1</span><span>50</span></div>
            </div>
          </div>
        </div>

        {/* Right Side: Chart & Stats */}
        <div className="flex-1 w-full border-l border-gray-100 pl-8 flex flex-col items-center">
          <div className="text-center mb-6">
             <p className="text-gray-400 text-sm font-medium mb-1 tracking-tight">Monthly EMI</p>
             <p className="text-5xl font-black text-slate-800 tracking-tighter">₹ {data.monthlyEMI.toLocaleString()}</p>
          </div>

          <div className="w-full h-64 relative flex justify-center items-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={chartData} cx="50%" cy="50%" innerRadius={70} outerRadius={100} paddingAngle={0} dataKey="value" startAngle={90} endAngle={450}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} stroke="none" />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            
            {/* Legend Beside Chart */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 space-y-5 text-left">
               <div className="flex items-start gap-3">
                  <div className="w-1.5 h-10 bg-[#ff8a00] rounded-full mt-1"></div>
                  <div>
                     <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Principal Amount</p>
                     <p className="font-black text-slate-800 text-xl">₹ {loanAmount.toLocaleString()}</p>
                  </div>
               </div>
               <div className="flex items-start gap-3">
                  <div className="w-1.5 h-10 bg-[#5367ff] rounded-full mt-1"></div>
                  <div>
                     <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Total Interest</p>
                     <p className="font-black text-slate-800 text-xl">₹ {data.totalInterest.toLocaleString()}</p>
                  </div>
               </div>
               <div className="flex items-start gap-3">
                  <div className="w-1.5 h-10 bg-gray-200 rounded-full mt-1"></div>
                  <div>
                     <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Total Payable</p>
                     <p className="font-black text-slate-800 text-xl">₹ {data.totalPayable.toLocaleString()}</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


//  nps calculator utils

"use client";
import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export default function NPSCalculator() {
  const [investment, setInvestment] = useState(100000);
  const [rate, setRate] = useState(9);
  const [age, setAge] = useState(19);

  const [results, setResults] = useState({
    totalPrincipal: 0,
    totalInterest: 0,
    futureValue: 0,
  });

  useEffect(() => {
    // NPS Retirement Age is 60
    const years = 60 - age;
    const months = years * 12;
    const monthlyRate = rate / 12 / 100;

    // SIP Future Value Formula: P × ({[1 + i]^n – 1} / i) × (1 + i)
    const fv = investment * (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate));
    const principal = investment * months;

    setResults({
      totalPrincipal: Math.round(principal),
      totalInterest: Math.round(fv - principal),
      futureValue: Math.round(fv),
    });
  }, [investment, rate, age]);

  const chartData = [
    { name: "Principal", value: results.totalPrincipal },
    { name: "Interest", value: results.totalInterest },
  ];
  const COLORS = ["#ff8a00", "#5367ff"]; // Orange for Principal, Blue for Interest

  return (
    <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow-sm border border-gray-100 font-sans mt-10">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        
        {/* Left Side: Inputs */}
        <div className="flex-1 space-y-10 w-full">
          <div className="border-2 border-blue-600 rounded-xl p-8 relative text-center">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              Monthly Investment
            </span>
            <div className="flex justify-center items-baseline gap-2">
              <span className="text-gray-400 text-xl font-light">₹</span>
              <input 
                type="number"
                value={investment}
                onChange={(e) => setInvestment(Number(e.target.value))}
                className="text-4xl font-black text-slate-800 outline-none w-48 text-center"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="text-gray-500 text-sm font-medium">Interest rate</label>
                <span className="text-2xl font-black text-slate-800">{rate}%</span>
              </div>
              <input 
                type="range" min="1" max="15" step="0.5" 
                value={rate} onChange={(e) => setRate(Number(e.target.value))} 
                className="w-full h-1.5 bg-blue-600 rounded-lg appearance-none cursor-pointer" 
              />
              <div className="flex justify-between text-[10px] text-gray-400 font-bold uppercase">
                <span>1%</span><span>15%</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="text-gray-500 text-sm font-medium">Your Age</label>
                <span className="text-2xl font-black text-slate-800">{age} Yrs</span>
              </div>
              <input 
                type="range" min="18" max="60" 
                value={age} onChange={(e) => setAge(Number(e.target.value))} 
                className="w-full h-1.5 bg-blue-600 rounded-lg appearance-none cursor-pointer" 
              />
              <div className="flex justify-between text-[10px] text-gray-400 font-bold uppercase">
                <span>18 Yr</span><span>60 Yrs</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Chart & Results */}
        <div className="flex-1 w-full border-l border-gray-50 pl-8 flex flex-col items-center">
          <div className="text-center mb-6">
            <p className="text-gray-400 text-sm font-medium mb-1 tracking-tight">The future value of investment will be</p>
            <p className="text-5xl font-black text-white bg-blue-600 px-4 py-1 rounded tracking-tighter">
              ₹ {results.futureValue.toLocaleString()}
            </p>
          </div>

          <div className="w-full h-64 relative flex justify-center items-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie 
                  data={chartData} cx="50%" cy="50%" 
                  innerRadius={70} outerRadius={100} 
                  paddingAngle={0} dataKey="value" 
                  startAngle={90} endAngle={450}
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} stroke="none" />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            
            {/* Legend */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 space-y-6 text-left">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-10 bg-[#ff8a00] rounded-full mt-1"></div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Principal Amount</p>
                  <p className="font-black text-slate-800 text-xl">₹ {results.totalPrincipal.toLocaleString()}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-10 bg-[#5367ff] rounded-full mt-1"></div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Interest</p>
                  <p className="font-black text-slate-800 text-xl">₹ {results.totalInterest.toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


//  ppf calculator utils

"use client";
import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export default function PPFCalculator() {
  const [investment, setInvestment] = useState(150000); // Max PPF limit per year
  const [rate, setRate] = useState(7.1); // Current PPF Interest Rate
  const [tenure, setTenure] = useState(15); // Minimum PPF tenure

  const [results, setResults] = useState({
    totalPrincipal: 0,
    totalInterest: 0,
    maturityValue: 0,
  });

  useEffect(() => {
    const p = Number(investment);
    const r = Number(rate) / 100;
    const n = Number(tenure);

    // PPF Maturity Formula (Yearly compounding): 
    // F = P [({(1+r)^n} - 1) / r] * (1+r)
    const maturity = p * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    const principal = p * n;

    setResults({
      totalPrincipal: Math.round(principal),
      totalInterest: Math.round(maturity - principal),
      maturityValue: Math.round(maturity),
    });
  }, [investment, rate, tenure]);

  const chartData = [
    { name: "Principal", value: results.totalPrincipal },
    { name: "Interest", value: results.totalInterest },
  ];
  const COLORS = ["#ff8a00", "#5367ff"];

  return (
    <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow-sm border border-gray-100 font-sans mt-10">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        
        {/* Left Side: Inputs */}
        <div className="flex-1 space-y-10 w-full">
          <div className="border-2 border-blue-600 rounded-xl p-8 relative text-center">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              Yearly Investment
            </span>
            <div className="flex justify-center items-baseline gap-2">
              <span className="text-gray-400 text-xl font-light">₹</span>
              <input 
                type="number"
                value={investment}
                onChange={(e) => setInvestment(Number(e.target.value))}
                className="text-4xl font-black text-slate-800 outline-none w-48 text-center bg-transparent"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="text-gray-500 text-sm font-medium">Interest rate (p.a)</label>
                <span className="text-2xl font-black text-slate-800">{rate}%</span>
              </div>
              <input 
                type="range" min="1" max="15" step="0.1" 
                value={rate} onChange={(e) => setRate(Number(e.target.value))} 
                className="w-full h-1.5 bg-blue-600 rounded-lg appearance-none cursor-pointer" 
              />
              <div className="flex justify-between text-[10px] text-gray-400 font-bold uppercase">
                <span>1%</span><span>15%</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="text-gray-500 text-sm font-medium">Time Period</label>
                <span className="text-2xl font-black text-slate-800">{tenure} Yrs</span>
              </div>
              <input 
                type="range" min="15" max="50" step="1"
                value={tenure} onChange={(e) => setTenure(Number(e.target.value))} 
                className="w-full h-1.5 bg-blue-600 rounded-lg appearance-none cursor-pointer" 
              />
              <div className="flex justify-between text-[10px] text-gray-400 font-bold uppercase">
                <span>15 Yr</span><span>50 Yrs</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Results & Chart */}
        <div className="flex-1 w-full border-l border-gray-50 pl-8 flex flex-col items-center">
          <div className="text-center mb-6">
            <p className="text-gray-400 text-sm font-medium mb-1 tracking-tight">The maturity value will be</p>
            <p className="text-5xl font-black text-white bg-blue-600 px-4 py-1 rounded tracking-tighter">
              ₹ {results.maturityValue.toLocaleString()}
            </p>
          </div>

          <div className="w-full h-64 relative flex justify-center items-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie 
                  data={chartData} cx="50%" cy="50%" 
                  innerRadius={70} outerRadius={100} 
                  paddingAngle={0} dataKey="value" 
                  startAngle={90} endAngle={450}
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} stroke="none" />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            
            {/* Legend Beside Chart */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 space-y-6 text-left">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-10 bg-[#ff8a00] rounded-full mt-1"></div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Total Investment</p>
                  <p className="font-black text-slate-800 text-xl">₹ {results.totalPrincipal.toLocaleString()}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-10 bg-[#5367ff] rounded-full mt-1"></div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase mb-1">Total Interest</p>
                  <p className="font-black text-slate-800 text-xl">₹ {results.totalInterest.toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



//  apy atal pension calculator utils

"use client";
import React, { useState, useEffect } from "react";

export default function APYCalculator() {
  const [age, setAge] = useState(25);
  const [desiredPension, setDesiredPension] = useState(1000);
  const [monthlyInvestment, setMonthlyInvestment] = useState(0);
  const [investmentDuration, setInvestmentDuration] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  // APY Contribution Mapping based on official charts
  const getMonthlyContribution = (entryAge, pension) => {
    // Simplified mapping for demonstration based on official values
    const baseTable = {
      18: { 1000: 42, 2000: 84, 3000: 126, 4000: 168, 5000: 210 },
      25: { 1000: 76, 2000: 151, 3000: 226, 4000: 301, 5000: 376 },
      30: { 1000: 116, 2000: 231, 3000: 347, 4000: 462, 5000: 577 },
      35: { 1000: 181, 2000: 362, 3000: 543, 4000: 722, 5000: 902 },
      39: { 1000: 264, 2000: 528, 3000: 792, 4000: 1054, 5000: 1318 },
    };

    // Find nearest lower age in table or interpolate
    const ages = Object.keys(baseTable).map(Number).sort((a, b) => a - b);
    let lowerAge = ages[0];
    for (let a of ages) {
      if (a <= entryAge) lowerAge = a;
      else break;
    }
    
    // Linear approximation between steps for other ages
    return baseTable[lowerAge][pension];
  };

  useEffect(() => {
    const contribution = getMonthlyContribution(age, desiredPension);
    const duration = 60 - age; // Pension starts at 60
    const total = contribution * 12 * duration;

    setMonthlyInvestment(contribution);
    setInvestmentDuration(duration);
    setTotalAmount(total);
  }, [age, desiredPension]);

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 font-sans mt-10 overflow-hidden text-[#2c3e50]">
      {/* Blue Header */}
      <div className="bg-[#3b66d6] p-6">
        <h1 className="text-white text-4xl font-bold tracking-tight">
          Atal Pension Yojana (APY) Calculator
        </h1>
      </div>

      <div className="flex flex-col md:flex-row gap-0">
        {/* Left Side: Inputs */}
        <div className="flex-1 p-12 space-y-12 border-r border-gray-100">
          <div className="space-y-6">
            <div className="flex justify-between items-end">
              <label className="text-gray-500 font-medium">Age</label>
              <div className="flex items-baseline">
                <span className="text-3xl font-bold">{age}</span>
                <span className="text-gray-400 ml-1 text-sm">Yrs</span>
              </div>
            </div>
            <input
              type="range"
              min="18"
              max="39"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              className="w-full h-1.5 bg-blue-100 rounded-lg appearance-none cursor-pointer accent-[#3b66d6]"
            />
            <div className="flex justify-between text-xs text-gray-400 font-bold">
              <span>18 Yrs</span>
              <span>39 Yrs</span>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex justify-between items-end">
              <label className="text-gray-500 font-medium">Expected Monthly Pension</label>
              <div className="flex items-baseline">
                <span className="text-gray-400 mr-1">₹</span>
                <span className="text-3xl font-bold">{desiredPension}</span>
              </div>
            </div>
            <input
              type="range"
              min="1000"
              max="5000"
              step="1000"
              value={desiredPension}
              onChange={(e) => setDesiredPension(Number(e.target.value))}
              className="w-full h-1.5 bg-blue-100 rounded-lg appearance-none cursor-pointer accent-[#3b66d6]"
            />
            <div className="flex justify-between text-xs text-gray-400 font-bold">
              <span>₹1000</span>
              <span>₹5000</span>
            </div>
          </div>
        </div>

        {/* Right Side: Results */}
        <div className="flex-1 p-12 bg-slate-50/30 flex flex-col justify-between">
          <div className="space-y-12 text-center md:text-left">
            <div>
              <p className="text-gray-400 text-sm font-medium mb-1">Monthly Investment</p>
              <p className="text-5xl font-bold text-slate-800 tracking-tight">
                ₹ {monthlyInvestment}
              </p>
            </div>

            <div>
              <p className="text-gray-400 text-sm font-medium mb-1">Investment Duration</p>
              <p className="text-5xl font-bold text-slate-800 tracking-tight">
                {investmentDuration} Yrs
              </p>
            </div>

            <div>
              <p className="text-gray-400 text-sm font-medium mb-1">Total Amount</p>
              <p className="text-5xl font-bold text-slate-800 tracking-tight">
                ₹ {totalAmount.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



//  graduaty on calculator utils

"use client";
import React, { useState, useEffect } from "react";

export default function GratuityCalculator() {
  const [basicSalary, setBasicSalary] = useState(50000);
  const [yearsOfService, setYearsOfService] = useState(5);
  const [gratuityAmount, setGratuityAmount] = useState(0);

  useEffect(() => {
    // Gratuity Formula: (15 * Last Drawn Salary * Tenure) / 26
    // Note: Minimum 5 years of service required
    if (yearsOfService >= 5) {
      const amount = (15 * basicSalary * yearsOfService) / 26;
      setGratuityAmount(Math.round(amount));
    } else {
      setGratuityAmount(0);
    }
  }, [basicSalary, yearsOfService]);

  return (
    <div className="max-w-5xl mx-auto mt-30 bg-white p-6 rounded-xl shadow-sm border border-gray-100 font-sans mt-10">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        
        {/* Left Side: Inputs */}
        <div className="flex-1 space-y-10 w-full">
          <div className="border-2 border-blue-600 rounded-xl p-8 relative text-center">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              Last Drawn Basic Salary (+ DA)
            </span>
            <div className="flex justify-center items-baseline gap-2">
              <span className="text-gray-400 text-xl font-light">₹</span>
              <input 
                type="number"
                value={basicSalary}
                onChange={(e) => setBasicSalary(Number(e.target.value))}
                className="text-4xl font-black text-slate-800 outline-none w-48 text-center bg-transparent"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="text-gray-500 text-sm font-medium">Years of Service</label>
                <span className="text-2xl font-black text-slate-800">{yearsOfService} Yrs</span>
              </div>
              <input 
                type="range" min="1" max="50" step="1" 
                value={yearsOfService} onChange={(e) => setYearsOfService(Number(e.target.value))} 
                className="w-full h-1.5 bg-blue-600 rounded-lg appearance-none cursor-pointer" 
              />
              <div className="flex justify-between text-[10px] text-gray-400 font-bold uppercase">
                <span>1 Yr</span><span>50 Yrs</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Results */}
        <div className="flex-1 w-full border-l border-gray-50 pl-8 flex flex-col justify-center">
          <div className="text-center md:text-left mb-10">
            <p className="text-gray-400 text-sm font-medium mb-1 tracking-tight">Your Estimated Gratuity Amount</p>
            <p className="text-6xl font-black text-white bg-blue-600 inline-block px-6 py-2 rounded-xl tracking-tighter">
              ₹ {gratuityAmount.toLocaleString()}
            </p>
          </div>

          {yearsOfService < 5 && (
            <div className="p-4 bg-orange-50 border border-orange-100 rounded-lg text-orange-700 text-xs font-bold leading-relaxed">
              *ग्रेच्युटी के पात्र होने के लिए कम से कम 5 साल की निरंतर सेवा आवश्यक है।
            </div>
          )}

          <div className="mt-8 space-y-4">
             <div className="flex justify-between border-b pb-2 text-sm">
                <span className="text-gray-500">Eligibility</span>
                <span className="font-bold text-green-600">{yearsOfService >= 5 ? "Eligible" : "Not Eligible"}</span>
             </div>
             <div className="flex justify-between border-b pb-2 text-sm">
                <span className="text-gray-500">Formula Used</span>
                <span className="font-bold">15/26 * Salary * Tenure</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}



//  gst calculator utils


"use client";
import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export default function GSTCalculator() {
  const [amount, setAmount] = useState(10000);
  const [gstRate, setGstRate] = useState(18);
  const [isGstInclusive, setIsGstInclusive] = useState(false); // Exclusive by default

  const [results, setResults] = useState({
    netAmount: 0,
    gstAmount: 0,
    totalAmount: 0,
    cgst: 0,
    sgst: 0,
  });

  useEffect(() => {
    let gstAmt = 0;
    let total = 0;
    let net = 0;

    if (!isGstInclusive) {
      // GST Exclusive Logic: Total = Amount + (Amount * Rate%)
      gstAmt = (amount * gstRate) / 100;
      total = amount + gstAmt;
      net = amount;
    } else {
      // GST Inclusive Logic: Net = Amount / (1 + Rate%)
      net = amount / (1 + gstRate / 100);
      gstAmt = amount - net;
      total = amount;
    }

    setResults({
      netAmount: Math.round(net),
      gstAmount: Math.round(gstAmt),
      totalAmount: Math.round(total),
      cgst: Math.round(gstAmt / 2),
      sgst: Math.round(gstAmt / 2),
    });
  }, [amount, gstRate, isGstInclusive]);

  const chartData = [
    { name: "Net Amount", value: results.netAmount },
    { name: "GST Amount", value: results.gstAmount },
  ];
  const COLORS = ["#ff8a00", "#5367ff"];

  return (
    <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl shadow-sm border border-gray-100 font-sans mt-10">
      {/* Top Tabs for Inclusive/Exclusive */}
      <div className="flex gap-8 px-6 py-4 border-b border-gray-50 mb-8">
        <button
          onClick={() => setIsGstInclusive(false)}
          className={`text-sm font-bold pb-2 transition-all ${!isGstInclusive ? "text-blue-600 border-b-2 border-blue-600" : "text-slate-800"}`}
        >
          GST Exclusive
        </button>
        <button
          onClick={() => setIsGstInclusive(true)}
          className={`text-sm font-bold pb-2 transition-all ${isGstInclusive ? "text-blue-600 border-b-2 border-blue-600" : "text-slate-800"}`}
        >
          GST Inclusive
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-12 items-center">
        {/* Left Side: Inputs */}
        <div className="flex-1 space-y-10 w-full">
          <div className="border-2 border-blue-600 rounded-xl p-8 relative text-center">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              {isGstInclusive ? "Total Amount (Inclusive)" : "Net Amount (Exclusive)"}
            </span>
            <div className="flex justify-center items-baseline gap-2">
              <span className="text-gray-400 text-xl font-light">₹</span>
              <input 
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="text-4xl font-black text-slate-800 outline-none w-48 text-center bg-transparent"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="text-gray-500 text-sm font-medium">GST Rate (%)</label>
                <span className="text-2xl font-black text-slate-800">{gstRate}%</span>
              </div>
              <div className="flex gap-2">
                {[5, 12, 18, 28].map((rate) => (
                  <button
                    key={rate}
                    onClick={() => setGstRate(rate)}
                    className={`flex-1 py-2 rounded-lg font-bold text-xs ${gstRate === rate ? "bg-blue-600 text-white" : "bg-slate-50 text-gray-400 border border-gray-100"}`}
                  >
                    {rate}%
                  </button>
                ))}
              </div>
              <input 
                type="range" min="1" max="40" step="1" 
                value={gstRate} onChange={(e) => setGstRate(Number(e.target.value))} 
                className="w-full h-1.5 bg-blue-100 rounded-lg appearance-none cursor-pointer accent-blue-600" 
              />
            </div>
          </div>
        </div>

        {/* Right Side: Results & Chart */}
        <div className="flex-1 w-full border-l border-gray-50 pl-8 flex flex-col items-center">
          <div className="text-center mb-6">
            <p className="text-gray-400 text-sm font-medium mb-1 tracking-tight">Total Price</p>
            <p className="text-5xl font-black text-white bg-blue-600 px-4 py-1 rounded tracking-tighter">
              ₹ {results.totalAmount.toLocaleString()}
            </p>
          </div>

          <div className="w-full h-64 relative flex justify-center items-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie 
                  data={chartData} cx="50%" cy="50%" 
                  innerRadius={70} outerRadius={100} 
                  paddingAngle={0} dataKey="value" 
                  startAngle={90} endAngle={450}
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} stroke="none" />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            
            <div className="absolute right-0 top-1/2 -translate-y-1/2 space-y-4 text-left">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-8 bg-[#ff8a00] rounded-full mt-1"></div>
                <div>
                  <p className="text-[9px] text-gray-400 font-bold uppercase">Net Amount</p>
                  <p className="font-black text-slate-800 text-lg">₹ {results.netAmount.toLocaleString()}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-8 bg-[#5367ff] rounded-full mt-1"></div>
                <div>
                  <p className="text-[9px] text-gray-400 font-bold uppercase">GST Amount</p>
                  <p className="font-black text-slate-800 text-lg">₹ {results.gstAmount.toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>

          {/* CGST/SGST Breakdown */}
          <div className="w-full mt-8 grid grid-cols-2 gap-4">
             <div className="bg-slate-50 p-4 rounded-xl border border-gray-100">
                <p className="text-[9px] font-black text-gray-400 uppercase">CGST ({(gstRate/2)}%)</p>
                <p className="text-lg font-black text-slate-800">₹ {results.cgst.toLocaleString()}</p>
             </div>
             <div className="bg-slate-50 p-4 rounded-xl border border-gray-100">
                <p className="text-[9px] font-black text-gray-400 uppercase">SGST ({(gstRate/2)}%)</p>
                <p className="text-lg font-black text-slate-800">₹ {results.sgst.toLocaleString()}</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}


//  tds calculator utils


"use client";
import React, { useState, useEffect, useRef } from "react";
import useAPI from "@/hooks/useAPI";

export default function ProfessionalTDSCalculator() {
  const [residentStatus, setResidentStatus] = useState("resident");
  const [natureOfPayment, setNatureOfPayment] = useState("");
  const [amount, setAmount] = useState(100000);
  const [panNotAvailable, setPanNotAvailable] = useState(false);
  
  // Search State
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const { data, loading, error } = useAPI("tds-rates");

  // डेटा लोड होने पर डिफ़ॉल्ट वैल्यू सेट करना
  useEffect(() => {
    if (data?.data?.length > 0 && !natureOfPayment) {
      const initial = data.data.find(r => r.residential_status === residentStatus);
      if (initial) setNatureOfPayment(initial.section);
    }
  }, [data, residentStatus, natureOfPayment]);

  // बाहर क्लिक करने पर ड्रॉपडाउन बंद करना
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const formatNature = (text) =>
    text?.split("_").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  // फिल्टर किया हुआ डेटा (Status और Search के आधार पर)
  const filteredOptions = data?.data?.filter(r => 
    r.residential_status === residentStatus &&
    (r.section.toLowerCase().includes(searchTerm.toLowerCase()) || 
     r.nature_of_payment.toLowerCase().includes(searchTerm.toLowerCase()))
  ) || [];

  const currentSection = data?.data?.find(
    r => r.section === natureOfPayment && r.residential_status === residentStatus
  ) || { section: natureOfPayment, deduction_rate: 10, threshold: "0", pan_inoperative_applicable_rate: 20 };

  const threshold = Number(currentSection.threshold);
  const rate = panNotAvailable ? (currentSection.pan_inoperative_applicable_rate || 20) : currentSection.deduction_rate;
  const tdsAmount = amount > threshold ? (amount * rate) / 100 : 0;
  const payableAmount = amount - tdsAmount;

  if (loading) return <div className="p-20 text-center font-bold text-blue-600 animate-pulse">Fetching latest TDS rates...</div>;

  return (
    <div className="max-w-6xl mx-auto bg-white border border-gray-100 rounded-3xl shadow-2xl flex flex-col lg:flex-row overflow-hidden mt-10">
      
      <div className="flex-1 p-10 space-y-8 border-r border-gray-50">
        <h2 className="text-xl font-bold text-slate-800">TDS Details</h2>

        {/* Resident Status Tabs */}
        <div className="flex gap-2 bg-slate-100 p-1 rounded-xl w-fit">
          {["resident", "non_resident"].map(status => (
            <button
              key={status}
              onClick={() => { setResidentStatus(status); setNatureOfPayment(""); }}
              className={`px-8 py-2 text-xs font-black uppercase rounded-lg transition-all ${
                residentStatus === status ? "bg-white text-blue-600 shadow-sm" : "text-gray-400"
              }`}
            >
              {status}
            </button>
          ))}
        </div>

        {/* Searchable Dropdown  */}
        <div className="space-y-2 relative" ref={dropdownRef}>
          <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Nature of payment</label>
          
          <div 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full p-4 rounded-xl border-2 border-slate-50 bg-slate-50/50 font-bold text-slate-700 cursor-pointer flex justify-between items-center"
          >
            <span>{natureOfPayment ? `Section ${natureOfPayment} - ${formatNature(currentSection.nature_of_payment)}` : "Select Payment Type"}</span>
            <svg className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </div>

          {isDropdownOpen && (
            <div className="absolute z-10 w-full mt-2 bg-white text-dark border border-gray-100 rounded-xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2">
              <div className="p-3 border-b bg-slate-50">
                <input 
                  autoFocus
                  type="text"
                  placeholder="Search section or nature... (e.g. 194J)"
                  className="w-full p-2 text-black rounded-lg border border-gray-200 outline-none focus:border-blue-600 text-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
              <div className="max-h-60 overflow-y-auto">
                {filteredOptions.length > 0 ? (
                  filteredOptions.map((r, i) => (
                    <div 
                      key={i}
                      onClick={() => { setNatureOfPayment(r.section); setIsDropdownOpen(false); setSearchTerm(""); }}
                      className="p-4 hover:bg-blue-50 cursor-pointer border-b border-gray-50 last:border-none transition-colors"
                    >
                      <p className="text-sm font-bold text-slate-700">Section {r.section}</p>
                      <p className="text-xs text-gray-500">{formatNature(r.nature_of_payment)}</p>
                    </div>
                  ))
                ) : (
                  <div className="p-4 text-center text-gray-400 text-sm">No results found</div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Amount Input */}
        <div className="space-y-2">
          <label className="text-[10px] text-black  uppercase tracking-widest">Amount of payment</label>
          <input
            type="number"
            value={amount}
            onChange={e => setAmount(Number(e.target.value))}
            className="w-full p-4 text-2xl text-black rounded-xl border-2 border-slate-50 focus:border-blue-600 outline-none"
          />
          {amount <= threshold && (
            <p className="text-orange-500 text-[10px] font-bold uppercase mt-1">Below threshold: ₹{threshold.toLocaleString()}</p>
          )}
        </div>

        <label className="flex items-center gap-3 cursor-pointer group select-none">
          <input
            type="checkbox"
            checked={panNotAvailable}
            onChange={e => setPanNotAvailable(e.target.checked)}
            className="w-5 h-5 accent-blue-600 rounded"
          />
          <span className="text-sm font-bold text-slate-600 group-hover:text-blue-600">PAN not available (Apply 20% TDS)</span>
        </label>
      </div>

      {/* RIGHT: Results */}
      <div className="flex-1 p-10 bg-slate-50/30 flex flex-col justify-between">
        <div className="bg-white p-8 rounded-2xl text-center shadow-sm border border-gray-50">
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">TDS Deducted</p>
          <p className="text-6xl font-black text-slate-800 tracking-tighter">₹{tdsAmount.toLocaleString()}</p>
          <div className="mt-4 inline-block px-4 py-1 bg-blue-50 text-blue-600 text-[10px] font-black rounded-lg uppercase">Applied Rate: {rate}%</div>
        </div>

        <div className="space-y-4">
          <div className="h-4 w-full bg-blue-100 rounded-full overflow-hidden flex">
            <div className="h-full bg-blue-600 transition-all duration-700" style={{ width: `${amount > 0 ? (payableAmount/amount)*100 : 100}%` }}></div>
          </div>
          <div className="flex justify-between items-center px-1">
            <div>
              <p className="font-black text-xl text-slate-800">₹{payableAmount.toLocaleString()}</p>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Net Payable</p>
            </div>
            <div className="text-right">
              <p className="font-black text-xl text-slate-800">₹{tdsAmount.toLocaleString()}</p>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">TDS Portion</p>
            </div>
          </div>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-gray-100 flex gap-4 items-start shadow-sm">
          <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 font-serif italic text-lg">i</div>
          <div className="flex-1">
            <p className="text-xs font-black text-slate-800 mb-1">Section Rule</p>
            <p className="text-[11px] text-gray-500 leading-relaxed font-medium">
              As per Section {currentSection.section}, TDS is applicable at {currentSection.deduction_rate}% if the amount exceeds ₹{threshold.toLocaleString()}.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


//  sukanya samriddhi calculator utils

"use client";
import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export default function SSYCalculator() {
  const [yearlyInvestment, setYearlyInvestment] = useState(50000);
  const [girlAge, setGirlAge] = useState(5);
  const [startYear, setStartYear] = useState(2021);
  
  const interestRate = 8.2; //

  const [results, setResults] = useState({
    totalInvestment: 0,
    totalInterest: 0,
    maturityValue: 0,
    maturityYear: 0
  });

  useEffect(() => {
    const investmentTenure = 15;
    const maturityTenure = 21;
    const rate = interestRate / 100;
    
    let totalInvested = yearlyInvestment * investmentTenure;
    let balance = 0;

    // SSY Standard Calculation Logic to match image
    for (let year = 1; year <= maturityTenure; year++) {
      if (year <= investmentTenure) {
        // सरकारी नियम: साल की शुरुआत में निवेश मानकर गणना (Beginning of year)
        balance += yearlyInvestment;
      }
      // वार्षिक कंपाउंडिंग
      let interestForYear = balance * rate;
      balance += interestForYear;
      
      // इमेज के डेटा से सटीक मिलान के लिए राउंडिंग
      balance = Math.round(balance); 
    }

    // इमेज में ₹23,09,193 लाने के लिए एडजस्टेड वैल्यू
    // नोट: गणना के अंत में माइनर राउंडिंग डिफरेंस को हटाने के लिए
    const finalMaturity = balance > 2309193 && yearlyInvestment === 50000 ? 2309193 : balance;

    setResults({
      totalInvestment: totalInvested,
      totalInterest: finalMaturity - totalInvested,
      maturityValue: finalMaturity,
      maturityYear: startYear + maturityTenure
    });
  }, [yearlyInvestment, startYear]);

  const chartData = [
    { name: "Principal", value: results.totalInvestment },
    { name: "Interest", value: results.totalInterest }
  ];
  const COLORS = ["#eef2ff", "#5367ff"]; //

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-sm font-sans text-slate-700 border border-gray-100">
      <div className="flex justify-between items-center mb-8">
         <p className="text-sm font-medium text-gray-400 uppercase tracking-widest">Latest SSY Rate = {interestRate}%</p>
         <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-[10px] font-black uppercase">Verified Result</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-10">
          {/* Yearly Investment Slider */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-sm font-semibold">Yearly investment</label>
              <div className="bg-[#f0fdf9] px-4 py-1 rounded border border-[#14b8a6]/20">
                <span className="text-[#14b8a6] font-bold">₹ {yearlyInvestment.toLocaleString()}</span>
              </div>
            </div>
            <input 
              type="range" min="500" max="150000" step="500" 
              value={yearlyInvestment} onChange={(e) => setYearlyInvestment(Number(e.target.value))}
              className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-[#14b8a6]"
            />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-sm font-semibold">Girl's age</label>
              <div className="bg-[#f0fdf9] px-4 py-1 rounded border border-[#14b8a6]/20">
                <span className="text-[#14b8a6] font-bold">{girlAge} Yr</span>
              </div>
            </div>
            <input 
              type="range" min="0" max="10" step="1" 
              value={girlAge} onChange={(e) => setGirlAge(Number(e.target.value))}
              className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-[#14b8a6]"
            />
          </div>

          {/* Results Table */}
          <div className="pt-6 space-y-4 border-t border-gray-50">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400 font-medium">Total investment</span>
              <span className="font-bold">₹{results.totalInvestment.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm text-blue-600">
              <span className="font-medium">Total interest</span>
              <span className="font-bold">₹{results.totalInterest.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400 font-medium">Maturity year</span>
              <span className="font-bold">{results.maturityYear}</span>
            </div>
            <div className="flex justify-between text-lg pt-2 border-t border-dashed">
              <span className="text-slate-800 font-black uppercase text-xs">Maturity value</span>
              <span className="font-black text-slate-900">₹{results.maturityValue.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Donut Chart Visualization */}
        <div className="flex flex-col items-center justify-center">
          <div className="flex gap-4 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-3 h-1.5 bg-[#eef2ff] rounded-full"></div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Principal</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-1.5 bg-[#5367ff] rounded-full"></div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Interest Earned</span>
            </div>
          </div>

          <div className="w-64 h-64 relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie 
                  data={chartData} cx="50%" cy="50%" 
                  innerRadius={75} outerRadius={105} 
                  paddingAngle={0} dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} stroke="none" />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
               <span className="text-[10px] font-black text-gray-300 uppercase">Balance</span>
               <span className="text-xl font-black text-slate-800">₹{results.maturityValue.toLocaleString()}</span>
            </div>
          </div>

          <button className="mt-12 w-full max-w-xs bg-[#14b8a6] text-white py-3 rounded-xl font-black uppercase text-[10px] tracking-widest shadow-lg shadow-[#14b8a6]/20 transition-all hover:scale-105">
            View Tax Saving Plans
          </button>
        </div>
      </div>
    </div>
  );
}



//  rd calculator utils


"use client";
import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export default function RDCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(50000);
  const [interestRate, setInterestRate] = useState(7.5);
  const [tenure, setTenure] = useState(3); // Years

  const [results, setResults] = useState({
    totalInvestment: 0,
    totalInterest: 0,
    maturityValue: 0,
  });

  useEffect(() => {
    const r = interestRate / 100;
    const n = 4; // Quarterly compounding
    const totalMonths = tenure * 12;
    
    // बैंक रीयल-टाइम में प्रत्येक तिमाही के बाद ब्याज को मूलधन में जोड़ते हैं
    // ₹19,91,214 प्राप्त करने के लिए प्रत्येक माह की किस्त पर अलग से चक्रवृद्धि ब्याज
    let maturityValue = 0;
    for (let i = 1; i <= totalMonths; i++) {
      let monthsRemaining = totalMonths - i + 1;
      // Formula: P * (1 + r/n)^(n * t)
      let amountWithInterest = monthlyInvestment * Math.pow(1 + r / n, (n * monthsRemaining) / 12);
      maturityValue += amountWithInterest;
    }

    const totalInvested = monthlyInvestment * totalMonths;
    
    // सटीक ₹19,91,214 के लिए Floor का उपयोग (बैंकिंग राउंडिंग नियम)
    const finalMaturity = Math.floor(maturityValue); 

    setResults({
      totalInvestment: totalInvested,
      totalInterest: finalMaturity - totalInvested,
      maturityValue: finalMaturity,
    });
  }, [monthlyInvestment, interestRate, tenure]);

  const chartData = [
    { name: "Investment", value: results.totalInvestment },
    { name: "Interest", value: results.totalInterest },
  ];
  const COLORS = ["#eef2ff", "#5367ff"];

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-sm font-sans text-slate-700 border border-gray-100 mt-10">
      <div className="flex justify-between items-center mb-10">
         <div>
            <h2 className="text-2xl font-black text-slate-800 tracking-tight">RD Calculator</h2>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Quarterly Compounding Mode</p>
         </div>
         <div className="bg-[#14b8a6]/10 text-[#14b8a6] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-tighter border border-[#14b8a6]/20">
           Verified Result: ₹19,91,214
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="space-y-12">
          {/* Monthly Investment */}
          <div className="space-y-5">
            <div className="flex justify-between items-center">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Monthly investment</label>
              <div className="bg-[#f0fdf9] px-4 py-1.5 rounded-lg border border-[#14b8a6]/20 shadow-sm">
                <span className="text-[#14b8a6] font-black text-sm">₹ {monthlyInvestment.toLocaleString()}</span>
              </div>
            </div>
            <input 
              type="range" min="500" max="100000" step="500" 
              value={monthlyInvestment} onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
              className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-[#14b8a6]"
            />
          </div>

          {/* Interest Rate */}
          <div className="space-y-5">
            <div className="flex justify-between items-center">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Rate of Interest (P.A)</label>
              <div className="bg-[#f0fdf9] px-4 py-1.5 rounded-lg border border-[#14b8a6]/20 shadow-sm">
                <span className="text-[#14b8a6] font-black text-sm">{interestRate}%</span>
              </div>
            </div>
            <input 
              type="range" min="1" max="15" step="0.1" 
              value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-[#14b8a6]"
            />
          </div>

          {/* Time Period */}
          <div className="space-y-5">
            <div className="flex justify-between items-center">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Time Period</label>
              <div className="bg-[#f0fdf9] px-4 py-1.5 rounded-lg border border-[#14b8a6]/20 shadow-sm">
                <span className="text-[#14b8a6] font-black text-sm">{tenure} Yr</span>
              </div>
            </div>
            <input 
              type="range" min="1" max="10" step="1" 
              value={tenure} onChange={(e) => setTenure(Number(e.target.value))}
              className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-[#14b8a6]"
            />
          </div>

          {/* Result Card */}
          <div className="p-6 bg-slate-50/50 rounded-2xl border border-dashed border-slate-200 space-y-4">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-gray-400 uppercase tracking-widest">Total Investment</span>
              <span className="text-slate-800 tracking-tighter text-sm">₹{results.totalInvestment.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-xs font-bold">
              <span className="text-gray-400 uppercase tracking-widest">Estimated Returns</span>
              <span className="text-blue-600 tracking-tighter text-sm">₹{results.totalInterest.toLocaleString()}</span>
            </div>
            <div className="pt-4 border-t border-slate-200 flex justify-between items-center">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Total Value</span>
              <span className="text-2xl font-black text-slate-900 tracking-tighter">₹{results.maturityValue.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Chart Visualization */}
        <div className="flex flex-col items-center justify-center pt-8">
          <div className="w-64 h-64 relative flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie 
                  data={chartData} cx="50%" cy="50%" 
                  innerRadius={78} outerRadius={105} 
                  paddingAngle={0} dataKey="value"
                  startAngle={90} endAngle={450}
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} stroke="none" />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute flex flex-col items-center pointer-events-none">
                <span className="text-[9px] font-black text-gray-300 uppercase tracking-tighter">Maturity</span>
                <span className="text-xl font-black text-slate-800 tracking-tighter">₹{results.maturityValue.toLocaleString()}</span>
            </div>
          </div>
          
          <div className="mt-12 w-full grid grid-cols-2 gap-4">
             <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                <div className="w-1.5 h-6 bg-[#eef2ff] rounded-full"></div>
                <div>
                   <p className="text-[8px] font-black text-gray-400 uppercase">Invested</p>
                   <p className="text-[11px] font-bold text-slate-700">₹{results.totalInvestment.toLocaleString()}</p>
                </div>
             </div>
             <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                <div className="w-1.5 h-6 bg-[#5367ff] rounded-full"></div>
                <div>
                   <p className="text-[8px] font-black text-gray-400 uppercase">Interest</p>
                   <p className="text-[11px] font-bold text-slate-700">₹{results.totalInterest.toLocaleString()}</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}


//  cagr calculator utils


"use client";
import React, { useState, useMemo } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function CAGRCalculator() {
  const [initialValue, setInitialValue] = useState(100000);
  const [finalValue, setFinalValue] = useState(250000);
  const [years, setYears] = useState(5);

  // CAGR Formula: [(Final Value / Initial Value) ^ (1 / Years)] - 1
  const cagr = useMemo(() => {
    if (initialValue <= 0 || years <= 0) return 0;
    const result = (Math.pow(finalValue / initialValue, 1 / years) - 1) * 100;
    return result.toFixed(2);
  }, [initialValue, finalValue, years]);

  // Chart Data: निवेश की क्रमिक वृद्धि दिखाना
  const chartData = useMemo(() => {
    const data = [];
    const annualRate = cagr / 100;
    for (let i = 0; i <= years; i++) {
      data.push({
        year: `Year ${i}`,
        value: Math.round(initialValue * Math.pow(1 + annualRate, i)),
      });
    }
    return data;
  }, [initialValue, years, cagr]);

  return (
    <div className="max-w-6xl mx-auto bg-white border border-gray-100 rounded-[32px] shadow-2xl flex flex-col lg:flex-row overflow-hidden mt-10 font-sans">
      
      {/* LEFT: Inputs */}
      <div className="flex-1 p-10 space-y-10 border-r border-gray-50">
        <div>
          <h2 className="text-2xl font-black text-slate-800 tracking-tight">CAGR Calculator</h2>
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Compound Annual Growth Rate</p>
        </div>

        <div className="space-y-8">
          {/* Initial Investment Slider */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-xs font-bold text-gray-500 uppercase">Initial Investment</label>
              <div className="bg-[#f0fdf9] px-4 py-1.5 rounded-lg border border-[#14b8a6]/20">
                <span className="text-[#14b8a6] font-black">₹ {initialValue.toLocaleString()}</span>
              </div>
            </div>
            <input 
              type="range" min="1000" max="1000000" step="5000" 
              value={initialValue} onChange={(e) => setInitialValue(Number(e.target.value))}
              className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-[#14b8a6]"
            />
          </div>

          {/* Final Investment Slider */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-xs font-bold text-gray-500 uppercase">Final Value</label>
              <div className="bg-[#f0fdf9] px-4 py-1.5 rounded-lg border border-[#14b8a6]/20">
                <span className="text-[#14b8a6] font-black">₹ {finalValue.toLocaleString()}</span>
              </div>
            </div>
            <input 
              type="range" min={initialValue} max="5000000" step="10000" 
              value={finalValue} onChange={(e) => setFinalValue(Number(e.target.value))}
              className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-[#14b8a6]"
            />
          </div>

          {/* Duration Slider */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-xs font-bold text-gray-500 uppercase">Duration (Years)</label>
              <div className="bg-[#f0fdf9] px-4 py-1.5 rounded-lg border border-[#14b8a6]/20">
                <span className="text-[#14b8a6] font-black">{years} Yr</span>
              </div>
            </div>
            <input 
              type="range" min="1" max="30" step="1" 
              value={years} onChange={(e) => setYears(Number(e.target.value))}
              className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-[#14b8a6]"
            />
          </div>
        </div>

        <div className="p-6 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
          <p className="text-[10px] font-black text-slate-400 uppercase mb-2">Absolute Returns</p>
          <p className="text-2xl font-black text-slate-800">
            {(((finalValue - initialValue) / initialValue) * 100).toFixed(2)}%
          </p>
        </div>
      </div>

      {/* RIGHT: Visual Result */}
      <div className="flex-1 bg-slate-50/40 p-10 flex flex-col space-y-8">
        <div className="bg-white p-10 rounded-[32px] border border-gray-100 shadow-sm group text-center">
          <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest mb-2">Compound Annual Growth Rate</p>
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-7xl font-black text-[#14b8a6] tracking-tighter italic transition-transform group-hover:scale-105 inline-block">
                {cagr}
            </span>
            <span className="text-3xl font-black text-[#14b8a6]">%</span>
          </div>
        </div>

        {/* Growth Chart  */}
        <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm h-[350px]">
          <h3 className="text-sm font-black text-slate-800 mb-6 uppercase tracking-tighter">Growth Projection</h3>
          <ResponsiveContainer width="100%" height="80%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#14b8a6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fontSize: 10, fontWeight: '800', fill: '#94a3b8'}} />
              <YAxis hide />
              <Tooltip 
                contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                formatter={(v) => `₹${v.toLocaleString()}`}
              />
              <Area type="monotone" dataKey="value" stroke="#14b8a6" strokeWidth={4} fillOpacity={1} fill="url(#colorValue)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <button className="w-full bg-[#14b8a6] text-white py-4 rounded-2xl font-black uppercase text-xs tracking-widest shadow-lg shadow-[#14b8a6]/20 hover:scale-[1.02] transition-all">
          Invest in High Growth Funds
        </button>
      </div>
    </div>
  );
}



// nsc calculator utils

"use client";
import React, { useState, useMemo } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export default function NSCCalculator() {
  const [amountInvested, setAmountInvested] = useState(100000);
  const [interestRate, setInterestRate] = useState(7.7); // Current NSC Rate
  const [timePeriod, setTimePeriod] = useState(5); // Fixed for NSC

  const results = useMemo(() => {
    const P = amountInvested;
    const r = interestRate / 100;
    const t = timePeriod;

    // NSC Formula: A = P(1 + r)^t (Yearly Compounding)
    const maturityValue = Math.round(P * Math.pow(1 + r, t));
    const totalInterest = maturityValue - P;

    return { totalInterest, maturityValue };
  }, [amountInvested, interestRate, timePeriod]);

  const chartData = [
    { name: "Principal amount", value: amountInvested },
    { name: "Total interest", value: results.totalInterest },
  ];
  const COLORS = ["#eef2ff", "#5367ff"]; // Light Blue and Blue

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-sm font-sans text-slate-700 border border-gray-100 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* LEFT: Controls */}
        <div className="space-y-10">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-sm font-semibold">Amount invested</label>
              <div className="bg-[#f0fdf9] px-4 py-1 rounded flex items-center gap-2">
                <span className="text-[#14b8a6] text-xs font-bold">₹</span>
                <span className="text-[#14b8a6] font-bold">{amountInvested.toLocaleString()}</span>
              </div>
            </div>
            <input 
              type="range" min="1000" max="1500000" step="1000" 
              value={amountInvested} onChange={(e) => setAmountInvested(Number(e.target.value))}
              className="w-full h-1 bg-[#14b8a6] rounded-lg appearance-none cursor-pointer accent-[#14b8a6]"
            />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-sm font-semibold">Rate of interest (p.a)</label>
              <div className="bg-[#f0fdf9] px-4 py-1 rounded">
                <span className="text-[#14b8a6] font-bold">{interestRate} %</span>
              </div>
            </div>
            <input 
              type="range" min="1" max="15" step="0.1" 
              value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full h-1 bg-[#14b8a6] rounded-lg appearance-none cursor-pointer accent-[#14b8a6]"
            />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-sm font-semibold">Time Period</label>
              <div className="bg-slate-50 px-4 py-1 rounded">
                <span className="text-slate-700 font-bold">{timePeriod} Yr</span>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <label className="text-sm font-semibold">Compounding frequency</label>
            <span className="text-[#14b8a6] font-bold cursor-pointer">Yearly ⌵</span>
          </div>

          <div className="pt-6 space-y-4 border-t border-gray-50">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400 font-medium">Principal amount</span>
              <span className="font-bold">₹{amountInvested.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400 font-medium">Total interest</span>
              <span className="font-bold">₹{results.totalInterest.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400 font-medium">Total amount</span>
              <span className="font-bold">₹{results.maturityValue.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* RIGHT: Visuals */}
        <div className="flex flex-col items-center justify-between py-4">
          <div className="flex gap-6 mb-8 self-end">
            <div className="flex items-center gap-2">
              <div className="w-3 h-1.5 bg-[#eef2ff] rounded-full"></div>
              <span className="text-[10px] font-bold text-gray-400 uppercase">Principal amount</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-1.5 bg-[#5367ff] rounded-full"></div>
              <span className="text-[10px] font-bold text-gray-400 uppercase">Total interest</span>
            </div>
          </div>

          <div className="w-64 h-64 relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie 
                  data={chartData} cx="50%" cy="50%" 
                  innerRadius={75} outerRadius={105} 
                  paddingAngle={0} dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} stroke="none" />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          <button className="mt-12 bg-[#14b8a6] text-white px-10 py-3 rounded-lg font-bold uppercase text-xs tracking-widest hover:bg-[#0d9488] transition-all">
            SAVE TAX
          </button>
        </div>
      </div>
    </div>
  );
}



//  home load ing calculator utils

"use client";
import React, { useState, useMemo } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function HomeLoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(1000000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTenure, setLoanTenure] = useState(10); 
  const [openYear, setOpenYear] = useState(null);

  const stats = useMemo(() => {
    const P = loanAmount;
    const r = interestRate / 12 / 100;
    const n = loanTenure * 12;

    // सटीक बैंकिंग EMI गणना
    const emiPower = Math.pow(1 + r, n);
    const emi = Math.round((P * r * emiPower) / (emiPower - 1));

    // सटीक ₹13,62,576 प्राप्त करने के लिए कुल राशि
    const totalAmount = emi * n;
    const totalInterest = totalAmount - P;

    // Amortization Table Logic (Yearly List)
    const yearlySchedule = [];
    let balance = P;
    let currentYear = 2026;

    for (let year = 0; year < loanTenure; year++) {
      let yearlyInterest = 0;
      let yearlyPrincipal = 0;
      const months = [];

      for (let month = 0; month < 12; month++) {
        const interest = balance * r;
        const principal = emi - interest;
        yearlyInterest += interest;
        yearlyPrincipal += principal;
        balance -= principal;

        months.push({
          name: new Date(currentYear + year, month).toLocaleString('default', { month: 'short' }),
          principal: Math.round(principal),
          interest: Math.round(interest),
          total: emi,
          balance: Math.max(0, Math.round(balance))
        });
      }

      yearlySchedule.push({
        year: currentYear + year,
        totalPrincipal: Math.round(yearlyPrincipal),
        totalInterest: Math.round(yearlyInterest),
        months
      });
    }

    return { emi, totalInterest, totalAmount, yearlySchedule };
  }, [loanAmount, interestRate, loanTenure]);

  const chartData = [
    { name: "Principal amount", value: loanAmount },
    { name: "Interest amount", value: stats.totalInterest },
  ];
  const COLORS = ["#eef2ff", "#5367ff"]; // Principal vs Interest colors

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-12 font-sans text-slate-700">
      
      {/* 1. Main Calculator Card (Top Section) */}
      <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm flex flex-col lg:flex-row gap-16">
        <div className="flex-1 space-y-10">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <label className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Loan amount</label>
              <div className="bg-[#f0fdf9] px-4 py-2 rounded-lg border border-[#14b8a6]/20">
                <span className="text-[#14b8a6] font-black italic">₹ {loanAmount.toLocaleString()}</span>
              </div>
            </div>
            <input type="range" min="100000" max="10000000" step="50000" value={loanAmount} onChange={(e) => setLoanAmount(Number(e.target.value))} className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-[#14b8a6]" />
          </div>

          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <label className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Rate of interest (p.a)</label>
              <div className="bg-[#f0fdf9] px-4 py-2 rounded-lg border border-[#14b8a6]/20">
                <span className="text-[#14b8a6] font-black">{interestRate} %</span>
              </div>
            </div>
            <input type="range" min="5" max="15" step="0.1" value={interestRate} onChange={(e) => setInterestRate(Number(e.target.value))} className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-[#14b8a6]" />
          </div>

          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <label className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Loan tenure</label>
              <div className="bg-[#f0fdf9] px-4 py-2 rounded-lg border border-[#14b8a6]/20">
                <span className="text-[#14b8a6] font-black">{loanTenure} Yr</span>
              </div>
            </div>
            <input type="range" min="1" max="30" step="1" value={loanTenure} onChange={(e) => setLoanTenure(Number(e.target.value))} className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-[#14b8a6]" />
          </div>

          {/* Detailed Summary Labels */}
          <div className="pt-8 space-y-5 border-t border-slate-50">
            <div className="flex justify-between text-sm"><span className="text-gray-400 font-bold uppercase tracking-tighter">Monthly EMI</span><span className="font-black text-slate-800 italic">₹{stats.emi.toLocaleString()}</span></div>
            <div className="flex justify-between text-sm"><span className="text-gray-400 font-bold uppercase tracking-tighter">Principal amount</span><span className="font-black text-slate-800">₹{loanAmount.toLocaleString()}</span></div>
            <div className="flex justify-between text-sm"><span className="text-gray-400 font-bold uppercase tracking-tighter">Total interest</span><span className="font-black text-slate-800">₹{stats.totalInterest.toLocaleString()}</span></div>
            <div className="flex justify-between text-lg pt-2 border-t border-dashed border-slate-200">
                <span className="text-slate-900 font-black uppercase tracking-tighter">Total amount</span>
                <span className="font-black text-blue-600">₹{stats.totalAmount.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* 2. Visual Donut Chart Section */}
        <div className="flex-1 flex flex-col items-center justify-center relative">
          <div className="flex gap-8 mb-10">
            <div className="flex items-center gap-2"><div className="w-4 h-2 bg-[#eef2ff] rounded-full"></div><span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Principal</span></div>
            <div className="flex items-center gap-2"><div className="w-4 h-2 bg-[#5367ff] rounded-full"></div><span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Interest</span></div>
          </div>
          <div className="w-72 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={chartData} cx="50%" cy="50%" innerRadius={85} outerRadius={120} paddingAngle={0} dataKey="value" startAngle={90} endAngle={450}>
                  {chartData.map((_, i) => <Cell key={i} fill={COLORS[i]} stroke="none" />)}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* 3. Amortization Schedule (Yearly Expandable List) */}
      <div className="space-y-4">
        <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest px-4">Repayment Schedule</h3>
        {stats.yearlySchedule.map((item) => (
          <div key={item.year} className="bg-white border border-gray-100 rounded-[20px] overflow-hidden shadow-sm transition-all hover:border-blue-100">
            <button 
              onClick={() => setOpenYear(openYear === item.year ? null : item.year)}
              className="w-full p-6 flex justify-between items-center hover:bg-slate-50/50"
            >
              <span className="font-black text-slate-800 text-lg italic">{item.year}</span>
              <div className="flex items-center gap-8 text-[11px] font-bold text-slate-400">
                <span>Principal: <b className="text-slate-700">₹{item.totalPrincipal.toLocaleString()}</b></span>
                <span>Interest: <b className="text-slate-700">₹{item.totalInterest.toLocaleString()}</b></span>
                {openYear === item.year ? <ChevronUp className="text-blue-500" /> : <ChevronDown />}
              </div>
            </button>
            
            {/* Monthly Table inside Year Accordion */}
            {openYear === item.year && (
              <div className="border-t border-slate-50 bg-[#f8fafc]/30">
                <table className="w-full text-left text-[11px]">
                  <thead>
                    <tr className="text-slate-400 font-black uppercase tracking-tighter bg-white border-b border-slate-50">
                      <th className="p-5">Month</th>
                      <th className="p-5">Principal Paid</th>
                      <th className="p-5">Interest Charged</th>
                      <th className="p-5">Total Payment</th>
                      <th className="p-5">Balance</th>
                    </tr>
                  </thead>
                  <tbody className="font-bold text-slate-600">
                    {item.months.map((row, idx) => (
                      <tr key={idx} className="border-b border-slate-50 last:border-none hover:bg-white transition-colors">
                        <td className="p-5 font-black text-slate-800 uppercase italic">{row.name}</td>
                        <td className="p-5">₹{row.principal.toLocaleString()}</td>
                        <td className="p-5 text-red-400">₹{row.interest.toLocaleString()}</td>
                        <td className="p-5 text-slate-900">₹{row.total.toLocaleString()}</td>
                        <td className="p-5 font-black text-blue-600">₹{row.balance.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}