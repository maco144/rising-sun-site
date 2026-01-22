"use client";

interface GlitchTextProps {
  children: string;
  className?: string;
  as?: "span" | "h1" | "h2" | "h3" | "p";
}

export default function GlitchText({
  children,
  className = "",
  as: Component = "span",
}: GlitchTextProps) {
  return (
    <Component className={`glitch-text ${className}`} data-text={children}>
      {children}
    </Component>
  );
}
