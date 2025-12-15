"use client";

import { useState, useEffect, useCallback } from "react";
import { apiGet, apiPost, apiPut } from "../Service/axios";

export default function useAPI(path) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ========== GET API ==========
  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const result = await apiGet(path);
      setData(result);
      setError(null);
    } catch (err) {
      setError(err.message || "API Error");
    }
    setLoading(false);
  }, [path]);

  // ========== POST API ==========
  const create = async (body) => {
    try {
      const result = await apiPost(path, body);
      return result;
    } catch (err) {
      console.error("POST Error:", err);
      throw err;
    }
  };

  // ========== PUT API ==========
  const update = async (body) => {
    try {
      const result = await apiPut(path, body);
      return result;
    } catch (err) {
      console.error("PUT Error:", err);
      throw err;
    }
  };

  // ========== DELETE API ==========
  const remove = async () => {
    try {
      const result = await apiDelete(path);
      return result;
    } catch (err) {
      console.error("DELETE Error:", err);
      throw err;
    }
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    loading,
    error,
    refetch: fetchData,
    create,
    update,
    remove,
  };
}
