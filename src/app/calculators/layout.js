// src/app/blog/layout.js

import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";

export default function BlogLayout({ children }) {
    // This layout simply wraps all pages under /blog/ (i.e., [id]/page.js)
    return <div>
        <Navbar />

        {children}
        <Footer />
    </div>;
}