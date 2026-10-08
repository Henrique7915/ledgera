import { NAME } from '../config'

export function LogoMark({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
      <defs>
        <linearGradient id="lg-mark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8A6BFF" />
          <stop offset="1" stopColor="#4A28D1" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="18" fill="url(#lg-mark)" />
      <path d="M22 14v28a4 4 0 0 0 4 4h18" fill="none" stroke="#fff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="42" cy="22" r="5.5" fill="#2EE6A6" />
    </svg>
  )
}

export default function Logo({ dark = false }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <LogoMark />
      <span className={`text-2xl font-extrabold tracking-tight ${dark ? 'text-ink' : 'text-white'}`}>{NAME}</span>
    </span>
  )
}
