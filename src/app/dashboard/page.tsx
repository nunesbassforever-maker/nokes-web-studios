import Link from 'next/link'
import { dashboardProjects } from '@/lib/mock-data'

export default function ContaPage() {
  const userName = 'Nunes'
  const company = 'Nokes Web Studios'
  const email = 'nunes.bass.forever@gmail.com'

  return (
    <section className="mx-auto max-w-6xl px-4 py-28 sm:px-6 lg:px-8">
      <div className="mb-10">
        <p className="text-xs uppercase tracking-[0.24em] text-cyan-400">PERFIL</p>
        <h1 className="mt-4 text-4xl font-black md:text-5xl">Olá, {userName}</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_2fr]">
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-cyan-400/20 text-2xl font-bold text-cyan-300">N</div>
          <div className="space-y-5 text-sm text-gray-300">
            <div>
              <span className="block text-xs uppercase tracking-[0.2em] text-gray-500">Empresa</span>
              <span className="mt-1 block text-base text-white">{company}</span>
            </div>
            <div>
              <span className="block text-xs uppercase tracking-[0.2em] text-gray-500">Email</span>
              <span className="mt-1 block text-base text-white">{email}</span>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Projetos</h2>
            <span className="text-sm text-cyan-300">{dashboardProjects.length} projetos</span>
          </div>

          <div className="space-y-4">
            {dashboardProjects.map((project) => (
              <div key={project.id} className="rounded-xl border border-white/10 bg-black/30 p-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-semibold text-white">{project.name}</p>
                    <p className="text-xs uppercase tracking-[0.18em] text-gray-400">{project.category}</p>
                  </div>
                  <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2 py-1 text-[10px] uppercase tracking-[0.16em] text-cyan-300">{project.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 text-right">
        <Link href="/dashboard" className="rounded-md bg-cyan-400 px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-black">Ver dashboard</Link>
      </div>
    </section>
  )
}
