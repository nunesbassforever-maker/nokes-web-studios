import { notFound } from 'next/navigation'
import { dashboardProjects } from '@/lib/mock-data'

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = dashboardProjects.find((item) => item.id === params.id) || null

  if (!project) return notFound()

  return (
    <section className="mx-auto max-w-5xl px-4 py-28 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
        <p className="text-xs uppercase tracking-[0.2em] text-cyan-400">{project.category}</p>
        <h1 className="mt-4 text-4xl font-black md:text-5xl">{project.name}</h1>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6 text-gray-300">
            <div>
              <h2 className="mb-3 text-xl font-bold text-white">Descrição</h2>
              <p>Site institucional premium com foco em comunicação, conforto visual e conversão de leads.</p>
            </div>
            <div>
              <h2 className="mb-3 text-xl font-bold text-white">Problema</h2>
              <p>O cliente precisava transmitir confiança, profissionalismo e uma presença digital consistente.</p>
            </div>
            <div>
              <h2 className="mb-3 text-xl font-bold text-white">Solução</h2>
              <p>Estrutura visual moderna, experiência mais clara e comunicação com foco em conversão.</p>
            </div>
          </div>

          <aside className="space-y-5 rounded-xl border border-white/10 bg-black/40 p-5">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Status</p>
              <p className="mt-2 text-lg font-semibold text-white">{project.status}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Progresso</p>
              <p className="mt-2 text-lg font-semibold text-white">{project.progress}%</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Cronograma</p>
              <p className="mt-2 text-white">6 semanas</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Tecnologias</p>
              <p className="mt-2 text-white">Next.js, TypeScript, Supabase</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
