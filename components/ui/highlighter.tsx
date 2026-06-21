"use client";

import type { PropsWithChildren } from "react";
import React, { useEffect, useRef, useState } from "react";

// ── Mouse position hook ──────────────────────────────────────────────────────

interface MousePosition { x: number; y: number; }

function useMousePosition(): MousePosition {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return mousePosition;
}

// ── HighlightGroup ───────────────────────────────────────────────────────────

interface HighlightGroupProps {
  children: React.ReactNode;
  className?: string;
  refresh?: boolean;
}

export const HighlightGroup: React.FC<HighlightGroupProps> = ({
  children,
  className = "",
  refresh = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useMousePosition();
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const containerSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
  const [boxes, setBoxes] = useState<HTMLElement[]>([]);

  useEffect(() => {
    if (containerRef.current) {
      setBoxes(Array.from(containerRef.current.children).map((el) => el as HTMLElement));
    }
  }, []);

  useEffect(() => {
    initContainer();
    window.addEventListener("resize", initContainer);
    return () => window.removeEventListener("resize", initContainer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setBoxes]);

  useEffect(() => { onMouseMove(); }, [mousePosition]); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => { initContainer(); }, [refresh]);

  const initContainer = () => {
    if (containerRef.current) {
      containerSize.current.w = containerRef.current.offsetWidth;
      containerSize.current.h = containerRef.current.offsetHeight;
    }
  };

  const onMouseMove = () => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const { w, h } = containerSize.current;
    const x = mousePosition.x - rect.left;
    const y = mousePosition.y - rect.top;
    if (x < w && x > 0 && y < h && y > 0) {
      mouse.current = { x, y };
      boxes.forEach((box) => {
        const bx = -(box.getBoundingClientRect().left - rect.left) + mouse.current.x;
        const by = -(box.getBoundingClientRect().top - rect.top) + mouse.current.y;
        box.style.setProperty("--mouse-x", `${bx}px`);
        box.style.setProperty("--mouse-y", `${by}px`);
      });
    }
  };

  return <div className={className} ref={containerRef}>{children}</div>;
};

// ── HighlighterItem ──────────────────────────────────────────────────────────

interface HighlighterItemProps {
  children: React.ReactNode;
  className?: string;
}

export const HighlighterItem: React.FC<PropsWithChildren<HighlighterItemProps>> = ({
  children,
  className = "",
}) => (
  <div
    className={[
      "relative overflow-hidden p-px",
      "before:pointer-events-none before:absolute before:-left-48 before:-top-48 before:z-30",
      "before:h-96 before:w-96",
      "before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)]",
      "before:rounded-full before:bg-[#0f766e] before:opacity-0 before:blur-[100px]",
      "before:transition-opacity before:duration-500 before:hover:opacity-[0.14]",
      "after:absolute after:inset-0 after:z-10 after:rounded-3xl",
      "after:opacity-0 after:transition-opacity after:duration-500 after:group-hover:opacity-100",
      className,
    ].join(" ")}
  >
    {children}
  </div>
);

// ── Particles ────────────────────────────────────────────────────────────────

interface ParticlesProps {
  className?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
  refresh?: boolean;
  color?: string;
  vx?: number;
  vy?: number;
}

function hexToRgb(hex: string): number[] {
  hex = hex.replace("#", "");
  const n = parseInt(hex, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

export const Particles: React.FC<ParticlesProps> = ({
  className = "",
  quantity = 30,
  staticity = 50,
  ease = 50,
  refresh = false,
  color = "#ffffff",
  vx = 0,
  vy = 0,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const circles = useRef<Circle[]>([]);
  const mousePosition = useMousePosition();
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const canvasSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;

  type Circle = {
    x: number; y: number; translateX: number; translateY: number;
    size: number; alpha: number; targetAlpha: number;
    dx: number; dy: number; magnetism: number;
  };

  useEffect(() => {
    if (canvasRef.current) context.current = canvasRef.current.getContext("2d");
    initCanvas();
    animate();
    window.addEventListener("resize", initCanvas);
    return () => window.removeEventListener("resize", initCanvas);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => { onMouseMove(); }, [mousePosition.x, mousePosition.y]); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => { initCanvas(); }, [refresh]); // eslint-disable-line react-hooks/exhaustive-deps

  const initCanvas = () => { resizeCanvas(); drawParticles(); };

  const onMouseMove = () => {
    if (!canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const { w, h } = canvasSize.current;
    const x = mousePosition.x - rect.left - w / 2;
    const y = mousePosition.y - rect.top - h / 2;
    if (x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2) {
      mouse.current = { x, y };
    }
  };

  const resizeCanvas = () => {
    if (!canvasContainerRef.current || !canvasRef.current || !context.current) return;
    circles.current.length = 0;
    canvasSize.current.w = canvasContainerRef.current.offsetWidth;
    canvasSize.current.h = canvasContainerRef.current.offsetHeight;
    canvasRef.current.width = canvasSize.current.w * dpr;
    canvasRef.current.height = canvasSize.current.h * dpr;
    canvasRef.current.style.width = `${canvasSize.current.w}px`;
    canvasRef.current.style.height = `${canvasSize.current.h}px`;
    context.current.scale(dpr, dpr);
  };

  const circleParams = (): Circle => ({
    x: Math.floor(Math.random() * canvasSize.current.w),
    y: Math.floor(Math.random() * canvasSize.current.h),
    translateX: 0,
    translateY: 0,
    size: Math.floor(Math.random() * 2) + 1,
    alpha: 0,
    targetAlpha: parseFloat((Math.random() * 0.3 + 0.1).toFixed(1)),
    dx: (Math.random() - 0.5) * 0.2,
    dy: (Math.random() - 0.5) * 0.2,
    magnetism: 0.1 + Math.random() * 4,
  });

  const rgb = hexToRgb(color);

  const drawCircle = (circle: Circle, update = false) => {
    if (!context.current) return;
    const { x, y, translateX, translateY, size, alpha } = circle;
    context.current.translate(translateX, translateY);
    context.current.beginPath();
    context.current.arc(x, y, size, 0, 2 * Math.PI);
    context.current.fillStyle = `rgba(${rgb.join(", ")}, ${alpha})`;
    context.current.fill();
    context.current.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (!update) circles.current.push(circle);
  };

  const clearContext = () => {
    if (context.current)
      context.current.clearRect(0, 0, canvasSize.current.w, canvasSize.current.h);
  };

  const drawParticles = () => {
    clearContext();
    for (let i = 0; i < quantity; i++) drawCircle(circleParams());
  };

  const remapValue = (v: number, s1: number, e1: number, s2: number, e2: number) => {
    const r = ((v - s1) * (e2 - s2)) / (e1 - s1) + s2;
    return r > 0 ? r : 0;
  };

  const animate = () => {
    clearContext();
    circles.current.forEach((circle, i) => {
      const edge = [
        circle.x + circle.translateX - circle.size,
        canvasSize.current.w - circle.x - circle.translateX - circle.size,
        circle.y + circle.translateY - circle.size,
        canvasSize.current.h - circle.y - circle.translateY - circle.size,
      ];
      const closestEdge = edge.reduce((a, b) => Math.min(a, b));
      const remapped = parseFloat(remapValue(closestEdge, 0, 20, 0, 1).toFixed(2));
      if (remapped > 1) {
        circle.alpha += 0.02;
        if (circle.alpha > circle.targetAlpha) circle.alpha = circle.targetAlpha;
      } else {
        circle.alpha = circle.targetAlpha * remapped;
      }
      circle.x += circle.dx + vx;
      circle.y += circle.dy + vy;
      circle.translateX += (mouse.current.x / (staticity / circle.magnetism) - circle.translateX) / ease;
      circle.translateY += (mouse.current.y / (staticity / circle.magnetism) - circle.translateY) / ease;
      if (
        circle.x < -circle.size || circle.x > canvasSize.current.w + circle.size ||
        circle.y < -circle.size || circle.y > canvasSize.current.h + circle.size
      ) {
        circles.current.splice(i, 1);
        drawCircle(circleParams());
      } else {
        drawCircle({ ...circle, x: circle.x, y: circle.y, translateX: circle.translateX, translateY: circle.translateY, alpha: circle.alpha }, true);
      }
    });
    window.requestAnimationFrame(animate);
  };

  return (
    <div className={className} ref={canvasContainerRef} aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
};
