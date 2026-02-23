# PWA Installation Guide

## Desktop/Laptop Installation (Windows/Mac/Linux)

### Chrome/Edge (Windows/Mac/Linux)
1. Run the app: `npm run dev` or `npm run build && npm run preview`
2. Open in Chrome/Edge browser
3. Look for **install icon** in address bar (⊕ or computer icon)
4. Click the install icon
5. Click "Install" in popup
6. PWA opens as standalone app!

**Alternative:**
- Click 3-dot menu (⋮) → "Install PWA Feature Demo"

### How to Verify Installation:
- App opens in its own window (no browser tabs)
- Has its own icon in taskbar/dock
- Can be launched from Start Menu/Applications
- Permissions persist across sessions!

---

## Mobile Installation

### Android (Chrome)
1. Open app in Chrome browser
2. Tap 3-dot menu (⋮)
3. Tap "Install app" or "Add to Home Screen"
4. Confirm installation
5. App icon appears on home screen
6. Open from home screen - works like native app!

### iOS (Safari)
1. Open app in Safari browser
2. Tap Share button (□↑)
3. Scroll and tap "Add to Home Screen"
4. Tap "Add"
5. App icon appears on home screen
6. Open from home screen

---

## Testing Installation Success

### Desktop
✅ App has its own window (not browser tab)
✅ App icon in taskbar/Start Menu
✅ Can launch without opening browser first
✅ Permissions persist (no repeated prompts)

### Mobile
✅ App icon on home screen
✅ Opens fullscreen (no browser UI)
✅ Splash screen on launch
✅ Permissions persist (no repeated prompts)

---

## Uninstall PWA

### Desktop
- **Chrome/Edge:** Click 3-dot menu in PWA window → "Uninstall"
- **Or:** Right-click app icon → Uninstall

### Mobile
- **Android:** Long-press app icon → Uninstall
- **iOS:** Long-press app icon → Remove App

---

## Troubleshooting

### "Install" button not showing?
- Make sure you're using HTTPS or localhost
- Check if PWA is already installed
- Try in Chrome/Edge (best PWA support)
- Clear browser cache and reload

### Permissions not persisting?
- Make sure you installed the PWA (not just bookmarked)
- Check if you're opening the installed app (not browser)
- Verify manifest.json is loading correctly

---

## Key Point

**Once installed, PWA behaves exactly like a native app:**
- Permissions persist ✅
- Works offline ✅
- Fast loading ✅
- No browser UI ✅

This is how Teams, Zoom, and Google Meet work as PWAs!
