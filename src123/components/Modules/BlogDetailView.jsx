// components/Modules/BlogDetailView.jsx
"use client";
import React from 'react';
import BackButton from '../../UI/BackButton';

const BlogDetailView = ({ post, goBack }) => {
    console.log("------------" , post)
    return (
        <section className="py-12 sm:py-16 bg-slate-50 dark:bg-slate-950">
            <div className="mx-auto max-w-4xl px-4 sm:px-6">
                <BackButton onClick={goBack} />

                <header className="mt-4 border-b pb-6 border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                        <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-600 dark:text-emerald-300">
                            {post.category}
                        </span>
                        <span>•</span>
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                    </div>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
                        {post.title}
                    </h1>
                    <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
                        By <span className="font-semibold text-slate-900 dark:text-slate-50">{post.author}</span>
                    </p>
                </header>

                {/* FEATURED IMAGE for Blog Detail */}
                <div className="mt-6 w-full overflow-hidden rounded-xl shadow-lg border border-slate-200 dark:border-slate-800">
                    <img 
                        src={post.imageUrl} 
                        alt={post.title} 
                        className="w-full h-auto object-cover" 
                        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/800x450/475569/white?text=Blog+Image+Not+Found" }}
                    />
                </div>
                {/* END FEATURED IMAGE */}

                <div className="mt-8 space-y-6 text-slate-700 dark:text-slate-300">
                    {post.content.map((paragraph, index) => (
                        <p key={index} className="text-[15px] leading-relaxed" dangerouslySetInnerHTML={{ __html: paragraph }} />
                    ))}
                </div>
                
                <div className="mt-12 pt-6 border-t border-slate-200 dark:border-slate-800">
                    <p className="text-sm text-slate-500">
                        We hope this deep dive helps you make better-informed decisions. For more detailed analysis, consider subscribing to our premium alerts.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default BlogDetailView;