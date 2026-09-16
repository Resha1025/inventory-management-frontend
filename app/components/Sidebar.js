import Link from "next/link";

const menuItems = [
  { name: "Dashboard", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Inventory", href: "/inventory" },
  { name: "Sales", href: "/sales" },
  { name: "Purchasing", href: "/purchasing" },
];

export default function Sidebar() {
  return (
    <aside className="min-h-screen w-64 bg-gray-900 p-6 text-white">
      <h1 className="mb-8 text-xl font-bold">
        Inventory System
      </h1>

      <nav className="space-y-3">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block rounded-lg px-4 py-3 hover:bg-gray-800"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}