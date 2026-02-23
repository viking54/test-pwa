# Phone Installation Guide

## Important: "Add to Home Screen" = "Install PWA"

**Both are the SAME thing!**
- On laptop: Shows "Install" button
- On Android: Shows "Install app" or "Add to Home screen"
- On iOS: Shows "Add to Home Screen"

**All create a standalone app that:**
- Opens in its own window (NOT in browser)
- Has persistent permissions
- Works offline
- Looks like native app

---

## Android (Chrome Browser)

### Step 1: Open in Chrome
- Open Chrome browser on Android
- Go to your app URL (e.g., `http://192.168.x.x:4173`)

### Step 2: Install PWA (Standalone App)
**Method 1 - "Install app" (Recommended):**
1. Tap **3-dot menu (⋮)** in top-right corner
2. Look for **"Install app"** option
3. Tap it
4. Popup appears: "Install PWA Demo?"
5. Tap **"Install"**
6. App icon appears on home screen!

**Method 2 - "Add to Home screen":**
1. Tap **3-dot menu (⋮)**
2. Tap **"Add to Home screen"**
3. This also creates standalone app!

**Both methods create the same standalone PWA!**

### Step 3: Verify It's Installed Correctly
Open the app from home screen:
- ✅ Opens in **separate window** (not Chrome browser)
- ✅ No address bar visible
- ✅ No browser UI
- ✅ Looks like native app
- ✅ Permissions persist

**If it opens in Chrome browser = Not installed correctly!**

---

## iOS (Safari Browser)

### Step 1: Open in Safari
- Open **Safari** browser (NOT Chrome!)
- Go to your app URL

### Step 2: Install PWA (Standalone App)
1. Tap **Share button** (□↑) at bottom of screen
2. Scroll down in the menu
3. Tap **"Add to Home Screen"**
4. Edit name if needed
5. Tap **"Add"** in top-right
6. App icon appears on home screen!

### Step 3: Verify It's Installed Correctly
Open the app from home screen:
- ✅ Opens **fullscreen** (not in Safari)
- ✅ No Safari UI visible
- ✅ Looks like native app
- ✅ Permissions persist

**If it opens in Safari = Not installed correctly!**

---

## The Difference Explained

### Regular Bookmark (Wrong):
- Opens in browser
- Shows address bar
- Shows browser tabs
- Permissions asked every time ❌

### Installed PWA (Correct):
- Opens in standalone window
- No browser UI
- No address bar
- Permissions persist ✅
- **This is what you want!**

---

## How to Get Network URL

### On Windows (Your Laptop):
```bash
ipconfig
```
Look for "IPv4 Address" (e.g., 192.168.1.100)

### Then on Phone:
Open browser and go to: `http://YOUR_IP:4173`
Example: `http://192.168.1.100:4173`

**Important:** Phone and laptop must be on same WiFi!

---

## Troubleshooting

### "Install app" option not showing on Android?
- Make sure you're using Chrome (not other browsers)
- Check if already installed (look on home screen)
- Try refreshing the page
- Make sure manifest is loading (check DevTools)

### App opens in browser instead of standalone?
- You created a bookmark, not installed PWA
- Uninstall and try again
- Look for "Install app" option (not just "Add to Home screen")

### Can't access from phone?
- Check both devices on same WiFi
- Try disabling firewall temporarily
- Use `npm run preview -- --host` to expose server
- Check IP address is correct

### iOS not showing "Add to Home Screen"?
- Must use Safari browser (not Chrome)
- Make sure you're tapping Share button (□↑)
- Scroll down in the share menu

---

## After Installation - Test This!

### 1. Check It's Standalone:
- Open app from home screen
- Should NOT see browser UI
- Should look like native app

### 2. Test Permissions:
1. Grant camera/mic/GPS permissions
2. Close app completely
3. Open again
4. **Permissions should be remembered!** ✅

### 3. Test Background Behavior:
1. Start GPS tracking
2. Press Home button (minimize app)
3. **GPS tracking STOPS** ❌ (This is normal!)
4. Open app again
5. **GPS tracking RESUMES** ✅

---

## Key Points

✅ **"Add to Home Screen" on Android/iOS = "Install" on Desktop**
- All create standalone PWA
- All have persistent permissions
- All work offline

❌ **Common Mistake:**
- Thinking "Add to Home Screen" is just a bookmark
- It's NOT! It's a full PWA installation!

**For EVV:** Once installed, PWA works exactly like native app for foreground features!

