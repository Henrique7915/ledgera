import { ArrowRight, ShieldCheck } from 'lucide-react'
import Nav from './Nav'
import PhoneMock from './PhoneMock'
import { EMAIL } from '../config'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#2A1B8F] via-night to-ink text-white">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-violet-500/30 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-52 -left-32 h-[480px] w-[480px] rounded-full bg-mint-400/15 blur-3xl" aria-hidden="true" />
      <Nav />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pb-28 pt-32 sm:px-8 lg:grid-cols-[1.1fr_.9fr] lg:pb-28 lg:pt-40">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-bold text-mint-300 ring-1 ring-white/15">
            <span className="h-2 w-2 rounded-full bg-mint-400" aria-hidden="true" /> Built with Claude
          </p>
          <h1 className="mt-6 text-[2.6rem] font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Your household money, <span className="bg-gradient-to-r from-mint-300 to-mint-500 bg-clip-text text-transparent">finally clear.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-white/75 sm:text-xl">
            Drop in a credit-card statement. Claude reads it, extracts every purchase, sorts it into your categories and keeps you and your partner on the same page. You confirm, we save.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={`mailto:${EMAIL}?subject=Early%20access`} className="btn btn-mint">Get early access <ArrowRight size={20} aria-hidden="true" /></a>
            <a href="#ai" className="btn btn-ghost">See what Claude does</a>
          </div>
          <p className="mt-6 flex items-center gap-2 text-sm font-semibold text-white/60">
            <ShieldCheck size={18} className="text-mint-300" aria-hidden="true" /> Nothing is saved until a person confirms it.
          </p>
        </div>
        <PhoneMock />
      </div>
      <p className="relative pb-5 text-center text-xs font-medium text-white/40">Screens show illustrative sample data.</p>
    </section>
  )
}
