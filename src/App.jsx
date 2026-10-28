import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import DashboardLayout from './components/DashboardLayout.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Comparison from './pages/Comparison.jsx'
import Evaluation from './pages/Evaluation.jsx'
import Experiments from './pages/Experiments.jsx'
import Settings from './pages/Settings.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="comparison" element={<Comparison />} />
          <Route path="evaluation" element={<Evaluation />} />
          <Route path="experiments" element={<Experiments />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
