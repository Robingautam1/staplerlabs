export type Profile = {
  id: string
  email: string
  full_name: string | null
  phone: string | null
  is_admin: boolean
  created_at: string
  updated_at: string
}

export type Business = {
  id: string
  profile_id: string
  business_name: string | null
  owner_name: string | null
  business_type: string | null
  sector: string | null
  city: string | null
  state: string | null
  annual_revenue_range: string | null
  years_in_operation: number | null
  employee_count: string | null
  has_website: boolean
  website_url: string | null
  has_google_listing: boolean
  has_whatsapp_business: boolean
  has_social_media: boolean
  social_media_platforms: string[] | null
  primary_challenge: string | null
  biggest_competitor: string | null
  monthly_leads: number | null
  current_digital_spend: string | null
  goal: string | null
  additional_notes: string | null
  questionnaire_completed: boolean
  questionnaire_completed_at: string | null
  created_at: string
  updated_at: string
}

export type DiagnosticReport = {
  id: string
  business_id: string
  profile_id: string
  status: 'pending' | 'in_progress' | 'completed' | 'delivered'
  business_index_score: number | null
  visibility_score: number | null
  digital_presence_score: number | null
  competitive_position_score: number | null
  customer_acquisition_score: number | null
  online_visibility_rating: 'Critical' | 'Low' | 'Medium' | 'Good' | 'Excellent' | null
  competitors_found: number
  critical_gaps: number
  gap_analysis: GapItem[]
  recommendations: RecommendationItem[]
  competitor_details: CompetitorItem[]
  roadmap: RoadmapData | null
  report_pdf_url: string | null
  report_pdf_path: string | null
  admin_notes: string | null
  prepared_by: string | null
  requested_at: string
  completed_at: string | null
  delivered_at: string | null
  created_at: string
  updated_at: string
}

export type GapItem = {
  severity: 'critical' | 'high' | 'medium'
  description: string
  impact: string
}

export type RecommendationItem = {
  priority: number
  title: string
  description: string
  estimated_impact: string
  execution_month?: number
}

export type CompetitorItem = {
  name: string
  digital_strength: 'strong' | 'moderate' | 'weak'
  platforms: string[]
  activity_level?: 'Very Active' | 'Active' | 'Moderate' | 'Low'
  estimated_ad_spend: string | null
}

export type RoadmapData = {
  month1: string[]
  month2: string[]
  month3: string[]
}

export type Payment = {
  id: string
  profile_id: string
  business_id: string
  amount: number
  currency: string
  payment_type: 'diagnostic_fee' | 'starter_bundle' | 'strategic_retainer'
  payment_method: 'upi' | 'razorpay' | 'bank_transfer' | 'manual'
  status: 'pending' | 'completed' | 'failed' | 'refunded'
  upi_transaction_id: string | null
  razorpay_payment_id: string | null
  razorpay_order_id: string | null
  payment_screenshot_url: string | null
  verified_by: string | null
  verified_at: string | null
  admin_notes: string | null
  initiated_at: string
  completed_at: string | null
  created_at: string
  updated_at: string
}

export type ConsultantAssignment = {
  id: string
  profile_id: string
  business_id: string
  consultant_id: string | null
  payment_id: string | null
  status: 'pending' | 'assigned' | 'active' | 'completed'
  scheduled_at: string | null
  completed_at: string | null
  session_notes: string | null
  assigned_at: string | null
  created_at: string
  updated_at: string
}

export type Notification = {
  id: string
  profile_id: string
  type:
    | 'report_ready'
    | 'consultant_assigned'
    | 'payment_confirmed'
    | 'payment_pending'
    | 'welcome'
    | 'general'
  title: string
  message: string
  is_read: boolean
  action_url: string | null
  created_at: string
}

export type DashboardData = {
  profile: Profile
  business: Business | null
  report: DiagnosticReport | null
  payment: Payment | null
  assignment: ConsultantAssignment | null
  notifications: Notification[]
}
