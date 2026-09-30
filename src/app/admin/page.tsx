import { dashboardProjects } from '@/lib/mock-data'

export default function DashboardPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-28 sm:px-6 lg:px-8">
      <div className="mb-10">
        <p className="text-xs uppercase tracking-[0.24em] text-cyan-400">CLIENTE</p>
        <h1 className="mt-4 text-4xl font-black md:text-5xl">SEUS PROJETOS</h1>
      </div>

      <div className="space-y-6">
        {dashboardProjects.map((project) => (
          <div key={project.id} className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-bold">{project.name}</h2>
                <p className="mt-1 text-sm text-gray-400">{project.category}</p>
              </div>
              <div className="text-sm text-gray-300">
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-cyan-300">{project.status}</span>
              </div>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
              <div>
                <div className="mb-2 flex items-center justify-between text-sm text-gray-300">
                  <span>Progresso</span>
                  <span>{project.progress}%</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-white/5">
                  <div className="h-full rounded-full bg-cyan-400" style={{ width: `${project.progress}%` }} />
                </div>
              </div>
              <div className="text-sm text-gray-300">
                <p>Data: {project.startDate}</p>
                <p className="mt-2">Status: {project.status}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
