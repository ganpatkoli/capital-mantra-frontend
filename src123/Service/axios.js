import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000/api",
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 10000, // 10 seconds
});

export default api;


// import api from "./axiosInstance";

// ========= GET ==========
export async function apiGet(path) {
    try {
        const res = await api.get(`/${path}`);
        return res.data;
    } catch (error) {
        console.error("GET API Error:", error);
        throw error;
    }
}

// ========= POST ==========
export async function apiPost(path, body) {
    try {
        const res = await api.post(`/${path}`, body);
        return res.data;
    } catch (error) {
        console.error("POST API Error:", error);
        throw error;
    }
}

// ========= PUT ==========
export async function apiPut(path, body) {
    try {
        const res = await api.put(`/${path}`, body);
        return res.data;
    } catch (error) {
        console.error("PUT API Error:", error);
        throw error;
    }
}

// ========= DELETE ==========
export async function apiDelete(path) {
    try {
        const res = await api.delete(`/${path}`);
        return res.data;
    } catch (error) {
        console.error("DELETE API Error:", error);
        throw error;
    }
}
