# 99 UX Guidelines

Comprehensive UX principles organized by category with severity levels, Do/Don't examples, and implementation guidance.

---

## Navigation (12 Guidelines)

### 1. Persistent Top Navigation
- **Category**: Navigation Structure
- **Severity**: HIGH
- **Guideline**: Keep main navigation accessible from every page without extra clicks
- **Do**: Fixed header with primary navigation always visible and accessible
- **Don't**: Hide navigation behind hamburger menu on desktop; require scroll to access
- **Implementation**: Use `position: fixed` or sticky header, ensure it doesn't cover critical content

### 2. Breadcrumb for Deep Hierarchies
- **Category**: Navigation Structure
- **Severity**: MEDIUM
- **Guideline**: Show user location in information hierarchy with breadcrumb trail
- **Do**: Home > Products > Electronics > Headphones (clickable at each level)
- **Don't**: Single level breadcrumb or no breadcrumb for 3+ level navigation
- **Implementation**: Dynamic breadcrumb that reflects actual page hierarchy

### 3. Clear Information Architecture
- **Category**: Navigation Structure
- **Severity**: HIGH
- **Guideline**: Organize content in predictable, scannable hierarchy with clear labels
- **Do**: Logical grouping, consistent terminology, 5-7 top-level items max
- **Don't**: Random grouping, inconsistent naming, 10+ top-level items
- **Implementation**: Card sort testing, information architecture audit

### 4. Mobile Hamburger Menu Conventions
- **Category**: Navigation Structure
- **Severity**: MEDIUM
- **Guideline**: Use hamburger menu only when necessary; show at least 3-4 top items on mobile
- **Do**: Show primary actions on mobile nav, hamburger for secondary; use three-line icon
- **Don't**: Hide all navigation; non-standard hamburger icons; scroll-heavy menus
- **Implementation**: Progressive disclosure, prioritized menu items

### 5. Search Always Available
- **Category**: Navigation Structure
- **Severity**: HIGH
- **Guideline**: Make search prominent and accessible from any page
- **Do**: Search icon or bar in header, always accessible, keyboard shortcut (Cmd+K)
- **Don't**: Search buried in footer; difficult to locate; slow search results
- **Implementation**: Global search with recent/popular suggestions, auto-complete

### 6. Consistent Navigation Styling
- **Category**: Navigation Structure
- **Severity**: MEDIUM
- **Guideline**: Use consistent visual indicators for current page and hover states
- **Do**: Underline/highlight for active nav item, color change on hover, clear indication
- **Don't**: Subtle active states; unclear which page is current; inconsistent hover
- **Implementation**: BEM naming, CSS classes for active/hover states

### 7. Footer Links Organization
- **Category**: Navigation Structure
- **Severity**: MEDIUM
- **Guideline**: Organize footer links by category, not random; include secondary navigation
- **Do**: Grouped links (Product, Company, Support, Legal), about/contact/social
- **Don't**: Random link order; too many sections; no clear categorization
- **Implementation**: Column-based footer layout, max 4-5 columns

### 8. Skip Navigation Links (Accessibility)
- **Category**: Navigation Structure
- **Severity**: HIGH
- **Guideline**: Provide skip-to-main-content link for keyboard/screen reader users
- **Do**: Hidden skip link that appears on focus (Ctrl+Tab), takes to main content
- **Don't**: No skip link; visible skip link cluttering design; non-functional skip link
- **Implementation**: `<a href="#main-content">Skip to main content</a>` hidden via CSS

### 9. Back Button Behavior
- **Category**: Navigation Structure
- **Severity**: MEDIUM
- **Guideline**: Back button should return to previous state, not always previous page
- **Do**: Remember scroll position, filter state, form inputs when returning
- **Don't**: Lose form data; scroll to top; different behavior than browser back
- **Implementation**: Window.history API, SessionStorage for state

### 10. Mobile Navigation Accessibility
- **Category**: Navigation Structure
- **Severity**: HIGH
- **Guideline**: Ensure navigation is touch-friendly with adequate target sizes
- **Do**: 44x44px minimum touch targets, 12px+ spacing between items
- **Don't**: Small buttons (< 30px); cramped menu; hard to tap on mobile
- **Implementation**: Touch-friendly spacing, semantic HTML nav element

### 11. Sticky Sidebar on Desktop
- **Category**: Navigation Structure
- **Severity**: MEDIUM
- **Guideline**: On desktop, stick sidebar navigation visible while scrolling main content
- **Do**: Sidebar stays visible; main content scrolls; clear active state in sidebar
- **Don't**: Sidebar scrolls with main content; unclear active navigation item
- **Implementation**: CSS position: sticky or JavaScript scroll detection

### 12. Deep Linking Support
- **Category**: Navigation Structure
- **Severity**: HIGH
- **Guideline**: Support direct links to specific pages/states within the app
- **Do**: All pages have unique, shareable URLs; state reflected in URL
- **Don't**: Single-page app with no URL changes; impossible to bookmark states
- **Implementation**: Proper routing, URL parameters for state

---

## Animation & Transitions (11 Guidelines)

### 13. Purposeful Animations Only
- **Category**: Animation
- **Severity**: MEDIUM
- **Guideline**: Every animation should serve a purpose (provide feedback, guide attention, illustrate change)
- **Do**: 200-400ms transitions for state changes, smooth enter/exit animations
- **Don't**: Gratuitous animations with no purpose; animations longer than 500ms
- **Implementation**: CSS transitions, React Framer Motion (300ms default duration)

### 14. Consistent Animation Timing
- **Category**: Animation
- **Severity**: MEDIUM
- **Guideline**: Use consistent timing and easing across all animations for cohesive feel
- **Do**: Stick to 200-300ms for interactions, 400-600ms for page transitions; ease-out for user-initiated
- **Don't**: Random animation durations; inconsistent easing; no animation at all
- **Implementation**: CSS custom properties for durations, cubic-bezier() for easing

### 15. Respect prefers-reduced-motion
- **Category**: Animation
- **Severity**: HIGH
- **Guideline**: Check for prefers-reduced-motion and reduce/disable animations for users who prefer
- **Do**: Test with `@media (prefers-reduced-motion: reduce)` and reduce animations by 50-75%
- **Don't**: Ignore accessibility preference; animations that can't be disabled
- **Implementation**: CSS media query, conditional React hooks

### 16. Loading States Must Be Obvious
- **Category**: Animation
- **Severity**: HIGH
- **Guideline**: Show clear loading indication for any action > 200ms
- **Do**: Skeleton screens, spinners, progress bars; must be clearly visible
- **Don't**: No loading indicator; unclear if action is processing; disappearing content
- **Implementation**: Skeleton screens for content, spinners for actions

### 17. Feedback for Every User Action
- **Category**: Animation
- **Severity**: HIGH
- **Guideline**: Provide visual feedback (animation, color, sound) for every user input
- **Do**: Button press feedback, copy feedback (visual toast), delete confirmation
- **Don't**: Silent errors, no button state change, no confirmation for destructive actions
- **Implementation**: Toast notifications, button active states, micro-interactions

### 18. Smooth Scrolling (Not Instant)
- **Category**: Animation
- **Severity**: MEDIUM
- **Guideline**: Use smooth scrolling for anchor links and scroll-to-top
- **Do**: 300-500ms scroll animation to target; smooth-scroll CSS property
- **Don't**: Instant jumps to anchor; jarring scroll behavior; no scroll animation
- **Implementation**: CSS scroll-behavior: smooth or JavaScript scrollIntoView

### 19. Page Transition Animations
- **Category**: Animation
- **Severity**: MEDIUM
- **Guideline**: Animate transitions between pages (fade, slide) to show navigation flow
- **Do**: 300ms fade or slide transition; exit animation + enter animation
- **Don't**: Jarring page jumps; animations > 500ms; different animations for each page
- **Implementation**: Framer Motion, Next.js layout animations

### 20. Hover State Animations
- **Category**: Animation
- **Severity**: MEDIUM
- **Guideline**: Provide subtle hover feedback on interactive elements
- **Do**: Smooth color transition (150-200ms), scale, shadow change on hover
- **Don't**: Jarring hover state change; no hover feedback; hover states disabled
- **Implementation**: CSS hover with transition or :hover pseudoclass

### 21. Disable Animations on Low-Powered Devices
- **Category**: Animation
- **Severity**: MEDIUM
- **Guideline**: Reduce animation count/complexity on mobile and low-powered devices
- **Do**: Check device capability, reduce particle effects, limit concurrent animations
- **Don't**: Same animation count as desktop; frame rate issues on mobile
- **Implementation**: Device detection, conditional animation rendering

### 22. Stagger Animations for Lists
- **Category**: Animation
- **Severity**: MEDIUM
- **Guideline**: Stagger list item animations for visual flow
- **Do**: Each item enters 50-100ms after previous; creates sense of motion
- **Don't**: All items animate simultaneously; no animation for list changes
- **Implementation**: Framer Motion staggerContainer, delay props

### 23. Animation Should Not Block Interaction
- **Category**: Animation
- **Severity**: HIGH
- **Guideline**: Users should be able to interact during animations (non-blocking animations)
- **Do**: Animations run in background while user can click/type
- **Don't**: Modal animations that prevent interaction; loading animations that freeze UI
- **Implementation**: CSS animations, non-blocking JavaScript animations

---

## Layout & Information Density (12 Guidelines)

### 24. Whitespace for Readability
- **Category**: Layout
- **Severity**: HIGH
- **Guideline**: Use adequate whitespace around content to improve scannability
- **Do**: 16-32px spacing between sections, 8-16px between elements
- **Don't**: Cramped layouts, minimal spacing, wall-of-text content
- **Implementation**: CSS gap property, margin/padding scale

### 25. Clear Visual Hierarchy
- **Category**: Layout
- **Severity**: HIGH
- **Guideline**: Use size, color, weight to establish clear hierarchy of importance
- **Do**: Important elements larger/bolder/more saturated color; secondary smaller/dimmer
- **Don't**: All elements same size/weight; unclear what's important
- **Implementation**: Type scale, color hierarchy, CSS font-weight variations

### 26. Responsive Grid System
- **Category**: Layout
- **Severity**: HIGH
- **Guideline**: Use consistent grid (12-column or similar) across all breakpoints
- **Do**: 12-column grid on desktop, 6-column on tablet, 4-column on mobile
- **Don't**: Random column counts; inconsistent spacing across breakpoints
- **Implementation**: CSS Grid, Tailwind grid utilities, responsive columns

### 27. Content Width Optimization
- **Category**: Layout
- **Severity**: MEDIUM
- **Guideline**: Limit content width for readability (60-100 characters for body text)
- **Do**: Max-width: 65-75 characters per line; center container on desktop
- **Don't**: Full-width text on desktop (hard to read); overly narrow on mobile
- **Implementation**: CSS max-width property, container queries

### 28. Card-Based Layout for Modularity
- **Category**: Layout
- **Severity**: MEDIUM
- **Guideline**: Use cards to organize related content for scannability
- **Do**: Distinct cards with padding, subtle shadows, consistent heights
- **Don't**: Flat list layout; inconsistent card styling; mixed layouts
- **Implementation**: Card components with consistent padding/spacing

### 29. Flexible Density Based on Context
- **Category**: Layout
- **Severity**: MEDIUM
- **Guideline**: Adjust information density based on user context (list view vs. detail view)
- **Do**: Compact lists for scanning, detailed views for full information
- **Don't**: Always maximum density; always sparse; no option for density change
- **Implementation**: View toggle (list/grid/detail), user preference for density

### 30. Modal Dimensions and Centering
- **Category**: Layout
- **Severity**: MEDIUM
- **Guideline**: Modal dialogs should have appropriate max-width and be vertically centered
- **Do**: Max-width: 400-600px for dialogs, vertically centered, 16px margins on mobile
- **Don't**: Full-width modals on desktop; centered at top; modals too large
- **Implementation**: CSS position absolute/fixed with flexbox centering

### 31. Sidebar + Main Content Layout
- **Category**: Layout
- **Severity**: MEDIUM
- **Guideline**: On desktop, use sidebar navigation with main content area
- **Do**: 250-300px sidebar on desktop, moves to top on mobile, sticky on scroll
- **Don't**: Sidebar overlaps content; sidebar not responsive; no main content focus
- **Implementation**: CSS Grid (sidebar + main), media query for mobile

### 32. Empty States Design
- **Category**: Layout
- **Severity**: MEDIUM
- **Guideline**: Design intentional empty states with helpful guidance
- **Do**: Show icon, clear message, action to populate (not just blank page)
- **Don't**: Completely blank page; unclear why empty; no action to fix
- **Implementation**: Conditional rendering based on data length

### 33. Form Layout and Alignment
- **Category**: Layout
- **Severity**: HIGH
- **Guideline**: Use consistent form layout with proper alignment and spacing
- **Do**: Single column on mobile, max 2 columns on desktop, proper label association
- **Don't**: 3+ columns on desktop; unclear labels; misaligned fields
- **Implementation**: Semantic HTML fieldset/label, CSS form layout

### 34. Footer Placement (Sticky or Standard)
- **Category**: Layout
- **Severity**: MEDIUM
- **Guideline**: Footer should be sticky on mobile (when content is short) but regular on desktop
- **Do**: Sticky footer on mobile to avoid orphaned footer; regular on desktop
- **Don't**: Always sticky footer; footer covers content; orphaned footer on mobile
- **Implementation**: CSS sticky footer techniques, Flexbox layout

### 35. Consistent Margins and Padding System
- **Category**: Layout
- **Severity**: MEDIUM
- **Guideline**: Use consistent spacing scale (8px, 16px, 24px, 32px) throughout
- **Do**: All margins/padding use scale values; documented in design system
- **Don't**: Random spacing values; inconsistent padding; no spacing system
- **Implementation**: CSS custom properties, Tailwind spacing scale

---

## Touch & Mobile Interaction (8 Guidelines)

### 36. Touch Target Minimum Size
- **Category**: Touch
- **Severity**: HIGH
- **Guideline**: All interactive elements must be at least 44x44px (Apple) or 48x48px (Google)
- **Do**: Buttons, links, and tappable areas at least 44x44px
- **Don't**: Small buttons (< 30px); cramped touch targets; difficult to tap
- **Implementation**: CSS min-width/min-height, padding for target expansion

### 37. Touch Feedback on Tap
- **Category**: Touch
- **Severity**: HIGH
- **Guideline**: Provide immediate visual feedback when user touches an interactive element
- **Do**: Color change, scale, or ripple effect; 100-200ms feedback duration
- **Don't**: No tap feedback; delayed feedback (> 300ms); unclear if action registered
- **Implementation**: :active pseudoclass, CSS active-touch states, React state

### 38. Avoid Hover-Dependent Interactions
- **Category**: Touch
- **Severity**: HIGH
- **Guideline**: Never hide critical information or actions behind hover states
- **Do**: Make actions visible on touch devices; use alternative patterns for secondary actions
- **Don't**: Actions only visible on hover; tooltips as primary information
- **Implementation**: Touch-friendly interfaces, no :hover-only UI

### 39. Double-Tap to Zoom Disabling
- **Category**: Touch
- **Severity**: MEDIUM
- **Guideline**: If implementing custom zoom, disable double-tap zoom; use viewport meta tag
- **Do**: `<meta name="viewport" content="width=device-width, initial-scale=1">`
- **Don't**: Default browser zoom; janky custom zoom; conflicting zoom behaviors
- **Implementation**: Viewport meta tag, touch-action CSS property

### 40. Swipe Gesture Discoverability
- **Category**: Touch
- **Severity**: MEDIUM
- **Guideline**: If using swipe gestures, make them obvious (visual cues, animations)
- **Do**: Carousel with visible left/right edges; swipe hint animation; also keyboard/button nav
- **Don't**: Hidden swipe gestures; no visual cue that swiping is possible
- **Implementation**: Visible carousel controls, swipe gesture library (Hammer.js, React Swipe)

### 41. Prevent Accidental Selection
- **Category**: Touch
- **Severity**: MEDIUM
- **Guideline**: Disable text selection and long-press menu on interactive elements
- **Do**: `user-select: none` on buttons/links; unintended menu prevention
- **Don't**: Users select text on interactive elements; long-press menu interferes
- **Implementation**: CSS user-select property

### 42. Long-Press for Secondary Actions
- **Category**: Touch
- **Severity**: MEDIUM
- **Guideline**: Use long-press for context menus (not primary interactions)
- **Do**: Long-press reveals context menu (delete, edit, share options)
- **Don't**: Long-press for primary actions; unclear what long-press does
- **Implementation**: Hammer.js long-press, native long-press handling

### 43. Prevent Pinch-to-Zoom Unless Necessary
- **Category**: Touch
- **Severity**: MEDIUM
- **Guideline**: Disable pinch zoom for responsive designs; allow only when beneficial
- **Do**: Disable by default on responsive sites; allow on maps/images
- **Don't**: Enable pinch zoom on already responsive design; janky zoom
- **Implementation**: touch-action CSS, viewport meta tag

---

## Interaction States (10 Guidelines)

### 44. Clear Active/Selected State
- **Category**: Interaction States
- **Severity**: HIGH
- **Guideline**: Selected items, active tabs, current pages must have obvious visual indication
- **Do**: Color change, checkmark, highlight; distinct from hover state
- **Don't**: Active state same as hover; subtle active indication; no active state
- **Implementation**: CSS :active/:focus states, className toggling

### 45. Disabled State Indication
- **Category**: Interaction States
- **Severity**: HIGH
- **Guideline**: Disabled elements must be visually obvious and not respond to clicks
- **Do**: Reduced opacity (0.5), disabled cursor, gray color; no cursor change on hover
- **Don't**: Subtle disabled state; unclear why disabled; disabled elements still clickable
- **Implementation**: `disabled` attribute on buttons/inputs, CSS opacity/cursor

### 46. Focus State for Keyboard Navigation
- **Category**: Interaction States
- **Severity**: HIGH
- **Guideline**: All interactive elements must have visible focus state for keyboard users
- **Do**: Focus ring (outline or custom), contrasting color, 2-3px outline
- **Don't**: Default browser outline removed without replacement; unclear focus
- **Implementation**: CSS :focus-visible, custom focus rings with outline

### 47. Loading State Indication
- **Category**: Interaction States
- **Severity**: HIGH
- **Guideline**: Buttons and interactive elements must show loading state during async actions
- **Do**: Spinner, text change to "Loading...", disabled state; disable further clicks
- **Don't**: No loading indication; button remains interactive while loading; unclear state
- **Implementation**: Button state component, spinner overlay

### 48. Error State Display
- **Category**: Interaction States
- **Severity**: HIGH
- **Guideline**: Errors must be prominent, clear, and actionable
- **Do**: Red color, error icon, helpful error message; place near field
- **Don't**: Generic error messages; unclear how to fix; buried error text
- **Implementation**: Error boundary component, form validation feedback

### 49. Success State Feedback
- **Category**: Interaction States
- **Severity**: MEDIUM
- **Guideline**: Successful actions should provide clear confirmation
- **Do**: Green checkmark, toast notification, or success message; 2-3 second display
- **Don't**: No success feedback; unclear if action succeeded; permanent success message
- **Implementation**: Toast notification component, auto-dismiss after 2-3s

### 50. Hover State on Desktop
- **Category**: Interaction States
- **Severity**: MEDIUM
- **Guideline**: All interactive elements should have a hover state on desktop
- **Do**: Subtle color change, scale, shadow; 150-200ms transition
- **Don't**: No hover feedback; jarring hover state change; disabled hover on desktop
- **Implementation**: CSS hover pseudoclass with smooth transitions

### 51. Visited Link Styling
- **Category**: Interaction States
- **Severity**: MEDIUM
- **Guideline**: Distinguish visited links from unvisited to reduce cognitive load
- **Do**: Visited links in different color (e.g., #551a8b) that still passes contrast
- **Don't**: Same color for visited and unvisited; unclear which links you've visited
- **Implementation**: CSS :visited pseudoclass (limited styling for security)

### 52. Readonly/View Mode State
- **Category**: Interaction States
- **Severity**: MEDIUM
- **Guideline**: Distinguish readonly fields from editable ones
- **Do**: Gray background, disabled cursor, clear it's not editable
- **Don't**: Readonly fields look editable; unclear which fields can be edited
- **Implementation**: `readonly` attribute, different styling for readonly

### 53. Placeholder vs. Label Text
- **Category**: Interaction States
- **Severity**: HIGH
- **Guideline**: Use labels, not just placeholders; placeholders disappear on focus
- **Do**: Label above/inside field, placeholder as example (optional)
- **Don't**: Only placeholder (disappears on focus, unclear requirement); no label
- **Implementation**: Proper label HTML, placeholder as secondary guidance

---

## Accessibility (11 Guidelines)

### 54. Color Contrast Ratio
- **Category**: Accessibility
- **Severity**: HIGH
- **Guideline**: Text must have at least 4.5:1 contrast ratio (WCAG AA)
- **Do**: Dark text on light backgrounds or vice versa; test with WebAIM contrast checker
- **Don't**: Light gray on white; low contrast combinations; color alone to convey meaning
- **Implementation**: WCAG AAA is 7:1; use contrast checking tools during design

### 55. Don't Rely on Color Alone
- **Category**: Accessibility
- **Severity**: HIGH
- **Guideline**: Never use color as the only way to convey information
- **Do**: Use color + icon, color + text, color + pattern (e.g., red X for error)
- **Don't**: Only red color to indicate error; only green for success
- **Implementation**: Combine color with icons/text/patterns

### 56. Semantic HTML Structure
- **Category**: Accessibility
- **Severity**: HIGH
- **Guideline**: Use proper semantic HTML (button, nav, main, etc.) not just divs
- **Do**: `<button>`, `<nav>`, `<main>`, `<article>`, proper heading hierarchy
- **Don't**: `<div onclick="...">` for buttons; `<span>` for headings
- **Implementation**: Semantic HTML elements, proper document structure

### 57. ARIA Labels for Icon Buttons
- **Category**: Accessibility
- **Severity**: HIGH
- **Guideline**: Icon-only buttons must have aria-label or title attribute
- **Do**: `<button aria-label="Close">×</button>` or `<button title="Close">×</button>`
- **Don't**: Icon buttons with no text alternative; unclear button purpose
- **Implementation**: aria-label attribute, title attribute as fallback

### 58. Form Labels Association
- **Category**: Accessibility
- **Severity**: HIGH
- **Guideline**: Form labels must be properly associated with inputs
- **Do**: `<label for="email"><input id="email"></label>` or `<label><input></label>`
- **Don't**: Labels not associated with inputs; floating labels with no semantic link
- **Implementation**: Proper label/input association via id or nesting

### 59. Heading Hierarchy
- **Category**: Accessibility
- **Severity**: HIGH
- **Guideline**: Use proper heading hierarchy (h1, h2, h3) without skipping levels
- **Do**: H1 once per page, H2 for sections, H3 for subsections; no skips (h1 > h3)
- **Don't**: Multiple H1s; skip heading levels; use H2 for styling
- **Implementation**: Proper semantic heading tags, logical hierarchy

### 60. Image Alt Text
- **Category**: Accessibility
- **Severity**: HIGH
- **Guideline**: All images must have descriptive alt text (or empty alt for decorative)
- **Do**: `<img alt="A person coding on a laptop">` for meaningful images
- **Don't**: `alt="image"` or `alt="pic123"`; no alt text; overly brief alt text
- **Implementation**: Descriptive alt text, empty alt for decorative images

### 61. Keyboard Navigation Support
- **Category**: Accessibility
- **Severity**: HIGH
- **Guideline**: All functionality must be accessible via keyboard
- **Do**: Tab order logical, Enter/Space on buttons, arrow keys for lists, Escape to close
- **Don't**: Keyboard-only functionality missing; illogical tab order; no escape key
- **Implementation**: Proper semantic HTML, tabindex when needed, keyboard handlers

### 62. Screen Reader Compatibility
- **Category**: Accessibility
- **Severity**: HIGH
- **Guideline**: Test with screen readers (NVDA, JAWS, VoiceOver) to ensure compatibility
- **Do**: Proper semantic HTML, ARIA labels when needed, descriptive link text
- **Don't**: "Click here" links; no ARIA landmarks; icons without labels
- **Implementation**: Semantic HTML, ARIA attributes, screen reader testing

### 63. Language Declaration
- **Category**: Accessibility
- **Severity**: MEDIUM
- **Guideline**: Declare page language in HTML
- **Do**: `<html lang="en">` at the top
- **Don't**: No language declaration; wrong language specified
- **Implementation**: HTML lang attribute on root element

### 64. Skip Links for Navigation
- **Category**: Accessibility
- **Severity**: HIGH
- **Guideline**: Provide skip link to main content for keyboard/screen reader users
- **Do**: Hidden skip link that appears on focus: "Skip to main content"
- **Don't**: No skip link; skip link not functional; skip link always visible
- **Implementation**: Hidden skip link component, proper link target

---

## Performance (9 Guidelines)

### 65. Image Optimization
- **Category**: Performance
- **Severity**: HIGH
- **Guideline**: Optimize images for web (compress, proper format, lazy load)
- **Do**: WebP format where supported, JPEG for photos, PNG for graphics; lazy loading
- **Don't**: Uncompressed images; full-resolution images on thumbnails; no lazy loading
- **Implementation**: Image optimization tools, native lazy loading

### 66. Critical Path Optimization
- **Category**: Performance
- **Severity**: HIGH
- **Guideline**: Minimize critical rendering path (CSS, JS) to improve FCP (First Contentful Paint)
- **Do**: Inline critical CSS, defer non-critical JS, minimize DOM
- **Don't**: Large CSS files in head blocking render; render-blocking JS
- **Implementation**: Critical CSS inlining, defer/async script loading

### 67. Bundle Size Management
- **Category**: Performance
- **Severity**: MEDIUM
- **Guideline**: Keep JavaScript bundle size under control (< 100KB gzipped initially)
- **Do**: Code splitting, tree shaking, dynamic imports; monitor bundle size
- **Don't**: Single large bundle; unused dependencies; no code splitting
- **Implementation**: Webpack/Vite code splitting, Tree shaking, Bundle analysis

### 68. Caching Strategy
- **Category**: Performance
- **Severity**: MEDIUM
- **Guideline**: Implement proper caching for static assets and API responses
- **Do**: Long cache durations for versioned assets; short for index.html
- **Don't**: No caching; long cache on index.html; cache busting issues
- **Implementation**: HTTP Cache headers, Service Worker caching

### 69. Minimize Layout Shifts (CLS)
- **Category**: Performance
- **Severity**: HIGH
- **Guideline**: Prevent layout shifts that occur after initial render (low CLS score)
- **Do**: Fixed sizes for images, reserve space for ads, stable font loading
- **Don't**: Dynamic content that shifts layout; ads that push content; late font loading
- **Implementation**: Aspect ratio sizing, font-display property

### 70. Font Loading Strategy
- **Category**: Performance
- **Severity**: MEDIUM
- **Guideline**: Use appropriate font loading strategy (font-display property)
- **Do**: `font-display: swap` for variable fonts to avoid FOUT (Flash of Unstyled Text)
- **Don't**: `font-display: block` for all fonts; FOUT; slow font loading blocking render
- **Implementation**: font-display CSS property, system fonts fallback

### 71. Optimize Third-Party Scripts
- **Category**: Performance
- **Severity**: MEDIUM
- **Guideline**: Load third-party scripts (analytics, ads, chat) asynchronously
- **Do**: Defer third-party scripts, use `async` attribute, lazy load below fold
- **Don't**: Block render with third-party scripts; multiple blocking scripts
- **Implementation**: Async/defer attributes, script loading strategies

### 72. Minimize Network Requests
- **Category**: Performance
- **Severity**: MEDIUM
- **Guideline**: Reduce number of HTTP requests
- **Do**: Combine small images (but not too many), use spriting if needed, minimize API calls
- **Don't**: Inefficient bundling; unnecessary API calls; unoptimized requests
- **Implementation**: Bundling strategy, GraphQL to reduce over-fetching

### 73. Responsive Image Loading
- **Category**: Performance
- **Severity**: MEDIUM
- **Guideline**: Load appropriate image sizes based on screen size and device
- **Do**: srcset attribute, picture element, responsive image sizes
- **Don't**: Full-resolution images on mobile; oversized images; no responsive strategy
- **Implementation**: srcset, picture element, `sizes` attribute

---

## Forms & Input (10 Guidelines)

### 74. Clear Form Labels
- **Category**: Forms
- **Severity**: HIGH
- **Guideline**: Every form field must have a clear, associated label
- **Do**: `<label for="email">Email</label><input id="email">`
- **Don't**: No labels; placeholder-only forms; labels not associated with inputs
- **Implementation**: Semantic label/input association

### 75. Required Field Indication
- **Category**: Forms
- **Severity**: HIGH
- **Guideline**: Clearly indicate required vs. optional fields
- **Do**: Asterisk (*) or "required" text on required fields; document pattern
- **Don't**: No indication of required fields; unclear pattern (some required, not all)
- **Implementation**: Consistent required field marking, explain pattern

### 76. Input Validation Timing
- **Category**: Forms
- **Severity**: MEDIUM
- **Guideline**: Validate forms at right time (on blur, on submit, not on keystroke)
- **Do**: Validate on blur or submit; real-time validation if helpful (username availability)
- **Don't**: Validate on every keystroke (annoying); validate only on submit (late feedback)
- **Implementation**: Blur event validation, submit form validation

### 77. Inline Error Messages
- **Category**: Forms
- **Severity**: HIGH
- **Guideline**: Show error messages inline, next to the field, not in a generic alert
- **Do**: Red text below field, error icon, specific error message
- **Don't**: Generic "Form has errors" alert; errors far from field
- **Implementation**: Inline error components, error field mapping

### 78. Form Field Types and Autocomplete
- **Category**: Forms
- **Severity**: MEDIUM
- **Guideline**: Use correct input types and autocomplete attributes
- **Do**: `type="email"` for email, `type="tel"` for phone; autocomplete="email"
- **Don't**: Generic text inputs for email/phone; no autocomplete attributes
- **Implementation**: Semantic input types, autocomplete attributes

### 79. Visual Feedback for Validation
- **Category**: Forms
- **Severity**: HIGH
- **Guideline**: Provide visual cues for valid/invalid states
- **Do**: Green border/checkmark for valid, red border/X for invalid
- **Don't**: Only text validation; unclear field states; no feedback
- **Implementation**: CSS validation states, validation icons

### 80. Form Field Grouping
- **Category**: Forms
- **Severity**: MEDIUM
- **Guideline**: Group related fields together using fieldset/legend
- **Do**: `<fieldset><legend>Address</legend>...</fieldset>` for related fields
- **Don't**: Unrelated fields grouped; no grouping context
- **Implementation**: Semantic fieldset/legend, visual grouping

### 81. Auto-Save Form Data
- **Category**: Forms
- **Severity**: MEDIUM
- **Guideline**: Auto-save form data to prevent data loss
- **Do**: Save to localStorage as user types; notify of last save time
- **Don't**: No auto-save; data loss on page refresh; no undo
- **Implementation**: LocalStorage auto-save, debounced saving

### 82. Progressive Form Disclosure
- **Category**: Forms
- **Severity**: MEDIUM
- **Guideline**: Show only essential fields initially; reveal advanced options as needed
- **Do**: Basic fields visible, advanced options behind "More options" or conditional
- **Don't**: 50-field form visible at once; overwhelming form
- **Implementation**: Conditional rendering, collapsible sections

### 83. Form Submission Feedback
- **Category**: Forms
- **Severity**: HIGH
- **Guideline**: Provide clear feedback when form is submitted
- **Do**: Success message/toast, error summary if validation fails, clear next step
- **Don't**: Silent submission; unclear if form submitted; no error feedback
- **Implementation**: Success/error notifications, form state management

---

## Responsive Design (9 Guidelines)

### 84. Mobile-First Approach
- **Category**: Responsive
- **Severity**: HIGH
- **Guideline**: Design and code for mobile first, then enhance for larger screens
- **Do**: Mobile layout first, media queries for tablet/desktop
- **Don't**: Desktop-first design adapted down (often breaks on mobile)
- **Implementation**: CSS mobile-first media queries (min-width), mobile-first components

### 85. Breakpoint Strategy
- **Category**: Responsive
- **Severity**: MEDIUM
- **Guideline**: Use consistent breakpoints across app (e.g., 480px, 768px, 1024px, 1440px)
- **Do**: 320px (mobile), 768px (tablet), 1024px (desktop), 1440px (large)
- **Don't**: Random breakpoints; more than 5 breakpoints; unclear breakpoint strategy
- **Implementation**: CSS variables for breakpoints, Tailwind breakpoints

### 86. Flexible Components
- **Category**: Responsive
- **Severity**: MEDIUM
- **Guideline**: Components should be flexible and work across screen sizes
- **Do**: Flexbox/Grid layouts, percentage widths, min/max-width constraints
- **Don't**: Fixed pixel widths; layouts break at certain sizes; no fluid design
- **Implementation**: CSS Flexbox, CSS Grid, relative sizing

### 87. Touch-Friendly on Mobile
- **Category**: Responsive
- **Severity**: HIGH
- **Guideline**: Increase touch target sizes on mobile (44x44px minimum)
- **Do**: Larger buttons/links on mobile; increased spacing between tap targets
- **Don't**: Same small button sizes as desktop; cramped mobile interface
- **Implementation**: Media queries for larger touch targets on mobile

### 88. Horizontal Scroll Prevention
- **Category**: Responsive
- **Severity**: HIGH
- **Guideline**: Never require horizontal scrolling; content should fit screen width
- **Do**: Responsive layout that fits all screen widths; no overflow-x
- **Don't**: Content wider than viewport; horizontal scrolling required
- **Implementation**: Responsive CSS, no fixed-width elements wider than viewport

### 89. Image Responsiveness
- **Category**: Responsive
- **Severity**: HIGH
- **Guideline**: Images should scale responsively without breaking layout
- **Do**: Max-width: 100%, height: auto; srcset for different sizes
- **Don't**: Fixed-width images; images overflow on mobile
- **Implementation**: CSS responsive images, srcset attribute, picture element

### 90. Font Size Responsiveness
- **Category**: Responsive
- **Severity**: MEDIUM
- **Guideline**: Font sizes should scale appropriately for different screen sizes
- **Do**: Smaller font on mobile (14-16px), larger on desktop (16-18px)
- **Don't**: Fixed font sizes; too small on mobile; too large on desktop
- **Implementation**: Media query font size adjustments, fluid typography

### 91. Container Queries for Component Responsiveness
- **Category**: Responsive
- **Severity**: MEDIUM
- **Guideline**: Use container queries for components that work in different containers
- **Do**: Components respond to container width, not viewport width
- **Don't**: Viewport-based breakpoints only; components broken in sidebars
- **Implementation**: CSS container queries (modern browsers)

### 92. Viewport Meta Tag
- **Category**: Responsive
- **Severity**: HIGH
- **Guideline**: Include proper viewport meta tag for mobile devices
- **Do**: `<meta name="viewport" content="width=device-width, initial-scale=1">`
- **Don't**: No viewport tag; incorrect viewport settings
- **Implementation**: Viewport meta tag in HTML head

---

## Specialized Interactions (7 Guidelines)

### 93. Infinite Scroll vs. Pagination
- **Category**: Specialized
- **Severity**: MEDIUM
- **Guideline**: Choose infinite scroll OR pagination based on use case
- **Do**: Infinite scroll for exploration (Twitter), pagination for specific finding (E-commerce)
- **Don't**: Both simultaneously; infinite scroll without "load more" button
- **Implementation**: Intersection Observer for lazy loading, pagination component

### 94. Drag and Drop Feedback
- **Category**: Specialized
- **Severity**: MEDIUM
- **Guideline**: Provide clear visual feedback during drag and drop
- **Do**: Dragged element opacity change, drop zone highlight, smooth animations
- **Don't**: No visual feedback; unclear what will happen on drop
- **Implementation**: Drag event handlers, CSS drag state styling

### 95. Search Results Presentation
- **Category**: Specialized
- **Severity**: HIGH
- **Guideline**: Present search results clearly with relevance and filters
- **Do**: Result count, highlighted matching text, filters, no-results message
- **Don't**: Unclear result relevance; no filters; ambiguous no-results state
- **Implementation**: Search component with filters, result highlighting

### 96. Multi-Step Forms/Wizards
- **Category**: Specialized
- **Severity**: MEDIUM
- **Guideline**: For multi-step forms, show progress and allow going back
- **Do**: Progress bar, step labels, previous/next buttons, save state
- **Don't**: No progress indication; can't go back; lose data on navigation
- **Implementation**: Stepper component, form state persistence

### 97. Data Table Interactions
- **Category**: Specialized
- **Severity**: MEDIUM
- **Guideline**: Tables should support sorting, filtering, and pagination
- **Do**: Clickable column headers for sorting, filter inputs, row selection
- **Don't**: Static tables; no way to filter large datasets; unclear sorting
- **Implementation**: Table component with sort/filter/pagination

### 98. Tooltips and Help Text
- **Category**: Specialized
- **Severity**: MEDIUM
- **Guideline**: Use tooltips for clarification, not primary information
- **Do**: Hover/focus tooltips on icons, help text under fields, short and useful
- **Don't**: Important info only in tooltip; unclear tooltip content; always visible
- **Implementation**: Tooltip component with Portal, show on hover/focus

### 99. Undo/Redo Support
- **Category**: Specialized
- **Severity**: MEDIUM
- **Guideline**: For content-editing apps, support undo/redo (Cmd+Z / Cmd+Shift+Z)
- **Do**: Keyboard shortcuts, undo/redo buttons in toolbar, action history
- **Don't**: No undo option; unclear what action will be undone; limited history
- **Implementation**: Command pattern, history stack, keyboard handlers

---

## Quick Reference: Severity Levels

- **HIGH**: Non-negotiable for usability, accessibility, or conversion
- **MEDIUM**: Important for good UX but has workarounds
- **LOW**: Nice-to-have for polish but not critical

---

## Testing Checklist

- [ ] Navigation is logical and discoverable
- [ ] All interactive elements have visible feedback states
- [ ] Colors pass 4.5:1 contrast ratio test
- [ ] Keyboard navigation works completely
- [ ] Forms have clear labels and validation
- [ ] Responsive design works at all breakpoints
- [ ] Animations respect prefers-reduced-motion
- [ ] Images are optimized and have alt text
- [ ] Loading and error states are clear
- [ ] Touch targets are at least 44x44px on mobile
