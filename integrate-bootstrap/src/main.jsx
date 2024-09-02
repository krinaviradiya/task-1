import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Index from './Componet/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Index/>
  </StrictMode>,
)
