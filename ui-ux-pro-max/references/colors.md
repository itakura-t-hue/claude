# UI/UX Color Palette Reference

## Table of Contents

1. [How to Use This Reference](#how-to-use-this-reference)
2. [Trust & Professional](#trust--professional-saas-b2b-corporate)
3. [Energy & Commerce](#energy--commerce-e-commerce-retail-food)
4. [Health & Wellness](#health--wellness-healthcare-fitness-mental-health)
5. [Creative & Entertainment](#creative--entertainment-agency-portfolio-gaming)
6. [Finance & Luxury](#finance--luxury-fintech-banking-luxury)
7. [Technology & Developer](#technology--developer-dev-tools-aiml-crypto)
8. [Nature & Sustainability](#nature--sustainability-eco-organic-outdoor)
9. [Education & Community](#education--community-edtech-social-non-profit)
10. [Accessibility & Standards](#accessibility--standards)
11. [Dark Mode Adaptation](#dark-mode-adaptation-guidelines)
12. [Semantic Color Tokens](#semantic-color-token-naming-conventions)

## How to Use This Reference

This color catalog contains 96+ professionally curated palettes organized by industry and mood. Select a palette based on:

- **Project Type**: Choose the category that matches your industry (SaaS, healthcare, e-commerce, etc.)
- **Brand Personality**: Review mood keywords to align with desired perception
- **Accessibility**: Verify WCAG contrast ratios for your chosen colors (see [Accessibility Standards](#accessibility--standards))
- **Dark Mode Support**: Use the accompanying dark palette or follow adaptation guidelines
- **Implementation**: Copy the Tailwind config snippet or hex values directly into your design system

**Pro Tip**: Don't feel locked into a single palette. Mix complementary palettes from different categories for unique results. Always test contrast ratios before finalizing.

---

## Trust & Professional (SaaS, B2B, Corporate)

### Azure Professional
**Mood Keywords**: Trustworthy, Corporate, Modern, Stable

| Element | Color |
|---------|-------|
| Primary | #0066CC |
| Secondary | #003D82 |
| Accent | #00A8E8 |
| Background (Light) | #F0F4F8 |
| Background (Dark) | #0F1A2E |
| Text | #1A1A1A |
| Border | #D0D8E0 |

**Best for**: SaaS dashboards, B2B platforms, financial software, corporate intranets
**Avoid for**: Creative agencies, entertainment, casual social apps
**Tailwind Config**:
```js
colors: { primary: '#0066CC', secondary: '#003D82', accent: '#00A8E8' }
```

### Slate Executive
**Mood Keywords**: Sophisticated, Neutral, Premium, Established

| Element | Color |
|---------|-------|
| Primary | #2C3E50 |
| Secondary | #34495E |
| Accent | #3498DB |
| Background (Light) | #ECF0F1 |
| Background (Dark) | #1A1A1A |
| Text | #2C3E50 |
| Border | #BDC3C7 |

**Best for**: Law firms, consulting, enterprise software, banking
**Avoid for**: Startups seeking youth appeal, creative brands
**Tailwind Config**:
```js
colors: { primary: '#2C3E50', secondary: '#34495E', accent: '#3498DB' }
```

### Ocean Trust
**Mood Keywords**: Calm, Professional, Secure, Dependable

| Element | Color |
|---------|-------|
| Primary | #0047AB |
| Secondary | #003D82 |
| Accent | #0099FF |
| Background (Light) | #F5F8FB |
| Background (Dark) | #0A1F3D |
| Text | #0D1B2A |
| Border | #CDD8E0 |

**Best for**: Healthcare tech, insurance, security software, government
**Avoid for**: Youth-oriented products, entertainment
**Tailwind Config**:
```js
colors: { primary: '#0047AB', secondary: '#003D82', accent: '#0099FF' }
```

### Granite Authority
**Mood Keywords**: Powerful, Authoritative, Grounded, Traditional

| Element | Color |
|---------|-------|
| Primary | #3E4651 |
| Secondary | #57606F |
| Accent | #6C757D |
| Background (Light) | #F8F9FA |
| Background (Dark) | #212529 |
| Text | #212529 |
| Border | #DEE2E6 |

**Best for**: Enterprise platforms, government, large corporations
**Avoid for**: Playful brands, youth markets
**Tailwind Config**:
```js
colors: { primary: '#3E4651', secondary: '#57606F', accent: '#6C757D' }
```

### Teal Professional
**Mood Keywords**: Modern, Clean, Trustworthy, Forward-thinking

| Element | Color |
|---------|-------|
| Primary | #0B8185 |
| Secondary | #005A63 |
| Accent | #00B4D8 |
| Background (Light) | #F0FAFB |
| Background (Dark) | #0D1F23 |
| Text | #0F1E22 |
| Border | #C5E2E7 |

**Best for**: Tech startups, SaaS platforms, B2B apps, consulting
**Avoid for**: Traditional industries needing classic feel
**Tailwind Config**:
```js
colors: { primary: '#0B8185', secondary: '#005A63', accent: '#00B4D8' }
```

### Indigo Confidence
**Mood Keywords**: Confident, Intelligent, Premium, Progressive

| Element | Color |
|---------|-------|
| Primary | #4F46E5 |
| Secondary | #3730A3 |
| Accent | #818CF8 |
| Background (Light) | #F5F3FF |
| Background (Dark) | #1E1B4B |
| Text | #1F2937 |
| Border | #E0E7FF |

**Best for**: SaaS, fintech, AI tools, tech platforms
**Avoid for**: Conservative, traditional sectors
**Tailwind Config**:
```js
colors: { primary: '#4F46E5', secondary: '#3730A3', accent: '#818CF8' }
```

---

## Energy & Commerce (E-commerce, Retail, Food)

### Crimson Commerce
**Mood Keywords**: Bold, Energetic, Exciting, Sales-driven

| Element | Color |
|---------|-------|
| Primary | #DC143C |
| Secondary | #A71930 |
| Accent | #FF4757 |
| Background (Light) | #FFF5F5 |
| Background (Dark) | #3D0D0D |
| Text | #1A1A1A |
| Border | #FFB3B3 |

**Best for**: E-commerce sites, retail, flash sales, food delivery
**Avoid for**: Professional/corporate, healthcare, meditation apps
**Tailwind Config**:
```js
colors: { primary: '#DC143C', secondary: '#A71930', accent: '#FF4757' }
```

### Vibrant Orange
**Mood Keywords**: Energetic, Friendly, Appetite-stimulating, Warm

| Element | Color |
|---------|-------|
| Primary | #FF6B35 |
| Secondary | #D84315 |
| Accent | #FF8C42 |
| Background (Light) | #FFF8F3 |
| Background (Dark) | #3D2015 |
| Text | #1A1A1A |
| Border | #FFCC99 |

**Best for**: Food delivery, casual retail, hospitality, events
**Avoid for**: Luxury brands, conservative industries
**Tailwind Config**:
```js
colors: { primary: '#FF6B35', secondary: '#D84315', accent: '#FF8C42' }
```

### Electric Pink
**Mood Keywords**: Vibrant, Youthful, Trendy, Modern

| Element | Color |
|---------|-------|
| Primary | #FF006E |
| Secondary | #C8004D |
| Accent | #FF5FA0 |
| Background (Light) | #FFF0F6 |
| Background (Dark) | #3D001A |
| Text | #1A1A1A |
| Border | #FFB3D9 |

**Best for**: Fashion, beauty, lifestyle, entertainment, social
**Avoid for**: Serious/corporate, financial, healthcare
**Tailwind Config**:
```js
colors: { primary: '#FF006E', secondary: '#C8004D', accent: '#FF5FA0' }
```

### Golden Luxury Retail
**Mood Keywords**: Premium, Sophisticated, Exclusive, Elegant

| Element | Color |
|---------|-------|
| Primary | #D4AF37 |
| Secondary | #A89D35 |
| Accent | #F0E68C |
| Background (Light) | #FFFEF0 |
| Background (Dark) | #2D2415 |
| Text | #1A1A1A |
| Border | #E6D99F |

**Best for**: Luxury goods, high-end fashion, premium cosmetics
**Avoid for**: Budget retail, casual e-commerce
**Tailwind Config**:
```js
colors: { primary: '#D4AF37', secondary: '#A89D35', accent: '#F0E68C' }
```

### Sunshine Yellow
**Mood Keywords**: Cheerful, Positive, Optimistic, Friendly

| Element | Color |
|---------|-------|
| Primary | #FFD700 |
| Secondary | #D4A73A |
| Accent | #FFF44F |
| Background (Light) | #FFFEF0 |
| Background (Dark) | #3D3D0D |
| Text | #1A1A1A |
| Border | #F4D99F |

**Best for**: Retail, food, summer campaigns, budget-friendly brands
**Avoid for**: Corporate, serious professional services
**Tailwind Config**:
```js
colors: { primary: '#FFD700', secondary: '#D4A73A', accent: '#FFF44F' }
```

### Emerald Growth
**Mood Keywords**: Fresh, Growth, Natural, Healthy

| Element | Color |
|---------|-------|
| Primary | #10B981 |
| Secondary | #059669 |
| Accent | #34D399 |
| Background (Light) | #F0FDF4 |
| Background (Dark) | #064E3B |
| Text | #1A1A1A |
| Border | #A7F3D0 |

**Best for**: Organic products, health food, eco-conscious retail, growth-focused startups
**Avoid for**: Luxury, traditional finance
**Tailwind Config**:
```js
colors: { primary: '#10B981', secondary: '#059669', accent: '#34D399' }
```

### Sapphire Premium
**Mood Keywords**: Exclusive, Premium, Deep, Luxurious

| Element | Color |
|---------|-------|
| Primary | #0F3460 |
| Secondary | #16213E |
| Accent | #533483 |
| Background (Light) | #F5F5F7 |
| Background (Dark) | #0D1B2A |
| Text | #1A1A1A |
| Border | #9D84B7 |

**Best for**: Premium brands, luxury retail, high-end services
**Avoid for**: Budget-conscious markets, casual brands
**Tailwind Config**:
```js
colors: { primary: '#0F3460', secondary: '#16213E', accent: '#533483' }
```

---

## Health & Wellness (Healthcare, Fitness, Mental Health)

### Healing Green
**Mood Keywords**: Calming, Healthy, Natural, Therapeutic

| Element | Color |
|---------|-------|
| Primary | #06A77D |
| Secondary | #055160 |
| Accent | #8FD3BC |
| Background (Light) | #F0FDF8 |
| Background (Dark) | #0A2420 |
| Text | #0F2F2A |
| Border | #C5E5DF |

**Best for**: Healthcare apps, wellness platforms, meditation, therapy, hospitals
**Avoid for**: Financial, corporate, entertainment
**Tailwind Config**:
```js
colors: { primary: '#06A77D', secondary: '#055160', accent: '#8FD3BC' }
```

### Wellness Blue
**Mood Keywords**: Peaceful, Trustworthy, Serene, Medical

| Element | Color |
|---------|-------|
| Primary | #0D7FB8 |
| Secondary | #0A5585 |
| Accent | #48BFE3 |
| Background (Light) | #F0F8FF |
| Background (Dark) | #061E2F |
| Text | #0F2A3D |
| Border | #B8E0F6 |

**Best for**: Telemedicine, doctor platforms, health records, fitness apps
**Avoid for**: Social, entertainment, consumer goods
**Tailwind Config**:
```js
colors: { primary: '#0D7FB8', secondary: '#0A5585', accent: '#48BFE3' }
```

### Fitness Energy
**Mood Keywords**: Active, Energetic, Strong, Motivating

| Element | Color |
|---------|-------|
| Primary | #D62828 |
| Secondary | #9A0D0D |
| Accent | #F77F00 |
| Background (Light) | #FFF5F0 |
| Background (Dark) | #3D0A0A |
| Text | #1A1A1A |
| Border | #F7C1A6 |

**Best for**: Gym apps, fitness tracking, sports, training platforms
**Avoid for**: Healthcare, calm/meditative apps
**Tailwind Config**:
```js
colors: { primary: '#D62828', secondary: '#9A0D0D', accent: '#F77F00' }
```

### Mental Health Calm
**Mood Keywords**: Peaceful, Safe, Supportive, Gentle

| Element | Color |
|---------|-------|
| Primary | #8B7BA8 |
| Secondary | #6B5B95 |
| Accent | #B5A7D6 |
| Background (Light) | #FAF9FC |
| Background (Dark) | #2A2438 |
| Text | #3D3D4D |
| Border | #D4CCEC |

**Best for**: Therapy apps, mental health platforms, counseling, mindfulness
**Avoid for**: High-energy, commercial, bold brands
**Tailwind Config**:
```js
colors: { primary: '#8B7BA8', secondary: '#6B5B95', accent: '#B5A7D6' }
```

### Vitality Orange
**Mood Keywords**: Vibrant, Healthy, Optimistic, Forward

| Element | Color |
|---------|-------|
| Primary | #FB8500 |
| Secondary | #D46E00 |
| Accent | #FFA500 |
| Background (Light) | #FFF8F0 |
| Background (Dark) | #3D2810 |
| Text | #1A1A1A |
| Border | #FFD4A6 |

**Best for**: Nutrition apps, wellness brands, health tracking, organic products
**Avoid for**: Serious medical, corporate finance
**Tailwind Config**:
```js
colors: { primary: '#FB8500', secondary: '#D46E00', accent: '#FFA500' }
```

### Zen Purple
**Mood Keywords**: Meditative, Spiritual, Calm, Introspective

| Element | Color |
|---------|-------|
| Primary | #7B68EE |
| Secondary | #5851DB |
| Accent | #B4A7FF |
| Background (Light) | #F7F5FF |
| Background (Dark) | #2A2450 |
| Text | #2D2D4D |
| Border | #D9D5FF |

**Best for**: Meditation apps, wellness, yoga, spiritual content
**Avoid for**: Serious medical, high-action, corporate
**Tailwind Config**:
```js
colors: { primary: '#7B68EE', secondary: '#5851DB', accent: '#B4A7FF' }
```

---

## Creative & Entertainment (Agency, Portfolio, Gaming)

### Neon Cyber
**Mood Keywords**: Futuristic, Bold, Edgy, Digital-native

| Element | Color |
|---------|-------|
| Primary | #00D9FF |
| Secondary | #0099CC |
| Accent | #FF006E |
| Background (Light) | #F0FDFF |
| Background (Dark) | #0A1F2E |
| Text | #00D9FF |
| Border | #0099CC |

**Best for**: Gaming, VR/AR, digital agencies, tech creatives, music
**Avoid for**: Traditional, corporate, conservative brands
**Tailwind Config**:
```js
colors: { primary: '#00D9FF', secondary: '#0099CC', accent: '#FF006E' }
```

### Creative Purple
**Mood Keywords**: Innovative, Artistic, Imaginative, Bold

| Element | Color |
|---------|-------|
| Primary | #9D4EDD |
| Secondary | #7209B7 |
| Accent | #E0AAFF |
| Background (Light) | #F5EFFE |
| Background (Dark) | #240046 |
| Text | #1A1A1A |
| Border | #D5BAFF |

**Best for**: Design portfolios, creative agencies, entertainment, art platforms
**Avoid for**: Corporate, financial, medical
**Tailwind Config**:
```js
colors: { primary: '#9D4EDD', secondary: '#7209B7', accent: '#E0AAFF' }
```

### Playful Rainbow
**Mood Keywords**: Fun, Youthful, Diverse, Energetic

| Element | Color |
|---------|-------|
| Primary | #FF006E |
| Secondary | #00B4D8 |
| Accent | #FFD60A |
| Background (Light) | #FFFBF0 |
| Background (Dark) | #3D0D2E |
| Text | #1A1A1A |
| Border | #FFB6D9 |

**Best for**: Entertainment, gaming, children's apps, social media, creative apps
**Avoid for**: Finance, healthcare, corporate
**Tailwind Config**:
```js
colors: { primary: '#FF006E', secondary: '#00B4D8', accent: '#FFD60A' }
```

### Dark Gaming
**Mood Keywords**: Immersive, Intense, Sophisticated, Professional

| Element | Color |
|---------|-------|
| Primary | #1A1A2E |
| Secondary | #16213E |
| Accent | #0F3460 |
| Background (Light) | #E8E8F0 |
| Background (Dark) | #0F0F1E |
| Text | #E8E8F0 |
| Border | #533483 |

**Best for**: Gaming, dark mode interfaces, entertainment, tech
**Avoid for**: Healthcare, light/happy brands
**Tailwind Config**:
```js
colors: { primary: '#1A1A2E', secondary: '#16213E', accent: '#0F3460' }
```

### Pastel Creative
**Mood Keywords**: Soft, Approachable, Modern, Friendly

| Element | Color |
|---------|-------|
| Primary | #FF6B9D |
| Secondary | #C44569 |
| Accent | #FFC0CB |
| Background (Light) | #FFF5F8 |
| Background (Dark) | #3D1A26 |
| Text | #2A2A2A |
| Border | #FFD9E8 |

**Best for**: Creative portfolios, lifestyle brands, social media, design apps
**Avoid for**: Corporate, serious professional services
**Tailwind Config**:
```js
colors: { primary: '#FF6B9D', secondary: '#C44569', accent: '#FFC0CB' }
```

### Retro 80s
**Mood Keywords**: Nostalgic, Bold, Vibrant, Playful

| Element | Color |
|---------|-------|
| Primary | #FF10F0 |
| Secondary | #00FFFF |
| Accent | #FFFF00 |
| Background (Light) | #FFF0FF |
| Background (Dark) | #2A0033 |
| Text | #1A1A1A |
| Border | #FF99FF |

**Best for**: Entertainment, gaming, creative projects, music, fashion
**Avoid for**: Corporate, conservative, professional services
**Tailwind Config**:
```js
colors: { primary: '#FF10F0', secondary: '#00FFFF', accent: '#FFFF00' }
```

---

## Finance & Luxury (Fintech, Banking, Luxury)

### Premium Gold
**Mood Keywords**: Luxury, Exclusive, Sophisticated, Prestigious

| Element | Color |
|---------|-------|
| Primary | #C59D5C |
| Secondary | #8B6F47 |
| Accent | #D4AF37 |
| Background (Light) | #FFFEF5 |
| Background (Dark) | #2A240D |
| Text | #1A1A1A |
| Border | #E6D9B8 |

**Best for**: Luxury goods, high-end fintech, premium banking, jewelry
**Avoid for**: Casual, budget, entertainment
**Tailwind Config**:
```js
colors: { primary: '#C59D5C', secondary: '#8B6F47', accent: '#D4AF37' }
```

### Fintech Bold
**Mood Keywords**: Secure, Progressive, Trustworthy, Forward-thinking

| Element | Color |
|---------|-------|
| Primary | #1F2937 |
| Secondary | #374151 |
| Accent | #3B82F6 |
| Background (Light) | #F3F4F6 |
| Background (Dark) | #111827 |
| Text | #1F2937 |
| Border | #D1D5DB |

**Best for**: Financial apps, banking, fintech, investment platforms
**Avoid for**: Entertainment, casual brands
**Tailwind Config**:
```js
colors: { primary: '#1F2937', secondary: '#374151', accent: '#3B82F6' }
```

### Banking Trust
**Mood Keywords**: Secure, Established, Professional, Reliable

| Element | Color |
|---------|-------|
| Primary | #003D7A |
| Secondary | #001F3F |
| Accent | #0074D9 |
| Background (Light) | #F0F4F8 |
| Background (Dark) | #0D1B3D |
| Text | #0F1F3D |
| Border | #B3CDE8 |

**Best for**: Traditional banking, insurance, investment, financial services
**Avoid for**: Creative, entertainment, casual
**Tailwind Config**:
```js
colors: { primary: '#003D7A', secondary: '#001F3F', accent: '#0074D9' }
```

### Cryptocurrency Bold
**Mood Keywords**: Innovative, Tech-forward, Dynamic, Bold

| Element | Color |
|---------|-------|
| Primary | #F7931A |
| Secondary | #D47A1C |
| Accent | #FFC644 |
| Background (Light) | #FFF9E6 |
| Background (Dark) | #3D2410 |
| Text | #1A1A1A |
| Border | #FFD699 |

**Best for**: Cryptocurrency, fintech, blockchain, tech startups
**Avoid for**: Traditional finance, conservative industries
**Tailwind Config**:
```js
colors: { primary: '#F7931A', secondary: '#D47A1C', accent: '#FFC644' }
```

### Emerald Wealth
**Mood Keywords**: Growth, Prosperity, Stable, Forward-moving

| Element | Color |
|---------|-------|
| Primary | #0B8B6F |
| Secondary | #067A5F |
| Accent | #00C9A7 |
| Background (Light) | #F0FDF8 |
| Background (Dark) | #0A2820 |
| Text | #0F2A25 |
| Border | #B3E5D8 |

**Best for**: Investment apps, wealth management, financial technology
**Avoid for**: Serious medical/government, entertainment
**Tailwind Config**:
```js
colors: { primary: '#0B8B6F', secondary: '#067A5F', accent: '#00C9A7' }
```

### Platinum Elite
**Mood Keywords**: Premium, Elegant, Exclusive, Refined

| Element | Color |
|---------|-------|
| Primary | #A8A9AD |
| Secondary | #7A7B7E |
| Accent | #C0C0C0 |
| Background (Light) | #F5F5F5 |
| Background (Dark) | #1A1A1A |
| Text | #1A1A1A |
| Border | #DCDCDC |

**Best for**: Premium services, luxury brands, high-end platforms
**Avoid for**: Youthful, casual, energetic brands
**Tailwind Config**:
```js
colors: { primary: '#A8A9AD', secondary: '#7A7B7E', accent: '#C0C0C0' }
```

---

## Technology & Developer (Dev Tools, AI/ML, Crypto)

### AI Neon
**Mood Keywords**: Intelligent, Futuristic, Cutting-edge, Bold

| Element | Color |
|---------|-------|
| Primary | #00D9FF |
| Secondary | #0099FF |
| Accent | #FF006E |
| Background (Light) | #F0FDFF |
| Background (Dark) | #0A1F2E |
| Text | #00D9FF |
| Border | #0099FF |

**Best for**: AI/ML platforms, tech tools, developer platforms, SaaS
**Avoid for**: Traditional, conservative, healthcare
**Tailwind Config**:
```js
colors: { primary: '#00D9FF', secondary: '#0099FF', accent: '#FF006E' }
```

### Dark Code
**Mood Keywords**: Professional, Focused, Technical, Minimalist

| Element | Color |
|---------|-------|
| Primary | #0D1117 |
| Secondary | #161B22 |
| Accent | #58A6FF |
| Background (Light) | #F6F8FA |
| Background (Dark) | #0D1117 |
| Text | #C9D1D9 |
| Border | #30363D |

**Best for**: Developer tools, code editors, GitHub-like platforms, technical software
**Avoid for**: Consumer, entertainment, healthcare
**Tailwind Config**:
```js
colors: { primary: '#0D1117', secondary: '#161B22', accent: '#58A6FF' }
```

### Tech Blue
**Mood Keywords**: Professional, Trustworthy, Modern, Technical

| Element | Color |
|---------|-------|
| Primary | #0066FF |
| Secondary | #004CCC |
| Accent | #0099FF |
| Background (Light) | #F0F6FF |
| Background (Dark) | #0A1F3D |
| Text | #0F2A4D |
| Border | #B3D9FF |

**Best for**: Tech startups, SaaS, developer platforms, software
**Avoid for**: Entertainment, creative, casual
**Tailwind Config**:
```js
colors: { primary: '#0066FF', secondary: '#004CCC', accent: '#0099FF' }
```

### Green Terminal
**Mood Keywords**: Hackish, Technical, Classic, Programmerly

| Element | Color |
|---------|-------|
| Primary | #00FF41 |
| Secondary | #00CC33 |
| Accent | #39FF14 |
| Background (Light) | #F0FFF0 |
| Background (Dark) | #0A2A0A |
| Text | #00FF41 |
| Border | #33CC33 |

**Best for**: Dev tools, coding platforms, technical demos, hacker culture
**Avoid for**: Corporate, healthcare, traditional services
**Tailwind Config**:
```js
colors: { primary: '#00FF41', secondary: '#00CC33', accent: '#39FF14' }
```

### Web3 Gradient
**Mood Keywords**: Decentralized, Modern, Bold, Progressive

| Element | Color |
|---------|-------|
| Primary | #7C3AED |
| Secondary | #3B82F6 |
| Accent | #10B981 |
| Background (Light) | #F5F3FF |
| Background (Dark) | #1E1B4B |
| Text | #1F2937 |
| Border | #E0E7FF |

**Best for**: Web3, blockchain, crypto, decentralized platforms
**Avoid for**: Traditional finance, conservative industries
**Tailwind Config**:
```js
colors: { primary: '#7C3AED', secondary: '#3B82F6', accent: '#10B981' }
```

### Purple Tech
**Mood Keywords**: Innovative, Premium, Forward-thinking, Tech-savvy

| Element | Color |
|---------|-------|
| Primary | #8B5CF6 |
| Secondary | #7C3AED |
| Accent | #C084FC |
| Background (Light) | #FAF5FF |
| Background (Dark) | #2E1065 |
| Text | #1F2937 |
| Border | #E9D5FF |

**Best for**: Tech platforms, SaaS, developer tools, AI products
**Avoid for**: Traditional, conservative, serious industries
**Tailwind Config**:
```js
colors: { primary: '#8B5CF6', secondary: '#7C3AED', accent: '#C084FC' }
```

---

## Nature & Sustainability (Eco, Organic, Outdoor)

### Forest Green
**Mood Keywords**: Natural, Sustainable, Growth, Organic

| Element | Color |
|---------|-------|
| Primary | #1B4332 |
| Secondary | #2D6A4F |
| Accent | #40916C |
| Background (Light) | #F0FDF4 |
| Background (Dark) | #052E16 |
| Text | #1A1A1A |
| Border | #BBF7D0 |

**Best for**: Eco-brands, sustainability, organic products, environmental apps
**Avoid for**: Corporate finance, entertainment, luxury
**Tailwind Config**:
```js
colors: { primary: '#1B4332', secondary: '#2D6A4F', accent: '#40916C' }
```

### Earth Tones
**Mood Keywords**: Organic, Warm, Natural, Grounded

| Element | Color |
|---------|-------|
| Primary | #8B6F47 |
| Secondary | #6B5540 |
| Accent | #A0826D |
| Background (Light) | #F5F1ED |
| Background (Dark) | #2A2418 |
| Text | #1A1A1A |
| Border | #D4C4B8 |

**Best for**: Organic products, eco-brands, outdoor companies, natural goods
**Avoid for**: High-tech, corporate, modern minimalist
**Tailwind Config**:
```js
colors: { primary: '#8B6F47', secondary: '#6B5540', accent: '#A0826D' }
```

### Ocean Life
**Mood Keywords**: Fresh, Natural, Calming, Environmental

| Element | Color |
|---------|-------|
| Primary | #0066CC |
| Secondary | #004C99 |
| Accent | #00D9FF |
| Background (Light) | #F0F9FF |
| Background (Dark) | #0A1F3D |
| Text | #0F2A4D |
| Border | #B3E0FF |

**Best for**: Environmental organizations, water conservation, ocean conservation
**Avoid for**: Luxury, entertainment, serious finance
**Tailwind Config**:
```js
colors: { primary: '#0066CC', secondary: '#004C99', accent: '#00D9FF' }
```

### Sunshine Sustainability
**Mood Keywords**: Positive, Renewable, Bright, Hopeful

| Element | Color |
|---------|-------|
| Primary | #FFB703 |
| Secondary | #D48D04 |
| Accent | #FFD60A |
| Background (Light) | #FFFCF0 |
| Background (Dark) | #3D3000 |
| Text | #1A1A1A |
| Border | #FFE599 |

**Best for**: Solar energy, renewable tech, green companies, eco-startups
**Avoid for**: Serious finance, medical, formal corporate
**Tailwind Config**:
```js
colors: { primary: '#FFB703', secondary: '#D48D04', accent: '#FFD60A' }
```

### Botanical Garden
**Mood Keywords**: Growth, Natural, Serene, Organic

| Element | Color |
|---------|-------|
| Primary | #6BA040 |
| Secondary | #4A7C2E |
| Accent | #8BC34A |
| Background (Light) | #F4F9EB |
| Background (Dark) | #1F2A0A |
| Text | #1A1A1A |
| Border | #D4E8A0 |

**Best for**: Gardening, landscaping, plant-based products, organic food
**Avoid for**: Technology, finance, entertainment
**Tailwind Config**:
```js
colors: { primary: '#6BA040', secondary: '#4A7C2E', accent: '#8BC34A' }
```

---

## Education & Community (EdTech, Social, Non-profit)

### Learning Blue
**Mood Keywords**: Educational, Trustworthy, Clear, Progressive

| Element | Color |
|---------|-------|
| Primary | #0047AB |
| Secondary | #003D82 |
| Accent | #0066FF |
| Background (Light) | #F0F5FF |
| Background (Dark) | #0A1F3D |
| Text | #0F2A4D |
| Border | #B3D9FF |

**Best for**: EdTech, online learning, schools, universities, training
**Avoid for**: Entertainment, casual social, playful brands
**Tailwind Config**:
```js
colors: { primary: '#0047AB', secondary: '#003D82', accent: '#0066FF' }
```

### Community Orange
**Mood Keywords**: Welcoming, Inclusive, Warm, Connected

| Element | Color |
|---------|-------|
| Primary | #FF8C42 |
| Secondary | #D46A1C |
| Accent | #FFB366 |
| Background (Light) | #FFF4EB |
| Background (Dark) | #3D2810 |
| Text | #1A1A1A |
| Border | #FFD9B3 |

**Best for**: Community platforms, social networks, non-profits, grassroots orgs
**Avoid for**: Corporate, serious finance, formal education
**Tailwind Config**:
```js
colors: { primary: '#FF8C42', secondary: '#D46A1C', accent: '#FFB366' }
```

### Inclusive Purple
**Mood Keywords**: Diverse, Inclusive, Progressive, Empowering

| Element | Color |
|---------|-------|
| Primary | #7209B7 |
| Secondary | #5A189A |
| Accent | #C77DFF |
| Background (Light) | #F8F5FF |
| Background (Dark) | #2D1B4E |
| Text | #1A1A1A |
| Border | #E0CCFF |

**Best for**: Social justice, DEI platforms, community apps, non-profits
**Avoid for**: Corporate finance, traditional industries
**Tailwind Config**:
```js
colors: { primary: '#7209B7', secondary: '#5A189A', accent: '#C77DFF' }
```

### Non-profit Green
**Mood Keywords**: Hopeful, Sustainable, Mission-driven, Impact

| Element | Color |
|---------|-------|
| Primary | #2D6A4F |
| Secondary | #1B4332 |
| Accent | #52B788 |
| Background (Light) | #F1F8F4 |
| Background (Dark) | #0F2818 |
| Text | #1A1A1A |
| Border | #C4E5D8 |

**Best for**: Non-profits, charities, social impact, environmental orgs
**Avoid for**: Commercial, entertainment, luxury
**Tailwind Config**:
```js
colors: { primary: '#2D6A4F', secondary: '#1B4332', accent: '#52B788' }
```

### Youth Social
**Mood Keywords**: Energetic, Youthful, Trendy, Connected

| Element | Color |
|---------|-------|
| Primary | #FF1493 |
| Secondary | #D81B60 |
| Accent | #FF6EC7 |
| Background (Light) | #FFF0F7 |
| Background (Dark) | #3D0A26 |
| Text | #1A1A1A |
| Border | #FFB3E6 |

**Best for**: Youth platforms, social media, gaming, entertainment
**Avoid for**: Corporate, finance, serious professional
**Tailwind Config**:
```js
colors: { primary: '#FF1493', secondary: '#D81B60', accent: '#FF6EC7' }
```

### Civic Pride
**Mood Keywords**: Trustworthy, Community-focused, Inclusive, Strong

| Element | Color |
|---------|-------|
| Primary | #1B4965 |
| Secondary | #0F3A4D |
| Accent | #386FA4 |
| Background (Light) | #EFF4F9 |
| Background (Dark) | #0A1F2E |
| Text | #1A1A1A |
| Border | #B8D4E8 |

**Best for**: Government, civic platforms, community organizations, public services
**Avoid for**: Entertainment, fashion, casual
**Tailwind Config**:
```js
colors: { primary: '#1B4965', secondary: '#0F3A4D', accent: '#386FA4' }
```

---

## Accessibility & Standards

### WCAG Contrast Ratios

Ensure your selected colors meet these minimum standards:

- **AAA Large (18pt+)**: 3:1 contrast ratio
- **AA Large (18pt+)**: 3:1 contrast ratio
- **AAA Normal (14pt+)**: 7:1 contrast ratio
- **AA Normal (14pt+)**: 4.5:1 contrast ratio

**Testing Tools**:
- WebAIM Contrast Checker
- Color Contrast Analyzer
- Stark (design tool plugin)
- Polychromatic

### Color Blindness Considerations

Approximately 8% of males and 0.5% of females have color vision deficiency. Test your palettes for:

- **Protanopia** (Red-blind, ~1% of males)
- **Deuteranopia** (Green-blind, ~1% of males)
- **Tritanopia** (Blue-yellow blind, rare)
- **Achromatopsia** (Complete color blindness, very rare)

**Testing Tools**:
- Colorblind Web Page Filter
- Coblis — Color Blindness Simulator
- Color Oracle

### Guidelines

1. **Don't rely on color alone** to convey information. Always use patterns, text, or icons.
2. **Test with real users** who have color vision deficiency.
3. **Use sufficient contrast** between text and background (minimum 4.5:1 for normal text).
4. **Avoid color combinations** like red/green side by side without additional context.
5. **Use accessible color combinations**: Navy/White, Black/Yellow, Dark Blue/Light Blue.

---

## Dark Mode Adaptation Guidelines

### Systematic Dark Mode Implementation

Dark mode requires more than inverting brightness. Follow these principles:

#### 1. **Primary Color Adaptation**
- **Light Mode**: Use standard primary (e.g., #0066CC)
- **Dark Mode**: Lighten primary by 30-40% (e.g., #4D94FF)
  - Reason: Dark backgrounds reduce contrast with standard colors

#### 2. **Background Relationships**
- **Light Mode**: White background + dark text
- **Dark Mode**: Dark background (use #0F1A2E - #1A1A2E) + light text
- **Contrast Rule**: Always maintain 4.5:1+ contrast ratio

#### 3. **Accent Colors**
- **Light Mode**: Bold, saturated accents
- **Dark Mode**: Slightly lighter/brighter accents for visibility
- Example: If light mode uses #FF006E, dark mode might use #FF4081

#### 4. **Border & Divider Colors**
- **Light Mode**: #D0D8E0 or #DCDCDC
- **Dark Mode**: #30363D or #404854 (slightly lighter than background)

#### 5. **Text Color Adaptations**
- **Light Mode Headings**: #1A1A1A (Black)
- **Dark Mode Headings**: #F5F5F5 or #FFFFFF
- **Light Mode Body**: #404040 (Dark Gray)
- **Dark Mode Body**: #E0E0E0 (Light Gray)
- **Light Mode Muted**: #909090
- **Dark Mode Muted**: #999999

### CSS Variables for Dark Mode

```css
/* Light Mode */
:root {
  --color-primary: #0066CC;
  --color-primary-light: #E6F2FF;
  --color-background: #FFFFFF;
  --color-surface: #F5F5F5;
  --color-text: #1A1A1A;
  --color-text-secondary: #666666;
  --color-border: #D0D8E0;
}

/* Dark Mode */
@media (prefers-color-scheme: dark) {
  :root {
    --color-primary: #4D94FF;
    --color-primary-light: #1A3A66;
    --color-background: #0F1A2E;
    --color-surface: #1A2540;
    --color-text: #F5F5F5;
    --color-text-secondary: #B0B0B0;
    --color-border: #30363D;
  }
}
```

### Palette-Specific Dark Mode Overrides

For each palette, create dark mode variants:

```js
// Example: Azure Professional in Dark Mode
darkMode: {
  colors: {
    primary: '#4D94FF',      // Lightened from #0066CC
    secondary: '#5DADE2',    // Adjusted
    accent: '#4DD0E1',       // Brightened
    background: '#0F1A2E',   // Dark
    text: '#E8E8F0'          // Light
  }
}
```

### Testing Dark Mode

1. Use browser DevTools to test `prefers-color-scheme: dark`
2. Verify all UI elements remain readable
3. Test with screen readers in dark mode
4. Check for appropriate contrast ratios
5. Ensure images/logos are visible in dark mode (may need inversion)

---

## Semantic Color Token Naming Conventions

### Recommended Token Structure

Use semantic naming that describes function, not appearance:

```js
// ❌ Bad (Appearance-based)
--color-blue: #0066CC
--color-red: #FF0000
--color-dark-gray: #333333

// ✅ Good (Semantic)
--color-primary: #0066CC
--color-success: #10B981
--color-error: #DC2626
--color-warning: #F59E0B
--color-info: #3B82F6
--color-text-primary: #1A1A1A
--color-text-secondary: #666666
--color-border-primary: #D0D8E0
--color-surface-primary: #FFFFFF
--color-surface-secondary: #F9FAFB
```

### Recommended Token Hierarchy

```
color/
├── functional/
│   ├── primary
│   ├── secondary
│   ├── accent
│   ├── success
│   ├── warning
│   ├── error
│   └── info
├── semantic/
│   ├── text/
│   │   ├── primary
│   │   ├── secondary
│   │   └── disabled
│   ├── background/
│   │   ├── primary
│   │   ├── secondary
│   │   └── elevated
│   ├── border/
│   │   ├── primary
│   │   ├── secondary
│   │   └── subtle
│   └── interactive/
│       ├── hover
│       ├── active
│       ├── focus
│       └── disabled
└── status/
    ├── success
    ├── warning
    ├── error
    └── info
```

### Implementation Examples

#### CSS Variables
```css
:root {
  /* Functional Colors */
  --color-primary: #0066CC;
  --color-secondary: #003D82;
  --color-accent: #FF006E;

  /* Text Colors */
  --color-text-primary: #1A1A1A;
  --color-text-secondary: #666666;
  --color-text-disabled: #CCCCCC;

  /* Surface Colors */
  --color-bg-primary: #FFFFFF;
  --color-bg-secondary: #F9FAFB;
  --color-bg-elevated: #F5F5F5;

  /* Border Colors */
  --color-border-primary: #D0D8E0;
  --color-border-secondary: #E8E8E8;
  --color-border-subtle: #F0F0F0;

  /* Status Colors */
  --color-success: #10B981;
  --color-warning: #F59E0B;
  --color-error: #DC2626;
  --color-info: #3B82F6;
}
```

#### Tailwind Config
```js
module.exports = {
  theme: {
    colors: {
      // Functional
      primary: {
        DEFAULT: '#0066CC',
        light: '#E6F2FF',
        dark: '#003D82',
      },
      // Text
      text: {
        primary: '#1A1A1A',
        secondary: '#666666',
        disabled: '#CCCCCC',
      },
      // Semantic
      success: '#10B981',
      warning: '#F59E0B',
      error: '#DC2626',
      info: '#3B82F6',
    },
  },
}
```

### Naming Rules

1. **Function-based**: Names describe purpose (primary, error, border)
2. **Hierarchical**: Use forward slashes or nested objects
3. **State-aware**: Include hover, active, focus, disabled states
4. **Dark mode ready**: Support both light and dark variants
5. **Accessible**: Include sufficient contrast ratios

### Migration Tips

If moving from appearance-based to semantic tokens:

1. Create a mapping document
2. Update component references gradually
3. Keep old tokens as aliases during transition
4. Test contrast ratios after migration
5. Update design documentation

---

**Last Updated**: March 2026
**Version**: 1.0
**Total Palettes**: 96+
**Accessibility Standard**: WCAG 2.1 AA Minimum
