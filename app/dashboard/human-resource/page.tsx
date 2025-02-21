"use client";

import HeaderContent from "@/app/components/dashboard/HeaderContent";
import { HumanResourceTable } from "@/app/components/dashboard/human-resource-table/HumanResourceTable";

export default function HumanResourcePage() {
  return (
    <div className="">
      <HeaderContent title="Nhân Sự" subTitle="Quản lý thông tin nhân sự" />
      <HumanResourceTable />
    </div>
  );
}
