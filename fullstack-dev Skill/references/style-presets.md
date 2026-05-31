# Style Presets

Load this file only when you need exact color values or typography scales beyond what the main SKILL.md provides.

---

## `saas` — Modern SaaS (Linear, Notion, Vercel)

```
BG:       #0A0A0A (dark) | #FAFAFA (light)
SURFACE:  #141414 | #FFFFFF
BORDER:   #262626 | #E5E5E5
TEXT:     #EDEDED / #A3A3A3 / #525252
ACCENT:   #7C3AED (violet) or context-matched
FONT:     Inter, system-ui
HEADING:  28-48px / weight 600-700 / tracking -0.02em
BODY:     14px / weight 400 / leading 1.6
LABEL:    11-12px / weight 500 / uppercase / tracking 0.08em
```

Key patterns:
- Borders over shadows for separation
- Subtle gradients on CTAs (`from-violet-600 to-violet-700`)
- Command palette / keyboard shortcut hints
- Density: comfortable but not loose

---

## `brand` — Marketing / Landing (Stripe, Tailwind CSS site)

```
BG:       White or off-white (#FEFEFE / #F8F7F4)
SURFACE:  White cards with strong shadows
BORDER:   Barely visible (#F0F0F0)
TEXT:     #0F0F0F / #6B7280
ACCENT:   Context-defined — bold, saturated
FONT:     Cal Sans / Plus Jakarta Sans / Inter
HEADING:  40-80px / weight 700-800 / tracking -0.03em
BODY:     16-18px / weight 400 / leading 1.7
```

Key patterns:
- Large gradient meshes or abstract SVG backgrounds
- Bold typographic hierarchy — big number stats
- Testimonials with real names and avatars
- Gradient text for key phrases (`bg-clip-text`)

---

## `devtool` — Dev Tool / Terminal (Raycast, Arc, Warp)

```
BG:       #09090B
SURFACE:  #18181B / #27272A
BORDER:   #3F3F46
TEXT:     #F4F4F5 / #A1A1AA / #71717A
ACCENT:   #22D3EE (cyan) or #A3E635 (lime)
FONT:     JetBrains Mono / Geist Mono (code), Inter (UI)
HEADING:  20-32px / weight 600
BODY:     13-14px
CODE:     13px mono / bg #27272A / border #3F3F46
```

Key patterns:
- Monospace elements everywhere — even for labels
- Terminal-style input with `$` or `>` prefix
- Keyboard shortcuts shown inline (⌘K, Ctrl+P)
- Glow effects on active elements (`shadow: 0 0 20px rgba(34,211,238,0.3)`)

---

## `dashboard` — Analytics / Data (Amplitude, Mixpanel)

```
BG:       #F9FAFB (light) | #111827 (dark)
SURFACE:  #FFFFFF | #1F2937
BORDER:   #E5E7EB | #374151
TEXT:     #111827 / #6B7280 | #F9FAFB / #9CA3AF
ACCENT:   #6366F1 (indigo) with semantic colors for data
FONT:     Inter
HEADING:  20-24px / weight 600
METRIC:   32-48px / weight 700 / tabular-nums
```

Key patterns:
- KPI cards: big number, delta badge (green/red), sparkline
- Chart colors: indigo → violet → cyan → emerald (sequential)
- Table rows alternate subtle bg (`#F9FAFB`)
- Time-range selectors (7d / 30d / 90d) as pill tabs

---

## `consumer` — Mobile / Consumer App (Instagram, Airbnb)

```
BG:       #FFFFFF
SURFACE:  #F7F7F7
BORDER:   none (shadow-based separation)
TEXT:     #111111 / #717171
ACCENT:   Context-defined — warm, approachable
FONT:     SF Pro / Inter
HEADING:  24-32px / weight 700
BODY:     15-16px
TOUCH:    min 44x44px tap targets always
```

Key patterns:
- Bottom navigation bar (mobile)
- Card-based content with images
- Generous whitespace, friendly tone
- Avatar-heavy UI, social proof elements
