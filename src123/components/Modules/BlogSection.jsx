// components/Modules/BlogSection.jsx
"use client";

import React, { useState } from 'react';
// FIX: Correct path up two levels to reach the data folder
import { BLOG_POSTS, BLOG_CATEGORIES, slugify } from '../../data/Data';
import Link from 'next/link';

const BlogFilters = ({ activeCategory, setActiveCategory }) => {
    return (
        <div className="flex flex-wrap gap-2 text-xs sm:text-[13px]">
            {["All", ...BLOG_CATEGORIES].map((cat) => (
                <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`rounded-full px-3 py-1 font-medium transition ${activeCategory === cat
                            ? "bg-emerald-500 text-emerald-950"
                            : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
                        }`}
                >
                    {cat}
                </button>
            ))}
        </div>
    );
};

const BlogPostCard = ({ post }) => {
    return (
        // Link to the SEO-friendly Catch-All route
        <Link
            key={post.id}
            href={`/blog/${post.id}/${slugify(post.title)}`}
            className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white/80 p-0 shadow-sm shadow-slate-200 transition hover:-translate-y-1 hover:border-emerald-500/60 hover:shadow-emerald-500/20 cursor-pointer dark:border-slate-800 dark:bg-slate-950/80 dark:shadow-slate-950/60"
        >
            {/* FEATURED IMAGE */}
            <div className="relative w-full overflow-hidden">
                <img
                    src={post.imageUrl}
                    alt={`Featured image for ${post.title}`}
                    className="w-full h-40 object-cover rounded-t-2xl transition duration-300 group-hover:scale-105"
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/475569/white?text=Blog+Image" }}
                />
                <span className="absolute bottom-0 right-0 m-2 rounded-full bg-slate-950/70 px-2 py-0.5 text-[10px] font-semibold text-white backdrop-blur-sm">
                    {post.readTime}
                </span>
            </div>
            {/* END FEATURED IMAGE */}

            <div className="p-4 space-y-3">
                <div className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400">
                    <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-600 dark:text-emerald-300">
                        {post.category}
                    </span>
                    <span>•</span>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>By {post.author}</span>
                </div>

                <h3 className="text-[15px] font-semibold leading-snug text-slate-900 dark:text-slate-50">
                    {post.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-slate-600 dark:text-slate-400">
                    {post.excerpt}
                </p>
            </div>

            <div className="mt-4 p-4 pt-0 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                <span className="font-medium">Read More</span>
                <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 group-hover:text-emerald-700 dark:text-emerald-300 dark:group-hover:text-emerald-200">
                    View Details
                    <span className="transition-transform group-hover:translate-x-0.5">
                        →
                    </span>
                </div>
            </div>
        </Link>
    );
};


const BlogSection = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredPosts = BLOG_POSTS.filter((post) => {
        if (activeCategory === "All") return true;
        return post.category === activeCategory;
    });

    return (
        <section
            id="blogs"
            className="border-b border-slate-200/70 bg-slate-50 py-12 sm:py-16 dark:border-slate-800/70 dark:bg-slate-950"
        >
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl dark:text-slate-50">
                            Stock Market & Investing Blogs: Free Financial Education for Indian Investors.   </h2>
                        <p className="mt-1 max-w-xl text-sm text-slate-600 dark:text-slate-400">
                        Enhance your financial knowledge with Capital Mantra. Explore practical, easy-to-read articles on Investing Basics, Stock Market Strategies, Mutual Funds, and Indian Tax Regulations.
                        </p>
                    </div>
                    <BlogFilters
                        activeCategory={activeCategory}
                        setActiveCategory={setActiveCategory}
                    />
                </div>

                <div className="mt-6 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredPosts.map((post) => (
                        <BlogPostCard key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;