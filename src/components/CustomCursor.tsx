"use client";

import { useEffect, useState, useCallback } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  const updatePosition = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
    if (!isVisible) setIsVisible(true);
  }, [isVisible]);

  const handleMouseDown = useCallback(() => setIsClicking(true), []);
  const handleMouseUp = useCallback(() => setIsClicking(false), []);
  const handleMouseLeave = useCallback(() => setIsVisible(false), []);
  const handleMouseEnter = useCallback(() => setIsVisible(true), []);

  useEffect(() => {
    setMounted(true);

    // Check if device has hover capability (not touch-only)
    const hasHover = window.matchMedia("(hover: hover)").matches;
    if (!hasHover) return;

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [updatePosition, handleMouseDown, handleMouseUp, handleMouseLeave, handleMouseEnter]);

  if (!mounted) return null;

  // Check if device has hover capability
  if (typeof window !== "undefined" && !window.matchMedia("(hover: hover)").matches) {
    return null;
  }

  return (
    <>
      {/* Main cursor - block shape */}
      <div
        className={`custom-cursor ${isClicking ? "clicking" : ""}`}
        style={{
          left: position.x,
          top: position.y,
          opacity: isVisible ? 1 : 0,
          transform: `translate(-50%, -50%) ${isClicking ? "scale(0.8)" : "scale(1)"}`,
        }}
        aria-hidden="true"
      />
      {/* Trailing dot */}
      <div
        className="custom-cursor-dot"
        style={{
          left: position.x,
          top: position.y + 24,
          opacity: isVisible ? 0.6 : 0,
          transform: "translate(-50%, -50%)",
        }}
        aria-hidden="true"
      />
    </>
  );
}
