// app/blog/[...slug]/page.js
"use client";
import Navbar from '../../../components/Layout/Navbar';
import Footer from '../../../components/Layout/Footer';
import IpoDetailView from '../../../components/Modules/IpoDetailView';
import { IPO_LIST } from '../../../data/Data';
import ClientBackButton from '../../../UI/ClientBackButton';

// ---------- Metadata ----------
// export async function generateMetadata({ params }) {
//     const resolved = await params;           // 🔥 FIX
//     const slugArray = resolved.slug || [];
//     const id = Number(slugArray[0]);

//     const post = IPO_LIST.find(p => p.id === id);

//     return {
//         title: post ? post.title : "Blog Post",
//         description: post ? post.excerpt : "Default description",
//     };
// }

// ---------- PAGE ----------
export default async function IpoDetailPageDetail(props) {

    const params = await props.params;       // 🔥🔥 MAIN FIX HERE

    console.log("🔥 RESOLVED PARAMS:", params);

    const slugArray = Array.isArray(params.slug) ? params.slug : [];
    console.log("🔥 SLUG ARRAY:", slugArray);

    const id = Number(slugArray[0]);
    const post = IPO_LIST.find(p => p.id === id);

    if (!post) {
        return (
            <div className="min-h-screen pt-40 text-center bg-slate-50 dark:bg-slate-950">
                <h1 className="text-3xl font-bold text-red-500">404 - Blog Not Found</h1>
            </div>
        );
    }



    console.log("postpostpostpost", post)
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
            <Navbar />
            <IpoDetailView
                ipo={post}
                goBackNode={<ClientBackButton />}
            />
            <Footer />
        </div>
    );
}
