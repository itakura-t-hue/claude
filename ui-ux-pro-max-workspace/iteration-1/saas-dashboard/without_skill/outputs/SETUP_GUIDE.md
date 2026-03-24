# SaaS Dashboard Component - Setup Guide

## Overview
This is a professional SaaS management dashboard component built with Next.js, shadcn/ui, and Tailwind CSS. It features dark mode support, interactive charts, and a comprehensive user management table.

## Features
- **Dark Mode Toggle**: Switch between light and dark themes seamlessly
- **KPI Cards**: Display key metrics (Total Revenue, Active Users, Conversion Rate, Avg. Deal Value)
- **Revenue Charts**: Interactive bar chart showing monthly revenue trends
- **Plan Distribution**: Pie chart visualizing customer plan breakdown
- **User Management Table**: Searchable, sortable table with customer data
- **Responsive Design**: Fully responsive layout for desktop and mobile
- **Interactive Elements**: Dropdown menus, search functionality, and pagination controls
- **Professional Styling**: Modern gradient colors and smooth transitions

## Prerequisites
- Next.js 13.4+ (with App Router support)
- React 18+
- Node.js 16+

## Installation

### 1. Install Dependencies
```bash
npm install recharts lucide-react
```

### 2. Install shadcn/ui Components
If you haven't already set up shadcn/ui in your project:

```bash
npx shadcn-ui@latest init
```

Then install the required components:
```bash
npx shadcn-ui@latest add card
npx shadcn-ui@latest add table
npx shadcn-ui@latest add button
npx shadcn-ui@latest add input
npx shadcn-ui@latest add dropdown-menu
npx shadcn-ui@latest add badge
```

### 3. Ensure Tailwind CSS is Configured
Make sure your `tailwind.config.ts` includes dark mode:

```typescript
export default {
  darkMode: 'class',
  // ... rest of config
}
```

## Usage

### Basic Implementation
```typescript
import SaasDashboard from '@/components/SaasDashboard';

export default function DashboardPage() {
  return <SaasDashboard />;
}
```

### Component Location
Place the `SaasDashboard.tsx` file in your components directory:
```
src/
  components/
    SaasDashboard.tsx
    ui/
      card.tsx
      table.tsx
      button.tsx
      input.tsx
      dropdown-menu.tsx
      badge.tsx
```

## Component Structure

### Main Sections
1. **Header**: Navigation bar with dark mode toggle and settings menu
2. **Sidebar**: Navigation menu with dashboard links (hidden on mobile)
3. **KPI Cards**: Four metric cards showing key business metrics
4. **Charts Section**:
   - Revenue Trends Bar Chart
   - Plan Distribution Pie Chart
5. **Customer Table**: Searchable, interactive user list with actions

## Customization

### Change Dashboard Title
In the Header section, modify:
```typescript
<h1 className="text-2xl font-bold">Your Dashboard Name</h1>
```

### Update KPI Data
Modify the KPI card values directly in the component. For dynamic data, convert to state/props:

```typescript
interface DashboardProps {
  totalRevenue: number;
  activeUsers: number;
  conversionRate: number;
  avgDealValue: number;
}

export default function SaasDashboard(props: DashboardProps) {
  // Use props values in cards
}
```

### Customize Chart Data
Replace `salesData` array with your actual data:
```typescript
const salesData = [
  { month: 'Jan', revenue: 4000, users: 2400, expenses: 2400 },
  // ... add more months
];
```

### Customize User Data
Replace `usersData` array with your actual user list:
```typescript
const usersData = [
  {
    id: '1',
    name: 'User Name',
    email: 'user@example.com',
    status: 'Active',
    joinDate: '2024-01-15',
    plan: 'Premium',
    revenue: '$1,240',
  },
  // ... more users
];
```

### Change Color Scheme
The component uses Tailwind color classes. Common customization points:
- Primary accent: Change `purple-600` to your brand color
- Success: Change `green-*` colors
- Info: Change `blue-*` colors
- Charts: Modify color values in the `Bar`, `Pie` components

Example - Change primary color to blue:
```typescript
// Header accent
className="bg-blue-100 dark:bg-blue-900"
// Buttons
className="bg-blue-600 hover:bg-blue-700"
// Chart bars
<Bar dataKey="revenue" fill="#3b82f6" />
```

### Make It Dynamic
Convert static state to props or connect to real data sources:

```typescript
interface SaasDashboardProps {
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
  chartData: Array<any>;
  userData: Array<any>;
}
```

## Features Breakdown

### Dark Mode Implementation
- Uses Tailwind's dark mode with the 'class' strategy
- Toggle stored in React state (upgrade to localStorage/context for persistence)
- All components have corresponding dark variants

### Search Functionality
```typescript
const filteredUsers = usersData.filter(
  (user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
);
```

### Status and Plan Badges
Color-coded badges for visual clarity:
- Green for Active status
- Gray for Inactive status
- Purple for Premium plan
- Blue for Pro plan
- Pink for Starter plan

### Responsive Layout
- Sidebar hidden on mobile (toggle with menu icon)
- Grid layouts adjust from 1 column (mobile) to 4 columns (desktop)
- Charts stack vertically on smaller screens

## Performance Optimization

For production use, consider:
1. Memoize components with `React.memo`
2. Use `useMemo` for expensive calculations
3. Implement virtual scrolling for large tables (use `react-virtual`)
4. Add pagination to the user table
5. Cache chart data with `useSWR` or `React Query`

## Accessibility
The component uses semantic HTML and ARIA attributes from shadcn/ui. For enhanced accessibility:
- Add ARIA labels to buttons
- Ensure sufficient color contrast
- Add keyboard navigation for dropdowns
- Test with screen readers

## Troubleshooting

### Dark mode not working
- Ensure `darkMode: 'class'` in `tailwind.config.ts`
- Check that the `html` element has the `dark` class applied
- Clear browser cache and rebuild

### Charts not rendering
- Verify `recharts` is installed: `npm install recharts`
- Check console for errors
- Ensure `ResponsiveContainer` has a parent with defined height

### Icons missing
- Verify `lucide-react` is installed: `npm install lucide-react`
- Check that icon names match the latest lucide-react version

### Styling inconsistencies
- Clear Tailwind cache: `npm run build -- --reset`
- Rebuild the project
- Check for conflicting CSS

## Browser Support
- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari 12+, Chrome Mobile

## License
MIT - Feel free to use in personal and commercial projects

## Support
For issues or questions:
1. Check the shadcn/ui documentation: https://ui.shadcn.com
2. Review Tailwind CSS docs: https://tailwindcss.com
3. Consult Recharts docs: https://recharts.org
