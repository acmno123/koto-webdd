import '/styles/globals.css'
import Navbar from '../components/Navbar'

export const metadata = {
  title: 'KotoBot 官方網站',
  description: 'KotoBot — 可愛又聰明的 Discord 小幫手'
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant">
      <body className="bg-white text-slate-900">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
