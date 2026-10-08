import Logo from './Logo'
import { EMAIL } from '../config'

const links = [
  ['Features', '/#features'],
  ['AI', '/#ai'],
  ['How it works', '/#how']
]

export default function Nav() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8" aria-label="Main">
        <a href="/" aria-label="Home"><Logo /></a>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => (
            <li key={href}><a href={href} className="text-base font-semibold text-white/80 transition hover:text-white">{label}</a></li>
          ))}
        </ul>
        <a href={`mailto:${EMAIL}?subject=Early%20access`} className="btn btn-mint !px-5 !py-2.5 text-sm sm:text-base">Early access</a>
      </nav>
    </header>
  )
}
