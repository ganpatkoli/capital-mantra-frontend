"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { Send, Clock, BookOpen, ChevronLeft, ChevronRight, TrendingUp, Filter, ArrowRight } from 'lucide-react';

const DEFAULT_LIMIT = 6;
const MAX_PAGES_TO_SHOW = 2; 

const fetchNews = async (page, limit) => {
    try {
        const response = await axios.get(`http://localhost:5000/api/news?page=${page}&limit=${limit}`);
        return response.data || { news: [], totalPages: 1, totalItems: 0 };
    } catch (error) {
        console.error("Error fetching news data:", error);
        return { news: [], totalPages: 1, totalItems: 0 };
    }
};

const extractCategories = (data) => {
    const categories = new Set();
    data.news.forEach(item => {
        if (item.category) categories.add(item.category);
    });
    return Array.from(categories).sort();
};

// --- Updated Filter Component with Horizontal Scroll ---
const MarketNewsFilters = ({ activeCategory, setActiveCategory, categories }) => {
    const filterCategories = ["All", ...categories];

    return (
        <div className="mt-6 flex flex-col gap-4 p-4 bg-slate-100/50 rounded-lg border border-slate-200 dark:bg-slate-800 dark:border-slate-700">
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1">
                <Filter className="w-4 h-4 text-emerald-600" />
                Sectors:
            </span>
            
            {/* Scroll Container: Mobile pe scroll, Desktop pe wrap */}
            <div className="flex flex-nowrap sm:flex-wrap gap-3 overflow-x-auto no-scrollbar pb-2 sm:pb-0">
                {filterCategories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`inline-block whitespace-nowrap rounded-lg px-4 py-1.5 font-semibold text-sm transition duration-200 border flex-shrink-0 ${
                            activeCategory === cat
                                ? "bg-emerald-600 border-emerald-700 text-white shadow-sm shadow-emerald-500/50"
                                : "bg-white border-slate-300 text-slate-800 hover:bg-emerald-50 hover:border-emerald-500 dark:bg-slate-700 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-600"
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </div>
    );
};

const NewsCard = ({ news }) => {
    const formattedDate = new Date(news.date).toLocaleTimeString('en-IN', {
        year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
    });

    return (
        <Link
            href={news.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:border-emerald-500 dark:border-slate-700 dark:bg-slate-900 overflow-hidden"
        >
            <div className="p-4 flex flex-col space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="inline-flex items-center rounded-full bg-emerald-600/90 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white">
                        {news.category || "General"}
                    </span>
                    <span className="text-slate-500 dark:text-slate-400">
                        {news.news_source || news.source}
                    </span>
                </div>
                <div className="w-8 h-0.5 bg-emerald-500 mt-2 rounded-full"></div>
                <h3 className="text-xl font-bold leading-snug text-slate-900 group-hover:text-emerald-600 transition dark:text-white">
                    {news.title}
                </h3>
            </div>
            <div className="px-4 pt-0 pb-4 flex-grow">
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 line-clamp-3">
                    {news.summary || "No detailed summary available. Click to read the full article."}
                </p>
            </div>
            <div className="mt-auto border-t border-slate-100 dark:border-slate-800 p-4 bg-slate-50 dark:bg-slate-900/80">
                <div className="flex items-center justify-between text-sm font-medium">
                    <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                        <Clock className='w-4 h-4 text-emerald-500' /> {formattedDate}
                    </span>
                    <div className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                        Read More <BookOpen className='w-4 h-4 transition-transform group-hover:translate-x-0.5' />
                    </div>
                </div>
            </div>
        </Link>
    );
};

const MarketNewsSection = () => {
    const [allNews, setAllNews] = useState([]);
    const [activeCategory, setActiveCategory] = useState("All");
    const [categories, setCategories] = useState([]);
    const [pagedNews, setPagedNews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadNews = async () => {
            setIsLoading(true);
            const apiData = await fetchNews(1, 500); 
            if (apiData.news?.length > 0) {
                setAllNews(apiData.news);
                setCategories(extractCategories(apiData));
            }
            setIsLoading(false);
        };
        loadNews();
    }, []);

    useEffect(() => {
        const filtered = allNews.filter((news) => 
            activeCategory === "All" ? true : news.category === activeCategory
        );
        const startIndex = (currentPage - 1) * DEFAULT_LIMIT;
        setPagedNews(filtered.slice(startIndex, startIndex + DEFAULT_LIMIT));
        setTotalPages(Math.ceil(filtered.length / DEFAULT_LIMIT));
    }, [activeCategory, allNews, currentPage]);

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
            document.getElementById('market-news').scrollIntoView({ behavior: 'smooth' });
        }
    };

    const shouldShowViewAll = (currentPage === MAX_PAGES_TO_SHOW) && (totalPages > MAX_PAGES_TO_SHOW);
    const shouldShowPaginationControls = totalPages > 1 && currentPage < MAX_PAGES_TO_SHOW;

    return (
        <section id="market-news" className="border-b border-slate-200/70 bg-white py-10 sm:py-20 dark:border-slate-800/70 dark:bg-slate-950">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className='text-center mb-10'>
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                        <TrendingUp className="inline w-8 h-8 mr-3 text-emerald-600" />
                        Financial News Digest
                    </h2>
                    <p className="mt-2 text-lg text-slate-600 dark:text-slate-400">
                        Real-time headlines from India's key financial sectors.
                    </p>
                </div>

                <div className="mb-10">
                    {!isLoading && allNews.length > 0 && (
                        <MarketNewsFilters
                            activeCategory={activeCategory}
                            setActiveCategory={(cat) => { setActiveCategory(cat); setCurrentPage(1); }}
                            categories={categories}
                        />
                    )}
                </div>

                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {isLoading ? (
                        <div className="col-span-full text-center py-24 text-emerald-600 font-semibold animate-pulse">
                            <Send className="inline w-6 h-6 mr-2 animate-bounce transform rotate-45" />
                            Fetching latest market intelligence...
                        </div>
                    ) : pagedNews.length > 0 ? (
                        pagedNews.map((news, idx) => <NewsCard key={idx} news={news} />)
                    ) : (
                        <div className="col-span-full text-center py-20 text-slate-500 border border-dashed border-slate-300 dark:border-slate-700 rounded-xl">
                            No news found in this category.
                        </div>
                    )}
                </div>

                <div className="mt-16 flex flex-wrap justify-center items-center gap-4">
                    {shouldShowPaginationControls && (
                        <>
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="flex items-center gap-1 px-5 py-2 text-sm font-bold rounded-lg transition disabled:opacity-50 bg-emerald-600 text-white hover:bg-emerald-700 shadow-md"
                            >
                                <ChevronLeft className='w-4 h-4' /> Prev
                            </button>
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                Page <span className='font-bold text-emerald-600'>{currentPage}</span> of {MAX_PAGES_TO_SHOW}
                            </span>
                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === MAX_PAGES_TO_SHOW}
                                className="flex items-center gap-1 px-5 py-2 text-sm font-bold rounded-lg transition disabled:opacity-50 bg-emerald-600 text-white hover:bg-emerald-700 shadow-md"
                            >
                                Next <ChevronRight className='w-4 h-4' />
                            </button>
                        </>
                    )}

                    {(shouldShowViewAll || (totalPages <= MAX_PAGES_TO_SHOW && totalPages > 0)) && (
                        <Link 
                            href="/view-all-news" 
                            className="flex items-center gap-2 px-6 py-2.5 text-base font-extrabold rounded-lg transition bg-emerald-100 text-emerald-800 border-2 border-emerald-600 hover:bg-emerald-200 dark:bg-emerald-900 dark:text-emerald-300"
                        >
                            View All News <ArrowRight className='w-5 h-5' />
                        </Link>
                    )}
                </div>
            </div>
            
            {/* Scrollbar hide style for mobile chips */}
            <style jsx>{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </section>
    );
};

export default MarketNewsSection;