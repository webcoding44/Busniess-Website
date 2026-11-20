import { Link } from 'react-router-dom'
import { navigation } from '../data/siteContent'
import { ArrowIcon } from './ArrowIcon'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__main page-shell">
        <div className="site-footer__intro">
          <Link className="brand brand--footer" to="/" aria-label="Vista Developments home">
            <span className="brand__mark" aria-hidden="true">V<span>+</span></span>
            <span className="brand__words"><strong>VISTA</strong><small>DEVELOPMENTS</small></span>
          </Link>
          <p>Places to live well,<br />designed around everyday life.</p>
        </div>
        <div className="site-footer__column">
          <p className="footer-label">Explore</p>
          <div className="site-footer__links">
            {navigation.map((item) => <Link key={item.to} to={item.to}>{item.label}</Link>)}
          </div>
        </div>
        <div className="site-footer__contact">
          <p className="footer-label">Looking for your next home?</p>
          <Link className="footer-contact-link" to="/contact">Let’s talk <ArrowIcon diagonal /></Link>
          <p className="footer-note">Tell us what you are looking for and we’ll help you find the right next step.</p>
        </div>
      </div>
      <div className="site-footer__bottom page-shell">
        <span>© {new Date().getFullYear()} Vista Developments</span>
        <span>Modern living, thoughtfully realised.</span>
        <a href="#top" onClick={(event) => {
          event.preventDefault()
          const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
          window.scrollTo({ top: 0, behavior })
        }}>
          Back to top <ArrowIcon />
        </a>
      </div>
    </footer>
  )
}

export default Footer
