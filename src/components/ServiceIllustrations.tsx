const cls = "w-full h-full";

export function WebDevIllustration() {
  return (
    <svg viewBox="0 0 240 200" fill="none" className={cls}>
      <rect x="20" y="20" width="200" height="160" rx="8" stroke="var(--yellow)" strokeWidth="2" />
      <rect x="20" y="20" width="200" height="28" rx="8" fill="var(--bg-secondary)" />
      <rect x="20" y="40" width="200" height="8" fill="var(--bg-secondary)" />
      <circle cx="38" cy="34" r="4" fill="#FF5F57" />
      <circle cx="52" cy="34" r="4" fill="#FEBC2E" />
      <circle cx="66" cy="34" r="4" fill="#28C840" />
      <rect x="40" y="64" width="80" height="4" rx="2" fill="var(--yellow)" opacity="0.8" />
      <rect x="40" y="76" width="120" height="4" rx="2" fill="var(--text-primary)" opacity="0.3" />
      <rect x="56" y="88" width="100" height="4" rx="2" fill="var(--text-primary)" opacity="0.2" />
      <rect x="56" y="100" width="60" height="4" rx="2" fill="var(--yellow)" opacity="0.5" />
      <rect x="40" y="112" width="90" height="4" rx="2" fill="var(--text-primary)" opacity="0.3" />
      <rect x="40" y="124" width="70" height="4" rx="2" fill="var(--text-primary)" opacity="0.2" />
      <rect x="40" y="136" width="40" height="4" rx="2" fill="var(--yellow)" opacity="0.6" />
      <rect x="84" y="134" width="2" height="8" fill="var(--yellow)">
        <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
      </rect>
    </svg>
  );
}

export function AutomationIllustration() {
  return (
    <svg viewBox="0 0 240 200" fill="none" className={cls}>
      <path d="M40 120 L200 120" stroke="var(--text-primary)" strokeWidth="2" opacity="0.3" />
      <circle cx="70" cy="80" r="24" stroke="var(--yellow)" strokeWidth="2" fill="none" />
      <circle cx="70" cy="80" r="8" fill="var(--yellow)" opacity="0.3" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a, i) => (
        <rect
          key={i}
          x="67"
          y="54"
          width="6"
          height="12"
          rx="3"
          fill="var(--yellow)"
          transform={`rotate(${a} 70 80)`}
        />
      ))}
      <circle cx="130" cy="90" r="18" stroke="var(--text-primary)" strokeWidth="2" fill="none" opacity="0.5" />
      <circle cx="130" cy="90" r="6" fill="var(--text-primary)" opacity="0.2" />
      <path d="M94 80 L112 90" stroke="var(--yellow)" strokeWidth="1.5" strokeDasharray="4 4" />
      <path d="M170 60 L162 90 L174 86 L166 116" stroke="var(--yellow)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="50" cy="150" r="4" fill="var(--yellow)" opacity="0.5" />
      <circle cx="120" cy="155" r="4" fill="var(--yellow)" opacity="0.3" />
      <circle cx="190" cy="145" r="4" fill="var(--yellow)" opacity="0.4" />
      <path d="M54 150 L116 155 M124 155 L186 145" stroke="var(--text-primary)" strokeWidth="1" opacity="0.2" />
    </svg>
  );
}

export function ReceptionistIllustration() {
  return (
    <svg viewBox="0 0 240 200" fill="none" className={cls}>
      <rect x="80" y="30" width="80" height="140" rx="12" stroke="var(--text-primary)" strokeWidth="2" opacity="0.5" />
      <rect x="88" y="50" width="64" height="100" rx="4" fill="var(--bg-secondary)" />
      <rect x="94" y="60" width="48" height="16" rx="8" fill="var(--yellow)" opacity="0.8" />
      <rect x="98" y="66" width="28" height="3" rx="1.5" fill="var(--bg-primary)" opacity="0.5" />
      <rect x="100" y="86" width="44" height="16" rx="8" fill="var(--text-primary)" opacity="0.2" />
      <rect x="94" y="112" width="50" height="16" rx="8" fill="var(--yellow)" opacity="0.6" />
      <circle cx="106" cy="140" r="2.5" fill="var(--yellow)" opacity="0.5">
        <animate attributeName="opacity" values="0.3;0.8;0.3" dur="1.2s" repeatCount="indefinite" />
      </circle>
      <circle cx="116" cy="140" r="2.5" fill="var(--yellow)" opacity="0.5">
        <animate attributeName="opacity" values="0.3;0.8;0.3" dur="1.2s" begin="0.2s" repeatCount="indefinite" />
      </circle>
      <circle cx="126" cy="140" r="2.5" fill="var(--yellow)" opacity="0.5">
        <animate attributeName="opacity" values="0.3;0.8;0.3" dur="1.2s" begin="0.4s" repeatCount="indefinite" />
      </circle>
      <path d="M170 70 Q180 60 190 70" stroke="var(--yellow)" strokeWidth="1.5" fill="none" opacity="0.5" />
      <path d="M166 62 Q182 46 198 62" stroke="var(--yellow)" strokeWidth="1.5" fill="none" opacity="0.3" />
    </svg>
  );
}

export function OnboardingIllustration() {
  return (
    <svg viewBox="0 0 240 200" fill="none" className={cls}>
      <rect x="40" y="60" width="60" height="100" rx="4" fill="var(--bg-secondary)" stroke="var(--text-primary)" strokeWidth="1.5" opacity="0.4" />
      <rect x="52" y="76" width="12" height="10" rx="1" fill="var(--text-dim)" opacity="0.3" />
      <rect x="76" y="76" width="12" height="10" rx="1" fill="var(--text-dim)" opacity="0.3" />
      <rect x="52" y="96" width="12" height="10" rx="1" fill="var(--text-dim)" opacity="0.3" />
      <rect x="76" y="96" width="12" height="10" rx="1" fill="var(--text-dim)" opacity="0.3" />
      <path d="M115 110 L135 110" stroke="var(--yellow)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M130 104 L138 110 L130 116" stroke="var(--yellow)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <rect x="150" y="60" width="60" height="100" rx="4" fill="var(--bg-secondary)" stroke="var(--yellow)" strokeWidth="2" />
      <rect x="162" y="76" width="12" height="10" rx="1" fill="var(--yellow)" opacity="0.8" />
      <rect x="186" y="76" width="12" height="10" rx="1" fill="var(--yellow)" opacity="0.6" />
      <rect x="162" y="96" width="12" height="10" rx="1" fill="var(--yellow)" opacity="0.7" />
      <rect x="186" y="96" width="12" height="10" rx="1" fill="var(--yellow)" opacity="0.9" />
      <path d="M180 50 Q180 42 188 42" stroke="var(--yellow)" strokeWidth="1.5" fill="none" opacity="0.6" />
      <path d="M176 44 Q180 34 192 34" stroke="var(--yellow)" strokeWidth="1.5" fill="none" opacity="0.4" />
      <rect x="30" y="160" width="190" height="2" rx="1" fill="var(--text-primary)" opacity="0.1" />
    </svg>
  );
}

export function SEOIllustration() {
  return (
    <svg viewBox="0 0 240 200" fill="none" className={cls}>
      <circle cx="100" cy="90" r="36" stroke="var(--yellow)" strokeWidth="2.5" fill="none" />
      <line x1="126" y1="116" x2="160" y2="150" stroke="var(--yellow)" strokeWidth="3" strokeLinecap="round" />
      <path d="M100 72 C92 72 86 78 86 86 C86 96 100 110 100 110 C100 110 114 96 114 86 C114 78 108 72 100 72Z" fill="var(--yellow)" opacity="0.2" stroke="var(--yellow)" strokeWidth="1.5" />
      <circle cx="100" cy="86" r="5" fill="var(--yellow)" opacity="0.6" />
      <rect x="170" y="120" width="12" height="30" rx="2" fill="var(--text-primary)" opacity="0.2" />
      <rect x="188" y="100" width="12" height="50" rx="2" fill="var(--text-primary)" opacity="0.3" />
      <rect x="206" y="80" width="12" height="70" rx="2" fill="var(--yellow)" opacity="0.5" />
      <path d="M176 115 L194 95 L212 75" stroke="var(--yellow)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M206 73 L214 73 L214 81" stroke="var(--yellow)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function AdsIllustration() {
  return (
    <svg viewBox="0 0 240 200" fill="none" className={cls}>
      <circle cx="120" cy="100" r="60" stroke="var(--text-primary)" strokeWidth="1.5" opacity="0.15" />
      <circle cx="120" cy="100" r="42" stroke="var(--text-primary)" strokeWidth="1.5" opacity="0.2" />
      <circle cx="120" cy="100" r="24" stroke="var(--yellow)" strokeWidth="2" opacity="0.5" />
      <circle cx="120" cy="100" r="8" fill="var(--yellow)" />
      <line x1="180" y1="50" x2="126" y2="96" stroke="var(--yellow)" strokeWidth="2" strokeLinecap="round" />
      <path d="M184 42 L182 52 L172 54" stroke="var(--yellow)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="50" cy="60" r="10" stroke="var(--yellow)" strokeWidth="1.5" fill="none" opacity="0.4" />
      <text x="46" y="65" fill="var(--yellow)" fontSize="12" fontFamily="monospace" opacity="0.4">&#x20B9;</text>
      <circle cx="200" cy="150" r="10" stroke="var(--yellow)" strokeWidth="1.5" fill="none" opacity="0.4" />
      <text x="196" y="155" fill="var(--yellow)" fontSize="12" fontFamily="monospace" opacity="0.4">&#x20B9;</text>
    </svg>
  );
}
