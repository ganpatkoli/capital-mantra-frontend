"use client";

import { useState, useEffect, useCallback } from "react";
import { apiGet, apiPost, apiPut, apiDelete } from "../Service/axios";

export default function useAPI(path, params = {}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // GET
  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const result = await apiGet(path, params);
      setData(result);
      setError(null);
    } catch (err) {
      setError(err.message || "API Error");
    }
    setLoading(false);
  }, [path, JSON.stringify(params)]);

  // POST
  const create = async (body = {}, extraParams = {}) => {
    return await apiPost(path, body, extraParams);
  };

  // PUT
  const update = async (body = {}, extraParams = {}) => {
    return await apiPut(path, body, extraParams);
  };

  // DELETE
  const remove = async (extraParams = {}) => {
    return await apiDelete(path, extraParams);
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
