import axios from "axios";

const baseUrL = "http://localhost:5000";
const instance = axios.create({
  baseUrL: baseUrL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
