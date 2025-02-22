"use client";

import { Activity, FileText, Podcast, Users } from "lucide-react";
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  Legend,
  Line,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
  // colunm chart
  const chartData = [
    { name: "Tháng 1", posts: 40, news: 24 },
    { name: "Tháng 2", posts: 30, news: 13 },
    { name: "Tháng 3", posts: 20, news: 58 },
    { name: "Tháng 4", posts: 27, news: 39 },
    { name: "Tháng 5", posts: 18, news: 48 },
    { name: "Tháng 6", posts: 23, news: 38 },
  ];

  //line chart
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  // Màu sắc cho các phần của PieChart
  const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444"];

  return (
    <div className="space-y-6">
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className=" hover:shadow-xl transition-shadow duration-300 shadow-md border-b-4 border-b-blue-500">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-card-foreground">
              Tổng bài viết
            </CardTitle>
            <CardDescription>Chỉ số thu thập hàng tháng</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <div className="p-2 w-10 h-10 bg-primary/10 rounded-md">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <span className="text-2xl font-bold">120</span>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl transition-shadow duration-300 shadow-md border-b-4 border-b-green-500">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-card-foreground">
              Tổng tin tức
            </CardTitle>
            <CardDescription>Chỉ số thu thập hàng tháng</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <div className="p-2 w-10 h-10 bg-green-500/10 rounded-md">
                <Podcast className="w-6 h-6 text-green-500" />
              </div>
              <span className="text-2xl font-bold">45</span>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl transition-shadow duration-300 shadow-md border-b-4 border-b-yellow-500">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-card-foreground">
              Lượt xem
            </CardTitle>
            <CardDescription>Chỉ số thu thập hàng tháng</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <div className="p-2 w-10 h-10 bg-yellow-500/10 rounded-md">
                <Activity className="w-6 h-6 text-yellow-500" />
              </div>
              <span className="text-2xl font-bold">1,234</span>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl transition-shadow duration-300 shadow-md border-b-4 border-b-red-500">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-card-foreground">
              Người dùng
            </CardTitle>
            <CardDescription>Chỉ số thu thập hàng tháng</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <div className="p-2 w-10 h-10 bg-red-500/10 rounded-md">
                <Users className="w-6 h-6 text-red-500" />
              </div>
              <span className="text-2xl font-bold">56</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Biểu đồ */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">
              Thống kê bài viết và tin tức
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                {/* <BarChart data={chartData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="posts" fill="#3b82f6" />
                  <Bar dataKey="news" fill="#10b981" />
                </BarChart> */}
                <LineChart
                  width={730}
                  height={250}
                  data={data}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">
              Thống kê bài viết và tin tức
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  width={730}
                  height={250}
                  data={data}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">
              Thống kê bài viết và tin tức
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  width={730}
                  height={250}
                  data={data}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">
              Thống kê bài viết và tin tức
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  width={730}
                  height={250}
                  data={data}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Hoạt động gần đây */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm font-medium">
            Hoạt động gần đây
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <div>
                <p className="text-sm">
                  Bài viết mới: "Hướng dẫn sử dụng Next.js"
                </p>
                <p className="text-xs text-gray-500">2 giờ trước</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <div>
                <p className="text-sm">
                  Tin tức mới: "Cập nhật công nghệ 2023"
                </p>
                <p className="text-xs text-gray-500">5 giờ trước</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <div>
                <p className="text-sm">Người dùng mới: "user123"</p>
                <p className="text-xs text-gray-500">1 ngày trước</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
