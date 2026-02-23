# Quick Phone Testing Guide

## Problem
Getting error: "Cannot read properties of undefined (reading 'getUserMedia')"

## Reason
Camera and Microphone require HTTPS on mobile devices!

---

## Solution: Use ngrok (2 Minutes Setup)

### Step 1: Download ngrok
Go to: https://ngrok.com/download
- Windows: Download ZIP, extract, done!
- No installation needed

### Step 2: Run Your App
```bash
npm run build
npm run preview
```

### Step 3: Run ngrok
Open another terminal/command prompt:
```bash
ngrok http 4173
```

### Step 4: Copy HTTPS URL
ngrok will show something like:
```
Forwarding  https://abc123.ngrok-free.app -> http://localhost:4173
```

### Step 5: Open on Phone
Open the HTTPS URL on your phone:
```
https://abc123.ngrok-free.app
```

### Step 6: Test Features
- ✅ Camera works!
- ✅ Microphone works!
- ✅ GPS works!
- ✅ No errors!

---

## Why This Works

| Method | URL | Camera/Mic on Phone |
|--------|-----|---------------------|
| Local IP | http://192.168.x.x:4173 | ❌ Blocked |
| ngrok | https://abc123.ngrok-free.app | ✅ Works |
| Localhost | http://localhost:4173 | ✅ Works (desktop only) |

**Mobile browsers block camera/mic on HTTP for security!**

---

## Alternative: Deploy to Vercel/Netlify

### Quick Deploy:
```bash
npm run build
```

Upload `dist` folder to:
- Vercel: https://vercel.com
- Netlify: https://netlify.com
- GitHub Pages (with HTTPS)

All provide automatic HTTPS!

---

## For Development

**Best Practice:**
1. Use `localhost` for desktop testing (HTTP works)
2. Use `ngrok` for phone testing (HTTPS required)
3. Deploy to Vercel/Netlify for production (HTTPS automatic)

---

## Common Errors Fixed

### Error 1:
```
Cannot read properties of undefined (reading 'getUserMedia')
```
**Fix:** Use HTTPS (ngrok)

### Error 2:
```
NotAllowedError: Permission denied
```
**Fix:** Grant permission when browser asks

### Error 3:
```
NotFoundError: Requested device not found
```
**Fix:** Check if camera/mic is available and not used by another app

---

## Summary

**For Phone Testing:**
1. Run: `npm run preview`
2. Run: `ngrok http 4173`
3. Open ngrok HTTPS URL on phone
4. Everything works! ✅

**No need to:**
- Install SSL certificates
- Configure HTTPS locally
- Deal with security warnings

ngrok handles everything!
