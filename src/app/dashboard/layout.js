import SidebarDashboard from "~/components/core/SidebarDashboard";

export default function DashboardLayout({ children }) {
    return (
      <html lang="en">
        <body>
            <div className="grid grid-cols-12">
                <div className="col-span-3 px-14 py-10 h-[100vh] bg-gray-100">
                    <SidebarDashboard />
                </div>
                <div className="col-span-9 h-[100vh]">
                    {children}
                </div>
            </div>
        </body>
      </html>
    );
  }