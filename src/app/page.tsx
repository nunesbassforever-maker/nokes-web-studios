'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowDown, Code, Palette, Target, Briefcase, Image as ImageIcon, Globe, ArrowRight } from 'lucide-react'
import { FadeIn } from '@/components/animations/FadeIn'
import { SERVICES, PROCESS_STEPS } from '@/lib/constants'
import { ContactForm } from '@/components/ContactForm'
import { PortfolioSection } from '@/components/PortfolioSection'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

const serviceIcons: { [key: string]: React.ReactNode } = {
  'palette': <Palette className="w-8 h-8" />,
  'code': <Code className="w-8 h-8" />,
  'target': <Target className="w-8 h-8" />,
  'briefcase': <Briefcase className="w-8 h-8" />,
  'image': <ImageIcon className="w-8 h-8" />,
  'globe': <Globe className="w-8 h-8" />,
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-nokes-accent opacity-[0.03] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-nokes-accent opacity-[0.03] rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(0, 217, 255, .05) 25%, rgba(0, 217, 255, .05) 26%, transparent 27%, transparent 74%, rgba(0, 217, 255, .05) 75%, rgba(0, 217, 255, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 217, 255, .05) 25%, rgba(0, 217, 255, .05) 26%, transparent 27%, transparent 74%, rgba(0, 217, 255, .05) 75%, rgba(0, 217, 255, .05) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px',
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <div className="inline-block mb-6">
              <div className="text-6xl md:text-8xl font-display font-bold tracking-tighter leading-none">
                <span className="text-white">NOKES</span>
              </div>
              <div className="text-lg md:text-xl text-gray-400 font-light tracking-widest mt-4">
                WEB STUDIOS
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mb-12"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              IDEIAS QUE VIRAM PRESENÇA.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Sites e experiências digitais desenvolvidos para transformar negócios em marcas que podem ser encontradas, lembradas e escolhidas.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link
              href="/#portfolio"
              className="px-8 py-3 bg-nokes-accent text-black font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              VER PORTFÓLIO
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/#contato"
              className="px-8 py-3 border border-nokes-accent text-nokes-accent font-semibold rounded-lg hover:bg-nokes-accent hover:text-black transition-all duration-300"
            >
              FALAR COM A NOKES
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-gray-400 text-sm tracking-widest"
            >
              <div>SCROLL TO EXPLORE</div>
              <ArrowDown className="w-4 h-4 mx-auto mt-2" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-20">
              <p className="text-nokes-accent font-semibold tracking-widest mb-4">O QUE FAZEMOS</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold">Serviços Premium</h2>
            </div>
          </FadeIn>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {SERVICES.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group relative p-8 rounded-lg border border-white border-opacity-10 hover:border-nokes-accent transition-all duration-300 bg-gradient-to-br from-white from-opacity-[0.02] to-transparent hover:from-opacity-[0.05]"
              >
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-nokes-accent to-transparent opacity-0 group-hover:opacity-[0.05] transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="mb-4 text-nokes-accent">
                    {serviceIcons[service.icon]}
                  </div>
                  <h3 className="text-xl font-display font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* Process Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-black to-black">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-20">
              <p className="text-nokes-accent font-semibold tracking-widest mb-4">METODOLOGIA</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Como Trabalhamos</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Um bom site não acontece. Ele é construído.
              </p>
            </div>
          </FadeIn>

          <div className="space-y-12">
            {PROCESS_STEPS.map((step, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="flex gap-8 md:gap-12">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-nokes-accent text-black font-display font-bold text-xl">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1 py-2">
                    <h3 className="text-2xl font-display font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{step.description}</p>
                  </div>
                  {index < PROCESS_STEPS.length - 1 && (
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-nokes-accent to-transparent" />
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <p className="text-nokes-accent font-semibold tracking-widest mb-4">QUEM SOMOS</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-12">Sobre a Nokes</h2>
            
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                A Nokes Web Studios nasceu com uma ideia simples: negócios de todos os tamanhos merecem uma presença digital que represente o valor do que fazem.
              </p>
              <p>
                Acreditamos que um site não deve ser apenas bonito. Ele precisa comunicar, facilitar o contato e criar uma experiência que faça sentido para quem está do outro lado da tela.
              </p>
              <p>
                Cada projeto é desenvolvido com atenção aos detalhes, performance e acessibilidade. Não criamos sites genéricos. Criamos presença digital.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact Section */}
      <ContactForm />
    </>
  )
}