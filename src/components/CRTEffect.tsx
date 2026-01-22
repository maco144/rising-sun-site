"use client";

import { useEffect, useState } from "react";

export default function CRTEffect() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Scanlines overlay */}
      <div className="crt-overlay" aria-hidden="true" />

      {/* Screen noise */}
      <div className="screen-noise" aria-hidden="true" />
    </>
  );
}
