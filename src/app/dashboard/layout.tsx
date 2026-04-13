import { AdminSideBar } from "@/app/To-use-components/SideBarToUse";
import {
  Sidebar,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Link } from "lucide-react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" ">
      <SidebarProvider>
        <AdminSideBar />
        <main>{children}</main>
      </SidebarProvider>
    </div>
  );
}
