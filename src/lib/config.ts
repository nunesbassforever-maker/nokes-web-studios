import { createClient } from '@/lib/supabase-browser'

export const WHATSAPP_NUMBER = '5527989020157'
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`
export const ADMIN_EMAIL = 'nunes.bass.forever@gmail.com'
export const supabase = createClient()
