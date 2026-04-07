'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import ProgressBar from './ProgressBar'
import StepTransition from './StepTransition'

/* ── Question type ── */
type Question = {
  id: string
  step: number
  label: string
  type: 'text' | 'select' | 'radio' | 'checkbox' | 'textarea' | 'tel' | 'url'
  options?: string[]
  placeholder?: string
  helpText?: string
  required: boolean
  sectors?: string[]
  maxLength?: number
  showIf?: (formData: Record<string, unknown>) => boolean
}

/* ══════════════════════════════════════
   STEP 1 — WHO YOU ARE
   ══════════════════════════════════════ */
const step1Questions: Question[] = [
  { id: 'business_name', step: 1, label: 'What is your business called?', type: 'text', placeholder: 'e.g. Sharma Dental Clinic', required: true },
  { id: 'owner_name', step: 1, label: 'Your name', type: 'text', placeholder: 'Your full name', required: true },
  { id: 'city', step: 1, label: 'Which city is your primary business location?', type: 'text', placeholder: 'e.g. Lucknow, Pune, Surat', helpText: 'We use this to analyse your local competitors.', required: true },
  {
    id: 'sector', step: 1, label: 'What type of business are you?', type: 'select', required: true,
    helpText: 'This determines which questions come next.',
    options: [
      'Healthcare and Dental', 'Chartered Accountants and Law', 'Coaching and Education',
      'Retail and Fashion', 'Restaurants and Food', 'Real Estate',
      'Wellness — Gym and Fitness', 'Salon and Spa', 'Logistics and Transport',
      'Interior Design and Architecture', 'Diagnostic Labs and Pharmacy',
      'Manufacturing and Distribution', 'Photography and Events', 'Other',
    ],
  },
]

/* ══════════════════════════════════════
   STEP 2 — YOUR SCALE
   ══════════════════════════════════════ */
const step2Questions: Question[] = [
  { id: 'years_in_operation', step: 2, label: 'How long has your business been running?', type: 'select', options: ['Less than 1 year', '1 to 3 years', '3 to 5 years', '5 to 10 years', 'More than 10 years'], required: true },
  { id: 'employee_count', step: 2, label: 'How many people work in your business?', type: 'select', options: ['Just me', '2 to 5', '6 to 15', '16 to 50', 'More than 50'], required: true },
  {
    id: 'annual_revenue_range', step: 2, label: 'Approximate annual revenue', type: 'select', required: false,
    helpText: 'Completely fine if you would rather not share this. Select the last option and we will discuss on our call. This only helps us benchmark your position accurately.',
    options: ['Below Rs. 50 Lakh', 'Rs. 50 Lakh to Rs. 1 Crore', 'Rs. 1 Crore to Rs. 5 Crore', 'Rs. 5 Crore to Rs. 20 Crore', 'Rs. 20 Crore to Rs. 50 Crore', 'Above Rs. 50 Crore', 'Prefer not to say — will discuss on call'],
  },
  { id: 'locations_count', step: 2, label: 'How many locations or branches do you operate?', type: 'select', options: ['Single location', '2 to 3 locations', '4 to 10 locations', 'More than 10 locations'], required: true },
]

/* ══════════════════════════════════════
   STEP 3 — DIGITAL PRESENCE
   ══════════════════════════════════════ */
const step3Questions: Question[] = [
  { id: 'has_website', step: 3, label: 'Do you have a website?', type: 'radio', options: ['Yes, and it works well', 'Yes, but it is outdated', 'Yes, but I am not sure how it is performing', 'No, I do not have one'], required: true },
  {
    id: 'website_url', step: 3, label: 'What is your website URL?', type: 'url', placeholder: 'https://yourwebsite.com',
    helpText: 'Leave blank if you do not have one.', required: false,
    showIf: (fd) => fd.has_website !== 'No, I do not have one' && !!fd.has_website,
  },
  { id: 'has_google_listing', step: 3, label: 'Are you listed on Google Maps?', type: 'radio', options: ['Yes, with good reviews', 'Yes, but with few or no reviews', 'I think so but I am not sure', 'No'], required: true },
  { id: 'has_whatsapp_business', step: 3, label: 'Do you use WhatsApp to communicate with customers?', type: 'radio', options: ['Yes, actively', 'Sometimes', 'No, but I want to', 'No'], required: true },
  { id: 'social_media_platforms', step: 3, label: 'Which social media platforms does your business use?', type: 'checkbox', options: ['Instagram', 'Facebook', 'YouTube', 'LinkedIn', 'None'], required: false },
]

/* ══════════════════════════════════════
   STEP 4 — SECTOR-SPECIFIC
   ══════════════════════════════════════ */
const sectorQuestions: Record<string, Question[]> = {
  'Healthcare and Dental': [
    { id: 'appointments_per_week', step: 4, label: 'How many patient appointments do you see in a week?', type: 'select', options: ['Less than 20', '20 to 50', '50 to 100', 'More than 100'], required: true },
    { id: 'patient_source', step: 4, label: 'How do most new patients find you currently?', type: 'radio', options: ['Word of mouth only', 'Referrals from other doctors', 'Practo or similar platforms', 'Walk-ins', 'Mix of the above'], required: true },
    { id: 'biggest_challenge_health', step: 4, label: 'What is your biggest challenge right now?', type: 'radio', options: ['Not enough new patients', 'Patients going to competitors', 'Patients travelling to bigger cities', 'No online presence to build trust', 'Staff spending too much time on phone bookings'], required: true },
  ],
  'Chartered Accountants and Law': [
    { id: 'active_clients', step: 4, label: 'How many active clients do you currently serve?', type: 'select', options: ['Less than 25', '25 to 100', '100 to 300', 'More than 300'], required: true },
    { id: 'client_source_ca', step: 4, label: 'How do most new clients find you?', type: 'radio', options: ['Almost entirely referrals', 'Mix of referrals and online', 'Word of mouth in community', 'Cold outreach'], required: true },
    { id: 'biggest_challenge_ca', step: 4, label: 'What is your biggest challenge right now?', type: 'radio', options: ['Getting clients outside my existing network', 'Building credibility online', 'Competing with larger firms', 'Retaining clients long-term', 'No digital presence at all'], required: true },
  ],
  'Coaching and Education': [
    { id: 'students_enrolled', step: 4, label: 'How many students are currently enrolled?', type: 'select', options: ['Less than 50', '50 to 200', '200 to 500', 'More than 500'], required: true },
    { id: 'student_source', step: 4, label: 'How do most new students find you?', type: 'radio', options: ['Word of mouth and referrals', 'Local advertising', 'Online search', 'Social media', 'Walk-ins'], required: true },
    { id: 'biggest_challenge_edu', step: 4, label: 'What is your biggest challenge right now?', type: 'radio', options: ['Competition from online platforms', 'Not enough new enrollments', 'Retaining students each batch', 'Building credibility in new areas', 'No online presence'], required: true },
  ],
  'Retail and Fashion': [
    { id: 'sells_online', step: 4, label: 'Do you currently sell online?', type: 'radio', options: ['Yes, with my own website', 'Yes, on marketplaces like Amazon or Meesho', 'No, only offline', 'Planning to start soon'], required: true },
    { id: 'customer_discovery_retail', step: 4, label: 'How do most customers discover your store?', type: 'radio', options: ['Walk-ins and footfall', 'Word of mouth', 'Instagram or social media', 'Local advertising', 'Online search'], required: true },
    { id: 'biggest_challenge_retail', step: 4, label: 'What is your biggest challenge right now?', type: 'radio', options: ['Competing with online brands', 'Getting customers beyond my local area', 'Inconsistent footfall', 'No online sales channel', 'Building brand awareness'], required: true },
  ],
  'Restaurants and Food': [
    { id: 'covers_per_day', step: 4, label: 'How many customers do you serve on an average day?', type: 'select', options: ['Less than 50', '50 to 150', '150 to 400', 'More than 400'], required: true },
    { id: 'food_delivery', step: 4, label: 'Are you on food delivery platforms?', type: 'radio', options: ['Yes, Zomato and Swiggy both', 'Yes, one of them', 'No, dine-in only', 'Planning to list soon'], required: true },
    { id: 'biggest_challenge_food', step: 4, label: 'What is your biggest challenge right now?', type: 'radio', options: ['Inconsistent footfall', 'Heavy commission on delivery platforms', 'Building repeat customers', 'Standing out in a crowded market', 'No online visibility or reviews'], required: true },
  ],
  'Real Estate': [
    { id: 'properties_listed', step: 4, label: 'How many active listings do you typically handle?', type: 'select', options: ['Less than 10', '10 to 50', '50 to 200', 'More than 200'], required: true },
    { id: 'client_source_re', step: 4, label: 'How do most clients find you?', type: 'radio', options: ['Referrals and network', 'Property portals like MagicBricks or 99acres', 'Social media', 'Local advertising', 'Walk-ins to office'], required: true },
    { id: 'biggest_challenge_re', step: 4, label: 'What is your biggest challenge right now?', type: 'radio', options: ['Generating quality leads online', 'Standing out from other agents', 'Building trust with new clients', 'Competing with larger developers', 'No digital presence at all'], required: true },
  ],
  'Wellness — Gym and Fitness': [
    { id: 'active_members', step: 4, label: 'How many active members do you have?', type: 'select', options: ['Less than 100', '100 to 300', '300 to 700', 'More than 700'], required: true },
    { id: 'member_source', step: 4, label: 'How do most new members find you?', type: 'radio', options: ['Walk-ins and word of mouth', 'Instagram and social media', 'Google search', 'Local advertising', 'Referrals from existing members'], required: true },
    { id: 'biggest_challenge_wellness', step: 4, label: 'What is your biggest challenge right now?', type: 'radio', options: ['Retaining members month to month', 'Competing with larger chains', 'Getting new members consistently', 'Seasonal drop in membership', 'No online visibility'], required: true },
  ],
  'Salon and Spa': [
    { id: 'appointments_per_day', step: 4, label: 'How many appointments do you handle per day?', type: 'select', options: ['Less than 10', '10 to 25', '25 to 50', 'More than 50'], required: true },
    { id: 'booking_method', step: 4, label: 'How do customers currently book with you?', type: 'radio', options: ['Phone calls only', 'Walk-ins only', 'WhatsApp messages', 'Mix of above', 'Online booking platform'], required: true },
    { id: 'biggest_challenge_salon', step: 4, label: 'What is your biggest challenge right now?', type: 'radio', options: ['Getting new customers consistently', 'Retaining existing customers', 'Competing with premium chains', 'Managing bookings efficiently', 'No online visibility or reviews'], required: true },
  ],
}

const genericStep4Questions: Question[] = [
  { id: 'customers_per_month', step: 4, label: 'How many customers or clients do you serve per month approximately?', type: 'select', options: ['Less than 50', '50 to 200', '200 to 500', 'More than 500'], required: true },
  { id: 'customer_source_generic', step: 4, label: 'How do most new customers find you currently?', type: 'radio', options: ['Word of mouth only', 'Referrals', 'Online search', 'Social media', 'Walk-ins or footfall', 'Mix of above'], required: true },
  { id: 'biggest_challenge_generic', step: 4, label: 'What is your biggest challenge right now?', type: 'radio', options: ['Not enough new customers', 'Customers going to competitors', 'No online presence', 'Building trust with new customers', 'Managing operations digitally'], required: true },
]

/* ══════════════════════════════════════
   STEP 5 — GOALS AND CONTACT
   ══════════════════════════════════════ */
const step5Questions: Question[] = [
  { id: 'success_definition', step: 5, label: 'What does success look like for your business in 6 months from now?', type: 'textarea', placeholder: 'Be as specific as you like. There are no wrong answers here.', helpText: 'This is the most important question. Your consultant will refer to this answer in every session.', required: true, maxLength: 500 },
  { id: 'biggest_competitor', step: 5, label: 'Who do you consider your biggest competitor right now?', type: 'text', placeholder: 'A business name, a type of business, or a platform', helpText: 'Could be a local business, a chain, or even an app like Practo or Zomato.', required: false },
  { id: 'whatsapp_number', step: 5, label: 'Your WhatsApp number for report delivery', type: 'tel', placeholder: '+91 98765 43210', helpText: 'We will send your Business Intelligence Report here the moment it is ready. We do not add you to any groups or broadcast lists.', required: true },
  { id: 'best_time_to_call', step: 5, label: 'Best time for our consultant to call you', type: 'radio', options: ['Before 10 AM', '10 AM to 1 PM', '2 PM to 5 PM', 'After 7 PM', 'Weekends only'], required: true },
]

/* ── Step headings ── */
const stepHeadings: Record<number, { label: string; heading: string }> = {
  1: { label: 'WHO YOU ARE', heading: 'Tell us who you are.' },
  2: { label: 'YOUR SCALE', heading: 'Tell us about your scale.' },
  3: { label: 'DIGITAL PRESENCE', heading: 'What does your online presence look like today?' },
  4: { label: 'YOUR SECTOR', heading: 'Now the real questions.' },
  5: { label: 'GOALS & CONTACT', heading: 'Almost done. Where do we send your report?' },
}

/* ── Shared styles ── */
const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px 16px',
  border: '1.5px solid #E5E7EB',
  borderRadius: '10px',
  fontFamily: 'DM Sans, sans-serif',
  fontSize: '15px',
  color: '#1A1A1A',
  background: 'white',
  outline: 'none',
  transition: 'border-color 0.15s',
  boxSizing: 'border-box',
}

const errorInputStyle: React.CSSProperties = {
  ...inputStyle,
  borderColor: '#EF4444',
  background: '#FFF5F5',
}

/* ══════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════ */
interface QuestionnaireFormProps {
  userId: string
  userEmail: string
  userName?: string
}

export default function QuestionnaireForm({ userId, userEmail, userName }: QuestionnaireFormProps) {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [showTransition, setShowTransition] = useState(false)
  const [formData, setFormData] = useState<Record<string, unknown>>({
    owner_name: userName || '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  // Restore draft from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('sl_questionnaire_draft')
      if (saved) {
        const parsed = JSON.parse(saved)
        setFormData((prev) => ({ ...prev, ...parsed }))
      }
    } catch { /* ignore */ }
  }, [])

  // Persist draft
  useEffect(() => {
    localStorage.setItem('sl_questionnaire_draft', JSON.stringify(formData))
  }, [formData])

  const getStep4Questions = (sector: string): Question[] => {
    return sectorQuestions[sector] || genericStep4Questions
  }

  const getQuestionsForStep = (step: number): Question[] => {
    switch (step) {
      case 1: return step1Questions
      case 2: return step2Questions
      case 3: return step3Questions.filter((q) => !q.showIf || q.showIf(formData))
      case 4: return getStep4Questions(formData.sector as string || '')
      case 5: return step5Questions
      default: return []
    }
  }

  const validateStep = (step: number): boolean => {
    const questions = getQuestionsForStep(step)
    const newErrors: Record<string, string> = {}
    questions.forEach((q) => {
      if (q.required) {
        const val = formData[q.id]
        if (!val || (typeof val === 'string' && val.trim() === '') || (Array.isArray(val) && val.length === 0)) {
          newErrors[q.id] = 'This field is required'
        }
      }
    })
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (id: string, value: unknown) => {
    setFormData((prev) => ({ ...prev, [id]: value }))
    setErrors((prev) => {
      const next = { ...prev }
      delete next[id]
      return next
    })
  }

  const handleCheckboxChange = (id: string, option: string) => {
    setFormData((prev) => {
      const current = (prev[id] as string[]) || []
      if (option === 'None') return { ...prev, [id]: current.includes('None') ? [] : ['None'] }
      const without = current.filter((v) => v !== 'None')
      return { ...prev, [id]: without.includes(option) ? without.filter((v) => v !== option) : [...without, option] }
    })
    setErrors((prev) => { const next = { ...prev }; delete next[id]; return next })
  }

  const handleTransitionComplete = useCallback(() => {
    setShowTransition(false)
    setCurrentStep((prev) => prev + 1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const handleNextStep = () => {
    if (!validateStep(currentStep)) return
    setShowTransition(true)
  }

  const handlePrevStep = () => {
    setCurrentStep((prev) => prev - 1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSubmit = async () => {
    if (!validateStep(5)) return
    setIsSubmitting(true)
    try {
      const res = await fetch('/api/questionnaire/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, userEmail, formData }),
      })
      if (!res.ok) throw new Error('Submission failed')
      localStorage.removeItem('sl_questionnaire_draft')
      router.push('/dashboard?submitted=true')
    } catch {
      setErrors({ _form: 'Something went wrong. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const questions = getQuestionsForStep(currentStep)
  const stepInfo = stepHeadings[currentStep]

  /* ── Render a single question ── */
  const renderQuestion = (q: Question) => {
    const hasError = !!errors[q.id]
    return (
      <div key={q.id} style={{ marginBottom: '24px' }}>
        <label
          style={{
            display: 'block',
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '15px',
            fontWeight: 600,
            color: '#1A1A1A',
            marginBottom: '8px',
          }}
        >
          {q.label}
          {q.required && <span style={{ color: '#EF4444', marginLeft: '4px' }}>*</span>}
        </label>

        {/* Text / URL / Tel */}
        {(q.type === 'text' || q.type === 'url' || q.type === 'tel') && (
          <input
            type={q.type === 'tel' ? 'tel' : q.type === 'url' ? 'url' : 'text'}
            value={(formData[q.id] as string) || ''}
            onChange={(e) => handleChange(q.id, e.target.value)}
            placeholder={q.placeholder}
            style={hasError ? errorInputStyle : inputStyle}
            onFocus={(e) => (e.target.style.borderColor = '#1A1A1A')}
            onBlur={(e) => (e.target.style.borderColor = hasError ? '#EF4444' : '#E5E7EB')}
          />
        )}

        {/* Textarea */}
        {q.type === 'textarea' && (
          <textarea
            value={(formData[q.id] as string) || ''}
            onChange={(e) => handleChange(q.id, e.target.value)}
            placeholder={q.placeholder}
            maxLength={q.maxLength}
            rows={4}
            style={{ ...( hasError ? errorInputStyle : inputStyle), resize: 'vertical', minHeight: '100px' }}
            onFocus={(e) => (e.target.style.borderColor = '#1A1A1A')}
            onBlur={(e) => (e.target.style.borderColor = hasError ? '#EF4444' : '#E5E7EB')}
          />
        )}

        {/* Select */}
        {q.type === 'select' && (
          <div style={{ position: 'relative' }}>
            <select
              value={(formData[q.id] as string) || ''}
              onChange={(e) => handleChange(q.id, e.target.value)}
              style={{
                ...(hasError ? errorInputStyle : inputStyle),
                appearance: 'none',
                paddingRight: '40px',
                cursor: 'pointer',
              }}
            >
              <option value="">Select an option</option>
              {q.options?.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
            {/* Chevron */}
            <svg
              width="12" height="12" viewBox="0 0 12 12" fill="none"
              style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}
            >
              <path d="M3 4.5L6 7.5L9 4.5" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        )}

        {/* Radio */}
        {q.type === 'radio' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {q.options?.map((opt) => {
              const selected = formData[q.id] === opt
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => handleChange(q.id, opt)}
                  style={{
                    background: selected ? '#F9FAFB' : 'white',
                    border: `1.5px solid ${selected ? '#1A1A1A' : hasError ? '#EF4444' : '#E5E7EB'}`,
                    borderRadius: '10px',
                    padding: '12px 16px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    textAlign: 'left',
                    transition: 'all 0.15s',
                    width: '100%',
                  }}
                >
                  <div
                    style={{
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      border: `2px solid ${selected ? '#1A1A1A' : '#D1D5DB'}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'all 0.15s',
                    }}
                  >
                    {selected && <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#1A1A1A' }} />}
                  </div>
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#374151' }}>{opt}</span>
                </button>
              )
            })}
          </div>
        )}

        {/* Checkbox */}
        {q.type === 'checkbox' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {q.options?.map((opt) => {
              const current = (formData[q.id] as string[]) || []
              const checked = current.includes(opt)
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => handleCheckboxChange(q.id, opt)}
                  style={{
                    background: checked ? '#F9FAFB' : 'white',
                    border: `1.5px solid ${checked ? '#1A1A1A' : '#E5E7EB'}`,
                    borderRadius: '10px',
                    padding: '12px 16px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    textAlign: 'left',
                    transition: 'all 0.15s',
                    width: '100%',
                  }}
                >
                  <div
                    style={{
                      width: '18px',
                      height: '18px',
                      borderRadius: '4px',
                      border: `2px solid ${checked ? '#1A1A1A' : '#D1D5DB'}`,
                      background: checked ? '#1A1A1A' : 'transparent',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'all 0.15s',
                    }}
                  >
                    {checked && (
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5L4 7L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#374151' }}>{opt}</span>
                </button>
              )
            })}
          </div>
        )}

        {/* Help text */}
        {q.helpText && (
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: '#9CA3AF', fontStyle: 'italic', marginTop: '6px' }}>
            {q.helpText}
          </p>
        )}

        {/* Error */}
        {hasError && (
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: '#EF4444', marginTop: '4px' }}>
            {errors[q.id]}
          </p>
        )}
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: '#F2F0EB' }}>
      <ProgressBar currentStep={currentStep} totalSteps={5} />

      {showTransition && (
        <StepTransition completedStep={currentStep} onComplete={handleTransitionComplete} />
      )}

      <div style={{ maxWidth: '640px', width: '100%', margin: '0 auto', padding: '24px 16px 60px' }}>
        {/* Back button */}
        {currentStep > 1 && (
          <button
            onClick={handlePrevStep}
            type="button"
            style={{
              background: 'none',
              border: 'none',
              fontFamily: 'DM Sans, sans-serif',
              fontSize: '14px',
              color: '#6B7280',
              cursor: 'pointer',
              marginBottom: '16px',
              padding: 0,
            }}
          >
            &larr; Back
          </button>
        )}

        {/* Step label */}
        <p
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#9CA3AF',
            marginBottom: '8px',
          }}
        >
          STEP {currentStep} OF 5 &mdash; {stepInfo.label}
        </p>

        {/* Form card */}
        <div
          style={{
            background: 'white',
            borderRadius: '20px',
            padding: '40px',
            boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
          }}
        >
          <h2
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '24px',
              fontWeight: 400,
              color: '#1A1A1A',
              marginBottom: '24px',
            }}
          >
            {stepInfo.heading}
          </h2>

          {/* Form-level error */}
          {errors._form && (
            <div style={{ background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: '8px', padding: '12px', marginBottom: '16px', fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#EF4444' }}>
              {errors._form}
            </div>
          )}

          {questions.map(renderQuestion)}

          {/* Action button */}
          {currentStep < 5 ? (
            <button
              onClick={handleNextStep}
              type="button"
              style={{
                width: '100%',
                background: '#1A1A1A',
                color: 'white',
                borderRadius: '100px',
                padding: '14px',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '15px',
                fontWeight: 500,
                border: 'none',
                cursor: 'pointer',
                marginTop: '8px',
              }}
            >
              Continue &rarr;
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              type="button"
              disabled={isSubmitting}
              style={{
                width: '100%',
                background: '#1A1A1A',
                color: 'white',
                borderRadius: '100px',
                padding: '14px',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '15px',
                fontWeight: 500,
                border: 'none',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                opacity: isSubmitting ? 0.5 : 1,
                marginTop: '8px',
              }}
            >
              {isSubmitting ? 'Submitting...' : 'Submit & Get Your Report'}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
