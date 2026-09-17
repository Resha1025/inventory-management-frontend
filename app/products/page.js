"use client";

import { useState } from "react";
import AppLayout from "../components/AppLayout";

const initialProducts = [
  {
    id: 1,
    sku: "SKU-001",
    name: "Sample Product",
    category: "General",
    price: 100,
    stock: 25,
  },
  {
    id: 2,
    sku: "SKU-002",
    name: "Another Product",
    category: "General",
    price: 250,
    stock: 10,
  },
];

export default function ProductsPage() {
  const [products, setProducts] = useState(initialProducts);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.sku.toLowerCase().includes(search.toLowerCase())
  );

  function handleDelete(id) {
    setProducts(products.filter((product) => product.id !== id));
  }

  return (
    <AppLayout>
      <div className="p-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Products
            </h1>

            <p className="mt-2 text-gray-600">
              Manage your products and product information.
            </p>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="rounded-lg bg-gray-900 px-4 py-3 text-white hover:bg-gray-700"
          >
            Add Product
          </button>
        </div>

        {/* Search */}
        <div className="mt-8">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none focus:border-gray-900"
          />
        </div>

        {/* Product Table */}
        <div className="mt-6 overflow-hidden rounded-xl bg-white shadow-sm">
          <table className="w-full">
            <thead className="border-b border-gray-200 bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  SKU
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Product
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Category
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Price
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  Stock
                </th>

                <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredProducts.map((product) => (
                <tr
                  key={product.id}
                  className="border-b border-gray-100 last:border-0"
                >
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {product.sku}
                  </td>

                  <td className="px-6 py-4 font-medium text-gray-900">
                    {product.name}
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-600">
                    {product.category}
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-600">
                    ₱{product.price.toFixed(2)}
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-600">
                    {product.stock}
                  </td>

                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="text-sm text-red-600 hover:text-red-800"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}

              {filteredProducts.length === 0 && (
                <tr>
                  <td
                    colSpan="6"
                    className="px-6 py-12 text-center text-gray-500"
                  >
                    No products found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Add Product Modal */}
        {showModal && (
          <AddProductModal
            onClose={() => setShowModal(false)}
            onAdd={(product) => {
              setProducts([
                ...products,
                {
                  ...product,
                  id: Date.now(),
                },
              ]);

              setShowModal(false);
            }}
          />
        )}
      </div>
    </AppLayout>
  );
}

function AddProductModal({ onClose, onAdd }) {
  const [form, setForm] = useState({
    sku: "",
    name: "",
    category: "",
    price: "",
    stock: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    onAdd({
      sku: form.sku,
      name: form.name,
      category: form.category,
      price: Number(form.price),
      stock: Number(form.stock),
    });
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-xl">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">
            Add Product
          </h2>

          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-900"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            name="sku"
            placeholder="SKU"
            value={form.sku}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900"
          />

          <input
            name="name"
            placeholder="Product name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900"
          />

          <input
            name="category"
            placeholder="Category"
            value={form.category}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900"
          />

          <input
            name="price"
            type="number"
            step="0.01"
            placeholder="Price"
            value={form.price}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900"
          />

          <input
            name="stock"
            type="number"
            placeholder="Initial stock"
            value={form.stock}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900"
          />

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-gray-300 px-4 py-2 text-gray-700"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-lg bg-gray-900 px-4 py-2 text-white"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}