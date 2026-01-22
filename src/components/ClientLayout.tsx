"use client";

import { useState, useEffect, useCallback } from "react";
import BootSequence from "./BootSequence";
import CRTEffect from "./CRTEffect";
import CustomCursor from "./CustomCursor";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [isBooted, setIsBooted] = useState(false);
  const [skipBoot, setSkipBoot] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Check if we've already booted this session
    const hasBooted = sessionStorage.getItem("rising-sun-booted");
    if (hasBooted) {
      setIsBooted(true);
      setSkipBoot(true);
      setShowContent(true);
    }
  }, []);

  const handleBootComplete = useCallback(() => {
    setIsBooted(true);
    sessionStorage.setItem("rising-sun-booted", "true");
    // Small delay before showing content with transition
    setTimeout(() => setShowContent(true), 100);
  }, []);

  // Allow skipping boot with any key press
  useEffect(() => {
    if (isBooted) return;

    const handleKeyPress = () => {
      setSkipBoot(true);
      handleBootComplete();
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isBooted, handleBootComplete]);

  return (
    <>
      {/* Boot sequence overlay */}
      {!isBooted && (
        <BootSequence onComplete={handleBootComplete} skip={skipBoot} />
      )}

      {/* Main content with page transition */}
      <div
        className={`crt-flicker ${showContent ? "page-transition-enter" : "opacity-0"}`}
      >
        {children}
      </div>

      {/* CRT screen effects */}
      <CRTEffect />

      {/* Custom cursor */}
      <CustomCursor />
    </>
  );
}
