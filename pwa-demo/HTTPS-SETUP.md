# HTTPS Setup for Phone Testing

## Why HTTPS is Required

**Camera, Microphone, and GPS require HTTPS on mobile devices!**

- ✅ Localhost (HTTP) - Works on desktop
- ❌ Local IP (HTTP) - Does NOT work on phone
- ✅ HTTPS - Works everywhere

---

## Quick Setup (Recommended)

### Option 1: Use ngrok (Easiest - No Installation Needed)

**Step 1:** Run your app
```bash
npm run build
npm run preview
```

**Step 2:** In another terminal, run ngrok
```bash
ngrok http 4173
```

**Step 3:** Open the ngrok HTTPS URL on your phone
```
https://abc123.ngrok-free.app
```

✅ Camera/Mic will work!
✅ No security warnings!
✅ Works on any phone!

---

### Option 2: Local HTTPS (Requires Package)

**Step 1:** Install SSL plugin
```bash
npm install -D @vitejs/plugin-basic-ssl
```

**Step 2:** Update vite.config.js
Uncomment these lines:
```javascript
// import basicSsl from '@vitejs/plugin-basic-ssl'
// basicSsl(),
// https: true (in server and preview sections)
```

**Step 3:** Run with HTTPS
```bash
npm run build
npm run preview
```

**Step 4:** Access from phone
```
https://YOUR_IP:4173
```

⚠️ Accept security warning (self-signed certificate)

---

## Alternative: Use ngrok (Easiest)

### Step 1: Install ngrok
Download from: https://ngrok.com/download

### Step 2: Run Your App
```bash
npm run preview
```

### Step 3: Create HTTPS Tunnel
```bash
ngrok http 4173
```

### Step 4: Use ngrok URL
ngrok will give you a URL like:
```
https://abc123.ngrok.io
```

Open this URL on your phone - it has HTTPS!

---

## Alternative: Use Cloudflare Tunnel

### Step 1: Install cloudflared
Download from: https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install-and-setup/installation/

### Step 2: Run Your App
```bash
npm run preview
```

### Step 3: Create Tunnel
```bash
cloudflared tunnel --url http://localhost:4173
```

### Step 4: Use Cloudflare URL
Opens a URL like:
```
https://xyz.trycloudflare.com
```

Open this on your phone!

---

## Testing Without HTTPS (Limited)

If you can't setup HTTPS, you can still test:

✅ **What Works on HTTP:**
- GPS/Location (works on HTTP)
- Audio playback
- Offline functionality
- UI/UX

❌ **What Needs HTTPS:**
- Camera access
- Microphone access

---

## Recommended Approach

**For Quick Testing:**
Use ngrok or Cloudflare tunnel (no setup needed)

**For Development:**
Use Vite's built-in HTTPS with basicSsl plugin

**For Production:**
Deploy to Vercel/Netlify (automatic HTTPS)

---

## Updated Commands

### Development with HTTPS:
```bash
npm run dev -- --host --https
```

### Preview with HTTPS:
```bash
npm run build
npm run preview -- --host --https
```

### Access from Phone:
```
https://YOUR_IP:5173  (dev)
https://YOUR_IP:4173  (preview)
```

**Note:** Accept the security warning on first visit.

---

## Troubleshooting

### "Cannot read properties of undefined (reading 'getUserMedia')"
- This means HTTPS is required
- Use one of the methods above

### Security Warning on Phone
- This is normal for self-signed certificates
- Click "Advanced" → "Proceed to site"
- Or use ngrok/Cloudflare for valid certificates

### Still Not Working?
- Check if you're using Chrome on Android
- Check if you're using Safari on iOS
- Make sure you accepted the security warning
- Try ngrok for guaranteed HTTPS
