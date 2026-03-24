'use client';

import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
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
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import {
  TrendingUp,
  Users,
  BarChart3,
  DollarSign,
  Settings,
  Menu,
  X,
  Search,
  Moon,
  Sun,
  MoreVertical,
  Download,
} from 'lucide-react';

// Sales data for the chart
const salesData = [
  { month: 'Jan', revenue: 4000, users: 2400, expenses: 2400 },
  { month: 'Feb', revenue: 5200, users: 2210, expenses: 2290 },
  { month: 'Mar', revenue: 6100, users: 2290, expenses: 2000 },
  { month: 'Apr', revenue: 7800, users: 2000, expenses: 2210 },
  { month: 'May', revenue: 8200, users: 2181, expenses: 2500 },
  { month: 'Jun', revenue: 9600, users: 2500, expenses: 2100 },
  { month: 'Jul', revenue: 11200, users: 2100, expenses: 2800 },
];

// User data for the table
const usersData = [
  {
    id: '1',
    name: 'Alice Johnson',
    email: 'alice@example.com',
    status: 'Active',
    joinDate: '2024-01-15',
    plan: 'Premium',
    revenue: '$1,240',
  },
  {
    id: '2',
    name: 'Bob Smith',
    email: 'bob@example.com',
    status: 'Active',
    joinDate: '2024-02-20',
    plan: 'Pro',
    revenue: '$890',
  },
  {
    id: '3',
    name: 'Carol White',
    email: 'carol@example.com',
    status: 'Inactive',
    joinDate: '2024-01-05',
    plan: 'Starter',
    revenue: '$340',
  },
  {
    id: '4',
    name: 'David Brown',
    email: 'david@example.com',
    status: 'Active',
    joinDate: '2024-03-10',
    plan: 'Premium',
    revenue: '$2,150',
  },
  {
    id: '5',
    name: 'Emma Davis',
    email: 'emma@example.com',
    status: 'Active',
    joinDate: '2024-02-28',
    plan: 'Pro',
    revenue: '$1,560',
  },
  {
    id: '6',
    name: 'Frank Miller',
    email: 'frank@example.com',
    status: 'Active',
    joinDate: '2024-03-05',
    plan: 'Premium',
    revenue: '$3,240',
  },
];

// Plan distribution data
const planData = [
  { name: 'Premium', value: 45, color: '#8b5cf6' },
  { name: 'Pro', value: 35, color: '#3b82f6' },
  { name: 'Starter', value: 20, color: '#ec4899' },
];

export default function SaasDashboard() {
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const filteredUsers = usersData.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    return status === 'Active'
      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
  };

  const getPlanColor = (plan: string) => {
    switch (plan) {
      case 'Premium':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'Pro':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Starter':
        return 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      darkMode ? 'dark bg-slate-950' : 'bg-slate-50'
    }`}>
      {/* Header */}
      <header className={`sticky top-0 z-40 border-b ${
        darkMode
          ? 'border-slate-800 bg-slate-900'
          : 'border-slate-200 bg-white'
      }`}>
        <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
            >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <div className="flex items-center gap-2">
              <div className={`p-2 rounded-lg ${
                darkMode ? 'bg-purple-900' : 'bg-purple-100'
              }`}>
                <BarChart3 className={darkMode ? 'text-purple-400' : 'text-purple-600'} size={24} />
              </div>
              <h1 className={`text-2xl font-bold ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                DashBoard Pro
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-colors ${
                darkMode
                  ? 'bg-slate-800 hover:bg-slate-700'
                  : 'bg-slate-100 hover:bg-slate-200'
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Settings size={20} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Profile Settings</DropdownMenuItem>
                <DropdownMenuItem>Notification Preferences</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`${
          sidebarOpen ? 'w-64' : 'w-0'
        } transition-all duration-300 ${
          darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
        } border-r hidden lg:block overflow-hidden`}>
          <nav className="p-6 space-y-2">
            <div className={`px-4 py-2 rounded-lg font-semibold flex items-center gap-3 ${
              darkMode
                ? 'bg-purple-900 text-purple-200'
                : 'bg-purple-100 text-purple-900'
            }`}>
              <BarChart3 size={18} />
              Dashboard
            </div>
            <div className={`px-4 py-2 rounded-lg flex items-center gap-3 cursor-pointer transition-colors ${
              darkMode
                ? 'hover:bg-slate-800 text-slate-300'
                : 'hover:bg-slate-100 text-slate-700'
            }`}>
              <Users size={18} />
              Users
            </div>
            <div className={`px-4 py-2 rounded-lg flex items-center gap-3 cursor-pointer transition-colors ${
              darkMode
                ? 'hover:bg-slate-800 text-slate-300'
                : 'hover:bg-slate-100 text-slate-700'
            }`}>
              <DollarSign size={18} />
              Revenue
            </div>
            <div className={`px-4 py-2 rounded-lg flex items-center gap-3 cursor-pointer transition-colors ${
              darkMode
                ? 'hover:bg-slate-800 text-slate-300'
                : 'hover:bg-slate-100 text-slate-700'
            }`}>
              <TrendingUp size={18} />
              Analytics
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <div className="p-4 sm:p-6 lg:p-8">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <Card className={darkMode ? 'bg-slate-900 border-slate-800' : ''}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className={`text-sm font-medium ${
                    darkMode ? 'text-slate-300' : ''
                  }`}>
                    Total Revenue
                  </CardTitle>
                  <DollarSign className={`h-4 w-4 ${
                    darkMode ? 'text-green-400' : 'text-green-600'
                  }`} />
                </CardHeader>
                <CardContent>
                  <div className={`text-2xl font-bold ${
                    darkMode ? 'text-white' : ''
                  }`}>
                    $54,240
                  </div>
                  <p className={`text-xs ${
                    darkMode ? 'text-green-400' : 'text-green-600'
                  } font-semibold`}>
                    +12.5% from last month
                  </p>
                </CardContent>
              </Card>

              <Card className={darkMode ? 'bg-slate-900 border-slate-800' : ''}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className={`text-sm font-medium ${
                    darkMode ? 'text-slate-300' : ''
                  }`}>
                    Active Users
                  </CardTitle>
                  <Users className={`h-4 w-4 ${
                    darkMode ? 'text-blue-400' : 'text-blue-600'
                  }`} />
                </CardHeader>
                <CardContent>
                  <div className={`text-2xl font-bold ${
                    darkMode ? 'text-white' : ''
                  }`}>
                    2,847
                  </div>
                  <p className={`text-xs ${
                    darkMode ? 'text-blue-400' : 'text-blue-600'
                  } font-semibold`}>
                    +8.2% from last month
                  </p>
                </CardContent>
              </Card>

              <Card className={darkMode ? 'bg-slate-900 border-slate-800' : ''}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className={`text-sm font-medium ${
                    darkMode ? 'text-slate-300' : ''
                  }`}>
                    Conversion Rate
                  </CardTitle>
                  <TrendingUp className={`h-4 w-4 ${
                    darkMode ? 'text-purple-400' : 'text-purple-600'
                  }`} />
                </CardHeader>
                <CardContent>
                  <div className={`text-2xl font-bold ${
                    darkMode ? 'text-white' : ''
                  }`}>
                    3.24%
                  </div>
                  <p className={`text-xs ${
                    darkMode ? 'text-purple-400' : 'text-purple-600'
                  } font-semibold`}>
                    +0.8% from last month
                  </p>
                </CardContent>
              </Card>

              <Card className={darkMode ? 'bg-slate-900 border-slate-800' : ''}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className={`text-sm font-medium ${
                    darkMode ? 'text-slate-300' : ''
                  }`}>
                    Avg. Deal Value
                  </CardTitle>
                  <BarChart3 className={`h-4 w-4 ${
                    darkMode ? 'text-orange-400' : 'text-orange-600'
                  }`} />
                </CardHeader>
                <CardContent>
                  <div className={`text-2xl font-bold ${
                    darkMode ? 'text-white' : ''
                  }`}>
                    $2,450
                  </div>
                  <p className={`text-xs ${
                    darkMode ? 'text-orange-400' : 'text-orange-600'
                  } font-semibold`}>
                    +5.3% from last month
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {/* Revenue Chart */}
              <Card className={`lg:col-span-2 ${
                darkMode ? 'bg-slate-900 border-slate-800' : ''
              }`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Revenue Trends</CardTitle>
                      <CardDescription className={darkMode ? 'text-slate-400' : ''}>
                        Monthly revenue and growth
                      </CardDescription>
                    </div>
                    <Button variant="ghost" size="sm" className={darkMode ? 'text-slate-400' : ''}>
                      <Download size={16} />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={salesData}>
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke={darkMode ? '#475569' : '#e2e8f0'}
                      />
                      <XAxis
                        dataKey="month"
                        stroke={darkMode ? '#94a3b8' : '#64748b'}
                      />
                      <YAxis stroke={darkMode ? '#94a3b8' : '#64748b'} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: darkMode ? '#1e293b' : '#fff',
                          border: darkMode ? '1px solid #475569' : '1px solid #e2e8f0',
                          borderRadius: '8px',
                          color: darkMode ? '#f1f5f9' : '#000',
                        }}
                      />
                      <Legend
                        wrapperStyle={{
                          color: darkMode ? '#f1f5f9' : '#000',
                        }}
                      />
                      <Bar dataKey="revenue" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
                      <Bar dataKey="users" fill="#3b82f6" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Plan Distribution */}
              <Card className={darkMode ? 'bg-slate-900 border-slate-800' : ''}>
                <CardHeader>
                  <CardTitle>Plan Distribution</CardTitle>
                  <CardDescription className={darkMode ? 'text-slate-400' : ''}>
                    Customer breakdown
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={planData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, value }) => `${name}: ${value}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {planData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          backgroundColor: darkMode ? '#1e293b' : '#fff',
                          border: darkMode ? '1px solid #475569' : '1px solid #e2e8f0',
                          borderRadius: '8px',
                          color: darkMode ? '#f1f5f9' : '#000',
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Users Table */}
            <Card className={darkMode ? 'bg-slate-900 border-slate-800' : ''}>
              <CardHeader>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <CardTitle>Customer List</CardTitle>
                    <CardDescription className={darkMode ? 'text-slate-400' : ''}>
                      Manage and monitor your customers
                    </CardDescription>
                  </div>
                  <Button className="bg-purple-600 hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-600">
                    Add Customer
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="relative">
                    <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 ${
                      darkMode ? 'text-slate-500' : 'text-slate-400'
                    }`} />
                    <Input
                      placeholder="Search by name or email..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className={`pl-10 ${
                        darkMode
                          ? 'bg-slate-800 border-slate-700 text-white placeholder:text-slate-500'
                          : ''
                      }`}
                    />
                  </div>
                </div>

                <div className={`border rounded-lg overflow-hidden ${
                  darkMode ? 'border-slate-800' : ''
                }`}>
                  <Table>
                    <TableHeader className={darkMode ? 'bg-slate-800' : 'bg-slate-50'}>
                      <TableRow className={darkMode ? 'border-slate-800 hover:bg-slate-800' : ''}>
                        <TableHead className={darkMode ? 'text-slate-300' : ''}>Name</TableHead>
                        <TableHead className={darkMode ? 'text-slate-300' : ''}>Email</TableHead>
                        <TableHead className={darkMode ? 'text-slate-300' : ''}>Plan</TableHead>
                        <TableHead className={darkMode ? 'text-slate-300' : ''}>Status</TableHead>
                        <TableHead className={`text-right ${
                          darkMode ? 'text-slate-300' : ''
                        }`}>
                          Revenue
                        </TableHead>
                        <TableHead className={`text-right ${
                          darkMode ? 'text-slate-300' : ''
                        }`}>
                          Actions
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredUsers.map((user) => (
                        <TableRow
                          key={user.id}
                          className={darkMode ? 'border-slate-800 hover:bg-slate-800' : ''}
                        >
                          <TableCell className={`font-medium ${
                            darkMode ? 'text-white' : ''
                          }`}>
                            {user.name}
                          </TableCell>
                          <TableCell className={darkMode ? 'text-slate-400' : ''}>
                            {user.email}
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant="outline"
                              className={getPlanColor(user.plan)}
                            >
                              {user.plan}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Badge
                              variant="outline"
                              className={getStatusColor(user.status)}
                            >
                              {user.status}
                            </Badge>
                          </TableCell>
                          <TableCell className={`text-right font-semibold ${
                            darkMode ? 'text-white' : ''
                          }`}>
                            {user.revenue}
                          </TableCell>
                          <TableCell className="text-right">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm">
                                  <MoreVertical size={16} />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>View Details</DropdownMenuItem>
                                <DropdownMenuItem>Edit Customer</DropdownMenuItem>
                                <DropdownMenuItem>View Invoices</DropdownMenuItem>
                                <DropdownMenuItem className="text-red-600">
                                  Remove Customer
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                <div className={`mt-4 flex items-center justify-between text-sm ${
                  darkMode ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  <div>
                    Showing {filteredUsers.length} of {usersData.length} customers
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Previous</Button>
                    <Button variant="outline" size="sm">Next</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
