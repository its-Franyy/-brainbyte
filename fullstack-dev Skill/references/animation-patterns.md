# Animation Patterns

Load only when task requires animations or micro-interactions.

---

## Micro-interactions (CSS only)

### Button press
```css
button:active { transform: scale(0.97); transition: transform 100ms ease-out; }
```

### Card lift on hover
```css
.card { transition: transform 200ms ease-out, box-shadow 200ms ease-out; }
.card:hover { transform: translateY(-2px); box-shadow: 0 12px 24px -4px rgba(0,0,0,0.15); }
```

### Fade-in on mount (CSS)
```css
@keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
.fade-in { animation: fadeIn 300ms ease-out forwards; }
```

### Staggered list items
```css
.item:nth-child(1) { animation-delay: 0ms; }
.item:nth-child(2) { animation-delay: 60ms; }
.item:nth-child(3) { animation-delay: 120ms; }
/* etc — cap at 6 items for stagger */
```

---

## Scroll Reveal (Intersection Observer)

```javascript
const observer = new IntersectionObserver(
  (entries) => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
  { threshold: 0.1 }
);
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
```
```css
.reveal { opacity: 0; transform: translateY(24px); transition: opacity 500ms ease-out, transform 500ms ease-out; }
.reveal.visible { opacity: 1; transform: none; }
```

---

## Loading States

### Skeleton shimmer
```css
@keyframes shimmer { from { background-position: -200% 0; } to { background-position: 200% 0; } }
.skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 4px;
}
```

### Spinner (minimal)
```css
@keyframes spin { to { transform: rotate(360deg); } }
.spinner { width: 16px; height: 16px; border: 2px solid currentColor; border-top-color: transparent; border-radius: 50%; animation: spin 600ms linear infinite; }
```

---

## Page Transitions (React)

```javascript
// Wrap route content in:
<div style={{ animation: 'fadeIn 250ms ease-out' }}>
```

---

## Rules for Animation Use

- Max 1 entrance animation per viewport
- Never animate layout properties (width, height) — use transform/opacity only
- Respect `prefers-reduced-motion`:
```css
@media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: 0.01ms !important; } }
```
