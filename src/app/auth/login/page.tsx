'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { PORTFOLIO_CATEGORIES } from '@/lib/constants'
import { portfolioItems } from '@/lib/mock-data'

export function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState('todos')
  const [projects, setProjects] = useState(portfolioItems)

  useEffect(() => {
    const filtered = selectedCategory === 'todos' ? portfolioItems : portfolioItems.filter((item) => item.category.toLowerCase().replace(/\s+/g, '') === selectedCategory)
    setProjects(filtered)
  }, [selectedCategory])

  return (
    <section id="portfolio" className="bg-black px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.26em] text-cyan-400">PORTFÓLIO</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">Projetos que fazem presença</h2>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {PORTFOLIO_CATEGORIES.map((category) => (
            <button
              type="button"
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition ${selectedCategory === category.id ? 'border-cyan-400 bg-cyan-400 text-black' : 'border-white/10 bg-white/5 text-white hover:border-cyan-400 hover:text-cyan-300'}`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="wait">
            {projects.map((project) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image src={project.image} alt={project.title} fill className="object-cover transition duration-500 hover:scale-105" />
                </div>
                <div className="space-y-4 p-6">
                  <div className="text-xs uppercase tracking-[0.2em] text-cyan-400">{project.category}</div>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-300">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="rounded-full border border-white/10 bg-black/30 px-2 py-1 text-[10px] uppercase tracking-[0.15em] text-gray-300">{tech}</span>
                    ))}
                  </div>
                  <Link href="/project/demo" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300 hover:text-cyan-200">
                    VER PROJETO <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
