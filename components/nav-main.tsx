"use client";

import { ChevronRight, type LucideIcon } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import type NavLink from "@/app/types/nav-link.type";

export function NavMain({ items }: { items: NavLink[] }) {
  const mainItems = items.filter((item) => item.group === "main");
  const managementItems = items.filter((item) => item.group === "management");
  const generalInformations = items.filter(
    (item) => item.group === "general-information"
  );

  const renderItem = (item: NavLink) => (
    <Collapsible
      key={item.label}
      asChild
      defaultOpen={item.isActive}
      className="group/collapsible"
    >
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          {!item.children || item.children.length === 0 ? (
            <Link href={item.path}>
              <SidebarMenuButton tooltip={item.label}>
                {item.icon && <item.icon />}
                <span>{item.label}</span>
                {item.children && item.children.length > 0 && (
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                )}
              </SidebarMenuButton>
            </Link>
          ) : (
            <SidebarMenuButton tooltip={item.label}>
              {item.icon && <item.icon />}
              <span>{item.label}</span>
              {item.children && item.children.length > 0 && (
                <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
              )}
            </SidebarMenuButton>
          )}
        </CollapsibleTrigger>
        {item.children && item.children.length > 0 && (
          <CollapsibleContent>
            <SidebarMenuSub>
              {item.children.map((subItem) => (
                <SidebarMenuSubItem key={subItem.path}>
                  <SidebarMenuSubButton asChild>
                    <Link href={subItem.path}>
                      <span>{subItem.label}</span>
                    </Link>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              ))}
            </SidebarMenuSub>
          </CollapsibleContent>
        )}
      </SidebarMenuItem>
    </Collapsible>
  );

  return (
    <SidebarGroup>
      {mainItems.length > 0 && (
        <>
          <SidebarGroupLabel>Chính</SidebarGroupLabel>
          <SidebarMenu>{mainItems.map(renderItem)}</SidebarMenu>
        </>
      )}

      {managementItems.length > 0 && (
        <>
          <SidebarGroupLabel>Quản lý</SidebarGroupLabel>
          <SidebarMenu>{managementItems.map(renderItem)}</SidebarMenu>
        </>
      )}

      {generalInformations.length > 0 && (
        <>
          <SidebarGroupLabel>Tùy chỉnh</SidebarGroupLabel>
          <SidebarMenu>{generalInformations.map(renderItem)}</SidebarMenu>
        </>
      )}
    </SidebarGroup>
  );
}
