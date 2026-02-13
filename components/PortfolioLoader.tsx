"use client";

import { useEffect, useRef, useState } from "react";

interface LoaderProps {
  onComplete: () => void;
}

export default function PortfolioLoader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  /* ---------------- Progress Logic ---------------- */
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 800);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  /* ---------------- Particle System ---------------- */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: any[] = [];
    const particleCount = 120;

    let mouse = { x: canvas.width / 2, y: canvas.height / 2 };

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: Math.random() - 0.5,
        speedY: Math.random() - 0.5,
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 120) {
          p.x -= dx * 0.01;
          p.y -= dy * 0.01;
        }

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(120, 200, 255, 0.8)";
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center overflow-hidden z-[999]">

      {/* 🎇 Canvas Background */}
      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* 🌠 Center Content */}
      <div className="relative flex flex-col items-center text-center">

        {/* Glowing Core */}
        <div className="relative w-40 h-40 flex items-center justify-center">

          <div className="absolute w-40 h-40 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 blur-2xl opacity-40 animate-pulse" />

          <div className="w-28 h-28 rounded-full bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 shadow-2xl flex items-center justify-center text-white font-bold text-lg animate-pulse">
            BM
          </div>
        </div>

        <h1 className="mt-8 text-2xl font-bold tracking-widest bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Launching Portfolio
        </h1>

        <p className="text-gray-400 text-sm mt-2">
          Interactive System Initializing...
        </p>

        {/* Progress Bar */}
        <div className="mt-6 w-72 h-2 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="mt-3 text-sm text-gray-400">
          {progress}%
        </p>

        {progress === 100 && (
          <p className="mt-4 text-green-400 animate-pulse">
            ✔ Ready — Entering System...
          </p>
        )}
      </div>
    </div>
  );
}
