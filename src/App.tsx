import { About } from './components/About'
import { Contact } from './components/Contact'
import { DemoBar } from './components/DemoBar'
import { Facilities } from './components/Facilities'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { MobileActions } from './components/MobileActions'
import { Reviews } from './components/Reviews'
import { Training } from './components/Training'
import { WhyGef } from './components/WhyGef'
import { NotesProvider } from './lib/notes'

export default function App() {
  return (
    <NotesProvider>
      <a
        href="#contenido"
        className="sr-only z-[60] bg-signal-strong px-4 py-3 font-semibold text-white focus:not-sr-only focus:fixed focus:left-3 focus:top-3"
      >
        Saltar al contenido
      </a>
      <DemoBar />
      <Header />
      <main id="contenido">
        <Hero />
        <About />
        <Facilities />
        <Training />
        <WhyGef />
        <Reviews />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <MobileActions />
    </NotesProvider>
  )
}
