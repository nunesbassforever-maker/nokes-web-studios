'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function RegisterPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '', company: '' })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 700))
    console.log('Cadastro', form)
    setLoading(false)
  }

  return (
    <section className="mx-auto max-w-md px-4 py-28 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
        <p className="text-xs uppercase tracking-[0.22em] text-cyan-400">CRIAR CONTA</p>
        <h1 className="mt-4 text-4xl font-black">Cadastro</h1>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <label className="block space-y-2">
            <span className="text-sm text-gray-300">Nome completo</span>
            <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full rounded-md border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-cyan-400" placeholder="Seu nome" required />
          </label>

          <label className="block space-y-2">
            <span className="text-sm text-gray-300">Empresa</span>
            <input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="w-full rounded-md border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-cyan-400" placeholder="Sua empresa" />
          </label>

          <label className="block space-y-2">
            <span className="text-sm text-gray-300">Email</span>
            <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full rounded-md border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-cyan-400" placeholder="seu@email.com" required />
          </label>

          <label className="block space-y-2">
            <span className="text-sm text-gray-300">Senha</span>
            <input type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} className="w-full rounded-md border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-cyan-400" placeholder="••••••••" required />
          </label>

          <button type="submit" disabled={loading} className="w-full rounded-md bg-cyan-400 px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-cyan-300 disabled:opacity-60">
            {loading ? 'CRIANDO...' : 'CRIAR CONTA'}
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-gray-400">
          Já tem conta? <Link href="/auth/login" className="text-cyan-300 hover:text-cyan-200">Entrar</Link>
        </p>
      </div>
    </section>
  )
}
