// ❌ DO NOT PUT "use client" HERE (Server Component)

import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import IpoDetailView from "@/components/Modules/IpoDetailView";
import ClientBackButton from "@/UI/ClientBackButton";
import { IPO_LIST } from "@/data/Data";
import axios from "axios";
import { baseURL } from "@/Service/axios";

export default async function IpoDetailPageDetail(props) {

    const resolved = await props.params;
    const slugs = resolved.slug;

    const id = Number(slugs?.[0]);
    const slug = slugs?.[1];
    let mainData = null; // final usable data
    let gmpData = null; // final usable data

    try {
        // console.log("---------------", `${baseURL}/ipo/detail/${slug}/${id}`)
        const response = await axios.get(`${baseURL}/ipo/detail/${slug}/${id}`);
        const response2 = await axios.get(`${baseURL}/ipo/gmp/${id}`);

        console.log("SERVER API RAW:", response2);

        // ⭐ FIX — only send response.data, NOT full axios object
        mainData = response.data;
        gmpData = response2.data;

        // console.log("SERVER API DATA:", mainData);

    } catch (error) {
        console.log("Server → API Error:", error);
    }

    const fallback = IPO_LIST.find((p) => p.id === id);

    if (!mainData && !fallback) {
        return (
            <div className="min-h-screen pt-40 text-center bg-slate-50 dark:bg-slate-950">
                <h1 className="text-3xl font-bold text-red-500">404 - IPO Not Found</h1>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
            <Navbar />

            <IpoDetailView
                // ipo={fallback}
                apiReponse={mainData}  // ⭐ Now this will be visible inside your component
                goBack={<ClientBackButton />}
                gmpApiResponse={gmpData}
                id={id}
                slug={slug}
            />

            <Footer />
        </div>
    );
}
