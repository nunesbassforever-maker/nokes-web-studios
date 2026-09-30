'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 700))
    console.log('Login tentativa', { email, password })
    setLoading(false)
  }

  return (
    <section className="mx-auto max-w-md px-4 py-28 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
        <p className="text-xs uppercase tracking-[0.22em] text-cyan-400">ÁREA DO CLIENTE</p>
        <h1 className="mt-4 text-4xl font-black">Entrar</h1>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <label className="block space-y-2">
            <span className="text-sm text-gray-300">Email</span>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-md border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-cyan-400" placeholder="seu@email.com" required />
          </label>

          <label className="block space-y-2">
            <span className="text-sm text-gray-300">Senha</span>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full rounded-md border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-cyan-400" placeholder="••••••••" required />
          </label>

          <div className="flex items-center justify-between text-sm text-gray-300">
            <Link href="/auth/reset-password" className="hover:text-white">Esqueci a senha</Link>
            <Link href="/auth/register" className="hover:text-white">Criar conta</Link>
          </div>

          <button type="submit" disabled={loading} className="w-full rounded-md bg-cyan-400 px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-cyan-300 disabled:opacity-60">
            {loading ? 'ENTRANDO...' : 'ENTRAR'}
          </button>
        </form>
      </div>
    </section>
  )
}
