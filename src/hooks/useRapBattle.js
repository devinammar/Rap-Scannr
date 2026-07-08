import { useState, useEffect } from "react";
import { compareSongs } from "../services/api";

export const useRapBattle = (submittedUrls) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (!submittedUrls?.url1 || !submittedUrls?.url2) return;
    const run = async () => {
      try {
        setLoading(true);
        setError("");
        const data = await compareSongs(submittedUrls.url1, submittedUrls.url2);
        setResult(data);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to compare songs.");
      } finally {
        setLoading(false);
      }
    };
    run();
  }, [submittedUrls]);

  return { result, loading, error };
};

// _______________________________________________________________

// ini yg lama

// import { useState } from "react";
// import { compareSongs } from "../services/api";

// export const useRapBattle = () => {
//   const [url1, setUrl1] = useState("");

//   const [url2, setUrl2] = useState("");

//   const [loading, setLoading] = useState(false);

//   const [error, setError] = useState("");

//   const [result, setResult] = useState(null);

//   const compare = async () => {
//     if (!url1.trim() || !url2.trim()) {
//       setError("Please paste two music links.");
//       return;
//     }

//     try {
//       setLoading(true);
//       setError("");

//       const data = await compareSongs(url1, url2);

//       setResult(data);
//     } catch (err) {
//       console.error(err);

//       setError(
//         err.response?.data?.message ||
//         "Failed to compare songs."
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   const reset = () => {
//     setUrl1("");
//     setUrl2("");

//     setResult(null);

//     setError("");
//   };

//   return {
//     url1,
//     setUrl1,

//     url2,
//     setUrl2,

//     loading,

//     error,

//     result,

//     compare,

//     reset,
//   };
// };