"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
  SidebarHeader,
} from "@/components/ui/sidebar";
import {
  ChevronDown,
  LayoutDashboard,
  SidebarClose,
  SidebarIcon,
  TruckIcon,
  X,
} from "lucide-react";

export const AdminSideBar = () => {
  return (
    <div>
      <SidebarProvider>
        <Sidebar className="flex justify-center w-75 bg-white">
          <div className="flex justify-between h-11 pl-5.25 pr-3 items-center relative top-9">
            <div className="text-lg font-semibold text-[#09090B]">History</div>
            <SidebarTrigger />
          </div>
          <SidebarContent className="flex items-center flex-col gap-4 ">
            <div></div>
          </SidebarContent>
        </Sidebar>
      </SidebarProvider>
    </div>
  );
};
