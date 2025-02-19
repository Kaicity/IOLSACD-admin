"use client";

import * as React from "react";
import {
  AudioWaveform,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  type Home,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavRoot } from "./nav-root";

// This is sample data.
const data = {
  user: {
    name: "Nguyễn Minh Thông",
    email: "nguyenminhthongexample.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Trần Anh Tuấn",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Nguyễn Trọng Xấy",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Nguyễn Minh Thông",
      logo: Command,
      plan: "Free",
    },
    {
      name: "Nguyễn Quang Tiến",
      logo: Command,
      plan: "Free",
    },
  ],

  navMain: [
    {
      title: "Nhân Sự",
      url: "/human",
      icon: Settings2,
      items: [],
    },
    {
      title: "Bài Viết",
      url: "",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Dịch Vụ",
          url: "/post/service",
        },
        {
          title: "Tin Tức",
          url: "/post/news",
        },
        {
          title: "Kiến Thức",
          url: "/post/knowledge",
        },
      ],
    },
    {
      title: "Lịch Tư Vấn",
      url: "/consulting-schedule",
      icon: SquareTerminal,
      isActive: true,
      items: [],
    },
  ],
  projects: [
    {
      name: "Thông tin chung",
      url: "/general",
      icon: Frame,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavRoot
          item={{
            title: "Trang chủ",
            url: "/",
            icon: SquareTerminal,
            isActive: true,
          }}
        />
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
