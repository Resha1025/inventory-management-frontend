import AppLayout from "../components/AppLayout";

export default function ProductsPage() {
  return (
    <AppLayout>
      <div className="p-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Products
            </h1>

            <p className="mt-2 text-gray-600">
              Manage your products and product information.
            </p>
          </div>

          <button className="rounded-lg bg-gray-900 px-4 py-3 text-white hover:bg-gray-700">
            Add Product
          </button>
        </div>

        <div className="mt-8 rounded-xl bg-white p-6 shadow-sm">
          <p className="text-gray-500">
            No products available yet.
          </p>
        </div>
      </div>
    </AppLayout>
  );
}