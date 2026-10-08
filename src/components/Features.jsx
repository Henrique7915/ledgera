import { Users, CreditCard, Layers, Repeat, PieChart, WalletCards } from 'lucide-react'

const items = [
  { icon: Users, title: 'Built for two', text: 'One shared view of the household with separate logins, so couples see the same picture without sharing a password.', color: 'bg-violet-100 text-violet-600' },
  { icon: CreditCard, title: 'Invoices that make sense', text: 'Card invoices are calculated from each purchase and the card\'s closing day. Pay one and your balance stays honest.', color: 'bg-mint-300/40 text-mint-500' },
  { icon: Layers, title: 'Installments, done right', text: 'Split a purchase into up to 24 monthly installments and edit one, the next ones, or all of them.', color: 'bg-sun/30 text-[#9A6B00]' },
  { icon: Repeat, title: 'Recurring bills', text: 'Rent, subscriptions and salary appear every month on their own, with protection against duplicates.', color: 'bg-coral/20 text-[#D63A55]' },
  { icon: PieChart, title: 'Budgets and reports', text: 'See where the money goes by category, compare six months, and set a monthly budget per category.', color: 'bg-violet-100 text-violet-600' },
  { icon: WalletCards, title: 'Made for Brazil', text: 'Portuguese, reais, card closing days and the way Brazilian banks structure statements and installments.', color: 'bg-mint-300/40 text-mint-500' }
]

export default function Features() {
  return (
    <section id="features" className="bg-violet-50/60">
      <div className="section">
        <div className="max-w-2xl">
          <span className="eyebrow">The app</span>
          <h2 className="h2 mt-5">Everything a shared budget needs. Nothing it doesn't.</h2>
          <p className="mt-4 text-lg font-medium text-ink/65">A calm, fast web app that installs on your phone like a native one.</p>
        </div>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, text, color }) => (
            <li key={title} className="rounded-3xl bg-white p-7 shadow-card ring-1 ring-violet-100 transition hover:-translate-y-1">
              <span className={`grid h-12 w-12 place-items-center rounded-2xl ${color}`}><Icon size={24} aria-hidden="true" /></span>
              <h3 className="mt-5 text-xl font-extrabold">{title}</h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-ink/65">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
