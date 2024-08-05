import axios from "axios";

const baseURL = "http://localhost:5000"; // ใช้ baseURL แทน baseUrL
const instance = axios.create({
  baseURL: baseURL, // เปลี่ยน baseUrL เป็น baseURL
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
