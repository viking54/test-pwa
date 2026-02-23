import { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {
  const [cameraStream, setCameraStream] = useState(null)
  const [micStream, setMicStream] = useState(null)
  const [location, setLocation] = useState(null)
  const [watchId, setWatchId] = useState(null)
  const [audioPlaying, setAudioPlaying] = useState(false)
  const [status, setStatus] = useState('')
  const [permissionStatus, setPermissionStatus] = useState({})
  const [capturedPhoto, setCapturedPhoto] = useState(null)
  
  const videoRef = useRef(null)
  const audioRef = useRef(null)
  const canvasRef = useRef(null)

  // Check permissions on load
  useEffect(() => {
    checkPermissions()
  }, [])

  const checkPermissions = async () => {
    const perms = {}
    try {
      if (navigator.permissions) {
        const camera = await navigator.permissions.query({ name: 'camera' })
        perms.camera = camera.state
        
        const mic = await navigator.permissions.query({ name: 'microphone' })
        perms.microphone = mic.state
        
        const geo = await navigator.permissions.query({ name: 'geolocation' })
        perms.geolocation = geo.state
      }
    } catch (err) {
      console.log('Permission API not fully supported')
    }
    setPermissionStatus(perms)
  }

  // Test Camera
  const testCamera = async () => {
    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        setStatus('❌ Camera not supported. iPhone needs HTTPS!')
        return
      }
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'user' } 
      })
      setCameraStream(stream)
      if (videoRef.current) {
        videoRef.current.srcObject = stream
      }
      setStatus('✅ Camera working! Permission granted.')
      checkPermissions()
    } catch (err) {
      if (err.name === 'NotAllowedError') {
        setStatus('❌ Camera permission denied by user')
      } else if (err.name === 'NotFoundError') {
        setStatus('❌ No camera found on device')
      } else {
        setStatus('❌ Camera error: ' + err.message + ' (iPhone needs HTTPS)')
      }
    }
  }

  const stopCamera = () => {
    if (cameraStream) {
      cameraStream.getTracks().forEach(track => track.stop())
      setCameraStream(null)
      setStatus('Camera stopped')
    }
  }

  // Capture Photo
  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current
      const video = videoRef.current
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight
      const ctx = canvas.getContext('2d')
      ctx.drawImage(video, 0, 0)
      const photoUrl = canvas.toDataURL('image/png')
      setCapturedPhoto(photoUrl)
      setStatus('✅ Photo captured!')
    }
  }

  // Test Microphone
  const testMic = async () => {
    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        setStatus('❌ Microphone not supported. Need HTTPS on iPhone!')
        return
      }
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      setMicStream(stream)
      setStatus('✅ Microphone access granted! Permission persists.')
      checkPermissions()
    } catch (err) {
      setStatus('❌ Mic error: ' + err.message)
    }
  }

  const stopMic = () => {
    if (micStream) {
      micStream.getTracks().forEach(track => track.stop())
      setMicStream(null)
      setStatus('Microphone stopped')
    }
  }

  // Test GPS/Location (One-time)
  const testGPS = () => {
    if (!navigator.geolocation) {
      setStatus('❌ Geolocation not supported')
      return
    }
    
    setStatus('Getting location...')
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          accuracy: position.coords.accuracy,
          timestamp: new Date(position.timestamp).toLocaleTimeString()
        })
        setStatus('✅ GPS working! Permission granted.')
        checkPermissions()
      },
      (err) => {
        setStatus('❌ GPS error: ' + err.message)
      },
      { enableHighAccuracy: true }
    )
  }

  // Test Continuous GPS Tracking
  const startGPSTracking = () => {
    if (!navigator.geolocation) {
      setStatus('❌ Geolocation not supported')
      return
    }

    const id = navigator.geolocation.watchPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          accuracy: position.coords.accuracy,
          timestamp: new Date(position.timestamp).toLocaleTimeString()
        })
        setStatus('✅ GPS tracking active (foreground)')
      },
      (err) => {
        setStatus('❌ GPS tracking error: ' + err.message)
      },
      { enableHighAccuracy: true, maximumAge: 0 }
    )
    setWatchId(id)
  }

  const stopGPSTracking = () => {
    if (watchId) {
      navigator.geolocation.clearWatch(watchId)
      setWatchId(null)
      setStatus('GPS tracking stopped')
    }
  }

  // Test Audio Playback
  const testAudio = () => {
    if (audioRef.current) {
      if (audioPlaying) {
        audioRef.current.pause()
        setAudioPlaying(false)
        setStatus('Audio paused')
      } else {
        audioRef.current.play()
        setAudioPlaying(true)
        setStatus('✅ Audio playing!')
      }
    }
  }

  return (
    <div className="app">
      <h1>PWA Feature Test</h1>
      <p className="subtitle">Proving PWAs = Native-like capabilities</p>
      
      <div className="status">{status}</div>

      {/* Permission Status */}
      <div className="section">
        <h2>🔐 Permission Status</h2>
        <div className="permission-grid">
          <div>Camera: {permissionStatus.camera || 'unknown'}</div>
          <div>Mic: {permissionStatus.microphone || 'unknown'}</div>
          <div>GPS: {permissionStatus.geolocation || 'unknown'}</div>
        </div>
        <p className="note">Once granted, permissions persist in installed PWA!</p>
      </div>

      {/* Camera */}
      <div className="section">
        <h2>📷 Camera</h2>
        <video ref={videoRef} autoPlay playsInline className="video"></video>
        <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
        {capturedPhoto && (
          <div className="captured-photo">
            <img src={capturedPhoto} alt="Captured" />
          </div>
        )}
        <div className="buttons">
          <button onClick={testCamera} disabled={cameraStream}>
            Start Camera
          </button>
          <button onClick={capturePhoto} disabled={!cameraStream}>
            Capture Photo
          </button>
          <button onClick={stopCamera} disabled={!cameraStream}>
            Stop
          </button>
        </div>
      </div>

      {/* Microphone */}
      <div className="section">
        <h2>🎤 Microphone</h2>
        <div className="mic-status">
          {micStream ? '🟢 Mic Active' : '⚪ Mic Inactive'}
        </div>
        <div className="buttons">
          <button onClick={testMic} disabled={micStream}>
            Test Mic
          </button>
          <button onClick={stopMic} disabled={!micStream}>
            Stop Mic
          </button>
        </div>
      </div>

      {/* GPS */}
      <div className="section">
        <h2>📍 GPS Location</h2>
        {location && (
          <div className="location-info">
            <p>Latitude: {location.lat.toFixed(6)}</p>
            <p>Longitude: {location.lng.toFixed(6)}</p>
            <p>Accuracy: {location.accuracy.toFixed(2)}m</p>
            <p>Time: {location.timestamp}</p>
          </div>
        )}
        <div className="buttons">
          <button onClick={testGPS}>Get Location</button>
          <button onClick={startGPSTracking} disabled={watchId}>
            Start Tracking
          </button>
          <button onClick={stopGPSTracking} disabled={!watchId}>
            Stop Tracking
          </button>
        </div>
        <p className="note">Tracking works in foreground (like Teams/Zoom)</p>
      </div>

      {/* Audio */}
      <div className="section">
        <h2>🔊 Audio Playback</h2>
        <audio ref={audioRef} src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" />
        <button onClick={testAudio}>
          {audioPlaying ? 'Pause Audio' : 'Play Audio'}
        </button>
      </div>

      {/* Info */}
      <div className="info">
        <p>✨ Install this PWA on your phone!</p>
        <p>After installation, permissions persist - no repeated prompts.</p>
        <p>Works exactly like Teams, Zoom, Google Meet in browser.</p>
      </div>
    </div>
  )
}

export default App
