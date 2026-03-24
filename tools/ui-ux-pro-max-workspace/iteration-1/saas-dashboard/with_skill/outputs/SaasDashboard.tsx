'use client';

import React, { useState } from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  TrendingUp,
  Users,
  DollarSign,
  Activity,
  Menu,
  Search,
  Bell,
  Settings,
  LogOut,
  MoreVertical,
  ChevronDown,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react';

// Mock data for revenue chart
const revenueData = [
  { month: 'Jan', revenue: 4000, target: 3800 },
  { month: 'Feb', revenue: 3800, target: 3800 },
  { month: 'Mar', revenue: 2800, target: 3800 },
  { month: 'Apr', revenue: 2780, target: 3800 },
  { month: 'May', revenue: 1890, target: 3800 },
  { month: 'Jun', revenue: 2390, target: 3800 },
  { month: 'Jul', revenue: 3490, target: 3800 },
  { month: 'Aug', revenue: 4200, target: 3800 },
];

// Mock data for users table
const usersData = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah@acme.com',
    status: 'Active',
    lastActive: '2 hours ago',
    revenue: '$12,450',
  },
  {
    id: '2',
    name: 'Michael Chen',
    email: 'michael@techcorp.io',
    status: 'Active',
    lastActive: '5 minutes ago',
    revenue: '$8,920',
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    email: 'emily@startup.dev',
    status: 'Inactive',
    lastActive: '3 days ago',
    revenue: '$5,670',
  },
  {
    id: '4',
    name: 'James Wilson',
    email: 'james@enterprise.com',
    status: 'Active',
    lastActive: '30 minutes ago',
    revenue: '$15,280',
  },
  {
    id: '5',
    name: 'Lisa Anderson',
    email: 'lisa@innovation.io',
    status: 'Active',
    lastActive: '1 hour ago',
    revenue: '$9,145',
  },
];

// Metric card component
const MetricCard = ({
  icon: Icon,
  title,
  value,
  change,
  isPositive,
}: {
  icon: React.ElementType;
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
}) => (
  <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow">
    <CardContent className="pt-6">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
            {title}
          </p>
          <p className="text-2xl font-bold text-slate-900 dark:text-slate-50">
            {value}
          </p>
          <div className="flex items-center gap-1 pt-1">
            {isPositive ? (
              <ArrowUpRight className="w-4 h-4 text-emerald-500" />
            ) : (
              <ArrowDownRight className="w-4 h-4 text-rose-500" />
            )}
            <span
              className={`text-xs font-semibold ${
                isPositive ? 'text-emerald-600' : 'text-rose-600'
              }`}
            >
              {change}
            </span>
          </div>
        </div>
        <div className="p-3 rounded-lg bg-gradient-to-br from-indigo-100 to-indigo-50 dark:from-indigo-900/20 dark:to-indigo-900/10">
          <Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
        </div>
      </div>
    </CardContent>
  </Card>
);

// Status badge component
const StatusBadge = ({ status }: { status: string }) => {
  const isActive = status === 'Active';
  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${
        isActive
          ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300'
          : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
      }`}
    >
      <span
        className={`w-2 h-2 rounded-full ${
          isActive ? 'bg-emerald-500' : 'bg-slate-400'
        }`}
      />
      {status}
    </span>
  );
};

// Custom tooltip for chart
const CustomTooltip = ({
  active,
  payload,
}: {
  active?: boolean;
  payload?: Array<{ value: number; name: string }>;
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-slate-900 p-3 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700">
        <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">
          ${payload[0].value.toLocaleString()}
        </p>
        {payload[1] && (
          <p className="text-xs text-slate-600 dark:text-slate-400">
            Target: ${payload[1].value.toLocaleString()}
          </p>
        )}
      </div>
    );
  }
  return null;
};

export default function SaasDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [timeRange, setTimeRange] = useState('7d');

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6">
          {/* Left side */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden"
              aria-label="Toggle sidebar"
            >
              <Menu className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-indigo-700 flex items-center justify-center">
                <Activity className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-lg font-bold text-slate-900 dark:text-slate-50 hidden sm:block">
                Analytics
              </h1>
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden sm:flex items-center gap-2 bg-slate-100 dark:bg-slate-800 rounded-lg pl-3">
              <Search className="w-4 h-4 text-slate-500" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent py-2 pr-3 text-sm text-slate-900 dark:text-slate-50 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none"
              />
            </div>

            <Button
              variant="ghost"
              size="icon"
              aria-label="Notifications"
              className="relative"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full" />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="User menu"
                  className="rounded-full w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-600"
                >
                  <span className="text-white font-semibold text-sm">SJ</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem className="flex items-center gap-2">
                  <Settings className="w-4 h-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2 text-rose-600 dark:text-rose-400">
                  <LogOut className="w-4 h-4" />
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`${
            sidebarOpen ? 'block' : 'hidden'
          } lg:block w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 p-6 min-h-[calc(100vh-4rem)]`}
        >
          <nav className="space-y-2">
            {[
              { icon: Activity, label: 'Dashboard', active: true },
              { icon: Users, label: 'Users' },
              { icon: TrendingUp, label: 'Analytics' },
              { icon: Settings, label: 'Settings' },
            ].map((item) => (
              <button
                key={item.label}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  item.active
                    ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-4 sm:p-6">
          {/* Page header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-50 mb-2">
              Dashboard
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Welcome back! Here's your business performance overview.
            </p>
          </div>

          {/* Metrics grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <MetricCard
              icon={DollarSign}
              title="Total Revenue"
              value="$124,580"
              change="+12.5%"
              isPositive={true}
            />
            <MetricCard
              icon={Users}
              title="Active Users"
              value="2,847"
              change="+8.2%"
              isPositive={true}
            />
            <MetricCard
              icon={TrendingUp}
              title="Growth Rate"
              value="23.8%"
              change="+4.3%"
              isPositive={true}
            />
            <MetricCard
              icon={Activity}
              title="Conversions"
              value="1,204"
              change="-2.1%"
              isPositive={false}
            />
          </div>

          {/* Charts section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Revenue chart */}
            <Card className="lg:col-span-2 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
              <CardHeader className="flex flex-row items-center justify-between pb-4">
                <div>
                  <CardTitle className="text-slate-900 dark:text-slate-50">
                    Revenue Trend
                  </CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-400">
                    Monthly revenue vs. target
                  </CardDescription>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2 border-slate-200 dark:border-slate-700"
                    >
                      {timeRange === '7d' ? '7 Days' : '30 Days'}
                      <ChevronDown className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setTimeRange('7d')}>
                      7 Days
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTimeRange('30d')}>
                      30 Days
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTimeRange('90d')}>
                      90 Days
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart
                    data={revenueData}
                    margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
                  >
                    <defs>
                      <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#4F46E5" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="#e2e8f0"
                      className="dark:stroke-slate-800"
                    />
                    <XAxis
                      dataKey="month"
                      stroke="#94a3b8"
                      style={{ fontSize: '12px' }}
                    />
                    <YAxis
                      stroke="#94a3b8"
                      style={{ fontSize: '12px' }}
                      tickFormatter={(value) => `$${value / 1000}k`}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend
                      wrapperStyle={{ paddingTop: '20px' }}
                      iconType="line"
                    />
                    <Line
                      type="monotone"
                      dataKey="revenue"
                      stroke="#4F46E5"
                      strokeWidth={2}
                      dot={{ fill: '#4F46E5', r: 4 }}
                      activeDot={{ r: 6 }}
                      name="Actual Revenue"
                    />
                    <Line
                      type="monotone"
                      dataKey="target"
                      stroke="#94a3b8"
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      dot={false}
                      name="Target"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Top performing products */}
            <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
              <CardHeader>
                <CardTitle className="text-slate-900 dark:text-slate-50">
                  Top Products
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-400">
                  By revenue
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: 'Pro Plan', value: '$42,500', percent: 34 },
                    { name: 'Enterprise', value: '$38,200', percent: 31 },
                    { name: 'Starter', value: '$26,340', percent: 21 },
                    { name: 'Premium', value: '$17,540', percent: 14 },
                  ].map((item, idx) => (
                    <div key={idx}>
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-sm font-medium text-slate-900 dark:text-slate-50">
                          {item.name}
                        </p>
                        <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">
                          {item.value}
                        </p>
                      </div>
                      <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-full"
                          style={{ width: `${item.percent}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Users table */}
          <Card className="bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
            <CardHeader className="flex flex-row items-center justify-between pb-4">
              <div>
                <CardTitle className="text-slate-900 dark:text-slate-50">
                  Recent Users
                </CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-400">
                  {usersData.length} active accounts
                </CardDescription>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="border-slate-200 dark:border-slate-700"
              >
                View All
              </Button>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-slate-200 dark:border-slate-800 hover:bg-transparent">
                      <TableHead className="text-slate-600 dark:text-slate-400">
                        Name
                      </TableHead>
                      <TableHead className="text-slate-600 dark:text-slate-400">
                        Email
                      </TableHead>
                      <TableHead className="text-slate-600 dark:text-slate-400">
                        Status
                      </TableHead>
                      <TableHead className="text-slate-600 dark:text-slate-400">
                        Last Active
                      </TableHead>
                      <TableHead className="text-right text-slate-600 dark:text-slate-400">
                        Revenue
                      </TableHead>
                      <TableHead className="w-10" />
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {usersData.map((user) => (
                      <TableRow
                        key={user.id}
                        className="border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                      >
                        <TableCell className="font-medium text-slate-900 dark:text-slate-50">
                          {user.name}
                        </TableCell>
                        <TableCell className="text-sm text-slate-600 dark:text-slate-400">
                          {user.email}
                        </TableCell>
                        <TableCell>
                          <StatusBadge status={user.status} />
                        </TableCell>
                        <TableCell className="text-sm text-slate-600 dark:text-slate-400">
                          {user.lastActive}
                        </TableCell>
                        <TableCell className="text-right font-semibold text-slate-900 dark:text-slate-50">
                          {user.revenue}
                        </TableCell>
                        <TableCell>
                          <Button
                            variant="ghost"
                            size="icon"
                            aria-label="Row actions"
                            className="hover:bg-slate-100 dark:hover:bg-slate-800"
                          >
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
