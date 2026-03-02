import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Sidebar />
      <main className="ml-52 pt-14 p-6 min-h-screen">{children}</main>
    </div>
  );
}
