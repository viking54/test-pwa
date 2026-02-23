# localtunnel Setup Guide

## Step 1: Install localtunnel
```bash
npm install -g localtunnel
```

## Step 2: Run Your App
```bash
npm run preview
```

## Step 3: Run localtunnel
```bash
lt --port 4173
```

## Step 4: Get Password

localtunnel will show:
```
your url is: https://major-cougars-drop.loca.lt
```

**In the same terminal, it will also show:**
```
your tunnel password is: xxx.xxx.xxx.xxx
```

Or check the terminal where `npm run preview` is running - it shows your IP.

## Step 5: Open on Phone

1. Open the localtunnel URL on phone
2. Enter the IP address as password (e.g., `192.168.1.100`)
3. Click "Submit"
4. App will open!

---

## Alternative: Use Cloudflare Tunnel (No Password!)

### Step 1: Install cloudflared
Download from: https://github.com/cloudflare/cloudflared/releases/latest

For Windows, download: `cloudflared-windows-amd64.exe`

### Step 2: Run Your App
```bash
npm run preview
```

### Step 3: Run Cloudflare Tunnel
```bash
cloudflared tunnel --url http://localhost:4173
```

### Step 4: Open URL
Cloudflare will show:
```
https://xyz.trycloudflare.com
```

**No password needed!** Just open on phone and it works!

---

## Easiest: Deploy to Vercel (Free)

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Build Your App
```bash
npm run build
```

### Step 3: Deploy
```bash
vercel --prod
```

### Step 4: Get URL
Vercel gives you a permanent HTTPS URL like:
```
https://pwa-demo-xyz.vercel.app
```

**Benefits:**
- ✅ No password
- ✅ Permanent URL
- ✅ Fast
- ✅ Free
- ✅ Automatic HTTPS

---

## Comparison

| Method | Password? | Speed | Permanent? | Setup |
|--------|-----------|-------|------------|-------|
| localtunnel | ✅ Yes | Fast | No | Easy |
| Cloudflare | ❌ No | Fast | No | Medium |
| ngrok | ❌ No | Fast | No | Medium |
| Vercel | ❌ No | Very Fast | Yes | Easy |

---

## Recommended Approach

**For Quick Testing:**
Use Cloudflare Tunnel (no password, no signup)

**For Permanent Demo:**
Use Vercel (free, permanent URL, no password)

**For Development:**
Use localtunnel (quick but needs password)
