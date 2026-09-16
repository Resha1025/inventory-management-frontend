import Sidebar from "./Sidebar";

export default function AppLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}