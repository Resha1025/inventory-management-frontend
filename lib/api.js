const API_URL = "http://localhost:5000/api";

export async function getProducts() {
  const response = await fetch(`${API_URL}/products`);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const result = await response.json();

  return result.data;
}

export async function createProduct(product) {
  const response = await fetch(`${API_URL}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Failed to create product");
  }

  return result.data;
}