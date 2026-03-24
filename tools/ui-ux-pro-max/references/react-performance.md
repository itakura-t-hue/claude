# React/Next.js Performance Optimization Techniques

44 proven optimization techniques for building fast React and Next.js applications with code examples.

---

## 1. Code Splitting with Dynamic Imports

| Aspect | Details |
|--------|---------|
| **Category** | Bundle Optimization |
| **Description** | Load components only when needed, reduce initial bundle |
| **Severity** | HIGH |
| **When to Use** | Route pages, modal components, heavy features |
| **Code Before** | `import HeavyComponent from './heavy'` (always loaded) |
| **Code After** | `const HeavyComponent = dynamic(() => import('./heavy'))` |
| **Next.js** | `dynamic(() => import('./heavy'), { loading: () => <div>Loading...</div> })` |
| **Performance Gain** | 20-50% reduction in initial JS bundle |
| **Caution** | Slight delay on first interaction, plan loading state |

---

## 2. React.memo for Pure Components

| Aspect | Details |
|--------|---------|
| **Category** | Re-render Optimization |
| **Description** | Prevent unnecessary re-renders of unchanged components |
| **Severity** | MEDIUM |
| **When to Use** | Components with stable props, expensive renders |
| **Code Before** | `export default function Item({ data }) { return <div>{data}</div> }` |
| **Code After** | `export default React.memo(function Item({ data }) { return <div>{data}</div> })` |
| **With Custom Comparison** | `React.memo(Item, (prev, next) => prev.id === next.id)` |
| **Performance Gain** | 30-60% reduction in child re-renders |
| **Warning** | Compare props deeply; use shallow comparison only for primitives |

---

## 3. useCallback Hook

| Aspect | Details |
|--------|---------|
| **Category** | Re-render Optimization |
| **Description** | Memoize callback functions to prevent child re-renders |
| **Severity** | MEDIUM |
| **When to Use** | Callbacks passed to memoized children, event handlers |
| **Code Before** | `<ChildComponent onClick={() => handleClick(id)} />` |
| **Code After** | `const memoizedClick = useCallback(() => handleClick(id), [id]); <ChildComponent onClick={memoizedClick} />` |
| **Dependency Array** | Include all external values used in callback |
| **Performance Gain** | Prevents child component re-renders |
| **Caution** | Adds overhead if not used with React.memo children |

---

## 4. useMemo Hook

| Aspect | Details |
|--------|---------|
| **Category** | Computation Optimization |
| **Description** | Memoize expensive calculations, prevent recalculation |
| **Severity** | MEDIUM |
| **When to Use** | Expensive computations, large array operations |
| **Code Before** | `const filteredList = items.filter(i => i.active)` (recalculated every render) |
| **Code After** | `const filteredList = useMemo(() => items.filter(i => i.active), [items])` |
| **Dependency Array** | Must include all variables used in computation |
| **Performance Gain** | Skips recalculation if dependencies unchanged |
| **Common Usage** | Array.filter(), Array.map() with expensive operations |

---

## 5. Image Optimization (Next.js Image)

| Aspect | Details |
|--------|---------|
| **Category** | Asset Optimization |
| **Severity** | HIGH |
| **Description** | Automatic image optimization, responsive sizing, lazy loading |
| **When to Use** | All images in Next.js applications |
| **Code Before** | `<img src="/photo.jpg" alt="Photo" />` |
| **Code After** | `import Image from 'next/image'; <Image src="/photo.jpg" alt="Photo" width={400} height={300} />` |
| **With Responsive** | `<Image ... sizes="(max-width: 768px) 100vw, 50vw" />` |
| **Performance Gain** | 50-80% image size reduction, faster load times |
| **Lazy Loading** | Built-in, loads images as they enter viewport |

---

## 6. Lazy Loading (Intersection Observer)

| Aspect | Details |
|--------|---------|
| **Category** | Asset Optimization |
| **Severity** | HIGH |
| **Description** | Defer loading off-screen content until visible |
| **When to Use** | Below-fold sections, modals, heavy components |
| **Code Before** | All components rendered immediately |
| **Code After** | Use `react-intersection-observer` or custom hook |
| **Custom Hook** | `const ref = useRef(); useEffect(() => { const obs = new IntersectionObserver(callback); obs.observe(ref.current); }, [])` |
| **Library** | `npm install react-intersection-observer` |
| **Performance Gain** | 40-60% faster initial page load |
| **Best Practice** | Always provide placeholder/skeleton while loading |

---

## 7. Production Build & Tree Shaking

| Aspect | Details |
|--------|---------|
| **Category** | Bundle Optimization |
| **Severity** | HIGH |
| **Description** | Remove unused code from production builds |
| **When to Use** | Always use production builds for deployment |
| **Next.js** | `next build && next start` (automatic tree shaking) |
| **Webpack Config** | Ensure `mode: 'production'` and `usedExports: true` |
| **Dependencies** | Import specific functions: `import { map } from 'lodash-es'` not `import lodash` |
| **Performance Gain** | 30-60% smaller bundle size |
| **ESM Modules** | Ensure dependencies are published as ESM for tree shaking |

---

## 8. Bundle Analysis

| Aspect | Details |
|--------|---------|
| **Category** | Bundle Optimization |
| **Severity** | MEDIUM |
| **Description** | Analyze bundle size to identify large dependencies |
| **When to Use** | During development, before major releases |
| **Next.js** | `npm install --save-dev @next/bundle-analyzer` |
| **Config** | `const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true' }); module.exports = withBundleAnalyzer({});` |
| **Run** | `ANALYZE=true npm run build` |
| **Benefits** | Identify and replace large dependencies |
| **Target** | Initial JS bundle under 100KB (gzipped) |

---

## 9. Font Optimization

| Aspect | Details |
|--------|---------|
| **Category** | Asset Optimization |
| **Severity** | MEDIUM |
| **Description** | Optimize font loading to prevent layout shift |
| **When to Use** | All custom fonts |
| **CSS** | `@font-face { font-display: swap; }` |
| **Next.js** | `import { Inter } from 'next/font/google'; const inter = Inter();` (automatic optimization) |
| **Font Display** | `swap` (FOIT) → `block` → `swap` is optimal |
| **Performance Gain** | Prevents Cumulative Layout Shift (CLS) |
| **Caution** | System fonts fallback while loading |

---

## 10. Minification & Compression

| Aspect | Details |
|--------|---------|
| **Category** | Bundle Optimization |
| **Severity** | HIGH |
| **Description** | Remove comments, whitespace, minify CSS/JS |
| **When to Use** | All production builds |
| **Next.js** | Automatic in production |
| **webpack** | Set `mode: 'production'` for automatic minification |
| **CSS** | Use `cssnano` or PostCSS plugins |
| **gzip** | Enable on server (`gzip on;` in nginx) |
| **Performance Gain** | 40-70% file size reduction with gzip |
| **Server Config** | Ensure `Content-Encoding: gzip` headers |

---

## 11. Critical CSS Inlining

| Aspect | Details |
|--------|---------|
| **Category** | Render Performance |
| **Severity** | HIGH |
| **Description** | Inline above-fold CSS to reduce render-blocking |
| **When to Use** | Always, for critical page styles |
| **Next.js** | Use `next/style` with inline styles for critical CSS |
| **Manual** | Identify above-fold CSS, inline in `<style>` tag |
| **Tool** | `npm install critical` for critical CSS extraction |
| **Code** | `<style dangerouslySetInnerHTML={{ __html: criticalCSS }} />` |
| **Performance Gain** | Faster First Contentful Paint (FCP) |
| **Best Practice** | Defer non-critical CSS with `media="print"` then switch |

---

## 12. Defer Non-Critical JavaScript

| Aspect | Details |
|--------|---------|
| **Category** | Render Performance |
| **Severity** | HIGH |
| **Description** | Load non-critical JS with `async` or `defer` attribute |
| **When to Use** | Analytics, third-party scripts, below-fold JS |
| **Code Before** | `<script src="analytics.js"></script>` (blocking) |
| **Code After** | `<script async src="analytics.js"></script>` |
| **Defer** | `<script defer src="heavy-util.js"></script>` (maintains order) |
| **Next.js** | `<Script strategy="lazyOnload" />` for third-party scripts |
| **Performance Gain** | Faster page interactivity |
| **When to Use Each** | `async` for independent scripts, `defer` for dependent |

---

## 13. Route Prefetching

| Aspect | Details |
|--------|---------|
| **Category** | Navigation Performance |
| **Severity** | MEDIUM |
| **Description** | Prefetch data for likely next routes in background |
| **When to Use** | Internal navigation, predictable user flows |
| **Next.js Link** | `<Link href="/about" prefetch={true} />` (default) |
| **SWR** | `useSWR(url, fetcher, { revalidateOnFocus: false })` |
| **React Query** | `const prefetchQuery = useQueryClient().prefetchQuery(...)` |
| **Manual** | Fetch in `useEffect` with abort signal on route change |
| **Performance Gain** | Instant navigation to prefetched routes |
| **Best Practice** | Prefetch on link hover, not on page load |

---

## 14. Virtual Scrolling for Long Lists

| Aspect | Details |
|--------|---------|
| **Category** | Rendering Performance |
| **Severity** | HIGH |
| **Description** | Render only visible list items, hide off-screen items |
| **When to Use** | Lists with 100+ items |
| **Library** | `npm install react-window` or `react-virtualized` |
| **Code Example** | `<FixedSizeList height={600} itemCount={1000} itemSize={35}> {({ index, style }) => <div style={style}>{items[index]}</div>} </FixedSizeList>` |
| **Performance Gain** | 90% reduction in DOM nodes for long lists |
| **Alternative** | `npm install @tanstack/react-virtual` (modern alternative) |
| **Caution** | Search/filter within virtual lists needs special handling |

---

## 15. Infinite Scroll with Intersection Observer

| Aspect | Details |
|--------|---------|
| **Category** | Navigation Performance |
| **Severity** | MEDIUM |
| **Description** | Load more items when user scrolls to bottom |
| **When to Use** | Feeds, product listings, infinite content |
| **Code** | `const { ref, inView } = useInView(); useEffect(() => { if (inView) loadMore(); }, [inView]);` |
| **Implementation** | Sentinel element at bottom, trigger load on visibility |
| **Performance Gain** | Avoids loading all items at once |
| **Alternative** | Pagination is often better for SEO |
| **Best Practice** | Show loading indicator while fetching next page |

---

## 16. Compress Static Assets

| Aspect | Details |
|--------|---------|
| **Category** | Asset Optimization |
| **Severity** | MEDIUM |
| **Description** | Use gzip or Brotli compression for static files |
| **When to Use** | All deployments |
| **Server Config** | nginx: `gzip on; gzip_types text/css application/javascript;` |
| **Vercel** | Automatic compression |
| **Manual** | `gzip -9 file.js` for pre-compression |
| **Brotli** | Better compression than gzip, use `accept-encoding: br` |
| **Performance Gain** | 40-70% size reduction (often transparent) |
| **Note** | Ensure `Content-Encoding` headers are set |

---

## 17. Optimize Third-Party Scripts

| Aspect | Details |
|--------|---------|
| **Category** | Third-Party Performance |
| **Severity** | HIGH |
| **Description** | Load analytics, ads, chat scripts asynchronously |
| **When to Use** | All third-party scripts (analytics, ads, chat) |
| **Code Before** | `<script src="analytics.js"></script>` (blocking) |
| **Code After** | `<script async src="analytics.js"></script>` or use web workers |
| **Next.js** | `<Script strategy="afterInteractive" src="..." />` |
| **Facade Pattern** | Show placeholder, load script on interaction |
| **Performance Gain** | Prevents third-party scripts from blocking render |
| **Best Practice** | Load after `onLoad` or on user interaction |

---

## 18. Reduce JavaScript Execution Time

| Aspect | Details |
|--------|---------|
| **Category** | Runtime Performance |
| **Severity** | HIGH |
| **Description** | Profile and optimize slow JavaScript execution |
| **When to Use** | When page is slow to interact with |
| **Tools** | Chrome DevTools Performance tab, Lighthouse |
| **Code Before** | Nested loops: `for (let i=0; i<1000; i++) { for (let j=0; j<1000; j++) { calc() } }` |
| **Code After** | Use memoization, cache results, batch operations |
| **Example** | `const cache = {}; function expensive(val) { if (cache[val]) return cache[val]; const result = calc(val); cache[val] = result; return result; }` |
| **Target** | Keep main thread free, < 50ms per interaction |
| **Web Workers** | Move heavy computation to background thread |

---

## 19. Optimize React Context

| Aspect | Details |
|--------|---------|
| **Category** | Re-render Optimization |
| **Severity** | MEDIUM |
| **Description** | Prevent unnecessary re-renders from context changes |
| **When to Use** | Large context that changes frequently |
| **Code Before** | `const value = { user, setUser, theme, setTheme }; <Context.Provider value={value}>` (all consumers re-render) |
| **Code After** | Split context: UserContext, ThemeContext |
| **Memoization** | `const value = useMemo(() => ({ user, setUser }), [user])` |
| **Subscription Pattern** | Use useCallback to return stable reference |
| **Library** | `npm install zustand` or `jotai` for lighter state |
| **Performance Gain** | 50-80% reduction in context-induced re-renders |

---

## 20. Preload Critical Resources

| Aspect | Details |
|--------|---------|
| **Category** | Asset Optimization |
| **Severity** | MEDIUM |
| **Description** | Hint browser to preload critical fonts, scripts |
| **When to Use** | Critical fonts, async scripts |
| **Code** | `<link rel="preload" href="/font.woff2" as="font" type="font/woff2" crossorigin />` |
| **For Scripts** | `<link rel="preload" href="/async-script.js" as="script" />` |
| **Difference** | `preload` starts loading immediately, `prefetch` is lower priority |
| **Performance Gain** | 100-300ms faster load for critical resources |
| **Caution** | Preload only truly critical resources |

---

## 21. Server-Side Rendering (SSR) / Static Generation

| Aspect | Details |
|--------|---------|
| **Category** | Page Load Performance |
| **Severity** | HIGH |
| **Description** | Render HTML on server or at build time |
| **When to Use** | All Next.js pages |
| **Static (getStaticProps)** | `export async function getStaticProps() { const data = await fetch(...); return { props: { data }, revalidate: 60 }; }` |
| **SSR (getServerSideProps)** | `export async function getServerSideProps() { const data = await fetch(...); return { props: { data } }; }` |
| **ISR (Incremental)** | Use `revalidate` in getStaticProps |
| **Performance Gain** | Faster FCP, better SEO, no flash of unstyled content |
| **Best Practice** | Use static generation (getStaticProps) when possible |

---

## 22. Streaming / Progressive Enhancement

| Aspect | Details |
|--------|---------|
| **Category** | Page Load Performance |
| **Severity** | MEDIUM |
| **Description** | Stream content to browser progressively (React 18+) |
| **When to Use** | Large page components, async data |
| **Code** | `<Suspense fallback={<Skeleton />}> <AsyncComponent /> </Suspense>` |
| **RSC (Server Components)** | `export default async function Page() { const data = await fetch(...); return <div>{data}</div>; }` |
| **Next.js 13+** | Automatic server components with `app` directory |
| **Performance Gain** | Show content faster, don't wait for all data |
| **Browser Support** | Requires modern browsers (Chrome 90+) |

---

## 23. Hydration Optimization

| Aspect | Details |
|--------|---------|
| **Category** | Page Load Performance |
| **Severity** | MEDIUM |
| **Description** | Optimize hydration to prevent Hydration Mismatch |
| **When to Use** | SSR/SSG pages with dynamic content |
| **Code Before** | SSR + interactive immediately (slow) |
| **Code After** | Use lazy hydration: `const Component = dynamic(() => import('./comp'), { ssr: false })` |
| **Pattern** | Render SSR HTML, then hydrate only above-fold |
| **Next.js** | Built-in optimization with streaming |
| **Performance Gain** | Faster interactive time |
| **Caution** | Ensure SSR output matches client output |

---

## 24. Optimize Redux/State Management

| Aspect | Details |
|--------|---------|
| **Category** | State Management |
| **Severity** | MEDIUM |
| **Description** | Use selectors, memoize reducers to prevent re-renders |
| **When to Use** | Redux applications |
| **Redux Toolkit** | Use `createSlice`, automatic immer optimization |
| **Selectors** | Use `reselect` for memoized selectors: `const selectUser = createSelector(state => state.user, user => user)` |
| **Shallowly Memoized** | `const user = useSelector(state => state.user, shallowEqual)` |
| **Performance Gain** | 40-60% reduction in selector-induced re-renders |
| **Best Practice** | Normalize state shape, use shallow comparison |

---

## 25. Optimize CSS-in-JS

| Aspect | Details |
|--------|---------|
| **Category** | Styling Performance |
| **Severity** | MEDIUM |
| **Description** | Use performant CSS-in-JS libraries |
| **When to Use** | Component styling |
| **Emotion** | `npm install @emotion/react` - similar to styled-components but faster |
| **Avoid** | Inline object styles that change: `style={{ color: computed() }}` |
| **Tailwind** | Static CSS is fastest (no runtime overhead) |
| **Code** | Use CSS modules or Tailwind instead of runtime CSS-in-JS when possible |
| **Performance** | Tailwind/CSS modules: 0ms runtime, Emotion/styled: 1-5ms |
| **Caution** | Runtime CSS-in-JS has serialization overhead |

---

## 26. Optimize Font Loading Strategy

| Aspect | Details |
|--------|---------|
| **Category** | Asset Optimization |
| **Severity** | MEDIUM |
| **Description** | Use optimal font-display strategy |
| **When to Use** | Custom fonts |
| **font-display: swap** | Show system font immediately, swap custom font when ready (recommended) |
| **font-display: block** | Hide text until font loads (not recommended) |
| **font-display: fallback** | Compromise (300ms block, then swap) |
| **Preload Fonts** | `<link rel="preload" href="/font.woff2" as="font" crossorigin />` |
| **Performance Gain** | Prevents invisible text, faster perceived load |
| **Best Practice** | Use `font-display: swap` for all custom fonts |

---

## 27. Optimize Event Listeners

| Aspect | Details |
|--------|---------|
| **Category** | Runtime Performance |
| **Severity** | MEDIUM |
| **Description** | Debounce/throttle event handlers to reduce execution |
| **When to Use** | Window resize, scroll, input events |
| **Code Before** | `window.addEventListener('resize', () => recalculate())` (fires 100+ times) |
| **Code After** | `const debounced = debounce(() => recalculate(), 300); window.addEventListener('resize', debounced);` |
| **Throttle** | Keep function executing at regular intervals: `throttle(fn, 16)` |
| **Library** | `npm install lodash-es` and use `debounce`, `throttle` |
| **Performance Gain** | 90% reduction in event handler calls |
| **React Hook** | Use custom `useDebounce` or `useThrottle` hook |

---

## 28. Optimize CSS Selectors

| Aspect | Details |
|--------|---------|
| **Category** | Styling Performance |
| **Severity** | LOW |
| **Description** | Use efficient CSS selectors to speed up rendering |
| **When to Use** | Complex stylesheets |
| **Code Before** | `body .container .card .title` (slow, right-to-left matching) |
| **Code After** | `.card-title` (direct class, single selector) |
| **Best Practice** | Use single class selectors, avoid deep descendant selectors |
| **Target** | Modern browsers are fast, optimization minimal benefit |
| **CSS-in-JS** | Generates efficient selectors automatically |
| **Performance Gain** | Negligible in modern browsers (< 5ms) |

---

## 29. Viewport Meta Tag & Responsive Design

| Aspect | Details |
|--------|---------|
| **Category** | Mobile Performance |
| **Severity** | HIGH |
| **Description** | Proper viewport configuration for mobile |
| **When to Use** | Always |
| **Code** | `<meta name="viewport" content="width=device-width, initial-scale=1">` |
| **Avoid** | `user-scalable=no` (harms accessibility) |
| **Performance** | Essential for mobile rendering performance |
| **Best Practice** | Always include, allows proper mobile layout |
| **Double-Tap Zoom** | Can be disabled with `viewport-fit=cover` if needed |

---

## 30. Database Query Optimization

| Aspect | Details |
|--------|---------|
| **Category** | Backend Performance |
| **Severity** | HIGH |
| **Description** | Optimize API responses to reduce data transfer |
| **When to Use** | All API endpoints |
| **Code Before** | `return await db.users.findAll()` (all fields) |
| **Code After** | `return await db.users.findAll().select('id', 'name', 'email')` |
| **Pagination** | Limit results: `where().limit(50).offset(page * 50)` |
| **Caching** | Cache frequently accessed data |
| **Performance Gain** | 50-80% reduction in response size |
| **Best Practice** | Fetch only required fields, paginate large datasets |

---

## 31. API Response Caching

| Aspect | Details |
|--------|---------|
| **Category** | Network Performance |
| **Severity** | MEDIUM |
| **Description** | Cache API responses to reduce network requests |
| **When to Use** | Stable data (user profile, settings, lists) |
| **HTTP Cache Headers** | `Cache-Control: max-age=3600, public` |
| **SWR Library** | `useSWR(url, fetcher, { revalidateOnFocus: false })` |
| **React Query** | `useQuery(key, fn, { staleTime: 300000 })` |
| **Browser Cache** | Leverage service workers for offline support |
| **Performance Gain** | 90% faster access to cached data |
| **Best Practice** | Cache static data, revalidate on specific user actions |

---

## 32. Optimize Redux DevTools

| Aspect | Details |
|--------|---------|
| **Category** | Development Performance |
| **Severity** | LOW |
| **Description** | Disable Redux DevTools in production |
| **When to Use** | Redux applications |
| **Code** | `const store = configureStore({ devTools: process.env.NODE_ENV !== 'production' })` |
| **Performance** | DevTools has overhead in production |
| **Alternative** | Use modern React DevTools instead |

---

## 33. Optimize Animations Performance

| Aspect | Details |
|--------|---------|
| **Category** | Runtime Performance |
| **Severity** | MEDIUM |
| **Description** | Use GPU-accelerated animations |
| **When to Use** | Complex animations, many animated elements |
| **Code Before** | `animate({ left: 0 })` (reflow/repaint heavy) |
| **Code After** | `animate({ transform: 'translateX(0)' })` (GPU accelerated) |
| **Framer Motion** | `<motion.div animate={{ x: 100 }} />` (optimized) |
| **CSS Animations** | Use `@keyframes` with `transform` and `opacity` |
| **Performance Gain** | 60 FPS animations vs. 30 FPS |
| **Best Practice** | Use CSS animations for simple, Web Animations API for complex |

---

## 34. Lazy Load Modals and Heavy Components

| Aspect | Details |
|--------|---------|
| **Category** | Bundle Optimization |
| **Severity** | MEDIUM |
| **Description** | Load modal or heavy component only when opened |
| **When to Use** | Modals, sidebars, drawers, paywalls |
| **Code Before** | Modal loaded in initial bundle |
| **Code After** | `const Modal = lazy(() => import('./Modal')); <Suspense fallback={null}><Modal isOpen={isOpen} /></Suspense>` |
| **Dynamic Import** | `dynamic(() => import('./Modal'), { loading: null })` |
| **Performance Gain** | Reduce initial bundle by modal size |
| **Best Practice** | Always use null or no loading fallback for modals |

---

## 35. Optimize Form Input Handling

| Aspect | Details |
|--------|---------|
| **Category** | Runtime Performance |
| **Severity** | MEDIUM |
| **Description** | Optimize form input onChange handlers |
| **When to Use** | Forms with onChange handlers |
| **Code Before** | `<input onChange={(e) => setForm({ ...form, name: e.target.value })} />` |
| **Code After** | Use useCallback + controlled inputs with separate state management |
| **Library** | React Hook Form: `npm install react-hook-form` |
| **Uncontrolled** | `const ref = useRef(); const value = ref.current.value;` |
| **Performance Gain** | Reduce re-renders during typing |
| **Best Practice** | Use React Hook Form for complex forms |

---

## 36. Optimize Loading States

| Aspect | Details |
|--------|---------|
| **Category** | User Experience |
| **Severity** | MEDIUM |
| **Description** | Show skeleton screens or loading indicators |
| **When to Use** | Data fetching, async operations |
| **Skeleton** | `npm install react-loading-skeleton` |
| **Code** | `{isLoading ? <Skeleton /> : <Content />}` |
| **Suspense** | Use React Suspense with fallback skeletons |
| **Performance Gain** | Perceived faster load |
| **Best Practice** | Always show something while loading (not blank) |

---

## 37. Optimize SEO for Performance

| Aspect | Details |
|--------|---------|
| **Category** | Page Load Performance |
| **Severity** | MEDIUM |
| **Description** | Optimize Core Web Vitals for SEO ranking |
| **When to Use** | All web applications |
| **LCP (Largest Contentful Paint)** | Optimize hero image, ensure < 2.5s |
| **FID (First Input Delay)** | Keep main thread free, < 100ms response |
| **CLS (Cumulative Layout Shift)** | Prevent layout shifts, < 0.1 score |
| **Tool** | `npm install web-vitals` for tracking |
| **Google PageSpeed** | Use Lighthouse to audit performance |
| **Performance Gain** | Higher search rankings, better user experience |

---

## 38. Optimize Mobile Performance Specifically

| Aspect | Details |
|--------|---------|
| **Category** | Mobile Performance |
| **Severity** | HIGH |
| **Description** | Optimize for mobile networks and devices |
| **When to Use** | Mobile users (majority of traffic) |
| **Network** | Optimize for 4G speeds (~4Mbps), not fiber |
| **Device** | Target lower-end phones, not just flagships |
| **Responsive Images** | Use srcset for different screen densities |
| **Avoid** | Auto-playing videos, heavy animations on mobile |
| **Performance Gain** | 30-50% faster on mobile networks |
| **Best Practice** | Test on real mobile devices and slow networks |

---

## 39. Optimize Web Vitals

| Aspect | Details |
|--------|---------|
| **Category** | Page Performance |
| **Severity** | HIGH |
| **Description** | Track and optimize Google Core Web Vitals |
| **When to Use** | All web applications (Google ranking factor) |
| **LCP** | Largest Contentful Paint (< 2.5s target) |
| **INP** | Interaction to Next Paint (< 200ms target) |
| **CLS** | Cumulative Layout Shift (< 0.1 target) |
| **Tool** | Google Lighthouse, Web Vitals Chrome extension |
| **Code** | `npm install web-vitals` to programmatically track |
| **Performance Gain** | Better SEO ranking, better UX |

---

## 40. Use Service Workers for Caching

| Aspect | Details |
|--------|---------|
| **Category** | Network Performance |
| **Severity** | MEDIUM |
| **Description** | Cache assets for offline support and faster load |
| **When to Use** | Progressive Web Apps (PWA) |
| **Next.js** | `npm install next-pwa` |
| **Manual** | Create `service-worker.js` and register |
| **Cache Strategy** | Cache-first for assets, network-first for API |
| **Performance Gain** | Instant load on repeat visits, offline support |
| **Browser Support** | All modern browsers support service workers |

---

## 41. Optimize Webpack Configuration

| Aspect | Details |
|--------|---------|
| **Category** | Build Performance |
| **Severity** | LOW |
| **Description** | Optimize webpack config for faster builds and smaller bundles |
| **When to Use** | Custom webpack configs (Next.js auto-optimizes) |
| **Splitchunks** | Separate vendor chunks: `optimization: { splitChunks: { chunks: 'all' } }` |
| **Terser** | Minify JS: `npm install terser-webpack-plugin` |
| **CSS Extract** | `npm install mini-css-extract-plugin` |
| **Performance Gain** | 20-40% faster builds |
| **Next.js** | Auto-optimized, no manual config needed |

---

## 42. Monitor Performance in Production

| Aspect | Details |
|--------|---------|
| **Category** | Performance Monitoring |
| **Severity** | MEDIUM |
| **Description** | Track real-world performance metrics |
| **When to Use** | All production applications |
| **Services** | Vercel Analytics, Datadog, New Relic, Sentry |
| **Custom** | Google Analytics with Web Vitals |
| **Code** | Send metrics to analytics service regularly |
| **Alerting** | Set up alerts for performance regressions |
| **Performance Gain** | Identify bottlenecks quickly, data-driven optimization |

---

## 43. Optimize Build Size for Next.js

| Aspect | Details |
|--------|---------|
| **Category** | Build Optimization |
| **Severity** | MEDIUM |
| **Description** | Reduce Next.js bundle size |
| **When to Use** | All Next.js applications |
| **Static Generation** | Use `getStaticProps` to reduce runtime JS |
| **Image Optimization** | Use Next.js Image component |
| **Remove Unused** | Audit dependencies with `npm list` |
| **Dynamic Imports** | Lazy load heavy routes with `dynamic()` |
| **Performance Gain** | 30-50% smaller initial JS bundle |
| **Target** | Total JS bundle < 200KB gzipped |

---

## 44. Use Modern JavaScript Features

| Aspect | Details |
|--------|---------|
| **Category** | Compatibility & Performance |
| **Severity** | LOW |
| **Description** | Use modern JS (ES2020+) for smaller transpiled code |
| **When to Use** | When targeting modern browsers |
| **Target** | `"target": "ES2020"` in tsconfig.json |
| **Benefits** | Smaller transpiled code, native features faster |
| **Caution** | Requires modern browser support (generally fine) |
| **Fallback** | Provide polyfills via `@babel/polyfill` if needed |
| **Performance Gain** | 10-20% smaller JS bundles |

---

## Performance Monitoring Checklist

- [ ] Track Core Web Vitals (LCP, INP, CLS)
- [ ] Monitor bundle size (< 100KB initial JS)
- [ ] Check Lighthouse score (target 90+)
- [ ] Test on slow 4G networks
- [ ] Audit with Chrome DevTools Performance tab
- [ ] Monitor real-world performance with analytics
- [ ] Set up alerts for regressions
- [ ] Regular performance audits (weekly/monthly)
- [ ] Profile with React DevTools Profiler
- [ ] Use Lighthouse CI in CI/CD pipeline

---

## Quick Wins (Easy, High Impact)

1. Next.js Image optimization
2. Code splitting with dynamic imports
3. Optimize font loading (font-display: swap)
4. Bundle analysis and large dependency removal
5. Server-side rendering (SSR) or static generation
6. Minification and compression (gzip)
7. Critical CSS inlining
8. Defer non-critical JavaScript
9. Lazy load below-fold content
10. Remove unused dependencies
