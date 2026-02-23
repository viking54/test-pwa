# PWA Feature Demo - Proof of Concept

## Purpose
This app proves that PWAs can access camera, microphone, GPS, and audio - with persistent permissions after installation, just like Microsoft Teams, Zoom, and Google Meet.

## Quick Start

```bash
cd pwa-demo
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

### Install PWA on Desktop/Laptop
1. Open in Chrome/Edge
2. Look for install icon (⊕) in address bar
3. Click "Install"
4. App opens as standalone application!

See **[INSTALL-GUIDE.md](./INSTALL-GUIDE.md)** for detailed installation instructions.

## Test on Mobile

### Android Testing (Easy - HTTP Works!)
```bash
npm run build
npm run preview -- --host
```
Find your IP: `ipconfig`
Open on Android: `http://YOUR_IP:4173`
✅ Camera/Mic/GPS all work!

### iPhone Testing (Needs HTTPS)
**Quick Deploy to Vercel:**
```bash
npm install -g vercel
npm run build
vercel --prod
```
Get permanent HTTPS URL - works on iPhone!

**Alternative:** Use Cloudflare Tunnel or ngrok (see guides below)

See **[ANDROID-VS-IPHONE.md](./ANDROID-VS-IPHONE.md)** for detailed explanation.

See **[PHONE-INSTALL-GUIDE.md](./PHONE-INSTALL-GUIDE.md)** for detailed mobile installation steps.

## Features Tested

### ✅ Camera
- Live video preview
- Photo capture
- Front/back camera switching
- Permission persists after PWA install

### ✅ Microphone
- Audio input access
- Permission persists after PWA install

### ✅ GPS Location
- One-time location fetch
- Continuous tracking (foreground)
- High accuracy mode
- Permission persists after PWA install

### ✅ Audio Playback
- No special permissions needed
- Works offline (if cached)

## Key Findings

### What the Previous Developer Got Wrong ❌

The EVV feasibility report claimed:
> "Permissions may be requested repeatedly across sessions"

**This is FALSE for installed PWAs!**

### The Truth ✅

1. **Browser (not installed):** Permissions asked each session
2. **PWA (installed):** Permissions persist, just like native apps

This is exactly how Teams, Zoom, and Google Meet work!

## Documentation

- **[TESTING-GUIDE.md](./TESTING-GUIDE.md)** - Complete testing checklist
- **[CAPABILITIES-COMPARISON.md](./CAPABILITIES-COMPARISON.md)** - PWA vs Web App vs Native

## For EVV Application

### EVV Requirements vs PWA Capabilities

| EVV Need | PWA Support | Notes |
|----------|-------------|-------|
| Camera for photos | ✅ Yes | Foreground, user-initiated |
| GPS during visit | ✅ Yes | Foreground tracking works |
| Offline data entry | ✅ Yes | Service worker + storage |
| Sync when online | ✅ Yes | Background sync API |
| No repeated prompts | ✅ Yes | After PWA installation |

### What EVV Doesn't Need (So It's Not a Problem)

- ❌ Background GPS when app closed
- ❌ Silent camera capture
- ❌ Background audio recording

## Conclusion

PWAs are **perfectly suitable** for EVV applications because:

1. All required features work reliably
2. Permissions persist after installation
3. Works cross-platform (Android, iOS, Desktop)
4. No app store approval needed
5. Instant updates
6. Proven by Teams, Zoom, Meet

The previous feasibility report was overly cautious and missed the key fact: **installed PWAs = persistent permissions**.
