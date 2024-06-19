import axios from "axios";

const instance = axios.create({
    baseURL: "https://taller12-13.onrender.com/api/v1/",
    withCredentials: true,
});

export default instance