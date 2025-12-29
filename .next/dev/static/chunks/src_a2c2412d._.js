(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/calculators/calculatorData.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "data",
    ()=>data
]);
const data = {
    sip: {
        title: "SIP Calculator",
        what: "A Systematic Investment Plan (SIP) is a disciplined investment strategy where you contribute a fixed amount into mutual funds at regular intervals. It automates savings and leverages market cycles to build long-term wealth.",
        why: "It utilizes 'Rupee Cost Averaging'—buying more units when prices are low and fewer when high. This eliminates the need to time the market and harnesses the power of compounding to reach goals like retirement or education.",
        deepDive: "The 'Time-Value' multiplier is the core of SIP success. Starting a SIP just 5 years earlier can result in a maturity corpus that is nearly double, as the exponential growth curve steepens significantly in the final years.",
        formula: "FV = P × ({[1 + i]^n – 1} / i) × (1 + i)",
        variables: [
            {
                k: "P",
                v: "Monthly Installment"
            },
            {
                k: "i",
                v: "Periodic Rate"
            },
            {
                k: "n",
                v: "Tenure (Months)"
            }
        ],
        specs: [
            {
                feature: "Risk",
                value: "Market Linked"
            },
            {
                feature: "Strategy",
                value: "Cost Averaging"
            }
        ],
        pros: [
            "Disciplined Savings",
            "Averages Volatility",
            "Compound Growth"
        ],
        cons: [
            "Market Risk",
            "No Fixed Returns",
            "Short-term Fluctuation"
        ],
        tips_tricks: [
            "The 10% Step-up Secret: Increasing SIP annually can reach your target 5 years faster.",
            "Never stop SIPs during a bear market; that's when wealth is actually made.",
            "Link every SIP to a specific life goal for better retention."
        ]
    },
    brokerage: {
        title: "Brokerage & Tax Terminal",
        what: "This terminal analyzes the total cost of a trade beyond the execution price. It accounts for broker commissions and statutory government taxes like STT, GST, SEBI fees, and State Stamp Duty.",
        why: "Traders operate on thin margins where taxes can exceed the brokerage itself. This tool identifies your exact 'Break-even Price'—the minimum movement needed just to cover trading costs.",
        deepDive: "Statutory charges like STT are significantly higher for delivery trades than intraday. For scalpers, understanding the impact of GST on transaction fees is the difference between a profitable day and a net loss.",
        formula: "Net P&L = (Sell - Buy) - Total Charges",
        variables: [
            {
                k: "STT",
                v: "Govt. Transaction Tax"
            },
            {
                k: "GST",
                v: "18% on Fees"
            },
            {
                k: "SEBI",
                v: "Regulatory Fee"
            }
        ],
        specs: [
            {
                feature: "Compliance",
                value: "Finance Act 2025"
            },
            {
                feature: "Mode",
                value: "Intraday / Delivery"
            }
        ],
        pros: [
            "Tax Transparency",
            "Break-even Analysis",
            "Accurate Net P&L"
        ],
        cons: [
            "Varies by State",
            "Excludes DP Charges",
            "Static Slab logic"
        ],
        tips_tricks: [
            "Intraday trades charge STT only on the sell side, saving 50% on government levies.",
            "Use flat-fee brokers for high volumes to cap your commission impact.",
            "Always calculate taxes before entering trades with less than 0.5% target."
        ]
    },
    emi: {
        title: "Loan EMI Amortization Matrix",
        what: "An Equated Monthly Installment (EMI) is a fixed payment amount made by a borrower to a lender. It balances the principal repayment and the interest servicing over a specific tenure.",
        why: "Initial EMIs are nearly 80% interest. Visualizing the 'Amortization Schedule' helps you plan prepayments to drastically reduce the total interest burden and exit debt years ahead of schedule.",
        deepDive: "The 'Interest Pre-loading' logic means banks take their profit first. Prepaying just 1-2 extra EMIs in the first 3 years of a 20-year loan can save you up to 25% of the total interest cost.",
        formula: "E = P × r × (1 + r)^n / ((1 + r)^n – 1)",
        variables: [
            {
                k: "P",
                v: "Principal Amount"
            },
            {
                k: "r",
                v: "Monthly Interest"
            },
            {
                k: "n",
                v: "Tenure (Months)"
            }
        ],
        specs: [
            {
                feature: "Method",
                value: "Reducing Balance"
            },
            {
                feature: "Credit Link",
                value: "CIBIL Impact Score"
            }
        ],
        pros: [
            "Fixed Roadmap",
            "Tax Benefits (Home Loan)",
            "Monthly Stability"
        ],
        cons: [
            "Interest Heavy Start",
            "Default Risk",
            "Prepayment Penalty"
        ],
        tips_tricks: [
            "One-Extra Rule: Paying one extra EMI annually can cut a 20-year tenure to 15 years.",
            "Round-up Strategy: Pay ₹25,000 instead of ₹24,200 to shave off months of interest.",
            "Refinance early if market interest rates drop by more than 0.5%."
        ]
    },
    lumpsum: {
        title: "Lumpsum Wealth Estimator",
        what: "A Lumpsum investment is a one-time deposit of a large capital sum into a financial instrument. It calculates the terminal value based on a specific expected CAGR.",
        why: "Perfect for windfalls like bonuses or property sales. It helps you decide whether to invest everything at once or use an STP (Systematic Transfer Plan) to mitigate entry-point risk.",
        deepDive: "Lumpsum returns are sensitive to the 'Entry Valuation'. Investing when the Nifty PE ratio is below 20 historically yields 15%+ CAGR, whereas investing at peaks reduces the margin of safety.",
        formula: "A = P (1 + r/n)^nt",
        variables: [
            {
                k: "P",
                v: "Principal"
            },
            {
                k: "r",
                v: "Return Rate"
            },
            {
                k: "t",
                v: "Tenure (Years)"
            }
        ],
        specs: [
            {
                feature: "Type",
                value: "Single Deposit"
            },
            {
                feature: "Asset",
                value: "Equity/Debt/Gold"
            }
        ],
        pros: [
            "High Absolute Gains",
            "Simple Tracking",
            "No Periodic Commitment"
        ],
        cons: [
            "High Entry Risk",
            "Volatility Impact",
            "Timing Dependence"
        ],
        tips_tricks: [
            "Rule of 72: Divide 72 by your expected return to see how fast your lumpsum doubles.",
            "Never invest a lumpsum at market all-time highs; wait for a 5% healthy correction.",
            "Use Lumpsum for debt-free assets like SGBs to lock in interest + appreciation."
        ]
    },
    ppf: {
        title: "PPF Safe-Savings Terminal",
        what: "Public Provident Fund (PPF) is a sovereign-backed long-term savings tool. It offers a 15-year tenure with interest rates set quarterly by the Ministry of Finance.",
        why: "It provides the coveted 'EEE' status—Exempt on Investment, Exempt on Interest, and Exempt on Maturity. It is the safest retirement pillar for conservative Indian investors.",
        deepDive: "The '5th Day' logic: PPF interest is calculated on the minimum balance between the 5th and the end of the month. Depositing on the 6th means losing 30 days of compounding interest.",
        formula: "A = P [({(1 + i)^n} - 1) / i]",
        variables: [
            {
                k: "P",
                v: "Annual Deposit"
            },
            {
                k: "i",
                v: "Interest Rate"
            },
            {
                k: "n",
                v: "15-50 Years"
            }
        ],
        specs: [
            {
                feature: "Security",
                value: "Govt Guarantee"
            },
            {
                feature: "Tax Status",
                value: "EEE Category"
            }
        ],
        pros: [
            "100% Capital Safety",
            "Tax-Free Maturity",
            "Loan Facility"
        ],
        cons: [
            "15-Year Lock-in",
            "₹1.5L Annual Limit",
            "Rate Fluctuations"
        ],
        tips_tricks: [
            "April Window: Invest the full ₹1.5L between April 1st and 5th to maximize a full year's compounding.",
            "The Extension Hack: Extend in blocks of 5 years to keep the tax-free interest growing indefinitely.",
            "Partial withdrawals are allowed after 6 years for life emergencies without closing the account."
        ]
    },
    goal: {
        title: "Goal Precision Planner",
        what: "This tool reverse-calculates the savings required today to reach a specific financial target in the future, adjusted for inflation and expected returns.",
        why: "It replaces 'hope' with 'math.' Instead of saving randomly, you identify the exact SIP amount needed for a child's Ivy League education or a dream retirement villa.",
        deepDive: "Inflation is the silent wealth killer. A ₹50 Lakh goal in 2025 will require nearly ₹1.2 Crore in 2040 at 6% inflation. This terminal ensures your target corpus maintains its purchasing power.",
        formula: "Required = Goal / (1 + r)^n",
        variables: [
            {
                k: "Target",
                v: "Future Cost"
            },
            {
                k: "Inflation",
                v: "Price Rise %"
            },
            {
                k: "Years",
                v: "Time Horizon"
            }
        ],
        specs: [
            {
                feature: "Focus",
                value: "Target-Based"
            },
            {
                feature: "Analysis",
                value: "Backward Induction"
            }
        ],
        pros: [
            "Clarity of savings",
            "Realistic Roadmap",
            "Prevents Under-saving"
        ],
        cons: [
            "Assumption Dependent",
            "Inflation Variance",
            "Life Change Shifts"
        ],
        tips_tricks: [
            "Always assume 7% inflation for education and 10% for healthcare goals.",
            "Review your goal progress every year and adjust for salary increments.",
            "Diversify the goal corpus across Equity and Debt based on the years remaining."
        ]
    },
    retirement: {
        title: "Retirement Corpus Calculator",
        what: "This terminal estimates the total 'Nest Egg' required to sustain your current lifestyle once your active income stops, accounting for life expectancy and inflation.",
        why: "Retirement is the only goal you cannot take a loan for. This tool helps you avoid 'Longevity Risk'—the danger of outliving your savings in your sunset years.",
        deepDive: "The '4% Withdrawal Rule' is the global standard. If your corpus is 25x your annual expenses, you can safely withdraw 4% adjusted for inflation every year for 30+ years without depleting the base.",
        formula: "Corpus = Annual Expenses / Safe Withdrawal Rate",
        variables: [
            {
                k: "Exp",
                v: "Monthly Spending"
            },
            {
                k: "Life",
                v: "Expectancy"
            },
            {
                k: "Inflation",
                v: "Price Rise"
            }
        ],
        specs: [
            {
                feature: "Horizon",
                value: "Ultra Long-term"
            },
            {
                feature: "Tax",
                value: "Post-Withdrawal"
            }
        ],
        pros: [
            "Financial Independence",
            "Medical Security",
            "Peace of Mind"
        ],
        cons: [
            "Rising Medical Costs",
            "Tax Slab Changes",
            "Inflation Spikes"
        ],
        tips_tricks: [
            "Aim for a corpus that is 30x your current annual expenses for a stress-free retirement.",
            "Start a pension SIP as soon as you get your first salary to benefit from 35 years of compounding.",
            "Include a separate medical emergency fund outside your retirement corpus calculation."
        ]
    },
    fd: {
        title: "FD Interest Matrix",
        what: "A Fixed Deposit (FD) is a banking instrument that offers a guaranteed interest rate for a chosen tenure. It is the most popular low-risk savings tool in India.",
        why: "Ideal for short-term parking of funds where capital preservation is the primary goal. It is liquid (with minor penalty) and provides higher interest than a savings account.",
        deepDive: "The 'Real Return' of an FD is often negative. If an FD gives 7% and inflation is 6%, your real gain is only 1%. Furthermore, FD interest is taxable, making post-tax returns even lower.",
        formula: "A = P (1 + r/n)^nt",
        variables: [
            {
                k: "P",
                v: "Deposit Amount"
            },
            {
                k: "r",
                v: "Interest Rate"
            },
            {
                k: "n",
                v: "Compounding Freq"
            }
        ],
        specs: [
            {
                feature: "Risk",
                value: "Zero (DICGC)"
            },
            {
                feature: "Liquidity",
                value: "Immediate (Penalty)"
            }
        ],
        pros: [
            "Guaranteed Returns",
            "Senior Citizen Bonus",
            "Loan Facility"
        ],
        cons: [
            "Taxable Interest",
            "Lower than Inflation",
            "Tenure Lock"
        ],
        tips_tricks: [
            "Laddering Strategy: Split ₹5 Lakh into 5 FDs of 1, 2, 3, 4, and 5 years for constant liquidity.",
            "Avoid long-term FDs when interest rates are expected to rise soon.",
            "Ensure the bank is DICGC insured for up to ₹5 Lakh safety."
        ]
    },
    gold: {
        title: "Gold Investment Matrix",
        what: "This terminal tracks the appreciation of gold as an asset class, including physical gold, digital gold, and Sovereign Gold Bonds (SGBs).",
        why: "Gold is the ultimate hedge against currency devaluation and stock market crashes. It maintains its purchasing power over centuries and provides high liquidity in times of crisis.",
        deepDive: "Sovereign Gold Bonds (SGB) are the smartest way to own gold. You get the market price appreciation plus a fixed 2.5% annual interest, with zero storage costs or making charges.",
        formula: "Value = (Qty × Rate) + SGB Interest",
        variables: [
            {
                k: "Price",
                v: "24K Market Rate"
            },
            {
                k: "Qty",
                v: "Grams Held"
            },
            {
                k: "SGB",
                v: "Interest (2.5%)"
            }
        ],
        specs: [
            {
                feature: "Asset",
                value: "Precious Metal"
            },
            {
                feature: "Hedge",
                value: "Inflation/Crisis"
            }
        ],
        pros: [
            "Global Liquidity",
            "Crisis Protection",
            "Inflation Hedge"
        ],
        cons: [
            "No Monthly Yield",
            "Making Charges",
            "Storage/Theft Risk"
        ],
        tips_tricks: [
            "Hold 10% of your portfolio in gold to reduce overall volatility during market crashes.",
            "Buy Digital Gold for small savings but convert to SGB for long-term holding.",
            "Track the USD-INR exchange rate, as gold prices in India are sensitive to currency fluctuations."
        ]
    },
    ipo: {
        title: "IPO Profit/Gain Matrix",
        what: "This tool calculates the potential listing gains of an Initial Public Offering (IPO) based on the Grey Market Premium (GMP) and issue price.",
        why: "IPOs offer a chance to enter high-growth companies early. This tool helps you calculate your ROI based on the number of lots allotted and the expected listing price.",
        deepDive: "Over-subscription is the key to listing gains. If an IPO is subscribed 50x in the HNI and QIB categories, it creates a supply-demand gap that drives the price up on the listing day.",
        formula: "Profit = (Listing - Issue) × Quantity",
        variables: [
            {
                k: "Issue",
                v: "Offer Price"
            },
            {
                k: "Lot",
                v: "Shares per Lot"
            },
            {
                k: "GMP",
                v: "Grey Market Premium"
            }
        ],
        specs: [
            {
                feature: "Market",
                value: "Primary"
            },
            {
                feature: "Type",
                value: "Equity"
            }
        ],
        pros: [
            "Quick Listing Gains",
            "Early Entry",
            "Standardized Price"
        ],
        cons: [
            "Low Allotment Probability",
            "Listing Loss Risk",
            "Short-term Volatility"
        ],
        tips_tricks: [
            "Check the 'Subscription Status' on the final day before applying to gauge institutional interest.",
            "Apply via multiple family member PANs to increase your allotment probability in the retail category.",
            "Always have an 'Exit Plan' for the listing day; don't hold speculative IPOs for the long term."
        ]
    },
    cagr: {
        title: "CAGR Tool",
        what: "Compound Annual Growth Rate (CAGR) measures the mean annual growth of an investment over a period longer than one year.",
        why: "It is the only accurate way to compare the performance of different asset classes (e.g., Stocks vs. Gold) because it smoothes out volatility into a single annualized figure.",
        deepDive: "CAGR assumes 'reinvestment'. It calculates the rate at which an investment would have grown if it had grown at a steady rate each year. It is vital for evaluating Mutual Fund and Real Estate performance.",
        formula: "CAGR = [(EV / BV)^(1/n)] - 1",
        variables: [
            {
                k: "EV",
                v: "Ending Value"
            },
            {
                k: "BV",
                v: "Start Value"
            },
            {
                k: "n",
                v: "Tenure (Years)"
            }
        ],
        specs: [
            {
                feature: "Metric",
                value: "Geometric Mean"
            },
            {
                feature: "Usage",
                value: "Performance Check"
            }
        ],
        pros: [
            "Accurate Growth Tracking",
            "Standardized Metric",
            "Smoothes Volatility"
        ],
        cons: [
            "Ignores Timing Risk",
            "Linear Projection",
            "Not for Short-term"
        ],
        tips_tricks: [
            "Use CAGR for any investment longer than 3 years to see the real growth.",
            "Compare CAGR with the Benchmark index to see if your investment outperformed the market.",
            "Always look at post-tax CAGR to see your actual purchasing power gain."
        ]
    },
    epf: {
        title: "EPF Retirement Tracker",
        what: "Employee Provident Fund (EPF) is a retirement benefit scheme for salaried employees where both the employer and employee contribute 12% of the basic salary.",
        why: "It creates a massive retirement fund automatically. It is one of the few debt instruments that offers high interest with sovereign safety and triple tax benefits.",
        deepDive: "EPF is the most powerful compounding tool for the Indian middle class. If you start at age 22 and never withdraw, the employer's matching contribution alone can fund a comfortable retirement lifestyle.",
        formula: "A = (Monthly Cont. × Months) + Interest",
        variables: [
            {
                k: "Salary",
                v: "Basic + DA"
            },
            {
                k: "Rate",
                v: "EPFO Interest Rate"
            }
        ],
        specs: [
            {
                feature: "Contributor",
                value: "Employee/Employer"
            },
            {
                feature: "Guarantee",
                value: "Sovereign"
            }
        ],
        pros: [
            "Matching Contribution",
            "Automatic Discipline",
            "Tax-Free Maturity"
        ],
        cons: [
            "Salary Dependent",
            "Withdrawal Restrictions",
            "Fixed Interest"
        ],
        tips_tricks: [
            "Always transfer your EPF UAN when switching jobs; withdrawing breaks the compounding chain.",
            "Increase your VPF (Voluntary Provident Fund) if you want safe, high-interest tax-free returns beyond 12%.",
            "Nominate your family members in the UAN portal to ensure smooth transfer of funds."
        ]
    },
    taxfd: {
        title: "Tax-Saving FD Planner",
        what: "This is a special Fixed Deposit with a mandatory 5-year lock-in period that qualifies for tax deductions under Section 80C.",
        why: "It is for risk-averse investors who want to save tax but don't want the volatility of ELSS or the long 15-year lock-in of PPF.",
        deepDive: "Unlike normal FDs, you cannot take a loan against a Tax-Saving FD, and you cannot withdraw it prematurely. The interest earned is added to your income and taxed as per your slab.",
        formula: "Tax Saved = Invested × Tax Slab",
        variables: [
            {
                k: "Invest",
                v: "Up to ₹1.5L"
            },
            {
                k: "Tenure",
                v: "Fixed 5 Years"
            }
        ],
        specs: [
            {
                feature: "Lock-in",
                value: "5 Years"
            },
            {
                feature: "Benefit",
                value: "Sec 80C"
            }
        ],
        pros: [
            "Guaranteed Returns",
            "80C Tax Benefit",
            "Zero Management"
        ],
        cons: [
            "5-Year Total Lock-in",
            "Taxable Interest",
            "No Loan Facility"
        ],
        tips_tricks: [
            "Only use this if your 80C limit (₹1.5L) isn't already filled by EPF, Insurance, or PPF.",
            "Check interest rates across different banks; sometimes small finance banks offer 1-2% more on Tax FDs.",
            "Remember that the tax benefit is only on the investment, not the interest."
        ]
    },
    swp: {
        title: "SWP Pension Terminal",
        what: "A Systematic Withdrawal Plan (SWP) allows you to withdraw a fixed amount from your mutual fund corpus at regular intervals, effectively creating a self-made pension.",
        why: "It is the most tax-efficient way to generate monthly income post-retirement. Unlike FD interest or annuities, only the 'Capital Gain' portion of the withdrawal is taxed.",
        deepDive: "SWP manages 'Sequence of Returns' risk. By withdrawing a fixed amount, you sell more units when the market is low and fewer when high, which is the inverse of a SIP.",
        formula: "Remaining = [P(1+r)] - W",
        variables: [
            {
                k: "Corpus",
                v: "Total Fund"
            },
            {
                k: "Withdrawal",
                v: "Monthly Payout"
            },
            {
                k: "r",
                v: "Annual Return"
            }
        ],
        specs: [
            {
                feature: "Goal",
                value: "Regular Income"
            },
            {
                feature: "Tax",
                value: "Capital Gains"
            }
        ],
        pros: [
            "Tax Efficiency",
            "Regular Cash Flow",
            "Capital Appreciation"
        ],
        cons: [
            "Corpus Depletion Risk",
            "Market Volatility",
            "Inflation Impact"
        ],
        tips_tricks: [
            "Keep your withdrawal rate at 5-6% to ensure your corpus lasts for 25+ years.",
            "Use Debt-oriented hybrid funds for SWP to minimize short-term volatility in your monthly payout.",
            "Review your withdrawal amount every 2 years to adjust for lifestyle inflation."
        ]
    },
    gsec: {
        title: "G-Sec Bond Terminal",
        what: "Government Securities (G-Secs) are debt instruments issued by the RBI on behalf of the Government to finance the country's fiscal deficit.",
        why: "They offer the absolute highest degree of safety (Zero default risk). They are now available to retail investors through the RBI Retail Direct portal for steady long-term income.",
        deepDive: "G-Secs have 'Duration Risk.' When interest rates in the economy fall, the price of existing bonds goes up. You can earn through both periodic interest (coupons) and capital appreciation.",
        formula: "Yield = (Coupon / Price) × 100",
        variables: [
            {
                k: "Coupon",
                v: "Fixed Interest"
            },
            {
                k: "Price",
                v: "Market Value"
            }
        ],
        specs: [
            {
                feature: "Safety",
                value: "Sovereign"
            },
            {
                feature: "Tenure",
                value: "Up to 40 Years"
            }
        ],
        pros: [
            "Zero Default Risk",
            "Periodic Interest",
            "High Tenure Options"
        ],
        cons: [
            "Interest Rate Risk",
            "Lower Return than Equity",
            "Limited Liquidity"
        ],
        tips_tricks: [
            "Lock in long-term G-Secs when interest rates are at a cyclical peak for high lifetime yields.",
            "G-Secs are better than FDs for the 30% tax bracket if you hold them through debt mutual funds (indexation benefits).",
            "Use G-Secs as the 'Safety' foundation of your portfolio, keeping 20-30% allocation here."
        ]
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/Calculators/CalculatorUtils.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DoughnutChart",
    ()=>DoughnutChart,
    "InputGroup",
    ()=>InputGroup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
// components/Calculators/CalculatorUtils.jsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
const DoughnutChart = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "a5feb6ec39ea650616a709b10daeefeb829ef953aa49946a82e18915c608eba9") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a5feb6ec39ea650616a709b10daeefeb829ef953aa49946a82e18915c608eba9";
    }
    const { invested, returns, investedColor, returnsColor } = t0;
    const total = invested + returns;
    const investedPercent = total > 0 ? invested / total * 100 : 50;
    const returnsPercent = total > 0 ? returns / total * 100 : 50;
    const baseInvestedColor = investedColor || "#10B981";
    const baseReturnsColor = returnsColor || "#06B6D4";
    const t1 = `conic-gradient(
            ${baseInvestedColor} 0% ${investedPercent}%,
            ${baseReturnsColor} ${investedPercent}%,
            ${"#475569"} ${investedPercent + returnsPercent}% 100%
        )`;
    let t2;
    if ($[1] !== t1) {
        t2 = {
            background: t1
        };
        $[1] = t1;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const style = t2;
    let t3;
    if ($[3] !== style) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: style,
            className: "h-full w-full rounded-full"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/CalculatorUtils.jsx",
            lineNumber: 43,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = style;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-4 rounded-full bg-slate-50 dark:bg-slate-900"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/CalculatorUtils.jsx",
            lineNumber: 51,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] !== t3) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative h-40 w-40",
            children: [
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/CalculatorUtils.jsx",
            lineNumber: 58,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t3;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== baseInvestedColor) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center text-slate-700 dark:text-slate-400",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "mr-1 h-2.5 w-2.5 rounded-full",
                    style: {
                        backgroundColor: baseInvestedColor
                    }
                }, void 0, false, {
                    fileName: "[project]/src/Calculators/CalculatorUtils.jsx",
                    lineNumber: 66,
                    columnNumber: 80
                }, ("TURBOPACK compile-time value", void 0)),
                "Invested"
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/CalculatorUtils.jsx",
            lineNumber: 66,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = baseInvestedColor;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] !== baseReturnsColor) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center text-slate-700 dark:text-slate-400",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "mr-1 h-2.5 w-2.5 rounded-full",
                    style: {
                        backgroundColor: baseReturnsColor
                    }
                }, void 0, false, {
                    fileName: "[project]/src/Calculators/CalculatorUtils.jsx",
                    lineNumber: 76,
                    columnNumber: 80
                }, ("TURBOPACK compile-time value", void 0)),
                "Returns"
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/CalculatorUtils.jsx",
            lineNumber: 76,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = baseReturnsColor;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] !== t6 || $[13] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4 flex space-x-4 text-xs font-medium",
            children: [
                t6,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/CalculatorUtils.jsx",
            lineNumber: 86,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = t6;
        $[13] = t7;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] !== t5 || $[16] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center",
            children: [
                t5,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/CalculatorUtils.jsx",
            lineNumber: 95,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = t5;
        $[16] = t8;
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    return t9;
};
_c = DoughnutChart;
const InputGroup = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(38);
    if ($[0] !== "a5feb6ec39ea650616a709b10daeefeb829ef953aa49946a82e18915c608eba9") {
        for(let $i = 0; $i < 38; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a5feb6ec39ea650616a709b10daeefeb829ef953aa49946a82e18915c608eba9";
    }
    const { label, value, setter, min, max, unit, accentColor, step: t1, placeholder: t2 } = t0;
    const step = t1 === undefined ? 1 : t1;
    const placeholder = t2 === undefined ? "" : t2;
    let t3;
    if ($[1] !== label) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: label,
            children: label
        }, void 0, false, {
            fileName: "[project]/src/Calculators/CalculatorUtils.jsx",
            lineNumber: 129,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = label;
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    let t4;
    if ($[3] !== setter) {
        t4 = (e)=>setter(e.target.value);
        $[3] = setter;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    const t5 = placeholder || min;
    let t6;
    if ($[5] !== label || $[6] !== max || $[7] !== min || $[8] !== step || $[9] !== t4 || $[10] !== t5 || $[11] !== value) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "number",
            id: label,
            value: value,
            onChange: t4,
            placeholder: t5,
            className: "w-20 text-right bg-transparent border-b border-slate-300 dark:border-slate-700 focus:outline-none focus:border-emerald-500",
            min: min,
            max: max,
            step: step
        }, void 0, false, {
            fileName: "[project]/src/Calculators/CalculatorUtils.jsx",
            lineNumber: 146,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = label;
        $[6] = max;
        $[7] = min;
        $[8] = step;
        $[9] = t4;
        $[10] = t5;
        $[11] = value;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] !== accentColor || $[14] !== t6 || $[15] !== unit) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: accentColor,
            children: [
                t6,
                unit
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/CalculatorUtils.jsx",
            lineNumber: 160,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = accentColor;
        $[14] = t6;
        $[15] = unit;
        $[16] = t7;
    } else {
        t7 = $[16];
    }
    let t8;
    if ($[17] !== t3 || $[18] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between text-sm font-medium text-slate-700 dark:text-slate-300",
            children: [
                t3,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/CalculatorUtils.jsx",
            lineNumber: 170,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = t3;
        $[18] = t7;
        $[19] = t8;
    } else {
        t8 = $[19];
    }
    const t9 = value || min;
    let t10;
    if ($[20] !== setter) {
        t10 = (e_0)=>setter(e_0.target.value);
        $[20] = setter;
        $[21] = t10;
    } else {
        t10 = $[21];
    }
    let t11;
    if ($[22] !== label) {
        let t12;
        if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
            t12 = /\s/g;
            $[24] = t12;
        } else {
            t12 = $[24];
        }
        t11 = label.replace(t12, "-");
        $[22] = label;
        $[23] = t11;
    } else {
        t11 = $[23];
    }
    const t12 = `w-full h-2 rounded-full appearance-none cursor-pointer range-slider-${t11}`;
    const t13 = accentColor.includes("emerald") ? "#10B981" : accentColor.includes("cyan") ? "#06B6D4" : accentColor.includes("fuchsia") ? "#D946EF" : accentColor.includes("purple") ? "#A855F7" : accentColor.includes("indigo") ? "#4F46E5" : accentColor.includes("orange") ? "#F97316" : accentColor.includes("pink") ? "#EC4899" : accentColor.includes("teal") ? "#14B8A6" : accentColor.includes("red") ? "#EF4444" : accentColor.includes("amber") ? "#F59E0B" : "#10B981";
    let t14;
    if ($[25] !== t13) {
        t14 = {
            "--range-color": t13
        };
        $[25] = t13;
        $[26] = t14;
    } else {
        t14 = $[26];
    }
    let t15;
    if ($[27] !== max || $[28] !== min || $[29] !== step || $[30] !== t10 || $[31] !== t12 || $[32] !== t14 || $[33] !== t9) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "range",
            min: min,
            max: max,
            step: step,
            value: t9,
            onChange: t10,
            className: t12,
            style: t14
        }, void 0, false, {
            fileName: "[project]/src/Calculators/CalculatorUtils.jsx",
            lineNumber: 215,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[27] = max;
        $[28] = min;
        $[29] = step;
        $[30] = t10;
        $[31] = t12;
        $[32] = t14;
        $[33] = t9;
        $[34] = t15;
    } else {
        t15 = $[34];
    }
    let t16;
    if ($[35] !== t15 || $[36] !== t8) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-1",
            children: [
                t8,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/CalculatorUtils.jsx",
            lineNumber: 229,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[35] = t15;
        $[36] = t8;
        $[37] = t16;
    } else {
        t16 = $[37];
    }
    return t16;
};
_c1 = InputGroup;
var _c, _c1;
__turbopack_context__.k.register(_c, "DoughnutChart");
__turbopack_context__.k.register(_c1, "InputGroup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/UI/Utility.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// components/UI/Utility.js
__turbopack_context__.s([
    "formatRupee",
    ()=>formatRupee
]);
const formatRupee = (value)=>{
    // Ensure value is a safe number (NaN, null, undefined check)
    if (typeof value !== 'number' || isNaN(value)) {
        value = 0;
    }
    // Only return currency for non-negative or very large numbers that are clearly numeric output
    if (value < 0 && value > -9000000) {
        // Handles negative output safely
        return `−₹ ${Math.abs(value).toLocaleString('en-IN', {
            maximumFractionDigits: 0
        })}`;
    }
    return `₹ ${value.toLocaleString('en-IN', {
        maximumFractionDigits: 0
    })}`;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/Calculators/SubCalculators/SIPCalculator.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/CalculatorUtils.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/UI/Utility.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const InvestmentCalculator = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(66);
    if ($[0] !== "487a5d3205383b90c3fa7679d8a3bb7dceafa38020472f6461edd0a120de6c1d") {
        for(let $i = 0; $i < 66; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "487a5d3205383b90c3fa7679d8a3bb7dceafa38020472f6461edd0a120de6c1d";
    }
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("sip");
    const [monthlyInvestment, setMonthlyInvestment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("100");
    const [lumpsumAmount, setLumpsumAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("10000");
    const [rate, setRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("12");
    const [years, setYears] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("10");
    let t0;
    let t1;
    if ($[1] !== mode) {
        t0 = ()=>{
            if (mode === "sip") {
                setMonthlyInvestment("100");
            } else {
                setLumpsumAmount("10000");
            }
            setRate("12");
            setYears("10");
        };
        t1 = [
            mode
        ];
        $[1] = mode;
        $[2] = t0;
        $[3] = t1;
    } else {
        t0 = $[2];
        t1 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    const R = Number(rate);
    const Y = Number(years);
    let t2;
    bb0: {
        if (R <= 0 || Y <= 0) {
            let t3;
            if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
                t3 = {
                    totalInvested: 0,
                    totalEarnings: 0,
                    calculatedFV: 0
                };
                $[4] = t3;
            } else {
                t3 = $[4];
            }
            t2 = t3;
            break bb0;
        }
        const annualRate = R / 100;
        if (mode === "sip") {
            const P = Number(monthlyInvestment);
            if (P <= 0) {
                let t3;
                if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
                    t3 = {
                        totalInvested: 0,
                        totalEarnings: 0,
                        calculatedFV: 0
                    };
                    $[5] = t3;
                } else {
                    t3 = $[5];
                }
                t2 = t3;
                break bb0;
            }
            const monthlyRate = Math.pow(1 + annualRate, 0.08333333333333333) - 1;
            const months = Y * 12;
            let balance = 0;
            for(let i = 0; i < months; i++){
                balance = balance + P;
                balance = balance * (1 + monthlyRate);
            }
            const invested = P * months;
            const fv = Math.floor(balance);
            const t3 = fv - invested;
            let t4;
            if ($[6] !== fv || $[7] !== invested || $[8] !== t3) {
                t4 = {
                    totalInvested: invested,
                    totalEarnings: t3,
                    calculatedFV: fv
                };
                $[6] = fv;
                $[7] = invested;
                $[8] = t3;
                $[9] = t4;
            } else {
                t4 = $[9];
            }
            t2 = t4;
            break bb0;
        }
        const L = Number(lumpsumAmount);
        if (L <= 0) {
            let t3;
            if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
                t3 = {
                    totalInvested: 0,
                    totalEarnings: 0,
                    calculatedFV: 0
                };
                $[10] = t3;
            } else {
                t3 = $[10];
            }
            t2 = t3;
            break bb0;
        }
        const fv_0 = Math.floor(L * Math.pow(1 + annualRate, Y));
        const t3 = fv_0 - L;
        let t4;
        if ($[11] !== L || $[12] !== fv_0 || $[13] !== t3) {
            t4 = {
                totalInvested: L,
                totalEarnings: t3,
                calculatedFV: fv_0
            };
            $[11] = L;
            $[12] = fv_0;
            $[13] = t3;
            $[14] = t4;
        } else {
            t4 = $[14];
        }
        t2 = t4;
    }
    const { totalInvested, totalEarnings, calculatedFV } = t2;
    let t3;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-2xl font-bold"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
            lineNumber: 146,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = t3;
    } else {
        t3 = $[15];
    }
    let t4;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ()=>setMode("sip");
        $[16] = t4;
    } else {
        t4 = $[16];
    }
    const t5 = `px-4 py-2 text-sm font-semibold ${mode === "sip" ? "bg-emerald-500 text-black" : "text-slate-600 dark:text-slate-300"}`;
    let t6;
    if ($[17] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t4,
            className: t5,
            children: "SIP"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
            lineNumber: 161,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = t5;
        $[18] = t6;
    } else {
        t6 = $[18];
    }
    let t7;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ()=>setMode("lumpsum");
        $[19] = t7;
    } else {
        t7 = $[19];
    }
    const t8 = `px-4 py-2 text-sm font-semibold ${mode === "lumpsum" ? "bg-emerald-500 text-black" : "text-slate-600 dark:text-slate-300"}`;
    let t9;
    if ($[20] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t7,
            className: t8,
            children: "Lumpsum"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
            lineNumber: 177,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = t8;
        $[21] = t9;
    } else {
        t9 = $[21];
    }
    let t10;
    if ($[22] !== t6 || $[23] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center mb-8",
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex rounded-lg overflow-hidden border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800",
                    children: [
                        t6,
                        t9
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
                    lineNumber: 185,
                    columnNumber: 71
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
            lineNumber: 185,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[22] = t6;
        $[23] = t9;
        $[24] = t10;
    } else {
        t10 = $[24];
    }
    let t11;
    if ($[25] !== lumpsumAmount || $[26] !== mode || $[27] !== monthlyInvestment) {
        t11 = mode === "sip" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Monthly Investment",
            value: monthlyInvestment,
            setter: setMonthlyInvestment,
            min: 100,
            max: 1000000,
            step: 100,
            unit: "\u20B9",
            accentColor: "text-emerald-500"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
            lineNumber: 194,
            columnNumber: 28
        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Lumpsum Investment",
            value: lumpsumAmount,
            setter: setLumpsumAmount,
            min: 1000,
            max: 10000000,
            step: 1000,
            unit: "\u20B9",
            accentColor: "text-emerald-500"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
            lineNumber: 194,
            columnNumber: 210
        }, ("TURBOPACK compile-time value", void 0));
        $[25] = lumpsumAmount;
        $[26] = mode;
        $[27] = monthlyInvestment;
        $[28] = t11;
    } else {
        t11 = $[28];
    }
    let t12;
    if ($[29] !== rate) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Expected Annual Return",
            value: rate,
            setter: setRate,
            min: 1,
            max: 30,
            step: 0.1,
            unit: "%",
            accentColor: "text-emerald-500"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
            lineNumber: 204,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[29] = rate;
        $[30] = t12;
    } else {
        t12 = $[30];
    }
    let t13;
    if ($[31] !== years) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Time Period",
            value: years,
            setter: setYears,
            min: 1,
            max: 50,
            unit: "Yrs",
            accentColor: "text-emerald-500"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
            lineNumber: 212,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[31] = years;
        $[32] = t13;
    } else {
        t13 = $[32];
    }
    let t14;
    if ($[33] !== t11 || $[34] !== t12 || $[35] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-2 space-y-8",
            children: [
                t11,
                t12,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
            lineNumber: 220,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[33] = t11;
        $[34] = t12;
        $[35] = t13;
        $[36] = t14;
    } else {
        t14 = $[36];
    }
    let t15;
    if ($[37] !== totalEarnings || $[38] !== totalInvested) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-1 flex justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoughnutChart"], {
                invested: totalInvested,
                returns: totalEarnings,
                investedColor: "#10b981",
                returnsColor: "#3b82f6"
            }, void 0, false, {
                fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
                lineNumber: 230,
                columnNumber: 62
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
            lineNumber: 230,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[37] = totalEarnings;
        $[38] = totalInvested;
        $[39] = t15;
    } else {
        t15 = $[39];
    }
    let t16;
    if ($[40] !== t14 || $[41] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 lg:grid-cols-3 gap-12",
            children: [
                t14,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
            lineNumber: 239,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[40] = t14;
        $[41] = t15;
        $[42] = t16;
    } else {
        t16 = $[42];
    }
    let t17;
    if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-slate-500 dark:text-slate-400",
            children: "Total Invested"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
            lineNumber: 248,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[43] = t17;
    } else {
        t17 = $[43];
    }
    let t18;
    if ($[44] !== totalInvested) {
        t18 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(totalInvested);
        $[44] = totalInvested;
        $[45] = t18;
    } else {
        t18 = $[45];
    }
    let t19;
    if ($[46] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl",
            children: [
                t17,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-2xl font-semibold",
                    children: t18
                }, void 0, false, {
                    fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
                    lineNumber: 263,
                    columnNumber: 81
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
            lineNumber: 263,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[46] = t18;
        $[47] = t19;
    } else {
        t19 = $[47];
    }
    let t20;
    if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-slate-500 dark:text-slate-400",
            children: "Est. Returns"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
            lineNumber: 271,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[48] = t20;
    } else {
        t20 = $[48];
    }
    let t21;
    if ($[49] !== totalEarnings) {
        t21 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(totalEarnings);
        $[49] = totalEarnings;
        $[50] = t21;
    } else {
        t21 = $[50];
    }
    let t22;
    if ($[51] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl",
            children: [
                t20,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-2xl font-semibold text-blue-600 dark:text-blue-400",
                    children: t21
                }, void 0, false, {
                    fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
                    lineNumber: 286,
                    columnNumber: 81
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
            lineNumber: 286,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[51] = t21;
        $[52] = t22;
    } else {
        t22 = $[52];
    }
    let t23;
    if ($[53] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-slate-500 dark:text-slate-400",
            children: "Total Value"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
            lineNumber: 294,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[53] = t23;
    } else {
        t23 = $[53];
    }
    let t24;
    if ($[54] !== calculatedFV) {
        t24 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(calculatedFV);
        $[54] = calculatedFV;
        $[55] = t24;
    } else {
        t24 = $[55];
    }
    let t25;
    if ($[56] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl md:text-right",
            children: [
                t23,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-3xl font-bold text-emerald-600 dark:text-emerald-400",
                    children: t24
                }, void 0, false, {
                    fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
                    lineNumber: 309,
                    columnNumber: 95
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
            lineNumber: 309,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[56] = t24;
        $[57] = t25;
    } else {
        t25 = $[57];
    }
    let t26;
    if ($[58] !== t19 || $[59] !== t22 || $[60] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-8",
            children: [
                t19,
                t22,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
            lineNumber: 317,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[58] = t19;
        $[59] = t22;
        $[60] = t25;
        $[61] = t26;
    } else {
        t26 = $[61];
    }
    let t27;
    if ($[62] !== t10 || $[63] !== t16 || $[64] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-xl border shadow-2xl p-8 bg-white text-slate-900 border-slate-200 dark:bg-slate-900 dark:text-white dark:border-slate-800",
            children: [
                t10,
                t16,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/SIPCalculator.jsx",
            lineNumber: 327,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[62] = t10;
        $[63] = t16;
        $[64] = t26;
        $[65] = t27;
    } else {
        t27 = $[65];
    }
    return t27;
};
_s(InvestmentCalculator, "tuPW5A7w1rwcKK516sSF8fYtEXw=");
_c = InvestmentCalculator;
const __TURBOPACK__default__export__ = InvestmentCalculator;
var _c;
__turbopack_context__.k.register(_c, "InvestmentCalculator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/Calculators/SubCalculators/LumpsumCalculator.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/CalculatorUtils.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/UI/Utility.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const LumpsumCalculator = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(51);
    if ($[0] !== "a6d4196f7db080ad4b6522a65ef9ce5df24703e972bd4ee4c7efda199ba5454a") {
        for(let $i = 0; $i < 51; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a6d4196f7db080ad4b6522a65ef9ce5df24703e972bd4ee4c7efda199ba5454a";
    }
    const [lumpsum, setLumpsum] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [rate, setRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [years, setYears] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const P = Number(lumpsum);
    const R = Number(rate);
    const Y = Number(years);
    let t0;
    bb0: {
        if (P <= 0 || R <= 0 || Y <= 0) {
            let t1;
            if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
                t1 = {
                    totalInvested: 0,
                    totalEarnings: 0,
                    calculatedFV: 0
                };
                $[1] = t1;
            } else {
                t1 = $[1];
            }
            t0 = t1;
            break bb0;
        }
        const r = R / 100;
        const n = Y;
        const calculatedFV = P * Math.pow(1 + r, n);
        const totalInvested = P;
        const totalEarnings = calculatedFV - P;
        let t1;
        if ($[2] !== calculatedFV || $[3] !== totalEarnings || $[4] !== totalInvested) {
            t1 = {
                totalInvested,
                totalEarnings,
                calculatedFV
            };
            $[2] = calculatedFV;
            $[3] = totalEarnings;
            $[4] = totalInvested;
            $[5] = t1;
        } else {
            t1 = $[5];
        }
        t0 = t1;
    }
    const { totalInvested: totalInvested_0, totalEarnings: totalEarnings_0, calculatedFV: calculatedFV_0 } = t0;
    let t1;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6",
            children: "Lumpsum Calculator (एकमुश्त निवेश)"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/LumpsumCalculator.jsx",
            lineNumber: 66,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    let t2;
    if ($[7] !== lumpsum) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Initial Investment",
            value: lumpsum,
            setter: setLumpsum,
            min: 1000,
            max: 1000000,
            unit: "\u20B9",
            placeholder: "100000",
            accentColor: "text-cyan-600 dark:text-cyan-400"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/LumpsumCalculator.jsx",
            lineNumber: 73,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = lumpsum;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    let t3;
    if ($[9] !== rate) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Expected Annual Return",
            value: rate,
            setter: setRate,
            min: 1,
            max: 30,
            unit: "%",
            placeholder: "15",
            accentColor: "text-cyan-600 dark:text-cyan-400"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/LumpsumCalculator.jsx",
            lineNumber: 81,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = rate;
        $[10] = t3;
    } else {
        t3 = $[10];
    }
    let t4;
    if ($[11] !== years) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Time Period",
            value: years,
            setter: setYears,
            min: 1,
            max: 50,
            unit: "Yrs",
            placeholder: "5",
            accentColor: "text-cyan-600 dark:text-cyan-400"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/LumpsumCalculator.jsx",
            lineNumber: 89,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = years;
        $[12] = t4;
    } else {
        t4 = $[12];
    }
    let t5;
    if ($[13] !== t2 || $[14] !== t3 || $[15] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-2 space-y-6",
            children: [
                t2,
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/LumpsumCalculator.jsx",
            lineNumber: 97,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = t2;
        $[14] = t3;
        $[15] = t4;
        $[16] = t5;
    } else {
        t5 = $[16];
    }
    const t6 = totalEarnings_0 > 0 ? totalEarnings_0 : 0;
    let t7;
    if ($[17] !== t6 || $[18] !== totalInvested_0) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-1 flex flex-col items-center justify-start pt-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoughnutChart"], {
                invested: totalInvested_0,
                returns: t6,
                investedColor: "#06B6D4",
                returnsColor: "#10B981"
            }, void 0, false, {
                fileName: "[project]/src/Calculators/SubCalculators/LumpsumCalculator.jsx",
                lineNumber: 108,
                columnNumber: 87
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/LumpsumCalculator.jsx",
            lineNumber: 108,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = t6;
        $[18] = totalInvested_0;
        $[19] = t7;
    } else {
        t7 = $[19];
    }
    let t8;
    if ($[20] !== t5 || $[21] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
            children: [
                t5,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/LumpsumCalculator.jsx",
            lineNumber: 117,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = t5;
        $[21] = t7;
        $[22] = t8;
    } else {
        t8 = $[22];
    }
    let t9;
    if ($[23] !== calculatedFV_0) {
        t9 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(calculatedFV_0);
        $[23] = calculatedFV_0;
        $[24] = t9;
    } else {
        t9 = $[24];
    }
    let t10;
    if ($[25] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xl font-bold text-cyan-700 dark:text-cyan-300",
            children: t9
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/LumpsumCalculator.jsx",
            lineNumber: 134,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[25] = t9;
        $[26] = t10;
    } else {
        t10 = $[26];
    }
    let t11;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-slate-600 dark:text-slate-400",
            children: "Total Future Value"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/LumpsumCalculator.jsx",
            lineNumber: 142,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[27] = t11;
    } else {
        t11 = $[27];
    }
    let t12;
    if ($[28] !== t10) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/LumpsumCalculator.jsx",
            lineNumber: 149,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[28] = t10;
        $[29] = t12;
    } else {
        t12 = $[29];
    }
    let t13;
    if ($[30] !== totalInvested_0) {
        t13 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(totalInvested_0);
        $[30] = totalInvested_0;
        $[31] = t13;
    } else {
        t13 = $[31];
    }
    let t14;
    if ($[32] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-lg font-semibold text-slate-900 dark:text-slate-50",
            children: t13
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/LumpsumCalculator.jsx",
            lineNumber: 165,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[32] = t13;
        $[33] = t14;
    } else {
        t14 = $[33];
    }
    let t15;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-slate-600 dark:text-slate-400",
            children: "Total Invested"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/LumpsumCalculator.jsx",
            lineNumber: 173,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[34] = t15;
    } else {
        t15 = $[34];
    }
    let t16;
    if ($[35] !== t14) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-right",
            children: [
                t14,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/LumpsumCalculator.jsx",
            lineNumber: 180,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[35] = t14;
        $[36] = t16;
    } else {
        t16 = $[36];
    }
    const t17 = totalEarnings_0 > 0 ? totalEarnings_0 : 0;
    let t18;
    if ($[37] !== t17) {
        t18 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(t17);
        $[37] = t17;
        $[38] = t18;
    } else {
        t18 = $[38];
    }
    let t19;
    if ($[39] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-lg font-semibold text-emerald-600 dark:text-emerald-400",
            children: t18
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/LumpsumCalculator.jsx",
            lineNumber: 197,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[39] = t18;
        $[40] = t19;
    } else {
        t19 = $[40];
    }
    let t20;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-slate-600 dark:text-slate-400",
            children: "Total Earnings"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/LumpsumCalculator.jsx",
            lineNumber: 205,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[41] = t20;
    } else {
        t20 = $[41];
    }
    let t21;
    if ($[42] !== t19) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t19,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/LumpsumCalculator.jsx",
            lineNumber: 212,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[42] = t19;
        $[43] = t21;
    } else {
        t21 = $[43];
    }
    let t22;
    if ($[44] !== t12 || $[45] !== t16 || $[46] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-8 pt-6 border-t border-slate-200 dark:border-slate-700",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-4",
                children: [
                    t12,
                    t16,
                    t21
                ]
            }, void 0, true, {
                fileName: "[project]/src/Calculators/SubCalculators/LumpsumCalculator.jsx",
                lineNumber: 220,
                columnNumber: 86
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/LumpsumCalculator.jsx",
            lineNumber: 220,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[44] = t12;
        $[45] = t16;
        $[46] = t21;
        $[47] = t22;
    } else {
        t22 = $[47];
    }
    let t23;
    if ($[48] !== t22 || $[49] !== t8) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-6 rounded-xl border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-xl",
            children: [
                t1,
                t8,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/LumpsumCalculator.jsx",
            lineNumber: 230,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[48] = t22;
        $[49] = t8;
        $[50] = t23;
    } else {
        t23 = $[50];
    }
    return t23;
};
_s(LumpsumCalculator, "jBA8OSwzXt92F/YAjYL8hNaELEg=");
_c = LumpsumCalculator;
const __TURBOPACK__default__export__ = LumpsumCalculator;
var _c;
__turbopack_context__.k.register(_c, "LumpsumCalculator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/Calculators/SubCalculators/IpoProfitCalculator.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/CalculatorUtils.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/UI/Utility.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const IpoProfitCalculator = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(47);
    if ($[0] !== "ea2f75a45454ef6b0355f9a3cf880caf05e293f7bd9b2496ea469e7cca330fdc") {
        for(let $i = 0; $i < 47; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ea2f75a45454ef6b0355f9a3cf880caf05e293f7bd9b2496ea469e7cca330fdc";
    }
    const [allotmentLots, setAllotmentLots] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [lotSize, setLotSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [issuePrice, setIssuePrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [listingPrice, setListingPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const L = Number(allotmentLots);
    const S = Number(lotSize);
    const I = Number(issuePrice);
    const T = Number(listingPrice);
    let t0;
    bb0: {
        if (L <= 0 || S <= 0 || I <= 0 || T <= 0) {
            let t1;
            if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
                t1 = {
                    totalInvestment: 0,
                    profitAmount: 0,
                    gainPercentage: 0,
                    profitColor: "text-slate-600 dark:text-slate-300"
                };
                $[1] = t1;
            } else {
                t1 = $[1];
            }
            t0 = t1;
            break bb0;
        }
        const totalShares = L * S;
        const listingGainPerShare = T - I;
        const profitAmount = totalShares * listingGainPerShare;
        const totalInvestment = L * S * I;
        const gainPercentage = totalInvestment > 0 ? profitAmount / totalInvestment * 100 : 0;
        const color = profitAmount > 0 ? "text-emerald-600 dark:text-emerald-400" : profitAmount < 0 ? "text-red-600 dark:text-red-400" : "text-slate-600 dark:text-slate-300";
        let t1;
        if ($[2] !== color || $[3] !== gainPercentage || $[4] !== profitAmount || $[5] !== totalInvestment) {
            t1 = {
                totalInvestment,
                profitAmount,
                gainPercentage,
                profitColor: color
            };
            $[2] = color;
            $[3] = gainPercentage;
            $[4] = profitAmount;
            $[5] = totalInvestment;
            $[6] = t1;
        } else {
            t1 = $[6];
        }
        t0 = t1;
    }
    const { totalInvestment: totalInvestment_0, profitAmount: profitAmount_0, gainPercentage: gainPercentage_0, profitColor } = t0;
    let t1;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6",
            children: "IPO Profit Estimator (IPO लाभ अनुमानक)"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/IpoProfitCalculator.jsx",
            lineNumber: 73,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t1;
    } else {
        t1 = $[7];
    }
    let t2;
    if ($[8] !== allotmentLots) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Lots Allotted",
            value: allotmentLots,
            setter: setAllotmentLots,
            min: 0,
            max: 10,
            placeholder: "1",
            unit: "",
            accentColor: "text-fuchsia-600 dark:text-fuchsia-400"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/IpoProfitCalculator.jsx",
            lineNumber: 80,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = allotmentLots;
        $[9] = t2;
    } else {
        t2 = $[9];
    }
    let t3;
    if ($[10] !== lotSize) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Lot Size (Shares)",
            value: lotSize,
            setter: setLotSize,
            min: 0,
            max: 100,
            placeholder: "14",
            unit: "",
            accentColor: "text-fuchsia-600 dark:text-fuchsia-400"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/IpoProfitCalculator.jsx",
            lineNumber: 88,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = lotSize;
        $[11] = t3;
    } else {
        t3 = $[11];
    }
    let t4;
    if ($[12] !== issuePrice) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Issue Price (\u20B9)",
            value: issuePrice,
            setter: setIssuePrice,
            min: 0,
            max: 5000,
            placeholder: "1062",
            unit: "\u20B9",
            accentColor: "text-fuchsia-600 dark:text-fuchsia-400"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/IpoProfitCalculator.jsx",
            lineNumber: 96,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = issuePrice;
        $[13] = t4;
    } else {
        t4 = $[13];
    }
    let t5;
    if ($[14] !== listingPrice) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Listing Price (\u20B9)",
            value: listingPrice,
            setter: setListingPrice,
            min: 0,
            max: 6000,
            placeholder: "1300",
            unit: "\u20B9",
            accentColor: "text-fuchsia-600 dark:text-fuchsia-400"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/IpoProfitCalculator.jsx",
            lineNumber: 104,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = listingPrice;
        $[15] = t5;
    } else {
        t5 = $[15];
    }
    let t6;
    if ($[16] !== t2 || $[17] !== t3 || $[18] !== t4 || $[19] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4 col-span-2 md:col-span-1",
            children: [
                t2,
                t3,
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/IpoProfitCalculator.jsx",
            lineNumber: 112,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = t2;
        $[17] = t3;
        $[18] = t4;
        $[19] = t5;
        $[20] = t6;
    } else {
        t6 = $[20];
    }
    let t7;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-slate-600 dark:text-slate-400",
            children: "Total Investment:"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/IpoProfitCalculator.jsx",
            lineNumber: 123,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[21] = t7;
    } else {
        t7 = $[21];
    }
    let t8;
    if ($[22] !== totalInvestment_0) {
        t8 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(totalInvestment_0);
        $[22] = totalInvestment_0;
        $[23] = t8;
    } else {
        t8 = $[23];
    }
    let t9;
    if ($[24] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between text-sm",
            children: [
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-semibold text-slate-900 dark:text-slate-50",
                    children: t8
                }, void 0, false, {
                    fileName: "[project]/src/Calculators/SubCalculators/IpoProfitCalculator.jsx",
                    lineNumber: 138,
                    columnNumber: 60
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/IpoProfitCalculator.jsx",
            lineNumber: 138,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[24] = t8;
        $[25] = t9;
    } else {
        t9 = $[25];
    }
    let t10;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-slate-600 dark:text-slate-400",
            children: "Estimated Gain/Loss (%):"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/IpoProfitCalculator.jsx",
            lineNumber: 146,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[26] = t10;
    } else {
        t10 = $[26];
    }
    const t11 = `font-semibold ${profitColor}`;
    let t12;
    if ($[27] !== gainPercentage_0) {
        t12 = gainPercentage_0.toFixed(2);
        $[27] = gainPercentage_0;
        $[28] = t12;
    } else {
        t12 = $[28];
    }
    let t13;
    if ($[29] !== t11 || $[30] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between text-sm",
            children: [
                t10,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: t11,
                    children: [
                        t12,
                        " %"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/Calculators/SubCalculators/IpoProfitCalculator.jsx",
                    lineNumber: 162,
                    columnNumber: 62
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/IpoProfitCalculator.jsx",
            lineNumber: 162,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[29] = t11;
        $[30] = t12;
        $[31] = t13;
    } else {
        t13 = $[31];
    }
    let t14;
    if ($[32] !== t13 || $[33] !== t9) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3",
            children: [
                t9,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/IpoProfitCalculator.jsx",
            lineNumber: 171,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[32] = t13;
        $[33] = t9;
        $[34] = t14;
    } else {
        t14 = $[34];
    }
    let t15;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm font-semibold text-slate-600 dark:text-slate-400",
            children: "Total Estimated Profit/Loss:"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/IpoProfitCalculator.jsx",
            lineNumber: 180,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[35] = t15;
    } else {
        t15 = $[35];
    }
    const t16 = `text-3xl font-bold mt-1 ${profitColor}`;
    let t17;
    if ($[36] !== profitAmount_0) {
        t17 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(profitAmount_0);
        $[36] = profitAmount_0;
        $[37] = t17;
    } else {
        t17 = $[37];
    }
    let t18;
    if ($[38] !== t16 || $[39] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-6",
            children: [
                t15,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: t16,
                    children: t17
                }, void 0, false, {
                    fileName: "[project]/src/Calculators/SubCalculators/IpoProfitCalculator.jsx",
                    lineNumber: 196,
                    columnNumber: 38
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/IpoProfitCalculator.jsx",
            lineNumber: 196,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[38] = t16;
        $[39] = t17;
        $[40] = t18;
    } else {
        t18 = $[40];
    }
    let t19;
    if ($[41] !== t14 || $[42] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "col-span-2 md:col-span-1 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between",
            children: [
                t14,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/IpoProfitCalculator.jsx",
            lineNumber: 205,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[41] = t14;
        $[42] = t18;
        $[43] = t19;
    } else {
        t19 = $[43];
    }
    let t20;
    if ($[44] !== t19 || $[45] !== t6) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-6 rounded-xl border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-xl",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-4",
                    children: [
                        t6,
                        t19
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/Calculators/SubCalculators/IpoProfitCalculator.jsx",
                    lineNumber: 214,
                    columnNumber: 130
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/IpoProfitCalculator.jsx",
            lineNumber: 214,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[44] = t19;
        $[45] = t6;
        $[46] = t20;
    } else {
        t20 = $[46];
    }
    return t20;
};
_s(IpoProfitCalculator, "WnqY3wlEVnQAsnltA7lXW22sEJI=");
_c = IpoProfitCalculator;
const __TURBOPACK__default__export__ = IpoProfitCalculator;
var _c;
__turbopack_context__.k.register(_c, "IpoProfitCalculator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/Calculators/SubCalculators/GoalCalculator.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/CalculatorUtils.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/UI/Utility.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const GoalCalculator = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(51);
    if ($[0] !== "4f7f35903f01b551add44f25898252c05bd9a0be183447eb4067d24c4f138081") {
        for(let $i = 0; $i < 51; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4f7f35903f01b551add44f25898252c05bd9a0be183447eb4067d24c4f138081";
    }
    const [futureValue, setFutureValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [rate, setRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [years, setYears] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const FV = Number(futureValue);
    const R = Number(rate);
    const Y = Number(years);
    let t0;
    bb0: {
        if (FV <= 0 || R <= 0 || Y <= 0) {
            let t1;
            if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
                t1 = {
                    totalInvestment: 0,
                    totalEarnings: 0,
                    requiredSIP: 0
                };
                $[1] = t1;
            } else {
                t1 = $[1];
            }
            t0 = t1;
            break bb0;
        }
        const r = R / 100 / 12;
        const n = Y * 12;
        const requiredSIP = FV * (r / (Math.pow(1 + r, n) - 1)) / (1 + r);
        const totalInvestment = requiredSIP * Y * 12;
        const totalEarnings = FV - totalInvestment;
        let t1;
        if ($[2] !== requiredSIP || $[3] !== totalEarnings || $[4] !== totalInvestment) {
            t1 = {
                totalInvestment,
                totalEarnings,
                requiredSIP
            };
            $[2] = requiredSIP;
            $[3] = totalEarnings;
            $[4] = totalInvestment;
            $[5] = t1;
        } else {
            t1 = $[5];
        }
        t0 = t1;
    }
    const { totalInvestment: totalInvestment_0, totalEarnings: totalEarnings_0, requiredSIP: requiredSIP_0 } = t0;
    let t1;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/GoalCalculator.jsx",
            lineNumber: 66,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    let t2;
    if ($[7] !== futureValue) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Target Corpus / Goal Amount",
            value: futureValue,
            setter: setFutureValue,
            min: 10000,
            max: 10000000,
            unit: "\u20B9",
            placeholder: "5000000",
            accentColor: "text-purple-600 dark:text-purple-400"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/GoalCalculator.jsx",
            lineNumber: 73,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = futureValue;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    let t3;
    if ($[9] !== rate) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Expected Annual Return",
            value: rate,
            setter: setRate,
            min: 1,
            max: 30,
            unit: "%",
            placeholder: "10",
            accentColor: "text-purple-600 dark:text-purple-400"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/GoalCalculator.jsx",
            lineNumber: 81,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = rate;
        $[10] = t3;
    } else {
        t3 = $[10];
    }
    let t4;
    if ($[11] !== years) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Time to Goal",
            value: years,
            setter: setYears,
            min: 1,
            max: 50,
            unit: "Yrs",
            placeholder: "15",
            accentColor: "text-purple-600 dark:text-purple-400"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/GoalCalculator.jsx",
            lineNumber: 89,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = years;
        $[12] = t4;
    } else {
        t4 = $[12];
    }
    let t5;
    if ($[13] !== t2 || $[14] !== t3 || $[15] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-2 space-y-6",
            children: [
                t2,
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/GoalCalculator.jsx",
            lineNumber: 97,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = t2;
        $[14] = t3;
        $[15] = t4;
        $[16] = t5;
    } else {
        t5 = $[16];
    }
    const t6 = totalEarnings_0 > 0 ? totalEarnings_0 : 0;
    let t7;
    if ($[17] !== t6 || $[18] !== totalInvestment_0) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-1 flex flex-col items-center justify-start pt-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoughnutChart"], {
                invested: totalInvestment_0,
                returns: t6,
                investedColor: "#A855F7",
                returnsColor: "#10B981"
            }, void 0, false, {
                fileName: "[project]/src/Calculators/SubCalculators/GoalCalculator.jsx",
                lineNumber: 108,
                columnNumber: 87
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/GoalCalculator.jsx",
            lineNumber: 108,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = t6;
        $[18] = totalInvestment_0;
        $[19] = t7;
    } else {
        t7 = $[19];
    }
    let t8;
    if ($[20] !== t5 || $[21] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
            children: [
                t5,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/GoalCalculator.jsx",
            lineNumber: 117,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = t5;
        $[21] = t7;
        $[22] = t8;
    } else {
        t8 = $[22];
    }
    let t9;
    if ($[23] !== requiredSIP_0) {
        t9 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(requiredSIP_0);
        $[23] = requiredSIP_0;
        $[24] = t9;
    } else {
        t9 = $[24];
    }
    let t10;
    if ($[25] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xl font-bold text-purple-700 dark:text-purple-300",
            children: t9
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/GoalCalculator.jsx",
            lineNumber: 134,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[25] = t9;
        $[26] = t10;
    } else {
        t10 = $[26];
    }
    let t11;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-slate-600 dark:text-slate-400",
            children: "Monthly SIP Required"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/GoalCalculator.jsx",
            lineNumber: 142,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[27] = t11;
    } else {
        t11 = $[27];
    }
    let t12;
    if ($[28] !== t10) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/GoalCalculator.jsx",
            lineNumber: 149,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[28] = t10;
        $[29] = t12;
    } else {
        t12 = $[29];
    }
    let t13;
    if ($[30] !== totalInvestment_0) {
        t13 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(totalInvestment_0);
        $[30] = totalInvestment_0;
        $[31] = t13;
    } else {
        t13 = $[31];
    }
    let t14;
    if ($[32] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-lg font-semibold text-slate-900 dark:text-slate-50",
            children: t13
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/GoalCalculator.jsx",
            lineNumber: 165,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[32] = t13;
        $[33] = t14;
    } else {
        t14 = $[33];
    }
    let t15;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-slate-600 dark:text-slate-400",
            children: "Total Investment Required"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/GoalCalculator.jsx",
            lineNumber: 173,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[34] = t15;
    } else {
        t15 = $[34];
    }
    let t16;
    if ($[35] !== t14) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-right",
            children: [
                t14,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/GoalCalculator.jsx",
            lineNumber: 180,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[35] = t14;
        $[36] = t16;
    } else {
        t16 = $[36];
    }
    const t17 = totalEarnings_0 > 0 ? totalEarnings_0 : 0;
    let t18;
    if ($[37] !== t17) {
        t18 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(t17);
        $[37] = t17;
        $[38] = t18;
    } else {
        t18 = $[38];
    }
    let t19;
    if ($[39] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-lg font-semibold text-purple-600 dark:text-purple-400",
            children: t18
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/GoalCalculator.jsx",
            lineNumber: 197,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[39] = t18;
        $[40] = t19;
    } else {
        t19 = $[40];
    }
    let t20;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-slate-600 dark:text-slate-400",
            children: "Total Potential Earnings"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/GoalCalculator.jsx",
            lineNumber: 205,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[41] = t20;
    } else {
        t20 = $[41];
    }
    let t21;
    if ($[42] !== t19) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t19,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/GoalCalculator.jsx",
            lineNumber: 212,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[42] = t19;
        $[43] = t21;
    } else {
        t21 = $[43];
    }
    let t22;
    if ($[44] !== t12 || $[45] !== t16 || $[46] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-8 pt-6 border-t border-slate-200 dark:border-slate-700",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-4",
                children: [
                    t12,
                    t16,
                    t21
                ]
            }, void 0, true, {
                fileName: "[project]/src/Calculators/SubCalculators/GoalCalculator.jsx",
                lineNumber: 220,
                columnNumber: 86
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/GoalCalculator.jsx",
            lineNumber: 220,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[44] = t12;
        $[45] = t16;
        $[46] = t21;
        $[47] = t22;
    } else {
        t22 = $[47];
    }
    let t23;
    if ($[48] !== t22 || $[49] !== t8) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-6 rounded-xl border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-xl",
            children: [
                t1,
                t8,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/GoalCalculator.jsx",
            lineNumber: 230,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[48] = t22;
        $[49] = t8;
        $[50] = t23;
    } else {
        t23 = $[50];
    }
    return t23;
};
_s(GoalCalculator, "7Pbi4PgCFWaHlv47nltzXwFQR2Y=");
_c = GoalCalculator;
const __TURBOPACK__default__export__ = GoalCalculator;
var _c;
__turbopack_context__.k.register(_c, "GoalCalculator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/CalculatorUtils.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/UI/Utility.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const RetirementCalculator = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(70);
    if ($[0] !== "6c629d923a77ffdf3cfbdba0f8f717dd929047dbac5da160afd032fd49e8b466") {
        for(let $i = 0; $i < 70; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6c629d923a77ffdf3cfbdba0f8f717dd929047dbac5da160afd032fd49e8b466";
    }
    const [currentAge, setCurrentAge] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(27);
    const [retirementAge, setRetirementAge] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(60);
    const [lifeExpectancy, setLifeExpectancy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(80);
    const [monthlyExpense, setMonthlyExpense] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(15000);
    const [existingSavings, setExistingSavings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [inflationRate, setInflationRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(6);
    const [preRetReturn, setPreRetReturn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(15);
    const [postRetReturn, setPostRetReturn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(8);
    let t0;
    bb0: {
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
        if (yrsToRetire <= 0 || yrsInRetirement <= 0 || ME <= 0 || rPost <= 0 || rPre <= 0) {
            let t1;
            if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
                t1 = {
                    yearsToRetire: 0,
                    yearsInRetirement: 0,
                    annualExpenseAtRetirement: 0,
                    requiredCorpus: 0,
                    monthlySavingRequired: 0
                };
                $[1] = t1;
            } else {
                t1 = $[1];
            }
            t0 = t1;
            break bb0;
        }
        const futureMonthlyExpense = ME * Math.pow(1 + i, yrsToRetire);
        const annualExpense = futureMonthlyExpense * 12;
        const corpus = annualExpense * (1 - Math.pow(1 / (1 + rPost), yrsInRetirement)) / rPost;
        const existingAtRetirement = ES * Math.pow(1 + rPre, yrsToRetire);
        const netCorpusNeeded = Math.max(0, corpus - existingAtRetirement);
        const monthlyRate = rPre / 12;
        const months = yrsToRetire * 12;
        const monthlySaving = netCorpusNeeded * (monthlyRate / (Math.pow(1 + monthlyRate, months) - 1));
        let t1;
        if ($[2] !== annualExpense) {
            t1 = Math.round(annualExpense);
            $[2] = annualExpense;
            $[3] = t1;
        } else {
            t1 = $[3];
        }
        let t2;
        if ($[4] !== corpus) {
            t2 = Math.round(corpus);
            $[4] = corpus;
            $[5] = t2;
        } else {
            t2 = $[5];
        }
        let t3;
        if ($[6] !== monthlySaving) {
            t3 = Math.round(monthlySaving);
            $[6] = monthlySaving;
            $[7] = t3;
        } else {
            t3 = $[7];
        }
        let t4;
        if ($[8] !== t1 || $[9] !== t2 || $[10] !== t3 || $[11] !== yrsInRetirement || $[12] !== yrsToRetire) {
            t4 = {
                yearsToRetire: yrsToRetire,
                yearsInRetirement: yrsInRetirement,
                annualExpenseAtRetirement: t1,
                requiredCorpus: t2,
                monthlySavingRequired: t3
            };
            $[8] = t1;
            $[9] = t2;
            $[10] = t3;
            $[11] = yrsInRetirement;
            $[12] = yrsToRetire;
            $[13] = t4;
        } else {
            t4 = $[13];
        }
        t0 = t4;
    }
    const { yearsToRetire, yearsInRetirement, annualExpenseAtRetirement, requiredCorpus, monthlySavingRequired } = t0;
    let t1;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-2xl font-bold text-slate-900 dark:text-white",
            children: "Retirement Planning Calculator"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx",
            lineNumber: 113,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = t1;
    } else {
        t1 = $[14];
    }
    let t2;
    if ($[15] !== currentAge) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Current Age",
            value: currentAge,
            setter: setCurrentAge,
            min: 18,
            max: 70,
            unit: "Yrs",
            accentColor: "text-indigo-600 dark:text-indigo-400"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx",
            lineNumber: 120,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = currentAge;
        $[16] = t2;
    } else {
        t2 = $[16];
    }
    let t3;
    if ($[17] !== retirementAge) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Retirement Age",
            value: retirementAge,
            setter: setRetirementAge,
            min: 40,
            max: 80,
            unit: "Yrs",
            accentColor: "text-indigo-600 dark:text-indigo-400"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx",
            lineNumber: 128,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = retirementAge;
        $[18] = t3;
    } else {
        t3 = $[18];
    }
    let t4;
    if ($[19] !== lifeExpectancy) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Life Expectancy",
            value: lifeExpectancy,
            setter: setLifeExpectancy,
            min: 60,
            max: 100,
            unit: "Yrs",
            accentColor: "text-indigo-600 dark:text-indigo-400"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx",
            lineNumber: 136,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = lifeExpectancy;
        $[20] = t4;
    } else {
        t4 = $[20];
    }
    let t5;
    if ($[21] !== monthlyExpense) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Current Monthly Expense",
            value: monthlyExpense,
            setter: setMonthlyExpense,
            min: 5000,
            max: 300000,
            step: 1000,
            unit: "\u20B9",
            accentColor: "text-indigo-600 dark:text-indigo-400"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx",
            lineNumber: 144,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[21] = monthlyExpense;
        $[22] = t5;
    } else {
        t5 = $[22];
    }
    let t6;
    if ($[23] !== existingSavings) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Existing Retirement Savings",
            value: existingSavings,
            setter: setExistingSavings,
            min: 0,
            max: 50000000,
            step: 50000,
            unit: "\u20B9",
            accentColor: "text-indigo-600 dark:text-indigo-400"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx",
            lineNumber: 152,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[23] = existingSavings;
        $[24] = t6;
    } else {
        t6 = $[24];
    }
    let t7;
    if ($[25] !== inflationRate) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Expected Inflation Rate",
            value: inflationRate,
            setter: setInflationRate,
            min: 3,
            max: 15,
            step: 0.5,
            unit: "%",
            accentColor: "text-indigo-600 dark:text-indigo-400"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx",
            lineNumber: 160,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[25] = inflationRate;
        $[26] = t7;
    } else {
        t7 = $[26];
    }
    let t8;
    if ($[27] !== preRetReturn) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Return (Before Retirement)",
            value: preRetReturn,
            setter: setPreRetReturn,
            min: 5,
            max: 20,
            step: 0.5,
            unit: "%",
            accentColor: "text-indigo-600 dark:text-indigo-400"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx",
            lineNumber: 168,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[27] = preRetReturn;
        $[28] = t8;
    } else {
        t8 = $[28];
    }
    let t9;
    if ($[29] !== postRetReturn) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Return (After Retirement)",
            value: postRetReturn,
            setter: setPostRetReturn,
            min: 3,
            max: 12,
            step: 0.5,
            unit: "%",
            accentColor: "text-indigo-600 dark:text-indigo-400"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx",
            lineNumber: 176,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[29] = postRetReturn;
        $[30] = t9;
    } else {
        t9 = $[30];
    }
    let t10;
    if ($[31] !== t2 || $[32] !== t3 || $[33] !== t4 || $[34] !== t5 || $[35] !== t6 || $[36] !== t7 || $[37] !== t8 || $[38] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                t2,
                t3,
                t4,
                t5,
                t6,
                t7,
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx",
            lineNumber: 184,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[31] = t2;
        $[32] = t3;
        $[33] = t4;
        $[34] = t5;
        $[35] = t6;
        $[36] = t7;
        $[37] = t8;
        $[38] = t9;
        $[39] = t10;
    } else {
        t10 = $[39];
    }
    let t11;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-slate-600 dark:text-slate-400",
            children: "Years until Retirement"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx",
            lineNumber: 199,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[40] = t11;
    } else {
        t11 = $[40];
    }
    let t12;
    if ($[41] !== yearsToRetire) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between text-sm",
            children: [
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-semibold",
                    children: yearsToRetire
                }, void 0, false, {
                    fileName: "[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx",
                    lineNumber: 206,
                    columnNumber: 62
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx",
            lineNumber: 206,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[41] = yearsToRetire;
        $[42] = t12;
    } else {
        t12 = $[42];
    }
    let t13;
    if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-slate-600 dark:text-slate-400",
            children: "Years in Retirement"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx",
            lineNumber: 214,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[43] = t13;
    } else {
        t13 = $[43];
    }
    let t14;
    if ($[44] !== yearsInRetirement) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between text-sm",
            children: [
                t13,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-semibold",
                    children: yearsInRetirement
                }, void 0, false, {
                    fileName: "[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx",
                    lineNumber: 221,
                    columnNumber: 62
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx",
            lineNumber: 221,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[44] = yearsInRetirement;
        $[45] = t14;
    } else {
        t14 = $[45];
    }
    let t15;
    if ($[46] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-slate-600 dark:text-slate-400",
            children: "Annual Income Required After Retirement"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx",
            lineNumber: 229,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[46] = t15;
    } else {
        t15 = $[46];
    }
    let t16;
    if ($[47] !== annualExpenseAtRetirement) {
        t16 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(annualExpenseAtRetirement);
        $[47] = annualExpenseAtRetirement;
        $[48] = t16;
    } else {
        t16 = $[48];
    }
    let t17;
    if ($[49] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between text-sm",
            children: [
                t15,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-semibold text-indigo-600 dark:text-indigo-400",
                    children: t16
                }, void 0, false, {
                    fileName: "[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx",
                    lineNumber: 244,
                    columnNumber: 62
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx",
            lineNumber: 244,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[49] = t16;
        $[50] = t17;
    } else {
        t17 = $[50];
    }
    let t18;
    if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-slate-600 dark:text-slate-400",
            children: "Required Retirement Corpus"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx",
            lineNumber: 252,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[51] = t18;
    } else {
        t18 = $[51];
    }
    let t19;
    if ($[52] !== requiredCorpus) {
        t19 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(requiredCorpus);
        $[52] = requiredCorpus;
        $[53] = t19;
    } else {
        t19 = $[53];
    }
    let t20;
    if ($[54] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-t border-slate-200 dark:border-slate-800 pt-4",
            children: [
                t18,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-3xl font-bold text-indigo-700 dark:text-indigo-300",
                    children: t19
                }, void 0, false, {
                    fileName: "[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx",
                    lineNumber: 267,
                    columnNumber: 86
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx",
            lineNumber: 267,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[54] = t19;
        $[55] = t20;
    } else {
        t20 = $[55];
    }
    let t21;
    if ($[56] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-slate-600 dark:text-slate-400",
            children: "Monthly Savings Required"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx",
            lineNumber: 275,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[56] = t21;
    } else {
        t21 = $[56];
    }
    let t22;
    if ($[57] !== monthlySavingRequired) {
        t22 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(monthlySavingRequired);
        $[57] = monthlySavingRequired;
        $[58] = t22;
    } else {
        t22 = $[58];
    }
    let t23;
    if ($[59] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-t border-slate-200 dark:border-slate-800 pt-4",
            children: [
                t21,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-3xl font-bold text-indigo-700 dark:text-indigo-300",
                    children: t22
                }, void 0, false, {
                    fileName: "[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx",
                    lineNumber: 290,
                    columnNumber: 86
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx",
            lineNumber: 290,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[59] = t22;
        $[60] = t23;
    } else {
        t23 = $[60];
    }
    let t24;
    if ($[61] !== t12 || $[62] !== t14 || $[63] !== t17 || $[64] !== t20 || $[65] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6 rounded-xl border border-slate-200 dark:border-slate-800 space-y-6",
            children: [
                t12,
                t14,
                t17,
                t20,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx",
            lineNumber: 298,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[61] = t12;
        $[62] = t14;
        $[63] = t17;
        $[64] = t20;
        $[65] = t23;
        $[66] = t24;
    } else {
        t24 = $[66];
    }
    let t25;
    if ($[67] !== t10 || $[68] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xl space-y-10",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid lg:grid-cols-2 gap-10",
                    children: [
                        t10,
                        t24
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx",
                    lineNumber: 310,
                    columnNumber: 141
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx",
            lineNumber: 310,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[67] = t10;
        $[68] = t24;
        $[69] = t25;
    } else {
        t25 = $[69];
    }
    return t25;
};
_s(RetirementCalculator, "Xf6Z1zy/kpDN3SffAe0SH08+aCA=");
_c = RetirementCalculator;
const __TURBOPACK__default__export__ = RetirementCalculator;
var _c;
__turbopack_context__.k.register(_c, "RetirementCalculator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/Calculators/SubCalculators/EMICalculator.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/CalculatorUtils.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/UI/Utility.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const EMICalculator = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(47);
    if ($[0] !== "bf0661cc0044e4c82999bba7e689644ec9686c84857058107976768d3d8e9ef6") {
        for(let $i = 0; $i < 47; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bf0661cc0044e4c82999bba7e689644ec9686c84857058107976768d3d8e9ef6";
    }
    const [loanAmount, setLoanAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [rate, setRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [years, setYears] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const L = Number(loanAmount);
    const R = Number(rate);
    const Y = Number(years);
    let t0;
    bb0: {
        if (L <= 0 || R <= 0 || Y <= 0) {
            let t1;
            if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
                t1 = {
                    totalInterest: 0,
                    totalPayment: 0,
                    emi: 0
                };
                $[1] = t1;
            } else {
                t1 = $[1];
            }
            t0 = t1;
            break bb0;
        }
        const r = R / 100 / 12;
        const n = Y * 12;
        const emi = L * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
        const totalPayment = emi * n;
        const totalInterest = totalPayment - L;
        let t1;
        if ($[2] !== emi || $[3] !== totalInterest || $[4] !== totalPayment) {
            t1 = {
                totalInterest,
                totalPayment,
                emi
            };
            $[2] = emi;
            $[3] = totalInterest;
            $[4] = totalPayment;
            $[5] = t1;
        } else {
            t1 = $[5];
        }
        t0 = t1;
    }
    const { totalInterest: totalInterest_0, totalPayment: totalPayment_0, emi: emi_0 } = t0;
    let t1;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6",
            children: "EMI Calculator (मासिक किश्त गणना)"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/EMICalculator.jsx",
            lineNumber: 66,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    let t2;
    if ($[7] !== loanAmount) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Loan Amount",
            value: loanAmount,
            setter: setLoanAmount,
            min: 10000,
            max: 5000000,
            unit: "\u20B9",
            placeholder: "1000000",
            accentColor: "text-orange-600 dark:text-orange-400"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/EMICalculator.jsx",
            lineNumber: 73,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = loanAmount;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    let t3;
    if ($[9] !== rate) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Annual Interest Rate",
            value: rate,
            setter: setRate,
            min: 1,
            max: 30,
            unit: "%",
            placeholder: "8.5",
            step: 0.1,
            accentColor: "text-orange-600 dark:text-orange-400"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/EMICalculator.jsx",
            lineNumber: 81,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = rate;
        $[10] = t3;
    } else {
        t3 = $[10];
    }
    let t4;
    if ($[11] !== years) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Loan Tenure",
            value: years,
            setter: setYears,
            min: 1,
            max: 30,
            unit: "Yrs",
            placeholder: "20",
            accentColor: "text-orange-600 dark:text-orange-400"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/EMICalculator.jsx",
            lineNumber: 89,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = years;
        $[12] = t4;
    } else {
        t4 = $[12];
    }
    let t5;
    if ($[13] !== t2 || $[14] !== t3 || $[15] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-2 space-y-6",
            children: [
                t2,
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/EMICalculator.jsx",
            lineNumber: 97,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = t2;
        $[14] = t3;
        $[15] = t4;
        $[16] = t5;
    } else {
        t5 = $[16];
    }
    let t6;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm font-semibold text-slate-600 dark:text-slate-400",
            children: "Monthly EMI:"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/EMICalculator.jsx",
            lineNumber: 107,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = t6;
    } else {
        t6 = $[17];
    }
    let t7;
    if ($[18] !== emi_0) {
        t7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(emi_0);
        $[18] = emi_0;
        $[19] = t7;
    } else {
        t7 = $[19];
    }
    let t8;
    if ($[20] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3",
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-3xl font-bold text-orange-700 dark:text-orange-400",
                    children: t7
                }, void 0, false, {
                    fileName: "[project]/src/Calculators/SubCalculators/EMICalculator.jsx",
                    lineNumber: 122,
                    columnNumber: 41
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/EMICalculator.jsx",
            lineNumber: 122,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = t7;
        $[21] = t8;
    } else {
        t8 = $[21];
    }
    let t9;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-slate-600 dark:text-slate-400",
            children: "Total Principal:"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/EMICalculator.jsx",
            lineNumber: 130,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[22] = t9;
    } else {
        t9 = $[22];
    }
    let t10;
    if ($[23] !== L) {
        t10 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(L);
        $[23] = L;
        $[24] = t10;
    } else {
        t10 = $[24];
    }
    let t11;
    if ($[25] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between",
            children: [
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-semibold text-slate-900 dark:text-slate-50",
                    children: t10
                }, void 0, false, {
                    fileName: "[project]/src/Calculators/SubCalculators/EMICalculator.jsx",
                    lineNumber: 145,
                    columnNumber: 53
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/EMICalculator.jsx",
            lineNumber: 145,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[25] = t10;
        $[26] = t11;
    } else {
        t11 = $[26];
    }
    let t12;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-slate-600 dark:text-slate-400",
            children: "Total Interest:"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/EMICalculator.jsx",
            lineNumber: 153,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[27] = t12;
    } else {
        t12 = $[27];
    }
    let t13;
    if ($[28] !== totalInterest_0) {
        t13 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(totalInterest_0);
        $[28] = totalInterest_0;
        $[29] = t13;
    } else {
        t13 = $[29];
    }
    let t14;
    if ($[30] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between",
            children: [
                t12,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-semibold text-red-600 dark:text-red-400",
                    children: t13
                }, void 0, false, {
                    fileName: "[project]/src/Calculators/SubCalculators/EMICalculator.jsx",
                    lineNumber: 168,
                    columnNumber: 54
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/EMICalculator.jsx",
            lineNumber: 168,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[30] = t13;
        $[31] = t14;
    } else {
        t14 = $[31];
    }
    let t15;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-slate-900 dark:text-slate-50",
            children: "Total Payment:"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/EMICalculator.jsx",
            lineNumber: 176,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[32] = t15;
    } else {
        t15 = $[32];
    }
    let t16;
    if ($[33] !== totalPayment_0) {
        t16 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(totalPayment_0);
        $[33] = totalPayment_0;
        $[34] = t16;
    } else {
        t16 = $[34];
    }
    let t17;
    if ($[35] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between font-bold",
            children: [
                t15,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-orange-700 dark:text-orange-400",
                    children: t16
                }, void 0, false, {
                    fileName: "[project]/src/Calculators/SubCalculators/EMICalculator.jsx",
                    lineNumber: 191,
                    columnNumber: 64
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/EMICalculator.jsx",
            lineNumber: 191,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[35] = t16;
        $[36] = t17;
    } else {
        t17 = $[36];
    }
    let t18;
    if ($[37] !== t11 || $[38] !== t14 || $[39] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-6 space-y-2 text-sm",
            children: [
                t11,
                t14,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/EMICalculator.jsx",
            lineNumber: 199,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[37] = t11;
        $[38] = t14;
        $[39] = t17;
        $[40] = t18;
    } else {
        t18 = $[40];
    }
    let t19;
    if ($[41] !== t18 || $[42] !== t8) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-1 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between",
            children: [
                t8,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/EMICalculator.jsx",
            lineNumber: 209,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[41] = t18;
        $[42] = t8;
        $[43] = t19;
    } else {
        t19 = $[43];
    }
    let t20;
    if ($[44] !== t19 || $[45] !== t5) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-6 rounded-xl border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-xl",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
                    children: [
                        t5,
                        t19
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/Calculators/SubCalculators/EMICalculator.jsx",
                    lineNumber: 218,
                    columnNumber: 130
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/EMICalculator.jsx",
            lineNumber: 218,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[44] = t19;
        $[45] = t5;
        $[46] = t20;
    } else {
        t20 = $[46];
    }
    return t20;
};
_s(EMICalculator, "vqIEUvY6JLSLGrrGAvSNRl6BOCo=");
_c = EMICalculator;
const __TURBOPACK__default__export__ = EMICalculator;
var _c;
__turbopack_context__.k.register(_c, "EMICalculator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/Calculators/SubCalculators/EPFCalculator.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/CalculatorUtils.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/UI/Utility.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const EPFCalculator = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(50);
    if ($[0] !== "6391acd9dac91c3c19ea303ea41f64c6204b83dda1e78113c2f28f201286ee24") {
        for(let $i = 0; $i < 50; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6391acd9dac91c3c19ea303ea41f64c6204b83dda1e78113c2f28f201286ee24";
    }
    const [salary, setSalary] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [employeeContribution, setEmployeeContribution] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(12);
    const [employerContribution, setEmployerContribution] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(12);
    const [rate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(8.1);
    const [years, setYears] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const S = Number(salary);
    const R = Number(rate);
    const Y = Number(years);
    const EC = Number(employeeContribution) / 100;
    const TC = Number(employerContribution) / 100;
    let t0;
    bb0: {
        if (S <= 0 || R <= 0 || Y <= 0) {
            let t1;
            if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
                t1 = {
                    totalInvested: 0,
                    totalInterest: 0,
                    maturityValue: 0
                };
                $[1] = t1;
            } else {
                t1 = $[1];
            }
            t0 = t1;
            break bb0;
        }
        const monthlyContribution = S * (EC + TC);
        const r_monthly = R / 100 / 12;
        const n_months = Y * 12;
        const maturityValue = monthlyContribution * ((Math.pow(1 + r_monthly, n_months) - 1) / r_monthly * (1 + r_monthly));
        const totalInvested = monthlyContribution * n_months;
        const totalInterest = maturityValue - totalInvested;
        let t1;
        if ($[2] !== maturityValue || $[3] !== totalInterest || $[4] !== totalInvested) {
            t1 = {
                totalInvested,
                totalInterest,
                maturityValue
            };
            $[2] = maturityValue;
            $[3] = totalInterest;
            $[4] = totalInvested;
            $[5] = t1;
        } else {
            t1 = $[5];
        }
        t0 = t1;
    }
    const { totalInvested: totalInvested_0, totalInterest: totalInterest_0, maturityValue: maturityValue_0 } = t0;
    let t1;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/EPFCalculator.jsx",
            lineNumber: 71,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    let t2;
    if ($[7] !== salary) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Current Basic Monthly Salary",
            value: salary,
            setter: setSalary,
            min: 10000,
            max: 100000,
            unit: "\u20B9",
            placeholder: "50000",
            accentColor: "text-indigo-600 dark:text-indigo-400"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/EPFCalculator.jsx",
            lineNumber: 78,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = salary;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    let t3;
    if ($[9] !== employeeContribution) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Employee Contribution",
            value: employeeContribution,
            setter: setEmployeeContribution,
            min: 1,
            max: 12,
            unit: "%",
            placeholder: "12",
            accentColor: "text-indigo-600 dark:text-indigo-400"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/EPFCalculator.jsx",
            lineNumber: 86,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = employeeContribution;
        $[10] = t3;
    } else {
        t3 = $[10];
    }
    let t4;
    if ($[11] !== employerContribution) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Employer Contribution",
            value: employerContribution,
            setter: setEmployerContribution,
            min: 1,
            max: 12,
            unit: "%",
            placeholder: "12",
            accentColor: "text-indigo-600 dark:text-indigo-400"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/EPFCalculator.jsx",
            lineNumber: 94,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = employerContribution;
        $[12] = t4;
    } else {
        t4 = $[12];
    }
    let t5;
    if ($[13] !== years) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Years Remaining for Service",
            value: years,
            setter: setYears,
            min: 1,
            max: 40,
            unit: "Yrs",
            placeholder: "20",
            accentColor: "text-indigo-600 dark:text-indigo-400"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/EPFCalculator.jsx",
            lineNumber: 102,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = years;
        $[14] = t5;
    } else {
        t5 = $[14];
    }
    let t6;
    if ($[15] !== t2 || $[16] !== t3 || $[17] !== t4 || $[18] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-2 space-y-6",
            children: [
                t2,
                t3,
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/EPFCalculator.jsx",
            lineNumber: 110,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = t2;
        $[16] = t3;
        $[17] = t4;
        $[18] = t5;
        $[19] = t6;
    } else {
        t6 = $[19];
    }
    let t7;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm font-semibold text-slate-600 dark:text-slate-400",
            children: "Total Contribution (Monthly):"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/EPFCalculator.jsx",
            lineNumber: 121,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = t7;
    } else {
        t7 = $[20];
    }
    const t8 = S * (EC + TC);
    let t9;
    if ($[21] !== t8) {
        t9 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(t8);
        $[21] = t8;
        $[22] = t9;
    } else {
        t9 = $[22];
    }
    let t10;
    if ($[23] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3",
            children: [
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-2xl font-bold text-indigo-700 dark:text-indigo-400",
                    children: t9
                }, void 0, false, {
                    fileName: "[project]/src/Calculators/SubCalculators/EPFCalculator.jsx",
                    lineNumber: 137,
                    columnNumber: 42
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/EPFCalculator.jsx",
            lineNumber: 137,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[23] = t9;
        $[24] = t10;
    } else {
        t10 = $[24];
    }
    let t11;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-slate-600 dark:text-slate-400",
            children: "Total Invested:"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/EPFCalculator.jsx",
            lineNumber: 145,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[25] = t11;
    } else {
        t11 = $[25];
    }
    let t12;
    if ($[26] !== totalInvested_0) {
        t12 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(totalInvested_0);
        $[26] = totalInvested_0;
        $[27] = t12;
    } else {
        t12 = $[27];
    }
    let t13;
    if ($[28] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between",
            children: [
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-semibold text-slate-900 dark:text-slate-50",
                    children: t12
                }, void 0, false, {
                    fileName: "[project]/src/Calculators/SubCalculators/EPFCalculator.jsx",
                    lineNumber: 160,
                    columnNumber: 54
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/EPFCalculator.jsx",
            lineNumber: 160,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[28] = t12;
        $[29] = t13;
    } else {
        t13 = $[29];
    }
    let t14;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-slate-600 dark:text-slate-400",
            children: "Total Interest:"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/EPFCalculator.jsx",
            lineNumber: 168,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[30] = t14;
    } else {
        t14 = $[30];
    }
    let t15;
    if ($[31] !== totalInterest_0) {
        t15 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(totalInterest_0);
        $[31] = totalInterest_0;
        $[32] = t15;
    } else {
        t15 = $[32];
    }
    let t16;
    if ($[33] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between",
            children: [
                t14,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-semibold text-emerald-600 dark:text-emerald-400",
                    children: t15
                }, void 0, false, {
                    fileName: "[project]/src/Calculators/SubCalculators/EPFCalculator.jsx",
                    lineNumber: 183,
                    columnNumber: 54
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/EPFCalculator.jsx",
            lineNumber: 183,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[33] = t15;
        $[34] = t16;
    } else {
        t16 = $[34];
    }
    let t17;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-slate-900 dark:text-slate-50",
            children: "Maturity Value:"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/EPFCalculator.jsx",
            lineNumber: 191,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[35] = t17;
    } else {
        t17 = $[35];
    }
    let t18;
    if ($[36] !== maturityValue_0) {
        t18 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(maturityValue_0);
        $[36] = maturityValue_0;
        $[37] = t18;
    } else {
        t18 = $[37];
    }
    let t19;
    if ($[38] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between font-bold",
            children: [
                t17,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-indigo-700 dark:text-indigo-300 text-lg",
                    children: t18
                }, void 0, false, {
                    fileName: "[project]/src/Calculators/SubCalculators/EPFCalculator.jsx",
                    lineNumber: 206,
                    columnNumber: 64
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/EPFCalculator.jsx",
            lineNumber: 206,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[38] = t18;
        $[39] = t19;
    } else {
        t19 = $[39];
    }
    let t20;
    if ($[40] !== t13 || $[41] !== t16 || $[42] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-6 space-y-2 text-sm",
            children: [
                t13,
                t16,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/EPFCalculator.jsx",
            lineNumber: 214,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[40] = t13;
        $[41] = t16;
        $[42] = t19;
        $[43] = t20;
    } else {
        t20 = $[43];
    }
    let t21;
    if ($[44] !== t10 || $[45] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-1 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between",
            children: [
                t10,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/EPFCalculator.jsx",
            lineNumber: 224,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[44] = t10;
        $[45] = t20;
        $[46] = t21;
    } else {
        t21 = $[46];
    }
    let t22;
    if ($[47] !== t21 || $[48] !== t6) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-6 rounded-xl border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-xl",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
                    children: [
                        t6,
                        t21
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/Calculators/SubCalculators/EPFCalculator.jsx",
                    lineNumber: 233,
                    columnNumber: 130
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/EPFCalculator.jsx",
            lineNumber: 233,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[47] = t21;
        $[48] = t6;
        $[49] = t22;
    } else {
        t22 = $[49];
    }
    return t22;
};
_s(EPFCalculator, "yrkNXdT2CpAA71ZgoTl9U9ylNyU=");
_c = EPFCalculator;
const __TURBOPACK__default__export__ = EPFCalculator;
var _c;
__turbopack_context__.k.register(_c, "EPFCalculator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/Calculators/SubCalculators/FDCalculator.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/CalculatorUtils.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/UI/Utility.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const FDCalculator = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(32);
    if ($[0] !== "8f1117e8f3e71cd6411d9b42b7059e00d5a3d1c27bca88cd4baf7af59611be2f") {
        for(let $i = 0; $i < 32; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8f1117e8f3e71cd6411d9b42b7059e00d5a3d1c27bca88cd4baf7af59611be2f";
    }
    const [initialInvestment, setInitialInvestment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [rate, setRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [years, setYears] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const P = Number(initialInvestment);
    const R = Number(rate);
    const Y = Number(years);
    let t0;
    bb0: {
        if (P <= 0 || R <= 0 || Y <= 0) {
            let t1;
            if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
                t1 = {
                    totalInterest: 0,
                    maturityValue: 0
                };
                $[1] = t1;
            } else {
                t1 = $[1];
            }
            t0 = t1;
            break bb0;
        }
        const r = R / 100 / 4;
        const n = Y * 4;
        const maturityValue = P * Math.pow(1 + r, n);
        const totalInterest = maturityValue - P;
        let t1;
        if ($[2] !== maturityValue || $[3] !== totalInterest) {
            t1 = {
                totalInterest,
                maturityValue
            };
            $[2] = maturityValue;
            $[3] = totalInterest;
            $[4] = t1;
        } else {
            t1 = $[4];
        }
        t0 = t1;
    }
    const { totalInterest: totalInterest_0, maturityValue: maturityValue_0 } = t0;
    let t1;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6",
            children: "FD Calculator (साधारण फिक्स्ड डिपॉजिट)"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/FDCalculator.jsx",
            lineNumber: 61,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== initialInvestment) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Initial Investment (Principal)",
            value: initialInvestment,
            setter: setInitialInvestment,
            min: 1000,
            max: 1000000,
            unit: "\u20B9",
            placeholder: "500000",
            accentColor: "text-yellow-600 dark:text-yellow-400"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/FDCalculator.jsx",
            lineNumber: 68,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = initialInvestment;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    let t3;
    if ($[8] !== rate) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Annual Interest Rate",
            value: rate,
            setter: setRate,
            min: 1,
            max: 15,
            unit: "%",
            step: 0.1,
            placeholder: "7.5",
            accentColor: "text-yellow-600 dark:text-yellow-400"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/FDCalculator.jsx",
            lineNumber: 76,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = rate;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    let t4;
    if ($[10] !== years) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Time Period",
            value: years,
            setter: setYears,
            min: 1,
            max: 20,
            unit: "Yrs",
            placeholder: "5",
            accentColor: "text-yellow-600 dark:text-yellow-400"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/FDCalculator.jsx",
            lineNumber: 84,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = years;
        $[11] = t4;
    } else {
        t4 = $[11];
    }
    let t5;
    if ($[12] !== t2 || $[13] !== t3 || $[14] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-2 space-y-6",
            children: [
                t2,
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/FDCalculator.jsx",
            lineNumber: 92,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = t2;
        $[13] = t3;
        $[14] = t4;
        $[15] = t5;
    } else {
        t5 = $[15];
    }
    let t6;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm font-semibold text-slate-600 dark:text-slate-400",
            children: "Maturity Value:"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/FDCalculator.jsx",
            lineNumber: 102,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = t6;
    } else {
        t6 = $[16];
    }
    let t7;
    if ($[17] !== maturityValue_0) {
        t7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(maturityValue_0);
        $[17] = maturityValue_0;
        $[18] = t7;
    } else {
        t7 = $[18];
    }
    let t8;
    if ($[19] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-3xl font-bold mt-1 text-yellow-700 dark:text-yellow-300",
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/FDCalculator.jsx",
            lineNumber: 117,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = t7;
        $[20] = t8;
    } else {
        t8 = $[20];
    }
    let t9;
    if ($[21] !== totalInterest_0) {
        t9 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(totalInterest_0);
        $[21] = totalInterest_0;
        $[22] = t9;
    } else {
        t9 = $[22];
    }
    let t10;
    if ($[23] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-4 text-sm text-slate-600 dark:text-slate-400",
            children: [
                "Total Interest Earned: ",
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/FDCalculator.jsx",
            lineNumber: 133,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[23] = t9;
        $[24] = t10;
    } else {
        t10 = $[24];
    }
    let t11;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-slate-500 mt-2",
            children: "Assumes quarterly compounding."
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/FDCalculator.jsx",
            lineNumber: 141,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[25] = t11;
    } else {
        t11 = $[25];
    }
    let t12;
    if ($[26] !== t10 || $[27] !== t8) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-1 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-center",
            children: [
                t6,
                t8,
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/FDCalculator.jsx",
            lineNumber: 148,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[26] = t10;
        $[27] = t8;
        $[28] = t12;
    } else {
        t12 = $[28];
    }
    let t13;
    if ($[29] !== t12 || $[30] !== t5) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-6 rounded-xl border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-xl",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
                    children: [
                        t5,
                        t12
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/Calculators/SubCalculators/FDCalculator.jsx",
                    lineNumber: 157,
                    columnNumber: 130
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/FDCalculator.jsx",
            lineNumber: 157,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[29] = t12;
        $[30] = t5;
        $[31] = t13;
    } else {
        t13 = $[31];
    }
    return t13;
};
_s(FDCalculator, "TgE6PHp/klexwVTqpy5Sqii1EnU=");
_c = FDCalculator;
const __TURBOPACK__default__export__ = FDCalculator;
var _c;
__turbopack_context__.k.register(_c, "FDCalculator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/Calculators/SubCalculators/TaxFDCalculator.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/CalculatorUtils.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/UI/Utility.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const TaxFDCalculator = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(32);
    if ($[0] !== "e5f07dd77d7a654803ab9e781d9cda4ff5316ff8555eb35843b9c4685dc4da25") {
        for(let $i = 0; $i < 32; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e5f07dd77d7a654803ab9e781d9cda4ff5316ff8555eb35843b9c4685dc4da25";
    }
    const [initialInvestment, setInitialInvestment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [rate, setRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [tenure] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(5);
    const P = Number(initialInvestment);
    const R = Number(rate);
    let t0;
    bb0: {
        if (P <= 0 || R <= 0) {
            let t1;
            if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
                t1 = {
                    totalInterest: 0,
                    maturityValue: 0
                };
                $[1] = t1;
            } else {
                t1 = $[1];
            }
            t0 = t1;
            break bb0;
        }
        const r = R / 100 / 4;
        const n = tenure * 4;
        const maturityValue = P * Math.pow(1 + r, n);
        const totalInterest = maturityValue - P;
        let t1;
        if ($[2] !== maturityValue || $[3] !== totalInterest) {
            t1 = {
                totalInterest,
                maturityValue
            };
            $[2] = maturityValue;
            $[3] = totalInterest;
            $[4] = t1;
        } else {
            t1 = $[4];
        }
        t0 = t1;
    }
    const { totalInterest: totalInterest_0, maturityValue: maturityValue_0 } = t0;
    let t1;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6",
            children: "Tax Saving FD Calculator (टैक्स सेविंग FD)"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/TaxFDCalculator.jsx",
            lineNumber: 60,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== initialInvestment) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Initial Investment",
            value: initialInvestment,
            setter: setInitialInvestment,
            min: 1000,
            max: 150000,
            unit: "\u20B9",
            placeholder: "150000",
            accentColor: "text-yellow-600 dark:text-yellow-400"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/TaxFDCalculator.jsx",
            lineNumber: 67,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = initialInvestment;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    let t3;
    if ($[8] !== rate) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Annual Interest Rate",
            value: rate,
            setter: setRate,
            min: 1,
            max: 15,
            unit: "%",
            step: 0.1,
            placeholder: "7.5",
            accentColor: "text-yellow-600 dark:text-yellow-400"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/TaxFDCalculator.jsx",
            lineNumber: 75,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = rate;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    let t4;
    if ($[10] !== tenure) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Tenure (Fixed)",
            value: tenure,
            setter: _temp,
            min: 5,
            max: 5,
            unit: "Yrs",
            placeholder: "5",
            accentColor: "text-yellow-600 dark:text-yellow-400"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/TaxFDCalculator.jsx",
            lineNumber: 83,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = tenure;
        $[11] = t4;
    } else {
        t4 = $[11];
    }
    let t5;
    if ($[12] !== t2 || $[13] !== t3 || $[14] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-2 space-y-6",
            children: [
                t2,
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/TaxFDCalculator.jsx",
            lineNumber: 91,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = t2;
        $[13] = t3;
        $[14] = t4;
        $[15] = t5;
    } else {
        t5 = $[15];
    }
    let t6;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm font-semibold text-slate-600 dark:text-slate-400",
            children: "Total Maturity Value:"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/TaxFDCalculator.jsx",
            lineNumber: 101,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = t6;
    } else {
        t6 = $[16];
    }
    let t7;
    if ($[17] !== maturityValue_0) {
        t7 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(maturityValue_0);
        $[17] = maturityValue_0;
        $[18] = t7;
    } else {
        t7 = $[18];
    }
    let t8;
    if ($[19] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-3xl font-bold mt-1 text-yellow-700 dark:text-yellow-300",
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/TaxFDCalculator.jsx",
            lineNumber: 116,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = t7;
        $[20] = t8;
    } else {
        t8 = $[20];
    }
    let t9;
    if ($[21] !== totalInterest_0) {
        t9 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(totalInterest_0);
        $[21] = totalInterest_0;
        $[22] = t9;
    } else {
        t9 = $[22];
    }
    let t10;
    if ($[23] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-4 text-sm text-slate-600 dark:text-slate-400",
            children: [
                "Total Interest Earned: ",
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/TaxFDCalculator.jsx",
            lineNumber: 132,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[23] = t9;
        $[24] = t10;
    } else {
        t10 = $[24];
    }
    let t11;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-slate-500 mt-2",
            children: "Tax deduction under Section 80C applies only to investment up to ₹1.5 Lakh."
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/TaxFDCalculator.jsx",
            lineNumber: 140,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[25] = t11;
    } else {
        t11 = $[25];
    }
    let t12;
    if ($[26] !== t10 || $[27] !== t8) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-1 p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-center",
            children: [
                t6,
                t8,
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/TaxFDCalculator.jsx",
            lineNumber: 147,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[26] = t10;
        $[27] = t8;
        $[28] = t12;
    } else {
        t12 = $[28];
    }
    let t13;
    if ($[29] !== t12 || $[30] !== t5) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-6 rounded-xl border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-xl",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
                    children: [
                        t5,
                        t12
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/Calculators/SubCalculators/TaxFDCalculator.jsx",
                    lineNumber: 156,
                    columnNumber: 130
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/TaxFDCalculator.jsx",
            lineNumber: 156,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[29] = t12;
        $[30] = t5;
        $[31] = t13;
    } else {
        t13 = $[31];
    }
    return t13;
};
_s(TaxFDCalculator, "v68ouzi1CZ9HtQ8IIsKc4EUkJas=");
_c = TaxFDCalculator;
const __TURBOPACK__default__export__ = TaxFDCalculator;
function _temp() {}
var _c;
__turbopack_context__.k.register(_c, "TaxFDCalculator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/Calculators/SubCalculators/ReverseSIPCalculator.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/CalculatorUtils.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/UI/Utility.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const ReverseSIPCalculator = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(21);
    if ($[0] !== "b466c74f9407474eadade8d14ea76186afec1e9a971ccc23b29d880ccfabca17") {
        for(let $i = 0; $i < 21; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b466c74f9407474eadade8d14ea76186afec1e9a971ccc23b29d880ccfabca17";
    }
    const [corpus, setCorpus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [rate, setRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [monthlyWithdrawal, setMonthlyWithdrawal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const C = Number(corpus);
    const R = Number(rate);
    const W = Number(monthlyWithdrawal);
    let t0;
    bb0: {
        if (C <= 0 || R <= 0 || W <= 0) {
            t0 = 0;
            break bb0;
        }
        const r = R / 100 / 12;
        const term1 = C * r;
        const term2 = 1 - term1 / W;
        if (term2 <= 0) {
            t0 = 999;
            break bb0;
        }
        const n_months = Math.log(term2) / Math.log(1 / (1 + r));
        const n_years = n_months / 12;
        t0 = n_years;
    }
    const years = t0;
    const formatYear = _temp;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6",
            children: "Reverse SIP / SWP Planner (मासिक निकासी योजना)"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/ReverseSIPCalculator.jsx",
            lineNumber: 42,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== corpus) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Current Corpus",
            value: corpus,
            setter: setCorpus,
            min: 100000,
            max: 50000000,
            unit: "\u20B9",
            placeholder: "10000000",
            accentColor: "text-red-600 dark:text-red-400"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/ReverseSIPCalculator.jsx",
            lineNumber: 49,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = corpus;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== rate) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Expected Annual Return",
            value: rate,
            setter: setRate,
            min: 1,
            max: 30,
            unit: "%",
            placeholder: "10",
            accentColor: "text-red-600 dark:text-red-400"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/ReverseSIPCalculator.jsx",
            lineNumber: 57,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = rate;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== monthlyWithdrawal) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Monthly Withdrawal Amount",
            value: monthlyWithdrawal,
            setter: setMonthlyWithdrawal,
            min: 1000,
            max: 100000,
            unit: "\u20B9",
            placeholder: "50000",
            accentColor: "text-red-600 dark:text-red-400"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/ReverseSIPCalculator.jsx",
            lineNumber: 65,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = monthlyWithdrawal;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== t2 || $[9] !== t3 || $[10] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                t2,
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/ReverseSIPCalculator.jsx",
            lineNumber: 73,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t2;
        $[9] = t3;
        $[10] = t4;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm font-semibold text-slate-600 dark:text-slate-400",
            children: "Corpus will last for:"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/ReverseSIPCalculator.jsx",
            lineNumber: 83,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    const t7 = formatYear(years);
    let t8;
    if ($[13] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-4xl font-bold mt-1 text-red-700 dark:text-red-300",
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/ReverseSIPCalculator.jsx",
            lineNumber: 91,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = t7;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    let t9;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-4 text-xs text-slate-500",
            children: "This assumes consistent withdrawal without inflation adjustment."
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/ReverseSIPCalculator.jsx",
            lineNumber: 99,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    let t10;
    if ($[16] !== t8) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-center text-center",
            children: [
                t6,
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/ReverseSIPCalculator.jsx",
            lineNumber: 106,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = t8;
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    let t11;
    if ($[18] !== t10 || $[19] !== t5) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-6 rounded-xl border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-xl",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                    children: [
                        t5,
                        t10
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/Calculators/SubCalculators/ReverseSIPCalculator.jsx",
                    lineNumber: 114,
                    columnNumber: 130
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/ReverseSIPCalculator.jsx",
            lineNumber: 114,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = t10;
        $[19] = t5;
        $[20] = t11;
    } else {
        t11 = $[20];
    }
    return t11;
};
_s(ReverseSIPCalculator, "L6fYk4Ru6sEYb7yDzI/Se/76lqc=");
_c = ReverseSIPCalculator;
const __TURBOPACK__default__export__ = ReverseSIPCalculator;
function _temp(value) {
    if (value === 0) {
        return "0 Years";
    }
    if (value > 900) {
        return "Infinite/99+ Years";
    }
    return `${value.toFixed(1)} Years`;
}
var _c;
__turbopack_context__.k.register(_c, "ReverseSIPCalculator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/Calculators/SubCalculators/CAGRCalculator.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/CalculatorUtils.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/UI/Utility.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const CAGRCalculator = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(23);
    if ($[0] !== "28c076821d117e77f5baceb890ea45791f75e43670162e539359eb0e8cefbacb") {
        for(let $i = 0; $i < 23; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "28c076821d117e77f5baceb890ea45791f75e43670162e539359eb0e8cefbacb";
    }
    const [startValue, setStartValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [endValue, setEndValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [years, setYears] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const S = Number(startValue);
    const E = Number(endValue);
    const Y = Number(years);
    let t0;
    bb0: {
        if (S <= 0 || E <= 0 || Y <= 0) {
            t0 = 0;
            break bb0;
        }
        const result = (Math.pow(E / S, 1 / Y) - 1) * 100;
        t0 = result;
    }
    const cagr = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6",
            children: "CAGR Calculator (चक्रवृद्धि वार्षिक वृद्धि दर)"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/CAGRCalculator.jsx",
            lineNumber: 33,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== startValue) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Starting Investment Value",
            value: startValue,
            setter: setStartValue,
            min: 1,
            max: 1000000,
            unit: "\u20B9",
            placeholder: "100000",
            accentColor: "text-teal-600 dark:text-teal-400"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/CAGRCalculator.jsx",
            lineNumber: 40,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = startValue;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== endValue) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Ending Investment Value",
            value: endValue,
            setter: setEndValue,
            min: 1,
            max: 2000000,
            unit: "\u20B9",
            placeholder: "180000",
            accentColor: "text-teal-600 dark:text-teal-400"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/CAGRCalculator.jsx",
            lineNumber: 48,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = endValue;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== years) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Time Period",
            value: years,
            setter: setYears,
            min: 1,
            max: 50,
            unit: "Yrs",
            placeholder: "5",
            accentColor: "text-teal-600 dark:text-teal-400"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/CAGRCalculator.jsx",
            lineNumber: 56,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = years;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== t2 || $[9] !== t3 || $[10] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                t2,
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/CAGRCalculator.jsx",
            lineNumber: 64,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t2;
        $[9] = t3;
        $[10] = t4;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    let t6;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm font-semibold text-slate-600 dark:text-slate-400",
            children: "Calculated CAGR:"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/CAGRCalculator.jsx",
            lineNumber: 74,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] !== cagr) {
        t7 = cagr.toFixed(2);
        $[13] = cagr;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-4xl font-bold mt-1 text-teal-700 dark:text-teal-300",
            children: [
                t7,
                " %"
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/CAGRCalculator.jsx",
            lineNumber: 89,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = t7;
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    let t9;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-4 text-xs text-slate-500",
            children: "Average Annual Growth Rate"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/CAGRCalculator.jsx",
            lineNumber: 97,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    let t10;
    if ($[18] !== t8) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-center text-center",
            children: [
                t6,
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/CAGRCalculator.jsx",
            lineNumber: 104,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = t8;
        $[19] = t10;
    } else {
        t10 = $[19];
    }
    let t11;
    if ($[20] !== t10 || $[21] !== t5) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-6 rounded-xl border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-xl",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                    children: [
                        t5,
                        t10
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/Calculators/SubCalculators/CAGRCalculator.jsx",
                    lineNumber: 112,
                    columnNumber: 130
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/CAGRCalculator.jsx",
            lineNumber: 112,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = t10;
        $[21] = t5;
        $[22] = t11;
    } else {
        t11 = $[22];
    }
    return t11;
};
_s(CAGRCalculator, "JxOgKZMV6pGkx8/UP2iHFwwXPlo=");
_c = CAGRCalculator;
const __TURBOPACK__default__export__ = CAGRCalculator;
var _c;
__turbopack_context__.k.register(_c, "CAGRCalculator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/Calculators/SubCalculators/GoldInvestmentCalculator.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/CalculatorUtils.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/UI/Utility.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const GoldInvestmentCalculator = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(47);
    if ($[0] !== "f8d7fef6e738b5a7aa6eb1ce6fa9bcfd845536a7d2bf0687de511094056b1edb") {
        for(let $i = 0; $i < 47; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f8d7fef6e738b5a7aa6eb1ce6fa9bcfd845536a7d2bf0687de511094056b1edb";
    }
    const [currentValue, setCurrentValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [rate, setRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [years, setYears] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const P = Number(currentValue);
    const R = Number(rate);
    const Y = Number(years);
    let t0;
    bb0: {
        if (P <= 0 || R <= 0 || Y <= 0) {
            let t1;
            if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
                t1 = {
                    futureValue: 0,
                    totalGain: 0
                };
                $[1] = t1;
            } else {
                t1 = $[1];
            }
            t0 = t1;
            break bb0;
        }
        const r = R / 100;
        const n = Y;
        const futureValue = P * Math.pow(1 + r, n);
        const totalGain = futureValue - P;
        let t1;
        if ($[2] !== futureValue || $[3] !== totalGain) {
            t1 = {
                futureValue,
                totalGain
            };
            $[2] = futureValue;
            $[3] = totalGain;
            $[4] = t1;
        } else {
            t1 = $[4];
        }
        t0 = t1;
    }
    const { futureValue: futureValue_0, totalGain: totalGain_0 } = t0;
    let t1;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6",
            children: "Gold Futures Value (सोने का भविष्य मूल्य)"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/GoldInvestmentCalculator.jsx",
            lineNumber: 61,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t1;
    } else {
        t1 = $[5];
    }
    let t2;
    if ($[6] !== currentValue) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Current Investment Value",
            value: currentValue,
            setter: setCurrentValue,
            min: 1000,
            max: 10000000,
            unit: "\u20B9",
            placeholder: "500000",
            accentColor: "text-amber-600 dark:text-amber-400",
            step: 1000
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/GoldInvestmentCalculator.jsx",
            lineNumber: 68,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = currentValue;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    let t3;
    if ($[8] !== rate) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Expected Annual Growth (CAGR)",
            value: rate,
            setter: setRate,
            min: 1,
            max: 20,
            unit: "%",
            step: 0.1,
            placeholder: "8.5",
            accentColor: "text-amber-600 dark:text-amber-400"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/GoldInvestmentCalculator.jsx",
            lineNumber: 76,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = rate;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    let t4;
    if ($[10] !== years) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Time Horizon",
            value: years,
            setter: setYears,
            min: 1,
            max: 30,
            unit: "Yrs",
            placeholder: "10",
            accentColor: "text-amber-600 dark:text-amber-400"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/GoldInvestmentCalculator.jsx",
            lineNumber: 84,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = years;
        $[11] = t4;
    } else {
        t4 = $[11];
    }
    let t5;
    if ($[12] !== t2 || $[13] !== t3 || $[14] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                t2,
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/GoldInvestmentCalculator.jsx",
            lineNumber: 92,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = t2;
        $[13] = t3;
        $[14] = t4;
        $[15] = t5;
    } else {
        t5 = $[15];
    }
    const t6 = totalGain_0 > 0 ? totalGain_0 : 0;
    let t7;
    if ($[16] !== P || $[17] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center mb-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoughnutChart"], {
                invested: P,
                returns: t6,
                investedColor: "#F59E0B",
                returnsColor: "#10B981"
            }, void 0, false, {
                fileName: "[project]/src/Calculators/SubCalculators/GoldInvestmentCalculator.jsx",
                lineNumber: 103,
                columnNumber: 52
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/GoldInvestmentCalculator.jsx",
            lineNumber: 103,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = P;
        $[17] = t6;
        $[18] = t7;
    } else {
        t7 = $[18];
    }
    let t8;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-slate-600 dark:text-slate-400",
            children: "Total Initial Investment:"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/GoldInvestmentCalculator.jsx",
            lineNumber: 112,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = t8;
    } else {
        t8 = $[19];
    }
    let t9;
    if ($[20] !== P) {
        t9 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(P);
        $[20] = P;
        $[21] = t9;
    } else {
        t9 = $[21];
    }
    let t10;
    if ($[22] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between text-sm",
            children: [
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-semibold text-slate-900 dark:text-slate-50",
                    children: t9
                }, void 0, false, {
                    fileName: "[project]/src/Calculators/SubCalculators/GoldInvestmentCalculator.jsx",
                    lineNumber: 127,
                    columnNumber: 61
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/GoldInvestmentCalculator.jsx",
            lineNumber: 127,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[22] = t9;
        $[23] = t10;
    } else {
        t10 = $[23];
    }
    let t11;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-slate-600 dark:text-slate-400",
            children: "Total Estimated Gain:"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/GoldInvestmentCalculator.jsx",
            lineNumber: 135,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[24] = t11;
    } else {
        t11 = $[24];
    }
    let t12;
    if ($[25] !== totalGain_0) {
        t12 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(totalGain_0);
        $[25] = totalGain_0;
        $[26] = t12;
    } else {
        t12 = $[26];
    }
    let t13;
    if ($[27] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between text-sm",
            children: [
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-semibold text-emerald-600 dark:text-emerald-400",
                    children: t12
                }, void 0, false, {
                    fileName: "[project]/src/Calculators/SubCalculators/GoldInvestmentCalculator.jsx",
                    lineNumber: 150,
                    columnNumber: 62
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/GoldInvestmentCalculator.jsx",
            lineNumber: 150,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[27] = t12;
        $[28] = t13;
    } else {
        t13 = $[28];
    }
    let t14;
    if ($[29] !== t10 || $[30] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800",
            children: [
                t10,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/GoldInvestmentCalculator.jsx",
            lineNumber: 158,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[29] = t10;
        $[30] = t13;
        $[31] = t14;
    } else {
        t14 = $[31];
    }
    let t15;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm font-semibold text-slate-600 dark:text-slate-400",
            children: "Estimated Future Value:"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/GoldInvestmentCalculator.jsx",
            lineNumber: 167,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[32] = t15;
    } else {
        t15 = $[32];
    }
    let t16;
    if ($[33] !== futureValue_0) {
        t16 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(futureValue_0);
        $[33] = futureValue_0;
        $[34] = t16;
    } else {
        t16 = $[34];
    }
    let t17;
    if ($[35] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-3xl font-bold mt-1 text-amber-700 dark:text-amber-300",
            children: t16
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/GoldInvestmentCalculator.jsx",
            lineNumber: 182,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[35] = t16;
        $[36] = t17;
    } else {
        t17 = $[36];
    }
    let t18;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-2 text-xs text-slate-500",
            children: "This calculation assumes the price of gold appreciates uniformly over the time period."
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/GoldInvestmentCalculator.jsx",
            lineNumber: 190,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[37] = t18;
    } else {
        t18 = $[37];
    }
    let t19;
    if ($[38] !== t17) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-6",
            children: [
                t15,
                t17,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/GoldInvestmentCalculator.jsx",
            lineNumber: 197,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[38] = t17;
        $[39] = t19;
    } else {
        t19 = $[39];
    }
    let t20;
    if ($[40] !== t14 || $[41] !== t19 || $[42] !== t7) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between",
            children: [
                t7,
                t14,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/GoldInvestmentCalculator.jsx",
            lineNumber: 205,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[40] = t14;
        $[41] = t19;
        $[42] = t7;
        $[43] = t20;
    } else {
        t20 = $[43];
    }
    let t21;
    if ($[44] !== t20 || $[45] !== t5) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-6 rounded-xl border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-xl",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                    children: [
                        t5,
                        t20
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/Calculators/SubCalculators/GoldInvestmentCalculator.jsx",
                    lineNumber: 215,
                    columnNumber: 130
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/GoldInvestmentCalculator.jsx",
            lineNumber: 215,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[44] = t20;
        $[45] = t5;
        $[46] = t21;
    } else {
        t21 = $[46];
    }
    return t21;
};
_s(GoldInvestmentCalculator, "Mjvt27T4tkVMvQ8TGZPAX2L087Y=");
_c = GoldInvestmentCalculator;
const __TURBOPACK__default__export__ = GoldInvestmentCalculator;
var _c;
__turbopack_context__.k.register(_c, "GoldInvestmentCalculator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/CalculatorUtils.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/UI/Utility.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const GsecBondCalculator = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(58);
    if ($[0] !== "796e845eac6c0c3059e842b98f378f584bde43b5c935eba05144f7d6d97e0d62") {
        for(let $i = 0; $i < 58; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "796e845eac6c0c3059e842b98f378f584bde43b5c935eba05144f7d6d97e0d62";
    }
    const [faceValue, setFaceValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1000);
    const [couponRate, setCouponRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [maturityYears, setMaturityYears] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [purchasePrice, setPurchasePrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1000);
    const [taxBracket, setTaxBracket] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(30);
    const FV = Number(faceValue);
    const CR = Number(couponRate) / 100;
    const Y = Number(maturityYears);
    const PP = Number(purchasePrice);
    const TR = Number(taxBracket) / 100;
    let t0;
    bb0: {
        if (FV <= 0 || CR <= 0 || Y <= 0 || PP <= 0 || TR < 0) {
            let t1;
            if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
                t1 = {
                    totalCoupon: 0,
                    taxOnCoupon: 0,
                    capitalGain: 0,
                    netMaturityValue: 0
                };
                $[1] = t1;
            } else {
                t1 = $[1];
            }
            t0 = t1;
            break bb0;
        }
        const annualCoupon = FV * CR;
        const totalCoupon = annualCoupon * Y;
        const taxOnCoupon = totalCoupon * TR;
        const actualCapitalGain = FV - PP;
        const netCouponIncome = totalCoupon - taxOnCoupon;
        const netMaturityValue = FV + netCouponIncome + actualCapitalGain;
        let t1;
        if ($[2] !== actualCapitalGain || $[3] !== netMaturityValue || $[4] !== taxOnCoupon || $[5] !== totalCoupon) {
            t1 = {
                totalCoupon,
                taxOnCoupon,
                capitalGain: actualCapitalGain,
                netMaturityValue
            };
            $[2] = actualCapitalGain;
            $[3] = netMaturityValue;
            $[4] = taxOnCoupon;
            $[5] = totalCoupon;
            $[6] = t1;
        } else {
            t1 = $[6];
        }
        t0 = t1;
    }
    const { totalCoupon: totalCoupon_0, taxOnCoupon: taxOnCoupon_0, capitalGain, netMaturityValue: netMaturityValue_0 } = t0;
    let t1;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6",
            children: " G - Sec Bond Planner(सरकारी बॉन्ड) "
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx",
            lineNumber: 75,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t1;
    } else {
        t1 = $[7];
    }
    let t2;
    if ($[8] !== faceValue) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Bond Face Value (Per Bond)",
            value: faceValue,
            setter: setFaceValue,
            min: 100,
            max: 5000,
            unit: "\u20B9",
            placeholder: "1000",
            accentColor: "text-blue-600 dark:text-blue-400",
            step: 100
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx",
            lineNumber: 82,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = faceValue;
        $[9] = t2;
    } else {
        t2 = $[9];
    }
    let t3;
    if ($[10] !== couponRate) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Annual Coupon Rate",
            value: couponRate,
            setter: setCouponRate,
            min: 1,
            max: 15,
            unit: "%",
            step: 0.1,
            placeholder: "7.0",
            accentColor: "text-blue-600 dark:text-blue-400"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx",
            lineNumber: 90,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = couponRate;
        $[11] = t3;
    } else {
        t3 = $[11];
    }
    let t4;
    if ($[12] !== maturityYears) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Maturity Period",
            value: maturityYears,
            setter: setMaturityYears,
            min: 1,
            max: 20,
            unit: "Yrs",
            placeholder: "10",
            accentColor: "text-blue-600 dark:text-blue-400"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx",
            lineNumber: 98,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = maturityYears;
        $[13] = t4;
    } else {
        t4 = $[13];
    }
    let t5;
    if ($[14] !== purchasePrice) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Purchase Price (Current Price)",
            value: purchasePrice,
            setter: setPurchasePrice,
            min: 100,
            max: 5000,
            unit: "\u20B9",
            placeholder: "980",
            accentColor: "text-blue-600 dark:text-blue-400",
            step: 1
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx",
            lineNumber: 106,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = purchasePrice;
        $[15] = t5;
    } else {
        t5 = $[15];
    }
    let t6;
    if ($[16] !== taxBracket) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Tax Bracket on Interest",
            value: taxBracket,
            setter: setTaxBracket,
            min: 0,
            max: 40,
            unit: "%",
            placeholder: "30",
            accentColor: "text-red-600 dark:text-red-400",
            step: 1
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx",
            lineNumber: 114,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = taxBracket;
        $[17] = t6;
    } else {
        t6 = $[17];
    }
    let t7;
    if ($[18] !== t2 || $[19] !== t3 || $[20] !== t4 || $[21] !== t5 || $[22] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                t2,
                t3,
                t4,
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx",
            lineNumber: 122,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = t2;
        $[19] = t3;
        $[20] = t4;
        $[21] = t5;
        $[22] = t6;
        $[23] = t7;
    } else {
        t7 = $[23];
    }
    let t8;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-slate-600 dark:text-slate-400",
            children: " Total Coupon Interest(Gross): "
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx",
            lineNumber: 134,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[24] = t8;
    } else {
        t8 = $[24];
    }
    let t9;
    if ($[25] !== totalCoupon_0) {
        t9 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(totalCoupon_0);
        $[25] = totalCoupon_0;
        $[26] = t9;
    } else {
        t9 = $[26];
    }
    let t10;
    if ($[27] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between",
            children: [
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-semibold text-slate-900 dark:text-slate-50",
                    children: [
                        " ",
                        t9,
                        " "
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx",
                    lineNumber: 149,
                    columnNumber: 53
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx",
            lineNumber: 149,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[27] = t9;
        $[28] = t10;
    } else {
        t10 = $[28];
    }
    let t11;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-slate-600 dark:text-slate-400",
            children: " Total Tax on Coupon Income: "
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx",
            lineNumber: 157,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[29] = t11;
    } else {
        t11 = $[29];
    }
    let t12;
    if ($[30] !== taxOnCoupon_0) {
        t12 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(taxOnCoupon_0);
        $[30] = taxOnCoupon_0;
        $[31] = t12;
    } else {
        t12 = $[31];
    }
    let t13;
    if ($[32] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between",
            children: [
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-semibold text-red-600 dark:text-red-400",
                    children: [
                        " ",
                        t12,
                        " "
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx",
                    lineNumber: 172,
                    columnNumber: 54
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx",
            lineNumber: 172,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[32] = t12;
        $[33] = t13;
    } else {
        t13 = $[33];
    }
    let t14;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-slate-600 dark:text-slate-400",
            children: " Capital Gain / Loss: "
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx",
            lineNumber: 180,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[34] = t14;
    } else {
        t14 = $[34];
    }
    const t15 = `font-semibold ${capitalGain >= 0 ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400"}`;
    let t16;
    if ($[35] !== capitalGain) {
        t16 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(capitalGain);
        $[35] = capitalGain;
        $[36] = t16;
    } else {
        t16 = $[36];
    }
    let t17;
    if ($[37] !== t15 || $[38] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between",
            children: [
                t14,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: t15,
                    children: [
                        " ",
                        t16,
                        " "
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx",
                    lineNumber: 196,
                    columnNumber: 54
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx",
            lineNumber: 196,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[37] = t15;
        $[38] = t16;
        $[39] = t17;
    } else {
        t17 = $[39];
    }
    let t18;
    if ($[40] !== t10 || $[41] !== t13 || $[42] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3 text-sm",
            children: [
                t10,
                t13,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx",
            lineNumber: 205,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[40] = t10;
        $[41] = t13;
        $[42] = t17;
        $[43] = t18;
    } else {
        t18 = $[43];
    }
    let t19;
    if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm font-semibold text-slate-600 dark:text-slate-400",
            children: " Estimated Net Maturity Value: "
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx",
            lineNumber: 215,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[44] = t19;
    } else {
        t19 = $[44];
    }
    let t20;
    if ($[45] !== netMaturityValue_0) {
        t20 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(netMaturityValue_0);
        $[45] = netMaturityValue_0;
        $[46] = t20;
    } else {
        t20 = $[46];
    }
    let t21;
    if ($[47] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-3xl font-bold mt-1 text-blue-700 dark:text-blue-300",
            children: t20
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx",
            lineNumber: 230,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[47] = t20;
        $[48] = t21;
    } else {
        t21 = $[48];
    }
    let t22;
    if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-2 text-xs text-slate-500",
            children: "Coupon income is taxed annually.Capital gains calculation is simplified."
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx",
            lineNumber: 238,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[49] = t22;
    } else {
        t22 = $[49];
    }
    let t23;
    if ($[50] !== t21) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-6",
            children: [
                t19,
                t21,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx",
            lineNumber: 245,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[50] = t21;
        $[51] = t23;
    } else {
        t23 = $[51];
    }
    let t24;
    if ($[52] !== t18 || $[53] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col justify-between",
            children: [
                t18,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx",
            lineNumber: 253,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[52] = t18;
        $[53] = t23;
        $[54] = t24;
    } else {
        t24 = $[54];
    }
    let t25;
    if ($[55] !== t24 || $[56] !== t7) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-6 rounded-xl border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-xl",
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
                    children: [
                        t7,
                        t24
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx",
                    lineNumber: 262,
                    columnNumber: 130
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx",
            lineNumber: 262,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[55] = t24;
        $[56] = t7;
        $[57] = t25;
    } else {
        t25 = $[57];
    }
    return t25;
};
_s(GsecBondCalculator, "aBe/X6fJpRPrqCdYpMMu6J8nSP8=");
_c = GsecBondCalculator;
const __TURBOPACK__default__export__ = GsecBondCalculator;
var _c;
__turbopack_context__.k.register(_c, "GsecBondCalculator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/Calculators/SubCalculators/PPFCalculator.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/CalculatorUtils.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/UI/Utility.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const PPFCalculator = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(43);
    if ($[0] !== "10829c760cb455e604b7c79267b07631651189a1e52c7c7216b47e76d9fb40a9") {
        for(let $i = 0; $i < 43; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "10829c760cb455e604b7c79267b07631651189a1e52c7c7216b47e76d9fb40a9";
    }
    const [annualDeposit, setAnnualDeposit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [rate, setRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(7.1);
    const [years, setYears] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(15);
    const P = Number(annualDeposit);
    const R = Number(rate);
    const Y = Number(years);
    let t0;
    bb0: {
        if (P <= 0 || R <= 0 || Y <= 0) {
            let t1;
            if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
                t1 = {
                    totalInvested: 0,
                    totalInterest: 0,
                    maturityValue: 0
                };
                $[1] = t1;
            } else {
                t1 = $[1];
            }
            t0 = t1;
            break bb0;
        }
        const annualInvestment = Math.min(P, 150000);
        const r = R / 100;
        const n = Y;
        const maturityValue = annualInvestment * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
        const totalInvested = annualInvestment * Y;
        const totalInterest = maturityValue - totalInvested;
        let t1;
        if ($[2] !== maturityValue || $[3] !== totalInterest || $[4] !== totalInvested) {
            t1 = {
                totalInvested,
                totalInterest,
                maturityValue
            };
            $[2] = maturityValue;
            $[3] = totalInterest;
            $[4] = totalInvested;
            $[5] = t1;
        } else {
            t1 = $[5];
        }
        t0 = t1;
    }
    const { totalInvested: totalInvested_0, totalInterest: totalInterest_0, maturityValue: maturityValue_0 } = t0;
    let t1;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6",
            children: "PPF Calculator (पीपीएफ योजना)"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/PPFCalculator.jsx",
            lineNumber: 67,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t1;
    } else {
        t1 = $[6];
    }
    let t2;
    if ($[7] !== annualDeposit) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Annual Deposit",
            value: annualDeposit,
            setter: setAnnualDeposit,
            min: 500,
            max: 150000,
            unit: "\u20B9",
            placeholder: "150000",
            accentColor: "text-pink-600 dark:text-pink-400"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/PPFCalculator.jsx",
            lineNumber: 74,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = annualDeposit;
        $[8] = t2;
    } else {
        t2 = $[8];
    }
    let t3;
    if ($[9] !== rate) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Interest Rate (Fixed)",
            value: rate,
            setter: setRate,
            min: 5,
            max: 8,
            unit: "%",
            step: 0.1,
            placeholder: "7.1",
            accentColor: "text-pink-600 dark:text-pink-400"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/PPFCalculator.jsx",
            lineNumber: 82,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = rate;
        $[10] = t3;
    } else {
        t3 = $[10];
    }
    let t4;
    if ($[11] !== years) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Time Period (Fixed)",
            value: years,
            setter: setYears,
            min: 15,
            max: 15,
            unit: "Yrs",
            placeholder: "15",
            accentColor: "text-pink-600 dark:text-pink-400"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/PPFCalculator.jsx",
            lineNumber: 90,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = years;
        $[12] = t4;
    } else {
        t4 = $[12];
    }
    let t5;
    if ($[13] !== t2 || $[14] !== t3 || $[15] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-2 space-y-6",
            children: [
                t2,
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/PPFCalculator.jsx",
            lineNumber: 98,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = t2;
        $[14] = t3;
        $[15] = t4;
        $[16] = t5;
    } else {
        t5 = $[16];
    }
    const t6 = totalInterest_0 > 0 ? totalInterest_0 : 0;
    let t7;
    if ($[17] !== t6 || $[18] !== totalInvested_0) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-1 flex flex-col items-center justify-start pt-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoughnutChart"], {
                invested: totalInvested_0,
                returns: t6,
                investedColor: "#EC4899",
                returnsColor: "#10B981"
            }, void 0, false, {
                fileName: "[project]/src/Calculators/SubCalculators/PPFCalculator.jsx",
                lineNumber: 109,
                columnNumber: 87
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/PPFCalculator.jsx",
            lineNumber: 109,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = t6;
        $[18] = totalInvested_0;
        $[19] = t7;
    } else {
        t7 = $[19];
    }
    let t8;
    if ($[20] !== t5 || $[21] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
            children: [
                t5,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/PPFCalculator.jsx",
            lineNumber: 118,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = t5;
        $[21] = t7;
        $[22] = t8;
    } else {
        t8 = $[22];
    }
    let t9;
    if ($[23] !== maturityValue_0) {
        t9 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(maturityValue_0);
        $[23] = maturityValue_0;
        $[24] = t9;
    } else {
        t9 = $[24];
    }
    let t10;
    if ($[25] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xl font-bold text-pink-700 dark:text-pink-300",
            children: t9
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/PPFCalculator.jsx",
            lineNumber: 135,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[25] = t9;
        $[26] = t10;
    } else {
        t10 = $[26];
    }
    let t11;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-slate-600 dark:text-slate-400",
            children: "Maturity Value (15 Yrs)"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/PPFCalculator.jsx",
            lineNumber: 143,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[27] = t11;
    } else {
        t11 = $[27];
    }
    let t12;
    if ($[28] !== t10) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/PPFCalculator.jsx",
            lineNumber: 150,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[28] = t10;
        $[29] = t12;
    } else {
        t12 = $[29];
    }
    let t13;
    if ($[30] !== totalInvested_0) {
        t13 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(totalInvested_0);
        $[30] = totalInvested_0;
        $[31] = t13;
    } else {
        t13 = $[31];
    }
    let t14;
    if ($[32] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-lg font-semibold text-slate-900 dark:text-slate-50",
            children: t13
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/PPFCalculator.jsx",
            lineNumber: 166,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[32] = t13;
        $[33] = t14;
    } else {
        t14 = $[33];
    }
    let t15;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-slate-600 dark:text-slate-400",
            children: "Total Deposited"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/PPFCalculator.jsx",
            lineNumber: 174,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[34] = t15;
    } else {
        t15 = $[34];
    }
    let t16;
    if ($[35] !== t14) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-right",
            children: [
                t14,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/PPFCalculator.jsx",
            lineNumber: 181,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[35] = t14;
        $[36] = t16;
    } else {
        t16 = $[36];
    }
    let t17;
    if ($[37] !== t12 || $[38] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-8 pt-6 border-t border-slate-200 dark:border-slate-700",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-4",
                children: [
                    t12,
                    t16
                ]
            }, void 0, true, {
                fileName: "[project]/src/Calculators/SubCalculators/PPFCalculator.jsx",
                lineNumber: 189,
                columnNumber: 86
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/PPFCalculator.jsx",
            lineNumber: 189,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[37] = t12;
        $[38] = t16;
        $[39] = t17;
    } else {
        t17 = $[39];
    }
    let t18;
    if ($[40] !== t17 || $[41] !== t8) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white p-6 rounded-xl border border-slate-200 dark:bg-slate-900 dark:border-slate-800 shadow-xl",
            children: [
                t1,
                t8,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/PPFCalculator.jsx",
            lineNumber: 198,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[40] = t17;
        $[41] = t8;
        $[42] = t18;
    } else {
        t18 = $[42];
    }
    return t18;
};
_s(PPFCalculator, "VDYIPq6U6d3K5KjoSJykvG8Azlc=");
_c = PPFCalculator;
const __TURBOPACK__default__export__ = PPFCalculator;
var _c;
__turbopack_context__.k.register(_c, "PPFCalculator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/CalculatorUtils.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/UI/Utility.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const BrokerageCalculator = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(94);
    if ($[0] !== "130b46a398fe10acc469932b1ed5b938b2b769b75fd9b554105c115cdd705050") {
        for(let $i = 0; $i < 94; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "130b46a398fe10acc469932b1ed5b938b2b769b75fd9b554105c115cdd705050";
    }
    const [buyPrice, setBuyPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("1000");
    const [sellPrice, setSellPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("1050");
    const [quantity, setQuantity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("100");
    const [tradeType, setTradeType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("delivery");
    const B = Number(buyPrice) || 0;
    const S = Number(sellPrice) || 0;
    const Q = Number(quantity) || 0;
    const buyValue = B * Q;
    const sellValue = S * Q;
    const turnover = buyValue + sellValue;
    const grossPL = (S - B) * Q;
    let brokerage = 0;
    let stt = 0;
    let stampDuty = 0;
    let exchangeCharges = 0;
    bb0: switch(tradeType){
        case "delivery":
            {
                brokerage = Math.min(20, buyValue * 0.0005) + Math.min(20, sellValue * 0.0005);
                stt = turnover * 0.001;
                stampDuty = buyValue * 0.00015;
                exchangeCharges = turnover * 0.0000345;
                break bb0;
            }
        case "intraday":
            {
                brokerage = Math.min(20, buyValue * 0.0003) + Math.min(20, sellValue * 0.0003);
                stt = sellValue * 0.00025;
                stampDuty = buyValue * 0.00003;
                exchangeCharges = turnover * 0.0000345;
                break bb0;
            }
        case "options":
            {
                brokerage = 40;
                stt = sellValue * 0.000625;
                stampDuty = buyValue * 0.00003;
                exchangeCharges = turnover * 0.00053;
                break bb0;
            }
        case "futures":
            {
                brokerage = Math.min(20, buyValue * 0.0003) + Math.min(20, sellValue * 0.0003);
                stt = sellValue * 0.000125;
                stampDuty = buyValue * 0.00002;
                exchangeCharges = turnover * 0.00002;
                break bb0;
            }
        default:
    }
    const sebiFees = turnover * 0.000001;
    const gst = (brokerage + exchangeCharges + sebiFees) * 0.18;
    const totalCharges = brokerage + stt + stampDuty + exchangeCharges + sebiFees + gst;
    const netPL = grossPL - totalCharges;
    const t0 = netPL >= 0;
    let t1;
    if ($[1] !== brokerage || $[2] !== exchangeCharges || $[3] !== grossPL || $[4] !== gst || $[5] !== netPL || $[6] !== sebiFees || $[7] !== stampDuty || $[8] !== stt || $[9] !== t0 || $[10] !== totalCharges || $[11] !== turnover) {
        t1 = {
            turnover,
            grossPL,
            brokerage,
            stt,
            stampDuty,
            exchangeCharges,
            sebiFees,
            gst,
            totalCharges,
            netPL,
            isProfit: t0
        };
        $[1] = brokerage;
        $[2] = exchangeCharges;
        $[3] = grossPL;
        $[4] = gst;
        $[5] = netPL;
        $[6] = sebiFees;
        $[7] = stampDuty;
        $[8] = stt;
        $[9] = t0;
        $[10] = totalCharges;
        $[11] = turnover;
        $[12] = t1;
    } else {
        t1 = $[12];
    }
    const results = t1;
    let t2;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-2xl font-bold",
            children: "Universal Brokerage Calc"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
            lineNumber: 103,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = t2;
    } else {
        t2 = $[13];
    }
    let t3;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = [
            "delivery",
            "intraday",
            "options",
            "futures"
        ];
        $[14] = t3;
    } else {
        t3 = $[14];
    }
    let t4;
    if ($[15] !== tradeType) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8",
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-2 bg-slate-100 dark:bg-slate-800 p-1.5 rounded-xl",
                    children: t3.map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setTradeType(type),
                            className: `px-4 py-1.5 rounded-lg text-xs font-bold uppercase transition-all ${tradeType === type ? "bg-white dark:bg-slate-700 shadow-sm text-indigo-600" : "text-slate-500"}`,
                            children: type
                        }, type, false, {
                            fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
                            lineNumber: 117,
                            columnNumber: 214
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
                    lineNumber: 117,
                    columnNumber: 112
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
            lineNumber: 117,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = tradeType;
        $[16] = t4;
    } else {
        t4 = $[16];
    }
    let t5;
    if ($[17] !== buyPrice) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Buy Price",
            value: buyPrice,
            setter: setBuyPrice,
            unit: "\u20B9",
            accentColor: "text-indigo-600 dark:text-indigo-400"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
            lineNumber: 125,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = buyPrice;
        $[18] = t5;
    } else {
        t5 = $[18];
    }
    let t6;
    if ($[19] !== sellPrice) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Sell Price",
            value: sellPrice,
            setter: setSellPrice,
            unit: "\u20B9",
            accentColor: "text-indigo-600 dark:text-indigo-400"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
            lineNumber: 133,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = sellPrice;
        $[20] = t6;
    } else {
        t6 = $[20];
    }
    let t7;
    if ($[21] !== quantity) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputGroup"], {
            label: "Quantity",
            value: quantity,
            setter: setQuantity,
            unit: "Qty",
            accentColor: "text-indigo-600 dark:text-indigo-400"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
            lineNumber: 141,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[21] = quantity;
        $[22] = t7;
    } else {
        t7 = $[22];
    }
    let t8;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-slate-500 uppercase font-bold",
            children: "Turnover"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
            lineNumber: 149,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[23] = t8;
    } else {
        t8 = $[23];
    }
    let t9;
    if ($[24] !== results.turnover) {
        t9 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(results.turnover);
        $[24] = results.turnover;
        $[25] = t9;
    } else {
        t9 = $[25];
    }
    let t10;
    if ($[26] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl",
            children: [
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg font-semibold",
                    children: t9
                }, void 0, false, {
                    fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
                    lineNumber: 164,
                    columnNumber: 80
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
            lineNumber: 164,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[26] = t9;
        $[27] = t10;
    } else {
        t10 = $[27];
    }
    let t11;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-slate-500 uppercase font-bold",
            children: "Gross P&L"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
            lineNumber: 172,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[28] = t11;
    } else {
        t11 = $[28];
    }
    const t12 = `text-lg font-semibold ${results.grossPL >= 0 ? "text-emerald-500" : "text-rose-500"}`;
    let t13;
    if ($[29] !== results.grossPL) {
        t13 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(results.grossPL);
        $[29] = results.grossPL;
        $[30] = t13;
    } else {
        t13 = $[30];
    }
    let t14;
    if ($[31] !== t12 || $[32] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl",
            children: [
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: t12,
                    children: t13
                }, void 0, false, {
                    fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
                    lineNumber: 188,
                    columnNumber: 81
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
            lineNumber: 188,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[31] = t12;
        $[32] = t13;
        $[33] = t14;
    } else {
        t14 = $[33];
    }
    let t15;
    if ($[34] !== t10 || $[35] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 gap-4 pt-4",
            children: [
                t10,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
            lineNumber: 197,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[34] = t10;
        $[35] = t14;
        $[36] = t15;
    } else {
        t15 = $[36];
    }
    let t16;
    if ($[37] !== t15 || $[38] !== t5 || $[39] !== t6 || $[40] !== t7) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-2 space-y-6",
            children: [
                t5,
                t6,
                t7,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
            lineNumber: 206,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[37] = t15;
        $[38] = t5;
        $[39] = t6;
        $[40] = t7;
        $[41] = t16;
    } else {
        t16 = $[41];
    }
    const t17 = results.isProfit ? results.netPL : 0;
    let t18;
    if ($[42] !== results.totalCharges || $[43] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$CalculatorUtils$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoughnutChart"], {
            invested: results.totalCharges,
            returns: t17,
            investedColor: "#f43f5e",
            returnsColor: "#10b981"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
            lineNumber: 218,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[42] = results.totalCharges;
        $[43] = t17;
        $[44] = t18;
    } else {
        t18 = $[44];
    }
    let t19;
    if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-slate-500",
            children: "Net Profit/Loss"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
            lineNumber: 227,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[45] = t19;
    } else {
        t19 = $[45];
    }
    const t20 = `text-2xl font-black ${results.isProfit ? "text-emerald-600" : "text-rose-600"}`;
    let t21;
    if ($[46] !== results.netPL) {
        t21 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(results.netPL);
        $[46] = results.netPL;
        $[47] = t21;
    } else {
        t21 = $[47];
    }
    let t22;
    if ($[48] !== t20 || $[49] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mt-4",
            children: [
                t19,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: t20,
                    children: t21
                }, void 0, false, {
                    fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
                    lineNumber: 243,
                    columnNumber: 50
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
            lineNumber: 243,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[48] = t20;
        $[49] = t21;
        $[50] = t22;
    } else {
        t22 = $[50];
    }
    let t23;
    if ($[51] !== t18 || $[52] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center p-4 bg-indigo-50/30 dark:bg-indigo-900/10 rounded-2xl",
            children: [
                t18,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
            lineNumber: 252,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[51] = t18;
        $[52] = t22;
        $[53] = t23;
    } else {
        t23 = $[53];
    }
    let t24;
    if ($[54] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "Total Charges"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
            lineNumber: 261,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[54] = t24;
    } else {
        t24 = $[54];
    }
    let t25;
    if ($[55] !== results.totalCharges) {
        t25 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(results.totalCharges);
        $[55] = results.totalCharges;
        $[56] = t25;
    } else {
        t25 = $[56];
    }
    let t26;
    if ($[57] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between font-bold text-slate-700 dark:text-slate-200",
            children: [
                t24,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-rose-500",
                    children: t25
                }, void 0, false, {
                    fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
                    lineNumber: 276,
                    columnNumber: 99
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
            lineNumber: 276,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[57] = t25;
        $[58] = t26;
    } else {
        t26 = $[58];
    }
    let t27;
    if ($[59] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "Brokerage"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
            lineNumber: 284,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[59] = t27;
    } else {
        t27 = $[59];
    }
    let t28;
    if ($[60] !== results.brokerage) {
        t28 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(results.brokerage);
        $[60] = results.brokerage;
        $[61] = t28;
    } else {
        t28 = $[61];
    }
    let t29;
    if ($[62] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between text-slate-500",
            children: [
                t27,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: t28
                }, void 0, false, {
                    fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
                    lineNumber: 299,
                    columnNumber: 69
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
            lineNumber: 299,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[62] = t28;
        $[63] = t29;
    } else {
        t29 = $[63];
    }
    let t30;
    if ($[64] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "STT / CTT"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
            lineNumber: 307,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[64] = t30;
    } else {
        t30 = $[64];
    }
    let t31;
    if ($[65] !== results.stt) {
        t31 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(results.stt);
        $[65] = results.stt;
        $[66] = t31;
    } else {
        t31 = $[66];
    }
    let t32;
    if ($[67] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between text-slate-500",
            children: [
                t30,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: t31
                }, void 0, false, {
                    fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
                    lineNumber: 322,
                    columnNumber: 69
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
            lineNumber: 322,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[67] = t31;
        $[68] = t32;
    } else {
        t32 = $[68];
    }
    let t33;
    if ($[69] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "GST (18%)"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
            lineNumber: 330,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[69] = t33;
    } else {
        t33 = $[69];
    }
    let t34;
    if ($[70] !== results.gst) {
        t34 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(results.gst);
        $[70] = results.gst;
        $[71] = t34;
    } else {
        t34 = $[71];
    }
    let t35;
    if ($[72] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between text-slate-500",
            children: [
                t33,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: t34
                }, void 0, false, {
                    fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
                    lineNumber: 345,
                    columnNumber: 69
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
            lineNumber: 345,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[72] = t34;
        $[73] = t35;
    } else {
        t35 = $[73];
    }
    let t36;
    if ($[74] === Symbol.for("react.memo_cache_sentinel")) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "Exchange & SEBI"
        }, void 0, false, {
            fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
            lineNumber: 353,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[74] = t36;
    } else {
        t36 = $[74];
    }
    const t37 = results.exchangeCharges + results.sebiFees;
    let t38;
    if ($[75] !== t37) {
        t38 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$UI$2f$Utility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRupee"])(t37);
        $[75] = t37;
        $[76] = t38;
    } else {
        t38 = $[76];
    }
    let t39;
    if ($[77] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between text-slate-500",
            children: [
                t36,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: t38
                }, void 0, false, {
                    fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
                    lineNumber: 369,
                    columnNumber: 69
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
            lineNumber: 369,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[77] = t38;
        $[78] = t39;
    } else {
        t39 = $[78];
    }
    let t40;
    if ($[79] !== t26 || $[80] !== t29 || $[81] !== t32 || $[82] !== t35 || $[83] !== t39) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3 text-sm border-t border-slate-100 dark:border-slate-800 pt-4",
            children: [
                t26,
                t29,
                t32,
                t35,
                t39
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
            lineNumber: 377,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[79] = t26;
        $[80] = t29;
        $[81] = t32;
        $[82] = t35;
        $[83] = t39;
        $[84] = t40;
    } else {
        t40 = $[84];
    }
    let t41;
    if ($[85] !== t23 || $[86] !== t40) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                t23,
                t40
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
            lineNumber: 389,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[85] = t23;
        $[86] = t40;
        $[87] = t41;
    } else {
        t41 = $[87];
    }
    let t42;
    if ($[88] !== t16 || $[89] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 lg:grid-cols-3 gap-10",
            children: [
                t16,
                t41
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
            lineNumber: 398,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[88] = t16;
        $[89] = t41;
        $[90] = t42;
    } else {
        t42 = $[90];
    }
    let t43;
    if ($[91] !== t4 || $[92] !== t42) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl",
            children: [
                t4,
                t42
            ]
        }, void 0, true, {
            fileName: "[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx",
            lineNumber: 407,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[91] = t4;
        $[92] = t42;
        $[93] = t43;
    } else {
        t43 = $[93];
    }
    return t43;
};
_s(BrokerageCalculator, "ObqmkYAni93d/wlzNf9o3DpdNow=");
_c = BrokerageCalculator;
const __TURBOPACK__default__export__ = BrokerageCalculator;
var _c;
__turbopack_context__.k.register(_c, "BrokerageCalculator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/calculators/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/noop-head.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/scale.js [app-client] (ecmascript) <export default as Scale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-right.js [app-client] (ecmascript) <export default as ArrowUpRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/receipt.js [app-client] (ecmascript) <export default as Receipt>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/landmark.js [app-client] (ecmascript) <export default as Landmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LineChart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-line.js [app-client] (ecmascript) <export default as LineChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PieChart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-pie.js [app-client] (ecmascript) <export default as PieChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$calculators$2f$calculatorData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/calculators/calculatorData.js [app-client] (ecmascript)");
// --- Sub-Calculator Imports ---
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$SIPCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/SubCalculators/SIPCalculator.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$LumpsumCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/SubCalculators/LumpsumCalculator.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$IpoProfitCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/SubCalculators/IpoProfitCalculator.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$GoalCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/SubCalculators/GoalCalculator.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$RetirementCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/SubCalculators/RetirementCalculator.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$EMICalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/SubCalculators/EMICalculator.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$EPFCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/SubCalculators/EPFCalculator.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$FDCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/SubCalculators/FDCalculator.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$TaxFDCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/SubCalculators/TaxFDCalculator.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$ReverseSIPCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/SubCalculators/ReverseSIPCalculator.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$CAGRCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/SubCalculators/CAGRCalculator.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$GoldInvestmentCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/SubCalculators/GoldInvestmentCalculator.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$GsecBondCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/SubCalculators/GsecBondCalculator.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$PPFCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/SubCalculators/PPFCalculator.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$BrokerageCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Calculators/SubCalculators/BrokerageCalculator.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const contentData = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$calculators$2f$calculatorData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["data"];
const CalculatorSection = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(93);
    if ($[0] !== "1ba8ff74e85d4c22f11d61d9477984b63065bf47a8b0de3efc8d5b99a041489f") {
        for(let $i = 0; $i < 93; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1ba8ff74e85d4c22f11d61d9477984b63065bf47a8b0de3efc8d5b99a041489f";
    }
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [activeCalculator, setActiveCalculator] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("sip");
    const [isDropdownOpen, setIsDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const guideRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            {
                id: "sip",
                label: "SIP Calculator",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LineChart$3e$__["LineChart"],
                category: "Investment",
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$SIPCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            },
            {
                id: "brokerage",
                label: "Brokerage & Tax",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__["Receipt"],
                category: "Trading",
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$BrokerageCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            },
            {
                id: "goal",
                label: "Goal Planner",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
                category: "Planning",
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$GoalCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            },
            {
                id: "retirement",
                label: "Retirement",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
                category: "Planning",
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$RetirementCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            },
            {
                id: "emi",
                label: "Loan EMI",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"],
                category: "Banking",
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$EMICalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            },
            {
                id: "ppf",
                label: "PPF Safe",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"],
                category: "Tax Saving",
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$PPFCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            },
            {
                id: "fd",
                label: "FD Interest",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"],
                category: "Banking",
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$FDCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            },
            {
                id: "gold",
                label: "Gold Value",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"],
                category: "Investment",
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$GoldInvestmentCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            },
            {
                id: "ipo",
                label: "IPO Gain",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpRight$3e$__["ArrowUpRight"],
                category: "Investment",
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$IpoProfitCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            },
            {
                id: "cagr",
                label: "CAGR Tool",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
                category: "Investment",
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$CAGRCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            },
            {
                id: "epf",
                label: "EPF Tracker",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"],
                category: "Retirement",
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$EPFCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            },
            {
                id: "taxfd",
                label: "Tax FD",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__["Landmark"],
                category: "Tax Saving",
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$TaxFDCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            },
            {
                id: "swp",
                label: "SWP Pension",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PieChart$3e$__["PieChart"],
                category: "Retirement",
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$ReverseSIPCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            },
            {
                id: "gsec",
                label: "G-Sec Bonds",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"],
                category: "Investment",
                component: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Calculators$2f$SubCalculators$2f$GsecBondCalculator$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
            }
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const CALCULATOR_OPTIONS = t0;
    let t1;
    if ($[2] !== searchTerm) {
        t1 = CALCULATOR_OPTIONS.filter((opt)=>opt.label.toLowerCase().includes(searchTerm.toLowerCase()));
        $[2] = searchTerm;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const filteredOptions = t1;
    const current = contentData[activeCalculator] || contentData.sip;
    const ActiveComponent = CALCULATOR_OPTIONS.find((opt_0)=>opt_0.id === activeCalculator)?.component;
    const ActiveIcon = CALCULATOR_OPTIONS.find((opt_1)=>opt_1.id === activeCalculator)?.icon || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LineChart$3e$__["LineChart"];
    let t2;
    if ($[4] !== current.title) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
            children: [
                current.title,
                " - Free Financial Tool 2025"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 144,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = current.title;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    let t3;
    if ($[6] !== current.what) {
        t3 = current.what.substring(0, 160);
        $[6] = current.what;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
            name: "description",
            content: t3
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 160,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t3;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    let t5;
    if ($[10] !== t2 || $[11] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$noop$2d$head$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            children: [
                t2,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 168,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = t2;
        $[11] = t4;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    let t6;
    if ($[13] !== isDropdownOpen) {
        t6 = ()=>setIsDropdownOpen(!isDropdownOpen);
        $[13] = isDropdownOpen;
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    let t7;
    if ($[15] !== ActiveIcon) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActiveIcon, {
            className: "w-6 h-6 text-emerald-500"
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 185,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = ActiveIcon;
        $[16] = t7;
    } else {
        t7 = $[16];
    }
    let t8;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-[10px] font-black uppercase text-slate-400 leading-none mb-1",
            children: "Current Tool"
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 193,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    let t9;
    if ($[18] !== current.title) {
        t9 = current.title.split("-");
        $[18] = current.title;
        $[19] = t9;
    } else {
        t9 = $[19];
    }
    let t10;
    if ($[20] !== t9[0]) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-left",
            children: [
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm font-bold text-emerald-600",
                    children: t9[0]
                }, void 0, false, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 208,
                    columnNumber: 42
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 208,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = t9[0];
        $[21] = t10;
    } else {
        t10 = $[21];
    }
    let t11;
    if ($[22] !== t10 || $[23] !== t7) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                t7,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 216,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[22] = t10;
        $[23] = t7;
        $[24] = t11;
    } else {
        t11 = $[24];
    }
    const t12 = `transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`;
    let t13;
    if ($[25] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
            className: t12
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 226,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[25] = t12;
        $[26] = t13;
    } else {
        t13 = $[26];
    }
    let t14;
    if ($[27] !== t11 || $[28] !== t13 || $[29] !== t6) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t6,
            className: "w-full bg-white dark:bg-slate-900 border-2 border-emerald-500 rounded-2xl p-4 flex items-center justify-between shadow-lg relative z-[60]",
            children: [
                t11,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 234,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[27] = t11;
        $[28] = t13;
        $[29] = t6;
        $[30] = t14;
    } else {
        t14 = $[30];
    }
    let t15;
    if ($[31] !== activeCalculator || $[32] !== isDropdownOpen) {
        t15 = isDropdownOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed inset-0 z-[70]",
                    onClick: ()=>setIsDropdownOpen(false)
                }, void 0, false, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 244,
                    columnNumber: 31
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute z-[1000] top-full left-0 right-0 mt-3 bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-2xl shadow-2xl max-h-[50vh] overflow-y-auto p-2 space-y-1 ring-4 ring-black/5 animate-in fade-in slide-in-from-top-2",
                    children: CALCULATOR_OPTIONS.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                setActiveCalculator(tab.id);
                                setIsDropdownOpen(false);
                                window.scrollTo({
                                    top: 0,
                                    behavior: "smooth"
                                });
                            },
                            className: `flex items-center gap-3 p-4 rounded-xl w-full text-left transition-all ${activeCalculator === tab.id ? "bg-emerald-500 text-white shadow-md" : "hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(tab.icon, {
                                    size: 20,
                                    className: activeCalculator === tab.id ? "text-white" : "text-emerald-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/calculators/page.js",
                                    lineNumber: 251,
                                    columnNumber: 249
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[13px] font-black uppercase tracking-tight",
                                    children: tab.label
                                }, void 0, false, {
                                    fileName: "[project]/src/app/calculators/page.js",
                                    lineNumber: 251,
                                    columnNumber: 347
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, tab.id, true, {
                            fileName: "[project]/src/app/calculators/page.js",
                            lineNumber: 244,
                            columnNumber: 407
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 244,
                    columnNumber: 112
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true);
        $[31] = activeCalculator;
        $[32] = isDropdownOpen;
        $[33] = t15;
    } else {
        t15 = $[33];
    }
    let t16;
    if ($[34] !== t14 || $[35] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:hidden relative",
            children: [
                t14,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 260,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[34] = t14;
        $[35] = t15;
        $[36] = t16;
    } else {
        t16 = $[36];
    }
    let t17;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
            className: "absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors",
            size: 18
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 269,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[37] = t17;
    } else {
        t17 = $[37];
    }
    let t18;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative group",
            children: [
                t17,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    placeholder: "Search toolkit...",
                    className: "w-full bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-2xl py-4 pl-12 pr-4 text-xs font-black focus:border-blue-500 outline-none shadow-sm transition-all",
                    onChange: (e)=>setSearchTerm(e.target.value)
                }, void 0, false, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 276,
                    columnNumber: 48
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 276,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[38] = t18;
    } else {
        t18 = $[38];
    }
    let t19;
    if ($[39] !== activeCalculator || $[40] !== filteredOptions) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden lg:block space-y-6",
            children: [
                t18,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "space-y-2 max-h-[75vh] overflow-y-auto no-scrollbar pb-10",
                    children: filteredOptions.map((tab_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveCalculator(tab_0.id),
                            className: `flex items-center gap-4 px-5 py-4 rounded-xl font-black text-[11px] uppercase tracking-widest transition-all w-full border-2 ${activeCalculator === tab_0.id ? "bg-emerald-500 text-white border-emerald-500 shadow-xl translate-x-1" : "bg-white dark:bg-slate-900 border-transparent hover:border-slate-100 dark:hover:border-slate-800"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(tab_0.icon, {
                                    className: "w-5 h-5 shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/calculators/page.js",
                                    lineNumber: 283,
                                    columnNumber: 579
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "leading-none mb-1 text-[12px] font-semibold",
                                            children: tab_0.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/calculators/page.js",
                                            lineNumber: 283,
                                            columnNumber: 649
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[10px] opacity-60 font-semibold uppercase",
                                            children: tab_0.category
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/calculators/page.js",
                                            lineNumber: 283,
                                            columnNumber: 725
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/calculators/page.js",
                                    lineNumber: 283,
                                    columnNumber: 622
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, tab_0.id, true, {
                            fileName: "[project]/src/app/calculators/page.js",
                            lineNumber: 283,
                            columnNumber: 164
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 283,
                    columnNumber: 59
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 283,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[39] = activeCalculator;
        $[40] = filteredOptions;
        $[41] = t19;
    } else {
        t19 = $[41];
    }
    let t20;
    if ($[42] !== t16 || $[43] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
            className: "lg:col-span-3 z-[50]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky top-24 space-y-6",
                children: [
                    t16,
                    t19
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/calculators/page.js",
                lineNumber: 292,
                columnNumber: 51
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 292,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[42] = t16;
        $[43] = t19;
        $[44] = t20;
    } else {
        t20 = $[44];
    }
    let t21;
    if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-emerald-500 text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-2 mb-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                    size: 14
                }, void 0, false, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 301,
                    columnNumber: 125
                }, ("TURBOPACK compile-time value", void 0)),
                " Intelligence Engine"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 301,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[45] = t21;
    } else {
        t21 = $[45];
    }
    let t22;
    if ($[46] !== current.title) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2",
            children: [
                t21,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl md:text-3xl font-black uppercase leading-none",
                    children: current.title
                }, void 0, false, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 308,
                    columnNumber: 43
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 308,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[46] = current.title;
        $[47] = t22;
    } else {
        t22 = $[47];
    }
    let t23;
    if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white/10 backdrop-blur-md p-5 rounded-3xl border border-white/10 flex items-center gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__["Landmark"], {
                    size: 20,
                    className: "text-emerald-400"
                }, void 0, false, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 316,
                    columnNumber: 120
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-emerald-400 font-black text-sm uppercase tracking-tighter",
                    children: "FY 2025 Ready"
                }, void 0, false, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 316,
                    columnNumber: 171
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 316,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[48] = t23;
    } else {
        t23 = $[48];
    }
    let t24;
    if ($[49] !== t22) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "bg-slate-900 rounded-xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6",
                children: [
                    t22,
                    t23
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/calculators/page.js",
                lineNumber: 323,
                columnNumber: 114
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 323,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[49] = t22;
        $[50] = t24;
    } else {
        t24 = $[50];
    }
    let t25;
    if ($[51] !== ActiveComponent) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "relative z-[20]",
            children: ActiveComponent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActiveComponent, {}, void 0, false, {
                fileName: "[project]/src/app/calculators/page.js",
                lineNumber: 331,
                columnNumber: 67
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-20 text-center font-black opacity-20 uppercase tracking-widest text-slate-400",
                children: "Loading Module..."
            }, void 0, false, {
                fileName: "[project]/src/app/calculators/page.js",
                lineNumber: 331,
                columnNumber: 89
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 331,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[51] = ActiveComponent;
        $[52] = t25;
    } else {
        t25 = $[52];
    }
    let t26;
    if ($[53] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-slate-50 dark:bg-slate-800/50 px-8 py-6 border-b dark:border-slate-800 flex justify-between items-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-[10px] font-black uppercase tracking-widest text-slate-500 flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__["Scale"], {
                        size: 16
                    }, void 0, false, {
                        fileName: "[project]/src/app/calculators/page.js",
                        lineNumber: 339,
                        columnNumber: 240
                    }, ("TURBOPACK compile-time value", void 0)),
                    " Technical Specs"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/calculators/page.js",
                lineNumber: 339,
                columnNumber: 136
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 339,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[53] = t26;
    } else {
        t26 = $[53];
    }
    let t27;
    if ($[54] !== current.specs) {
        t27 = current.specs?.map(_temp);
        $[54] = current.specs;
        $[55] = t27;
    } else {
        t27 = $[55];
    }
    let t28;
    if ($[56] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 shadow-xl overflow-hidden",
            children: [
                t26,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "divide-y dark:divide-slate-800",
                    children: t27
                }, void 0, false, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 354,
                    columnNumber: 143
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 354,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[56] = t27;
        $[57] = t28;
    } else {
        t28 = $[57];
    }
    let t29;
    if ($[58] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-[10px] font-black uppercase tracking-widest text-emerald-500 mb-8 flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                    size: 14,
                    className: "fill-current"
                }, void 0, false, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 362,
                    columnNumber: 122
                }, ("TURBOPACK compile-time value", void 0)),
                " Computational Model"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 362,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[58] = t29;
    } else {
        t29 = $[58];
    }
    let t30;
    if ($[59] !== current.formula) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t29,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white/5 p-6 rounded-xl border border-white/10 text-center mb-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                        className: "text-lg font-mono font-bold text-emerald-400 tracking-tighter block leading-relaxed",
                        children: current.formula
                    }, void 0, false, {
                        fileName: "[project]/src/app/calculators/page.js",
                        lineNumber: 369,
                        columnNumber: 104
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 369,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 369,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[59] = current.formula;
        $[60] = t30;
    } else {
        t30 = $[60];
    }
    let t31;
    if ($[61] !== current.variables) {
        t31 = current.variables?.map(_temp2);
        $[61] = current.variables;
        $[62] = t31;
    } else {
        t31 = $[62];
    }
    let t32;
    if ($[63] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-3",
            children: t31
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 385,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[63] = t31;
        $[64] = t32;
    } else {
        t32 = $[64];
    }
    let t33;
    if ($[65] !== t30 || $[66] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-slate-950 rounded-xl p-8 text-white border border-slate-800 shadow-2xl flex flex-col justify-between",
            children: [
                t30,
                t32
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 393,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[65] = t30;
        $[66] = t32;
        $[67] = t33;
    } else {
        t33 = $[67];
    }
    let t34;
    if ($[68] !== t28 || $[69] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid md:grid-cols-2 gap-8",
            children: [
                t28,
                t33
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 402,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[68] = t28;
        $[69] = t33;
        $[70] = t34;
    } else {
        t34 = $[70];
    }
    let t35;
    if ($[71] === Symbol.for("react.memo_cache_sentinel")) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-2xl font-black uppercase italic tracking-tight text-blue-600 flex items-center gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                    size: 24
                }, void 0, false, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 411,
                    columnNumber: 117
                }, ("TURBOPACK compile-time value", void 0)),
                " What is this?"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 411,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[71] = t35;
    } else {
        t35 = $[71];
    }
    let t36;
    if ($[72] !== current.what) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                t35,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-slate-600 dark:text-slate-400 leading-relaxed text-lg font-medium border-l-4 border-blue-500 pl-6 italic",
                    children: current.what
                }, void 0, false, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 418,
                    columnNumber: 43
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 418,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[72] = current.what;
        $[73] = t36;
    } else {
        t36 = $[73];
    }
    let t37;
    if ($[74] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-2xl font-black uppercase italic tracking-tight text-emerald-600 flex items-center gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                    size: 24
                }, void 0, false, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 426,
                    columnNumber: 120
                }, ("TURBOPACK compile-time value", void 0)),
                " Why use this?"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 426,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[74] = t37;
    } else {
        t37 = $[74];
    }
    let t38;
    if ($[75] !== current.why) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                t37,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-slate-600 dark:text-slate-400 leading-relaxed text-lg font-medium",
                    children: current.why
                }, void 0, false, {
                    fileName: "[project]/src/app/calculators/page.js",
                    lineNumber: 433,
                    columnNumber: 43
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 433,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[75] = current.why;
        $[76] = t38;
    } else {
        t38 = $[76];
    }
    let t39;
    if ($[77] !== t36 || $[78] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            ref: guideRef,
            className: "bg-white dark:bg-slate-900 p-8 md:p-12 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm space-y-12",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-2 gap-12",
                children: [
                    t36,
                    t38
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/calculators/page.js",
                lineNumber: 441,
                columnNumber: 164
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 441,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[77] = t36;
        $[78] = t38;
        $[79] = t39;
    } else {
        t39 = $[79];
    }
    let t40;
    if ($[80] !== t24 || $[81] !== t25 || $[82] !== t34 || $[83] !== t39) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-9 space-y-5 relative z-[10]",
            children: [
                t24,
                t25,
                t34,
                t39
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 450,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[80] = t24;
        $[81] = t25;
        $[82] = t34;
        $[83] = t39;
        $[84] = t40;
    } else {
        t40 = $[84];
    }
    let t41;
    if ($[85] !== t20 || $[86] !== t40) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "max-w-[1440px] mx-auto px-4 py-8 grid lg:grid-cols-12 gap-8 relative",
            children: [
                t20,
                t40
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 461,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[85] = t20;
        $[86] = t40;
        $[87] = t41;
    } else {
        t41 = $[87];
    }
    let t42;
    let t43;
    if ($[88] === Symbol.for("react.memo_cache_sentinel")) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
            className: "max-w-7xl mx-auto px-4 py-12 border-t dark:border-slate-800 text-center text-slate-400 font-bold uppercase tracking-[0.4em] text-[10px]",
            children: "Wealth Intelligence Terminal © 2025"
        }, void 0, false, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 471,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            id: "b90afdfb7d3150d9",
            children: ".no-scrollbar::-webkit-scrollbar{display:none}.no-scrollbar{-ms-overflow-style:none;scrollbar-width:none}::selection{color:#fff;background:#10b981}"
        }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0));
        $[88] = t42;
        $[89] = t43;
    } else {
        t42 = $[88];
        t43 = $[89];
    }
    let t44;
    if ($[90] !== t41 || $[91] !== t5) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-[#f8fafc] mt-15 dark:bg-[#020617] min-h-screen transition-all duration-500 text-slate-900 dark:text-slate-100 pb-16",
            children: [
                t5,
                t41,
                t42,
                t43
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/calculators/page.js",
            lineNumber: 481,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[90] = t41;
        $[91] = t5;
        $[92] = t44;
    } else {
        t44 = $[92];
    }
    return t44;
};
_s(CalculatorSection, "QDuE4KwQbAMDm0BxGkH+5FOwpeI=");
_c = CalculatorSection;
const __TURBOPACK__default__export__ = CalculatorSection;
function _temp(spec, idx) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-between items-center px-8 py-5 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/10 transition-colors",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[11px] font-black uppercase text-slate-400",
                children: spec.feature
            }, void 0, false, {
                fileName: "[project]/src/app/calculators/page.js",
                lineNumber: 492,
                columnNumber: 151
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs font-black uppercase",
                children: spec.value
            }, void 0, false, {
                fileName: "[project]/src/app/calculators/page.js",
                lineNumber: 492,
                columnNumber: 238
            }, this)
        ]
    }, idx, true, {
        fileName: "[project]/src/app/calculators/page.js",
        lineNumber: 492,
        columnNumber: 10
    }, this);
}
function _temp2(v, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-between text-[10px] font-bold border-b border-white/5 pb-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-emerald-500",
                children: v.k
            }, void 0, false, {
                fileName: "[project]/src/app/calculators/page.js",
                lineNumber: 495,
                columnNumber: 107
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-slate-400 uppercase tracking-tight",
                children: v.v
            }, void 0, false, {
                fileName: "[project]/src/app/calculators/page.js",
                lineNumber: 495,
                columnNumber: 154
            }, this)
        ]
    }, i, true, {
        fileName: "[project]/src/app/calculators/page.js",
        lineNumber: 495,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "CalculatorSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_a2c2412d._.js.map