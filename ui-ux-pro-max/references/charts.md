# Chart Types Reference Guide

Comprehensive reference for 25 chart types with use cases, data volumes, accessibility ratings, library recommendations, and implementation guidance.

---

## 1. Line Chart

| Aspect | Details |
|--------|---------|
| **When to Use** | Show trends over time, compare multiple series, continuous data |
| **When NOT to Use** | Discrete data points, too many series (> 5), non-temporal data |
| **Data Volume** | 10-1000+ data points per series |
| **Accessibility Rating** | 8/10 (good with labels, challenging for color-blind users) |
| **Recommended Libraries** | Recharts, D3.js, Chart.js, ApexCharts, ECharts |
| **Color Recommendations** | Use contrasting colors with patterns (dashed/dotted lines for colorblind) |
| **Interaction Level** | HIGH (hover tooltips, click to focus series, zoom/pan) |
| **SVG vs Canvas** | SVG (better for interactivity and small datasets), Canvas (large datasets) |
| **Implementation** | `<LineChart data={data}><Line type="monotone" dataKey="value" /></LineChart>` |
| **Best For** | Stock prices, website traffic, temperature trends, user metrics |
| **Avoid** | More than 5-7 overlapping lines, sparse data with gaps |
| **Performance Tips** | Use Canvas for 10000+ points, debounce hover events |

---

## 2. Bar Chart (Vertical)

| Aspect | Details |
|--------|---------|
| **When to Use** | Compare values across categories, categorical data |
| **When NOT to Use** | Time series (unless few time periods), continuous data |
| **Data Volume** | 5-50 categories optimal (up to 100 with scrolling) |
| **Accessibility Rating** | 9/10 (clearer than pie charts for comparison) |
| **Recommended Libraries** | Recharts, D3.js, Chart.js, ApexCharts |
| **Color Recommendations** | Single color for series, varied colors for multi-series (use patterns too) |
| **Interaction Level** | MEDIUM (hover tooltips, click for detail, sorting) |
| **SVG vs Canvas** | SVG (better for interaction), Canvas (many bars) |
| **Implementation** | `<BarChart data={data}><Bar dataKey="value" fill="#8884d8" /></BarChart>` |
| **Best For** | Sales by region, product comparison, survey responses |
| **Avoid** | Too many categories (overcrowd), negative values without care |
| **Performance Tips** | Use horizontal layout for many categories, truncate labels |

---

## 3. Bar Chart (Horizontal)

| Aspect | Details |
|--------|---------|
| **When to Use** | Many categories (10+), long category names, space constraints |
| **When NOT to Use** | Few categories, want to show time progression |
| **Data Volume** | 10-100+ categories (scrollable) |
| **Accessibility Rating** | 9/10 (better than vertical for many items) |
| **Recommended Libraries** | Recharts, D3.js, Chart.js, ApexCharts |
| **Color Recommendations** | Single color or gradient based on value magnitude |
| **Interaction Level** | HIGH (scrolling, hover, sorting) |
| **SVG vs Canvas** | SVG (better for text labels and interaction) |
| **Implementation** | `<BarChart layout="vertical" data={data}><Bar dataKey="value" /></BarChart>` |
| **Best For** | Rankings, many items, location comparisons |
| **Avoid** | Too narrow space for labels, very long names without wrapping |
| **Performance Tips** | Implement virtual scrolling for 100+ items, truncate labels |

---

## 4. Pie Chart

| Aspect | Details |
|--------|---------|
| **When to Use** | Show proportions of a whole (parts of 100%) |
| **When NOT to Use** | Comparing small differences, more than 5-6 slices, precise values |
| **Data Volume** | 3-6 slices optimal (max 8) |
| **Accessibility Rating** | 5/10 (difficult to compare visually, requires labels and legend) |
| **Recommended Libraries** | Recharts, D3.js, Chart.js, ApexCharts |
| **Color Recommendations** | Distinct colors with patterns for colorblind users |
| **Interaction Level** | LOW (click to highlight, hover for tooltip) |
| **SVG vs Canvas** | SVG (better for slices interaction) |
| **Implementation** | `<PieChart><Pie data={data} dataKey="value" /></PieChart>` |
| **Best For** | Market share, composition breakdown, simple distributions |
| **Avoid** | More than 6 slices, comparing slices, similar values |
| **Best Practice** | Add percentage labels, use tooltip for exact values |

---

## 5. Doughnut Chart

| Aspect | Details |
|--------|---------|
| **When to Use** | Same as pie chart but with cleaner aesthetic; space in center for metadata |
| **When NOT to Use** | More than 6-8 slices, precise value comparison |
| **Data Volume** | 3-8 slices optimal |
| **Accessibility Rating** | 5/10 (same challenges as pie) |
| **Recommended Libraries** | Recharts, Chart.js, ApexCharts |
| **Color Recommendations** | Distinct colors with clear labels |
| **Interaction Level** | LOW (hover to highlight, center text) |
| **SVG vs Canvas** | SVG (better for center content) |
| **Implementation** | `<PieChart><Pie data={data} innerRadius={60} /></PieChart>` |
| **Best For** | Composition with center KPI, visual hierarchy |
| **Avoid** | More than 6 segments, no center content (use pie instead) |
| **Center Content** | Can display KPI, summary, or description in center |

---

## 6. Stacked Bar Chart

| Aspect | Details |
|--------|---------|
| **When to Use** | Show composition AND total over categories; break down by type |
| **When NOT to Use** | When comparing middle segments is important |
| **Data Volume** | 5-30 categories, 3-5 segments per category |
| **Accessibility Rating** | 6/10 (hard to compare middle segments) |
| **Recommended Libraries** | Recharts, D3.js, Chart.js, ApexCharts |
| **Color Recommendations** | Distinct colors for each segment, good contrast |
| **Interaction Level** | MEDIUM (hover to highlight segment, toggle segments) |
| **SVG vs Canvas** | SVG (better for segment interaction) |
| **Implementation** | `<BarChart><Bar dataKey="segment1" stackId="a" /><Bar dataKey="segment2" stackId="a" /></BarChart>` |
| **Best For** | Sales breakdown by product, traffic sources, budget allocation |
| **Avoid** | More than 5 segments, comparing non-first segments |
| **Tip** | Show segment values on hover tooltip |

---

## 7. Area Chart

| Aspect | Details |
|--------|---------|
| **When to Use** | Emphasize magnitude over time, show cumulative values, visual impact |
| **When NOT to Use** | Many overlapping areas, precise value reading |
| **Data Volume** | 10-500 points per series |
| **Accessibility Rating** | 7/10 (color-blind friendly with patterns) |
| **Recommended Libraries** | Recharts, D3.js, Chart.js, ApexCharts |
| **Color Recommendations** | Transparent fills (opacity 0.6-0.8) for overlapping areas |
| **Interaction Level** | HIGH (hover for values, click to focus series) |
| **SVG vs Canvas** | SVG (better for interactivity) |
| **Implementation** | `<AreaChart><Area type="monotone" dataKey="value" fill="#8884d8" /></AreaChart>` |
| **Best For** | User growth over time, revenue trends, energy consumption |
| **Avoid** | More than 3 overlapping areas, sparse data with gaps |
| **Visual Enhancement** | Use transparency to show overlaps clearly |

---

## 8. Scatter Chart

| Aspect | Details |
|--------|---------|
| **When to Use** | Show correlation between two continuous variables |
| **When NOT to Use** | Categorical data, very large datasets (100000+ points) |
| **Data Volume** | 20-5000 points (Canvas for larger) |
| **Accessibility Rating** | 6/10 (requires tooltip for exact values) |
| **Recommended Libraries** | D3.js, ApexCharts, Recharts (limited), Plotly |
| **Color Recommendations** | Color by third variable for dimension, add legends |
| **Interaction Level** | MEDIUM (hover for details, click to drill down) |
| **SVG vs Canvas** | Canvas (better for many points) |
| **Implementation** | `<ScatterChart><Scatter name="data" data={data} /></ScatterChart>` |
| **Best For** | Correlation analysis, clustering visualization, outlier detection |
| **Avoid** | Too dense with overlapping points, no hover tooltip |
| **Enhancement** | Add trend line, change point size by value |

---

## 9. Bubble Chart

| Aspect | Details |
|--------|---------|
| **When to Use** | Show three variables (x, y, size), correlation with magnitude |
| **When NOT to Use** | Simple 2D comparison (use scatter), many overlapping bubbles |
| **Data Volume** | 20-500 bubbles optimal |
| **Accessibility Rating** | 5/10 (size perception challenges, needs tooltip) |
| **Recommended Libraries** | D3.js, ApexCharts, Plotly |
| **Color Recommendations** | Color for category/value, size for magnitude |
| **Interaction Level** | HIGH (hover for details, click to filter) |
| **SVG vs Canvas** | Canvas (for many bubbles) |
| **Implementation** | Custom D3 implementation or ApexCharts bubble option |
| **Best For** | Economic indicators (GDP, population, inflation), investment analysis |
| **Avoid** | Too many bubbles (> 100), extreme size differences |
| **Tip** | Use color + size together for two different dimensions |

---

## 10. Heatmap

| Aspect | Details |
|--------|---------|
| **When to Use** | Show intensity/magnitude across two dimensions, patterns |
| **When NOT to Use** | Small datasets, precise value reading |
| **Data Volume** | 50-10000+ cells, depends on grid size |
| **Accessibility Rating** | 4/10 (color-dependent, needs tooltip) |
| **Recommended Libraries** | D3.js, ApexCharts, Plotly, Observable |
| **Color Recommendations** | Diverging color scale (blue-white-red), add labels |
| **Interaction Level** | MEDIUM (hover for values, click to focus) |
| **SVG vs Canvas** | Canvas (better for large grids) |
| **Implementation** | Custom D3 or use library heatmap module |
| **Best For** | Time patterns (hour/day heatmap), correlation matrices, geographic data |
| **Avoid** | Too small cells without zoom, too many colors |
| **Enhancement** | Add text labels, zoom capability for large heatmaps |

---

## 11. Treemap

| Aspect | Details |
|--------|---------|
| **When to Use** | Show hierarchical data, part-to-whole with hierarchy levels |
| **When NOT to Use** | Simple comparison (use bar), perfect squares not important |
| **Data Volume** | 20-200+ items (zoomable) |
| **Accessibility Rating** | 6/10 (area comparison is intuitive but size-perception issues) |
| **Recommended Libraries** | D3.js, ApexCharts, Plotly, Nivo |
| **Color Recommendations** | Color by category or value, use patterns for colorblind |
| **Interaction Level** | HIGH (zoom, click to drill down, hover) |
| **SVG vs Canvas** | SVG (better for interactivity and labels) |
| **Implementation** | D3 treemap layout or use ApexCharts |
| **Best For** | Storage breakdown, file systems, market composition |
| **Avoid** | Tiny rectangles without zoom, poor label visibility |
| **Feature** | Drill-down capability for hierarchy navigation |

---

## 12. Sunburst Chart

| Aspect | Details |
|--------|---------|
| **When to Use** | Show hierarchical data in circular layout, space-efficient |
| **When NOT to Use** | More than 3 levels, very large hierarchies |
| **Data Volume** | 50-300+ items |
| **Accessibility Rating** | 5/10 (radial layout challenging, needs labels) |
| **Recommended Libraries** | D3.js, Plotly, Observable |
| **Color Recommendations** | Color by category or level, distinct from children |
| **Interaction Level** | HIGH (click to zoom, hover for detail) |
| **SVG vs Canvas** | SVG (better for interaction) |
| **Implementation** | Custom D3 or use Plotly sunburst |
| **Best For** | Directory structure, organization hierarchy, classification breakdown |
| **Avoid** | More than 4 levels (too complex), poor label placement |
| **Feature** | Click to zoom in/out on specific segment |

---

## 13. Sankey Diagram

| Aspect | Details |
|--------|---------|
| **When to Use** | Show flow of values between entities, energy/resource tracking |
| **When NOT to Use** | Simple relationships (use network), too many flows |
| **Data Volume** | 20-100+ nodes, connections |
| **Accessibility Rating** | 5/10 (requires explanation, needs labels) |
| **Recommended Libraries** | D3.js, Observable, Plotly |
| **Color Recommendations** | Color by source or destination, consistent across flows |
| **Interaction Level** | MEDIUM (hover to highlight flow) |
| **SVG vs Canvas** | SVG (better for flow visualization) |
| **Implementation** | D3 Sankey layout or custom |
| **Best For** | Energy flow, revenue distribution, user journey tracking |
| **Avoid** | More than 10 sources/destinations, crossing flows without clarity |
| **Enhancement** | Highlight related flows on hover, show values |

---

## 14. Network Diagram

| Aspect | Details |
|--------|---------|
| **When to Use** | Show relationships between entities, network structure |
| **When NOT to Use** | Simple hierarchies (use tree), very large networks (1000+ nodes) |
| **Data Volume** | 20-200 nodes, 30-500 connections |
| **Accessibility Rating** | 4/10 (complex to understand, needs labels) |
| **Recommended Libraries** | D3.js, Cytoscape.js, Vis.js |
| **Color Recommendations** | Color by category or connection type |
| **Interaction Level** | HIGH (drag, zoom, filter) |
| **SVG vs Canvas** | Canvas (better for many nodes) |
| **Implementation** | D3 force layout or use Cytoscape |
| **Best For** | Social networks, knowledge graphs, system architecture |
| **Avoid** | Too many connections (> 500), unlabeled nodes |
| **Feature** | Filter by connection type, drag to explore |

---

## 15. Gantt Chart

| Aspect | Details |
|--------|---------|
| **When to Use** | Project timeline, task scheduling, timeline visualization |
| **When NOT to Use** | Simple time series (use line), no task dependencies |
| **Data Volume** | 10-100+ tasks |
| **Accessibility Rating** | 8/10 (clear visual timeline) |
| **Recommended Libraries** | D3.js, FrappeGantt, Plotly |
| **Color Recommendations** | Color by status (on-track, delayed, done) |
| **Interaction Level** | MEDIUM (hover for details, drag for updates) |
| **SVG vs Canvas** | SVG (better for tasks) |
| **Implementation** | Custom D3 or use library like FrappeGantt |
| **Best For** | Project management, timeline tracking, milestone visualization |
| **Avoid** | Too many tasks without grouping, unclear dependencies |
| **Feature** | Show dependencies, critical path, current progress |

---

## 16. Waterfall Chart

| Aspect | Details |
|--------|---------|
| **When to Use** | Show cumulative effect of sequential values (positive/negative) |
| **When NOT to Use** | Non-sequential data, simple subtotals |
| **Data Volume** | 5-20 segments optimal |
| **Accessibility Rating** | 8/10 (clear concept with labels) |
| **Recommended Libraries** | ApexCharts, Plotly, Custom |
| **Color Recommendations** | Green (positive), red (negative), gray (total) |
| **Interaction Level** | LOW (hover for values) |
| **SVG vs Canvas** | SVG (cleaner appearance) |
| **Implementation** | ApexCharts waterfall or custom bar chart |
| **Best For** | Profit margin breakdown, cash flow, budget variance |
| **Avoid** | More than 20 segments, similar positive/negative |
| **Best Practice** | Start and end with total, show all intermediate steps |

---

## 17. Histogram

| Aspect | Details |
|--------|---------|
| **When to Use** | Show distribution of continuous data, frequency analysis |
| **When NOT to Use** | Categorical data (use bar), too few data points |
| **Data Volume** | 100+ data points |
| **Accessibility Rating** | 8/10 (clear distribution shape) |
| **Recommended Libraries** | D3.js, ApexCharts, Plotly |
| **Color Recommendations** | Single color with gradient for frequency |
| **Interaction Level** | MEDIUM (hover for range, click to filter) |
| **SVG vs Canvas** | Canvas (for many bins) |
| **Implementation** | Custom histogram using D3 or library option |
| **Best For** | User age distribution, performance metrics, test scores |
| **Avoid** | Too many or too few bins, unclear axis labels |
| **Tip** | Auto-calculate optimal bin count (Sturges' rule) |

---

## 18. Box Plot

| Aspect | Details |
|--------|---------|
| **When to Use** | Show distribution quartiles, outliers, statistical summary |
| **When NOT to Use** | Non-statistical audience (hard to understand), few data points |
| **Data Volume** | 20+ data points per group |
| **Accessibility Rating** | 6/10 (requires statistical knowledge) |
| **Recommended Libraries** | D3.js, ApexCharts, Plotly |
| **Color Recommendations** | Color by group or category |
| **Interaction Level** | MEDIUM (hover for values, see outliers) |
| **SVG vs Canvas** | SVG (cleaner appearance) |
| **Implementation** | Custom D3 or use Plotly box plot |
| **Best For** | Statistical analysis, comparing distributions, quality control |
| **Avoid** | Non-technical audiences without explanation |
| **Component** | Show median, quartiles, whiskers, outliers |

---

## 19. Violin Plot

| Aspect | Details |
|--------|---------|
| **When to Use** | Show full distribution shape plus summary stats |
| **When NOT to Use** | Non-statistical audience, simple comparisons |
| **Data Volume** | 20+ points per group |
| **Accessibility Rating** | 4/10 (advanced statistical visualization) |
| **Recommended Libraries** | D3.js, Plotly |
| **Color Recommendations** | Color by category, transparency for overlap |
| **Interaction Level** | MEDIUM (hover for detail) |
| **SVG vs Canvas** | SVG (better for shape visualization) |
| **Implementation** | Custom D3 or use Plotly |
| **Best For** | Statistical comparison, distribution analysis |
| **Avoid** | Non-expert audiences, too many overlapping violins |
| **Enhancement** | Show data points or box plot inside violin |

---

## 20. Combination Chart

| Aspect | Details |
|--------|---------|
| **When to Use** | Show multiple metrics with different scales (bars + line) |
| **When NOT to Use** | Too many series (> 5), unrelated metrics |
| **Data Volume** | 10-50 data points |
| **Accessibility Rating** | 7/10 (if well-labeled) |
| **Recommended Libraries** | Recharts, ApexCharts, Chart.js |
| **Color Recommendations** | Different colors for bar and line series |
| **Interaction Level** | MEDIUM (hover for tooltips, filter series) |
| **SVG vs Canvas** | SVG (better for mixed chart types) |
| **Implementation** | `<ComposedChart><Bar /><Line /></ComposedChart>` |
| **Best For** | Sales volume + revenue, temperature + humidity, units + profit |
| **Avoid** | More than 5 series, unrelated metrics, scale confusion |
| **Best Practice** | Use secondary y-axis for different scale ranges |

---

## 21. Radial/Polar Chart

| Aspect | Details |
|--------|---------|
| **When to Use** | Compare multiple variables on same scale, circular layout |
| **When NOT to Use** | More than 8 variables, non-comparative data |
| **Data Volume** | 3-8 variables per entity |
| **Accessibility Rating** | 6/10 (area comparison challenging) |
| **Recommended Libraries** | ApexCharts, D3.js, Chart.js |
| **Color Recommendations** | Color by entity, fill with transparency |
| **Interaction Level** | LOW (hover for values) |
| **SVG vs Canvas** | SVG (better for shapes) |
| **Implementation** | ApexCharts radar or custom D3 |
| **Best For** | Product comparison, skill profiling, performance matrix |
| **Avoid** | Too many axes (> 8), extreme value differences |
| **Feature** | Compare multiple entities on same chart |

---

## 22. Slope Chart

| Aspect | Details |
|--------|---------|
| **When to Use** | Compare values between two time points, show change direction |
| **When NOT to Use** | More than 2 time periods, many overlapping lines |
| **Data Volume** | 5-50 items |
| **Accessibility Rating** | 8/10 (clear slope direction and values) |
| **Recommended Libraries** | D3.js, Recharts, Custom |
| **Color Recommendations** | Color by direction (up/down) or category |
| **Interaction Level** | MEDIUM (hover for values, highlight items) |
| **SVG vs Canvas** | SVG (better for lines) |
| **Implementation** | Custom D3 or styled line chart |
| **Best For** | Before/after comparison, ranking changes, progress tracking |
| **Avoid** | More than 50 items (cluttered), too many crossing lines |
| **Enhancement** | Label endpoints with values, use color to show direction |

---

## 23. Alluvial Diagram

| Aspect | Details |
|--------|---------|
| **When to Use** | Show changes in categorical data across time/segments |
| **When NOT to Use** | Precise value reading, simple flow (use Sankey) |
| **Data Volume** | 20-100+ entities |
| **Accessibility Rating** | 4/10 (complex, needs explanation) |
| **Recommended Libraries** | D3.js, Observable |
| **Color Recommendations** | Color by source category, consistent across flow |
| **Interaction Level** | MEDIUM (hover to highlight flow) |
| **SVG vs Canvas** | SVG (better for flow) |
| **Implementation** | Custom D3 alluvial |
| **Best For** | Career path tracking, migration patterns, category transitions |
| **Avoid** | Too many categories, unclear flow direction |
| **Feature** | Show flow thickness by magnitude |

---

## 24. Bullet Chart

| Aspect | Details |
|--------|---------|
| **When to Use** | Compare value against goal/target, show performance |
| **When NOT to Use** | Many metrics (use performance matrix), no baseline |
| **Data Volume** | 3-20 metrics optimal |
| **Accessibility Rating** | 8/10 (clear target indication) |
| **Recommended Libraries** | D3.js, Custom |
| **Color Recommendations** | Value color, target as different accent, ranges as opacity |
| **Interaction Level** | LOW (hover for detail) |
| **SVG vs Canvas** | SVG (horizontal bar cleaner) |
| **Implementation** | Custom component using horizontal bar structure |
| **Best For** | KPI dashboards, performance tracking, goal monitoring |
| **Avoid** | Too many metrics, unclear ranges |
| **Component** | Show actual value, target line, performance ranges |

---

## 25. Small Multiples (Faceted Chart)

| Aspect | Details |
|--------|---------|
| **When to Use** | Show same chart type across multiple categories, compare patterns |
| **When NOT to Use** | Single category, few dimensions |
| **Data Volume** | Varies (scales with number of facets) |
| **Accessibility Rating** | 8/10 (clear comparison within same type) |
| **Recommended Libraries** | D3.js, Recharts, ApexCharts (conditional rendering) |
| **Color Recommendations** | Consistent colors across all facets |
| **Interaction Level** | MEDIUM (hover across facets, click) |
| **SVG vs Canvas** | SVG (better for multiple coordinated charts) |
| **Implementation** | Loop over categories, render same chart type for each |
| **Best For** | Comparing trends across regions, products, time periods |
| **Avoid** | Too many facets (> 12), inconsistent scales |
| **Best Practice** | Use aligned axes for easy comparison |

---

## Quick Selection Guide

### By Task
- **Comparing values**: Bar, Bullet, Slope
- **Showing trends**: Line, Area, Combination
- **Part-to-whole**: Pie, Doughnut, Stacked Bar, Treemap
- **Distribution**: Histogram, Box Plot, Violin Plot
- **Correlation**: Scatter, Bubble, Heatmap
- **Flow**: Sankey, Alluvial, Network
- **Hierarchy**: Treemap, Sunburst, Network
- **Time-based**: Gantt, Timeline, Line

### By Data Volume
- **Small (< 10 points)**: Bullet, Simple Bar, Slope
- **Medium (10-100)**: Line, Area, Bar, Pie
- **Large (100-1000)**: Scatter, Histogram, Heatmap
- **Extra Large (> 1000)**: Canvas-based Line, Scatter, Network

### By Accessibility
- **Best (9/10)**: Bar, Bullet, Line (with labels)
- **Good (7-8/10)**: Area, Combination, Gantt, Slope
- **Moderate (5-6/10)**: Scatter, Heatmap, Waterfall, Box Plot
- **Challenging (< 5/10)**: Pie, Network, Bubble, Sunburst

---

## Performance Optimization

1. **For Large Datasets (> 5000 points)**: Use Canvas rendering, implement virtualization
2. **For Many Categories (> 50)**: Use scrolling, horizontal layout, filter options
3. **For Interactive Charts**: Debounce hover events, lazy load details
4. **For Multiple Charts**: Consider if small multiples is better than overlay

---

## Accessibility Best Practices

1. Always include axis labels and units
2. Provide data table alternative for critical data
3. Use patterns in addition to color for colorblind users
4. Add descriptive title and subtitle
5. Make interactive elements keyboard accessible
6. Include tooltips with context and values
