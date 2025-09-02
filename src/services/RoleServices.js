import { API } from "../utils/api";

// Role Management Services
export async function getRoles() {
    const res = await API.get("/roles");
    return res.data;
}

export async function getRole(uuid) {
    const res = await API.get(`/roles/${uuid}`);
    return res.data;
}

export async function createRole(roleData) {
    const res = await API.post("/roles", roleData);
    return res.data;
}

export async function updateRole(uuid, roleData) {
    const res = await API.put(`/roles/${uuid}`, roleData);
    return res.data;
}

export async function deleteRole(uuid) {
    const res = await API.delete(`/roles/${uuid}`);
    return res.data;
}

// Dashboard Role Management (Admin only)
export async function getDashboardRoles() {
    const res = await API.get("/dashboard/role");
    return res.data;
}

export async function getDashboardRole(uuid) {
    const res = await API.get(`/dashboard/role/${uuid}`);
    return res.data;
}

export async function createDashboardRole(roleData) {
    const res = await API.post("/dashboard/role", roleData);
    return res.data;
}

export async function updateDashboardRole(uuid, roleData) {
    const res = await API.put(`/dashboard/role/${uuid}`, roleData);
    return res.data;
}

export async function deleteDashboardRole(uuid) {
    const res = await API.delete(`/dashboard/role/${uuid}`);
    return res.data;
}