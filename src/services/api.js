import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000",
  timeout: 300000,
});

export const analyzeSong = async (url) => {
  const response = await API.post("/api/analyze", { url });
  return response.data;
};

export const compareSongs = async (url1, url2) => {
  const response = await API.post("/api/compare", { url1, url2 });
  return response.data;
};

export default API;

// ________________________________________________________________

// ini yg lama

// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://localhost:3000",
//   timeout: 300000,
// });

// export const analyzeSong = async (url) => {
//   const response = await API.post("/analyze", {
//     url,
//   });

//   return response.data;
// };

// export const compareSongs = async (url1, url2) => {
//   const response = await API.post("/compare", {
//     url1,
//     url2,
//   });

//   return response.data;
// };

// export default API;