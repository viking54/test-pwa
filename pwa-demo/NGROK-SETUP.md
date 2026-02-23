# ngrok Setup Guide for Windows

## Step 1: Download ngrok

1. Go to: https://ngrok.com/download
2. Click "Download for Windows"
3. Save the ZIP file

## Step 2: Extract ngrok

1. Right-click the downloaded ZIP file
2. Click "Extract All"
3. Extract to a folder (e.g., `C:\ngrok`)
4. You'll get `ngrok.exe` file

## Step 3: Add to PATH (Optional but Recommended)

### Method 1: Run from ngrok folder
```bash
cd C:\ngrok
.\ngrok http 4173
```

### Method 2: Add to PATH (Run from anywhere)
1. Copy the folder path where ngrok.exe is (e.g., `C:\ngrok`)
2. Press `Windows + R`
3. Type: `sysdm.cpl` and press Enter
4. Click "Advanced" tab
5. Click "Environment Variables"
6. Under "System variables", find "Path"
7. Click "Edit"
8. Click "New"
9. Paste the ngrok folder path
10. Click "OK" on all windows
11. Close and reopen PowerShell/CMD

## Step 4: Test ngrok

Open new PowerShell/CMD:
```bash
ngrok version
```

Should show version number.

## Step 5: Use ngrok

### Terminal 1 - Run your app:
```bash
cd E:\pwa\pwa-demo
npm run preview
```

### Terminal 2 - Run ngrok:
```bash
cd C:\ngrok
.\ngrok http 4173
```

Or if added to PATH:
```bash
ngrok http 4173
```

## Step 6: Get HTTPS URL

ngrok will show:
```
Session Status                online
Forwarding                    https://abc123.ngrok-free.app -> http://localhost:4173
```

Copy the HTTPS URL and open on your phone!

---

## Alternative: Use Full Path

If you don't want to add to PATH, use full path:
```bash
C:\ngrok\ngrok.exe http 4173
```

---

## Quick Commands

### Check if ngrok is installed:
```bash
ngrok version
```

### Run ngrok from any folder:
```bash
ngrok http 4173
```

### Run ngrok from ngrok folder:
```bash
cd C:\ngrok
.\ngrok http 4173
```

---

## Troubleshooting

### "ngrok is not recognized"
- ngrok not in PATH
- Use full path: `C:\ngrok\ngrok.exe http 4173`
- Or add to PATH (see Step 3)

### "Failed to start tunnel"
- Check if port 4173 is running
- Run `npm run preview` first
- Then run ngrok

### ngrok URL not working on phone
- Check if preview server is running
- Try refreshing the ngrok URL
- Check phone has internet connection

---

## Even Easier Alternative: localtunnel

If ngrok is too complicated, use localtunnel (npm package):

```bash
npm install -g localtunnel

# Terminal 1
npm run preview

# Terminal 2
lt --port 4173
```

You'll get a URL like: `https://xyz.loca.lt`

Open on phone and it works!
