'use client'

import { useState } from 'react'

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || ''

export function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    whatsapp: '',
    projectType: '',
    message: '',
  })

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    console.log('Lead enviado:', form)
    alert('Projeto enviado! Em produção este formulário será enviado para o Supabase.')
  }

  const whatsappLink = WHATSAPP_NUMBER ? `https://wa.me/${WHATSAPP_NUMBER}` : 'https://wa.me/'

  return (
    <section id="contato" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-10">
        <div className="mb-10 text-center">
          <p className="text-xs uppercase tracking-[0.24em] text-cyan-400">CONTATO</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">VAMOS CONSTRUIR ALGO?</h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_1.4fr]">
          <div className="space-y-5 rounded-2xl bg-black/30 p-6">
            <p className="text-xl font-semibold text-white">Sua ideia merece uma presença que converte.</p>
            <p className="text-gray-300">Conte-nos o que precisa e a Nokes ajuda a transformar a sua presença digital em uma experiência clara, moderna e eficiente.</p>
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex rounded-md border border-cyan-400 px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300 transition hover:bg-cyan-400 hover:text-black">
              FALAR PELO WHATSAPP
            </a>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-5 md:grid-cols-2">
            <label className="space-y-2 md:col-span-1">
              <span className="text-sm text-gray-300">Nome</span>
              <input value={form.name} onChange={(e) => handleChange('name', e.target.value)} className="w-full rounded-md border border-white/10 bg-black/40 px-4 py-3 text-white outline-none ring-0 transition focus:border-cyan-400" placeholder="Seu nome" required />
            </label>

            <label className="space-y-2 md:col-span-1">
              <span className="text-sm text-gray-300">Email</span>
              <input type="email" value={form.email} onChange={(e) => handleChange('email', e.target.value)} className="w-full rounded-md border border-white/10 bg-black/40 px-4 py-3 text-white outline-none ring-0 transition focus:border-cyan-400" placeholder="seu@email.com" required />
            </label>

            <label className="space-y-2 md:col-span-1">
              <span className="text-sm text-gray-300">Empresa</span>
              <input value={form.company} onChange={(e) => handleChange('company', e.target.value)} className="w-full rounded-md border border-white/10 bg-black/40 px-4 py-3 text-white outline-none ring-0 transition focus:border-cyan-400" placeholder="Nome da empresa" />
            </label>

            <label className="space-y-2 md:col-span-1">
              <span className="text-sm text-gray-300">WhatsApp</span>
              <input value={form.whatsapp} onChange={(e) => handleChange('whatsapp', e.target.value)} className="w-full rounded-md border border-white/10 bg-black/40 px-4 py-3 text-white outline-none ring-0 transition focus:border-cyan-400" placeholder="(00) 00000-0000" />
            </label>

            <label className="space-y-2 md:col-span-2">
              <span className="text-sm text-gray-300">Tipo de projeto</span>
              <select value={form.projectType} onChange={(e) => handleChange('projectType', e.target.value)} className="w-full rounded-md border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-cyan-400">
                <option value="">Selecione</option>
                <option value="site-institucional">Site institucional</option>
                <option value="landing-page">Landing page</option>
                <option value="portfolio">Portfólio</option>
                <option value="ecommerce">E-commerce</option>
                <option value="manutencao">Manutenção</option>
              </select>
            </label>

            <label className="space-y-2 md:col-span-2">
              <span className="text-sm text-gray-300">Mensagem</span>
              <textarea value={form.message} onChange={(e) => handleChange('message', e.target.value)} rows={5} className="w-full rounded-md border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-cyan-400" placeholder="Descreva seu projeto" required />
            </label>

            <div className="md:col-span-2">
              <button type="submit" className="inline-flex rounded-md bg-cyan-400 px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-cyan-300">
                ENVIAR PROJETO
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
