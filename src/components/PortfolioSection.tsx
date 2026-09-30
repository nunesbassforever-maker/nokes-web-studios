'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FadeIn } from './animations/FadeIn'
import { PORTFOLIO_CATEGORIES } from '@/lib/constants'
import { ArrowRight } from 'lucide-react'

interface Project {
  id: string
  name: string
  category: string
  description: string
  image: string
  technologies: string[]
  url?: string
}

const DEMO_PROJECTS: Project[] = [
  {
    id: '1',
    name: 'Clínica Odontológica Premium',
    category: 'odontologia',
    description: 'Site institucional com agendamento online integrado',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    url: '#',
  },
  {
    id: '2',
    name: 'Hamburgueria Artesanal',
    category: 'restaurantes',
    description: 'Landing page com cardápio digital e integração de delivery',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80',
    technologies: ['Next.js', 'Framer Motion', 'Stripe'],
    url: '#',
  },
  {
    id: '3',
    name: 'Pizzaria Famiglia',
    category: 'restaurantes',
    description: 'Plataforma de pedidos online com dashboard gerencial',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561d1b?w=800&q=80',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Supabase'],
    url: '#',
  },
  {
    id: '4',
    name: 'Barbearia Clássica',
    category: 'barbearia',
    description: 'Site com agendamento e portfólio de trabalhos',
    image: 'https://images.unsplash.com/photo-1621905167918-48416bd8575a?w=800&q=80',
    technologies: ['Next.js', 'Tailwind CSS', 'Google Calendar API'],
    url: '#',
  },
  {
    id: '5',
    name: 'E-commerce de Frutos do Mar',
    category: 'comercio',
    description: 'Plataforma de vendas com sistema de pagamento',
    image: 'https://images.unsplash.com/photo-1551632786-de41ec16a31d?w=800&q=80',
    technologies: ['Next.js', 'Shopify', 'React Query', 'Stripe'],
    url: '#',
  },
  {
    id: '6',
    name: 'Agência de Marketing',
    category: 'servicos',
    description: 'Portfólio digital com case studies interativos',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    technologies: ['Next.js', 'Framer Motion', 'Three.js'],
    url: '#',
  },
]

export function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState('todos')
  const [filteredProjects, setFilteredProjects] = useState(DEMO_PROJECTS)

  useEffect(() => {
    if (selectedCategory === 'todos') {
      setFilteredProjects(DEMO_PROJECTS)
    } else {
      setFilteredProjects(DEMO_PROJECTS.filter(p => p.category === selectedCategory))
    }
  }, [selectedCategory])

  return (
    <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-black to-black">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-nokes-accent font-semibold tracking-widest mb-4">TRABALHOS RECENTES</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold">Portfólio</h2>
          </div>
        </FadeIn>

        {/* Category Filter */}
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {PORTFOLIO_CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-nokes-accent text-black'
                    : 'border border-white border-opacity-20 text-white hover:border-nokes-accent'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="group relative rounded-lg overflow-hidden bg-dark-800 border border-white border-opacity-10 hover:border-nokes-accent transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-nokes-accent tracking-widest uppercase">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-display font-bold mb-2">{project.name}</h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-xs px-3 py-1 rounded bg-white bg-opacity-5 text-gray-300 border border-white border-opacity-10">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={project.url || '#'}
                    className="inline-flex items-center gap-2 text-nokes-accent font-semibold text-sm group/link hover:gap-3 transition-all"
                  >
                    VER PROJETO
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}