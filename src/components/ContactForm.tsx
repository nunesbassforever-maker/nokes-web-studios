import Link from 'next/link'
import { Instagram, Linkedin, Github } from 'lucide-react'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <p className="font-display text-4xl font-black tracking-tight">NOKES</p>
          <p className="mt-4 text-xs uppercase tracking-[0.22em] text-gray-300">IDEIAS QUE VIRAM PRESENÇA.</p>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-gray-500">Links</p>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><Link href="/">Início</Link></li>
            <li><Link href="/#sobre">Sobre</Link></li>
            <li><Link href="/#servicos">Serviços</Link></li>
            <li><Link href="/#portfolio">Portfólio</Link></li>
            <li><Link href="/#contato">Contato</Link></li>
          </ul>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-gray-500">Redes</p>
          <div className="flex gap-4 text-gray-300">
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer"><Instagram className="h-5 w-5" /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noreferrer"><Linkedin className="h-5 w-5" /></a>
            <a href="https://github.com" aria-label="GitHub" target="_blank" rel="noreferrer"><Github className="h-5 w-5" /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-xs text-gray-500 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© {year} Nokes Web Studios. Todos os direitos reservados.</p>
          <p>SEU PRÓXIMO PASSO COMEÇA ONLINE.</p>
        </div>
      </div>
    </footer>
  )
}
