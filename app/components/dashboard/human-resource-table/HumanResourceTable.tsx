// components/HumanResourceTable.tsx
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "../DataTable";
import type HumanResource from "@/app/models/features/human-resource";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Edit, Eye, Trash } from "lucide-react";
import { dataHumanResource } from "@/app/data/fake-data";

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
          <Button variant="ghost" size="sm" onClick={() => handleSee(resource)}>
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

export function HumanResourceTable() {
  return <DataTable columns={columns} data={dataHumanResource} />;
}
