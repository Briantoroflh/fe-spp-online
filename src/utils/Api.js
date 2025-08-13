import axios from "axios";
import { getToken } from "./Cookies";

const token = getToken();

export const API = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
    headers: {
        "Accept" : "application/json",
        "Authorization" :  `Bearer ${token}`
    }
})



