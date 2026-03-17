"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div style={{ width: 88, height: 32 }} />;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex items-center gap-2 font-body transition-colors duration-200"
      style={{
        fontSize: "12px",
        fontWeight: 500,
        color: "var(--ink-60)",
        padding: "6px 14px",
        borderRadius: "9999px",
        border: "1px solid var(--border)",
        backgroundColor: "var(--bg-card)",
      }}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 18,
          height: 18,
          borderRadius: "50%",
          backgroundColor: "var(--amber)",
          fontSize: "11px",
          lineHeight: 1,
        }}
      >
        {isDark ? "☀" : "◑"}
      </span>
      {isDark ? "Light" : "Dark"}
    </button>
  );
}
