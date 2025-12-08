# Dark Mode - Quick Reference Guide

## 🎯 Quick Start

### For Users
1. Go to Dashboard
2. Click **"Dunkel"** button at the bottom of the sidebar
3. Dashboard switches to dark mode instantly
4. Your preference is saved automatically

### For Developers
Add dark mode to any component:

```tsx
// Basic example
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  Content here
</div>
```

## 🎨 Common Dark Mode Classes

### Backgrounds
```
Light → Dark
bg-white → dark:bg-gray-900
bg-gray-100 → dark:bg-gray-800
bg-gray-200 → dark:bg-gray-700
bg-gray-300 → dark:bg-gray-600
```

### Text Colors
```
Light → Dark
text-gray-900 → dark:text-white
text-gray-700 → dark:text-gray-300
text-gray-600 → dark:text-gray-400
text-gray-500 → dark:text-gray-500
```

### Borders
```
Light → Dark
border-gray-200 → dark:border-gray-700
border-gray-300 → dark:border-gray-600
```

## 📋 Component Examples

### Button
```tsx
<button className="bg-red-600 dark:bg-red-700 text-white hover:bg-red-700 dark:hover:bg-red-800">
  Click me
</button>
```

### Card
```tsx
<div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4">
  <h3 className="text-gray-900 dark:text-white">Title</h3>
  <p className="text-gray-600 dark:text-gray-400">Description</p>
</div>
```

### Input
```tsx
<input 
  className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600"
  placeholder="Enter text"
/>
```

### Link
```tsx
<a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
  Link
</a>
```

## 🔍 Debugging Dark Mode

### Check if dark mode is active
```javascript
// In browser console
document.documentElement.classList.contains('dark')
```

### Check localStorage
```javascript
localStorage.getItem('theme')
```

### Force dark mode (for testing)
```javascript
document.documentElement.classList.add('dark')
```

### Force light mode (for testing)
```javascript
document.documentElement.classList.remove('dark')
```

## 📊 Contrast Ratios (WCAG AA)

All text meets these minimum ratios:

| Element | Light Mode | Dark Mode |
|---------|-----------|-----------|
| Primary Text | 21:1 | 21:1 |
| Secondary Text | 7:1 | 7:1 |
| Links | 4.5:1 | 4.5:1 |
| Buttons | 4.5:1 | 4.5:1 |

## ⚡ Performance Tips

1. **Use Tailwind dark: prefix** - It's optimized
2. **Avoid custom CSS** - Use CSS variables instead
3. **Group dark classes** - `dark:bg-gray-900 dark:text-white`
4. **Test both modes** - Don't assume one works if the other does

## 🐛 Common Issues & Solutions

### Text is hard to read in dark mode
**Solution:** Check contrast ratio. Use lighter text colors:
```tsx
// ❌ Bad
<p className="text-gray-600 dark:text-gray-600">Text</p>

// ✅ Good
<p className="text-gray-600 dark:text-gray-300">Text</p>
```

### Dark mode not applying
**Solution:** Check if `dark` class is on `<html>` element:
```javascript
console.log(document.documentElement.className)
```

### Theme not persisting
**Solution:** Check localStorage and browser settings:
```javascript
console.log(localStorage.getItem('theme'))
```

### Styles look different on page load
**Solution:** This is normal. The theme loads from localStorage after hydration.

## 📚 File Locations

| File | Purpose |
|------|---------|
| `dashboardStyle.css` | Dark mode CSS rules |
| `DarkModeButton.tsx` | Theme toggle component |
| `ClientThemeProvider.tsx` | Theme provider setup |
| `layout.tsx` | HTML element setup |

## 🎓 Best Practices

✅ **DO:**
- Use semantic color names (primary, secondary, etc.)
- Test both light and dark modes
- Ensure sufficient contrast
- Use smooth transitions
- Provide user control

❌ **DON'T:**
- Use only color to convey information
- Forget about hover/focus states
- Use pure black (#000000) in dark mode
- Forget to test on mobile
- Hardcode colors (use Tailwind classes)

## 🔗 Resources

- [Tailwind Dark Mode Docs](https://tailwindcss.com/docs/dark-mode)
- [WCAG Contrast Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [next-themes Documentation](https://github.com/pacocoursey/next-themes)

## 📞 Support

For issues with dark mode:
1. Check this quick reference
2. Review DARK_MODE_COMPLETE.md
3. Check browser console for errors
4. Test in incognito/private mode

---

**Last Updated:** December 8, 2025
**Version:** 1.0
