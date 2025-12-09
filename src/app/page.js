// app/page.js
"use client";

import React from "react";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import Hero from "../components/Modules/Hero";
import IpoSection from "../components/Modules/IpoSection";
import BlogSection from "../components/Modules/BlogSection";
import CalculatorSection from "../components/Modules/CalculatorSectionInfo";
import NewsletterSection from "../components/Modules/NewsletterSection";
import WhyIpoMatters from "../components/Modules/WhyIpoMatters";
import AboutSection from "@/components/Modules/AboutUs";

// Note: No need for activeView/detailData state here anymore!
// The page itself only renders the dashboard content.

const Dashboard = () => {

    // Function to ensure Navbar links work, although smooth scrolling is client-side
    const goHome = (e) => {
        if (e) e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div id="fin-ipo-hub" className="min-h-screen font-sans">
            <Navbar goHome={goHome} />
            <main>
                <Hero />
                {/* navigateToDetail is no longer needed, components will use <Link> */}
                <IpoSection />
                <WhyIpoMatters />
                <BlogSection />
                <CalculatorSection />
                <AboutSection />
                <NewsletterSection />
            </main>
            <Footer />
        </div>
    );
};

export default Dashboard;