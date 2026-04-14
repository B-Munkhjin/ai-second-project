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
    <div className="">
      <SidebarProvider className=" flex justify-center relative top-16">
        <AdminSideBar />
        <main>{children}</main>
      </SidebarProvider>
    </div>
  );
}
