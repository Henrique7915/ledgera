import Logo from './Logo'
import { NAME, EMAIL, TAGLINE } from '../config'

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-base font-medium text-white/60">{TAGLINE}.</p>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-white/45">Contact</h2>
          <a href={`mailto:${EMAIL}`} className="mt-3 block text-base font-semibold text-white hover:text-mint-300">{EMAIL}</a>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-white/45">Legal</h2>
          <ul className="mt-3 space-y-2 text-base font-semibold">
            <li><a href="/privacy" className="hover:text-mint-300">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-mint-300">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-6 text-center text-sm font-medium text-white/45">
        © {new Date().getFullYear()} {NAME}. All rights reserved. AI features are powered by Claude, a model by Anthropic.
      </div>
    </footer>
  )
}
