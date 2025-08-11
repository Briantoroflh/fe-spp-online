import { API } from "../utils/api";

export async function Login(email, password) {
    const res = await API.post("/login", {email, password})
    return res.data
}