import AppLayout from "./components/AppLayout";

export default function Home() {
  return (
    <AppLayout>
      <div className="p-8">
        <h2 className="text-3xl font-bold text-gray-900">
          Dashboard
        </h2>

        <p className="mt-2 text-gray-600">
          Welcome to your Inventory Management System.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <SummaryCard title="Total Products" value="0" />
          <SummaryCard title="Total Sales" value="₱0.00" />
          <SummaryCard title="Low Stock Items" value="0" />
        </div>
      </div>
    </AppLayout>
  );
}

function SummaryCard({ title, value }) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm">
      <p className="text-sm text-gray-500">{title}</p>

      <h3 className="mt-3 text-3xl font-bold text-gray-900">
        {value}
      </h3>
    </div>
  );
}