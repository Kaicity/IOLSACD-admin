"use client";

import * as React from "react";

import { NavMain } from "@/components/nav-main";

import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { navLinks } from "@/app/constants/navLinkItem";

const navUser = {
  user: {
    name: "Nguyễn Minh Thông",
    email: "nguyenminhthongexample.com",
    avatar: "/avatars/shadcn.jpg",
  },
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navLinks} />
        {/* <NavProjects projects={navLinks.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={navUser.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
