"use client";

import { DataTable } from "@/app/components/dashboard/DataTable";
import HeaderContent from "@/app/components/dashboard/HeaderContent";
import { dataHumanResource } from "@/app/data/fake-data";
import type HumanResource from "@/app/models/features/human-resource";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { ColumnDef } from "@tanstack/react-table";
import { Edit, Eye, Trash } from "lucide-react";
import { useState } from "react";
import HumanResourceForm from "./human-resoure-form";

export default function HumanResourcePage() {
  const [searchValues, setSearchsValue] = useState<string>("");

  // Colunm Table
  const columns: ColumnDef<HumanResource>[] = [
    // {
    //   accessorKey: "ID",
    //   header: "ID",
    // },
    {
      accessorKey: "fullName",
      header: "Tên đầy đủ",
    },
    {
      accessorKey: "imgPath",
      header: "Hình ảnh",
      cell: ({ row }) => (
        <img
          src={row.getValue("imgPath")}
          alt={row.getValue("fullName")}
          className="w-10 h-10 rounded-full"
        />
      ),
    },
    {
      accessorKey: "phone",
      header: "Số điện thoại",
    },
    {
      accessorKey: "gmail",
      header: "Gmail",
    },
    {
      accessorKey: "role",
      header: "Chức vụ",
      cell: ({ row }) => {
        const role = row.getValue("role") as string;
        return (
          <Badge variant={role === "Admin" ? "default" : "secondary"}>
            {role}
          </Badge>
        );
      },
    },
    //   {
    //     accessorKey: "isShow",
    //     header: "Show",
    //     cell: ({ row }) => (row.getValue("isShow") ? "Yes" : "No"),
    //   },
    {
      accessorKey: "createdDate",
      header: "Created Date",
    },
    {
      accessorKey: "updatedDate",
      header: "Updated Date",
    },
    {
      accessorKey: "isExist",
      header: "Hoạt động",
      cell: ({ row }) => (row.getValue("isExist") ? "Yes" : "No"),
    },
    {
      id: "actions",
      cell: ({ row }) => {
        const resource = row.original;

        return (
          <div className="flex space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleSee(resource)}
            >
              <Eye className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleUpdate(resource)}
            >
              <Edit className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleDelete(resource)}
              className="text-red-500"
            >
              <Trash className="h-4 w-4" />
            </Button>
          </div>
        );
      },
    },
  ];

  const handleSee = (resource: HumanResource) => {
    console.log("See:", resource);
  };

  const handleUpdate = (resource: HumanResource) => {
    console.log("Update:", resource);
  };

  const handleDelete = (resource: HumanResource) => {
    console.log("Delete:", resource);
  };

  return (
    <div className="">
      <HeaderContent title="Nhân Sự" subTitle="Quản lý thông tin nhân sự" />
      {/* Search Input */}
      <div className="flex flex-wrap items-center gap-2 py-4">
        <Input
          placeholder="Search by name..."
          value={searchValues}
          onChange={(event) => setSearchsValue(event.target.value)}
          className="max-w-sm sm:w-full"
        />

        <Select>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Lọc theo chức vụ" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="user">Người dùng</SelectItem>
              <SelectItem value="staff">Nhân viên</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        {/* Nút tạo mới */}
        {/* <Button
          className="w-full sm:w-auto ml-auto font-bold"
          onClick={() => {}}
        >
          Tạo mới
        </Button> */}

        <HumanResourceForm />
      </div>
      {/* Data Table */}
      <DataTable columns={columns} data={dataHumanResource} />;
    </div>
  );
}
