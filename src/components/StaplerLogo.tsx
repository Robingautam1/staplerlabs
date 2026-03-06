export default function StaplerLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Base of stapler */}
      <path
        d="M8 40 L56 40 L56 48 Q56 52 52 52 L12 52 Q8 52 8 48 Z"
        fill="#F0F0F0"
      />
      {/* Top arm of stapler */}
      <path
        d="M12 40 L12 28 Q12 24 16 24 L48 24 Q52 24 52 28 L52 34"
        stroke="#F0F0F0"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M12 28 Q12 24 16 24 L48 24 Q52 24 52 28 L52 34 L16 34 L12 28Z"
        fill="#F0F0F0"
      />
      {/* Yellow hinge ring */}
      <circle cx="12" cy="38" r="5" fill="#FFD000" />
      <circle cx="12" cy="38" r="2.5" fill="#0A0A0A" />
      {/* Yellow staple mid-action */}
      <path
        d="M28 48 L28 56 L40 56 L40 48"
        stroke="#FFD000"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
