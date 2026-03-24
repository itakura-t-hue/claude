/**
 * Example Usage of SaasDashboard Component
 *
 * This file demonstrates how to integrate the SaasDashboard component
 * into your Next.js application.
 */

// ============================================================================
// EXAMPLE 1: Simple Direct Usage (Recommended for getting started)
// ============================================================================

// In your app/dashboard/page.tsx or pages/dashboard.tsx
import SaasDashboard from '@/components/SaasDashboard';

export default function DashboardPage() {
  return <SaasDashboard />;
}

// ============================================================================
// EXAMPLE 2: With Layout Wrapper
// ============================================================================

import SaasDashboard from '@/components/SaasDashboard';

export default function DashboardLayout() {
  return (
    <div className="min-h-screen">
      <SaasDashboard />
    </div>
  );
}

// ============================================================================
// EXAMPLE 3: Enhanced Version with Dynamic Data
// ============================================================================

'use client';

import React, { useState, useEffect } from 'react';
import SaasDashboard from '@/components/SaasDashboard';

interface DashboardData {
  kpiData: {
    totalRevenue: string;
    revenueChange: string;
    activeUsers: number;
    usersChange: string;
    conversionRate: string;
    conversionChange: string;
    avgDealValue: string;
    dealChange: string;
  };
  chartData: Array<{
    month: string;
    revenue: number;
    users: number;
    expenses: number;
  }>;
  userData: Array<{
    id: string;
    name: string;
    email: string;
    status: 'Active' | 'Inactive';
    joinDate: string;
    plan: 'Premium' | 'Pro' | 'Starter';
    revenue: string;
  }>;
}

export default function EnhancedDashboard() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch dashboard data from your API
    const fetchDashboardData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/dashboard');
        if (!response.ok) throw new Error('Failed to fetch dashboard data');
        const dashboardData = await response.json();
        setData(dashboardData);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
        setData(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg font-semibold">Loading dashboard...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg font-semibold text-red-600">Error: {error}</div>
      </div>
    );
  }

  return data ? <SaasDashboard /> : null;
}

// ============================================================================
// EXAMPLE 4: With Authentication Guard
// ============================================================================

import { redirect } from 'next/navigation';
import { getSession } from '@/lib/auth'; // Your auth utility
import SaasDashboard from '@/components/SaasDashboard';

export default async function ProtectedDashboard() {
  const session = await getSession();

  if (!session) {
    redirect('/login');
  }

  return <SaasDashboard />;
}

// ============================================================================
// EXAMPLE 5: In a Next.js API Route with Data Fetching
// ============================================================================

// In app/api/dashboard/route.ts
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    // Fetch data from your database or external API
    const revenueData = await fetchRevenueData();
    const userData = await fetchUserData();
    const kpiData = await calculateKPIs(revenueData, userData);

    return NextResponse.json({
      kpiData,
      chartData: revenueData,
      userData,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch dashboard data' },
      { status: 500 }
    );
  }
}

// ============================================================================
// EXAMPLE 6: Customized Dashboard with Theme Provider
// ============================================================================

'use client';

import React, { ReactNode } from 'react';
import SaasDashboard from '@/components/SaasDashboard';

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: 'light' | 'dark';
}

function ThemeProvider({ children, defaultTheme = 'light' }: ThemeProviderProps) {
  const [theme, setTheme] = React.useState(defaultTheme);

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      {children}
    </div>
  );
}

export default function DashboardWithTheme() {
  return (
    <ThemeProvider>
      <SaasDashboard />
    </ThemeProvider>
  );
}

// ============================================================================
// EXAMPLE 7: Component Integration in App Router Layout
// ============================================================================

// In app/dashboard/layout.tsx
import type { ReactNode } from 'react';
import SaasDashboard from '@/components/SaasDashboard';

export const metadata = {
  title: 'Dashboard - SaaS Platform',
  description: 'Manage your SaaS business with our comprehensive dashboard',
};

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <>
      <SaasDashboard />
      {children}
    </>
  );
}

// ============================================================================
// EXAMPLE 8: With State Management (Zustand)
// ============================================================================

import { create } from 'zustand';
import SaasDashboard from '@/components/SaasDashboard';

interface DashboardStore {
  darkMode: boolean;
  toggleDarkMode: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  sidebarOpen: boolean;
  toggleSidebar: () => void;
}

const useDashboardStore = create<DashboardStore>((set) => ({
  darkMode: false,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
  searchQuery: '',
  setSearchQuery: (query) => set({ searchQuery: query }),
  sidebarOpen: true,
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
}));

export default function DashboardWithStateManagement() {
  return <SaasDashboard />;
}

// ============================================================================
// EXAMPLE 9: With React Query for Data Fetching
// ============================================================================

'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import SaasDashboard from '@/components/SaasDashboard';

async function fetchDashboardData() {
  const response = await fetch('/api/dashboard');
  if (!response.ok) throw new Error('Failed to fetch data');
  return response.json();
}

export default function DashboardWithReactQuery() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['dashboard'],
    queryFn: fetchDashboardData,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading dashboard</div>;

  return <SaasDashboard />;
}

// ============================================================================
// EXAMPLE 10: Standalone HTML File (For Testing)
// ============================================================================

/**
 * If you want to test the component structure in isolation:
 *
 * Create a test.html file with the following:
 *
 * <!DOCTYPE html>
 * <html lang="en">
 * <head>
 *   <meta charset="UTF-8">
 *   <meta name="viewport" content="width=device-width, initial-scale=1.0">
 *   <title>SaaS Dashboard</title>
 *   <script src="https://cdn.tailwindcss.com"></script>
 * </head>
 * <body>
 *   <div id="root"></div>
 *   <!-- React, Next.js, and other dependencies would be loaded here -->
 * </body>
 * </html>
 */
