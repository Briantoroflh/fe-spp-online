import React from "react";
import { Card, CardSection } from "../components/Card";
import DashboardLayout from "../layouts/DashboardLayout";
import { Chart } from "../components/Chart";
import { data } from "react-router-dom";

function Dashboard() {
  const barData = {
    labels: ["Red", "Blue", "Yellow", "Green"],
    datasets: [
      {
        label: "Votes",
        data: [12, 19, 3, 5],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
  };

  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-4">
        <CardSection
          icon={<i className="ri-user-fill"></i>}
          total={200}
          title={"Total Siswa"}
          amount={200}
          limit={600}
          url=""
        />
        <CardSection
          icon={<i class="ri-bill-fill"></i>}
          total={200}
          title={"Tunggakan"}
          percentage={"50%"}
          amount={200}
          limit={300}
        />
        <CardSection
          icon={<i class="ri-arrow-down-long-line"></i>}
          total={200}
          title={"Pemasukan"}
          percentage={"50%"}
          amount={200}
          limit={300}
        />
      </div>

      <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <h1 className="text-md font-bold text-blue-500">Semua Transaksi</h1>
          <p className="text-sm text-neutral-400">
            Perhatikan semua transaksi hari ini
          </p>
          <div>
            <Chart type="bar" data={barData} options={options} />
          </div>
        </Card>
        <Card>
          <h1 className="text-md font-bold text-blue-500">
            Pendataan Murid Baru
          </h1>
          <div className="mt-4">
            <Chart type="pie" data={barData} options={options} />
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
