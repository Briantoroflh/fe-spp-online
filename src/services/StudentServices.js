import { API } from "../utils/api";

// Student Management Services
export async function getStudents() {
    const res = await API.get("/students");
    return res.data;
}

export async function getStudent(uuid) {
    const res = await API.get(`/students/${uuid}`);
    return res.data;
}

export async function createStudent(studentData) {
    const res = await API.post("/students", studentData);
    return res.data;
}

export async function updateStudent(uuid, studentData) {
    const res = await API.put(`/students/${uuid}`, studentData);
    return res.data;
}

export async function deleteStudent(uuid) {
    const res = await API.delete(`/students/${uuid}`);
    return res.data;
}

// Dashboard Student Management (Admin only)
export async function getDashboardStudents() {
    const res = await API.get("/dashboard/student");
    return res.data;
}

export async function getDashboardStudent(uuid) {
    const res = await API.get(`/dashboard/student/${uuid}`);
    return res.data;
}

export async function createDashboardStudent(studentData) {
    const res = await API.post("/dashboard/student", studentData);
    return res.data;
}

export async function updateDashboardStudent(uuid, studentData) {
    const res = await API.put(`/dashboard/student/${uuid}`, studentData);
    return res.data;
}

export async function deleteDashboardStudent(uuid) {
    const res = await API.delete(`/dashboard/student/${uuid}`);
    return res.data;
}