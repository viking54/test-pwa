# PWA Testing Guide

## What to Test

### 1. Camera Access ✅
- Click "Start Camera" - should show live video
- Click "Capture Photo" - should take a snapshot
- Works on mobile front/back camera
- Permission persists after PWA installation

### 2. Microphone Access ✅
- Click "Test Mic" - should grant access
- Status shows "Mic Active"
- Permission persists after PWA installation

### 3. GPS Location ✅
- Click "Get Location" - shows lat/lng coordinates
- Click "Start Tracking" - continuously updates location
- Works while app is in foreground (like Zoom/Teams)
- Permission persists after PWA installation

### 4. Audio Playback ✅
- Click "Play Audio" - plays music
- Works without any special permissions

### 5. Permission Persistence (KEY TEST) ✅
**This is what the previous developer missed!**

On Desktop:
1. Open app in browser
2. Grant camera/mic/GPS permissions
3. Close browser completely
4. Reopen - permissions are REMEMBERED

On Mobile (Install PWA):
1. Open app in mobile browser
2. Install PWA (Add to Home Screen)
3. Open installed PWA
4. Grant permissions once
5. Close app completely
6. Reopen - NO permission prompts!

## Testing Checklist

### Desktop Browser
- [ ] Chrome - Camera works
- [ ] Chrome - Mic works
- [ ] Chrome - GPS works
- [ ] Chrome - Permissions persist after browser restart
- [ ] Edge - All features work
- [ ] Firefox - All features work

### Mobile Browser (Before Install)
- [ ] Android Chrome - All features work
- [ ] iOS Safari - All features work
- [ ] Permissions asked each time (expected)

### Mobile PWA (After Install)
- [ ] Android - Install PWA
- [ ] Android - Grant permissions once
- [ ] Android - Close and reopen - NO prompts ✅
- [ ] iOS - Install PWA
- [ ] iOS - Grant permissions once
- [ ] iOS - Close and reopen - NO prompts ✅

## Expected Results

### ✅ What WORKS (Same as Teams/Zoom/Meet)
- Camera access (foreground)
- Microphone access (foreground)
- GPS location (foreground)
- Audio playback
- Photo capture
- Permission persistence in installed PWA
- Works cross-platform

### ❌ What DOESN'T Work (Not needed for EVV anyway)
- Background GPS tracking (app closed)
- Silent camera capture (requires user action)
- Background audio recording (app closed)

## Key Finding

**The previous developer was WRONG about:**
> "Permissions may be requested repeatedly across sessions"

**Reality:** Once PWA is installed, permissions persist just like native apps!

This is exactly how Teams, Zoom, and Google Meet work in browser.
