import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://cleaninga2.com'

  // Static pages
  const routes = ['', '/quote', '/directory', '/affiliates', '/blog'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Service pages
  const services = [
    'house-cleaning',
    'deep-cleaning',
    'office-cleaning',
    'carpet-cleaning',
    'window-cleaning',
    'move-in-out-cleaning',
    'post-construction-cleaning',
    'disinfection-services'
  ]

  const servicePages = services.map((service) => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Location pages (key cities in Michigan)
  const locations = [
    'ann-arbor',
    'detroit',
    'grand-rapids',
    'lansing',
    'flint',
    'troy',
    'livonia',
    'dearborn',
    'westland',
    'farmington-hills'
  ]

  const locationPages = locations.map((location) => ({
    url: `${baseUrl}/locations/${location}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  return [...routes, ...servicePages, ...locationPages]
}
