import Logo from './Logo'
import Footer from './Footer'
import { fill } from '../config'

// Renderizador minimo: "## titulo", listas com "- " e **negrito**.
function inline(text) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') ? <strong key={i} className="font-bold text-ink">{part.slice(2, -2)}</strong> : part
  )
}

function render(md) {
  const blocks = []
  let list = null
  for (const raw of fill(md).split('\n')) {
    const line = raw.trimEnd()
    if (line.startsWith('- ')) {
      if (!list) { list = []; blocks.push({ type: 'ul', items: list }) }
      list.push(line.slice(2))
      continue
    }
    list = null
    if (!line) continue
    if (line.startsWith('## ')) blocks.push({ type: 'h2', text: line.slice(3) })
    else blocks.push({ type: 'p', text: line })
  }
  return blocks.map((b, i) => {
    if (b.type === 'h2') return <h2 key={i} className="mt-10 text-2xl font-extrabold text-ink">{b.text}</h2>
    if (b.type === 'ul') return <ul key={i} className="mt-3 list-disc space-y-2 pl-6">{b.items.map((t, j) => <li key={j}>{inline(t)}</li>)}</ul>
    return <p key={i} className="mt-3">{inline(b.text)}</p>
  })
}

export default function LegalPage({ title, md }) {
  return (
    <>
      <header className="bg-gradient-to-br from-[#2A1B8F] to-ink">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-5 sm:px-8">
          <a href="/" aria-label="Home"><Logo /></a>
          <a href="/" className="text-base font-semibold text-white/80 hover:text-white">Back to home</a>
        </div>
        <h1 className="mx-auto max-w-3xl px-5 pb-12 pt-6 text-4xl font-extrabold tracking-tight text-white sm:px-8 sm:text-5xl">{title}</h1>
      </header>
      <main className="mx-auto max-w-3xl px-5 py-12 text-lg font-medium leading-relaxed text-ink/75 sm:px-8">{render(md)}</main>
      <Footer />
    </>
  )
}
