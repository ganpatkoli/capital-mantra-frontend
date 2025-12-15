// 'use client';
import axios from "axios";
  export const baseURL = "http://localhost:5000/api";


const API = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// GET with params
export const apiGet = async (path, params = {}) => {
  const res = await API.get(`/${path}`, { params });
  return res.data;
};

// POST
export const apiPost = async (path, body = {}, params = {}) => {
  const res = await API.post(`/${path}`, body, { params });
  return res.data;
};

// PUT
export const apiPut = async (path, body = {}, params = {}) => {
  const res = await API.put(`/${path}`, body, { params });
  return res.data;
};

// DELETE
export const apiDelete = async (path, params = {}) => {
  const res = await API.delete(`/${path}`, { params });
  return res.data;
};
