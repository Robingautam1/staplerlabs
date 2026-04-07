import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'

export async function POST(request: Request) {
  try {
    // Check admin
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const { data: adminProfile } = await supabase
      .from('profiles')
      .select('is_admin')
      .eq('id', user.id)
      .single()

    if (!adminProfile?.is_admin) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const admin = createAdminClient()
    const { profile_id, business_id, consultant_name } = await request.json()

    if (!profile_id || !consultant_name) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // 1. Upsert consultant assignment
    const { error: assignError } = await admin
      .from('consultant_assignments')
      .upsert(
        {
          profile_id,
          business_id: business_id || null,
          status: 'assigned',
          assigned_at: new Date().toISOString(),
          session_notes: consultant_name,
        },
        { onConflict: 'profile_id' }
      )

    if (assignError) {
      console.error('Assignment upsert error:', JSON.stringify(assignError))
      return NextResponse.json({ error: 'Failed to assign consultant' }, { status: 500 })
    }

    // 2. Insert notification
    try {
      await admin.from('notifications').insert({
        profile_id,
        type: 'consultant_assigned',
        title: 'Your consultant has been assigned',
        message: `${consultant_name} will be calling you at your preferred time. Get ready for your strategy session.`,
      })
    } catch (e) {
      console.error('Notification insert failed:', e)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Assign consultant error:', error instanceof Error ? error.message : error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
