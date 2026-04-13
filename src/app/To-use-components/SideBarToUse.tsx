"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { LayoutDashboard, TruckIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const AdminSideBar = () => {
  const [clicked, setClicked] = useState("foodMenu");
  //   const handleToggle = (id: string) => {
  //     setClicked(id);
  //   };
  //   const changeColor = (id: string) =>
  //     clicked === id ? "text-[#E4E4E7] bg-black " : "text-[#09090B] bg-white ";

  //   const pathname = usePathname();

  return (
    <div className="flex justify-center w-51.25 gap-2.5 px-5 bg-white">
      <SidebarProvider>
        <Sidebar className="flex justify-center w-51.25 bg-white">
          <div className="flex justify-center w-51.25 h-11 pr-5.25 gap-2 items-center relative top-9">
            <div className="text-lg font-semibold text-[#09090B]">History</div>
          </div>
          <SidebarContent className="flex items-center flex-col gap-4 ">
            <div></div>
          </SidebarContent>
        </Sidebar>
      </SidebarProvider>
    </div>
  );
};
