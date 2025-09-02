import { API } from "../utils/api";

// Officer Management Services
export async function getOfficers() {
    const res = await API.get("/officers");
    return res.data;
}

export async function getOfficer(uuid) {
    const res = await API.get(`/officers/${uuid}`);
    return res.data;
}

export async function createOfficer(officerData) {
    const res = await API.post("/officers", officerData);
    return res.data;
}

export async function updateOfficer(uuid, officerData) {
    const res = await API.put(`/officers/${uuid}`, officerData);
    return res.data;
}

export async function deleteOfficer(uuid) {
    const res = await API.delete(`/officers/${uuid}`);
    return res.data;
}

// Dashboard Officer Management (Admin only)
export async function getDashboardOfficers() {
    const res = await API.get("/dashboard/officer");
    return res.data;
}

export async function getDashboardOfficer(uuid) {
    const res = await API.get(`/dashboard/officer/${uuid}`);
    return res.data;
}

export async function createDashboardOfficer(officerData) {
    const res = await API.post("/dashboard/officer", officerData);
    return res.data;
}

export async function updateDashboardOfficer(uuid, officerData) {
    const res = await API.put(`/dashboard/officer/${uuid}`, officerData);
    return res.data;
}

export async function deleteDashboardOfficer(uuid) {
    const res = await API.delete(`/dashboard/officer/${uuid}`);
    return res.data;
}