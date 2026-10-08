import { ScanText, Tags, FileText, MessagesSquare, Zap, Bot, Sparkles, Wrench } from 'lucide-react'

const STATUS = {
  live: { label: 'Working today', cls: 'bg-mint-400 text-ink' },
  dev: { label: 'In development', cls: 'bg-sun text-ink' },
  plan: { label: 'Planned', cls: 'bg-white/15 text-white ring-1 ring-white/25' }
}

const items = [
  { icon: ScanText, status: 'live', title: 'Entity extraction', text: 'Claude reads credit-card statement PDFs and pulls out merchant, date, amount and installment (3 of 10) for every purchase.', note: 'Today this runs as a guided workflow run by us, with a person confirming each result.' },
  { icon: Tags, status: 'live', title: 'Smart categorization', text: 'Each purchase is matched to your own categories, so "PADARIA STA LUZIA" becomes Groceries without a rulebook.' },
  { icon: FileText, status: 'live', title: 'Plain-language summaries', text: 'Every statement comes with a short summary: the total, the biggest purchases, running installments and anything unusual.' },
  { icon: MessagesSquare, status: 'dev', title: 'Conversational assistant', text: 'Ask "how much did we spend on eating out vs. last month?" The assistant answers by calling tools over your ledger through an MCP server.' },
  { icon: Zap, status: 'plan', title: 'Capture from a message', text: 'Type or say "42 at the bakery on the Nubank card" and get a ready-to-confirm entry with category and card.' },
  { icon: Bot, status: 'plan', title: 'Autonomous agents', text: 'Scheduled agents that prepare your monthly review and flag unusual spending, with Claude Opus for harder multi-step reasoning.' }
]

function Badge({ status }) {
  const s = STATUS[status]
  return <span className={`rounded-full px-3 py-1 text-xs font-extrabold ${s.cls}`}>{s.label}</span>
}

function ChatMock() {
  return (
    <div className="rounded-3xl bg-white/[.07] p-5 ring-1 ring-white/15 backdrop-blur sm:p-7">
      <div className="mb-4 flex items-center justify-between gap-3">
        <p className="flex items-center gap-2 text-sm font-bold text-mint-300"><Sparkles size={16} aria-hidden="true" /> Assistant preview</p>
        <Badge status="dev" />
      </div>
      <div className="space-y-3">
        <p className="ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-violet-500 px-4 py-3 text-base font-semibold">How much did we spend on eating out in September vs August?</p>
        <p className="flex w-fit items-center gap-2 rounded-xl bg-black/25 px-3 py-2 font-mono text-xs text-mint-300">
          <Wrench size={14} aria-hidden="true" /> query_transactions(category="Eating out", month="2026-09")
        </p>
        <p className="max-w-[90%] rounded-2xl rounded-bl-md bg-white px-4 py-3 text-base font-semibold text-ink">
          You spent R$ 1.240 in September, R$ 180 less than in August. Most of it was weekend dinners.
        </p>
      </div>
      <p className="mt-4 text-xs font-medium text-white/50">Illustrative conversation. The assistant is being built and is not available yet.</p>
    </div>
  )
}

export default function AISection() {
  return (
    <section id="ai" className="relative overflow-hidden bg-gradient-to-b from-ink to-night text-white">
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-[700px] -translate-x-1/2 rounded-full bg-violet-500/25 blur-3xl" aria-hidden="true" />
      <div className="section relative">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-bold text-mint-300 ring-1 ring-white/15">
            <Sparkles size={16} aria-hidden="true" /> Where Claude works
          </span>
          <h2 className="h2 mt-5">Language models do the tedious part. You keep the final say.</h2>
          <p className="mt-4 text-lg font-medium text-white/70">
            We are open about what is live and what is still being built, so you always know what to expect.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, status, title, text, note }) => (
            <li key={title} className="flex flex-col rounded-3xl bg-white/[.07] p-7 ring-1 ring-white/12">
              <div className="flex items-center justify-between gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-mint-300"><Icon size={24} aria-hidden="true" /></span>
                <Badge status={status} />
              </div>
              <h3 className="mt-5 text-xl font-extrabold">{title}</h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-white/70">{text}</p>
              {note && <p className="mt-3 text-sm font-medium leading-relaxed text-white/45">{note}</p>}
            </li>
          ))}
        </ul>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Ask your money a question.</h3>
            <p className="mt-4 text-lg font-medium leading-relaxed text-white/70">
              Instead of digging through filters, you will be able to just ask. The assistant uses tool calls to look up your real numbers, so answers come from your ledger and not from guesswork.
            </p>
          </div>
          <ChatMock />
        </div>
      </div>
    </section>
  )
}
