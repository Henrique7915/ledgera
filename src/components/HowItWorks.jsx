const steps = [
  ['1', 'Share a statement', 'Upload the PDF your bank sends, from any of the banks you use.'],
  ['2', 'Claude reads it', 'Merchants, dates, amounts and installments are extracted and matched to your categories.'],
  ['3', 'You confirm', 'Review a plain-language summary. Only approved purchases reach your ledger.']
]

export default function HowItWorks() {
  return (
    <section id="how" className="section">
      <div className="mx-auto max-w-2xl text-center">
        <span className="eyebrow">How it works</span>
        <h2 className="h2 mt-5">From a messy PDF to a clean ledger in three steps</h2>
      </div>
      <ol className="mt-14 grid gap-6 md:grid-cols-3">
        {steps.map(([n, title, text]) => (
          <li key={n} className="relative rounded-3xl bg-ink p-8 text-white">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-mint-400 text-xl font-extrabold text-ink">{n}</span>
            <h3 className="mt-6 text-2xl font-extrabold">{title}</h3>
            <p className="mt-2 text-base font-medium leading-relaxed text-white/70">{text}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
