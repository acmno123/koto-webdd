'use client'
import { motion } from 'framer-motion';

const items = [
  {title: '公告系統', desc: '管理員可一鍵發布公告'},
  {title: '梗圖 / 笑話', desc: '快速抓取流行梗圖與笑話'},
  {title: 'AI 聊天', desc: '整合 AI 對話系統，陪你聊天'},
  {title: '音樂播放', desc: '在語音頻道播放音樂'},
  {title: '天氣查詢', desc: '快速查看城市天氣'},
  {title: '等級系統', desc: '提升社群互動與參與度'},
]

export default function Features(){
  return (
    <section id="features" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">功能總覽</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <motion.div key={idx} initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.5 }} className="p-6 bg-white rounded-xl shadow">
              <h3 className="font-semibold text-lg text-kotoBlue">{it.title}</h3>
              <p className="mt-2 text-slate-600">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
