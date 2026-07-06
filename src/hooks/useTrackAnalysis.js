import { useState } from "react";
import { analyzeSong } from "../services/api";

export const useTrackAnalysis = () => {
  const [url, setUrl] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [result, setResult] = useState(null);

  const analyze = async () => {
    if (!url.trim()) {
      setError("Please paste a music link.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const data = await analyzeSong(url);

      setResult(data);
    } catch (err) {
      console.error(err);

      setError(
        err.response?.data?.message ||
        "Failed to analyze song."
      );
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setUrl("");
    setResult(null);
    setError("");
  };

  return {
    url,
    setUrl,

    loading,

    error,

    result,

    analyze,

    reset,
  };
};