'use client'

import { useRouter } from 'next/navigation'
import { useAuth } from './useAuth'
import { useEffect } from 'react'

export function useProtectedRoute(requiredRole?: string) {
  const router = useRouter()
  const { user, loading, role } = useAuth()

  useEffect(() => {
    if (loading) return

    if (!user) {
      router.push('/auth/login')
      return
    }

    if (requiredRole && role !== requiredRole) {
      router.push('/')
      return
    }
  }, [user, loading, role, requiredRole, router])

  return { user, loading, role }
}
