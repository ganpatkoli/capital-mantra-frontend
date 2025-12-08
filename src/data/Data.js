// data/Data.js

export const BLOG_CATEGORIES = [
  "Market News",
  "Investing 101",
  "Mutual Funds",
  "IPO Insights",
  "Taxes & Regulations",
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: "How to Read an IPO Prospectus (DRHP) Like a Pro",
    category: "IPO Insights",
    date: "2025-11-15",
    readTime: "7 min read",
    author: "Finance Desk",
    excerpt:
      "Before applying for any IPO, understanding the DRHP is crucial. Here are the 7 key sections you should always check...",
    imageUrl: "https://placehold.co/600x400/10B981/white?text=Prospectus+Deep+Dive", // Emerald/Green theme
    content: [
      "The Draft Red Herring Prospectus (DRHP) is the single most important document for any IPO investor. It's essentially the company's declaration to the market, detailing its financials, risks, business model, and future plans. We focus heavily on the 'Risk Factors' section.",
      "**Financial Performance:** Analyze the last three years' revenue, profit after tax (PAT), and debt levels. Look for consistent growth and check for any one-time gains that artificially inflate profits.",
      "**Key Management Personnel (KMP):** Who is running the show? Look at their experience and history. A stable, experienced KMP is a major positive indicator.",
      "**Litigation and Contingent Liabilities:** This section often holds hidden risks. High, unresolved legal cases or significant off-balance sheet liabilities can severely impact future performance.",
      "**Valuation:** Compare the company's asking price (implied by the price band) to its peers. Is it priced fairly, or is the company asking for a premium? Justification is key.",
      "**Use of Proceeds:** Where is the money raised going? Paying off debt (good), or funding operational expenses (less good)? This shows management's priority.",
      "By systematically reviewing these areas, you move from speculating to informed investing."
    ]
  },
  {
    id: 2,
    title: "5 Golden Rules for Long-Term Wealth Creation in Equity Market",
    category: "Investing 101",
    date: "2025-10-20",
    readTime: "6 min read",
    author: "Smart Investor",
    excerpt:
      "Discipline beats timing. These 5 rules can help you stay on track through market ups and downs...",
    imageUrl: "https://placehold.co/600x400/06B6D4/white?text=Wealth+Creation+Rules", // Cyan theme
    content: [
      "**Rule 1: Start Early and Stay Consistent.** The power of compounding works best over long durations. Even small, regular investments started early far outperform large investments started late.",
      "**Rule 2: Diversify, Diversify, Diversify.** Never put all your capital into a single stock or sector. Use mutual funds or ETFs to spread risk across different industries and asset classes.",
      "**Rule 3: Invest in Quality Businesses.** Focus on companies with low debt, high operating margins, and strong competitive advantages (a 'moat'). Time is the friend of the good business.",
      "**Rule 4: Control Your Emotions.** The biggest enemy of the average investor is panic selling during a downturn and greed-buying during a rally. Stick to your asset allocation plan, regardless of market noise.",
      "**Rule 5: Keep Costs Low.** Expense ratios, brokerage fees, and unnecessary transaction costs eat into long-term returns. Favor low-cost funds and avoid excessive trading."
    ]
  },
  {
    id: 3,
    title: "Upcoming IPOs to Watch This Quarter",
    category: "Market News",
    date: "2025-11-01",
    readTime: "4 min read",
    author: "Research Team",
    excerpt:
      "A quick look at the most talked‑about IPOs coming in the next few months and what you should track...",
    imageUrl: "https://placehold.co/600x400/D97706/white?text=Upcoming+IPOs+Watch", // Amber/Orange theme
    content: [
      "This quarter promises a robust pipeline of new public offerings, primarily in the FinTech and Renewable Energy sectors.",
      "**FinTech Momentum:** Digital payments and lending platforms continue to attract strong investor interest, often commanded by high GMPs. Pay close attention to anchor investor participation, as this signals institutional confidence.",
      "**Renewable Energy:** As the global push for sustainability accelerates, companies specializing in solar component manufacturing and energy storage are hitting the markets. These are long-term plays that require careful assessment of regulatory risk.",
      "**Market Volatility Check:** Given the current global liquidity environment, listing gains are not guaranteed. Use the subscription data (QIB, NII, Retail) to gauge real-time demand."
    ]
  },
  {
    id: 4,
    title: "How IPO Listing Gains are Taxed in India",
    category: "Taxes & Regulations",
    date: "2025-09-12",
    readTime: "5 min read",
    author: "Tax Guide",
    excerpt:
      "Booked profit in a recent IPO listing? Here's how your gains are actually taxed and how to plan better...",
    imageUrl: "https://placehold.co/600x400/EF4444/white?text=Taxation+Guide", // Red theme
    content: [
      "In India, the taxation of capital gains from IPOs depends on the holding period after listing:",
      "**Short-Term Capital Gains (STCG):** If you sell the shares within 12 months from the date of allotment (which includes the listing day), the profit is treated as STCG and taxed at a flat rate of 15% (plus cess). This is the most common scenario for those seeking quick listing gains.",
      "**Long-Term Capital Gains (LTCG):** If you hold the shares for more than 12 months, the profit is treated as LTCG. LTCG is tax-exempt up to ₹1,00,000 per financial year. Beyond this limit, LTCG is taxed at 10% (without indexation benefit).",
      "It's essential to consult a tax advisor, as regulations around derivative markets and specific long-term investment schemes can affect your final liability."
    ]
  },
];

export const IPO_LIST = [
  {
    id: 1,
    company: "Corona Remedies Ltd",
    symbol: "CORONARM",
    ipoType: "Mainboard",
    openDate: "2025-12-05",
    closeDate: "2025-12-09",
    priceBand: "₹1,050 – ₹1,062",
    lotSize: "14 shares",
    status: "Ongoing",
    gmp: "+₹365 (approx)",
    listingDate: "2025-12-14",
    issueSize: "₹1,500 Cr",
    peRatio: "45x (at upper band)",
    registrar: "Link Intime India Pvt Ltd",
    keyDates: [
      { label: "Bidding Open", date: "Dec 5" },
      { label: "Bidding Close", date: "Dec 9" },
      { label: "Allotment Finalization", date: "Dec 12" },
      { label: "Listing Date (Expected)", date: "Dec 14" },
    ],
    financialSummary: [
      { label: "FY24 Revenue", value: "₹850 Cr" },
      { label: "FY24 PAT", value: "₹65 Cr" },
      { label: "Debt/Equity", value: "0.45" },
    ],
  },
  {
    id: 2,
    company: "XYZ Fintech Services Pvt Ltd",
    symbol: "XYZFIN",
    ipoType: "SME",
    openDate: "2025-12-10",
    closeDate: "2025-12-13",
    priceBand: "₹75 – ₹79",
    lotSize: "1600 shares",
    status: "Upcoming",
    gmp: "TBA",
    listingDate: "TBA",
    issueSize: "₹120 Cr",
    peRatio: "N/A (Loss Making)",
    registrar: "BigShare Services Pvt Ltd",
    keyDates: [
      { label: "Bidding Open", date: "Dec 10" },
      { label: "Bidding Close", date: "Dec 13" },
      { label: "Allotment Finalization", date: "Dec 16" },
      { label: "Listing Date (Expected)", date: "Dec 18" },
    ],
    financialSummary: [
      { label: "FY24 Revenue", value: "₹55 Cr" },
      { label: "FY24 PAT", value: "-₹8 Cr" },
      { label: "Debt/Equity", value: "0.20" },
    ],
  },
  {
    id: 3,
    company: "Alpha Logistics Ltd",
    symbol: "ALPHALOG",
    ipoType: "Mainboard",
    openDate: "2025-11-20",
    closeDate: "2025-11-22",
    priceBand: "₹490 – ₹505",
    lotSize: "29 shares",
    status: "Closed",
    gmp: "+₹70 (listing day)",
    listingDate: "2025-11-28",
    issueSize: "₹850 Cr",
    peRatio: "30x",
    registrar: "KFin Technologies Ltd",
    keyDates: [
      { label: "Bidding Open", date: "Nov 20" },
      { label: "Bidding Close", date: "Nov 22" },
      { label: "Allotment Finalization", date: "Nov 25" },
      { label: "Listing Date (Actual)", date: "Nov 28" },
    ],
    financialSummary: [
      { label: "FY24 Revenue", value: "₹1,200 Cr" },
      { label: "FY24 PAT", value: "₹40 Cr" },
      { label: "Debt/Equity", value: "0.60" },
    ],
  },
];

export const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "IPOs", href: "#ipos" },
  { label: "Blogs", href: "#blogs" },
  { label: "Calculators", href: "#calculators" },
  { label: "Newsletter", href: "#newsletter" },
];

export const slugify = (title) => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove all non-word characters (except space/hyphen)
    .replace(/[\s_-]+/g, '-')    // Collapse whitespace and underscores/hyphens to a single hyphen
    .replace(/^-+|-+$/g, '');    // Remove leading/trailing hyphen
};