'use client'
import { motion } from 'framer-motion';

export default function Hero(){
  return (
    <section className="relative overflow-hidden">
      <div className="bg-gradient-to-b from-kotoLight to-white">
        <div className="max-w-6xl mx-auto py-28 px-6 text-center">
          <motion.h1 initial={{ y:-20, opacity:0 }} animate={{ y:0, opacity:1 }} transition={{ duration:0.8 }} className="text-5xl md:text-6xl font-extrabold text-kotoBlue">
            KotoBot
          </motion.h1>
          <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.2 }} className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            KotoBot 是一隻結合趣味與實用的 Discord 機器人，支援公告、天氣、梗圖、AI 聊天與音樂。
          </motion.p>

          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.4 }} className="mt-8 flex justify-center gap-4">
            <a href="#" className="px-6 py-3 bg-kotoBlue text-white rounded-full font-semibold shadow hover:bg-blue-700">立即邀請</a>
            <a href="#features" className="px-6 py-3 border border-kotoBlue text-kotoBlue rounded-full font-semibold">功能總覽</a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
