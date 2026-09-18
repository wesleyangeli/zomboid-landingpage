"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Bolt = {
  points: { x: number; y: number }[];
  life: number;
  maxLife: number;
  width: number;
};

function createBolt(width: number, height: number): Bolt {
  const startX = Math.random() * width;
  const segments = 6 + Math.floor(Math.random() * 8);
  const points: { x: number; y: number }[] = [{ x: startX, y: 0 }];
  let x = startX;
  let y = 0;

  for (let i = 0; i < segments; i++) {
    x += (Math.random() - 0.5) * 120;
    y += height / segments + Math.random() * 40;
    points.push({ x, y: Math.min(y, height) });
  }

  return {
    points,
    life: 1,
    maxLife: 0.08 + Math.random() * 0.12,
    width: 1 + Math.random() * 2,
  };
}

function drawBolt(
  ctx: CanvasRenderingContext2D,
  bolt: Bolt,
  opacity: number,
) {
  const { points, width } = bolt;
  if (points.length < 2) return;

  ctx.save();
  ctx.globalCompositeOperation = "lighter";
  ctx.strokeStyle = `rgba(180, 255, 200, ${opacity})`;
  ctx.lineWidth = width;
  ctx.shadowColor = "rgba(57, 255, 20, 0.9)";
  ctx.shadowBlur = 20;
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);

  for (let i = 1; i < points.length; i++) {
    ctx.lineTo(points[i].x, points[i].y);
  }
  ctx.stroke();

  ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.8})`;
  ctx.lineWidth = width * 0.4;
  ctx.shadowBlur = 8;
  ctx.beginPath();
  ctx.moveTo(points[0].x, points[0].y);
  for (let i = 1; i < points.length; i++) {
    ctx.lineTo(points[i].x, points[i].y);
  }
  ctx.stroke();
  ctx.restore();
}

function playThunder(audioContext: AudioContext, volume: number) {
  const duration = 1.2 + Math.random() * 1.8;
  const sampleRate = audioContext.sampleRate;
  const bufferSize = Math.floor(sampleRate * duration);
  const buffer = audioContext.createBuffer(1, bufferSize, sampleRate);
  const data = buffer.getChannelData(0);

  let lastOut = 0;
  for (let i = 0; i < bufferSize; i++) {
    const white = Math.random() * 2 - 1;
    lastOut = (lastOut + 0.02 * white) / 1.02;
    const attack = Math.min(1, i / (sampleRate * 0.05));
    const decay = Math.pow(1 - i / bufferSize, 1.8);
    data[i] = lastOut * 4 * attack * decay;
  }

  const source = audioContext.createBufferSource();
  source.buffer = buffer;

  const filter = audioContext.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.value = 90 + Math.random() * 120;
  filter.Q.value = 0.6;

  const gain = audioContext.createGain();
  gain.gain.value = volume * (0.12 + Math.random() * 0.08);

  source.connect(filter);
  filter.connect(gain);
  gain.connect(audioContext.destination);
  source.start();
}

function triggerScreenFlash(flashEl: HTMLDivElement) {
  const pulses = [
    { opacity: 0.7, ms: 40 },
    { opacity: 0.12, ms: 30 },
    { opacity: 0.45, ms: 35 },
    { opacity: 0.08, ms: 25 },
    { opacity: 0.2, ms: 50 },
    { opacity: 0, ms: 120 },
  ];

  let elapsed = 0;
  for (const pulse of pulses) {
    setTimeout(() => {
      flashEl.style.opacity = String(pulse.opacity);
    }, elapsed);
    elapsed += pulse.ms;
  }
}

export default function LightningBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const flashRef = useRef<HTMLDivElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const soundEnabledRef = useRef(false);
  const timeoutsRef = useRef<number[]>([]);

  const [soundEnabled, setSoundEnabled] = useState(false);
  const [soundReady, setSoundReady] = useState(false);

  const enableSound = useCallback(async () => {
    if (!audioContextRef.current) {
      audioContextRef.current = new AudioContext();
    }
    const ctx = audioContextRef.current;
    if (ctx.state === "suspended") {
      await ctx.resume();
    }
    soundEnabledRef.current = true;
    setSoundEnabled(true);
    setSoundReady(true);
  }, []);

  const disableSound = useCallback(() => {
    soundEnabledRef.current = false;
    setSoundEnabled(false);
  }, []);

  const toggleSound = useCallback(async () => {
    if (soundEnabledRef.current) {
      disableSound();
    } else {
      await enableSound();
    }
  }, [disableSound, enableSound]);

  useEffect(() => {
    const unlockSound = () => {
      void enableSound();
    };

    window.addEventListener("pointerdown", unlockSound, { once: true });
    window.addEventListener("keydown", unlockSound, { once: true });

    return () => {
      window.removeEventListener("pointerdown", unlockSound);
      window.removeEventListener("keydown", unlockSound);
    };
  }, [enableSound]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const flash = flashRef.current;
    if (!canvas || !flash) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId = 0;
    let bolts: Bolt[] = [];
    let lastStrike = 0;
    let nextStrikeDelay = 2000 + Math.random() * 4000;

    const scheduleTimeout = (fn: () => void, delay: number) => {
      const id = window.setTimeout(fn, delay);
      timeoutsRef.current.push(id);
    };

    const strike = () => {
      bolts.push(createBolt(canvas.width, canvas.height));
      triggerScreenFlash(flash);

      if (soundEnabledRef.current && audioContextRef.current) {
        const thunderDelay = 180 + Math.random() * 700;
        scheduleTimeout(() => {
          if (soundEnabledRef.current && audioContextRef.current) {
            playThunder(audioContextRef.current, 1);
          }
        }, thunderDelay);

        if (Math.random() > 0.6) {
          scheduleTimeout(() => {
            if (soundEnabledRef.current && audioContextRef.current) {
              playThunder(audioContextRef.current, 0.5);
            }
          }, thunderDelay + 400 + Math.random() * 600);
        }
      }
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (time - lastStrike > nextStrikeDelay) {
        strike();
        lastStrike = time;
        nextStrikeDelay = 1500 + Math.random() * 5000;
      }

      bolts = bolts.filter((bolt) => {
        bolt.life -= bolt.maxLife / 60;
        if (bolt.life <= 0) return false;
        drawBolt(ctx, bolt, bolt.life);
        return true;
      });

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
      timeoutsRef.current.forEach(clearTimeout);
      timeoutsRef.current = [];
    };
  }, []);

  useEffect(() => {
    return () => {
      void audioContextRef.current?.close();
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-0"
        aria-hidden="true"
      />
      <div
        ref={flashRef}
        className="pointer-events-none fixed inset-0 z-[60] bg-white opacity-0"
        style={{ transition: "opacity 40ms ease-out" }}
        aria-hidden="true"
      />
      <button
        type="button"
        onClick={() => void toggleSound()}
        className="fixed bottom-4 left-4 z-[70] flex items-center gap-2 rounded-full border border-toxic-500/30 bg-void-950/80 px-4 py-2.5 text-sm font-bold text-zombie-100 backdrop-blur-sm transition hover:border-toxic-500/60 hover:text-toxic-300 sm:text-base"
        aria-label={soundEnabled ? "Desativar som de trovão" : "Ativar som de trovão"}
        title={
          soundReady
            ? soundEnabled
              ? "Som ativado"
              : "Som desativado"
            : "Clique para ativar som"
        }
      >
        {soundEnabled ? (
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072M12 6l-6 4v4l6 4V6zm0 0V4a2 2 0 012-2h0a2 2 0 012 2v2" />
          </svg>
        ) : (
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
          </svg>
        )}
        {soundEnabled ? "Som ON" : "Som OFF"}
      </button>
    </>
  );
}
