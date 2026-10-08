import { UserCheck, Lock, Ban } from 'lucide-react'

const items = [
  { icon: UserCheck, title: 'A person confirms every write', text: 'AI suggestions are drafts. Nothing reaches your ledger until you approve it.' },
  { icon: Ban, title: 'No selling, no ads', text: 'We never sell personal data and we do not use your data to train models.' },
  { icon: Lock, title: 'No bank passwords', text: 'We never ask for your bank login and do not connect to your bank accounts.' }
]

export default function Trust() {
  return (
    <section className="section">
      <div className="mx-auto max-w-2xl text-center">
        <span className="eyebrow">Trust</span>
        <h2 className="h2 mt-5">Your finances, your rules</h2>
      </div>
      <ul className="mt-12 grid gap-5 md:grid-cols-3">
        {items.map(({ icon: Icon, title, text }) => (
          <li key={title} className="rounded-3xl bg-violet-50 p-7 ring-1 ring-violet-100">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-violet-600 text-white"><Icon size={24} aria-hidden="true" /></span>
            <h3 className="mt-5 text-xl font-extrabold">{title}</h3>
            <p className="mt-2 text-base font-medium leading-relaxed text-ink/65">{text}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
