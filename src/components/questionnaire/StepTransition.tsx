'use client'

import { useEffect, useState } from 'react'

const transitionContent: Record<number, { headline: string; subtext: string }> = {
  1: {
    headline: 'Good start.',
    subtext: 'We know who you are. Step 2 is about understanding your scale — takes about 2 minutes.',
  },
  2: {
    headline: 'You have built something real.',
    subtext: 'Now let us see what the internet knows about you. This is usually where the gap shows up.',
  },
  3: {
    headline: 'This is where most businesses have the biggest gap.',
    subtext: 'You are being more honest than most. One more section and we get to the real problems.',
  },
  4: {
    headline: 'Almost there.',
    subtext: 'Last step. Tell us where to send your report and the best time to reach you.',
  },
}

interface StepTransitionProps {
  completedStep: number
  onComplete: () => void
}

export default function StepTransition({ completedStep, onComplete }: StepTransitionProps) {
  const [show, setShow] = useState(false)
  const [progress, setProgress] = useState(false)

  useEffect(() => {
    // Trigger entrance animation
    const showTimer = setTimeout(() => setShow(true), 50)
    const progressTimer = setTimeout(() => setProgress(true), 150)
    const advanceTimer = setTimeout(() => onComplete(), 2500)
    return () => {
      clearTimeout(showTimer)
      clearTimeout(progressTimer)
      clearTimeout(advanceTimer)
    }
  }, [onComplete])

  const content = transitionContent[completedStep]
  if (!content) return null

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: '#F2F0EB',
        zIndex: 100,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: show ? 1 : 0,
        transition: 'opacity 0.3s ease',
      }}
    >
      {/* Animated checkmark circle */}
      <div
        style={{
          width: '72px',
          height: '72px',
          borderRadius: '50%',
          background: '#1A1A1A',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: show ? 'scale(1)' : 'scale(0)',
          transition: 'transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
          marginBottom: '24px',
        }}
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path
            d="M8 16L14 22L24 10"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              strokeDasharray: 40,
              strokeDashoffset: show ? 0 : 40,
              transition: 'stroke-dashoffset 0.4s ease 0.2s',
            }}
          />
        </svg>
      </div>

      {/* Headline */}
      <h2
        style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: '28px',
          fontWeight: 400,
          color: '#1A1A1A',
          textAlign: 'center',
          marginBottom: '12px',
        }}
      >
        {content.headline}
      </h2>

      {/* Subtext */}
      <p
        style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '15px',
          color: '#6B7280',
          textAlign: 'center',
          maxWidth: '400px',
          lineHeight: 1.6,
          marginBottom: '32px',
          padding: '0 24px',
        }}
      >
        {content.subtext}
      </p>

      {/* Countdown progress bar */}
      <div
        style={{
          width: '200px',
          height: '3px',
          background: '#E5E7EB',
          borderRadius: '100px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            height: '100%',
            background: '#1A1A1A',
            borderRadius: '100px',
            width: progress ? '100%' : '0%',
            transition: 'width 2.35s linear',
          }}
        />
      </div>
    </div>
  )
}
