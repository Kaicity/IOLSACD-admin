import { Calendar, FileText, Home, Info, User } from "lucide-react";
import type NavLink from "../types/nav-link.type";

// Dữ liệu navLinks
export const navLinks: NavLink[] = [
  {
    path: "/dashboard",
    label: "Trang Chủ",
    icon: Home,
    isActive: false,
    children: [],
    group: "main",
  },
  {
    path: "/dashboard/human-resource",
    label: "Nhân Sự",
    icon: User,
    isActive: false,
    group: "management",
    children: [],
  },
  {
    path: "/dashboard/post",
    label: "Bài Viết",
    icon: FileText,
    children: [
      {
        path: "/dashboard/post/service",
        label: "Dịch Vụ",
        isActive: false,
        group: "management",
      },
      {
        path: "/dashboard/post/news",
        label: "Tin Tức",
        isActive: false,
        group: "management",
      },
      {
        path: "/dashboard/post/knowledge",
        label: "Kiến Thức",
        isActive: false,
        group: "management",
      },
    ],
    group: "management",
    isActive: false,
  },
  {
    path: "/dashboard/consulting-schedule",
    label: "Lịch Tư Vấn",
    icon: Calendar,
    isActive: false,
    children: [],
    group: "management",
  },
  {
    path: "/general",
    label: "Thông tin chung",
    icon: Info,
    isActive: true,
    children: [],
    group: "general-information",
  },
];
