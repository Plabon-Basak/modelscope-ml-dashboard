import { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header.jsx'
import Sidebar from './Sidebar.jsx'

const pageTitles = {
  '/': 'Dashboard',
  '/comparison': 'Model Comparison',
  '/evaluation': 'Model Evaluation',
  '/experiments': 'Experiments',
  '/settings': 'Settings',
}

function DashboardLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const title = pageTitles[location.pathname] ?? 'ModelScope'


  return (
    <div className="dashboard-shell">
      <Sidebar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <div className="dashboard-main">
        <Header title={title} isMenuOpen={isMenuOpen} onOpenMenu={() => setIsMenuOpen(true)} />
        <main className="page-content" id="main-content"><Outlet /></main>
      </div>
    </div>
  )
}

export default DashboardLayout
