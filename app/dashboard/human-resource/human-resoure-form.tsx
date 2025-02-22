import { SubmitButton } from "@/app/components/dashboard/SubmitButton";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function HumanResourceForm() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="w-full sm:w-auto ml-auto">
          Tạo
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[825px]">
        <DialogHeader>
          <DialogTitle>Tạo nhân sự</DialogTitle>
          <DialogDescription>Điền các thông tin của nhân sự</DialogDescription>
        </DialogHeader>
        <form id="todo-form" className="grid gap-4 py-4" onSubmit={() => {}}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-4">
            <div className="flex flex-col gap-y-2 col-span-2">
              <Label>Họ tên</Label>
              <Input
                id="fullName"
                name="fullName"
                placeholder="Nhập họ tên đầy đủ"
                className=""
              />
            </div>
            <div className="flex flex-col gap-y-2 col-span-2">
              <Label>Số điện thoại</Label>
              <Input
                id="phone"
                name="phone"
                placeholder="Nhập số điện thoại"
                className=""
              />
            </div>
            <div className="flex flex-col gap-y-2 col-span-2">
              <Label>Email</Label>
              <Input
                id="gmail"
                name="gmail"
                placeholder="nguyenvana@gmail.com"
                className=""
              />
            </div>
            <div className="flex flex-col gap-y-2 col-span-2">
              <Label>Vai trò</Label>
              <Select>
                <SelectTrigger className="col-span-2">
                  <SelectValue placeholder="Chọn vai trò" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Quản trị viên</SelectItem>
                  <SelectItem value="manager">Quản lý</SelectItem>
                  <SelectItem value="employee">Nhân viên</SelectItem>
                  <SelectItem value="intern">Thực tập sinh</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex flex-col gap-y-2 col-span-1">
            <Label>Phần mô tả</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Nhập nội dung"
              className="col-span-4"
            />
          </div>
        </form>
        <DialogFooter>
          <SubmitButton text="Lưu" variant={"default"} className="" />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
