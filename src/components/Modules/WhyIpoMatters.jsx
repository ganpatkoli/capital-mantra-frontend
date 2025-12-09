import React from 'react'
import AnimatedSection from './AnimationWeb';

const WhyIposMatterSection = () => {
    return (
        <AnimatedSection animationClass="translate-y-10" rootMargin='-50px 0px'>
            <section
                id="why-ipos"
                className="border-b border-slate-200/70 bg-slate-100 py-12 sm:py-16 dark:border-slate-800/70 dark:bg-slate-900"
            >
                <div className="mx-auto max-w-6xl px-4 sm:px-6">
                    <div className="text-center max-w-3xl mx-auto space-y-4">
                        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-emerald-600 dark:text-emerald-300">
                            Investment Opportunity
                        </span>
                        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-50">
                            Maximize Returns: Why Investing in Indian IPOs is Crucial for Portfolio Growth.
                        </h2>
                        <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300">
                            An Initial Public Offering (IPO) provides early access to high-growth companies. At Capital Mantra, we highlight how smart IPO participation offers long-term portfolio diversification, not just quick listing gains.
                        </p>
                    </div>
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        <div className="rounded-xl p-6 bg-white shadow-lg dark:bg-slate-950 transform transition duration-500 hover:scale-[1.03] hover:shadow-emerald-500/20">
                            <h3 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">Growth Potential</h3>
                            <p className="mt-2 text-slate-700 dark:text-slate-300">IPOs offer an opportunity to invest in new companies with rapid growth potential in emerging sectors.</p>
                        </div>
                        <div className="rounded-xl p-6 bg-white shadow-lg dark:bg-slate-950 transform transition duration-500 hover:scale-[1.03] hover:shadow-emerald-500/20">
                            <h3 className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">Liquidity Advantage</h3>
                            <p className="mt-2 text-slate-700 dark:text-slate-300">Once listed, your shares can be easily sold, providing high liquidity compared to unlisted investments.</p>
                        </div>
                        <div className="rounded-xl p-6 bg-white shadow-lg dark:bg-slate-950 transform transition duration-500 hover:scale-[1.03] hover:shadow-emerald-500/20">
                            <h3 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">Market Insight</h3>
                            <p className="mt-2 text-slate-700 dark:text-slate-300">The detailed information required for the IPO process gives you a deep understanding of the company's fundamentals and strategy.</p>
                        </div>
                    </div>
                </div>
            </section>
        </AnimatedSection>
    );
};



export default WhyIposMatterSection