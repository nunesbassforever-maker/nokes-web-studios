export const SITE_NAME = 'NOKES Web Studios'
export const SITE_DESCRIPTION = 'Nokes Web Studios — criação de sites profissionais, experiências digitais e presença online para empresas.'
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || ''
export const ADMIN_EMAIL = process.env.NEXT_PUBLIC_ADMIN_EMAIL || 'nunes.bass.forever@gmail.com'

export const NAV_LINKS = [
  { href: '/', label: 'INÍCIO' },
  { href: '/#sobre', label: 'SOBRE' },
  { href: '/#servicos', label: 'SERVIÇOS' },
  { href: '/#portfolio', label: 'PORTFÓLIO' },
  { href: '/#contato', label: 'CONTATO' },
]

export const SERVICES = [
  { id: 'web-design', title: 'WEB DESIGN', description: 'Interfaces pensadas para transformar atenção em confiança.', icon: 'palette' },
  { id: 'desenvolvimento', title: 'DESENVOLVIMENTO', description: 'Código robusto e performático que funciona em qualquer dispositivo.', icon: 'code' },
  { id: 'landing-pages', title: 'LANDING PAGES', description: 'Páginas otimizadas para converter visitantes em clientes.', icon: 'target' },
  { id: 'sites-institucionais', title: 'SITES INSTITUCIONAIS', description: 'Presença digital que representa o valor da sua empresa.', icon: 'briefcase' },
  { id: 'portfolios', title: 'PORTFÓLIOS', description: 'Showcase criativo para profissionais e artistas.', icon: 'image' },
  { id: 'presenca-digital', title: 'PRESENÇA DIGITAL', description: 'Estratégia completa de marca e comunicação visual.', icon: 'globe' },
]

export const PROCESS_STEPS = [
  { number: '01', title: 'CONVERSA', description: 'Entendemos seu negócio, desafios e objetivos.' },
  { number: '02', title: 'PLANEJAMENTO', description: 'Estratégia e estrutura do projeto definidas.' },
  { number: '03', title: 'DESIGN', description: 'Conceito visual desenvolvido e aprovado.' },
  { number: '04', title: 'DESENVOLVIMENTO', description: 'Construção do site com qualidade premium.' },
  { number: '05', title: 'REVISÃO', description: 'Testes, ajustes e otimizações finais.' },
  { number: '06', title: 'LANÇAMENTO', description: 'Seu site online e pronto para fazer conexões.' },
]

export const PORTFOLIO_CATEGORIES = [
  { id: 'todos', label: 'TODOS' },
  { id: 'odontologia', label: 'ODONTOLOGIA' },
  { id: 'restaurantes', label: 'RESTAURANTES' },
  { id: 'barbearia', label: 'BARBEARIA' },
  { id: 'comercio', label: 'COMÉRCIO' },
  { id: 'servicos', label: 'SERVIÇOS' },
  { id: 'outros', label: 'OUTROS' },
]
