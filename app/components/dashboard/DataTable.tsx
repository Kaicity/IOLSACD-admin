import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CircleSlash2 } from "lucide-react";
import { useRouter } from "next/navigation";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
  path,
}: DataTableProps<TData, TValue> & { path: string }) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(), // phân trang
    getFilteredRowModel: getFilteredRowModel(), // filter
  });

  const getPageNumbers = () => {
    const currentPage = table.getState().pagination.pageIndex + 1;
    const totalPages = table.getPageCount();
    const pages = [];

    pages.push(1);

    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      pages.push(i);
    }

    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return [...new Set(pages)].sort((a, b) => a - b);
  };

  const navigation = useRouter();

  return (
    <div>
      {/* Search Input */}
      <div className="flex items-center gap-2 py-4">
        <Input
          placeholder="Search by name..."
          value={
            (table.getColumn("fullName")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("fullName")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />

        <Select>
          <SelectTrigger className="w-full sm:w-[180px]">
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
        <Button
          className="w-full sm:w-auto ml-auto font-bold"
          onClick={() => {
            navigation.push(`${path}`);
          }}
        >
          Tạo mới
        </Button>
      </div>

      {/* Table */}

      <Table className="min-w-max w-full border-collapse">
        <TableHeader className="bg-gray-100">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead
                  key={header.id}
                  className="text-muted-foreground font-bold text-md"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24">
                <div className="mx-auto flex flex-col items-center gap-2">
                  <p> Không có dữ liệu.</p>
                  <CircleSlash2 className="w-4 h-4" />
                </div>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* Pagination */}
      <div className="flex flex-wrap items-center justify-center sm:justify-between space-y-2 sm:space-y-0 sm:space-x-6 lg:space-x-8 py-4">
        {/* Page Info */}
        <div className="text-sm text-muted-foreground">
          Trang {table.getState().pagination.pageIndex + 1} trên{" "}
          {table.getPageCount()}
        </div>

        {/* Pagination Buttons */}
        <div className="flex flex-wrap items-center space-x-2">
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value) => {
              table.setPageSize(Number(value));
            }}
          >
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Trước
          </Button>

          {/* Page Numbers */}
          {getPageNumbers().map((page) => (
            <Button
              key={page}
              variant={
                table.getState().pagination.pageIndex + 1 === page
                  ? "default"
                  : "outline"
              }
              size="sm"
              onClick={() => table.setPageIndex(page - 1)}
            >
              {page}
            </Button>
          ))}

          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Trang kế
          </Button>
        </div>
      </div>
    </div>
  );
}
