"use client";

import { useEffect, useRef } from "react";

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

export default function LightningBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const flashRef = useRef<HTMLDivElement>(null);

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

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (time - lastStrike > nextStrikeDelay) {
        bolts.push(createBolt(canvas.width, canvas.height));
        lastStrike = time;
        nextStrikeDelay = 1500 + Math.random() * 5000;

        flash.style.opacity = "0.15";
        setTimeout(() => {
          flash.style.opacity = "0";
        }, 80);
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
        className="pointer-events-none fixed inset-0 z-0 bg-toxic-400/20 opacity-0 transition-opacity duration-75"
        aria-hidden="true"
      />
    </>
  );
}
