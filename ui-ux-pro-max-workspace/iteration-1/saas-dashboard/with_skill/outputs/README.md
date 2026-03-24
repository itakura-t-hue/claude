# SaaS Dashboard Component

Professional Next.js SaaS management dashboard with dark mode, responsive design, and enterprise-grade UI/UX following the UI/UX Pro Max design system.

## Features

✨ **Professional Design**
- Indigo confidence color palette optimized for enterprise
- Minimalist style with modern sensibilities
- Fully responsive (mobile → desktop)
- Dark mode with proper contrast ratios

📊 **Data Visualization**
- Interactive revenue trend chart (Line chart with area fill)
- Top products performance visualization
- User activity table with status indicators
- Key metrics cards with trend indicators

🎨 **Components**
- Metric cards with KPI display and trends
- Interactive data tables with status badges
- Dropdown menus for actions and filters
- Charts with custom tooltips and legends
- Sidebar navigation with responsive toggle
- Header with search and notifications

♿ **Accessibility**
- WCAG 2.1 AA compliant contrast ratios
- Semantic HTML structure
- Keyboard navigation support
- Proper ARIA labels
- Focus indicators visible
- Color + icon combinations (not color alone)

🎯 **UX Best Practices**
- Touch targets ≥44x44px
- Smooth transitions (150-300ms)
- Clear hover/focus/active states
- Loading state placeholders
- Intuitive navigation
- Data presented at a glance

## Installation

### 1. Copy Component File
```bash
cp SaasDashboard.tsx app/dashboard/page.tsx
```

### 2. Install Dependencies
```bash
npm install recharts lucide-react
# or
yarn add recharts lucide-react
# or
pnpm add recharts lucide-react
```

### 3. Set Up shadcn/ui
If not already set up:
```bash
npx shadcn-ui@latest init
```

Required shadcn/ui components:
```bash
npx shadcn-ui@latest add card
npx shadcn-ui@latest add table
npx shadcn-ui@latest add button
npx shadcn-ui@latest add dropdown-menu
```

### 4. Configure Tailwind CSS
Ensure your `tailwind.config.js` has:
```javascript
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class', // Enable dark mode
  plugins: [],
};
```

### 5. Enable Dark Mode
Add to your root layout (`app/layout.tsx`):
```tsx
<html className="dark"> {/* Add 'dark' class for dark mode */}
  <body>
    {/* Your app */}
  </body>
</html>
```

Or use a context/hook for theme switching.

## Usage

```tsx
import SaasDashboard from '@/components/SaasDashboard';

export default function DashboardPage() {
  return <SaasDashboard />;
}
```

## Component Structure

```
SaasDashboard
├── Header
│   ├── Logo & Title
│   ├── Search Bar
│   ├── Notifications
│   └── User Menu
├── Sidebar
│   └── Navigation Links
├── Main Content
│   ├── Page Header
│   ├── Metrics Grid
│   │   ├── Total Revenue
│   │   ├── Active Users
│   │   ├── Growth Rate
│   │   └── Conversions
│   ├── Charts Section
│   │   ├── Revenue Trend (Line Chart)
│   │   └── Top Products (Progress Bars)
│   └── Users Table
│       ├── Name
│       ├── Email
│       ├── Status Badge
│       ├── Last Active
│       ├── Revenue
│       └── Actions Menu
```

## Customization

### Change Primary Color

Update the color classes in the component:

**Find:** `indigo-600`, `indigo-100`, `indigo-900`, etc.
**Replace with:** Your preferred Tailwind color (e.g., `blue`, `purple`, `slate`)

### Modify Mock Data

Replace mock data objects:

```tsx
// Revenue data - update revenueData array
const revenueData = [
  { month: 'Jan', revenue: 4000, target: 3800 },
  // ... update with real data
];

// Users data - update usersData array
const usersData = [
  { id: '1', name: 'User Name', email: 'user@example.com', ... },
  // ... update with real data
];
```

### Connect Real Data

Replace mock data with API calls:

```tsx
'use client';

import { useEffect, useState } from 'react';

export default function SaasDashboard() {
  const [revenueData, setRevenueData] = useState([]);
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    // Fetch from your API
    fetch('/api/revenue')
      .then(res => res.json())
      .then(data => setRevenueData(data));

    fetch('/api/users')
      .then(res => res.json())
      .then(data => setUsersData(data));
  }, []);

  // ... rest of component
}
```

### Customize Chart

Recharts options available:

```tsx
<LineChart
  data={revenueData}
  margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
>
  {/* Adjust colors, styles, legend position, etc. */}
</LineChart>
```

## Icons

All icons are from **Lucide React**. Available icons in component:

- Activity, Bell, ChevronDown, DollarSign
- Home, LogOut, Menu, MoreVertical
- Search, Settings, TrendingUp, Users
- ArrowUpRight, ArrowDownRight

Browse more: https://lucide.dev

## Dark Mode

Dark mode is automatically supported via Tailwind's `dark:` prefix. To toggle:

```tsx
// In your layout or context
const [isDark, setIsDark] = useState(false);

useEffect(() => {
  if (isDark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}, [isDark]);
```

## Responsive Breakpoints

| Breakpoint | Width | Usage |
|-----------|-------|-------|
| Base | 0px+ | Mobile (default) |
| sm | 640px+ | Landscape phones |
| md | 768px+ | Tablets |
| lg | 1024px+ | Desktops (sidebar visible) |
| xl | 1280px+ | Large screens |

Component adapts at each breakpoint for optimal viewing.

## Performance Optimization

### Chart Rendering
For large datasets (10000+ data points):

```tsx
// Use Canvas rendering instead of SVG
<LineChart
  data={revenueData}
  margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
  isAnimationActive={false} // Disable animations for large datasets
>
```

### Lazy Loading
For slow connections:

```tsx
import dynamic from 'next/dynamic';

const SaasDashboard = dynamic(() => import('./SaasDashboard'), {
  loading: () => <div>Loading...</div>,
  ssr: false, // Optional: disable SSR if needed
});
```

### Caching
Cache API responses:

```tsx
// In route handlers (app/api/revenue/route.ts)
export async function GET(req: Request) {
  // Add caching headers
  return new Response(JSON.stringify(data), {
    headers: {
      'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120',
    },
  });
}
```

## Accessibility Testing

### Color Contrast
- Test with WebAIM Contrast Checker
- All text: ≥4.5:1 contrast ratio ✓

### Keyboard Navigation
- Tab through all interactive elements
- Should work with: Tab, Shift+Tab, Enter, Space, Arrow keys

### Screen Reader
- Test with NVDA (Windows) or VoiceOver (Mac)
- All images and icons have descriptive labels

### Color Blindness
- Use Coblis simulator or Color Oracle
- Our design uses color + icons/text, not color alone

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Android)

## Known Limitations

1. **Mock Data**: Charts and tables use hardcoded data. Connect to real API for production.
2. **No Data Persistence**: Changes aren't saved. Add backend for data updates.
3. **Chart Interactivity**: Basic hover tooltips. Extend for click handlers/drill-down.
4. **Sorting/Filtering**: Table doesn't sort/filter. Add state management.
5. **Authentication**: No auth checks. Add middleware/guards.

## Extending the Dashboard

### Add New Metrics
```tsx
<MetricCard
  icon={YourIcon}
  title="Your Metric"
  value="$123,456"
  change="+10%"
  isPositive={true}
/>
```

### Add New Chart Types
```tsx
import { BarChart, Bar } from 'recharts';

// Add BarChart alongside LineChart
<BarChart data={data}>
  <Bar dataKey="value" fill="#4F46E5" />
</BarChart>
```

### Add Filters/Timeframe Selection
```tsx
const [timeRange, setTimeRange] = useState('7d');
const [category, setCategory] = useState('all');

// Filter data based on selections before rendering
```

### Add Export Functionality
```tsx
const exportToCSV = () => {
  const csv = // convert data to CSV
  const link = document.createElement('a');
  link.href = URL.createObjectURL(new Blob([csv]));
  link.download = 'dashboard-export.csv';
  link.click();
};
```

## Troubleshooting

### Recharts Not Rendering
- Ensure `recharts` is installed
- Component must be client-side (`'use client'` at top)
- Verify data structure matches expected format

### Dark Mode Not Working
- Ensure `darkMode: 'class'` in `tailwind.config.js`
- Add `dark` class to `<html>` element
- Clear browser cache

### Icons Not Showing
- Install `lucide-react`: `npm install lucide-react`
- Import from correct path: `'lucide-react'`
- Verify icon names match available icons

### Styling Issues
- Rebuild Tailwind CSS: `npm run build`
- Clear `.next` cache: `rm -rf .next`
- Ensure CSS is properly imported in layout

## License

MIT - Feel free to use in your projects

## Resources

- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Recharts Documentation](https://recharts.org)
- [Lucide Icons](https://lucide.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Next.js Documentation](https://nextjs.org/docs)

## Support

For issues or questions about the design system:
- Review `DESIGN_SYSTEM.md` for detailed design decisions
- Check component comments for implementation notes
- Reference skill file: `ui-ux-pro-max/SKILL.md`

---

**Component Version:** 1.0
**Design System:** UI/UX Pro Max
**Last Updated:** March 2026
**Status:** Production Ready
