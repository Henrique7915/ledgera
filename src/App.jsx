import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import AISection from './components/AISection'
import Trust from './components/Trust'
import CTA from './components/CTA'
import Footer from './components/Footer'
import LegalPage from './components/LegalPage'
import privacy from './content/privacy.md?raw'
import terms from './content/terms.md?raw'
import { NAME, TAGLINE, DESCRIPTION } from './config'

export const ROUTES = {
  '/': { title: `${NAME} | ${TAGLINE}`, description: DESCRIPTION },
  '/privacy': { title: `Privacy Policy | ${NAME}`, description: `How ${NAME} handles your data.` },
  '/terms': { title: `Terms of Service | ${NAME}`, description: `The rules for using ${NAME}.` }
}

export default function App({ path }) {
  if (path === '/privacy') return <LegalPage title="Privacy Policy" md={privacy} />
  if (path === '/terms') return <LegalPage title="Terms of Service" md={terms} />
  return (
    <>
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <AISection />
        <Trust />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
