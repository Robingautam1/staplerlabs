import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import QuestionnaireForm from '@/components/questionnaire/QuestionnaireForm'

export default async function QuestionnairePage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/auth/login')
  }

  // Check if questionnaire already completed
  const { data: business } = await supabase
    .from('businesses')
    .select('questionnaire_completed')
    .eq('profile_id', user.id)
    .single()

  if (business?.questionnaire_completed) {
    redirect('/dashboard')
  }

  const userName = user.user_metadata?.full_name || ''

  return (
    <QuestionnaireForm
      userId={user.id}
      userEmail={user.email ?? ''}
      userName={userName}
    />
  )
}
