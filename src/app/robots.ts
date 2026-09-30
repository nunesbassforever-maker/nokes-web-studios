import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://nokes.com.br', lastModified: new Date() },
    { url: 'https://nokes.com.br/#sobre', lastModified: new Date() },
    { url: 'https://nokes.com.br/#servicos', lastModified: new Date() },
    { url: 'https://nokes.com.br/#portfolio', lastModified: new Date() },
    { url: 'https://nokes.com.br/#contato', lastModified: new Date() },
  ]
}
