import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Кузнечная мастерская Сергея Урбановича | Премиальная ковка в Гродно',
  description: 'Эксклюзивные кованые изделия ручной работы. Ворота, перила, мебель, мангалы. Работаем по всей Беларуси. 18+ лет опыта.',
  keywords: 'ковка, кованые изделия, ворота, перила, мебель, мангалы, Гродно, Беларусь, художественная ковка',
  openGraph: {
    title: 'Кузнечная мастерская Сергея Урбановича',
    description: 'Премиальная художественная ковка ручной работы',
    type: 'website',
    locale: 'ru_RU',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}