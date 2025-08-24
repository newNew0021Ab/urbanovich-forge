import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = process.env.VERCEL_URL 
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000'

  const services = ['vorota', 'perila', 'mebel', 'mangaly']
  const cases = ['provence-estate', 'loft-center', 'country-club']
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/portfolio</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/services</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/cases</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/about</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/contact</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/order</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>0.8</priority>
  </url>
  ${services.map(service => `
  <url>
    <loc>${baseUrl}/services/${service}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>0.8</priority>
  </url>`).join('')}
  ${cases.map(caseSlug => `
  <url>
    <loc>${baseUrl}/cases/${caseSlug}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <priority>0.6</priority>
  </url>`).join('')}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}