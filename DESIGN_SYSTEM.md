# 🎨 Design System - Architecture complète

## Vue d'ensemble

Ce document définit le système de design complet pour le projet Eversun modernisé.

---

## 📐 Struktur et hiérarchie

```
Design System
├── Color System
│   ├── Primary Colors (Cyan)
│   ├── Accent Colors (Violet)
│   ├── Status Colors (Success/Warning/Error)
│   └── Neutral Colors (Slate)
│
├── Typography System
│   ├── Fonts (Inter, Lora, Fira Code)
│   ├── Font Sizes
│   └── Font Weights
│
├── Spacing System
│   ├── Spacing Scale (0, 2, 4, 8, 12, 16, 24...)
│   └── Grid System (8px)
│
├── Shadow System
│   ├── Elevation Shadows
│   ├── Glow Effects
│   └── Inset Shadows
│
├── Radius System
│   ├── Round Values (6, 8, 12, 16, 20, 24px)
│   └── Usage patterns
│
├── Animation System
│   ├── Timing Functions
│   ├── Duration Standards (150ms, 300ms, 500ms)
│   └── Easing Curves
│
└── Component System
    ├── Buttons (5 variantes)
    ├── Badges (6 variantes)
    ├── Cards (4 variantes)
    ├── Inputs (3 variantes)
    └── Modals, Tables, etc.
```

---

## 🎨 Système de couleurs détaillé

### Primary (Cyan)

```javascript
cyan: {
  50:  '#f0f9ff', // Background light
  100: '#e0f2fe', // Hover background
  200: '#bae6fd', // Disabled text
  300: '#7dd3fc', // Hover border
  400: '#38bdf8', // Light accent
  500: '#06b6d4', // PRIMARY MAIN
  600: '#0891b2', // PRIMARY DARK
  700: '#0e7490', // Active state
  800: '#155e75', // Very dark
  900: '#164e63', // Darkest
}
```

**Usage:**
- Buttons: 500→600 gradient
- Links: 500 normal, 600 hover
- Borders: 300 light, 500 focus
- Backgrounds: 50 light, 100 hover

### Accent (Violet)

```javascript
accent: {
  50:  '#faf5ff', // Background light
  100: '#f3e8ff', // Hover background
  200: '#e9d5ff', // Disabled text
  300: '#d8b4fe', // Hover border
  400: '#c084fc', // Light accent
  500: '#a855f7', // ACCENT MAIN
  600: '#9333ea', // ACCENT DARK
  700: '#7e22ce', // Active state
  800: '#6b21a8', // Very dark
  900: '#581c87', // Darkest
}
```

**Usage:**
- Highlights: 500 main, 600 dark
- Badges: 100 background, 700 text
- Accents: 500 color, hover 600
- Links secondary: 500 normal, 700 hover

### Status Colors

#### Success (Emerald)

```javascript
success: {
  50:  '#f0fdf4',
  100: '#dcfce7',
  300: '#86efac',
  500: '#22c55e', // MAIN
  600: '#16a34a',
  700: '#15803d',
}
```

**Usage:**
- Success states: Check marks
- Green badges: `success-100 / success-700`
- Progress bars: `success-500`
- Confirmations: `success-600`

#### Warning (Amber)

```javascript
warning: {
  50:  '#fffbeb',
  100: '#fef3c7',
  300: '#fcd34d',
  500: '#f59e0b', // MAIN
  600: '#d97706',
  700: '#b45309',
}
```

**Usage:**
- Warning states: Alerts
- Yellow badges: `warning-100 / warning-700`
- Pending items: `warning-500`
- Cautions: `warning-600`

#### Error (Rose)

```javascript
error: {
  50:  '#fff7ed',
  100: '#ffe4e6',
  300: '#fda29b',
  500: '#f43f5e', // MAIN
  600: '#e11d48',
  700: '#be183d',
}
```

**Usage:**
- Error states: X marks
- Red badges: `error-100 / error-700`
- Errors: `error-500`
- Danger actions: `error-600`

### Neutral (Slate)

```javascript
slate: {
  50:  '#f8fafc', // Lightest backgrounds
  100: '#f1f5f9', // Light backgrounds
  200: '#e2e8f0', // Borders light
  300: '#cbd5e1', // Placeholder text
  400: '#94a3b8', // Muted text
  500: '#64748b', // Secondary text
  600: '#475569', // Primary text
  700: '#334155', // Dark text
  800: '#1e293b', // Very dark
  900: '#0f172a', // Darkest
}
```

**Usage:**
- Text primary: 900 light, 100 dark
- Text secondary: 600 light, 400 dark
- Borders: 200 light, 700 dark
- Backgrounds: 50/100 light, 800/900 dark

---

## 🔤 Système typographique

### Font Stack

```css
/* Sans-serif (default) */
font-sans: 'Inter', 'Segoe UI', system-ui;

/* Serif (headings, quotes) */
font-serif: 'Lora', Georgia;

/* Monospace (code, terminal) */
font-mono: 'Fira Code', monospace;
```

### Font Sizes

| Size | px | Line-height | Usage |
|------|----|-----------|----|
| xs | 12 | 16px | Labels, captions |
| sm | 14 | 20px | Small text, secondary |
| base | 16 | 24px | Body text (default) |
| lg | 18 | 28px | Larger text |
| xl | 20 | 28px | Subheadings |
| 2xl | 24 | 32px | Section headings |
| 3xl | 30 | 36px | Page headings |
| 4xl | 36 | 40px | Major headings |
| 5xl | 48 | 48px | Hero headings |

### Font Weights

| Weight | Usage |
|--------|-------|
| 400 | Body text, normal |
| 500 | Emphasized text, labels |
| 600 | Headings, buttons |
| 700 | Bold headings, highlights |

---

## 📏 Système d'espacement

### Spacing Scale

```javascript
const spacing = {
  0: '0px',      // 0
  1: '4px',      // Micro
  2: '8px',      // Extra small
  3: '12px',     // Small
  4: '16px',     // Base
  5: '20px',     // Medium
  6: '24px',     // Large
  8: '32px',     // Extra large
  10: '40px',    // Huge
  12: '48px',    // Very huge
}
```

### Spacing Guidelines

```javascript
// Micro interactions
padding: 4px  // p-1
gap: 4px      // gap-1

// Small components
padding: 8-12px  // p-2, p-3
gap: 8-12px      // gap-2, gap-3

// Standard (most used)
padding: 16px     // p-4
gap: 16px         // gap-4
margin: 16px      // m-4

// Large sections
padding: 24-32px  // p-6, p-8
gap: 24px         // gap-6

// Huge elements
padding: 40-48px  // p-10, p-12
```

---

## 🎭 Système de shadows

### Elevation Scale

```css
/* Subtle */
--shadow-xs: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-sm: 0 2px 4px 0 rgba(0, 0, 0, 0.08);

/* Normal */
--shadow-base: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
--shadow-md: 0 8px 16px 0 rgba(0, 0, 0, 0.12);

/* Elevated */
--shadow-lg: 0 12px 24px 0 rgba(0, 0, 0, 0.15);
--shadow-xl: 0 16px 32px 0 rgba(0, 0, 0, 0.18);

/* Very elevated */
--shadow-2xl: 0 20px 40px 0 rgba(0, 0, 0, 0.2);
```

### Glow Effects

```css
/* Cyan glow (primary) */
--glow-cyan: 0 0 16px rgba(6, 182, 212, 0.3);
box-shadow: var(--glow-cyan);

/* Violet glow (accent) */
--glow-violet: 0 0 16px rgba(168, 85, 247, 0.3);
box-shadow: var(--glow-violet);

/* Blue glow (secondary) */
--glow-blue: 0 0 16px rgba(59, 130, 246, 0.3);
box-shadow: var(--glow-blue);
```

### Shadow verwendung

```javascript
const shadows = {
  // Subtle (least elevation)
  'hover:shadow-xs': 'Hover for small elements',
  
  // Normal (default)
  'shadow-base': 'Default for cards',
  'hover:shadow-md': 'Hover for cards',
  
  // Elevated (more important)
  'shadow-lg': 'Important elements',
  'hover:shadow-xl': 'Hover for important',
  
  // Very elevated (most important)
  'shadow-2xl': 'Modals, popovers',
  
  // Glow (special emphasis)
  'shadow-glow-cyan': 'Primary highlights',
  'shadow-glow-violet': 'Accent highlights',
}
```

---

## ⏱️ Système d'animations

### Durées standard

```javascript
// Micro interactions
duration: '75ms'  // Very fast feedback

// Normal interactions
duration: '150ms' // Fast but smooth
duration: '200ms' // Quick transitions

// Standard transitions
duration: '300ms' // Default (most used)
duration: '350ms' // Slightly slower

// Complex animations
duration: '500ms' // Slower animations
duration: '700ms' // Very slow transitions
```

### Timing Functions

```javascript
// Linear (constant speed)
'linear': 'linear'

// Ease-out (fast start, slow end) - Default
'ease-out': 'cubic-bezier(0.4, 0, 0.2, 1)'

// Ease-in (slow start, fast end)
'ease-in': 'cubic-bezier(0.4, 0, 1, 1)'

// Ease-in-out (slow start and end)
'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)'

// Smooth (custom for UI)
'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)'

// Bounce (playful)
'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
```

### Propriétés animées

```javascript
const animations = {
  // Enters
  'fade-in': 'fadeIn 0.3s ease-out',
  'slide-up': 'slideUp 0.3s ease-out',
  'slide-down': 'slideDown 0.3s ease-out',
  'scale-in': 'scaleIn 0.3s ease-out',
  
  // Emphasis
  'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  'bounce-soft': 'bounceSoft 1s infinite',
  
  // Standard
  'spin-slow': 'spin 2s linear infinite',
}
```

---

## 🧩 Système de composants

### Button Variants

```javascript
const buttonVariants = {
  // Modern cyan gradient
  primary: `
    bg-gradient-to-r from-primary-500 to-primary-600
    hover:from-primary-600 hover:to-primary-700
    text-white shadow-md hover:shadow-lg
    hover:shadow-primary/30
    transform hover:scale-[1.02]
  `,
  
  // Slate secondary
  secondary: `
    bg-slate-100 dark:bg-slate-800
    text-slate-900 dark:text-white
    border border-slate-200 dark:border-slate-700
    hover:bg-slate-200 dark:hover:bg-slate-700
  `,
  
  // Outline with glassmorphism
  outline: `
    bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm
    text-primary-600 dark:text-primary-400
    border border-primary-300/50 dark:border-primary-500/50
    hover:bg-primary-50 dark:hover:bg-primary-900/20
  `,
  
  // Ghost (minimal)
  ghost: `
    bg-transparent
    text-slate-700 dark:text-slate-300
    hover:bg-slate-100/50 dark:hover:bg-slate-800/50
  `,
  
  // Danger (rose)
  danger: `
    bg-gradient-to-r from-error-500 to-error-600
    hover:from-error-600 hover:to-error-700
    text-white shadow-md hover:shadow-lg
    hover:shadow-error/30
  `,
}
```

### Badge Variants

```javascript
const badgeVariants = {
  success: {
    bg: 'bg-emerald-100 dark:bg-emerald-900/30',
    text: 'text-emerald-700 dark:text-emerald-300',
    border: 'border-emerald-300/50 dark:border-emerald-700/50',
  },
  warning: {
    bg: 'bg-amber-100 dark:bg-amber-900/30',
    text: 'text-amber-700 dark:text-amber-300',
    border: 'border-amber-300/50 dark:border-amber-700/50',
  },
  error: {
    bg: 'bg-rose-100 dark:bg-rose-900/30',
    text: 'text-rose-700 dark:text-rose-300',
    border: 'border-rose-300/50 dark:border-rose-700/50',
  },
  info: {
    bg: 'bg-sky-100 dark:bg-sky-900/30',
    text: 'text-sky-700 dark:text-sky-300',
    border: 'border-sky-300/50 dark:border-sky-700/50',
  },
  primary: {
    bg: 'bg-primary-100 dark:bg-primary-900/30',
    text: 'text-primary-700 dark:text-primary-300',
    border: 'border-primary-300/50 dark:border-primary-700/50',
  },
}
```

### Card Variants

```javascript
const cardVariants = {
  // Default: Subtle with border
  default: `
    bg-white dark:bg-slate-800
    border border-slate-200 dark:border-slate-700
    shadow-sm hover:shadow-base
  `,
  
  // Glass: Glassmorphism effect
  glass: `
    bg-white/80 dark:bg-slate-800/80
    backdrop-blur-md
    border border-white/20 dark:border-white/10
    shadow-lg hover:shadow-xl
  `,
  
  // Elevated: Strong shadow
  elevated: `
    bg-white dark:bg-slate-800
    border border-slate-200 dark:border-slate-700
    shadow-md hover:shadow-lg
  `,
  
  // Flat: No shadow
  flat: `
    bg-slate-50 dark:bg-slate-900
    border border-slate-200 dark:border-slate-700
    hover:bg-slate-100 dark:hover:bg-slate-800
  `,
}
```

---

## 🌙 Dark Mode

### Dark Mode Colors

```css
.dark {
  /* Backgrounds */
  @apply bg-slate-900; /* Very dark background */
  
  /* Text */
  @apply text-slate-100; /* Very light text */
  
  /* Borders */
  @apply border-slate-700; /* Dark borders */
  
  /* Components */
  @apply bg-slate-800/80; /* Dark card backgrounds */
}
```

### Dark Mode Patterns

```javascript
const darkPatterns = {
  // Light mode first (natural reading)
  'text-slate-700 dark:text-slate-300',
  
  // Background gradients
  'bg-white dark:bg-slate-800',
  
  // Borders
  'border-slate-200 dark:border-slate-700',
  
  // Hover states
  'hover:bg-slate-100 dark:hover:bg-slate-700',
  
  // Complex (3 states)
  'bg-slate-50 dark:bg-slate-900 group-hover:bg-slate-100 dark:group-hover:bg-slate-800',
}
```

---

## 📋 Recommandations d'utilisation

### ✅ DO

```jsx
// Use the design tokens consistently
<button className="bg-primary-500 hover:bg-primary-600">

// Combine styles with purpose
<div className="rounded-2xl shadow-lg bg-white/80 backdrop-blur-md">

// Use animations judiciously
<div className="transition-all duration-300 hover:scale-[1.02]">

// Follow spacing scale
<div className="p-6 gap-4 mb-8">
```

### ❌ DON'T

```jsx
// Don't mix old and new colors
<button className="bg-amber-500"> // OLD - WRONG

// Don't use arbitrary colors
<div className="bg-[#123456]"> // Use design tokens instead

// Don't make animations too fast
<div className="transition-all duration-75"> // Too fast

// Don't use inconsistent spacing
<div className="p-3 m-5 gap-7"> // Inconsistent scale
```

---

## 🎯 Checklist pour new components

Avant de créer un nouveau composant:

- [ ] Utiliser les couleurs du design system
- [ ] Utiliser l'espacement du spacing scale
- [ ] Appliquer les shadows appropriées
- [ ] Ajouter les transitions 300ms
- [ ] Tester en light ET dark mode
- [ ] Vérifier responsive design
- [ ] Ajouter le focus ring pour a11y
- [ ] Tester avec keyboard navigation

---

**Status**: ✅ Design System complet  
**Version**: 1.0  
**Last Updated**: Avril 2026  
**Maintainer**: Design Team  
