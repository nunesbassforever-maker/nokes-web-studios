'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function ResetPasswordPage() {
  const [email, setEmail] = useState('')

  return (
    <section className="mx-auto max-w-md px-4 py-28 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
        <p className="text-xs uppercase tracking-[0.22em] text-cyan-400">RECUPERAR SENHA</p>
        <h1 className="mt-4 text-4xl font-black">Redefinir senha</h1>

        <form className="mt-8 space-y-5">
          <label className="block space-y-2">
            <span className="text-sm text-gray-300">Email</span>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-md border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-cyan-400" placeholder="seu@email.com" required />
          </label>

          <button type="submit" className="w-full rounded-md bg-cyan-400 px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-cyan-300">
            ENVIAR LINK
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-gray-400">
          <Link href="/auth/login" className="text-cyan-300 hover:text-cyan-200">Voltar para login</Link>
        </p>
      </div>
    </section>
  )
}
