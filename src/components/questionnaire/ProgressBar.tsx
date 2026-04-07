'use client'

interface ProgressBarProps {
  currentStep: number
  totalSteps: number
}

export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  return (
    <div
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        height: '56px',
        background: 'white',
        borderBottom: '1px solid #E5E7EB',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
      }}
    >
      {/* Left — Logo */}
      <span
        style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '14px',
          fontWeight: 600,
          color: '#1A1A1A',
        }}
      >
        StaplerLabs
      </span>

      {/* Center — Step dots */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0px' }}>
        {Array.from({ length: totalSteps }, (_, i) => {
          const step = i + 1
          const isCompleted = step < currentStep
          const isCurrent = step === currentStep
          return (
            <div key={step} style={{ display: 'flex', alignItems: 'center' }}>
              {/* Connecting line before dot (except first) */}
              {i > 0 && (
                <div
                  style={{
                    width: '32px',
                    height: '2px',
                    background: '#E5E7EB',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      height: '100%',
                      width: isCompleted || isCurrent ? '100%' : '0%',
                      background: '#1A1A1A',
                      transition: 'width 0.4s ease',
                    }}
                  />
                </div>
              )}
              {/* Dot */}
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: isCompleted || isCurrent ? '#1A1A1A' : '#E5E7EB',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  transition: 'background 0.3s ease',
                }}
              >
                {isCompleted ? (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 6L5 8.5L9.5 3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  <span
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: '11px',
                      fontWeight: 600,
                      color: isCurrent ? 'white' : '#9CA3AF',
                    }}
                  >
                    {step}
                  </span>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Right — Step label */}
      <span
        style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '13px',
          color: '#6B7280',
        }}
      >
        Step {currentStep} of {totalSteps}
      </span>
    </div>
  )
}
