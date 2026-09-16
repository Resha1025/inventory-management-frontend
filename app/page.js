import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 p-6 text-white">
        <h1 className="mb-8 text-xl font-bold">
          Inventory System
        </h1>

        <nav className="space-y-3">
          <Link
            href="/"
            className="block rounded-lg bg-gray-700 px-4 py-3"
          >
            Dashboard
          </Link>

          <Link
            href="/products"
            className="block rounded-lg px-4 py-3 hover:bg-gray-800"
          >
            Products
          </Link>

          <Link
            href="/inventory"
            className="block rounded-lg px-4 py-3 hover:bg-gray-800"
          >
            Inventory
          </Link>

          <Link
            href="/sales"
            className="block rounded-lg px-4 py-3 hover:bg-gray-800"
          >
            Sales
          </Link>

          <Link
            href="/purchasing"
            className="block rounded-lg px-4 py-3 hover:bg-gray-800"
          >
            Purchasing
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h2 className="text-3xl font-bold text-gray-900">
          Dashboard
        </h2>

        <p className="mt-2 text-gray-600">
          Welcome to your Inventory Management System.
        </p>

        {/* Summary Cards */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <SummaryCard
            title="Total Products"
            value="0"
          />

          <SummaryCard
            title="Total Sales"
            value="₱0.00"
          />

          <SummaryCard
            title="Low Stock Items"
            value="0"
          />
        </div>
      </main>
    </div>
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