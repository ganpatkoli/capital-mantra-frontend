// components/Modules/MarketNewsSection.jsx
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
// Icons for visual hierarchy
import { Send, Clock, BookOpen, ChevronLeft, ChevronRight, TrendingUp, Filter } from 'lucide-react';

const DEFAULT_LIMIT = 9;

// API functions (omitted for brevity, assume fetchNews is the same)
const fetchNews = async (page, limit) => {
    try {
        const response = await axios.get(`http://localhost:5000/api/news?page=${page}&limit=${limit}`);
        const data = response.data;
        return data || { news: [], totalPages: 1, totalItems: 0 };
    } catch (error) {
        console.error("Error fetching news data:", error);
        return { news: [], totalPages: 1, totalItems: 0 };
    }
};

const extractCategories = (data) => {
    const categories = new Set();
    data.news.forEach(item => {
        if (item.category) {
            categories.add(item.category);
        }
    });
    return Array.from(categories).sort();
};

// ----------------------------------------------------------------------

const MarketNewsFilters = ({ activeCategory, setActiveCategory, categories }) => {
    const filterCategories = ["All", ...categories];

    return (
        <div className="mt-6 flex flex-wrap gap-3 items-center p-4 bg-slate-100/50 rounded-lg border border-slate-200 dark:bg-slate-800 dark:border-slate-700">
             <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1">
                 <Filter className="w-4 h-4 text-emerald-600" />
                 Sectors:
             </span>
            {filterCategories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    // Filters: Flat, clean look with strong text contrast
                    className={`rounded-lg px-4 py-1.5 font-semibold text-sm transition duration-200 border ${activeCategory === cat
                            ? "bg-emerald-600 border-emerald-700 text-white shadow-sm shadow-emerald-500/50" // Active: Solid background
                            : "bg-white border-slate-300 text-slate-800 hover:bg-emerald-50 hover:border-emerald-500 dark:bg-slate-700 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-600" // Inactive: Minimal border
                        }`}
                >
                    {cat}
                </button>
            ))}
        </div>
    );
};

const NewsCard = ({ news }) => {
    const formattedDate = new Date(news.date).toLocaleTimeString('en-IN', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    return (
        <Link
            key={news.title}
            href={news.link}
            target="_blank"
            rel="noopener noreferrer"
            // Card: Border-only appearance, no shadow, subtle color line on hover
            className="group flex flex-col rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:border-emerald-500 dark:border-slate-700 dark:bg-slate-900 overflow-hidden"
        >
            {/* Minimalist Top Bar: Only Meta Data */}
            <div className="p-4 flex flex-col space-y-2">

                {/* Category Tag & Source (Top Line) */}
                <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="inline-flex items-center rounded-full bg-emerald-600/90 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white shadow-md">
                        {news.category || "General"}
                    </span>
                    <span className="text-slate-500 dark:text-slate-400">
                        {news.news_source || news.source}
                    </span>
                </div>
                
                {/* Vertical Separator for Visual Break */}
                <div className="w-8 h-0.5 bg-emerald-500 mt-2 rounded-full"></div>

                {/* Title (Headline) - Clean Typography */}
                <h3 className="text-xl font-bold leading-snug text-slate-900 group-hover:text-emerald-600 transition dark:text-white">
                    {news.title}
                </h3>
            </div>

            {/* Summary (Body text) - Main Content */}
            <div className="px-4 pt-0 pb-4 flex-grow">
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {news.summary || "No detailed summary available. Click to read the full article."}
                </p>
            </div>

            {/* Bottom Footer Bar (Date & Link) - Separated by a thin line */}
            <div className="mt-auto border-t border-slate-100 dark:border-slate-800 p-4 bg-slate-50 dark:bg-slate-900/80">
                <div className="flex items-center justify-between text-sm font-medium">
                    <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                        <Clock className='w-4 h-4 text-emerald-500' />
                        {formattedDate}
                    </span>

                    {/* Link: Simple green text link on hover */}
                    <div className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 transition-all duration-200">
                        Read More
                        <BookOpen className='w-4 h-4 transition-transform group-hover:translate-x-0.5' />
                    </div>
                </div>
            </div>
        </Link>
    );
};


const MarketNewsSection = () => {
    // ... (State management logic remains the same) ...

    const [allNews, setAllNews] = useState([]);
    const [activeCategory, setActiveCategory] = useState("All");
    const [categories, setCategories] = useState([]);

    // Pagination State
    const [pagedNews, setPagedNews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    const [filteredNews, setFilteredNews] = useState([]);

    // --- EFFECT 1: Load data from API ---
    useEffect(() => {
        const loadNews = async () => {
            setIsLoading(true);
            const apiData = await fetchNews(1, 500);

            if (apiData.news && apiData.news.length > 0) {
                setAllNews(apiData.news);
                setCategories(extractCategories(apiData));
            } else {
                 setAllNews([]);
                 setCategories([]);
            }
            setIsLoading(false);
        };
        loadNews();
    }, []);

    // --- EFFECT 2: Filter and Page on state change ---
    useEffect(() => {
        const filtered = allNews.filter((news) => {
            if (activeCategory === "All") return true;
            return news.category === activeCategory; 
        });

        const startIndex = (currentPage - 1) * DEFAULT_LIMIT;
        const endIndex = currentPage * DEFAULT_LIMIT;

        const paged = filtered.slice(startIndex, endIndex);

        setFilteredNews(filtered);
        setPagedNews(paged);
        setTotalPages(Math.ceil(filtered.length / DEFAULT_LIMIT));

    }, [activeCategory, allNews, currentPage]);


    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
            document.getElementById('market-news').scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section
            id="market-news"
            // Section Background: Very light for contrast
            className="border-b border-slate-200/70 bg-white py-20 sm:py-28 dark:border-slate-800/70 dark:bg-slate-950"
        >
            {/* Full Width Header Container (Outside main content div) */}
            <div className=" text-center max-7xl mb-12">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className='max-w-7xl'>
                        {/* Title: Full Width, Strong visual impact */}
                        <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                            <TrendingUp className="inline w-8 h-8 mr-3 text-emerald-600" />
                            Financial News Digest: Real-Time Headlines
                        </h2>
                        <p className="mt-2 text-lg text-slate-600 dark:text-slate-400">
                            Breaking headlines and curated intelligence from India's key financial sectors.
                        </p>
                    </div>
                </div>
            </div>
            
            {/* Main Content & Filters Container */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                
                {/* Filters Section (Moved Down) */}
                <div className="mb-12">
                    {!isLoading && allNews.length > 0 && (
                        <MarketNewsFilters
                            activeCategory={activeCategory}
                            setActiveCategory={(cat) => {
                                setActiveCategory(cat);
                                setCurrentPage(1); 
                            }}
                            categories={categories}
                        />
                    )}
                </div>

                {/* News Grid (Content Area) */}
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {isLoading ? (
                        <div className="col-span-full text-center py-24 text-emerald-600 font-semibold text-lg animate-pulse">
                            <Send className="inline w-6 h-6 mr-2 animate-bounce transform rotate-45" />
                            Fetching latest market intelligence...
                        </div>
                    ) : pagedNews.length > 0 ? (
                        pagedNews.map((news, index) => (
                            <NewsCard key={index} news={news} /> 
                        ))
                    ) : (
                        <div className="col-span-full text-center py-20 text-slate-500 border border-dashed border-slate-300 dark:border-slate-700 rounded-xl p-6">
                            No news found in the selected category or on this page.
                        </div>
                    )}
                </div>

                {/* Pagination Controls */}
                {pagedNews.length > 0 && totalPages > 1 && (
                    <div className="mt-16 flex justify-center items-center gap-4">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="flex items-center gap-1 px-6 py-2 text-base font-semibold rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed bg-emerald-600 text-white hover:bg-emerald-700 shadow-md"
                        >
                            <ChevronLeft className='w-4 h-4' /> Previous
                        </button>
                        
                        <span className="text-lg font-medium text-slate-700 dark:text-slate-300">
                            Page <span className='font-extrabold text-emerald-600 dark:text-emerald-400'>{currentPage}</span> of {totalPages}
                        </span>

                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="flex items-center gap-1 px-6 py-2 text-base font-semibold rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed bg-emerald-600 text-white hover:bg-emerald-700 shadow-md"
                        >
                            Next <ChevronRight className='w-4 h-4' />
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default MarketNewsSection;