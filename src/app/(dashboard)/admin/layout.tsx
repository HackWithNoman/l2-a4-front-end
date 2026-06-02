import { Sidebar } from "@/components/admin/Sidebar";
import ProtectedRoute from "@/components/ProtectedRoute";

function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedRoute allowedRoles={["ADMIN"]}>
      <div className="flex h-screen w-screen overflow-hidden bg-background">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-8">{children}</main>
      </div>
    </ProtectedRoute>
  );
}

export default AdminLayout;
