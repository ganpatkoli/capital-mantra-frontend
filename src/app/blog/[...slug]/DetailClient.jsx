"use client";

import BlogDetailView from "../../../components/Modules/BlogDetailView";
import Navbar from "../../../components/Layout/Navbar";
import Footer from "../../../components/Layout/Footer";
import { BLOG_POSTS } from "../../../data/Data";

export default function BlogDetailClient({ slug }) {
    const id = Number(slug[0]);
    const post = BLOG_POSTS.find(p => p.id === id);

    return (
        <>
            <Navbar />
            <BlogDetailView post={post} />
            <Footer />
        </>
    );
}
