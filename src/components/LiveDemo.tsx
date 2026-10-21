'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Camera, Sparkles, CheckCircle2, ShieldAlert, Cpu } from 'lucide-react';

export default function LiveDemo() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'live' | 'error'>('idle');
  const [handsCount, setHandsCount] = useState<number>(0);
  const [gesture, setGesture] = useState<string>('—');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animFrameId = useRef<number | null>(null);
  const handLandmarkerRef = useRef<any>(null);

  const CONNECTIONS = [
    [0, 1], [1, 2], [2, 3], [3, 4],
    [0, 5], [5, 6], [6, 7], [7, 8],
    [5, 9], [9, 10], [10, 11], [11, 12],
    [9, 13], [13, 14], [14, 15], [15, 16],
    [13, 17], [17, 18], [18, 19], [19, 20],
    [0, 17],
  ];

  function dist(a: any, b: any) {
    return Math.hypot(a.x - b.x, a.y - b.y);
  }

  function classifyGesture(lm: any[]) {
    const wrist = lm[0];
    const tips = [8, 12, 16, 20];
    const pips = [6, 10, 14, 18];
    let extended = 0;
    tips.forEach((t, i) => {
      if (lm[t].y < lm[pips[i]].y) extended++;
    });
    const thumbUp = dist(lm[4], wrist) > dist(lm[2], wrist) * 1.15;
    if (extended === 0 && !thumbUp) return 'Fist ✊';
    if (extended === 0 && thumbUp) return 'Thumbs Up 👍';
    if (extended === 2 && lm[8].y < lm[6].y && lm[12].y < lm[10].y) return 'Peace Sign ✌️';
    if (extended >= 4) return 'Open Hand 🖐️';
    const total = extended + (thumbUp ? 1 : 0);
    return `${total} Finger${total === 1 ? '' : 's'} Up ☝️`;
  }

  const drawFrame = (result: any, w: number, h: number) => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (!canvas || !video) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = w;
    canvas.height = h;

    ctx.save();
    ctx.scale(-1, 1);
    ctx.translate(-w, 0);
    ctx.drawImage(video, 0, 0, w, h);

    if (result.landmarks && result.landmarks.length) {
      result.landmarks.forEach((lm: any) => {
        // Draw Skeleton Lines in Light Blue theme
        ctx.strokeStyle = '#3B82F6';
        ctx.lineWidth = 4;
        CONNECTIONS.forEach(([a, b]) => {
          ctx.beginPath();
          ctx.moveTo(lm[a].x * w, lm[a].y * h);
          ctx.lineTo(lm[b].x * w, lm[b].y * h);
          ctx.stroke();
        });

        // Draw Nodes
        lm.forEach((p: any) => {
          ctx.beginPath();
          ctx.arc(p.x * w, p.y * h, 5, 0, Math.PI * 2);
          ctx.fillStyle = '#60A5FA';
          ctx.fill();
          ctx.lineWidth = 2;
          ctx.strokeStyle = '#FFFFFF';
          ctx.stroke();
        });
      });
      setHandsCount(result.landmarks.length);
      setGesture(classifyGesture(result.landmarks[0]));
    } else {
      setHandsCount(0);
      setGesture('—');
    }

    ctx.restore();
  };

  const loop = () => {
    const video = videoRef.current;
    const landmarker = handLandmarkerRef.current;

    if (video && video.readyState >= 2 && landmarker) {
      const result = landmarker.detectForVideo(video, performance.now());
      drawFrame(result, video.videoWidth || 640, video.videoHeight || 480);
    }
    animFrameId.current = requestAnimationFrame(loop);
  };

  const startDemo = async () => {
    setStatus('loading');
    setErrorMessage('');

    try {
      if (!handLandmarkerRef.current) {
        // Dynamic import from MediaPipe Tasks Vision CDN
        const dynamicImport = new Function('url', 'return import(url)');
        const { HandLandmarker, FilesetResolver } = (await dynamicImport(
          'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/vision_bundle.mjs'
        )) as any;

        const vision = await FilesetResolver.forVisionTasks(
          'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm'
        );

        handLandmarkerRef.current = await HandLandmarker.createFromOptions(vision, {
          baseOptions: {
            modelAssetPath:
              'https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task',
            delegate: 'GPU',
          },
          runningMode: 'VIDEO',
          numHands: 2,
        });
      }

      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 640, height: 480, facingMode: 'user' },
        audio: false,
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
        setStatus('live');
        loop();
      }
    } catch (err: any) {
      console.error(err);
      setStatus('error');
      setErrorMessage(
        err.name === 'NotAllowedError'
          ? 'Camera permission denied. Please allow camera access in your browser settings to try this demo.'
          : 'Unable to access video device or load MediaPipe WebAssembly module on this connection.'
      );
    }
  };

  const stopDemo = () => {
    if (animFrameId.current) {
      cancelAnimationFrame(animFrameId.current);
    }
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
    setStatus('idle');
    setHandsCount(0);
    setGesture('—');
  };

  useEffect(() => {
    return () => {
      stopDemo();
    };
  }, []);

  return (
    <div className="w-full max-w-[1298px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF7FF] border border-[#BFDBFE] text-xs font-bold text-[#3B82F6] uppercase tracking-wider mb-3">
            <Sparkles size={14} /> Live Client-Side AI
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#102A43] leading-tight">
            Computer Vision, <span className="text-[#3B82F6]">Running Live</span>
          </h2>
        </div>
        <p className="text-[#475569] text-base sm:text-lg max-w-lg leading-relaxed">
          Not a static mockup. Experience real-time hand skeleton tracking and gesture recognition powered by MediaPipe WebAssembly, executing entirely on your local GPU.
        </p>
      </div>

      {/* Main Terminal Stage */}
      <div className="w-full rounded-[32px] sm:rounded-[40px] border border-[#DCEBFA] bg-white shadow-[0_20px_60px_rgba(59,130,246,0.1)] overflow-hidden">
        {/* Terminal Header */}
        <div className="px-6 py-4 bg-[#EFF7FF] border-b border-[#DCEBFA] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3.5 h-3.5 rounded-full bg-rose-400/80" />
            <div className="w-3.5 h-3.5 rounded-full bg-amber-400/80" />
            <div className="w-3.5 h-3.5 rounded-full bg-emerald-400/80" />
            <span className="ml-3 text-xs sm:text-sm font-semibold text-[#102A43]">
              mediapipe_vision_hand_landmarks.wasm
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-[#3B82F6]">
            <Cpu size={15} />
            <span>GPU Accelerated</span>
          </div>
        </div>

        {/* Video Canvas Stage */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] max-h-[540px] bg-[#0A192F] flex items-center justify-center overflow-hidden">
          <video
            ref={videoRef}
            playsInline
            muted
            className="hidden"
          />
          <canvas
            ref={canvasRef}
            className="w-full h-full object-cover"
          />

          {/* Idle / Loading Overlay */}
          {status !== 'live' && (
            <div className="absolute inset-0 bg-slate-900/85 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center z-20">
              <div className="w-16 h-16 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center mb-5 text-blue-400">
                <Camera size={32} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Real-Time Gesture Tracking
              </h3>
              <p className="text-slate-300 text-sm max-w-md mb-6 leading-relaxed">
                Enable your webcam to test the model right now. No frames or data are ever uploaded or transmitted — processing occurs 100% on device.
              </p>

              {status === 'error' && (
                <div className="mb-6 p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-200 text-xs sm:text-sm max-w-md flex items-start gap-2 text-left">
                  <ShieldAlert size={18} className="flex-shrink-0 text-red-400 mt-0.5" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <button
                onClick={startDemo}
                disabled={status === 'loading'}
                className="px-8 py-3.5 rounded-full bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold text-base transition-all duration-300 shadow-lg shadow-blue-500/30 hover:scale-105 active:scale-95 disabled:opacity-70 cursor-pointer flex items-center gap-2"
              >
                {status === 'loading' ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Initializing Model...
                  </>
                ) : (
                  <>
                    <Camera size={18} />
                    Enable Camera & Run Demo
                  </>
                )}
              </button>
            </div>
          )}

          {/* Live Action Bar */}
          {status === 'live' && (
            <button
              onClick={stopDemo}
              className="absolute top-4 right-4 z-30 px-4 py-2 rounded-full bg-red-500/80 hover:bg-red-600 text-white text-xs font-semibold backdrop-blur-md transition-all shadow-md cursor-pointer"
            >
              Stop Camera
            </button>
          )}
        </div>

        {/* Readout Telemetry Bar */}
        <div className="grid grid-cols-3 divide-x divide-[#DCEBFA] bg-white p-4 sm:p-6 text-center border-t border-[#DCEBFA]">
          <div className="flex flex-col items-center">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#64748B] mb-1">
              Inference Status
            </span>
            <span
              className={`font-extrabold text-base sm:text-xl flex items-center gap-1.5 ${
                status === 'live' ? 'text-emerald-600' : 'text-[#102A43]'
              }`}
            >
              {status === 'live' && <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />}
              {status === 'live' ? 'Active' : status === 'loading' ? 'Loading' : 'Idle'}
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#64748B] mb-1">
              Hands Detected
            </span>
            <span className="font-extrabold text-base sm:text-xl text-[#3B82F6]">
              {handsCount}
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#64748B] mb-1">
              Classified Gesture
            </span>
            <span className="font-extrabold text-base sm:text-xl text-[#102A43]">
              {gesture}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
