import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navigation from './components/Navigation.jsx'
import Footer from './components/Footer.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navigation />
    <App />
    <Footer />
  </StrictMode>,
)
