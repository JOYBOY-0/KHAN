import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CursorProvider } from './context/CursorContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CursorProvider>
      <App />
    </CursorProvider>
  </React.StrictMode>
)
