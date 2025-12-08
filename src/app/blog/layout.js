// src/app/blog/layout.js

export default function BlogLayout({ children }) {
    // This layout simply wraps all pages under /blog/ (i.e., [id]/page.js)
    return <div>{children}</div>;
}