'use client'

import { useState } from 'react'
import { supabase } from '@/lib/config'
import { useRouter } from 'next/navigation'

export function useAuthForm() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function signIn(email: string, password: string) {
    setLoading(true); setError(null)
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    setLoading(false)
    if (error) { setError(error.message); return }
    router.push('/dashboard'); router.refresh()
  }

  async function signUp(email: string, password: string, fullName: string, companyName: string) {
    setLoading(true); setError(null)
    const { data, error } = await supabase.auth.signUp({ email, password, options: { data: { full_name: fullName, company_name: companyName } } })
    if (!error && data.user && !data.session) { setError('Conta criada. Confirme seu email para entrar.') }
    if (error) setError(error.message)
    setLoading(false)
    if (!error && data.session) router.push('/dashboard')
  }

  async function resetPassword(email: string) {
    setLoading(true); setError(null)
    const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo: `${window.location.origin}/auth/update-password` })
    setLoading(false); if (error) setError(error.message)
  }

  return { signIn, signUp, resetPassword, loading, error }
}
