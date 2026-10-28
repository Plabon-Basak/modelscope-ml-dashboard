import { Menu } from 'lucide-react'

function Header({ title, isMenuOpen, onOpenMenu }) {
  return (
    <header className="app-header">
      <button
        className="menu-button"
        type="button"
        onClick={onOpenMenu}
        aria-label="Open navigation"
        aria-controls="mobile-navigation"
        aria-expanded={isMenuOpen}
      >
        <Menu size={22} />
      </button>
      <div>
        <p className="header-eyebrow">ModelScope Dashboard</p>
        <h1>{title}</h1>
      </div>
    </header>
  )
}

export default Header
