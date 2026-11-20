import { useEffect } from 'react'
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Services from './pages/Services'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { ArrowIcon } from './components/ArrowIcon'

gsap.registerPlugin(ScrollTrigger)






function RouteEffects() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    ScrollTrigger.refresh()
    const pageTitles: Record<string, string> = {
      '/': 'Vista Developments — Modern living, thoughtfully realised',
      '/about': 'About us — Vista Developments',
      '/services': 'Our approach — Vista Developments',
      '/projects': 'Properties — Vista Developments',
      '/contact': 'Contact — Vista Developments',
    }
    document.title = pageTitles[pathname] ?? 'Vista Developments — Modern living, thoughtfully realised'
  }, [pathname])

  return null
}

function NotFound() {
  return (
    <main className="not-found page-shell" id="main-content">
      <p className="eyebrow"><span /> Page not found</p>
      <h1>This address has moved.</h1>
      <p className="large-copy">Check the link or head back to the home page to continue exploring.</p>
      <Link className="button button--dark" to="/">Back to home <ArrowIcon /></Link>
    </main>
  )
}

function SiteLayout() {
  const { pathname } = useLocation()
  const hasPageHero = ['/', '/about', '/services', '/projects', '/contact'].includes(pathname)

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar overHero={hasPageHero} />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Services />} path="/services" />
        <Route element={<Projects />} path="/projects" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<NotFound />} path="*" />
      </Routes>
      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <RouteEffects />
      <SiteLayout />
    </BrowserRouter>
  )
}

export default App
