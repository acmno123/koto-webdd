'use client'
import Link from 'next/link'

export default function Navbar(){
  return (
    <nav className="w-full bg-white/60 backdrop-blur sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-kotoBlue rounded-full flex items-center justify-center text-white font-bold">K</div>
          <div className="text-lg font-bold text-kotoBlue">KotoBot</div>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/features" className="hover:text-kotoBlue">功能</Link>
          <Link href="/pricing" className="hover:text-kotoBlue">方案</Link>
          <Link href="/about" className="hover:text-kotoBlue">關於</Link>
          <a href="#" className="ml-4 px-4 py-2 bg-kotoBlue text-white rounded-md">邀請</a>
        </div>
      </div>
    </nav>
  )
}
