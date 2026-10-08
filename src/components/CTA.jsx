import { ArrowRight } from 'lucide-react'
import { APP_URL } from '../config'

export default function CTA() {
  return (
    <section className="px-5 pb-20 sm:px-8 sm:pb-28">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-violet-600 to-night px-6 py-16 text-center text-white sm:px-12 sm:py-20">
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-mint-400/25 blur-3xl" aria-hidden="true" />
        <h2 className="relative mx-auto max-w-2xl text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">Be one of the first households on board</h2>
        <p className="relative mx-auto mt-4 max-w-xl text-lg font-medium text-white/75">We are opening early access gradually. Tell us you are interested and we will write back.</p>
        <a href={APP_URL} className="btn btn-mint relative mt-8">Request early access <ArrowRight size={20} aria-hidden="true" /></a>
      </div>
    </section>
  )
}
