// src/app/ipo/layout.js

export default function IpoLayout({ children }) {
    // This layout simply wraps all pages under /blog/ (i.e., [id]/page.js)
    return <div>{children}</div>;
}