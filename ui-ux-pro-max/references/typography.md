# Typography Reference Guide

## Table of Contents

1. [Typography Fundamentals](#typography-fundamentals)
2. [Font Pairings](#font-pairings)
3. [Type Scale Systems](#type-scale-systems)
4. [Responsive Typography](#responsive-typography)

---

## Typography Fundamentals

### Type Scale (Recommended Sizes)

The fundamental principle of typography is establishing a consistent scale for hierarchy and readability.

**Standard Type Scale Ratios:**
- **1.125x (Major Second)** - Subtle progression, good for conservative designs
- **1.25x (Major Third)** - Balanced, versatile, recommended for most projects
- **1.5x (Perfect Fifth)** - Bold, dramatic, good for modern/creative designs

**Base Type Scale (1.25x ratio, 16px base):**
```
xs: 12px   (0.75rem)
sm: 14px   (0.875rem)
base: 16px (1rem)
lg: 20px   (1.25rem)
xl: 25px   (1.5625rem)
2xl: 31px  (1.9375rem)
3xl: 39px  (2.4375rem)
4xl: 49px  (3.0625rem)
5xl: 61px  (3.8125rem)
6xl: 76px  (4.75rem)
7xl: 95px  (5.9375rem)
```

### Line Height Guidelines

Optimal line height depends on font size and measure (line width).

**Line Height Ratios:**
- **Small text (< 16px):** 1.4–1.5 (tight leading for density)
- **Body text (16px–20px):** 1.5–1.6 (optimal readability)
- **Large text (> 20px):** 1.3–1.4 (tighter leading for visual balance)
- **Headings (display):** 1.1–1.3 (condensed for impact)

**Practical Values:**
```
xs/sm: line-height: 1.5
base/lg: line-height: 1.6
xl/2xl: line-height: 1.5
3xl+: line-height: 1.3
```

### Letter Spacing Rules

Letter spacing (tracking) affects legibility and mood.

**Guidelines:**
- **Headings:** -0.02em to -0.04em (tighter, more impactful)
- **Body text:** 0 to 0.02em (neutral to slightly open)
- **Small caps/labels:** 0.05em to 0.1em (open, elegant)
- **Display/hero text:** -0.05em to -0.02em (dramatic tightness)

**Application:**
```css
/* Headings - tighter */
h1, h2, h3 { letter-spacing: -0.02em; }

/* Body text - neutral */
p, li { letter-spacing: 0; }

/* Small text/labels - open */
.label, .caption { letter-spacing: 0.05em; }
```

### Maximum Line Width for Readability

Optimal line length (measure) is crucial for comfortable reading.

**Recommended Character Count:** 50–75 characters per line
**Pixel Range:** 480px–750px (varies by font and size)

**Common Measures:**
- **Narrow (optimal):** 45–55 characters / ~500px
- **Medium:** 55–75 characters / ~600px–750px
- **Wide:** 75–100 characters / ~800px (only for large display text)

**CSS Implementation:**
```css
/* Optimal reading width */
main, article {
  max-width: 65ch; /* ~700px depending on font */
}

/* Adjust per breakpoint */
@media (max-width: 768px) {
  main { max-width: 100%; }
}
```

---

## Font Pairings

### Clean & Professional

#### 1. **Helvetica Now + Freight Text**
- **Heading:** Helvetica Now Display, Bold (700)
- **Body:** Freight Text, Regular (400)
- **Mood:** Trustworthy, corporate, timeless
- **Best for:** Financial services, law firms, corporate websites
- **Google Fonts:** Import Freight Text (alternative: IBM Plex Sans)
- **CSS:**
```css
h1, h2, h3 { font-family: 'Helvetica Now', -apple-system, BlinkMacSystemFont, sans-serif; font-weight: 700; }
p, li { font-family: 'Freight Text', 'IBM Plex Serif', serif; font-weight: 400; line-height: 1.6; }
```
- **Tailwind Config:**
```js
fontFamily: {
  'heading': ['Helvetica Now', 'system-ui'],
  'body': ['Freight Text', 'serif']
}
```

#### 2. **Inter + Merriweather**
- **Heading:** Inter, Bold (700)
- **Body:** Merriweather, Regular (400)
- **Mood:** Modern, approachable, readable
- **Best for:** SaaS platforms, tech startups, modern blogs
- **Google Fonts:** `https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Merriweather:wght@400&display=swap`
- **CSS:**
```css
h1, h2, h3 { font-family: 'Inter', sans-serif; font-weight: 700; letter-spacing: -0.02em; }
p, li { font-family: 'Merriweather', serif; font-weight: 400; line-height: 1.6; }
```
- **Tailwind Config:**
```js
fontFamily: {
  'heading': ['Inter', 'sans-serif'],
  'body': ['Merriweather', 'serif']
}
```

#### 3. **Source Sans Pro + Source Serif Pro**
- **Heading:** Source Sans Pro, SemiBold (600)
- **Body:** Source Serif Pro, Regular (400)
- **Mood:** Neutral, balanced, accessible
- **Best for:** Government sites, accessibility-first projects, editorials
- **Google Fonts:** `https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&family=Source+Serif+Pro:wght@400&display=swap`
- **CSS:**
```css
h1, h2, h3 { font-family: 'Source Sans Pro', sans-serif; font-weight: 600; }
p, li { font-family: 'Source Serif Pro', serif; font-weight: 400; line-height: 1.65; }
```
- **Tailwind Config:**
```js
fontFamily: {
  'heading': ['Source Sans Pro', 'sans-serif'],
  'body': ['Source Serif Pro', 'serif']
}
```

#### 4. **Roboto + Lora**
- **Heading:** Roboto, Medium (500)
- **Body:** Lora, Regular (400)
- **Mood:** Practical, professional, warm
- **Best for:** Corporate sites, magazines, publishing platforms
- **Google Fonts:** `https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&family=Lora:wght@400&display=swap`
- **CSS:**
```css
h1, h2, h3 { font-family: 'Roboto', sans-serif; font-weight: 500; }
p, li { font-family: 'Lora', serif; font-weight: 400; line-height: 1.6; }
```
- **Tailwind Config:**
```js
fontFamily: {
  'heading': ['Roboto', 'sans-serif'],
  'body': ['Lora', 'serif']
}
```

### Modern & Geometric

#### 5. **Poppins + Open Sans**
- **Heading:** Poppins, SemiBold (600)
- **Body:** Open Sans, Regular (400)
- **Mood:** Contemporary, geometric, friendly
- **Best for:** Startups, creative agencies, modern apps
- **Google Fonts:** `https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Open+Sans:wght@400&display=swap`
- **CSS:**
```css
h1, h2, h3 { font-family: 'Poppins', sans-serif; font-weight: 600; letter-spacing: -0.01em; }
p, li { font-family: 'Open Sans', sans-serif; font-weight: 400; line-height: 1.6; }
```
- **Tailwind Config:**
```js
fontFamily: {
  'heading': ['Poppins', 'sans-serif'],
  'body': ['Open Sans', 'sans-serif']
}
```

#### 6. **DM Sans + IBM Plex Mono**
- **Heading:** DM Sans, Bold (700)
- **Body:** IBM Plex Mono, Regular (400)
- **Mood:** Futuristic, technical, minimal
- **Best for:** Developer tools, tech products, code blogs
- **Google Fonts:** `https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&family=IBM+Plex+Mono:wght@400&display=swap`
- **CSS:**
```css
h1, h2, h3 { font-family: 'DM Sans', sans-serif; font-weight: 700; }
p, li { font-family: 'IBM Plex Mono', monospace; font-weight: 400; line-height: 1.6; }
```
- **Tailwind Config:**
```js
fontFamily: {
  'heading': ['DM Sans', 'sans-serif'],
  'body': ['IBM Plex Mono', 'monospace']
}
```

#### 7. **Montserrat + Raleway**
- **Heading:** Montserrat, Bold (700)
- **Body:** Raleway, Light (300)
- **Mood:** Bold, geometric, trendy
- **Best for:** Fashion, lifestyle, creative portfolios
- **Google Fonts:** `https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Raleway:wght@300;400&display=swap`
- **CSS:**
```css
h1, h2, h3 { font-family: 'Montserrat', sans-serif; font-weight: 700; letter-spacing: 0.05em; }
p, li { font-family: 'Raleway', sans-serif; font-weight: 300; line-height: 1.8; }
```
- **Tailwind Config:**
```js
fontFamily: {
  'heading': ['Montserrat', 'sans-serif'],
  'body': ['Raleway', 'sans-serif']
}
```

#### 8. **Outfit + Quicksand**
- **Heading:** Outfit, SemiBold (600)
- **Body:** Quicksand, Regular (400)
- **Mood:** Playful, geometric, modern
- **Best for:** App UI, SaaS dashboards, creative tech
- **Google Fonts:** `https://fonts.googleapis.com/css2?family=Outfit:wght@400;600&family=Quicksand:wght@400&display=swap`
- **CSS:**
```css
h1, h2, h3 { font-family: 'Outfit', sans-serif; font-weight: 600; letter-spacing: -0.01em; }
p, li { font-family: 'Quicksand', sans-serif; font-weight: 400; line-height: 1.6; }
```
- **Tailwind Config:**
```js
fontFamily: {
  'heading': ['Outfit', 'sans-serif'],
  'body': ['Quicksand', 'sans-serif']
}
```

### Elegant & Luxurious

#### 9. **Bodoni Moda + Crimson Text**
- **Heading:** Bodoni Moda, Bold (700)
- **Body:** Crimson Text, Regular (400)
- **Mood:** Elegant, timeless, sophisticated
- **Best for:** Luxury brands, high-end fashion, editorial
- **Google Fonts:** `https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@400;700&family=Crimson+Text:wght@400&display=swap`
- **CSS:**
```css
h1, h2, h3 { font-family: 'Bodoni Moda', serif; font-weight: 700; letter-spacing: -0.02em; }
p, li { font-family: 'Crimson Text', serif; font-weight: 400; line-height: 1.7; }
```
- **Tailwind Config:**
```js
fontFamily: {
  'heading': ['Bodoni Moda', 'serif'],
  'body': ['Crimson Text', 'serif']
}
```

#### 10. **Playfair Display + Lato**
- **Heading:** Playfair Display, Bold (700)
- **Body:** Lato, Light (300)
- **Mood:** High-fashion, luxurious, classic
- **Best for:** Jewelry brands, luxury hotels, premium publications
- **Google Fonts:** `https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Lato:wght@300;400&display=swap`
- **CSS:**
```css
h1, h2, h3 { font-family: 'Playfair Display', serif; font-weight: 700; line-height: 1.2; }
p, li { font-family: 'Lato', sans-serif; font-weight: 300; line-height: 1.7; }
```
- **Tailwind Config:**
```js
fontFamily: {
  'heading': ['Playfair Display', 'serif'],
  'body': ['Lato', 'sans-serif']
}
```

#### 11. **Cormorant Garamond + Josefin Sans**
- **Heading:** Cormorant Garamond, Bold (700)
- **Body:** Josefin Sans, Light (300)
- **Mood:** Refined, elegant, boutique
- **Best for:** Wedding websites, boutique brands, art galleries
- **Google Fonts:** `https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700&family=Josefin+Sans:wght@300;400&display=swap`
- **CSS:**
```css
h1, h2, h3 { font-family: 'Cormorant Garamond', serif; font-weight: 700; letter-spacing: 0.05em; }
p, li { font-family: 'Josefin Sans', sans-serif; font-weight: 300; line-height: 1.8; }
```
- **Tailwind Config:**
```js
fontFamily: {
  'heading': ['Cormorant Garamond', 'serif'],
  'body': ['Josefin Sans', 'sans-serif']
}
```

#### 12. **Abril Fatface + Dosis**
- **Heading:** Abril Fatface, Regular (400)
- **Body:** Dosis, Regular (400)
- **Mood:** Sophisticated, modern luxury, upscale
- **Best for:** Premium brands, lifestyle magazines, exclusive events
- **Google Fonts:** `https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Dosis:wght@400&display=swap`
- **CSS:**
```css
h1, h2, h3 { font-family: 'Abril Fatface', serif; font-weight: 400; letter-spacing: -0.03em; }
p, li { font-family: 'Dosis', sans-serif; font-weight: 400; line-height: 1.6; }
```
- **Tailwind Config:**
```js
fontFamily: {
  'heading': ['Abril Fatface', 'serif'],
  'body': ['Dosis', 'sans-serif']
}
```

### Playful & Friendly

#### 13. **Fredoka + Nunito**
- **Heading:** Fredoka, SemiBold (600)
- **Body:** Nunito, Regular (400)
- **Mood:** Friendly, approachable, youthful
- **Best for:** Kids apps, playful brands, community sites
- **Google Fonts:** `https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600&family=Nunito:wght@400&display=swap`
- **CSS:**
```css
h1, h2, h3 { font-family: 'Fredoka', sans-serif; font-weight: 600; }
p, li { font-family: 'Nunito', sans-serif; font-weight: 400; line-height: 1.6; }
```
- **Tailwind Config:**
```js
fontFamily: {
  'heading': ['Fredoka', 'sans-serif'],
  'body': ['Nunito', 'sans-serif']
}
```

#### 14. **Comfortaa + Varela Round**
- **Heading:** Comfortaa, Bold (700)
- **Body:** Varela Round, Regular (400)
- **Mood:** Warm, rounded, inviting
- **Best for:** Family services, education, wellness
- **Google Fonts:** `https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&family=Varela+Round&display=swap`
- **CSS:**
```css
h1, h2, h3 { font-family: 'Comfortaa', sans-serif; font-weight: 700; }
p, li { font-family: 'Varela Round', sans-serif; font-weight: 400; line-height: 1.7; }
```
- **Tailwind Config:**
```js
fontFamily: {
  'heading': ['Comfortaa', 'sans-serif'],
  'body': ['Varela Round', 'sans-serif']
}
```

#### 15. **Pacifico + Nunito Sans**
- **Heading:** Pacifico, Regular (400)
- **Body:** Nunito Sans, Regular (400)
- **Mood:** Casual, fun, tropical
- **Best for:** Restaurants, travel blogs, lifestyle brands
- **Google Fonts:** `https://fonts.googleapis.com/css2?family=Pacifico&family=Nunito+Sans:wght@400&display=swap`
- **CSS:**
```css
h1, h2, h3 { font-family: 'Pacifico', cursive; font-weight: 400; }
p, li { font-family: 'Nunito Sans', sans-serif; font-weight: 400; line-height: 1.6; }
```
- **Tailwind Config:**
```js
fontFamily: {
  'heading': ['Pacifico', 'cursive'],
  'body': ['Nunito Sans', 'sans-serif']
}
```

#### 16. **Caveat + Poppins**
- **Heading:** Caveat, Bold (700)
- **Body:** Poppins, Regular (400)
- **Mood:** Handwritten, creative, personal
- **Best for:** Personal blogs, creative portfolios, handmade brands
- **Google Fonts:** `https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Poppins:wght@400&display=swap`
- **CSS:**
```css
h1, h2, h3 { font-family: 'Caveat', cursive; font-weight: 700; }
p, li { font-family: 'Poppins', sans-serif; font-weight: 400; line-height: 1.6; }
```
- **Tailwind Config:**
```js
fontFamily: {
  'heading': ['Caveat', 'cursive'],
  'body': ['Poppins', 'sans-serif']
}
```

### Technical & Developer

#### 17. **JetBrains Mono + Fira Sans**
- **Heading:** JetBrains Mono, Bold (700)
- **Body:** Fira Sans, Regular (400)
- **Mood:** Technical, precise, developer-focused
- **Best for:** Code documentation, developer blogs, tech tutorials
- **Google Fonts:** `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Fira+Sans:wght@400&display=swap`
- **CSS:**
```css
h1, h2, h3 { font-family: 'JetBrains Mono', monospace; font-weight: 700; letter-spacing: 0.01em; }
p, li { font-family: 'Fira Sans', sans-serif; font-weight: 400; line-height: 1.6; }
code { font-family: 'JetBrains Mono', monospace; }
```
- **Tailwind Config:**
```js
fontFamily: {
  'heading': ['JetBrains Mono', 'monospace'],
  'body': ['Fira Sans', 'sans-serif'],
  'mono': ['JetBrains Mono', 'monospace']
}
```

#### 18. **Inconsolata + Oxygen**
- **Heading:** Inconsolata, Bold (700)
- **Body:** Oxygen, Regular (400)
- **Mood:** Minimal, code-oriented, clean
- **Best for:** Programming tutorials, tech blogs, command-line tools
- **Google Fonts:** `https://fonts.googleapis.com/css2?family=Inconsolata:wght@700&family=Oxygen:wght@400&display=swap`
- **CSS:**
```css
h1, h2, h3 { font-family: 'Inconsolata', monospace; font-weight: 700; }
p, li { font-family: 'Oxygen', sans-serif; font-weight: 400; line-height: 1.6; }
```
- **Tailwind Config:**
```js
fontFamily: {
  'heading': ['Inconsolata', 'monospace'],
  'body': ['Oxygen', 'sans-serif']
}
```

#### 19. **Source Code Pro + Work Sans**
- **Heading:** Source Code Pro, SemiBold (600)
- **Body:** Work Sans, Regular (400)
- **Mood:** Functional, modern, tech
- **Best for:** Developer portfolios, GitHub pages, open-source sites
- **Google Fonts:** `https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;600&family=Work+Sans:wght@400&display=swap`
- **CSS:**
```css
h1, h2, h3 { font-family: 'Source Code Pro', monospace; font-weight: 600; }
p, li { font-family: 'Work Sans', sans-serif; font-weight: 400; line-height: 1.6; }
```
- **Tailwind Config:**
```js
fontFamily: {
  'heading': ['Source Code Pro', 'monospace'],
  'body': ['Work Sans', 'sans-serif']
}
```

#### 20. **Courier Prime + Inter**
- **Heading:** Courier Prime, Bold (700)
- **Body:** Inter, Regular (400)
- **Mood:** Typewriter, nostalgic, technical
- **Best for:** Coding tutorials, retro tech blogs, terminal simulations
- **Google Fonts:** `https://fonts.googleapis.com/css2?family=Courier+Prime:wght@700&family=Inter:wght@400&display=swap`
- **CSS:**
```css
h1, h2, h3 { font-family: 'Courier Prime', monospace; font-weight: 700; letter-spacing: 0.02em; }
p, li { font-family: 'Inter', sans-serif; font-weight: 400; line-height: 1.6; }
```
- **Tailwind Config:**
```js
fontFamily: {
  'heading': ['Courier Prime', 'monospace'],
  'body': ['Inter', 'sans-serif']
}
```

### Bold & Impactful

#### 21. **Bebas Neue + Barlow**
- **Heading:** Bebas Neue, Regular (400)
- **Body:** Barlow, Regular (400)
- **Mood:** Bold, energetic, headlines
- **Best for:** News sites, sports blogs, impact-driven projects
- **Google Fonts:** `https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@400&display=swap`
- **CSS:**
```css
h1, h2, h3 { font-family: 'Bebas Neue', sans-serif; font-weight: 400; letter-spacing: 0.05em; text-transform: uppercase; }
p, li { font-family: 'Barlow', sans-serif; font-weight: 400; line-height: 1.6; }
```
- **Tailwind Config:**
```js
fontFamily: {
  'heading': ['Bebas Neue', 'sans-serif'],
  'body': ['Barlow', 'sans-serif']
}
```

#### 22. **Syne + Epilogue**
- **Heading:** Syne, Bold (700)
- **Body:** Epilogue, Regular (400)
- **Mood:** Futuristic, strong, modern
- **Best for:** Tech startups, digital agencies, portfolio sites
- **Google Fonts:** `https://fonts.googleapis.com/css2?family=Syne:wght@700&family=Epilogue:wght@400&display=swap`
- **CSS:**
```css
h1, h2, h3 { font-family: 'Syne', sans-serif; font-weight: 700; letter-spacing: -0.02em; }
p, li { font-family: 'Epilogue', sans-serif; font-weight: 400; line-height: 1.6; }
```
- **Tailwind Config:**
```js
fontFamily: {
  'heading': ['Syne', 'sans-serif'],
  'body': ['Epilogue', 'sans-serif']
}
```

#### 23. **Space Mono + Space Grotesk**
- **Heading:** Space Mono, Bold (700)
- **Body:** Space Grotesk, Regular (400)
- **Mood:** Cosmic, futuristic, strong
- **Best for:** NFT platforms, metaverse projects, crypto brands
- **Google Fonts:** `https://fonts.googleapis.com/css2?family=Space+Mono:wght@700&family=Space+Grotesk:wght@400&display=swap`
- **CSS:**
```css
h1, h2, h3 { font-family: 'Space Mono', monospace; font-weight: 700; letter-spacing: 0.01em; }
p, li { font-family: 'Space Grotesk', sans-serif; font-weight: 400; line-height: 1.6; }
```
- **Tailwind Config:**
```js
fontFamily: {
  'heading': ['Space Mono', 'monospace'],
  'body': ['Space Grotesk', 'sans-serif']
}
```

#### 24. **Archivo Black + Asap**
- **Heading:** Archivo Black, Regular (400)
- **Body:** Asap, Regular (400)
- **Mood:** Powerful, dramatic, impact
- **Best for:** Campaign sites, promotional materials, social media
- **Google Fonts:** `https://fonts.googleapis.com/css2?family=Archivo+Black&family=Asap:wght@400&display=swap`
- **CSS:**
```css
h1, h2, h3 { font-family: 'Archivo Black', sans-serif; font-weight: 400; text-transform: uppercase; }
p, li { font-family: 'Asap', sans-serif; font-weight: 400; line-height: 1.6; }
```
- **Tailwind Config:**
```js
fontFamily: {
  'heading': ['Archivo Black', 'sans-serif'],
  'body': ['Asap', 'sans-serif']
}
```

### Editorial & Magazine

#### 25. **EB Garamond + Mulish**
- **Heading:** EB Garamond, Bold (700)
- **Body:** Mulish, Regular (400)
- **Mood:** Classic, editorial, timeless
- **Best for:** Magazine sites, long-form content, publishing platforms
- **Google Fonts:** `https://fonts.googleapis.com/css2?family=EB+Garamond:wght@700&family=Mulish:wght@400&display=swap`
- **CSS:**
```css
h1, h2, h3 { font-family: 'EB Garamond', serif; font-weight: 700; line-height: 1.3; }
p, li { font-family: 'Mulish', sans-serif; font-weight: 400; line-height: 1.7; }
```
- **Tailwind Config:**
```js
fontFamily: {
  'heading': ['EB Garamond', 'serif'],
  'body': ['Mulish', 'sans-serif']
}
```

#### 26. **Libre Baskerville + Libre Franklin**
- **Heading:** Libre Baskerville, Bold (700)
- **Body:** Libre Franklin, Regular (400)
- **Mood:** Publisher-grade, refined, readable
- **Best for:** News sites, blog platforms, literary magazines
- **Google Fonts:** `https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&family=Libre+Franklin:wght@400&display=swap`
- **CSS:**
```css
h1, h2, h3 { font-family: 'Libre Baskerville', serif; font-weight: 700; }
p, li { font-family: 'Libre Franklin', sans-serif; font-weight: 400; line-height: 1.65; }
```
- **Tailwind Config:**
```js
fontFamily: {
  'heading': ['Libre Baskerville', 'serif'],
  'body': ['Libre Franklin', 'sans-serif']
}
```

#### 27. **Merriweather + Merriweather Sans**
- **Heading:** Merriweather, Bold (700)
- **Body:** Merriweather Sans, Regular (400)
- **Mood:** Warm, readable, editorial
- **Best for:** Blog platforms, educational sites, thought leadership
- **Google Fonts:** `https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Merriweather+Sans:wght@400&display=swap`
- **CSS:**
```css
h1, h2, h3 { font-family: 'Merriweather', serif; font-weight: 700; }
p, li { font-family: 'Merriweather Sans', sans-serif; font-weight: 400; line-height: 1.6; }
```
- **Tailwind Config:**
```js
fontFamily: {
  'heading': ['Merriweather', 'serif'],
  'body': ['Merriweather Sans', 'sans-serif']
}
```

#### 28. **Lora + Rubik**
- **Heading:** Lora, Bold (700)
- **Body:** Rubik, Regular (400)
- **Mood:** Contemporary editorial, humanist, warm
- **Best for:** Medium-style blogs, magazine sites, lifestyle content
- **Google Fonts:** `https://fonts.googleapis.com/css2?family=Lora:wght@700&family=Rubik:wght@400&display=swap`
- **CSS:**
```css
h1, h2, h3 { font-family: 'Lora', serif; font-weight: 700; }
p, li { font-family: 'Rubik', sans-serif; font-weight: 400; line-height: 1.6; }
```
- **Tailwind Config:**
```js
fontFamily: {
  'heading': ['Lora', 'serif'],
  'body': ['Rubik', 'sans-serif']
}
```

### Minimal & Contemporary

#### 29. **Grotesk + Lexend**
- **Heading:** Grotesk, Bold (700)
- **Body:** Lexend, Regular (400)
- **Mood:** Modern, minimal, accessible
- **Best for:** Minimalist portfolios, startup landing pages, clean apps
- **Google Fonts:** `https://fonts.googleapis.com/css2?family=Grotesk:wght@700&family=Lexend:wght@400&display=swap`
- **CSS:**
```css
h1, h2, h3 { font-family: 'Grotesk', sans-serif; font-weight: 700; letter-spacing: -0.02em; }
p, li { font-family: 'Lexend', sans-serif; font-weight: 400; line-height: 1.6; }
```
- **Tailwind Config:**
```js
fontFamily: {
  'heading': ['Grotesk', 'sans-serif'],
  'body': ['Lexend', 'sans-serif']
}
```

#### 30. **Public Sans + Noto Sans**
- **Heading:** Public Sans, Bold (700)
- **Body:** Noto Sans, Regular (400)
- **Mood:** Neutral, accessible, government
- **Best for:** Government sites, civic tech, accessibility-first projects
- **Google Fonts:** `https://fonts.googleapis.com/css2?family=Public+Sans:wght@700&family=Noto+Sans:wght@400&display=swap`
- **CSS:**
```css
h1, h2, h3 { font-family: 'Public Sans', sans-serif; font-weight: 700; }
p, li { font-family: 'Noto Sans', sans-serif; font-weight: 400; line-height: 1.6; }
```
- **Tailwind Config:**
```js
fontFamily: {
  'heading': ['Public Sans', 'sans-serif'],
  'body': ['Noto Sans', 'sans-serif']
}
```

#### 31. **Fraunces + Overpass**
- **Heading:** Fraunces, Bold (700)
- **Body:** Overpass, Regular (400)
- **Mood:** Sophisticated minimal, contemporary
- **Best for:** Design-forward brands, creative studios, boutique sites
- **Google Fonts:** `https://fonts.googleapis.com/css2?family=Fraunces:wght@700&family=Overpass:wght@400&display=swap`
- **CSS:**
```css
h1, h2, h3 { font-family: 'Fraunces', serif; font-weight: 700; }
p, li { font-family: 'Overpass', sans-serif; font-weight: 400; line-height: 1.6; }
```
- **Tailwind Config:**
```js
fontFamily: {
  'heading': ['Fraunces', 'serif'],
  'body': ['Overpass', 'sans-serif']
}
```

#### 32. **Orbitron + Karla**
- **Heading:** Orbitron, Bold (700)
- **Body:** Karla, Regular (400)
- **Mood:** Geometric, futuristic, minimal
- **Best for:** Tech companies, scientific sites, modern startups
- **Google Fonts:** `https://fonts.googleapis.com/css2?family=Orbitron:wght@700&family=Karla:wght@400&display=swap`
- **CSS:**
```css
h1, h2, h3 { font-family: 'Orbitron', sans-serif; font-weight: 700; letter-spacing: 0.02em; }
p, li { font-family: 'Karla', sans-serif; font-weight: 400; line-height: 1.6; }
```
- **Tailwind Config:**
```js
fontFamily: {
  'heading': ['Orbitron', 'sans-serif'],
  'body': ['Karla', 'sans-serif']
}
```

#### 33. **Exo + Ubuntu**
- **Heading:** Exo, SemiBold (600)
- **Body:** Ubuntu, Regular (400)
- **Mood:** Modern, open-source, friendly
- **Best for:** Open-source projects, Linux communities, tech blogs
- **Google Fonts:** `https://fonts.googleapis.com/css2?family=Exo:wght@600&family=Ubuntu:wght@400&display=swap`
- **CSS:**
```css
h1, h2, h3 { font-family: 'Exo', sans-serif; font-weight: 600; }
p, li { font-family: 'Ubuntu', sans-serif; font-weight: 400; line-height: 1.6; }
```
- **Tailwind Config:**
```js
fontFamily: {
  'heading': ['Exo', 'sans-serif'],
  'body': ['Ubuntu', 'sans-serif']
}
```

#### 34. **Manrope + Sora**
- **Heading:** Manrope, Bold (700)
- **Body:** Sora, Regular (400)
- **Mood:** Clean, humanist, contemporary
- **Best for:** App design, minimal websites, modern dashboards
- **Google Fonts:** `https://fonts.googleapis.com/css2?family=Manrope:wght@700&family=Sora:wght@400&display=swap`
- **CSS:**
```css
h1, h2, h3 { font-family: 'Manrope', sans-serif; font-weight: 700; letter-spacing: -0.01em; }
p, li { font-family: 'Sora', sans-serif; font-weight: 400; line-height: 1.6; }
```
- **Tailwind Config:**
```js
fontFamily: {
  'heading': ['Manrope', 'sans-serif'],
  'body': ['Sora', 'sans-serif']
}
```

#### 35. **Hanken Grotesk + Space Mono**
- **Heading:** Hanken Grotesk, Bold (700)
- **Body:** Space Mono, Regular (400)
- **Mood:** Contemporary, tech-forward, minimal
- **Best for:** Design systems, digital products, tech agencies
- **Google Fonts:** `https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@700&family=Space+Mono:wght@400&display=swap`
- **CSS:**
```css
h1, h2, h3 { font-family: 'Hanken Grotesk', sans-serif; font-weight: 700; }
p, li { font-family: 'Space Mono', monospace; font-weight: 400; line-height: 1.6; }
```
- **Tailwind Config:**
```js
fontFamily: {
  'heading': ['Hanken Grotesk', 'sans-serif'],
  'body': ['Space Mono', 'monospace']
}
```

#### 36. **Sansita + Poppins**
- **Heading:** Sansita, Bold (700)
- **Body:** Poppins, Regular (400)
- **Mood:** Geometric, structured, modern
- **Best for:** SaaS products, app interfaces, modern platforms
- **Google Fonts:** `https://fonts.googleapis.com/css2?family=Sansita:wght@700&family=Poppins:wght@400&display=swap`
- **CSS:**
```css
h1, h2, h3 { font-family: 'Sansita', sans-serif; font-weight: 700; }
p, li { font-family: 'Poppins', sans-serif; font-weight: 400; line-height: 1.6; }
```
- **Tailwind Config:**
```js
fontFamily: {
  'heading': ['Sansita', 'sans-serif'],
  'body': ['Poppins', 'sans-serif']
}
```

#### 37. **Archivo + Crimson Pro**
- **Heading:** Archivo, Bold (700)
- **Body:** Crimson Pro, Regular (400)
- **Mood:** Professional, refined, contemporary
- **Best for:** Corporate sites, law firms, professional services
- **Google Fonts:** `https://fonts.googleapis.com/css2?family=Archivo:wght@700&family=Crimson+Pro:wght@400&display=swap`
- **CSS:**
```css
h1, h2, h3 { font-family: 'Archivo', sans-serif; font-weight: 700; letter-spacing: -0.02em; }
p, li { font-family: 'Crimson Pro', serif; font-weight: 400; line-height: 1.65; }
```
- **Tailwind Config:**
```js
fontFamily: {
  'heading': ['Archivo', 'sans-serif'],
  'body': ['Crimson Pro', 'serif']
}
```

#### 38. **Aeonik + Satoshi**
- **Heading:** Aeonik, Bold (700)
- **Body:** Satoshi, Regular (400)
- **Mood:** Modern, humanist, contemporary
- **Best for:** Tech startups, modern design portfolios, creative agencies
- **Google Fonts:** `https://fonts.googleapis.com/css2?family=Aeonik:wght@700&family=Satoshi:wght@400&display=swap`
- **CSS:**
```css
h1, h2, h3 { font-family: 'Aeonik', sans-serif; font-weight: 700; }
p, li { font-family: 'Satoshi', sans-serif; font-weight: 400; line-height: 1.6; }
```
- **Tailwind Config:**
```js
fontFamily: {
  'heading': ['Aeonik', 'sans-serif'],
  'body': ['Satoshi', 'sans-serif']
}
```

#### 39. **IBM Plex Sans + IBM Plex Serif**
- **Heading:** IBM Plex Sans, SemiBold (600)
- **Body:** IBM Plex Serif, Regular (400)
- **Mood:** Professional, versatile, accessible
- **Best for:** Corporate communications, hybrid projects, universal design
- **Google Fonts:** `https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@600&family=IBM+Plex+Serif:wght@400&display=swap`
- **CSS:**
```css
h1, h2, h3 { font-family: 'IBM Plex Sans', sans-serif; font-weight: 600; }
p, li { font-family: 'IBM Plex Serif', serif; font-weight: 400; line-height: 1.6; }
```
- **Tailwind Config:**
```js
fontFamily: {
  'heading': ['IBM Plex Sans', 'sans-serif'],
  'body': ['IBM Plex Serif', 'serif']
}
```

#### 40. **Clash Display + Plus Jakarta Sans**
- **Heading:** Clash Display, Bold (700)
- **Body:** Plus Jakarta Sans, Regular (400)
- **Mood:** Modern, expressive, playful
- **Best for:** Design-forward brands, creative portfolios, modern apps
- **Google Fonts:** `https://fonts.googleapis.com/css2?family=Clash+Display:wght@700&family=Plus+Jakarta+Sans:wght@400&display=swap`
- **CSS:**
```css
h1, h2, h3 { font-family: 'Clash Display', sans-serif; font-weight: 700; letter-spacing: -0.01em; }
p, li { font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 400; line-height: 1.6; }
```
- **Tailwind Config:**
```js
fontFamily: {
  'heading': ['Clash Display', 'sans-serif'],
  'body': ['Plus Jakarta Sans', 'sans-serif']
}
```

#### 41. **Uncut Sans + Uncut Sans Italic**
- **Heading:** Uncut Sans, Bold (700)
- **Body:** Uncut Sans, Regular (400)
- **Mood:** Contemporary, experimental, design-forward
- **Best for:** Cutting-edge design portfolios, art galleries, fashion brands
- **Google Fonts:** `https://fonts.googleapis.com/css2?family=Uncut+Sans:wght@400;700&display=swap`
- **CSS:**
```css
h1, h2, h3 { font-family: 'Uncut Sans', sans-serif; font-weight: 700; }
p, li { font-family: 'Uncut Sans', sans-serif; font-weight: 400; line-height: 1.6; }
```
- **Tailwind Config:**
```js
fontFamily: {
  'heading': ['Uncut Sans', 'sans-serif'],
  'body': ['Uncut Sans', 'sans-serif']
}
```

#### 42. **Golos Text + Roboto Flex**
- **Heading:** Golos Text, Bold (700)
- **Body:** Roboto Flex, Regular (400)
- **Mood:** Modern, flexible, accessible
- **Best for:** Dynamic interfaces, responsive design, modern platforms
- **Google Fonts:** `https://fonts.googleapis.com/css2?family=Golos+Text:wght@700&family=Roboto+Flex:wght@400&display=swap`
- **CSS:**
```css
h1, h2, h3 { font-family: 'Golos Text', sans-serif; font-weight: 700; }
p, li { font-family: 'Roboto Flex', sans-serif; font-weight: 400; line-height: 1.6; }
```
- **Tailwind Config:**
```js
fontFamily: {
  'heading': ['Golos Text', 'sans-serif'],
  'body': ['Roboto Flex', 'sans-serif']
}
```

#### 43. **Work Sans + Bitter**
- **Heading:** Work Sans, Bold (700)
- **Body:** Bitter, Regular (400)
- **Mood:** Contemporary, balanced, professional
- **Best for:** Business blogs, professional portfolios, editorial sites
- **Google Fonts:** `https://fonts.googleapis.com/css2?family=Work+Sans:wght@700&family=Bitter:wght@400&display=swap`
- **CSS:**
```css
h1, h2, h3 { font-family: 'Work Sans', sans-serif; font-weight: 700; letter-spacing: -0.01em; }
p, li { font-family: 'Bitter', serif; font-weight: 400; line-height: 1.65; }
```
- **Tailwind Config:**
```js
fontFamily: {
  'heading': ['Work Sans', 'sans-serif'],
  'body': ['Bitter', 'serif']
}
```

#### 44. **Sora + Fira Code**
- **Heading:** Sora, Bold (700)
- **Body:** Fira Code, Regular (400)
- **Mood:** Minimal, technical, elegant
- **Best for:** Developer documentation, minimal tech sites, code-heavy blogs
- **Google Fonts:** `https://fonts.googleapis.com/css2?family=Sora:wght@700&family=Fira+Code:wght@400&display=swap`
- **CSS:**
```css
h1, h2, h3 { font-family: 'Sora', sans-serif; font-weight: 700; }
p, li { font-family: 'Fira Code', monospace; font-weight: 400; line-height: 1.6; }
code { font-family: 'Fira Code', monospace; }
```
- **Tailwind Config:**
```js
fontFamily: {
  'heading': ['Sora', 'sans-serif'],
  'body': ['Fira Code', 'monospace'],
  'mono': ['Fira Code', 'monospace']
}
```

#### 45. **Proxima Nova + Droid Serif**
- **Heading:** Proxima Nova, Bold (700)
- **Body:** Droid Serif, Regular (400)
- **Mood:** Professional, balanced, trustworthy
- **Best for:** Corporate sites, finance platforms, professional services
- **Google Fonts:** `https://fonts.googleapis.com/css2?family=Proxima+Nova:wght@700&family=Droid+Serif:wght@400&display=swap` (Note: Proxima Nova is premium; alternative: Tahoma)
- **CSS:**
```css
h1, h2, h3 { font-family: 'Proxima Nova', 'Tahoma', sans-serif; font-weight: 700; }
p, li { font-family: 'Droid Serif', serif; font-weight: 400; line-height: 1.65; }
```
- **Tailwind Config:**
```js
fontFamily: {
  'heading': ['Proxima Nova', 'Tahoma', 'sans-serif'],
  'body': ['Droid Serif', 'serif']
}
```

---

## Type Scale Systems

### Default Scale (1.25x multiplier)

Balanced scale suitable for most projects. Based on 16px base font size.

```css
:root {
  /* Font sizes */
  --text-xs: 0.75rem;      /* 12px */
  --text-sm: 0.875rem;     /* 14px */
  --text-base: 1rem;       /* 16px */
  --text-lg: 1.25rem;      /* 20px */
  --text-xl: 1.5625rem;    /* 25px */
  --text-2xl: 1.9375rem;   /* 31px */
  --text-3xl: 2.4375rem;   /* 39px */
  --text-4xl: 3.0625rem;   /* 49px */
  --text-5xl: 3.8125rem;   /* 61px */
  --text-6xl: 4.75rem;     /* 76px */

  /* Line heights */
  --leading-tight: 1.2;
  --leading-normal: 1.5;
  --leading-relaxed: 1.6;
  --leading-loose: 1.75;

  /* Letter spacing */
  --tracking-tight: -0.02em;
  --tracking-normal: 0;
  --tracking-wide: 0.05em;
  --tracking-wider: 0.1em;
}

/* Usage */
h1 {
  font-size: var(--text-5xl);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-tight);
}

p {
  font-size: var(--text-base);
  line-height: var(--leading-relaxed);
  letter-spacing: var(--tracking-normal);
}
```

### Compact Scale (Dashboards & Data)

Tighter scale (1.125x multiplier) for information-dense interfaces. Base: 14px.

```css
:root {
  /* Compact Font sizes */
  --text-xs: 0.75rem;      /* 12px */
  --text-sm: 0.8125rem;    /* 13px */
  --text-base: 0.875rem;   /* 14px */
  --text-lg: 1rem;         /* 16px */
  --text-xl: 1.125rem;     /* 18px */
  --text-2xl: 1.25rem;     /* 20px */
  --text-3xl: 1.375rem;    /* 22px */
  --text-4xl: 1.5625rem;   /* 25px */

  /* Tighter line heights */
  --leading-tight: 1.1;
  --leading-normal: 1.4;
  --leading-relaxed: 1.5;
}

/* Dashboard application */
.dashboard {
  font-size: var(--text-sm);
  line-height: var(--leading-normal);
}

.metric-label {
  font-size: var(--text-xs);
  line-height: var(--leading-tight);
}
```

### Large Scale (Marketing & Landing Pages)

Generous scale (1.5x multiplier) for impact-driven content. Base: 18px.

```css
:root {
  /* Large Font sizes */
  --text-sm: 1rem;         /* 16px */
  --text-base: 1.125rem;   /* 18px */
  --text-lg: 1.6875rem;    /* 27px */
  --text-xl: 2.5rem;       /* 40px */
  --text-2xl: 3.75rem;     /* 60px */
  --text-3xl: 5.625rem;    /* 90px */
  --text-4xl: 8.4375rem;   /* 135px */

  /* Loose line heights */
  --leading-tight: 1.15;
  --leading-normal: 1.4;
  --leading-relaxed: 1.6;
  --leading-loose: 1.75;
}

/* Landing page */
.hero-title {
  font-size: var(--text-3xl);
  line-height: var(--leading-tight);
  letter-spacing: -0.02em;
}

.feature-description {
  font-size: var(--text-lg);
  line-height: var(--leading-relaxed);
}
```

---

## Responsive Typography

### Fluid Typography with clamp()

Use CSS `clamp()` for smooth, responsive font scaling without media queries.

**Syntax:** `clamp(minimum, preferred, maximum)`

```css
/* Scales from 1.5rem at 320px to 3rem at 1200px */
h1 {
  font-size: clamp(1.5rem, 5vw, 3rem);
  line-height: clamp(1.2, 5vw + 0.5rem, 1.4);
}

/* Body text scales from 1rem at 320px to 1.25rem at 1200px */
p {
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  line-height: clamp(1.5, 2vw + 1rem, 1.75);
}

/* Headings with smooth responsive scaling */
h2 {
  font-size: clamp(1.25rem, 4vw, 2.5rem);
}

h3 {
  font-size: clamp(1rem, 3vw, 1.75rem);
}

/* Small text remains readable */
small, .caption {
  font-size: clamp(0.75rem, 1.5vw, 0.95rem);
}
```

### Fluid Type Scale System

Complete responsive system using clamp() for all sizes.

```css
:root {
  /* Fluid type scale with clamp() */
  --text-xs: clamp(0.625rem, 1vw, 0.875rem);
  --text-sm: clamp(0.75rem, 1.2vw, 1rem);
  --text-base: clamp(0.875rem, 1.5vw, 1.125rem);
  --text-lg: clamp(1rem, 2vw, 1.5rem);
  --text-xl: clamp(1.25rem, 2.5vw, 1.875rem);
  --text-2xl: clamp(1.5rem, 3vw, 2.25rem);
  --text-3xl: clamp(1.875rem, 4vw, 2.75rem);
  --text-4xl: clamp(2.25rem, 5vw, 3.5rem);
  --text-5xl: clamp(2.75rem, 6vw, 4.5rem);
  --text-6xl: clamp(3.5rem, 8vw, 5.5rem);

  /* Responsive line heights */
  --leading-tight: clamp(1.1, 0.5vw + 1rem, 1.3);
  --leading-normal: clamp(1.4, 0.7vw + 1rem, 1.7);
  --leading-relaxed: clamp(1.6, 1vw + 1rem, 1.9);
}

/* Apply fluid typography */
h1 { font-size: var(--text-5xl); line-height: var(--leading-tight); }
h2 { font-size: var(--text-4xl); line-height: var(--leading-tight); }
h3 { font-size: var(--text-3xl); line-height: var(--leading-normal); }
h4 { font-size: var(--text-2xl); line-height: var(--leading-normal); }
h5 { font-size: var(--text-xl); line-height: var(--leading-normal); }
h6 { font-size: var(--text-lg); line-height: var(--leading-normal); }

p, li { font-size: var(--text-base); line-height: var(--leading-relaxed); }
small { font-size: var(--text-sm); line-height: var(--leading-relaxed); }
```

### Responsive Media Queries (Traditional Approach)

For broader support, use media queries alongside fluid typography.

```css
/* Mobile first */
h1 {
  font-size: 1.875rem;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

p {
  font-size: 1rem;
  line-height: 1.6;
}

/* Tablet (768px+) */
@media (min-width: 768px) {
  h1 {
    font-size: 2.5rem;
  }

  p {
    font-size: 1.0625rem;
    line-height: 1.65;
  }
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
  h1 {
    font-size: 3.5rem;
  }

  p {
    font-size: 1.125rem;
    line-height: 1.7;
  }
}

/* Large desktop (1440px+) */
@media (min-width: 1440px) {
  h1 {
    font-size: 4.5rem;
  }

  p {
    font-size: 1.1875rem;
    line-height: 1.75;
  }
}
```

### Combining clamp() with Media Queries

Best practice: Use clamp() for smooth scaling, media queries for major breakpoint adjustments.

```css
/* Smooth scaling with clamp, major adjustments with MQ */
h1 {
  font-size: clamp(1.875rem, 6vw, 4.5rem);
  line-height: clamp(1.1, 0.5vw, 1.3);
}

p {
  font-size: clamp(1rem, 2vw, 1.1875rem);
  line-height: clamp(1.5, 0.5vw, 1.75);
  max-width: 70ch;
}

/* Adjust margins/padding based on screen size */
@media (max-width: 640px) {
  h1 { margin-bottom: 1rem; }
  p { margin-bottom: 1.5rem; }
}

@media (min-width: 1024px) {
  h1 { margin-bottom: 1.5rem; }
  p { margin-bottom: 2rem; }
}
```

### Tailwind CSS Responsive Typography

Extend Tailwind with responsive font scales.

```js
// tailwind.config.js
module.exports = {
  theme: {
    fontSize: {
      xs: ['0.75rem', '1.5'],
      sm: ['0.875rem', '1.5'],
      base: ['1rem', '1.6'],
      lg: ['1.125rem', '1.6'],
      xl: ['1.25rem', '1.5'],
      '2xl': ['1.5rem', '1.4'],
      '3xl': ['1.875rem', '1.3'],
      '4xl': ['2.25rem', '1.2'],
      '5xl': ['3rem', '1.1'],
    },
  },
};

/* Usage with responsive modifiers */
<h1 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
  Responsive Heading
</h1>

<p class="text-base md:text-lg lg:text-xl leading-relaxed">
  Responsive body text
</p>
```

---

**Last Updated:** March 2026
**Reference Version:** 2.0
