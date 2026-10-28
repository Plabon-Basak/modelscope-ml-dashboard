import { NavLink } from 'react-router-dom'
import {
  BarChart3,
  BrainCircuit,
  FlaskConical,
  Gauge,
  Settings,
  SlidersHorizontal,
  X,
} from 'lucide-react'

const navigation = [
  { label: 'Dashboard', to: '/', icon: Gauge, end: true },
  { label: 'Model Comparison', to: '/comparison', icon: BarChart3 },
  { label: 'Model Evaluation', to: '/evaluation', icon: SlidersHorizontal },
  { label: 'Experiments', to: '/experiments', icon: FlaskConical },
  { label: 'Settings', to: '/settings', icon: Settings },
]

function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <button
          className="sidebar-backdrop"
          type="button"
          aria-label="Close navigation"
          onClick={onClose}
        />
      )}
      <aside id="mobile-navigation" className={`sidebar ${isOpen ? 'sidebar-open' : ''}`} aria-label="Primary navigation">
        <div className="sidebar-brand-row">
          <NavLink className="brand" to="/" onClick={onClose} aria-label="ModelScope dashboard">
            <span className="brand-mark" aria-hidden="true">
              <BrainCircuit size={22} strokeWidth={2} />
            </span>
            <span>ModelScope</span>
          </NavLink>
          <button className="sidebar-close" type="button" onClick={onClose} aria-label="Close navigation">
            <X size={22} />
          </button>
        </div>

        <nav className="sidebar-nav">
          {navigation.map(({ label, to, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={onClose}
              className={({ isActive }) => `nav-link ${isActive ? 'nav-link-active' : ''}`}
            >
              <Icon size={19} strokeWidth={1.8} aria-hidden="true" />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  )
}

export default Sidebar
