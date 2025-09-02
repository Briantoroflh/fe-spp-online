import { API } from "../utils/api";

// Bill Management
export async function getBills() {
    const res = await API.get("/bills");
    return res.data;
}

export async function getBill(id) {
    const res = await API.get(`/bills/${id}`);
    return res.data;
}

export async function createBill(billData) {
    const res = await API.post("/bills", billData);
    return res.data;
}

export async function updateBill(id, billData) {
    const res = await API.put(`/bills/${id}`, billData);
    return res.data;
}

export async function deleteBill(id) {
    const res = await API.delete(`/bills/${id}`);
    return res.data;
}

// Current Bill Management
export async function getCurrentBills() {
    const res = await API.get("/current-bills");
    return res.data;
}

export async function getCurrentBill(id) {
    const res = await API.get(`/current-bills/${id}`);
    return res.data;
}

export async function getCurrentBillByUuid(uuid) {
    const res = await API.get(`/student/current-bill/${uuid}`);
    return res.data;
}

export async function createCurrentBill(currentBillData) {
    const res = await API.post("/current-bills", currentBillData);
    return res.data;
}

export async function updateCurrentBill(id, currentBillData) {
    const res = await API.put(`/current-bills/${id}`, currentBillData);
    return res.data;
}

export async function deleteCurrentBill(id) {
    const res = await API.delete(`/current-bills/${id}`);
    return res.data;
}

// Detail Bill Management
export async function getDetailBills() {
    const res = await API.get("/detail-bills");
    return res.data;
}

export async function getDetailBill(id) {
    const res = await API.get(`/detail-bills/${id}`);
    return res.data;
}

export async function getDetailBillByUuid(uuid) {
    const res = await API.get(`/student/detail-bill/${uuid}`);
    return res.data;
}

export async function createDetailBill(detailBillData) {
    const res = await API.post("/detail-bills", detailBillData);
    return res.data;
}

export async function updateDetailBill(id, detailBillData) {
    const res = await API.put(`/detail-bills/${id}`, detailBillData);
    return res.data;
}

export async function deleteDetailBill(id) {
    const res = await API.delete(`/detail-bills/${id}`);
    return res.data;
}

// Dashboard Bill Management (for TU role)
export async function getDashboardBills() {
    const res = await API.get("/dashboard/manage/bill");
    return res.data;
}

export async function getDashboardBill(id) {
    const res = await API.get(`/dashboard/manage/bill/${id}`);
    return res.data;
}

export async function createDashboardBill(billData) {
    const res = await API.post("/dashboard/manage/bill", billData);
    return res.data;
}

export async function updateDashboardBill(id, billData) {
    const res = await API.put(`/dashboard/manage/bill/${id}`, billData);
    return res.data;
}

export async function deleteDashboardBill(id) {
    const res = await API.delete(`/dashboard/manage/bill/${id}`);
    return res.data;
}

// Dashboard Detail Bill Management (for TU role)
export async function getDashboardDetailBills() {
    const res = await API.get("/dashboard/manage/detail-bill");
    return res.data;
}

export async function createDashboardDetailBill(detailBillData) {
    const res = await API.post("/dashboard/manage/detail-bill", detailBillData);
    return res.data;
}

export async function updateDashboardDetailBill(id, detailBillData) {
    const res = await API.put(`/dashboard/manage/detail-bill/${id}`, detailBillData);
    return res.data;
}

export async function deleteDashboardDetailBill(id) {
    const res = await API.delete(`/dashboard/manage/detail-bill/${id}`);
    return res.data;
}