'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/lib/constants'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition-all ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="text-2xl font-black tracking-[0.18em] text-white">
            NOKES
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((item) => (
              <Link key={item.href} href={item.href} className="text-xs font-medium tracking-[0.18em] text-gray-300 transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link href="/dashboard" className="rounded-md bg-cyan-400 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-cyan-300">
              ÁREA DO CLIENTE
            </Link>
          </div>

          <button
            type="button"
            aria-label="Abrir menu"
            className="rounded-md border border-white/10 p-2 md:hidden"
            onClick={() => setIsOpen((v) => !v)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isOpen && (
          <nav className="space-y-4 border-t border-white/10 pb-5 pt-4 md:hidden">
            {NAV_LINKS.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)} className="block text-sm text-gray-300 hover:text-white">
                {item.label}
              </Link>
            ))}
            <Link href="/dashboard" onClick={() => setIsOpen(false)} className="mt-4 block rounded-md bg-cyan-400 px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.18em] text-black">
              ÁREA DO CLIENTE
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
