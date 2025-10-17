export default function Pricing() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-4xl p-6">
        <h1 className="text-3xl font-bold text-kotoBlue mb-6">方案與價格</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-xl shadow text-center">
            <h3 className="font-semibold">免費</h3>
            <p className="mt-2 text-slate-600">$0 / 月</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow text-center">
            <h3 className="font-semibold">進階</h3>
            <p className="mt-2 text-slate-600">$5 / 月</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow text-center">
            <h3 className="font-semibold">專業</h3>
            <p className="mt-2 text-slate-600">$10 / 月</p>
          </div>
        </div>
      </div>
    </div>
  )
}
