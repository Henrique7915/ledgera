import { ShoppingBasket, Car, Utensils, HeartPulse, FileText, Sparkles, TrendingDown } from 'lucide-react'

const rows = [
  { icon: ShoppingBasket, name: 'Grocery market', cat: 'Groceries', amount: '− R$ 312,40', tint: 'bg-mint-400/20 text-mint-300' },
  { icon: Utensils, name: 'Pizza night (2/3)', cat: 'Eating out', amount: '− R$ 86,00', tint: 'bg-sun/20 text-sun' },
  { icon: Car, name: 'Fuel', cat: 'Transport', amount: '− R$ 190,00', tint: 'bg-coral/20 text-coral' },
  { icon: HeartPulse, name: 'Pharmacy', cat: 'Health', amount: '− R$ 64,90', tint: 'bg-violet-200/20 text-violet-200' }
]

export default function PhoneMock() {
  return (
    <div className="relative mx-auto w-[300px] sm:w-[330px]">
      <div className="absolute -inset-10 rounded-full bg-violet-500/40 blur-3xl" aria-hidden="true" />

      <div className="relative rounded-[44px] bg-[#05051a] p-3 shadow-phone">
        <div className="overflow-hidden rounded-[34px] bg-gradient-to-b from-[#1b1760] to-[#0d0b34] px-4 pb-5 pt-9 text-white">
          <div className="mx-auto mb-4 h-1.5 w-20 rounded-full bg-white/15" aria-hidden="true" />
          <p className="text-sm font-semibold text-white/60">Household balance</p>
          <p className="mt-1 text-4xl font-extrabold tracking-tight">R$ 8.420<span className="text-xl text-white/60">,35</span></p>
          <div className="mt-3 flex gap-2 text-xs font-bold">
            <span className="rounded-full bg-mint-400/20 px-2.5 py-1 text-mint-300">+ R$ 6.800 in</span>
            <span className="rounded-full bg-coral/20 px-2.5 py-1 text-coral">− R$ 3.115 out</span>
          </div>

          <div className="mt-5 rounded-2xl bg-white/[.07] p-3.5">
            <div className="flex items-center justify-between text-sm font-bold">
              <span>By category</span>
              <span className="flex items-center gap-1 text-xs text-mint-300"><TrendingDown size={14} aria-hidden="true" /> 8% vs last mo.</span>
            </div>
            <div className="mt-3 flex h-2.5 overflow-hidden rounded-full">
              <span className="w-[38%] bg-violet-500" /><span className="w-[24%] bg-mint-400" /><span className="w-[20%] bg-sun" /><span className="w-[18%] bg-coral" />
            </div>
          </div>

          <ul className="mt-4 space-y-2.5">
            {rows.map(({ icon: Icon, name, cat, amount, tint }) => (
              <li key={name} className="flex items-center gap-3">
                <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${tint}`}><Icon size={19} aria-hidden="true" /></span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-bold">{name}</span>
                  <span className="block text-xs text-white/55">{cat}</span>
                </span>
                <span className="text-sm font-bold tabular-nums">{amount}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* floating cards */}
      <div className="absolute -left-24 -top-4 hidden w-56 animate-floaty rounded-2xl bg-white p-3.5 shadow-card sm:block">
        <div className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-violet-100 text-violet-600"><FileText size={18} aria-hidden="true" /></span>
          <div>
            <p className="text-sm font-extrabold text-ink">statement.pdf</p>
            <p className="text-xs font-semibold text-ink/55">23 purchases found</p>
          </div>
        </div>
      </div>
      <div className="absolute -right-10 -bottom-14 hidden w-52 animate-floaty rounded-2xl bg-white p-3.5 shadow-card [animation-delay:-3s] sm:block">
        <p className="flex items-center gap-1.5 text-xs font-bold text-violet-600"><Sparkles size={14} aria-hidden="true" /> Claude</p>
        <p className="mt-1 text-sm font-semibold leading-snug text-ink">Categorized 22 of 23. Please check 1 purchase.</p>
      </div>
    </div>
  )
}
