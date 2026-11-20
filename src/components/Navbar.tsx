



import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navigation } from '../data/siteContent'
import { ArrowIcon } from './ArrowIcon'

type NavbarProps = {
  overHero?: boolean
}

function Navbar({ overHero = false }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  return (
    <header className={`site-header${overHero ? ' site-header--over-hero' : ' site-header--plain'}`}>
      <div className="site-header__inner page-shell">
        <Link className="brand" to="/" aria-label="Vista Developments home" onClick={() => setMenuOpen(false)}>
          <span className="brand__mark" aria-hidden="true">V<span>+</span></span>
          <span className="brand__words"><strong>VISTA</strong><small>DEVELOPMENTS</small></span>
        </Link>

        <button
          className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span /><span />
        </button>

        <nav
          aria-label="Main navigation"
          className={`primary-nav${menuOpen ? ' is-open' : ''}`}
          id="primary-navigation"
        >
          <div className="primary-nav__links">
            {navigation.map((item) => (
              <NavLink
                className={({ isActive }) => `primary-nav__link${isActive ? ' is-active' : ''}`}
                end={item.to === '/'}
                key={item.to}
                to={item.to}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
          <Link className="button button--nav" to="/contact" onClick={() => setMenuOpen(false)}>
            Request information <ArrowIcon />
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
