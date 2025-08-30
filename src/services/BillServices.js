export async function GetAllBills() {
    const res = await API.get("/bills");
    return res.data;
}

export async function GetBill(id) {
    const res = await API.get(`/bills/${id}`);
    return res.data;
}

export async function CreateBill(StudentId, sppId, month, year, amount) {
    const res = await API.post("/bills", {StudentId, sppId, month, year, amount});
    return res.data;
}

export async function UpdateBill(id, data) {}

export async function DeleteBill(id) {}