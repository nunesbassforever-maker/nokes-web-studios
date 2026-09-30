import { adminStats } from '@/lib/mock-data'

export default function AdminPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8">
      <div className="mb-10">
        <p className="text-xs uppercase tracking-[0.24em] text-cyan-400">ADMIN</p>
        <h1 className="mt-4 text-4xl font-black md:text-5xl">Dashboard administrativo</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-6">
        {[
          ['Clientes', adminStats.clients],
          ['Projetos', adminStats.projects],
          ['Ativos', adminStats.activeProjects],
          ['Concluídos', adminStats.completedProjects],
          ['Leads', adminStats.leads],
          ['Mensagens', adminStats.messages],
        ].map(([label, value]) => (
          <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400">{label}</p>
            <p className="mt-4 text-3xl font-black text-white">{value}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
        <h2 className="mb-4 text-2xl font-bold">Ações rápidas</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <button className="rounded-md border border-white/10 bg-black/40 px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white hover:border-cyan-400 hover:text-cyan-300">Criar projeto</button>
          <button className="rounded-md border border-white/10 bg-black/40 px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white hover:border-cyan-400 hover:text-cyan-300">Editar portfólio</button>
          <button className="rounded-md border border-white/10 bg-black/40 px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white hover:border-cyan-400 hover:text-cyan-300">Ver leads</button>
        </div>
      </div>
    </section>
  )
}
