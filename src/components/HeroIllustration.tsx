export default function HeroIllustration() {
  return (
    <div className="w-full h-auto flex items-center justify-center">
<svg viewBox="0 0 1200 700" width="100%" height="100%">
  <defs>
    <pattern id="dotGrid" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1.5" fill="var(--ink-12)" opacity="0.6"/>
    </pattern>

    <filter id="shadow" x="-10%" y="-10%" width="130%" height="130%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="var(--ink)" floodOpacity="0.08"/>
    </filter>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="0" stdDeviation="15" floodColor="var(--yellow)" floodOpacity="0.3"/>
    </filter>

    <linearGradient id="onlineRoofGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="var(--amber)"/>
      <stop offset="100%" stopColor="var(--amber)"/>
    </linearGradient>
    <linearGradient id="staplerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="var(--yellow)"/>
      <stop offset="100%" stopColor="var(--amber)"/>
    </linearGradient>
    <linearGradient id="flowRight" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="var(--ink-40)" stopOpacity="0.2"/>
      <stop offset="100%" stopColor="var(--amber)" stopOpacity="0.8"/>
    </linearGradient>
    <linearGradient id="flowLeft" x1="100%" y1="0%" x2="0%" y2="0%">
      <stop offset="0%" stopColor="var(--amber)" stopOpacity="0.8"/>
      <stop offset="100%" stopColor="var(--ink-40)" stopOpacity="0.2"/>
    </linearGradient>

    <marker id="arrowRight" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,1 L8,5 L0,9 Z" fill="var(--amber)"/>
    </marker>
    <marker id="arrowLeft" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0,1 L8,5 L0,9 Z" fill="var(--yellow)"/>
    </marker>
  </defs>

  
  

  <g textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif">
    <text x="600" y="80" fontWeight="800" fontSize="44" fill="var(--ink)">StaplerLabs O2O Ecosystem</text>
    <text x="600" y="120" fontWeight="500" fontSize="22" fill="var(--ink-60)">Bridging the Gap Between Offline and Online Business</text>
  </g>

  <g>
    <path d="M 360 280 C 480 200, 720 200, 840 280" fill="none" stroke="url(#flowRight)" strokeWidth="6" strokeDasharray="8 8" markerEnd="url(#arrowRight)"/>
    <path d="M 840 440 C 720 520, 480 520, 360 440" fill="none" stroke="url(#flowLeft)" strokeWidth="6" strokeDasharray="8 8" markerEnd="url(#arrowLeft)"/>
  </g>

  <g transform="translate(140, 0)">
    <ellipse cx="110" cy="540" rx="140" ry="20" fill="var(--bg-deep)"/>
    
    <rect x="0" y="300" width="220" height="220" rx="4" fill="var(--bg-deep)"/>
    <path d="M -20 300 L 240 300 L 200 230 L 20 230 Z" fill="var(--ink-12)"/>
    
    <rect x="80" y="400" width="60" height="120" fill="var(--ink-40)"/>
    <rect x="30" y="340" width="40" height="40" fill="var(--ink-40)"/>
    <rect x="150" y="340" width="40" height="40" fill="var(--ink-40)"/>
    
    <rect x="85" y="440" width="50" height="18" rx="4" fill="#EF4444"/>
    <text x="110" y="452.5" fontFamily="system-ui" fontWeight="bold" fontSize="10" fill="var(--bg-card)" textAnchor="middle">CLOSED</text>
    
    <rect x="20" y="255" width="180" height="30" fill="var(--bg-deep)" stroke="var(--ink-40)" strokeWidth="2"/>
    <text x="110" y="275" fontFamily="system-ui" fontWeight="bold" fontSize="14" fill="var(--ink-60)" textAnchor="middle">TRADITIONAL</text>
    <text x="110" y="600" fontFamily="system-ui" fontWeight="700" fontSize="20" fill="var(--ink-40)" textAnchor="middle">OFFLINE</text>
  </g>


  <g transform="translate(840, 0)">
    <ellipse cx="110" cy="540" rx="140" ry="20" fill="var(--bg-deep)"/>
    
    <rect x="0" y="300" width="220" height="220" rx="4" fill="var(--bg-card)" filter="url(#shadow)"/>
    <path d="M -20 300 L 240 300 L 200 230 L 20 230 Z" fill="url(#onlineRoofGrad)"/>
    
    <rect x="80" y="400" width="60" height="120" fill="var(--bg-deep)"/>
    <rect x="30" y="340" width="40" height="40" fill="var(--bg-deep)"/>
    <rect x="150" y="340" width="40" height="40" fill="var(--bg-deep)"/>
    
    <rect x="85" y="440" width="50" height="18" rx="4" fill="#10B981"/>
    <text x="110" y="452.5" fontFamily="system-ui" fontWeight="bold" fontSize="10" fill="var(--bg-card)" textAnchor="middle">OPEN</text>
    
    <rect x="20" y="255" width="180" height="30" fill="var(--bg-card)" filter="url(#shadow)"/>
    <text x="110" y="275" fontFamily="system-ui" fontWeight="bold" fontSize="14" fill="var(--amber)" textAnchor="middle">DIGITAL STORE</text>
    <text x="110" y="600" fontFamily="system-ui" fontWeight="700" fontSize="20" fill="var(--amber)" textAnchor="middle">ONLINE</text>

    <g transform="translate(90, 130)" filter="url(#shadow)">
      <path d="M 20 0 C 8.95 0 0 8.95 0 20 C 0 35 20 55 20 55 C 20 55 40 35 40 20 C 40 8.95 31.05 0 20 0 Z" fill="#EF4444"/>
      <circle cx="20" cy="20" r="8" fill="var(--bg-card)"/>
    </g>

    <rect x="60" y="500" width="100" height="28" rx="14" fill="var(--bg-card)" filter="url(#shadow)"/>
    <g transform="translate(70, 508)" fill="#FBBF24">
      <polygon points="6,0 7.8,4.2 12,4.5 8.7,7.4 9.8,11.5 6,9.2 2.2,11.5 3.3,7.4 0,4.5 4.2,4.2" />
      <polygon points="22,0 23.8,4.2 28,4.5 24.7,7.4 25.8,11.5 22,9.2 18.2,11.5 19.3,7.4 16,4.5 20.2,4.2" />
      <polygon points="38,0 39.8,4.2 44,4.5 40.7,7.4 41.8,11.5 38,9.2 34.2,11.5 35.3,7.4 32,4.5 36.2,4.2" />
      <polygon points="54,0 55.8,4.2 60,4.5 56.7,7.4 57.8,11.5 54,9.2 50.2,11.5 51.3,7.4 48,4.5 52.2,4.2" />
      <polygon points="70,0 71.8,4.2 76,4.5 72.7,7.4 73.8,11.5 70,9.2 66.2,11.5 67.3,7.4 64,4.5 68.2,4.2" />
    </g>

    <g transform="translate(200, 260)" filter="url(#shadow)">
      <rect x="0" y="0" width="70" height="120" rx="10" fill="var(--bg-card)"/>
      <rect x="5" y="5" width="60" height="110" rx="6" fill="var(--bg)"/>
      <circle cx="35" cy="15" r="3" fill="var(--ink-12)"/>
      <rect x="10" y="30" width="35" height="14" rx="6" fill="var(--bg-deep)"/>
      <rect x="25" y="50" width="35" height="14" rx="6" fill="#10B981"/>
      <rect x="10" y="70" width="25" height="14" rx="6" fill="var(--bg-deep)"/>
      <circle cx="60" cy="10" r="6" fill="#10B981"/>
    </g>

    <g transform="translate(-100, 410)" filter="url(#shadow)">
      <rect x="0" y="0" width="100" height="90" rx="8" fill="var(--bg-card)"/>
      <rect x="15" y="60" width="12" height="15" fill="#FBBF24" rx="2"/>
      <rect x="35" y="45" width="12" height="30" fill="#FBBF24" rx="2"/>
      <rect x="55" y="25" width="12" height="50" fill="#FBBF24" rx="2"/>
      <rect x="75" y="10" width="12" height="65" fill="#10B981" rx="2"/>
      <polyline points="20,55 40,35 60,15 80,0" fill="none" stroke="#EF4444" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
  </g>


  <g>
    <circle cx="600" cy="360" r="110" fill="rgba(198, 144, 10, 0.1)" opacity="0.4"/>
    <circle cx="600" cy="360" r="85" fill="rgba(198, 144, 10, 0.2)" opacity="0.6"/>
    
    <circle cx="600" cy="360" r="65" fill="url(#staplerGrad)" filter="url(#glow)"/>
    <text x="600" y="366" fontFamily="system-ui" fontWeight="900" fontSize="18" fill="var(--bg-card)" textAnchor="middle" letterSpacing="1">StaplerLabs</text>
    
    <g transform="translate(420, 220)" filter="url(#shadow)">
      <rect x="0" y="0" width="120" height="40" rx="20" fill="var(--bg-card)" stroke="var(--amber)" strokeWidth="2"/>
      <text x="60" y="25" fontFamily="system-ui" fontWeight="bold" fontSize="14" fill="var(--ink)" textAnchor="middle">Website</text>
    </g>

    <g transform="translate(680, 200)" filter="url(#shadow)">
      <rect x="0" y="0" width="120" height="40" rx="20" fill="var(--bg-card)" stroke="var(--amber)" strokeWidth="2"/>
      <text x="60" y="25" fontFamily="system-ui" fontWeight="bold" fontSize="14" fill="var(--ink)" textAnchor="middle">WhatsApp</text>
    </g>

    <g transform="translate(450, 480)" filter="url(#shadow)">
      <rect x="0" y="0" width="120" height="40" rx="20" fill="var(--bg-card)" stroke="var(--amber)" strokeWidth="2"/>
      <text x="60" y="25" fontFamily="system-ui" fontWeight="bold" fontSize="14" fill="var(--ink)" textAnchor="middle">Google</text>
    </g>
    
    <g transform="translate(650, 460)" filter="url(#shadow)">
      <rect x="0" y="0" width="120" height="40" rx="20" fill="var(--bg-card)" stroke="var(--amber)" strokeWidth="2"/>
      <text x="60" y="25" fontFamily="system-ui" fontWeight="bold" fontSize="14" fill="var(--ink)" textAnchor="middle">Social Media</text>
    </g>
  </g>

</svg>
    </div>
  );
}
