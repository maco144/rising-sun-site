"use client";

interface ASCIIBorderProps {
  children: React.ReactNode;
  variant?: "single" | "double" | "rounded";
  className?: string;
}

const borders = {
  single: {
    tl: "┌",
    tr: "┐",
    bl: "└",
    br: "┘",
    h: "─",
    v: "│",
  },
  double: {
    tl: "╔",
    tr: "╗",
    bl: "╚",
    br: "╝",
    h: "═",
    v: "║",
  },
  rounded: {
    tl: "╭",
    tr: "╮",
    bl: "╰",
    br: "╯",
    h: "─",
    v: "│",
  },
};

export default function ASCIIBorder({
  children,
  variant = "single",
  className = "",
}: ASCIIBorderProps) {
  const b = borders[variant];

  return (
    <div className={`relative ${className}`}>
      {/* Top border */}
      <div className="flex text-terminal-gray select-none">
        <span>{b.tl}</span>
        <span className="flex-1 overflow-hidden">
          {b.h.repeat(100)}
        </span>
        <span>{b.tr}</span>
      </div>

      {/* Content with side borders */}
      <div className="flex">
        <span className="text-terminal-gray select-none">{b.v}</span>
        <div className="flex-1 px-4 py-3">{children}</div>
        <span className="text-terminal-gray select-none">{b.v}</span>
      </div>

      {/* Bottom border */}
      <div className="flex text-terminal-gray select-none">
        <span>{b.bl}</span>
        <span className="flex-1 overflow-hidden">
          {b.h.repeat(100)}
        </span>
        <span>{b.br}</span>
      </div>
    </div>
  );
}
