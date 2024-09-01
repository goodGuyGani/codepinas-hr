"use client"

import { useState } from "react";
import { SidebarProvider } from "~/components/providers/SidebarProvider";
import Sidebar from "~/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  return (<div>
    <div className={`dashboard-container ${isSidebarOpen ? "sidebar-open" : ""} lg:w-[100%] md:w-[calc(100vw-2rem)]`}>
      <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
      {children}</div>
  </div>);
}
